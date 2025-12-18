
"use client";

import { useState } from "react";
import LandingPage from "@/components/feiticos/landing-page";
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
