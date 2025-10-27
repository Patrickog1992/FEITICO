
"use client";

import { useState } from "react";
import LandingPage from "@/components/feiticos/landing-page";
import RitualQuiz from "@/components/feiticos/ritual-quiz";
import SpellForm from "@/components/feiticos/spell-form";
import ConfirmationPage from "@/components/feiticos/confirmation-page";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Step1Modal from "@/components/feiticos/step1-modal";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

type Step = "landing" | "step1" | "quiz" | "form" | "confirmation";

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
  );
}
