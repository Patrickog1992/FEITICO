import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagicContainer } from "./magic-container";

type LandingPageProps = {
  onStart: () => void;
};

export default function LandingPage({ onStart }: LandingPageProps) {
  return (
    <MagicContainer className="flex flex-col items-center text-center">
      <div className="flex items-center gap-2">
        <Sparkles className="h-8 w-8 text-primary" />
        <h1 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
          Feitiços Secretos do Amor
        </h1>
        <Sparkles className="h-8 w-8 text-primary" />
      </div>
      <p className="mt-4 max-w-xl text-lg text-foreground/80">
        Deixe Lady Soraya guiar seu coração ao seu verdadeiro destino. O feitiço
        certo, conjurado com intenção pura, pode revelar o caminho para o amor
        eterno.
      </p>
      <Button
        onClick={onStart}
        size="lg"
        className="mt-8 animate-button-glow bg-accent font-bold text-accent-foreground hover:bg-accent/90"
      >
        Iniciar o Ritual
      </Button>
    </MagicContainer>
  );
}
