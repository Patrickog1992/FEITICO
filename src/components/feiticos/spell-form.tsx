"use client";

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
import { useToast } from "@/hooks/use-toast";

type SpellFormProps = {
  onComplete: (data: z.infer<typeof formSchema>) => void;
};

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Seu nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um endereço de e-mail válido.",
  }),
  terms: z.boolean().refine((val) => val === true, {
    message: "Você deve concordar com os termos para continuar.",
  }),
});

export default function SpellForm({ onComplete }: SpellFormProps) {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      terms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    onComplete(values);
    toast({
      title: "Energias Invocadas!",
      description: "O ritual está sendo preparado.",
    });
  }

  return (
    <MagicContainer>
      <h2 className="mb-2 text-center font-headline text-2xl font-semibold">
        Canalize sua Energia
      </h2>
      <p className="mb-6 text-center text-foreground/80">
        Forneça as informações necessárias para que Lady Soraya possa focar o
        feitiço em você.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Seu Nome Completo</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Maria da Silva" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Seu Melhor E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: maria.silva@email.com" {...field} />
                </FormControl>
                <FormDescription>
                  Usado apenas para a canalização do feitiço.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm bg-muted/50">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Termos do Ritual</FormLabel>
                  <FormDescription>
                    Eu compreendo que este feitiço é conjurado com intenções puras e seus efeitos são irreversíveis.
                  </FormDescription>
                   <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <Button type="submit" size="lg" className="w-full font-bold">
            Conjurar Feitiço Agora
          </Button>
        </form>
      </Form>
    </MagicContainer>
  );
}
