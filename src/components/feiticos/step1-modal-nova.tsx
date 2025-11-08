
"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { MagicContainer } from "./magic-container";

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
  terms1: z.boolean().refine((val) => val === true, {
    message: "Você deve concordar com os termos para continuar.",
  }),
  terms2: z.boolean().refine((val) => val === true, {
    message: "Você deve concordar com os termos para continuar.",
  }),
  terms3: z.boolean().refine((val) => val === true, {
    message: "Você deve concordar com os termos para continuar.",
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
      terms1: false,
      terms2: false,
      terms3: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    window.location.href = 'https://pay.kirvano.com/9e2a7067-9ff4-4612-9f68-0b355238ae45';
  }

  return (
    <MagicContainer>
      <h2 className="mb-2 text-center font-headline text-xl font-semibold">
        Etapa 1: Concorde com as Condições de Lady Soraya
      </h2>
      <Timer />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
             <FormField
              control={form.control}
              name="terms1"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Eu entendo que é necessária fé para que este feitiço funcione.</FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="terms2"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Eu não contarei a ninguém sobre o feitiço (isso causará o rompimento do encantamento).</FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="terms3"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Eu entendo que, uma vez lançado, este feitiço não pode ser desfeito.</FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>
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
          
          <Button type="submit" size="lg" className="w-full font-bold bg-accent hover:bg-accent/90 animate-button-glow">
            👉 Ir para a Etapa #2
          </Button>
        </form>
      </Form>
    </MagicContainer>
  );
}
