
"use client";

import { useState } from "react";
import LandingPage from "@/components/feiticos/landing-page-lp";
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
        
        {showAltar && <AltarEspiritual onClose={handleCloseAltar} checkoutUrl="https://pay.kirvano.com/5fbfabed-b287-43fb-9640-735dfb2a99f3" />}

      </main>
    </>
  );
}
