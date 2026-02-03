
'use client';

import React, { useState, useEffect } from 'react';

export default function Upsell2Page() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // This effect runs when isClient becomes true
    useEffect(() => {
        if (isClient) {
            // The script needs to be injected into the document to run.
            const script = document.createElement("script");
            script.src = "https://scripts.converteai.net/66f7b845-c900-4cf3-b6f2-f848ebd65e7f/players/6981f7cb8cb5dc32dbfcb8c9/v4/player.js";
            script.async = true;
            document.head.appendChild(script);

            return () => {
                // Clean up the script when the component unmounts
                const existingScript = document.querySelector(`script[src="${'\'\''}" + script.src + "${'\'\''}"]`);
                if (existingScript) {
                    document.head.removeChild(existingScript);
                }
            };
        }
    }, [isClient]);

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
            {isClient && (
                <div dangerouslySetInnerHTML={{ __html: `
                <vturb-smartplayer id="vid-6981f7cb8cb5dc32dbfcb8c9" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>
                `}} />
            )}
          </main>
        </div>
      );
}
