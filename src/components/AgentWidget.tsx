'use client';

import { useState, useRef, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Room, RoomEvent, Track } from 'livekit-client';

export default function AgentWidget() {
  const [connected, setConnected] = useState(false);
  const [transcripts, setTranscripts] = useState<any[]>([]);
  const [status, setStatus] = useState('Disconnected');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  
  const roomRef = useRef<Room | null>(null);
  const audioElementRef = useRef<HTMLAudioElement>(null);
  const transcriptContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll transcripts
  useEffect(() => {
    if (transcriptContainerRef.current) {
      transcriptContainerRef.current.scrollTop = transcriptContainerRef.current.scrollHeight;
    }
  }, [transcripts]);

  const connectToAgent = async (formData: FormData) => {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;

    if (!captchaToken) {
      alert('Please complete the captcha');
      return;
    }

    setStatus('Connecting...');

    try {
      // 1. Request Token from our Secure API
      const resp = await fetch('/api/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, captchaToken }),
      });

      const data = await resp.json();
      if (data.error) throw new Error(data.error);

      // 2. Connect to LiveKit
      const room = new Room({ adaptiveStream: true, dynacast: true });
      roomRef.current = room;

      await room.connect(data.url, data.token);
      setStatus('Connected');
      setConnected(true);

      // 3. Handle Audio - Set up listener for new tracks
      room.on(RoomEvent.TrackSubscribed, (track, pub, participant) => {
        if (track.kind === Track.Kind.Audio && !participant.isLocal) {
          // Only attach remote audio tracks (agent's voice)
          if (audioElementRef.current) {
            track.attach(audioElementRef.current);
            // Ensure audio plays
            audioElementRef.current.play().catch(err => {
              console.error('Error playing audio:', err);
            });
          }
        }
      });

      // Also check for already-subscribed tracks (in case agent joined first)
      room.remoteParticipants.forEach((participant) => {
        participant.trackPublications.forEach((trackPublication) => {
          if (trackPublication.track && 
              trackPublication.kind === Track.Kind.Audio && 
              audioElementRef.current) {
            trackPublication.track.attach(audioElementRef.current);
            audioElementRef.current.play().catch(err => {
              console.error('Error playing audio:', err);
            });
          }
        });
      });

      // 4. Handle Transcriptions
      room.on(RoomEvent.TranscriptionReceived, (segments, participant) => {
        const isAgent = participant && !participant.isLocal;
        const role = isAgent ? 'agent' : 'user';
        const speakerName = isAgent ? 'Agent' : 'You';

        setTranscripts((prev) => {
          const newTranscripts = [...prev];
          
          segments.forEach((seg) => {
            // Find if we already have this segment (by ID or rough timestamp/role match)
            const existingIndex = newTranscripts.findIndex(t => t.id === seg.id);
            
            if (existingIndex >= 0) {
              // Update existing segment (interim -> final)
              newTranscripts[existingIndex] = {
                ...newTranscripts[existingIndex],
                text: seg.text,
                isFinal: seg.final
              };
            } else {
              // New segment
              newTranscripts.push({
                id: seg.id,
                role,
                name: speakerName,
                text: seg.text,
                isFinal: seg.final
              });
            }
          });
          return newTranscripts;
        });
      });

      // 5. Enable Microphone
      await room.localParticipant.setMicrophoneEnabled(true);

    } catch (err: any) {
      console.error(err);
      alert(`Connection failed: ${err.message}`);
      setStatus('Error');
    }
  };

  const disconnect = async () => {
    if (roomRef.current) await roomRef.current.disconnect();
    setConnected(false);
    setStatus('Disconnected');
    setTranscripts([]);
  };

  if (connected) {
    return (
      <div className="w-full max-w-md mx-auto p-4 bg-white rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Live Agent</h2>
          <span className="text-green-600 text-sm">{status}</span>
        </div>

        {/* Transcript Display */}
        <div 
          ref={transcriptContainerRef}
          className="h-64 overflow-y-auto bg-gray-50 p-2 rounded border mb-4 space-y-2"
        >
          {transcripts.map((t) => (
            <div key={t.id} className={`text-sm ${t.role === 'agent' ? 'text-blue-600' : 'text-gray-800'}`}>
              <span className="font-bold">{t.name}: </span>
              <span className={t.isFinal ? '' : 'italic opacity-60'}>
                {t.text} {t.isFinal ? '' : '...'}
              </span>
            </div>
          ))}
        </div>

        {/* Audio Element for Agent Voice */}
        <audio 
          ref={audioElementRef} 
          autoPlay 
          playsInline
          style={{ display: 'none' }}
        />

        <button 
          onClick={disconnect}
          className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <form action={connectToAgent} className="w-full max-w-sm mx-auto p-6 bg-white rounded shadow space-y-4">
      <h2 className="text-xl font-bold text-center">Chat with AI</h2>
      
      <input name="name" placeholder="Your Name" className="w-full p-2 border rounded" required />
      <input name="email" type="email" placeholder="Your Email" className="w-full p-2 border rounded" required />
      
      <div className="flex justify-center">
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          onChange={setCaptchaToken}
        />
      </div>

      <button 
        type="submit"
        disabled={!captchaToken}
        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
      >
        Start Conversation
      </button>
    </form>
  );
}

