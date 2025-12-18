
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
import { X, Sparkles, Wand2, LockIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type AltarEspiritualProps = {
  onClose: () => void;
  checkoutUrl: string;
};

const formSchema = z.object({
  requesterName: z.string().min(2, { message: "Seu nome completo é necessário." }),
  targetName: z.string().min(2, { message: "O nome completo dele é necessário." }),
});

const loadingMessages = [
  "Invocando a Sacerdotisa Azara...",
  "Analisando as energias cósmicas...",
  "Conectando à alma de {TARGET_NAME}...",
  "Tecendo os fios do destino...",
  "Alinhando os corações...",
];

export default function AltarEspiritual({ onClose, checkoutUrl }: AltarEspiritualProps) {
  const [step, setStep] = useState<"form" | "loading" | "final">("form");
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);
  const [targetName, setTargetName] = useState("");
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      requesterName: "",
      targetName: "",
    },
  });

  useEffect(() => {
    if (step === "loading") {
      const interval = setInterval(() => {
        setLoadingMessageIndex((prevIndex) => {
          if (prevIndex < loadingMessages.length - 1) {
            return prevIndex + 1;
          }
          clearInterval(interval);
          setStep("final");
          return prevIndex;
        });
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [step]);
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    setTargetName(values.targetName);
    setStep("loading");
  }

  const renderContent = () => {
    switch (step) {
      case "form":
        return (
          <>
            <h2 className="text-center text-2xl font-headline font-bold text-gray-800">
              Prepare o Ritual
            </h2>
            <p className="text-center text-gray-600 mb-6">A Sacerdotisa Lady Soraya precisa dos nomes para vincular a alma dele à sua.</p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="requesterName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          placeholder="Seu Nome Completo" 
                          {...field} 
                          className="bg-gray-100 text-center text-base md:text-lg font-headline text-gray-800 placeholder:text-gray-400 border-gray-300 focus:border-primary focus-visible:ring-primary py-3"
                          autoComplete="off"
                        />
                      </FormControl>
                      <p className="text-xs text-center text-gray-500">Ex: Maria Oliveira</p>
                      <FormMessage className="text-red-500 text-center" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="targetName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          placeholder="Nome Completo DELE" 
                          {...field} 
                          className="bg-gray-100 text-center text-base md:text-lg font-headline text-gray-800 placeholder:text-gray-400 border-gray-300 focus:border-primary focus-visible:ring-primary py-3"
                          autoComplete="off"
                        />
                      </FormControl>
                      <p className="text-xs text-center text-gray-500">Ex: João da Silva</p>
                      <FormMessage className="text-red-500 text-center" />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full font-bold bg-green-600 text-white hover:bg-green-700 animate-button-glow-success text-lg py-3 h-auto">
                  Vincular Almas Agora
                </Button>
                 <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                    <LockIcon className="h-3 w-3" />
                    <span>Seus dados estão 100% protegidos e privados.</span>
                </div>
              </form>
            </Form>
          </>
        );
      case "loading":
        const currentMessage = loadingMessages[loadingMessageIndex].replace('{TARGET_NAME}', targetName);
        return (
          <div className="flex flex-col items-center justify-center text-center h-64">
            <Wand2 className="h-20 w-20 text-primary animate-pulse mb-6" />
            <p className="text-xl font-headline text-gray-700 transition-all duration-500 animate-in fade-in">
              {currentMessage}
            </p>
          </div>
        );
      case "final":
        return (
            <div className="flex flex-col items-center justify-center text-center h-64">
                <Sparkles className="h-20 w-20 text-green-500 mb-4"/>
                <h3 className="text-2xl font-bold font-headline text-green-600 mb-2">CONEXÃO DETECTADA!</h3>
                <p className="text-lg text-gray-700 mb-6">
                    <span className="font-bold text-primary">{targetName}</span> está vulnerável ao feitiço hoje. O vínculo espiritual foi mapeado com sucesso.
                </p>
                <p className="text-md text-gray-600 mb-6">Tudo está pronto. A Lady Soraya aguarda apenas a sua confirmação para encontrar o nome de vocês ao amor agora.</p>
                <Button 
                    onClick={() => window.location.href = checkoutUrl}
                    size="lg" 
                    className="w-full font-bold bg-green-600 text-white hover:bg-green-700 animate-button-glow-success text-lg h-12">
                    FINALIZAR O RITUAL
                </Button>
            </div>
        );
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto rounded-lg p-8 bg-white border shadow-2xl animate-in fade-in-50 slide-in-from-bottom-10">
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="absolute top-2 right-2 rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-100"
      >
        <X className="h-5 w-5" />
        <span className="sr-only">Fechar</span>
      </Button>
      
      {renderContent()}
    </div>
  );
}
