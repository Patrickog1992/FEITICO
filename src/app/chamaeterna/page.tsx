
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import RitualFogoBanner from "@/components/feiticos/ritual-fogo-banner";
import TestimonialsRitualFogo from "@/components/feiticos/testimonials-ritual-fogo";
import RitualFogoSocialProof from "@/components/feiticos/ritual-fogo-social-proof";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Sparkles, Wand2, ShieldCheck, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

const AltarInterativo = () => {
    const [isLit, setIsLit] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center cursor-pointer group" onClick={() => setIsLit(!isLit)}>
            <div className="relative w-40 h-24">
                {/* Chama */}
                {isLit && (
                    <div className="absolute inset-x-0 -top-16 flex items-center justify-center">
                        <svg
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-24 h-24 sm:w-28 sm:h-28"
                        >
                            <defs>
                                <style>
                                {`
                                @keyframes flicker {
                                    0%, 100% { transform: scaleY(1) scaleX(1) translateY(0) rotate(0); opacity: 1; }
                                    50% { transform: scaleY(0.95) scaleX(1.05) translateY(2px) rotate(-1deg); opacity: 0.9; }
                                }
                                @keyframes glow {
                                    0%, 100% { filter: drop-shadow(0 0 8px hsl(var(--primary) / 0.9)); }
                                    50% { filter: drop-shadow(0 0 18px hsl(var(--primary))); }
                                }
                                .flame {
                                    transform-origin: 50% 100%;
                                    animation: flicker 1.5s ease-in-out infinite;
                                }
                                .glow {
                                animation: glow 1.5s ease-in-out infinite;
                                }
                                `}
                                </style>
                                <linearGradient id="flameGradient" x1="50%" y1="0%" x2="50%" y2="100%">
                                    <stop offset="0%" stopColor="hsl(50 100% 85%)" />
                                    <stop offset="60%" stopColor="hsl(35 100% 60%)" />
                                    <stop offset="100%" stopColor="hsl(10 100% 50% / 0.7)" />
                                </linearGradient>
                            </defs>
                             <g className="flame glow">
                                <path
                                    d="M50 100 C 50 100, 20 85, 30 50 S 50 20, 50 0 S 70 20, 70 50 S 50 100, 50 100 Z"
                                    fill="url(#flameGradient)"
                                />
                                 <path
                                    d="M50 100 C 50 100, 35 88, 40 60 S 50 40, 50 20 S 60 40, 60 60 S 50 100, 50 100 Z"
                                     fill="hsl(55, 100%, 95%)"
                                     transform="scale(0.7) translate(21, 38)"
                                />
                            </g>
                        </svg>
                    </div>
                )}
                 {/* Altar Base */}
                <svg viewBox="0 0 160 80" className="w-full h-full absolute bottom-0 left-0">
                    <path d="M10 30 L150 30 L140 80 L20 80 Z" className="fill-gray-400 stroke-gray-500 stroke-width-2" />
                    <path d="M5 20 L155 20 L150 30 L10 30 Z" className="fill-gray-500 stroke-gray-600 stroke-width-2" />
                    <rect x="30" y="35" width="100" height="10" rx="2" className="fill-gray-600/50" />
                     <rect x="50" y="50" width="60" height="10" rx="2" className="fill-gray-600/50" />
                </svg>
            </div>
             <p className="text-xs sm:text-sm text-muted-foreground mt-2 text-center group-hover:text-primary transition-colors">
                {isLit ? 'A chama da fé está acesa!' : 'Clique no altar para acender a chama'}
            </p>
        </div>
    );
};


