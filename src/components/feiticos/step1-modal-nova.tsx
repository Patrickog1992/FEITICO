
"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MagicContainer } from "./magic-container";
import VelaInterativa from "./vela-interativa";
import { Textarea } from "../ui/textarea";

type Step1ModalProps = {
  onComplete: () => void;
};

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Seu nome deve ter pelo menos 2 caracteres.",
  }),
  targetName: z.string().min(2, {
    message: "O nome dele deve ter pelo menos 2 caracteres.",
  }),
  behavior: z.string().min(10, {
    message: "Descreva o comportamento com pelo menos 10 caracteres.",
  }),
});

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    if (timeLeft === 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="text-center my-4">
      <p className="text-lg">Isto vai expirar em...</p>
      <p className="text-2xl font-bold text-red-500">
        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </p>
    </div>
  );
};


export default function Step1Modal({ onComplete }: Step1ModalProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      targetName: "",
      behavior: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    window.location.href = 'https://pay.kirvano.com/9e2a7067-9ff4-4612-9f68-0b355238ae45';
  }

  return (
    <MagicContainer>
      <h2 className="mb-1 text-center font-headline text-xl font-semibold">
        Etapa 1: Detalhes para o Feitiço
      </h2>
      <p className="mb-2 text-center text-sm text-muted-foreground">Preencha os campos para Lady Soraya</p>
      <Timer />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          
          <VelaInterativa />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Seu primeiro nome</FormLabel>
                <FormControl>
                  <Input placeholder="Digite aqui seu nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="targetName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome dele</FormLabel>
                <FormControl>
                  <Input placeholder="Digite aqui o nome do homem desejado" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="behavior"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sobre o feitiço</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Digite aqui o comportamento exato que a pessoa tenha com você"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" size="lg" className="w-full font-bold bg-success text-success-foreground hover:bg-success/90 animate-button-glow-success">
            👉 QUERO O FEITIÇO AGORA
          </Button>
        </form>
      </Form>
    </MagicContainer>
  );
}
