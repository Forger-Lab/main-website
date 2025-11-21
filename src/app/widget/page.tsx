"use client";

import { CopilotKit } from "@copilotkit/react-core";
import { CopilotChat } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css"; 
import { useEffect } from "react";

export default function WidgetPage() {
  
  useEffect(() => {
    // Optional: Notify parent that widget is ready
    window.parent.postMessage({ type: "WIDGET_READY" }, "*");
    
    // Fix textarea height issue (textarea gets collapsed to 0px in iframe)
    const fixTextareaHeight = () => {
      const textareas = document.querySelectorAll('textarea');
      textareas.forEach((textarea: HTMLTextAreaElement) => {
        if (textarea.style.height === '0px' || textarea.style.maxHeight === '0px') {
          textarea.style.setProperty('height', 'auto', 'important');
          textarea.style.setProperty('max-height', 'none', 'important');
          textarea.style.setProperty('min-height', '40px', 'important');
        }
      });
    };
    
    // Run immediately and after delays to catch dynamically added textareas
    fixTextareaHeight();
    setTimeout(fixTextareaHeight, 100);
    setTimeout(fixTextareaHeight, 500);
    
    // Watch for new textareas being added
    const observer = new MutationObserver(fixTextareaHeight);
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => observer.disconnect();
  }, []);

  const handleClose = () => {
    window.parent.postMessage({ type: "CLOSE_WIDGET" }, "*");
  };

  return (
    <div className="h-screen w-screen bg-transparent relative">
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center transition-all"
        style={{ zIndex: 9999 }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <CopilotKit runtimeUrl="/api/copilotkit">
        <CopilotChat 
            labels={{
              title: "AI Assistant",
              initial: "How can I help you today?",
            }}
        />
      </CopilotKit>
      <style jsx global>{`
        /* Hide the trigger button since we are controlling it via iframe/script */
        .copilotKitButton {
            display: none !important;
        }
        /* Make chat take full height/width of the iframe */
        .copilotKitChat,
        .copilotKitChatWindow {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100% !important;
            height: 100% !important;
            max-width: none !important;
            border: none !important;
            box-shadow: none !important;
        }
        /* Fix collapsed textarea height issue in iframe */
        textarea[style*="height: 0px"],
        textarea[style*="max-height: 0px"] {
            height: auto !important;
            max-height: none !important;
            min-height: 40px !important;
        }
        /* User messages - white text */
        .copilotKitChat .copilotKitUserMessage,
        .copilotKitChat .copilotKitUserMessage *,
        .copilotKitChat [class*="UserMessage"],
        .copilotKitChat [class*="UserMessage"] * {
            color: #fff !important;
            -webkit-text-fill-color: #fff !important;
        }
        /* AI/Assistant messages - black text */
        .copilotKitChat .copilotKitMessage:not(.copilotKitUserMessage),
        .copilotKitChat .copilotKitMessage:not(.copilotKitUserMessage) *,
        .copilotKitChat [class*="AssistantMessage"],
        .copilotKitChat [class*="AssistantMessage"] *,
        .copilotKitChat [class*="AgentMessage"],
        .copilotKitChat [class*="AgentMessage"] * {
            color: #000 !important;
            -webkit-text-fill-color: #000 !important;
        }
      `}</style>
    </div>
  );
}