const AltarDaFe = ({ onRitualStart, checkoutUrl }: { onRitualStart: (targetName: string) => void, checkoutUrl: string }) => {
    const [timeLeft, setTimeLeft] = useState(90); // 90 seconds = 1:30
    const [checkboxes, setCheckboxes] = useState({
        cond1: false,
        cond2: false,
        cond3: false,
    });

    const allChecked = Object.values(checkboxes).every(Boolean);

    const formSchema = z.object({
        requesterName: z.string().min(2, { message: "Seu primeiro nome é obrigatório." }),
        targetName: z.string().min(2, { message: "O nome da pessoa amada é obrigatório." }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            requesterName: "",
            targetName: "",
        },
    });
    
    useEffect(() => {
        if (timeLeft <= 0) return;
        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(1, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleCheckboxChange = (id: keyof typeof checkboxes) => {
        setCheckboxes((prev) => ({ ...prev, [id]: !prev[id] }));
    };
    
    function onSubmit(values: z.infer<typeof formSchema>) {
       onRitualStart(values.targetName);
    }

    return (
        <div className="w-full max-w-md mx-auto rounded-lg p-4 sm:p-6 bg-white border shadow-2xl my-4 sm:my-8 animate-in fade-in-50">
            <div className="text-center mb-4">
                <p className="font-semibold text-destructive">Expira em: {formatTime(timeLeft)}</p>
                <h2 className="text-xl sm:text-2xl font-headline font-bold text-gray-800 mt-2">
                    Concorde com as condições da Sacerdotisa Azara
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">Marque todas as opções abaixo para liberar o feitiço</p>
            </div>
            
            <div className="space-y-3 my-4 mt-8">
                <div className="flex items-start space-x-2">
                    <Checkbox id="cond1" checked={checkboxes.cond1} onCheckedChange={() => handleCheckboxChange('cond1')} className="mt-1" />
                    <label htmlFor="cond1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Eu entendo que é necessária fé para que este feitiço funcione.
                    </label>
                </div>
                    <div className="flex items-start space-x-2">
                    <Checkbox id="cond2" checked={checkboxes.cond2} onCheckedChange={() => handleCheckboxChange('cond2')} className="mt-1" />
                    <label htmlFor="cond2" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Eu não contarei a ninguém sobre o feitiço (isso causará o rompimento do encantamento).
                    </label>
                </div>
                    <div className="flex items-start space-x-2">
                    <Checkbox id="cond3" checked={checkboxes.cond3} onCheckedChange={() => handleCheckboxChange('cond3')} className="mt-1"/>
                    <label htmlFor="cond3" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Eu entendo que, uma vez lançado, este feitiço não pode ser desfeito.
                    </label>
                </div>
            </div>
            
            <div className="my-16 mt-20">
                <AltarInterativo />
            </div>
            
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                control={form.control}
                name="requesterName"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-sm font-semibold">Seu primeiro nome</FormLabel>
                        <FormControl>
                            <Input placeholder="Digite aqui seu nome" {...field} autoComplete="off" />
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
                            <FormLabel className="text-sm font-semibold">Nome da pessoa amada</FormLabel>
                        <FormControl>
                            <Input placeholder="Digite aqui o nome da pessoa desejada" {...field} autoComplete="off" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit" size="lg" className="w-full font-bold bg-green-600 text-white hover:bg-green-700 text-lg py-3 h-auto disabled:bg-gray-400" disabled={!allChecked}>
                👉 QUERO O FEITIÇO AGORA
                </Button>
            </form>
            </Form>
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-2">
                <ShieldCheck className="h-3 w-3" />
                <span>Dados criptografados e sigilosos</span>
            </div>
        </div>
    );
};

const LoadingRitual = ({ targetName, onLoadingComplete }: { targetName: string, onLoadingComplete: () => void }) => {
    const loadingMessages = [
        "Invocando a Sacerdotisa Azara...",
        "Analisando as energias cósmicas...",
        "Conectando à alma de {TARGET_NAME}...",
        "Tecendo os fios do destino...",
        "Alinhando os corações...",
    ];
    
    const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingMessageIndex((prevIndex) => {
            if (prevIndex < loadingMessages.length - 1) {
                return prevIndex + 1;
            }
            clearInterval(interval);
            onLoadingComplete();
            return prevIndex;
            });
        }, 1500);
        return () => clearInterval(interval);
    }, [onLoadingComplete, loadingMessages.length]);

    const currentMessage = loadingMessages[loadingMessageIndex].replace('{TARGET_NAME}', targetName);
    return (
        <div className="flex flex-col items-center justify-center text-center h-[60vh] animate-in fade-in-50">
            <Wand2 className="h-20 w-20 text-primary animate-pulse mb-6" />
            <p className="text-xl font-headline text-gray-700 transition-all duration-500">
              {currentMessage}
            </p>
        </div>
    );
}

const RitualFinal = ({ targetName, checkoutUrl }: { targetName: string, checkoutUrl: string }) => {
     return (
        <div className="flex flex-col items-center justify-center text-center h-[60vh] max-w-md mx-auto animate-in fade-in-50">
            <Sparkles className="h-20 w-20 text-green-500 mb-4"/>
            <h3 className="text-2xl font-bold font-headline text-green-600 mb-2">CONEXÃO DETECTADA!</h3>
            <p className="text-lg text-gray-700 mb-6">
                <span className="font-bold text-primary">{targetName}</span> está vulnerável à chama hoje.
            </p>
            <p className="text-md text-gray-600 mb-6">O ritual já começou. A Sacerdotisa Azara aguarda sua confirmação para finalizar.</p>
            <Button 
                onClick={() => window.location.href = checkoutUrl}
                size="lg" 
                className="w-full font-bold bg-green-600 text-white hover:bg-green-700 animate-button-glow-success text-lg h-12">
                FINALIZAR RITUAL AGORA
            </Button>
        </div>
    );
}


// Page components
const Section: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <section
    className={`w-full max-w-3xl mx-auto my-8 md:my-12 px-4 ${className}`}
  >
    {children}
  </section>
);

