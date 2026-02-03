
"use client";

import { useState } from "react";
import LandingPage from "@/components/feiticos/landing-page-love";
import SocialProof from "@/components/feiticos/social-proof";
import FacebookPixel from "@/components/analytics/facebook-pixel";
import AltarEspiritualLove from "@/components/feiticos/altar-espiritual-love";

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
      <FacebookPixel />
      <main className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden">
        <SocialProof />
        
        {!showAltar && (
          <div className="w-full h-full overflow-y-auto">
            <LandingPage onStart={handleStartRitual} />
          </div>
        )}
        
        {showAltar && <AltarEspiritualLove onClose={handleCloseAltar} checkoutUrl="https://go.perfectpay.com.br/PPU38CQ7337" />}

      </main>
    </>
  );
}
