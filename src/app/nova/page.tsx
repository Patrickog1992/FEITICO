
"use client";

import { useState } from "react";
import Head from "next/head";
import LandingPage from "@/components/feiticos/landing-page-nova";
import RitualQuiz from "@/components/feiticos/ritual-quiz";
import ConfirmationPage from "@/components/feiticos/confirmation-page";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Step1Modal from "@/components/feiticos/step1-modal-nova";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialProof from "@/components/feiticos/social-proof";

type Step = "landing" | "step1" | "quiz" | "confirmation";

export default function Home() {
  const [step, setStep] = useState<Step>("landing");
  const [quizData, setQuizData] = useState<object | null>(null);

  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  const handleCloseModal = () => setStep("landing");

  const renderStep = () => {
    switch (step) {
      case "landing":
        return <LandingPage onStart={() => setStep("step1")} />;
      case "step1":
        return <Step1Modal onComplete={() => setStep("quiz")} />;
      case "quiz":
        return (
          <RitualQuiz
            onComplete={(data) => {
              setQuizData(data);
              setStep("confirmation");
            }}
          />
        );
      case "confirmation":
        return <ConfirmationPage onReset={() => setStep("landing")} />;
      default:
        return <LandingPage onStart={() => setStep("step1")} />;
    }
  };

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
          <LandingPage onStart={() => setStep("step1")} />
        </div>
        
        {step !== "landing" && (
          <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 p-4 pt-12 sm:items-center sm:pt-4 overflow-y-auto">
             <div className="relative w-full max-w-2xl">
              {renderStep()}
              <Button variant="ghost" size="icon" onClick={handleCloseModal} className="absolute top-4 right-4 rounded-full bg-background/50 text-foreground hover:bg-background/80">
                <X className="h-5 w-5" />
                <span className="sr-only">Fechar</span>
              </Button>
             </div>
          </div>
        )}

      </main>
    </>
  );
}
