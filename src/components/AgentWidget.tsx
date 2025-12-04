'use client';

import { useState, useRef, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { 
  LiveKitRoom, 
  RoomAudioRenderer, 
  BarVisualizer,
  useVoiceAssistant,
  useRoomContext
} from '@livekit/components-react';
import { RoomEvent } from 'livekit-client';
import '@livekit/components-styles';

function ActiveRoom({ onDisconnect }: { onDisconnect: () => void }) {
  const { state, audioTrack } = useVoiceAssistant();
  const roomContext = useRoomContext();
  const [transcripts, setTranscripts] = useState<{id: string, text: string, isAgent: boolean}[]>([]);
  const transcriptContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!roomContext) return;

    const onTranscription = (segments: any[], participant: any) => {
      const isAgent = participant && !participant.isLocal;
      
      setTranscripts(prev => {
        const newMessages = [...prev];
        segments.forEach(seg => {
          const existingIdx = newMessages.findIndex(m => m.id === seg.id);
          if (existingIdx >= 0) {
            newMessages[existingIdx] = { ...newMessages[existingIdx], text: seg.text };
          } else {
            newMessages.push({
              id: seg.id,
              text: seg.text,
              isAgent
            });
          }
        });
        return newMessages;
      });
    };

    roomContext.on(RoomEvent.TranscriptionReceived, onTranscription);
    return () => {
      roomContext.off(RoomEvent.TranscriptionReceived, onTranscription);
    };
  }, [roomContext]);

  useEffect(() => {
    if (transcriptContainerRef.current) {
      transcriptContainerRef.current.scrollTop = transcriptContainerRef.current.scrollHeight;
    }
  }, [transcripts]);

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-[600px] border border-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex justify-between items-center shrink-0">
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${state === 'listening' ? 'bg-green-400 animate-pulse' : 'bg-white/50'}`} />
          <h2 className="text-white font-semibold text-lg">Live Agent</h2>
        </div>
        <button 
          onClick={onDisconnect}
          className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-full text-sm transition-colors"
        >
          End Call
        </button>
      </div>

      {/* Visualizer Area */}
      <div className="bg-white/50 h-48 flex items-center justify-center relative shrink-0 border-b border-gray-100">
        <div className="w-full px-8 h-24 [&>div]:!gap-1" style={{
          '--lk-va-bar-width': '6px',
          '--lk-fg': '#60a5fa', 
        } as React.CSSProperties}>
          <BarVisualizer 
            state={state}
            track={audioTrack}
            barCount={15}
            options={{ minHeight: 50 }}
          />
        </div>
        <div className="absolute bottom-2 text-gray-500 text-xs font-mono tracking-wider uppercase">
          {state === 'listening' ? 'Listening...' : state === 'speaking' ? 'Agent Speaking' : 'Standby'}
        </div>
      </div>

      {/* Chat Area */}
      <div ref={transcriptContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {transcripts.length === 0 && (
          <div className="text-center text-gray-400 text-sm mt-10">
            Start speaking to interact with the agent...
          </div>
        )}
        {transcripts.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.isAgent ? 'justify-start' : 'justify-end'}`}
          >
            <div 
              className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                msg.isAgent 
                  ? 'bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-100' 
                  : 'bg-blue-600 text-white rounded-tr-none shadow-md'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Audio Renderer (Hidden) */}
      <RoomAudioRenderer />
    </div>
  );
}

export default function AgentWidget() {
  const [token, setToken] = useState<string | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const connectToAgent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    if (!captchaToken) {
      alert('Please complete the captcha');
      return;
    }

    if (isConnecting) return;
    setIsConnecting(true);

    try {
      const resp = await fetch('/api/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, timezone, captchaToken }),
      });

      const data = await resp.json();
      if (data.error) throw new Error(data.error);

      setToken(data.token);
      setUrl(data.url);
    } catch (err: any) {
      console.error(err);
      alert(`Connection failed: ${err.message}`);
      setIsConnecting(false);
    }
  };

  const handleDisconnect = () => {
    setToken(null);
    setUrl(null);
    setIsConnecting(false);
    setCaptchaToken(null);
    recaptchaRef.current?.reset();
  };

  if (token && url) {
    return (
      <LiveKitRoom
        token={token}
        serverUrl={url}
        connect={true}
        audio={true}
        video={false}
        onDisconnected={handleDisconnect}
        className="w-full flex justify-center"
      >
        <ActiveRoom onDisconnect={handleDisconnect} />
      </LiveKitRoom>
    );
  }

  return (
    <form onSubmit={connectToAgent} className="w-full max-w-sm mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-100 space-y-6">
      {/* <div className="text-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Chat with AI
        </h2>
        <p className="text-gray-500 text-sm mt-2">Enter your details to start a voice session</p>
      </div> */}
      
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 ml-1">Name</label>
          <input 
            name="name" 
            placeholder="Your Name" 
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white" 
            required 
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 ml-1">Email</label>
          <input 
            name="email" 
            type="email" 
            placeholder="your@email.com" 
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white" 
            required 
          />
        </div>
      </div>
      
      <div className="flex justify-center py-2">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          onChange={setCaptchaToken}
        />
      </div>

      <button 
        type="submit"
        disabled={!captchaToken || isConnecting}
        className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none transition-all transform active:scale-[0.98]"
      >
        {isConnecting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Connecting...
          </span>
        ) : 'Start Conversation'}
      </button>
    </form>
  );
}
