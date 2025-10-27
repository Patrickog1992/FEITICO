
"use client";

import { useState } from "react";
import LandingPage from "@/components/feiticos/landing-page";
import RitualQuiz from "@/components/feiticos/ritual-quiz";
import SpellForm from "@/components/feiticos/spell-form";
import ConfirmationPage from "@/components/feiticos/confirmation-page";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Step1Modal from "@/components/feiticos/step1-modal";

type Step = "landing" | "step1" | "quiz" | "form" | "confirmation";

export default function Home() {
  const [step, setStep] = useState<Step>("landing");
  const [quizData, setQuizData] = useState<object | null>(null);

  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

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
              setStep("form");
            }}
          />
        );
      case "form":
        return <SpellForm onComplete={() => setStep("confirmation")} />;
      case "confirmation":
        return <ConfirmationPage onReset={() => setStep("landing")} />;
      default:
        return <LandingPage onStart={() => setStep("step1")} />;
    }
  };

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden">
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
      
      {step === "landing" && <LandingPage onStart={() => setStep("step1")} />}
      
      {step !== "landing" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
           {renderStep()}
        </div>
      )}

    </main>
  );
}
