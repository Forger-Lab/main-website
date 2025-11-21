(function() {
  // Configuration
  const WIDGET_URL = document.currentScript.getAttribute('data-widget-url') || 'http://localhost:3000/widget';
  
  // Create Container
  const container = document.createElement('div');
  container.id = 'ai-widget-container';
  container.style.position = 'fixed';
  container.style.bottom = '20px';
  container.style.left = '50%';
  container.style.transform = 'translateX(-50%)';
  container.style.zIndex = '999999';
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.alignItems = 'center';
  document.body.appendChild(container);

  // Create Iframe (Hidden initially or Minimized)
  const iframe = document.createElement('iframe');
  iframe.src = WIDGET_URL;
  iframe.style.width = '80vw';
  iframe.style.height = '80vh';
  iframe.style.border = 'none';
  iframe.style.borderRadius = '12px';
  iframe.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
  iframe.style.marginBottom = '10px';
  iframe.style.display = 'none'; // Hidden until toggled
  iframe.style.transition = 'all 0.3s ease';
  iframe.style.position = 'fixed';
  iframe.style.top = '50%';
  iframe.style.left = '50%';
  iframe.style.transform = 'translate(-50%, -50%)';
  iframe.style.zIndex = '999998';
  // Ensure iframe can interact properly
  iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms allow-popups allow-modals');
  document.body.appendChild(iframe);

  // Create Toggle Button - White bubble with black border, stars on left, text on right
  const button = document.createElement('button');
  button.innerHTML = `
    <div style="display: flex; align-items: center; gap: 12px; width: 100%; padding: 0 20px;">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="22" height="22" style="flex-shrink: 0;">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>

      <span style="color: #9ca3af; font-size: 15px; font-weight: 400; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; white-space: nowrap; margin-left: 40px;">Ask me anything</span>
    </div>
  `;
  button.style.width = '280px';
  button.style.height = '64px';
  button.style.borderRadius = '32px';
  button.style.backgroundColor = '#ffffff';
  button.style.border = '2px solid #000000';
  button.style.cursor = 'pointer';
  button.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
  button.style.display = 'flex';
  button.style.alignItems = 'center';
  button.style.justifyContent = 'center';
  button.style.transition = 'all 0.2s ease';
  button.style.padding = '0';
  button.style.margin = '0';
  
  button.onmouseover = () => {
    button.style.transform = 'translateY(-2px)';
    button.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
    button.style.backgroundColor = '#f8f8f8';
  };
  button.onmouseout = () => {
    button.style.transform = 'translateY(0)';
    button.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
    button.style.backgroundColor = '#ffffff';
  };
  button.onmousedown = () => {
    button.style.transform = 'translateY(0)';
  };
  button.onmouseup = () => {
    button.style.transform = 'translateY(-2px)';
  };
  
  let isOpen = false;

  button.onclick = () => {
    isOpen = !isOpen;
    if (isOpen) {
      iframe.style.display = 'block';
      button.style.display = 'none';
    } else {
      iframe.style.display = 'none';
      button.style.display = 'flex';
    }
  };

  // Handle close message from iframe
  window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'CLOSE_WIDGET') {
      isOpen = false;
      iframe.style.display = 'none';
      button.style.display = 'flex';
    }
  });

  container.appendChild(button);
})();