const SectionTitle: React.FC<{ children: React.ReactNode, className?: string }> = ({
  children,
  className
}) => <h2 className={`font-headline text-3xl font-bold text-center text-primary mb-6 ${className}`}>{children}</h2>;

const Paragraph: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <p className={`text-lg text-foreground/80 mb-4 leading-relaxed ${className}`}>
    {children}
  </p>
);

export default function ChamaEternaPage() {
  const [pageState, setPageState] = useState<'landing' | 'form' | 'loading' | 'final'>('landing');
  const [targetName, setTargetName] = useState("");

  const handleStartRitual = () => {
    setPageState('form');
  };

  const handleFormSubmit = (name: string) => {
    setTargetName(name);
    setPageState('loading');
  }
  
  const handleLoadingComplete = () => {
      setPageState('final');
  }

  const checkoutUrl = "https://pay.kirvano.com/562d86be-b4f9-49fc-b88f-bf16e2fdb785";

  const renderContent = () => {
    switch (pageState) {
        case 'landing':
            return (
                <>
                <div className="w-full max-w-4xl mx-auto pt-8">
                    <RitualFogoBanner />
                </div>
                <header className="text-center my-8 md:my-12 px-4 max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary uppercase">
                    Sussurre o nome dele nesta chama sagrada… e em até 5 noites ele vai ficar totalmente obcecado por você
                    </h1>
                </header>
                
                <main>
                    <Section className="text-center">
                    <Image
                        src="https://i.imgur.com/rJhARQH.jpeg"
                        alt="Chama sagrada"
                        width={700}
                        height={400}
                        className="rounded-lg shadow-lg mx-auto"
                    />
                    <Paragraph className="mt-6 font-semibold text-foreground">
                        Ele vai se revirar na cama à noite, incapaz de tirar você da cabeça. E, na quinta noite, vai rastejar de volta para você como se a vida dele dependesse disso.
                    </Paragraph>
                    </Section>

                    <Section>
                    <Paragraph>Eu não imploro para homens.</Paragraph>
                    <Paragraph>Eu não corro atrás deles.</Paragraph>
                    <Paragraph>E com certeza não fico sentada chorando, me perguntando por que ele “precisa de espaço”.</Paragraph>
                    <Paragraph>Porque eu encontrei algo mais antigo. Mais sombrio. Algo contra o qual ele não consegue lutar.</Paragraph>
                    <Paragraph>Tudo o que fiz foi entregar o nome dele a uma sacerdotisa que guarda uma chama antiga que queima há mais de 1.500 anos.</Paragraph>
                    <Paragraph>Ela sussurrou o nome dele no fogo.</Paragraph>
                    <Paragraph>E em menos de 48 horas, ele estava explodindo meu celular.</Paragraph>
                    <Paragraph className="font-bold">Implorando. Chorando. Rastejando de volta como um homem que perdeu completamente o controle.</Paragraph>
                    </Section>

                    <Section>
                    <SectionTitle>A Última Vez Que Ele Se Afastou…</SectionTitle>
                    <Paragraph>Ele achou que podia simplesmente sumir.</Paragraph>
                    <Paragraph>Me deixar no vácuo.</Paragraph>
                    <Paragraph>Agir como se o que tivemos não tivesse significado nada.</Paragraph>
                    <Paragraph className="font-bold text-xl text-center">Ahhh que fofo.</Paragraph>
                    <Paragraph>Entreguei o nome dele à Sacerdotisa Azara. Ela acendeu a vela sagrada em seu templo de fogo, pronunciou o nome dele na chama e deixou o fogo fazer o trabalho.</Paragraph>
                    
                    <div className="my-8 text-center">
                        <Image
                        src="https://i.imgur.com/kkGFDp4.jpeg"
                        alt="Sacerdotisa Azara"
                        width={500}
                        height={500}
                        className="rounded-lg shadow-lg mx-auto"
                        />
                        <p className="text-center text-sm font-semibold tracking-widest text-primary mt-2">SACERDOTISA</p>
                    </div>

                    <Paragraph>Na manhã seguinte?</Paragraph>
                    <Paragraph className="italic">Uma mensagem do nada: “Tive o sonho mais estranho com você. Não consigo parar de pensar em você.”</Paragraph>
                    <Paragraph>Na terceira noite?</Paragraph>
                    <Paragraph className="italic">37 ligações perdidas. Mensagens sem parar: “Me desculpa. Não sei o que está acontecendo comigo. Eu preciso te ver.”</Paragraph>
                    <Paragraph>Na quinta noite?</Paragraph>
                    <Paragraph className="italic">Ele estava na minha porta. Olhos vermelhos. Voz tremendo. Jurando que nunca mais me deixaria.</Paragraph>
                    <Paragraph>Disse que sentia o peito em chamas e que eu era a única coisa capaz de apagar aquele fogo.</Paragraph>
                    <Paragraph className="font-bold text-center">Tudo isso em menos de 5 noites.</Paragraph>
                    </Section>

                    <Section>
                    <SectionTitle>Por Que Isso Funciona (E Por Que Todo o Resto Falha)</SectionTitle>
                    <Paragraph>A maioria das mulheres faz tudo errado.</Paragraph>
                    <Paragraph>Elas choram abraçadas ao travesseiro.</Paragraph>
                    <Paragraph>Mandam mensagens patéticas de “só passando para saber como você está”.</Paragraph>
                    <Paragraph>Stalkeiam as redes sociais dele, morrendo por dentro toda vez que ele posta algo.</Paragraph>
                    <Paragraph>Ouvem amigas dizendo: “Dá espaço, ele volta.”</Paragraph>
                    <Paragraph className="font-bold text-primary border-l-4 border-primary pl-4">Deixa eu te contar a verdade: ele não volta.</Paragraph>
                    <Paragraph>Homens não voltam por causa de “espaço”.</Paragraph>
                    <Paragraph>Não voltam porque você implorou.</Paragraph>
                    <Paragraph>Não voltam porque você “deu tempo para ele pensar”.</Paragraph>
                    <Paragraph className="font-bold">Eles voltam quando algo se agarra à alma deles e não solta mais.</Paragraph>
                    <Paragraph className="font-bold">E é exatamente isso que essa chama faz.</Paragraph>
                    <Paragraph>Ela não pede. Não convence. Ela queima o seu nome no espírito dele até você ser tudo em que ele consegue pensar.</Paragraph>
                    </Section>
                    
                    <Section>
                    <SectionTitle>O Segredo Proibido dos Templos de Fogo da Pérsia</SectionTitle>
                    <Image
                        src="https://i.imgur.com/RfnM0Aw.jpeg"
                        alt="Templos de Fogo da Pérsia"
                        width={700}
                        height={400}
                        className="rounded-lg shadow-lg mx-auto mb-6"
                    />
                    <Paragraph>Isso não é um truque moderno de “manifestação”.</Paragraph>
                    <Paragraph>Não são velas de loja barata e pensamentos positivos.</Paragraph>
                    <Paragraph>É um ritual de fogo antigo que remonta a mais de 3.000 anos, às sacerdotisas zoroastristas da Pérsia.</Paragraph>
                    <Paragraph>Elas sabiam algo que foi escondido das mulheres por séculos:</Paragraph>
                    <Paragraph className="font-bold text-primary border-l-4 border-primary pl-4">Todo homem tem um ponto na alma que pode ser incendiado. E quando é aceso, ele queima por uma mulher — e apenas uma.</Paragraph>
                    <Paragraph>Rainhas usavam isso para manter seus reis leais. Tão leais que abandonavam amantes, largavam guerras pela metade e atravessavam reinos inteiros apenas para estar perto dela novamente.</Paragraph>
                    <Paragraph>Os sacerdotes odiavam isso.</Paragraph>
                    <Paragraph>Chamavam de perigoso.</Paragraph>
                    <Paragraph>Tentaram enterrar esse conhecimento.</Paragraph>
                    <Paragraph>Mas os sussurros nunca cessaram.</Paragraph>
                    <Paragraph>Porque toda mulher que usava sabia a verdade:</Paragraph>
                    <Paragraph className="font-bold text-center text-xl">Uma vez que o nome dele entra na chama sagrada, a alma dele fica ligada a você. E esse fogo nunca se apaga.</Paragraph>
                    </Section>

                    <Section>
                    <SectionTitle>Os Homens Acham Que Estão no Controle</SectionTitle>
                    <Paragraph>Não estão.</Paragraph>
                    <Paragraph>Todo homem tem um interruptor escondido dentro dele. Chame de circuito da obsessão. Instinto primitivo. O que quiser.</Paragraph>
                    <Paragraph>Quando está ligado?</Paragraph>
                    <Paragraph>Ele não consegue pensar direito. Não consegue dormir. Não para de te imaginar. O corpo inteiro dele anseia por você.</Paragraph>
                    <Paragraph>Quando está desligado?</Paragraph>
                    <Paragraph>Ele fica frio. Distante. Some.</Paragraph>
                    <Paragraph className="font-bold text-primary border-l-4 border-primary pl-4">O que a maioria das mulheres não sabe:</Paragraph>
                    <Paragraph className="font-bold">O Ritual da Chama de 5 Noites liga esse interruptor novamente. E, uma vez ligado, ele permanece ligado.</Paragraph>
                    <Paragraph>Por isso as mulheres chamam de “ritual do Homem em Chamas”.</Paragraph>
                    <Paragraph>Porque quando o nome dele toca a chama, ele queima por você. E somente por você.</Paragraph>
                    </Section>
                    
                    <Section>
                    <SectionTitle>O Que Acontece Ao Longo das 5 Noites</SectionTitle>
                    <Image
                        src="https://i.imgur.com/EcmtW16.jpeg"
                        alt="Ritual de 5 noites"
                        width={700}
                        height={400}
                        className="rounded-lg shadow-lg mx-auto mb-6"
                    />
                    <Paragraph>Isso não são meses de espera.</Paragraph>
                    <Paragraph>Não são anos de terapia.</Paragraph>
                    <Paragraph>Não é “manifestar por seis meses e torcer para dar certo”.</Paragraph>
                    <Paragraph>A Sacerdotisa Azara sussurra o nome dele na chama sagrada e, em até 5 noites, o mundo dele vira de cabeça para baixo.</Paragraph>
                    
                    <div className="space-y-4 mt-6">
                        <p><strong>Noite 1: A Primeira Faísca</strong><br/>No momento em que o nome dele entra na chama, algo muda. Ele vai se sentir inquieto naquela noite. Vai se revirar às 3 da manhã sem saber por quê. Seu rosto vai piscar na mente dele. Ele sentirá uma dor estranha no peito que não consegue explicar.</p>
                        <p><strong>Noite 2: O Calor Aumenta</strong><br/>Ele começa a pensar em você mais. Muito mais. Vai se pegar olhando fotos antigas suas. Revivendo conversas. A ideia de você com outro homem vai deixá-lo enjoado.</p>
                        <p><strong>Noite 3: O Fogo se Espalha</strong><br/>Agora ele não consegue mais se livrar de você. Vai sonhar com você de forma tão real que acorda confuso. Os amigos vão perceber que algo está errado. Ele vai mandar uma mensagem fraca só para “testar o terreno”, porque não aguenta mais a pressão.</p>
                        <p><strong>Noite 4: O Incêndio</strong><br/>Ele está perdendo o controle. Não consegue focar no trabalho. Não sente prazer em nada. Todas as outras mulheres parecem sem graça perto de você. O fogo queimou tudo. Só você restou na mente dele.</p>
                        <p><strong>Noite 5: Rendição Total</strong><br/>Ele quebra. O orgulho? Sumiu. As defesas? Viraram cinzas. Ele liga. Ele manda mensagem. Ele aparece. Chora, pede desculpas e jura que nunca mais vai te deixar. Diz coisas como: “Não sei o que aconteceu comigo, mas não consigo viver sem você.”</p>
                    </div>
                    </Section>

                    <Section>
                    <SectionTitle>Mas Preciso Te Avisar…</SectionTitle>
                    <Paragraph>Isso não é brincadeira.</Paragraph>
                    <Paragraph>Não é um “trabalho energético” inofensivo.</Paragraph>
                    <Paragraph>Quando a Sacerdotisa Azara realiza esse ritual, os homens não apenas voltam.</Paragraph>
                    <Paragraph className="font-bold">Eles grudam.</Paragraph>
                    <Paragraph className="font-bold">Eles se tornam obcecados.</Paragraph>
                    <Paragraph className="font-bold">Eles não se cansam de você.</Paragraph>
                    <Paragraph className="text-center font-bold text-destructive border-2 border-destructive p-4 rounded-lg">Se você não está pronta para ele te desejar a cada segundo de todos os dias… não faça isso.</Paragraph>
                    </Section>
                    
                    <Section>
                        <SectionTitle>Histórias Reais de Mulheres Que Usaram a Chama</SectionTitle>
                        <p className="text-lg text-foreground/80 mb-8 text-center">Veja o que elas estão dizendo...</p>
                        <TestimonialsRitualFogo />
                    </Section>

                    <Section>
                        <SectionTitle>A História Proibida Que Tentaram Enterrar</SectionTitle>
                        <Paragraph>Acha que eu inventei isso?</Paragraph>
                        <Paragraph>Não.</Paragraph>
                        <Paragraph>Esse ritual é mais antigo que a igreja.</Paragraph>
                        <Paragraph>Mais antigo que a terapia.</Paragraph>
                        <Paragraph>Mais antigo que qualquer conselho de relacionamento que você já ouviu.</Paragraph>
                        <Paragraph>Mulheres usam o fogo para ligar homens há milhares de anos.</Paragraph>
                        <Paragraph>Em templos persas antigos.</Paragraph>
                        <Paragraph>Em câmaras escondidas.</Paragraph>
                        <Paragraph>Em cerimônias secretas passadas de mãe para filha.</Paragraph>
                        <Paragraph>Porque toda mulher que aprendia isso sabia de uma coisa:</Paragraph>
                        <Paragraph className="font-bold text-center text-xl">Homens são fracos. Homens podem ser controlados. Homens podem ser ligados.</Paragraph>
                        <Paragraph>E o fogo era como elas faziam isso.</Paragraph>
                    </Section>

                    <Section>
                    <SectionTitle>Rainhas Que Fizeram Reis Rastejarem</SectionTitle>
                    <Image
                        src="https://i.imgur.com/1sAIPUI.jpeg"
                        alt="Rainha e Rei"
                        width={700}
                        height={400}
                        className="rounded-lg shadow-lg mx-auto mb-6"
                    />
                    <Paragraph>Existem histórias — sussurradas, apagadas dos livros de história — sobre rainhas que usaram a chama sagrada para trazer seus reis de volta.</Paragraph>
                    <Paragraph>Uma rainha mandou realizar o ritual enquanto seu rei estava em guerra, com outra mulher em sua tenda.</Paragraph>
                    <Paragraph>Cinco noites depois?</Paragraph>
                    <Paragraph>Ele abandonou a amante.</Paragraph>
                    <Paragraph>Abandonou a guerra.</Paragraph>
                    <Paragraph>Abandonou o exército.</Paragraph>
                    <Paragraph>Cavalgou de volta até ela, pálido e tremendo, sussurrando: “Não consigo respirar sem você.”</Paragraph>
                    <Paragraph>Os generais chamaram de loucura.</Paragraph>
                    <Paragraph>Os sacerdotes chamaram de bruxaria.</Paragraph>
                    <Paragraph className="font-bold">Ela chamou de poder.</Paragraph>
                    </Section>
                    
                    <Section>
                        <SectionTitle>Tentaram Destruir Isso</SectionTitle>
                        <Paragraph>Quando os sacerdotes perceberam o que as mulheres faziam com a chama sagrada?</Paragraph>
                        <Paragraph>Entraram em pânico.</Paragraph>
                        <Paragraph>Chamaram de mal.</Paragraph>
                        <Paragraph>Disseram que ameaçava a ordem natural.</Paragraph>
                        <Paragraph>Por quê?</Paragraph>
                        <Paragraph>Porque funcionava.</Paragraph>
                        <Paragraph>Porque homens “lógicos” desmoronavam como crianças.</Paragraph>
                        <Paragraph>Porque homens “fortes” choravam como bebês.</Paragraph>
                        <Paragraph>Porque homens “fiéis” abandonavam tudo para rastejar de volta a uma mulher.</Paragraph>
                        <Paragraph>Então proibiram. Queimaram os textos. Espalharam as sacerdotisas.</Paragraph>
                        <Paragraph>Mas sussurros nunca morrem.</Paragraph>
                        <Paragraph>O conhecimento sobreviveu. Passado em segredo de guardiã para guardiã.</Paragraph>
                        <Paragraph className="font-bold text-center text-xl">E agora está aqui. Pronto para ligar a alma do seu homem à sua.</Paragraph>
                    </Section>
                    
                    <Section className="text-center">
                        <SectionTitle>Quem É a Sacerdotisa Azara?</SectionTitle>
                        <Image
                            src="https://i.imgur.com/S0BPoDO.jpeg"
                            alt="Sacerdotisa Azara close-up"
                            width={500}
                            height={500}
                            className="rounded-lg shadow-lg mx-auto"
                        />
                        <Paragraph className="mt-6">A Sacerdotisa Azara é descendente direta dos guardiões do fogo zoroastristas da antiga Pérsia.</Paragraph>
                        <Paragraph>A família dela guarda a chama sagrada há mais de 1.500 anos. Quando os templos foram destruídos, eles fugiram com as brasas, mantendo a tradição viva em segredo.</Paragraph>
                        <Paragraph>Hoje, ela realiza o ritual da chama em seu templo particular para um número limitado de mulheres por semana.</Paragraph>
                        <Paragraph>Ela não faz isso por dinheiro. É o chamado dela. O propósito dela. Garantir que esse poder antigo não se perca no mundo.</Paragraph>
                        <Paragraph className="font-bold">Mas o ritual a drena. Cada um exige dias de preparação e recuperação. Por isso ela só pode ajudar um número limitado de mulheres.</Paragraph>
                    </Section>

                    <Section>
                        <SectionTitle>Como Funciona</SectionTitle>
                        <Paragraph className="text-center">É simples.</Paragraph>
                        <div className="space-y-4 text-center">
                            <p><strong>1 –</strong> Você clica no botão abaixo e preenche um formulário curto com o nome dele e alguns detalhes da sua situação.</p>
                            <p><strong>2 –</strong> A Sacerdotisa Azara realiza o Ritual da Chama de 5 Noites em seu templo, sussurrando o nome dele no fogo sagrado a cada noite.</p>
                            <p><strong>3 –</strong> Você segue com a sua vida enquanto a chama faz o trabalho na alma dele.</p>
                            <p><strong>4 –</strong> Em até 5 noites, veja ele rastejar de volta.</p>
                        </div>
                        <Paragraph className="text-center mt-4">É isso. Você não precisa fazer nada além de estar pronta quando ele quebrar.</Paragraph>
                    </Section>
                    
                    <Section className="text-center bg-card/80 p-6 rounded-2xl shadow-2xl shadow-primary/10 backdrop-blur-sm">
                        <SectionTitle>Quanto Vale a Obsessão Dele Para Você?</SectionTitle>
                        <Paragraph>Seja honesta.</Paragraph>
                        <Paragraph>Quanto você pagaria para acabar com a humilhação de ser ignorada?</Paragraph>
                        <Paragraph>Para cortar a outra mulher da vida dele de vez?</Paragraph>
                        <Paragraph>Para vê-lo de joelhos, implorando por outra chance?</Paragraph>
                        <Paragraph>Mulheres gastam milhares em terapia e coaches que não funcionam. Perdem meses com estratégias de “nenhum contato” que não levam a lugar nenhum.</Paragraph>
                        <Paragraph>Nada disso liga o interruptor da obsessão dele.</Paragraph>
                        <Paragraph className="font-bold">Nada disso queima seu nome na alma dele.</Paragraph>
                        <Paragraph className="font-bold text-xl mt-4">Mas isso faz.</Paragraph>
                    </Section>
                    
                    <Section className="text-center">
                        <SectionTitle>Seu Preço Hoje</SectionTitle>
                        <Paragraph>A Sacerdotisa Azara não faz isso por lucro. Mas precisamos cobrir os custos de manter este site e o templo dela.</Paragraph>
                        <Paragraph>Então concordamos em um valor acessível para qualquer mulher, independentemente da situação.</Paragraph>
                        <Paragraph className="text-xl line-through text-destructive">Não R$500.</Paragraph>
                        <Paragraph className="text-xl line-through text-destructive">Não R$200.</Paragraph>
                        <Paragraph className="text-2xl line-through text-destructive mb-4">Nem mesmo R$100.</Paragraph>
                        <Paragraph className="text-2xl">Hoje, você pode ter o Ritual da Chama de 5 Noites realizado por apenas <span className="font-bold text-green-500 text-3xl">R$37</span>.</Paragraph>
                        <Paragraph>Trinta e sete reais.</Paragraph>
                        <Paragraph>Menos que um jantar fora.</Paragraph>
                        <Paragraph className="font-bold text-xl">Pelo poder de fazer ele queimar por você para sempre.</Paragraph>
                        <Button
                            onClick={handleStartRitual}
                            size="lg"
                            className="mt-8 animate-button-glow-success bg-success text-success-foreground hover:bg-success/90 font-bold w-full max-w-md text-lg h-auto py-3"
                        >
                        ACENDA A CHAMA
                        </Button>
                        <SectionTitle className="text-destructive mt-8">Mas Você Precisa Agir Agora</SectionTitle>
                    </Section>

                    <Section className="text-center">
                        <Image
                            src="https://i.imgur.com/gLqf1pr.jpeg"
                            alt="Vagas limitadas"
                            width={700}
                            height={400}
                            className="rounded-lg shadow-lg mx-auto mb-6"
                        />
                        <Paragraph>A Sacerdotisa Azara só consegue realizar um número limitado de rituais por semana. A energia dela não é infinita. Quando as vagas acabam, acabam — até ela se recuperar.</Paragraph>
                        <Paragraph>Se você fechar esta página e voltar amanhã, sua vaga pode já ter sido tomada.</Paragraph>
                        <Paragraph className="font-bold">Cada noite que você espera é mais uma noite em que ele se afasta.</Paragraph>
                        <Paragraph className="font-bold">Mais uma noite em que ela crava as garras mais fundo nele.</Paragraph>
                        <Paragraph className="font-bold">Mais uma noite que você perde.</Paragraph>
                        <Paragraph className="text-2xl font-bold text-destructive my-6">E Aqui Está a Verdade Mais Sombria…</Paragraph>
                        <Paragraph>Esta página pode não ficar no ar.</Paragraph>
                        <Paragraph>Eles já tentaram enterrar esse ritual antes.</Paragraph>
                        <Paragraph>Terapeutas, coaches de relacionamento, toda a indústria de “autoajuda” — eles adorariam ver isso desaparecer.</Paragraph>
                        <Paragraph>Porque quando mulheres têm esse poder, os homens não têm chance.</Paragraph>
                        <Paragraph>Não posso prometer que esta página estará aqui amanhã.</Paragraph>
                        <Paragraph>Mas posso prometer isto:</Paragraph>
                        <Paragraph className="font-bold text-primary text-xl">👉 Se você agir agora, a Sacerdotisa Azara começará seu ritual ainda hoje à noite.</Paragraph>
                        <Paragraph className="font-bold text-destructive text-xl">👉 Se você esperar, talvez nunca mais veja esta página — ou ele — novamente.</Paragraph>
                        <Button
                            onClick={handleStartRitual}
                            size="lg"
                            className="mt-8 animate-button-glow-success bg-success text-success-foreground hover:bg-success/90 font-bold w-full max-w-md text-lg h-auto py-3"
                        >
                        EU QUERO, ESTOU PRONTA
                        </Button>
                    </Section>

                    <Section className="text-center border-2 border-green-500 rounded-lg p-6 bg-green-500/10">
                    <Image
                        src="https://i.imgur.com/WNTUqfZ.png"
                        alt="Selo de Garantia"
                        width={100}
                        height={100}
                        className="mx-auto mb-4"
                    />
                        <SectionTitle className="!text-green-600 uppercase">O RISCO É 100% MEU</SectionTitle>
                        <Paragraph>Você tem 7 dias completos para ver os resultados.</Paragraph>
                        <Paragraph>Se ele não estiver queimando de obsessão por você…</Paragraph>
                        <Paragraph>Se ele não voltar rastejando, implorando pelo seu perdão…</Paragraph>
                        <Paragraph>Se você não ficar completamente chocada com o nível de desespero dele por você…</Paragraph>
                        <Paragraph className="font-bold">Basta enviar um e-mail e você recebe cada centavo de volta. Sem perguntas. Sem complicações.</Paragraph>
                        <Paragraph className="mt-6 font-semibold">Ou você recupera ele, totalmente devoto a você, ou recebe seu dinheiro de volta.</Paragraph>
                        <Paragraph className="font-bold text-xl">Não há risco.</Paragraph>
                        <Button
                            onClick={handleStartRitual}
                            size="lg"
                            className="mt-8 animate-button-glow-success bg-success text-success-foreground hover:bg-success/90 font-bold w-full max-w-md text-lg h-auto py-3"
                        >
                        GARANTIR O RITUAL
                        </Button>
                    </Section>

                    <Section>
                    <SectionTitle>Perguntas Frequentes</SectionTitle>
                    <div className="space-y-6 max-w-2xl mx-auto">
                        <div>
                            <h3 className="font-bold text-lg text-primary">E se ele estiver com outra mulher?</h3>
                            <Paragraph>Ótimo. Ela é apenas um espaço vazio. A chama não compete com ela — ela apaga. A conexão dele com ela esfria. O toque dela parece errado. A voz dela irrita. Ele olha para ela e sente apenas vazio. E então corre de volta para você.</Paragraph>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-primary">E se ele me bloqueou em tudo?</h3>
                            <Paragraph>Melhor ainda. O bloqueio não o protege. Ele o prende dentro da própria cabeça com o fogo. Ele ficará tão obcecado que dará um jeito de falar com você — uma conta nova, um e-mail, aparecendo pessoalmente. O bloqueio vira a prisão dele, e você é a única saída.</Paragraph>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-primary">E se já se passaram meses ou anos?</h3>
                            <Paragraph>Não importa. O tempo não apaga essa chama. A conexão entre vocês ainda existe como uma brasa enterrada. Esse ritual é o vento que transforma essa brasa em incêndio. Quanto mais tempo passou, mais forte as memórias batem quando voltam.</Paragraph>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-primary">E se ele jurou que nunca voltaria?</h3>
                            <Paragraph>Homens dizem muitas coisas. Palavras grandes. Mas palavras não significam nada quando a alma dele está em chamas. Na quinta noite, ele nem vai lembrar do que jurou. Estará ocupado demais implorando para você aceitá-lo de volta.</Paragraph>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-primary">E se eu não acreditar nisso?</h3>
                            <Paragraph>Você não precisa acreditar. O fogo não liga para crença. Ele queima de qualquer forma. Tudo o que você precisa fazer é entregar o nome dele à Sacerdotisa Azara. Ela cuida do resto.</Paragraph>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-primary">Isso é permanente?</h3>
                            <Paragraph>Sim. Por isso eu avisei. Não é temporário. Uma vez que o nome dele entra na chama, o vínculo é selado. Não faça isso se não tiver certeza de que quer ele ligado a você.</Paragraph>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <Button
                            onClick={handleStartRitual}
                            size="lg"
                            className="mt-8 animate-button-glow-success bg-success text-success-foreground hover:bg-success/90 font-bold w-full max-w-md text-lg h-auto py-3"
                        >
                        QUERO AGORA
                        </Button>
                    </div>
                    </Section>
                </main>
                </>
            );
        case 'form':
            return <AltarDaFe onRitualStart={handleFormSubmit} checkoutUrl={checkoutUrl} />;
        case 'loading':
            return <LoadingRitual targetName={targetName} onLoadingComplete={handleLoadingComplete} />;
        case 'final':
            return <RitualFinal targetName={targetName} checkoutUrl={checkoutUrl} />;
    }
  }

  return (
    <div className="bg-background text-foreground min-h-screen">
      <RitualFogoSocialProof />
      {renderContent()}
    </div>
  );
}
