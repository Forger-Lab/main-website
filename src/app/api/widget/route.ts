import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Get the origin - prefer NEXT_PUBLIC_SITE_URL, fallback to request host
  const host = request.headers.get('host') || '';
  const protocol = request.headers.get('x-forwarded-proto') || 
                   (host.includes('localhost') ? 'http' : 'https');
  const widgetUrl = process.env.NEXT_PUBLIC_SITE_URL || 
                    (host ? `${protocol}://${host}` : 'http://localhost:3000');
  
  // Build the script using string concatenation to avoid template literal issues
  const widgetScript = 
'(function() {' +
'  if (window.SolvoLabVoiceWidget) return;' +
'  window.SolvoLabVoiceWidget = {' +
'    init: function(options) {' +
'      options = options || {};' +
'      const containerId = options.containerId || "solvolab-voice-widget";' +
'      const container = document.getElementById(containerId);' +
'      if (!container) {' +
'        console.error("SolvoLab Voice Widget: Container not found. Add <div id=\\"" + containerId + "\\"></div>");' +
'        return;' +
'      }' +
'      const iframe = document.createElement("iframe");' +
'      iframe.src = "' + widgetUrl + '/audio-widget";' +
'      iframe.style.width = "100%";' +
'      iframe.style.height = "600px";' +
'      iframe.style.border = "none";' +
'      iframe.style.borderRadius = "8px";' +
'      iframe.setAttribute("allow", "microphone");' +
'      container.innerHTML = "";' +
'      container.appendChild(iframe);' +
'    }' +
'  };' +
'  function autoInit() {' +
'    if (document.getElementById("solvolab-voice-widget")) {' +
'      window.SolvoLabVoiceWidget.init();' +
'    }' +
'  }' +
'  if (document.readyState === "loading") {' +
'    document.addEventListener("DOMContentLoaded", autoInit);' +
'  } else {' +
'    autoInit();' +
'  }' +
'})();';

  return new NextResponse(widgetScript, {
    headers: {
      'Content-Type': 'application/javascript',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

