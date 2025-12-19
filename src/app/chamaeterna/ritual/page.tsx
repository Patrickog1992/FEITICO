
'use client';

import { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { LockIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Label } from '@/components/ui/label';

const formSchema = z.object({
  requesterName: z.string().min(2, { message: "Seu nome é necessário." }),
  targetName: z.string().min(2, { message: "O nome de quem você deseja é necessário." }),
});

const CountdownTimer = () => {
    const [time, setTime] = useState(90); // 1 minuto e 30 segundos

    useEffect(() => {
        if (time === 0) return;
        const timerId = setInterval(() => {
            setTime(prevTime => prevTime - 1);
        }, 1000);
        return () => clearInterval(timerId);
    }, [time]);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
        <div className="text-center font-bold text-lg text-destructive">
            Expira em: {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
    );
};

const AltarInterativo = ({ flameOn, onClick }: { flameOn: boolean, onClick: () => void }) => {
    return (
        <div className="relative w-full h-48 flex items-center justify-center cursor-pointer" onClick={onClick}>
            {/* Altar */}
            <div className="absolute bottom-10 w-32 h-16 bg-stone-700 rounded-t-lg shadow-lg">
                <div className="w-full h-2 bg-stone-800 rounded-t-lg"></div>
            </div>
            <div className="absolute bottom-0 w-48 h-10 bg-stone-600 rounded-t-md shadow-inner"></div>

            {/* Chama */}
            <div className={cn(
                "absolute bottom-20 w-8 h-12 bg-orange-500 rounded-full blur-sm transition-all duration-500",
                flameOn ? "h-32 w-16 blur-md" : "h-12 w-8"
            )}></div>
            <div className={cn(
                "absolute bottom-20 w-4 h-8 bg-yellow-300 rounded-full blur-sm transition-all duration-500",
                flameOn ? "h-24 w-12 blur-lg" : "h-8 w-4"
            )}></div>
        </div>
    );
};

export default function RitualPage() {
    const [checkbox1, setCheckbox1] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);
    const [checkbox3, setCheckbox3] = useState(false);
    const [flameOn, setFlameOn] = useState(false);
    
    const allChecked = useMemo(() => checkbox1 && checkbox2 && checkbox3, [checkbox1, checkbox2, checkbox3]);
    
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        requesterName: "",
        targetName: "",
      },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
      // TODO: Handle form submission
      console.log(values);
      window.location.href = "https://pay.kirvano.com/562d86be-b4f9-49fc-b88f-bf16e2fdb785"
    }

    return (
        <div className="bg-background text-foreground min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md mx-auto bg-card p-6 rounded-2xl shadow-2xl border border-border">
                <CountdownTimer />
                <div className="text-center my-4">
                    <h2 className="text-xl font-bold text-primary">Concorde com as condições da Sacerdotisa Azara</h2>
                    <p className="text-sm text-muted-foreground">Marque todas as opções abaixo para liberar o feitiço</p>
                </div>

                <div className="space-y-4 my-8">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="check1" checked={checkbox1} onCheckedChange={(checked) => setCheckbox1(!!checked)} />
                        <Label htmlFor="check1" className="text-sm">Eu entendo que é necessária fé para que este feitiço funcione.</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="check2" checked={checkbox2} onCheckedChange={(checked) => setCheckbox2(!!checked)} />
                        <Label htmlFor="check2" className="text-sm">Eu não contarei a ninguém sobre o feitiço (isso causará o rompimento do encantamento).</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="check3" checked={checkbox3} onCheckedChange={(checked) => setCheckbox3(!!checked)} />
                        <Label htmlFor="check3" className="text-sm">Eu entendo que, uma vez lançado, este feitiço não pode ser desfeito.</Label>
                    </div>
                </div>
                
                <div className={cn(!allChecked && "opacity-30 pointer-events-none")}>
                    <div className="text-center my-4">
                        <p className="text-sm font-bold text-primary animate-pulse">Clique no altar para a SACERDOTISA chamar o nome dele</p>
                    </div>
                    
                    <AltarInterativo flameOn={flameOn} onClick={() => setFlameOn(true)} />

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                            control={form.control}
                            name="requesterName"
                            render={({ field }) => (
                                <FormItem>
                                <Label className="font-semibold">Seu primeiro nome</Label>
                                <FormControl>
                                    <Input placeholder="Digite aqui seu nome" {...field} className="text-center" />
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
                                <Label className="font-semibold">Nome da pessoa amada</Label>
                                <FormControl>
                                    <Input placeholder="Digite aqui o nome da pessoa desejada" {...field} className="text-center"/>
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <Button type="submit" size="lg" className="w-full font-bold bg-green-600 text-white hover:bg-green-700 animate-button-glow-success text-lg py-3 h-auto">
                            👉 QUERO O FEITIÇO AGORA
                            </Button>
                        </form>
                    </Form>
                     <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-4">
                        <LockIcon className="h-3 w-3" />
                        <span>Dados criptografados e sigilosos</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

    