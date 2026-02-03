
'use client';

import Script from 'next/script';
import React from 'react';

export default function Upsell2Page() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center justify-center p-4">
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary">
          Seus feitiços ainda não acabaram
        </h1>
        <p className="text-lg md:text-xl mt-4 text-foreground/80">
          Veja esse pequeno vídeo e ganhe um brinde no final
        </p>
      </header>
      <main>
        <div dangerouslySetInnerHTML={{ __html: `
          <div id="ifr_6981f7cb8cb5dc32dbfcb8c9_wrapper" style="margin: 0 auto; width: 100%; max-width: 400px;">
            <div style="position: relative; padding: 177.77777777777777% 0 0 0;" id="ifr_6981f7cb8cb5dc32dbfcb8c9_aspect">
              <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_6981f7cb8cb5dc32dbfcb8c9" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload="this.onload=null, this.src='https://scripts.converteai.net/66f7b845-c900-4cf3-b6f2-f848ebd65e7f/players/6981f7cb8cb5dc32dbfcb8c9/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe>
            </div>
          </div>
        `}} />
        <Script id="v-turb-script-loader" strategy="afterInteractive">
          {`
            var s=document.createElement("script"); 
            s.src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js"; 
            s.async=true;
            document.head.appendChild(s);
          `}
        </Script>
      </main>
    </div>
  );
}
