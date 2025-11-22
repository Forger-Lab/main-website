// Shared storage for active event streams
// This ensures both /api/copilotkit and /api/publish_tool_call use the same Map instance

export interface StreamData {
  eventStream$: any; // RuntimeEventSubject
  cleanupTimer?: NodeJS.Timeout;
  createdAt: number;
}

// Store active event streams by messageId
// This allows n8n to send tool execution events to the correct client session
export const activeEventStreams = new Map<string, StreamData>();

// Cleanup orphaned streams after 5 minutes
const STREAM_TIMEOUT_MS = 5 * 60 * 1000;

export function cleanupStream(messageId: string) {
  const streamData = activeEventStreams.get(messageId);
  if (streamData?.cleanupTimer) {
    clearTimeout(streamData.cleanupTimer);
  }
  activeEventStreams.delete(messageId);
  console.log(`Cleaned up stream for messageId: ${messageId}`);
}

export function storeStream(messageId: string, eventStream$: any) {
  // Clear any existing timer for this messageId
  const existing = activeEventStreams.get(messageId);
  if (existing?.cleanupTimer) {
    clearTimeout(existing.cleanupTimer);
  }

  // Set up cleanup timer
  const cleanupTimer = setTimeout(() => {
    console.warn(`Stream ${messageId} timed out, cleaning up`);
    cleanupStream(messageId);
  }, STREAM_TIMEOUT_MS);

  activeEventStreams.set(messageId, {
    eventStream$,
    cleanupTimer,
    createdAt: Date.now(),
  });

  console.log(`Stored stream for messageId: ${messageId}, total active streams: ${activeEventStreams.size}`);
}

export function getStream(messageId: string): StreamData | undefined {
  return activeEventStreams.get(messageId);
}

