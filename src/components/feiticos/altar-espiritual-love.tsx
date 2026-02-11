
"use client";

import { useState, useEffect, useRef } from "react";
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
import { X, Sparkles, Wand2, LockIcon, Heart, UserPlus } from "lucide-react";
import { MagicContainer } from "./magic-container";
import Image from "next/image";

type AltarEspiritualLoveProps = {
  onClose: () => void;
  checkoutUrl: string;
};

const formSchemaBringBack = z.object({
  requesterName: z.string().min(2, { message: "Seu nome é necessário." }),
  targetName: z.string().min(2, { message: "O nome de quem você deseja é necessário." }),
});

const formSchemaNewLove = z.object({
  requesterName: z.string().min(2, { message: "Seu nome é necessário." }),
});

const loadingMessagesBringBack = [
  "Invocando a Sacerdotisa Azara...",
  "Analisando as energias cósmicas...",
  "Conectando à alma de {TARGET_NAME}...",
  "Tecendo os fios do destino...",
  "Alinhando os corações...",
];

const loadingMessagesNewLove = [
    "Invocando a Sacerdotisa Azara...",
    "Limpando seus caminhos astrais...",
    "Alinhando o universo ao seu favor...",
    "Abrindo seu coração para o amor verdadeiro...",
    "Atraindo a alma gêmea destinada a você...",
];

