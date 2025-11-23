# AG-UI Chat Widget Implementation Documentation

## Overview

This project implements a chat widget using **CopilotKit** (an implementation of the AG-UI protocol) that can be embedded on any website via a simple script tag. The widget connects to an n8n workflow backend through a custom adapter.

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [AG-UI Integration](#ag-ui-integration)
3. [Custom n8n Adapter](#custom-n8n-adapter)
4. [Widget Implementation](#widget-implementation)
5. [Embed Script](#embed-script)
6. [Known Issues & Caveats](#known-issues--caveats)
7. [File Structure](#file-structure)

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Host Website                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  <script src="/embed.js"></script>                   │  │
│  │  ↓ Creates iframe pointing to /widget                │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│              Next.js Application (/widget)                  │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  CopilotKit Frontend (React)                         │  │
│  │  - CopilotChat component                             │  │
│  │  - Full-page chat interface                          │  │
│  └──────────────────────────────────────────────────────┘  │
│                            ↓                                │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  /api/copilotkit (Next.js API Route)                 │  │
│  │  - Custom N8nAdapter                                 │  │
│  │  - Implements CopilotServiceAdapter interface        │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│              n8n Webhook                                    │
│  - Receives: { "query": "user message" }                   │
│  - Returns: [{ "output": "AI response" }]                  │
└─────────────────────────────────────────────────────────────┘
```

---

## AG-UI Integration

### What is AG-UI?

**AG-UI (Agent User Interaction Protocol)** is an open-source protocol for standardizing communication between AI agents and user interfaces. In this project, we use **CopilotKit**, which is a React implementation of the AG-UI protocol.

### Why CopilotKit?

CopilotKit provides:
- Pre-built React components (`CopilotChat`, `CopilotSidebar`)
- Built-in event streaming support
- Standardized message handling
- Easy integration with various AI backends

### Installation

```bash
npm install @copilotkit/react-core @copilotkit/react-ui @copilotkit/runtime
```

### Key Components

1. **CopilotKit Provider** (`@copilotkit/react-core`)
   - Wraps the application and provides runtime configuration
   - Connects to the backend API route

2. **CopilotChat** (`@copilotkit/react-ui`)
   - Full-page chat interface component
   - Handles message display, input, and streaming

3. **CopilotRuntime** (`@copilotkit/runtime`)
   - Server-side runtime for handling requests
   - Manages service adapters

---

## Custom n8n Adapter

### The Problem

CopilotKit expects an AI agent that can:
- Emit structured events (TextMessageStart, TextMessageContent, TextMessageEnd)
- Handle streaming responses
- Manage conversation state

However, n8n workflows are simple HTTP endpoints that:
- Accept a JSON payload
- Return a single JSON response
- Don't support streaming or event protocols

### The Solution: Custom Service Adapter

We created a custom `N8nAdapter` class that implements the `CopilotServiceAdapter` interface. This adapter acts as a bridge between CopilotKit's event-based protocol and n8n's simple request/response model.

### Implementation Details

**File**: `src/app/api/copilotkit/route.ts`

```typescript
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
      
      try {
        // Start the message stream
        eventStream$.sendTextMessageStart({ messageId });

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
        eventStream$.sendTextMessageContent({ messageId, content: replyText });
        eventStream$.sendTextMessageEnd({ messageId });

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
```

### How It Works

1. **Receives Request**: The adapter receives a `CopilotRuntimeChatCompletionRequest` containing:
   - `messages`: Array of conversation messages
   - `eventSource`: Object for streaming events back to the frontend
   - `threadId`: Optional conversation thread ID

2. **Extracts User Message**: Gets the last message from the conversation array and validates it's a text message.

3. **Calls n8n**: Makes a POST request to the n8n webhook URL with the user's query.

4. **Transforms Response**: Converts n8n's simple JSON response into AG-UI events:
   - `sendTextMessageStart({ messageId })` - Signals the start of a message
   - `sendTextMessageContent({ messageId, content })` - Sends the actual text
   - `sendTextMessageEnd({ messageId })` - Signals the end of the message

5. **Returns Response**: Returns a `CopilotRuntimeChatCompletionResponse` with the `threadId` for conversation continuity.

### n8n Request/Response Format

**Request Format:**
```json
{
  "query": "tell me a joke about black mermaids"
}
```

**Response Format:**
```json
[
  {
    "output": "You know, the toughest part about being a black mermaid..."
  }
]
```

The adapter handles the array response and extracts the `output` field.

### Environment Variable

Set `N8N_WEBHOOK_URL` in your `.env.local`:
```
N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/your-webhook-id
```

---

## Widget Implementation

### Widget Page

**File**: `src/app/widget/page.tsx`

The widget page is a standalone Next.js page that renders the full chat interface.

```typescript
export default function WidgetPage() {
  useEffect(() => {
    // Notify parent that widget is ready
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
      <button onClick={handleClose}>Close</button>
      <CopilotKit runtimeUrl="/api/copilotkit">
        <CopilotChat 
          labels={{
            title: "AI Assistant",
            initial: "How can I help you today?",
          }}
        />
      </CopilotKit>
    </div>
  );
}
```

### Key Features

1. **Full-Page Chat**: Uses `CopilotChat` instead of `CopilotSidebar` for a full-page experience
2. **Iframe Communication**: Uses `postMessage` API to communicate with parent window
3. **Height Fix**: JavaScript workaround for textarea height issue in iframes (see Caveats)
4. **Close Button**: Allows closing the widget from within the iframe

### Styling

The widget includes CSS to:
- Make the chat take full iframe dimensions
- Fix collapsed textarea height
- Style message colors (user = white, AI = black)
- Hide the default CopilotKit trigger button

---

## Embed Script

**File**: `public/embed.js`

The embed script is a vanilla JavaScript file that can be included on any website to add the chat widget.

### How It Works

1. **Creates Container**: Creates a fixed-position container at the bottom center of the page
2. **Creates Button**: Creates an elongated oval button with AI icon and "Ask me anything" text
3. **Creates Iframe**: Creates a fullscreen iframe (80% viewport) that loads the widget page
4. **Handles Toggle**: Shows/hides the iframe when button is clicked
5. **Listens for Close**: Listens for `CLOSE_WIDGET` messages from the iframe

### Button Design

- **Shape**: Elongated oval (240px × 64px)
- **Style**: White background with black border
- **Icon**: Three four-pointed stars (AI logo) on the left
- **Text**: "Ask me anything" in grey placeholder-style text
- **Position**: Bottom center of the page

### Iframe Configuration

- **Size**: 80vw × 80vh (80% of viewport)
- **Position**: Centered on screen
- **Sandbox**: Allows scripts, same-origin, forms, popups, modals
- **Styling**: Rounded corners, shadow, smooth transitions

### Usage

```html
<script src="https://your-domain.com/embed.js" data-widget-url="https://your-domain.com/widget"></script>
```

The `data-widget-url` attribute is optional and defaults to `http://localhost:3000/widget`.

---

## Known Issues & Caveats

### 1. Textarea Height Collapse in Iframe

**Issue**: The `AutoResizingTextarea` component from CopilotKit calculates height based on content, but in an iframe context, it initially sets `height: 0px` and `max-height: 0px`, making the textarea invisible.

**Solution**: 
- JavaScript that watches for textareas and fixes their height
- CSS rule targeting textareas with `height: 0px`
- MutationObserver to catch dynamically added textareas

**Location**: `src/app/widget/page.tsx` - `useEffect` hook

### 2. No Native Streaming Support

**Issue**: n8n workflows return a single JSON response, not a stream. This means we can't show "typing" indicators or stream the response character-by-character.

**Solution**: The adapter simulates streaming by:
1. Immediately sending `TextMessageStart`
2. Sending the full response as `TextMessageContent`
3. Immediately sending `TextMessageEnd`

This gives the appearance of a complete message without true streaming.

### 3. Conversation History

**Current Limitation**: The adapter only sends the current user message to n8n, not the full conversation history. This means:
- n8n doesn't have context from previous messages
- Each message is treated independently

**Future Improvement**: Could modify the adapter to send the full message history if n8n supports it.

### 4. Error Handling

**Current**: Basic error handling that shows a generic error message.

**Future Improvement**: Could add:
- Retry logic
- More specific error messages
- Fallback responses

### 5. Thread Management

**Current**: Thread IDs are generated but not persisted. Each page refresh starts a new conversation.

**Future Improvement**: Could store thread IDs in localStorage or sessionStorage for conversation continuity.

---

## File Structure

```
main-website/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── copilotkit/
│   │   │       └── route.ts          # Custom n8n adapter + API endpoint
│   │   ├── widget/
│   │   │   └── page.tsx              # Widget page (full-page chat)
│   │   └── layout.tsx                # Root layout
│   └── ...
├── public/
│   ├── embed.js                       # Embed script for third-party sites
│   └── test-widget.html              # Test page for widget
├── next.config.mjs                    # Next.js config (CORS/iframe headers)
└── package.json                       # Dependencies
```

### Key Files Explained

1. **`src/app/api/copilotkit/route.ts`**
   - Implements the `N8nAdapter` class
   - Handles POST requests from CopilotKit frontend
   - Bridges AG-UI protocol to n8n webhook

2. **`src/app/widget/page.tsx`**
   - React component that renders the chat interface
   - Includes height fix workaround
   - Handles iframe communication

3. **`public/embed.js`**
   - Vanilla JavaScript embed script
   - Creates button and iframe
   - Handles widget toggle

4. **`next.config.mjs`**
   - Configures CORS headers for API routes
   - Allows iframe embedding (X-Frame-Options)

---

## Configuration

### Environment Variables

Create a `.env.local` file:

```env
N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/your-webhook-id
```

### Next.js Configuration

The `next.config.mjs` includes headers to:
- Allow iframe embedding (`X-Frame-Options: ALLOWALL`)
- Enable CORS for API routes
- Allow necessary HTTP methods

---

## Testing

### Local Testing

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Test the widget directly:
   - Visit `http://localhost:3000/widget`

3. Test the embed script:
   - Visit `http://localhost:3000/test-widget.html`
   - Or include the script on any HTML page

### Production Deployment

1. Set `N8N_WEBHOOK_URL` environment variable
2. Deploy to your hosting platform (Vercel, etc.)
3. Update the embed script URL in `public/embed.js` if needed
4. Share the embed script URL with users

---

## Future Improvements

1. **Streaming Support**: If n8n adds streaming support, update adapter to stream responses
2. **Conversation History**: Send full message history to n8n for context
3. **Thread Persistence**: Store thread IDs for conversation continuity
4. **Better Error Handling**: More specific error messages and retry logic
5. **Customization**: Allow customization of button style, colors, position via script attributes
6. **Analytics**: Add optional analytics tracking
7. **Multi-language**: Support for multiple languages

---

## References

- [AG-UI Documentation](https://docs.ag-ui.com/)
- [CopilotKit Documentation](https://docs.copilotkit.ai/)
- [n8n Documentation](https://docs.n8n.io/)

---

## Summary

This implementation successfully bridges the gap between:
- **AG-UI Protocol** (via CopilotKit) - Standardized AI agent communication
- **n8n Workflows** - Simple HTTP webhook endpoints

The custom adapter allows any n8n workflow to be used as an AI agent backend, making it easy to integrate AI capabilities into websites without complex agent frameworks.

