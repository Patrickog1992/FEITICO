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
import { Heart, Moon, Sparkles, Sunrise } from "lucide-react";

type RitualQuizProps = {
  onComplete: (data: Record<string, string>) => void;
};

const questions = [
  {
    id: "desire",
    question: "Qual é o desejo mais verdadeiro do seu coração?",
    options: [
      { value: "new_love", label: "Atrair um novo amor", icon: Sparkles },
      { value: "strengthen_bond", label: "Fortalecer um laço existente", icon: Heart },
      { value: "self_love", label: "Encontrar o amor-próprio", icon: (props: any) => <Heart {...props} className="fill-current"/> },
    ],
  },
  {
    id: "connection_time",
    question: "Quando você se sente mais conectado(a) ao universo?",
    options: [
      { value: "full_moon", label: "Sob a lua cheia", icon: Moon },
      { value: "sunrise", label: "Ao nascer do sol", icon: Sunrise },
      { value: "quiet_moment", label: "Em um momento de silêncio", icon: (props: any) => <div {...props} /> },
    ],
  },
];

export default function RitualQuiz({ onComplete }: RitualQuizProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentSelection, setCurrentSelection] = useState<string | null>(null);

  const currentQuestion = questions[step];

  const handleNext = () => {
    if (currentSelection) {
      const newAnswers = { ...answers, [currentQuestion.id]: currentSelection };
      setAnswers(newAnswers);
      setCurrentSelection(null);

      if (step < questions.length - 1) {
        setStep(step + 1);
      } else {
        onComplete(newAnswers);
      }
    }
  };

  const progressValue = ((step + 1) / questions.length) * 100;

  return (
    <MagicContainer>
      <div className="mb-4">
        <Label>Progresso do Ritual</Label>
        <Progress value={progressValue} className="mt-2" />
      </div>
      <h2 className="mb-6 text-center font-headline text-2xl font-semibold">
        Personalize seu Ritual
      </h2>
      <div key={step}>
        <p className="mb-4 text-lg text-center">{currentQuestion.question}</p>
        <RadioGroup
          onValueChange={setCurrentSelection}
          className="grid grid-cols-1 gap-4"
        >
          {currentQuestion.options.map((option) => (
            <div key={option.value}>
              <RadioGroupItem value={option.value} id={option.value} className="sr-only"/>
              <Label
                htmlFor={option.value}
                className={`flex items-center gap-4 rounded-lg border p-4 text-base transition-all hover:bg-muted/80 cursor-pointer ${currentSelection === option.value ? 'border-primary ring-2 ring-primary bg-muted' : ''}`}
              >
                <option.icon className="h-6 w-6 text-primary" />
                <span>{option.label}</span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="mt-8 flex justify-end">
        <Button onClick={handleNext} disabled={!currentSelection} size="lg">
          {step < questions.length - 1 ? "Próximo" : "Concluir"}
        </Button>
      </div>
    </MagicContainer>
  );
}
