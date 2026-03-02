
"use client";

import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { X, Heart, UserPlus, LockIcon, Wand2, CheckCircle2 } from "lucide-react";
import { MagicContainer } from "./magic-container";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type AltarEspiritualLoveProps = {
  onClose: () => void;
  checkoutUrl: string;
};

// ====================================================================
// COMPONENTE DE VELA VERMELHA INTERATIVA (PROPORÇÕES AJUSTADAS)
// ====================================================================
const VelaInterativa = ({ flameOn, onClick }: { flameOn: boolean, onClick: () => void }) => {
    const FlameComponent = ({ isOn }: { isOn: boolean }) => (
      <div
        className={cn(
          "absolute bottom-[155px] h-24 w-20 origin-bottom transform-gpu transition-all duration-700 ease-out z-20",
          isOn ? "scale-100 opacity-100" : "scale-0 opacity-0"
        )}
      >
        <svg viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg" className="h-full w-full drop-shadow-[0_0_15px_rgba(255,50,50,0.7)]">
          <path d="M50 150 C 10 120, 10 70, 50 0 C 90 70, 90 120, 50 150 Z" fill="url(#grad1_candle)" />
          <path d="M50 150 C 25 125, 25 80, 50 20 C 75 80, 75 125, 50 150 Z" fill="url(#grad2_candle)" className="animate-pulse" style={{ animationDuration: '1.5s', opacity: 0.9 }} />
          <path d="M50 150 C 40 130, 40 100, 50 50 C 60 100, 60 130, 50 150 Z" fill="white" className="animate-pulse" style={{ animationDuration: '1s', opacity: 0.8 }} />
        </svg>
        <svg width="0" height="0"><defs>
            <radialGradient id="grad1_candle" cx="50%" cy="50%" r="50%" fx="50%" fy="50%"><stop offset="0%" style={{ stopColor: "rgba(255,80,0,0.9)", stopOpacity: 1 }} /><stop offset="100%" style={{ stopColor: "rgba(220,20,60,0.2)", stopOpacity: 0 }} /></radialGradient>
            <radialGradient id="grad2_candle" cx="50%" cy="50%" r="50%" fx="50%" fy="50%"><stop offset="0%" style={{ stopColor: "rgba(255,255,100,1)", stopOpacity: 1 }} /><stop offset="100%" style={{ stopColor: "rgba(255,100,0,0.5)", stopOpacity: 0 }} /></radialGradient>
        </defs></svg>
      </div>
    );

    return (
        <div className="relative w-full h-64 flex items-center justify-center cursor-pointer group" onClick={onClick}>
            {/* Prato da Vela */}
            <div className="absolute bottom-4 w-24 h-4 bg-stone-300 rounded-full shadow-inner border-b-2 border-stone-400"></div>
            
            {/* Corpo da Vela Vermelha */}
            <div className="absolute bottom-6 w-12 h-36 bg-gradient-to-r from-rose-700 via-rose-600 to-rose-800 rounded-t-sm shadow-xl relative overflow-hidden border-x border-rose-900/20">
                {/* Gotas de Cera (Drips) */}
                <div className="absolute top-0 left-1 w-2 h-10 bg-rose-400/30 rounded-full blur-[1px]"></div>
                <div className="absolute top-0 right-2 w-1.5 h-16 bg-rose-400/30 rounded-full blur-[1px]"></div>
                
                {/* Brilho Interno da Vela quando acesa */}
                <div className={cn(
                    "absolute inset-0 bg-orange-500/10 transition-opacity duration-1000",
                    flameOn ? "opacity-100" : "opacity-0"
                )}></div>
            </div>

            {/* Pavio (Wick) */}
            <div className="absolute bottom-[168px] w-0.5 h-4 bg-gray-900 rounded-full z-10"></div>

            {/* Brilho de Ambiente */}
            <div className={cn(
                "absolute bottom-24 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl transition-opacity duration-1000",
                flameOn ? "opacity-100" : "opacity-0"
            )}></div>

            <FlameComponent isOn={flameOn} />
        </div>
    );
};