export default function AltarEspiritualLove({ onClose, checkoutUrl }: AltarEspiritualLoveProps) {
  const [step, setStep] = useState<"choice" | "formBringBack" | "formNewLove" | "loading" | "final">("choice");
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);
  const [targetName, setTargetName] = useState("");
  const [requesterName, setRequesterName] = useState("");
  const [loadingMessages, setLoadingMessages] = useState<string[]>([]);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const formBringBack = useForm<z.infer<typeof formSchemaBringBack>>({
    resolver: zodResolver(formSchemaBringBack),
    defaultValues: { requesterName: "", targetName: "" },
  });

  const formNewLove = useForm<z.infer<typeof formSchemaNewLove>>({
    resolver: zodResolver(formSchemaNewLove),
    defaultValues: { requesterName: "" },
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
  }, [step, loadingMessages.length]);
  
  function onSubmitBringBack(values: z.infer<typeof formSchemaBringBack>) {
    setTargetName(values.targetName);
    setRequesterName(values.requesterName);
    setLoadingMessages(loadingMessagesBringBack);
    setStep("loading");
  }

  function onSubmitNewLove(values: z.infer<typeof formSchemaNewLove>) {
    setTargetName("");
    setRequesterName(values.requesterName);
    setLoadingMessages(loadingMessagesNewLove);
    setStep("loading");
  }

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderContent = () => {
    switch (step) {
      case "choice":
        return (
          <>
            <h2 className="text-center text-2xl font-headline font-bold text-gray-800">Qual é a sua intenção?</h2>
            <p className="text-center text-gray-600 mb-6">Escolha o caminho do seu coração para que a Lady Soraya possa guiar o ritual.</p>
            <div className="space-y-4">
                <Button onClick={() => setStep("formBringBack")} size="lg" className="w-full h-auto py-3 text-lg justify-start whitespace-normal">
                    <Heart className="mr-4 flex-shrink-0"/>
                    Quero trazer um amor de volta
                </Button>
                <Button onClick={() => setStep("formNewLove")} size="lg" className="w-full h-auto py-3 text-lg justify-start whitespace-normal">
                    <UserPlus className="mr-4 flex-shrink-0"/>
                    Quero atrair um novo amor
                </Button>
            </div>
          </>
        );

      case "formBringBack":
        return (
          <>
            <h2 className="text-center text-2xl font-headline font-bold text-gray-800">Prepare o Ritual da União</h2>
            <p className="text-center text-gray-600 mb-4">Coloque uma foto da pessoa que você quer trazer de volta</p>
            <div className="flex flex-col items-center gap-2 my-4">
                <div 
                    className="relative w-32 h-32 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => fileInputRef.current?.click()}
                >
                    {photoPreview ? (
                        <Image src={photoPreview} alt="Preview da foto" layout="fill" className="rounded-full object-cover" />
                    ) : (
                        <div className="text-center">
                            <UserPlus className="h-8 w-8 mx-auto" />
                            <span className="text-xs mt-1 block">Foto da pessoa</span>
                        </div>
                    )}
                </div>
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handlePhotoChange}
                    className="hidden"
                    accept="image/*"
                />
            </div>
            <p className="text-center text-gray-600 mb-6">A Sacerdotisa precisa dos nomes para vincular a alma de vocês dois.</p>
            <Form {...formBringBack}>
              <form onSubmit={formBringBack.handleSubmit(onSubmitBringBack)} className="space-y-4">
                <FormField control={formBringBack.control} name="requesterName" render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Seu nome" {...field} className="bg-gray-100 text-center text-base md:text-lg font-headline text-gray-800 placeholder:text-gray-400 border-gray-300 focus:border-primary focus-visible:ring-primary py-3" autoComplete="off" />
                      </FormControl>
                      <FormMessage className="text-red-500 text-center" />
                    </FormItem>
                )}/>
                <FormField control={formBringBack.control} name="targetName" render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Nome de quem você deseja" {...field} className="bg-gray-100 text-center text-base md:text-lg font-headline text-gray-800 placeholder:text-gray-400 border-gray-300 focus:border-primary focus-visible:ring-primary py-3" autoComplete="off" />
                      </FormControl>
                      <FormMessage className="text-red-500 text-center" />
                    </FormItem>
                )}/>
                <Button type="submit" size="lg" className="w-full font-bold bg-green-600 text-white hover:bg-green-700 animate-button-glow-success text-lg py-3 h-auto">Vincular Almas Agora</Button>
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500"><LockIcon className="h-3 w-3" /><span>Seus dados estão 100% protegidos e privados.</span></div>
              </form>
            </Form>
          </>
        );

    case "formNewLove":
        return (
          <>
            <h2 className="text-center text-2xl font-headline font-bold text-gray-800">Prepare o Ritual da Atração</h2>
            <p className="text-center text-gray-600 mb-6">Informe seu nome para que a Sacerdotisa possa abrir seus caminhos para o amor.</p>
            <Form {...formNewLove}>
              <form onSubmit={formNewLove.handleSubmit(onSubmitNewLove)} className="space-y-4">
                <FormField control={formNewLove.control} name="requesterName" render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Seu nome" {...field} className="bg-gray-100 text-center text-base md:text-lg font-headline text-gray-800 placeholder:text-gray-400 border-gray-300 focus:border-primary focus-visible:ring-primary py-3" autoComplete="off" />
                      </FormControl>
                      <FormMessage className="text-red-500 text-center" />
                    </FormItem>
                )}/>
                <Button type="submit" size="lg" className="w-full font-bold bg-green-600 text-white hover:bg-green-700 animate-button-glow-success text-lg py-3 h-auto">Abrir Meus Caminhos</Button>
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500"><LockIcon className="h-3 w-3" /><span>Seus dados estão 100% protegidos e privados.</span></div>
              </form>
            </Form>
          </>
        );

      case "loading":
        const currentMessage = loadingMessages[loadingMessageIndex].replace('{TARGET_NAME}', targetName);
        return (
          <div className="flex flex-col items-center justify-center text-center h-64">
            <Wand2 className="h-20 w-20 text-primary animate-pulse mb-6" />
            <p className="text-xl font-headline text-gray-700 transition-all duration-500 animate-in fade-in">{currentMessage}</p>
          </div>
        );

      case "final":
        return (
            <div className="flex flex-col items-center justify-center text-center h-64">
                <Sparkles className="h-20 w-20 text-green-500 mb-4"/>
                <h3 className="text-2xl font-bold font-headline text-green-600 mb-2">CONEXÃO ESTABELECIDA!</h3>
                {targetName ? (
                     <p className="text-lg text-gray-700 mb-6">
                        <span className="font-bold text-primary">{targetName}</span> está espiritualmente vulnerável. O vínculo foi mapeado com sucesso.
                    </p>
                ) : (
                    <p className="text-lg text-gray-700 mb-6">
                        Seu campo energético está aberto. O universo está pronto para trazer seu novo amor.
                    </p>
                )}
                <p className="text-md text-gray-600 mb-6">Tudo está pronto. A Lady Soraya aguarda sua confirmação para finalizar o ritual.</p>
                <Button onClick={() => window.location.href = checkoutUrl} size="lg" className="w-full font-bold bg-green-600 text-white hover:bg-green-700 animate-button-glow-success text-lg h-12">FINALIZAR O RITUAL</Button>
            </div>
        );
    }
  };

  return (
    <MagicContainer>
      <Button variant="ghost" size="icon" onClick={onClose} className="absolute top-2 right-2 rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-100">
        <X className="h-5 w-5" />
        <span className="sr-only">Fechar</span>
      </Button>
      {renderContent()}
    </MagicContainer>
  );
}
