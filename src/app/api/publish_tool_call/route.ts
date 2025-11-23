import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";

// Import shared stream storage
// Note: In a production environment with multiple instances, consider using Redis or similar
import { getStream } from "../stream-storage";

interface ToolCallRequest {
  messageId: string;
  toolName: string;
  toolInput?: any;
  toolOutput?: any;
  status: "started" | "completed" | "error";
  message?: string;
  actionExecutionId?: string; // Optional: if n8n provides its own execution ID
}

export async function POST(req: NextRequest) {
  try {
    const body: ToolCallRequest = await req.json();

    const {
      messageId,
      toolName,
      toolInput,
      toolOutput,
      status,
      message,
      actionExecutionId,
    } = body;

    // Validate required fields
    if (!messageId || !toolName || !status) {
      return NextResponse.json(
        { error: "Missing required fields: messageId, toolName, and status are required" },
        { status: 400 }
      );
    }

    // Look up the active event stream
    console.log(`[publish_tool_call] Looking up stream for messageId: ${messageId}`);
    const streamData = getStream(messageId);

    if (!streamData) {
      const { activeEventStreams } = await import("../stream-storage");
      console.warn(`[publish_tool_call] No active stream found for messageId: ${messageId}`);
      console.log(`[publish_tool_call] Total active streams: ${activeEventStreams.size}`);
      if (activeEventStreams.size > 0) {
        console.log(`[publish_tool_call] Active messageIds: ${Array.from(activeEventStreams.keys()).join(", ")}`);
      }
      return NextResponse.json(
        { error: "No active stream found for this messageId. The stream may have already completed or timed out." },
        { status: 404 }
      );
    }

    console.log(`[publish_tool_call] Found stream for messageId: ${messageId}, processing tool event...`);

    const { eventStream$ } = streamData;

    // Generate or use provided actionExecutionId
    const executionId = actionExecutionId || randomUUID();

    try {
      // Send appropriate AG-UI tool execution events based on status
      if (status === "started") {
        // Tool execution started
        console.log("started action execution")
        eventStream$.sendActionExecutionStart({
          actionExecutionId: executionId,
          actionName: toolName,
          parentMessageId: messageId,
        });

        // Optionally send tool arguments if provided
        if (toolInput) {
          const argsString = typeof toolInput === "string" 
            ? toolInput 
            : JSON.stringify(toolInput);
          eventStream$.sendActionExecutionArgs({
            actionExecutionId: executionId,
            args: argsString,
          });
        }

        // Optionally send a human-readable message
        // if (message) {
        //   // Send as text message content if needed
        //   const statusMessageId = randomUUID();
        //   eventStream$.sendTextMessageStart({ messageId: statusMessageId, parentMessageId: messageId });
        //   eventStream$.sendTextMessageContent({ messageId: statusMessageId, content: message });
        //   eventStream$.sendTextMessageEnd({ messageId: statusMessageId });
        // }
      } else if (status === "completed") {
        console.log("completed action execution")
        // Tool execution completed
        eventStream$.sendActionExecutionEnd({ actionExecutionId: executionId });

        // Send the result
        const resultString = toolOutput !== undefined
          ? (typeof toolOutput === "string" ? toolOutput : JSON.stringify(toolOutput))
          : message || "Tool execution completed";

        eventStream$.sendActionExecutionResult({
          actionExecutionId: executionId,
          actionName: toolName,
          result: resultString,
        });
      } else if (status === "error") {
        // Tool execution error
        eventStream$.sendActionExecutionEnd({ actionExecutionId: executionId });

        const errorMessage = message || toolOutput?.message || "Tool execution failed";
        const errorCode = toolOutput?.code || "TOOL_EXECUTION_ERROR";

        eventStream$.sendActionExecutionResult({
          actionExecutionId: executionId,
          actionName: toolName,
          result: undefined,
          error: {
            code: errorCode,
            message: errorMessage,
          },
        });
      }

      return NextResponse.json({
        success: true,
        actionExecutionId: executionId,
        message: "Tool execution event sent successfully",
      });

    } catch (streamError: any) {
      console.error("Error sending tool execution event to stream:", streamError);
      return NextResponse.json(
        { error: "Failed to send event to stream", details: streamError.message },
        { status: 500 }
      );
    }

  } catch (error: any) {
    console.error("Error processing tool call request:", error);
    return NextResponse.json(
      { error: "Invalid request", details: error.message },
      { status: 400 }
    );
  }
}

export async function OPTIONS(req: NextRequest) {
  return NextResponse.json({}, { status: 200 });
}

