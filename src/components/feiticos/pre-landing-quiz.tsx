
"use client";

import { useState } from "react";
import { MagicContainer } from "./magic-container";
import { Button } from "@/components/ui/button";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Heart, Sparkles, Wand2 } from "lucide-react";

type PreLandingQuizProps = {
  onComplete: () => void;
};

const questions = [
  {
    id: "situation",
    question: "Como está a situação entre vocês hoje?",
    options: [
      { value: "distant", label: "Ele está distante" },
      { value: "separated", label: "Estamos separados" },
      { value: "with_other", label: "Ele está com outra" },
      { value: "commitment", label: "Quero que ele se comprometa comigo" },
    ],
  },
  {
    id: "desire",
    question: "O que você deseja que aconteça agora?",
    options: [
      { value: "come_back", label: "Que ele volte pra mim" },
      { value: "regret", label: "Que ele se arrependa" },
      { value: "miss_me", label: "Que ele sinta saudade e me procure" },
      { value: "true_love", label: "Que ele me ame de verdade" },
    ],
  },
  {
    id: "belief",
    question: "Você acredita que o amor tem energia própria?",
    options: [
        { value: "yes", label: "Sim" },
        { value: "think_so", label: "Acho que sim" },
        { value: "not_sure", label: "Não sei, mas quero tentar" },
        { value: "no", label: "Não, mas mesmo assim quero uma chance" },
    ],
  },
];

export default function PreLandingQuiz({ onComplete }: PreLandingQuizProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentSelection, setCurrentSelection] = useState<string | null>(null);

  const isFinalStep = step === questions.length;

  const handleNext = () => {
    if (currentSelection) {
      const currentQuestion = questions[step];
      const newAnswers = { ...answers, [currentQuestion.id]: currentSelection };
      setAnswers(newAnswers);
      setCurrentSelection(null);
      setStep(step + 1);
    }
  };

  const progressValue = ((step) / questions.length) * 100;

  if (isFinalStep) {
    return (
        <MagicContainer className="text-center">
            <Wand2 className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse" />
            <h2 className="font-headline text-2xl font-bold text-primary mb-4">
                ✨ Suas respostas foram analisadas…
            </h2>
            <p className="text-lg text-foreground/80 mb-2">
                As energias do amor ao seu redor estão se movendo.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
                O que você deseja pode ser desbloqueado com um ritual específico. Lady Soraya já ajudou centenas de mulheres exatamente como você.
            </p>
            <p className="text-lg text-foreground/90 font-semibold mb-6">
                Clique abaixo e veja como ela vai te ajudar!
            </p>
            <Button onClick={onComplete} size="lg" className="w-full max-w-xs animate-button-glow bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
                QUERO AJUDA
            </Button>
        </MagicContainer>
    )
  }

  const currentQuestion = questions[step];

  return (
    <MagicContainer>
      <div className="mb-6">
        <Progress value={progressValue} className="h-2" />
      </div>
      <h2 className="mb-6 text-center font-headline text-2xl font-semibold text-primary">
        {currentQuestion.question}
      </h2>
      <RadioGroup
        onValueChange={setCurrentSelection}
        className="grid grid-cols-1 gap-4"
        value={currentSelection || ""}
      >
        {currentQuestion.options.map((option) => (
          <div key={option.value}>
            <RadioGroupItem value={option.value} id={option.value} className="sr-only"/>
            <Label
              htmlFor={option.value}
              className={`flex items-center justify-center text-center gap-4 rounded-lg border p-4 text-base transition-all hover:bg-muted/80 cursor-pointer ${currentSelection === option.value ? 'border-primary ring-2 ring-primary bg-muted' : ''}`}
            >
              <span>{option.label}</span>
            </Label>
          </div>
        ))}
      </RadioGroup>

      <div className="mt-8 flex justify-end">
        <Button onClick={handleNext} disabled={!currentSelection} size="lg">
          Próximo
        </Button>
      </div>
    </MagicContainer>
  );
}