// ====================================================================
// FUNIL LADY SORAYA
// ====================================================================
export default function AltarEspiritualLove({ onClose, checkoutUrl }: AltarEspiritualLoveProps) {
  const [step, setStep] = useState<"choice" | "quiz" | "form" | "loading" | "altar" | "sealing">("choice");
  const [isBringBack, setIsBringBack] = useState(true);
  const [quizIndex, setQuizIndex] = useState(0);
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);
  const [targetName, setTargetName] = useState("");
  const [flameOn, setFlameOn] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutos

  const formSchema = z.object({
    requesterName: z.string().min(2, { message: "Seu nome é necessário." }),
    targetName: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { requesterName: "", targetName: "" },
  });

  const quizQuestions = [
    {
        q: "Há quanto tempo as energias de vocês se afastaram?",
        options: ["Menos de 1 mês", "De 1 a 6 meses", "Mais de 6 meses"]
    },
    {
        q: "Existe uma terceira pessoa interferindo no campo vibracional?",
        options: ["Sim", "Não", "Sinto uma energia estranha"]
    },
    {
        q: "Qual o nível de frieza atual dele(a)?",
        options: ["Gelo total", "Me ignora", "Oscilante"]
    }
  ];

  const loadingMessages = [
    "Localizando frequência vibracional de {TARGET_NAME}...",
    "Detectando bloqueios de terceiras pessoas...",
    "Mapeando conexões cármicas residuais...",
    "Analisando vulnerabilidade espiritual: ALTA...",
    "Caminho desobstruído para Lady Soraya...",
  ];

  useEffect(() => {
    if (step === "loading") {
      const interval = setInterval(() => {
        setLoadingMessageIndex((prev) => {
          if (prev < loadingMessages.length - 1) return prev + 1;
          clearInterval(interval);
          setStep("altar");
          return prev;
        });
      }, 1800);
      return () => clearInterval(interval);
    }
  }, [step, loadingMessages.length]);

  useEffect(() => {
    if (step === "sealing" && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [step, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleIntentChoice = (bringBack: boolean) => {
    setIsBringBack(bringBack);
    if (bringBack) {
      setStep("quiz");
    } else {
      setStep("form");
    }
  };

  const handleQuizOption = () => {
    if (quizIndex < quizQuestions.length - 1) {
      setQuizIndex(quizIndex + 1);
    } else {
      setStep("form");
    }
  };

  const onSubmitForm = (values: z.infer<typeof formSchema>) => {
    setTargetName(values.targetName || "alguém especial");
    setStep("loading");
  };

  const handleAltarClick = () => {
    setFlameOn(true);
    setTimeout(() => setStep("sealing"), 400);
  };

  const renderContent = () => {
    switch (step) {
      case "choice":
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-center text-2xl font-headline font-bold text-gray-800">Qual é a sua intenção?</h2>
            <p className="text-center text-gray-600">Escolha o caminho para que Lady Soraya possa guiar o ritual.</p>
            <div className="space-y-4">
                <Button onClick={() => handleIntentChoice(true)} size="lg" className="w-full h-auto py-5 text-lg justify-start bg-primary hover:bg-primary/90 text-white shadow-xl whitespace-normal text-left leading-tight">
                    <Heart className="mr-4 flex-shrink-0 fill-current"/>
                    Quero trazer um amor de volta
                </Button>
                <Button onClick={() => handleIntentChoice(false)} size="lg" className="w-full h-auto py-5 text-lg justify-start bg-secondary hover:bg-secondary/90 text-white shadow-xl whitespace-normal text-left leading-tight">
                    <UserPlus className="mr-4 flex-shrink-0"/>
                    Quero atrair um novo amor
                </Button>
            </div>
          </div>
        );

      case "quiz":
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">Diagnóstico Espiritual</span>
                <span className="text-xs font-bold text-gray-400">{quizIndex + 1}/3</span>
            </div>
            <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full transition-all duration-500" style={{ width: `${((quizIndex + 1) / 3) * 100}%` }}></div>
            </div>
            <h2 className="text-xl font-headline font-bold text-gray-800">{quizQuestions[quizIndex].q}</h2>
            <div className="space-y-3">
                {quizQuestions[quizIndex].options.map((opt, i) => (
                    <Button 
                        key={i} 
                        onClick={handleQuizOption} 
                        variant="outline" 
                        className="w-full justify-start text-left py-6 h-auto border-2 hover:border-primary hover:bg-primary/5 transition-all !text-gray-800 hover:!text-gray-800"
                    >
                        {opt}
                    </Button>
                ))}
            </div>
          </div>
        );

      case "form":
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <h2 className="text-center text-2xl font-headline font-bold text-gray-800">Prepare o Ritual</h2>
            <p className="text-center text-gray-600 mb-6">Lady Soraya precisa dos nomes para selar o destino na chama.</p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmitForm)} className="space-y-4">
                    <FormField control={form.control} name="requesterName" render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Seu nome" {...field} className="bg-gray-100 text-center text-lg py-6" autoComplete="off" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}/>
                    {isBringBack && (
                        <FormField control={form.control} name="targetName" render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Nome da pessoa desejada" {...field} className="bg-gray-100 text-center text-lg py-6" autoComplete="off" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}/>
                    )}
                    <Button type="submit" size="lg" className="w-full font-bold bg-green-600 text-white hover:bg-green-700 animate-button-glow-success text-xl py-6 h-auto">CONECTAR AGORA</Button>
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-500"><LockIcon className="h-3 w-3" /><span>Seus dados estão 100% protegidos e privados.</span></div>
                </form>
            </Form>
          </div>
        );

      case "loading":
        return (
          <div className="flex flex-col items-center justify-center text-center h-80 space-y-6">
            <div className="relative">
                <Wand2 className="h-20 w-20 text-primary animate-pulse" />
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-ping"></div>
            </div>
            <div className="space-y-2">
                <p className="text-xs font-bold text-primary uppercase tracking-tighter animate-pulse">Invocação em Curso</p>
                <p className="text-xl font-headline text-gray-700 h-14 transition-all duration-500">{loadingMessages[loadingMessageIndex].replace('{TARGET_NAME}', targetName)}</p>
            </div>
          </div>
        );

      case "altar":
        return (
          <div className="space-y-6 animate-in zoom-in-95 duration-500 text-center">
            <div className="bg-green-100 text-green-700 p-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2">
                <CheckCircle2 className="h-4 w-4" /> CONEXÃO ESTABELECIDA
            </div>
            <h2 className="text-2xl font-headline font-bold text-gray-800">A vela sagrada aguarda o seu toque</h2>
            <p className="text-sm text-gray-600 italic">Clique na vela para que Lady Soraya invoque o nome de {targetName} no fogo antigo.</p>
            <VelaInterativa flameOn={flameOn} onClick={handleAltarClick} />
            <p className="text-xs font-bold text-primary uppercase animate-bounce">Toque na vela para acender</p>
          </div>
        );

      case "sealing":
        return (
          <div className="space-y-6 animate-in fade-in duration-700">
            <div className="bg-red-600 text-white p-3 rounded-lg text-center shadow-lg animate-pulse">
                <p className="text-xs font-bold uppercase">Portal de Devoção Aberto</p>
                <p className="text-2xl font-mono font-bold">{formatTime(timeLeft)}</p>
                <p className="text-[10px]">Selo expira quando o cronômetro zerar</p>
            </div>

            <div className="space-y-4">
                <h3 className="text-xl font-bold font-headline text-gray-800 text-center">Contrato de Selamento</h3>
                <div className="space-y-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                    {[
                        `Entendo que este feitiço de amor é irreversível para ${targetName}.`,
                        "Prometo manter segredo absoluto para não quebrar o encantamento.",
                        "Aceito que o universo trará os resultados em tempo recorde."
                    ].map((text, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <Checkbox id={`check-love-${i}`} defaultChecked={false} />
                            <Label htmlFor={`check-love-${i}`} className="text-xs leading-tight font-medium text-gray-700">{text}</Label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-4 text-center">
                <p className="text-sm text-gray-600">Contribuição simbólica para materiais do ritual:</p>
                <div className="flex flex-col items-center justify-center">
                    <span className="text-gray-400 line-through text-sm">De R$ 497,00</span>
                    <span className="text-4xl font-bold text-green-600">R$ 27,27</span>
                </div>
                <Button 
                    onClick={() => window.location.href = checkoutUrl} 
                    size="lg" 
                    className="w-full font-bold text-xl py-8 h-auto shadow-2xl transition-all bg-green-600 hover:bg-green-700 animate-button-glow-success"
                >
                    SELAR RITUAL AGORA
                </Button>
                <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400">
                    <LockIcon className="h-3 w-3" />
                    <span>CONEXÃO CRIPTOGRAFADA E SIGILOSA</span>
                </div>
            </div>
          </div>
        );
    }
  };

  return (
    <MagicContainer className="max-w-md mx-auto p-8 bg-white border shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-yellow-400 to-primary"></div>
      <Button variant="ghost" size="icon" onClick={onClose} className="absolute top-2 right-2 rounded-full text-gray-400 hover:text-gray-800">
        <X className="h-5 w-5" />
        <span className="sr-only">Fechar</span>
      </Button>
      {renderContent()}
    </MagicContainer>
  );
}
