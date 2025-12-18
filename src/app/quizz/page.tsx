
"use client";

import { useState } from "react";
import LandingPage from "@/components/feiticos/landing-page";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import SocialProof from "@/components/feiticos/social-proof";
import FacebookPixel from "@/components/analytics/facebook-pixel";
import AltarEspiritual from "@/components/feiticos/altar-espiritual";

export default function QuizzPage() {
  const [showAltar, setShowAltar] = useState(false);

  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');
  
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
        {heroImage && (
           <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover -z-10 opacity-10"
              data-ai-hint={heroImage.imageHint}
            />
        )}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/80 to-transparent" />
        
        <div className="w-full h-full overflow-y-auto">
          <LandingPage onStart={handleStartRitual} />
        </div>
        
        {showAltar && <AltarEspiritual onClose={handleCloseAltar} checkoutUrl="https://pay.kirvano.com/9e2a7067-9ff4-4612-9f68-0b355238ae45" />}
      </main>
    </>
  );
}
