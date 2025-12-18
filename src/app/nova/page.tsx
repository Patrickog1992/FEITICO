
"use client";

import { useState } from "react";
import Head from "next/head";
import LandingPage from "@/components/feiticos/landing-page-nova";
import SocialProof from "@/components/feiticos/social-proof";
import FacebookPixel from "@/components/analytics/facebook-pixel";
import AltarEspiritual from "@/components/feiticos/altar-espiritual";

export default function Home() {
  const [showAltar, setShowAltar] = useState(false);

  const handleStartRitual = () => {
    setShowAltar(true);
  };
  
  const handleCloseAltar = () => {
    setShowAltar(false);
  }

  return (
    <>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: `!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);` }} />
        <link rel="preload" href="https://scripts.converteai.net/82b0f5b7-3ef8-4fad-9a6a-1e700b3d750b/players/690f41a0230c7d2caf630448/v4/player.js" as="script" />
        <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js" as="script" />
        <link rel="preload" href="https://cdn.converteai.net/82b0f5b7-3ef8-4fad-9a6a-1e700b3d750b/690f41783cf93344c37b137e/main.m3u8" as="fetch" />
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://api.vturb.com.br" />
      </Head>
      <FacebookPixel />
      <main className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden">
        <SocialProof />
        
        {!showAltar && (
          <div className="w-full h-full overflow-y-auto">
            <LandingPage onStart={handleStartRitual} />
          </div>
        )}
        
        {showAltar && <AltarEspiritual onClose={handleCloseAltar} checkoutUrl="https://pay.kirvano.com/9e2a7067-9ff4-4612-9f68-0b355238ae45" />}

      </main>
    </>
  );
}
