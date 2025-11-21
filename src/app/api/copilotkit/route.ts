import {
  CopilotRuntime,
  CopilotServiceAdapter,
  CopilotRuntimeChatCompletionRequest,
  CopilotRuntimeChatCompletionResponse,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;

class N8nAdapter implements CopilotServiceAdapter {
  async process(request: CopilotRuntimeChatCompletionRequest): Promise<CopilotRuntimeChatCompletionResponse> {
    const { messages, eventSource, threadId: threadIdFromRequest } = request;
    const lastMessage = messages[messages.length - 1];
    
    // Generate or use existing threadId
    const threadId = threadIdFromRequest || randomUUID();
    
    // Check if last message is a text message and has content
    if (!lastMessage || !lastMessage.isTextMessage() || !lastMessage.content) {
      return { threadId };
    }
    
    const userQuery = lastMessage.content;
    
    // Stream the response using eventSource
    await eventSource.stream(async (eventStream$) => {
      const messageId = randomUUID();
      
      // If no webhook is set, echo back a warning
      if (!N8N_WEBHOOK_URL) {
        eventStream$.sendTextMessage(
          messageId,
          "Error: N8N_WEBHOOK_URL is not set in environment variables."
        );
        eventStream$.complete();
        return;
      }
      try {
        // Call n8n webhook
        const response = await fetch(N8N_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: userQuery,
          }),
        });

        if (!response.ok) {
          throw new Error(`N8n responded with ${response.status}`);
        }

        const data = await response.json();
        
        // n8n returns an array: [{ "output": "..." }]
        const outputItem = Array.isArray(data) ? data[0] : data;
        const replyText = outputItem?.output || outputItem?.text || outputItem?.message || JSON.stringify(data);

        // Send content and end explicitly
        eventStream$.sendTextMessage(messageId, replyText);
        eventStream$.complete();

      } catch (error: any) {
        console.error("Error calling n8n:", error);
        // Ensure error message is properly ended
        eventStream$.sendTextMessageStart({ messageId });
        eventStream$.sendTextMessageContent({ 
          messageId, 
          content: "Sorry, I encountered an error connecting to the agent." 
        });
        eventStream$.sendTextMessageEnd({ messageId });
      }
    });

    return { threadId };
  }
}

const runtime = new CopilotRuntime();
const serviceAdapter = new N8nAdapter();

export const POST = async (req: NextRequest) => {
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    serviceAdapter,
    endpoint: "/api/copilotkit",
  });

  return handleRequest(req);
};

export const OPTIONS = async (req: NextRequest) => {
    return NextResponse.json({}, { status: 200 })
}

