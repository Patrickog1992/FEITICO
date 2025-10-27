import { MagicContainer } from "./magic-container";
import { Button } from "@/components/ui/button";
import { HeartPulseIcon } from "../icons/heart-pulse-icon";

type ConfirmationPageProps = {
  onReset: () => void;
};

export default function ConfirmationPage({ onReset }: ConfirmationPageProps) {
  return (
    <MagicContainer className="flex flex-col items-center text-center">
      <HeartPulseIcon className="h-24 w-24 text-primary" />
      <h2 className="mt-6 font-headline text-3xl font-bold text-primary">
        O Ritual Começou...
      </h2>
      <p className="mt-4 max-w-md text-lg text-foreground/80">
        Lady Soraya está conjurando seu feitiço de amor personalizado. Esteja
        aberto(a) para receber sua magia, pois ela pode se manifestar{" "}
        <strong>ainda esta noite</strong>.
      </p>
      <Button onClick={onReset} variant="link" className="mt-8 text-primary">
        Realizar outro desejo
      </Button>
    </MagicContainer>
  );
}
