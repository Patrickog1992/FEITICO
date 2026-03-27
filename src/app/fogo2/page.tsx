
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThumbsUp, Heart, UserPlus, LockIcon, X, Sparkles, Wand2, Flame } from "lucide-react";
import React from "react";
import FacebookPixel from "@/components/analytics/facebook-pixel";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
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
import { Input } from "@/components/ui/input";
import Link from "next/link";
import RitualFogoSocialProof from "@/components/feiticos/ritual-fogo-social-proof";
import { cn } from "@/lib/utils";


// ====================================================================
// BANNER DE DATA DINÂMICA
// ====================================================================
const FogoBanner = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // This will only run on the client side, after hydration
    const date = new Date().toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
    });
    setCurrentDate(date);
  }, []);

  if (!currentDate) {
    return (
      <div className="bg-destructive text-destructive-foreground text-center p-3 text-xs font-semibold w-full max-w-4xl mx-auto rounded-lg mb-4 h-12 animate-pulse" />
    );
  }
  
  return (
    <div className="bg-destructive text-destructive-foreground text-center p-3 text-xs font-semibold w-full max-w-4xl mx-auto rounded-lg mb-4">
      ATENÇÃO: Durante a Quaresma e especialmente no dia <span className="bg-yellow-400 text-black px-2 py-1 rounded-md mx-1">{currentDate}</span>, as energias de renovação e reconciliação estão mais ativas. O Ritual da Chama realizado nesses dias potencializa o retorno de quem se afastou ou atrai um novo amor com intensidade e desejo irresistível.
    </div>
  );
}


// ====================================================================
// TESTEMUNHOS
// ====================================================================

const testimonialsData = [
  {
    name: "Juliana P.",
    avatar: "https://i.imgur.com/Sza1ZfT.png",
    text: "Eu estava cética, mas dei uma chance. Em menos de 24 horas, ele me ligou, pedindo perdão e dizendo que não conseguia parar de pensar em mim. Estamos juntos e mais felizes do que nunca. A magia do fogo é real!",
  },
  {
    name: "Carlos M.",
    avatar: "https://i.imgur.com/BJPY2Qu.jpg",
    text: "Meu relacionamento estava por um fio. Depois do ritual da chama, a energia entre nós mudou completamente. Ela se tornou mais carinhosa, atenciosa e finalmente aceitou meu pedido de casamento! Sou eternamente grata.",
  },
  {
    name: "Sofia O.",
    avatar: "https://i.imgur.com/K5tLVza.jpg",
    text: "Ele tinha ido embora e eu estava arrasada. Uma amiga me indicou o Ritual do Fogo. Fiz o ritual e, em três dias, ele bateu na minha porta com flores, implorando para voltar. É inacreditável!",
  },
  {
    name: "Beatriz A.",
    avatar: "https://i.imgur.com/NVXnmUf.jpg",
    text: "Havia outra pessoa na jogada, e eu pensei que tinha perdido ele para sempre. O ritual não só o trouxe de volta, como afastou a rival de uma vez por todas. Hoje, ele só tem olhos para mim.",
  },
  {
    name: "Clara M.",
    avatar: "https://i.imgur.com/sqYjS4V.png",
    text: "Nunca tive sorte no amor. Decidi tentar o ritual para atrair uma nova pessoa, e o homem dos meus sonhos literalmente apareceu na minha vida uma semana depois. Conexão instantânea. Obrigada, Sacerdotisa!",
  },
  {
    name: "Lucas S.",
    avatar: "https://i.imgur.com/om1IUWv.jpg",
    text: "Estávamos separados há meses. Depois que o nome dela foi sussurrado na chama, ela começou a curtir minhas fotos, me mandou mensagem e hoje estamos planejando nosso futuro juntos. Foi a melhor decisão que já tomei.",
  },
];

type Testimonial = typeof testimonialsData[0] & {
    likes: number;
    hearts: number;
    time: number;
};

const Testimonials = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const [testimonials, setTestimonials] = React.useState<Testimonial[]>([]);

  React.useEffect(() => {
    const testimonialsWithRandoms = testimonialsData.map(t => ({
      ...t,
      likes: Math.floor(Math.random() * (250 - 50 + 1)) + 50,
      hearts: Math.floor(Math.random() * (500 - 150 + 1)) + 150,
      time: Math.floor(Math.random() * (59 - 2 + 1)) + 2,
    }));
    setTestimonials(testimonialsWithRandoms);
  }, []);

  if (testimonials.length === 0) {
    return null;
  }

  return (
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
            loop: true,
        }}
      >
        <CarouselContent className="-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-4 bg-card/50 backdrop-blur-sm rounded-lg border shadow-lg h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <span className="font-semibold text-card-foreground">{testimonial.name}</span>
                </div>
                <p className="text-foreground/80 text-sm flex-grow">
                  {`"${testimonial.text}"`}
                </p>
                <div className="border-t mt-4 pt-2 flex items-center justify-between text-muted-foreground">
                    <div className="flex gap-2">
                        <div className="flex items-center gap-1">
                            <div className="p-1 bg-blue-600 rounded-full">
                                <ThumbsUp className="h-3 w-3 text-white" />
                            </div>
                             <span className="text-xs">{testimonial.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="p-1 bg-red-600 rounded-full">
                               <Heart className="h-3 w-3 text-white fill-white" />
                            </div>
                            <span className="text-xs">{testimonial.hearts}</span>
                        </div>
                    </div>
                     <span className="text-xs">{testimonial.time} min</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
  );
}

// ====================================================================
// COMPONENTES DE LAYOUT DA PÁGINA
// =_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=

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

// ====================================================================
// ALTAR DO FOGO
// ====================================================================
const AltarInterativo = ({ flameOn, onClick }: { flameOn: boolean, onClick: () => void }) => {
    // A more realistic, multi-layered SVG flame component
    const FlameComponent = ({ isOn }: { isOn: boolean }) => (
      <div
        className={cn(
          "absolute bottom-[70px] h-40 w-32 origin-bottom transform-gpu transition-transform duration-500 ease-out",
          isOn ? "scale-100" : "scale-0"
        )}
      >
        <svg
          viewBox="0 0 100 150"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 h-full w-full"
        >
          {/* Outer, softer flame */}
          <path
            d="M50 150 C 10 120, 10 70, 50 0 C 90 70, 90 120, 50 150 Z"
            fill="url(#grad1_f2)"
          />
          {/* Middle, brighter flame */}
          <path
            d="M50 150 C 25 125, 25 80, 50 20 C 75 80, 75 125, 50 150 Z"
            fill="url(#grad2_f2)"
            className="animate-pulse"
            style={{ animationDuration: '2s', opacity: 0.8 }}
          />
          {/* Inner core */}
          <path
            d="M50 150 C 40 130, 40 100, 50 50 C 60 100, 60 130, 50 150 Z"
            fill="white"
            className="animate-pulse"
            style={{ animationDuration: '1.5s', opacity: 0.7 }}
          />
        </svg>
        <svg width="0" height="0">
          <defs>
            <radialGradient id="grad1_f2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style={{ stopColor: "rgba(255,165,0,0.7)", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "rgba(255,0,0,0.3)", stopOpacity: 0 }} />
            </radialGradient>
            <radialGradient id="grad2_f2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style={{ stopColor: "rgba(255,255,0,0.9)", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "rgba(255,165,0,0.4)", stopOpacity: 0 }} />
            </radialGradient>
          </defs>
        </svg>
      </div>
    );

    return (
        <div className="relative w-full h-56 flex items-center justify-center cursor-pointer" onClick={onClick}>
            {/* Altar base */}
            <div className="absolute bottom-10 w-32 h-16 bg-stone-700 rounded-t-lg shadow-lg">
                <div className="w-full h-2 bg-stone-800 rounded-t-lg"></div>
            </div>
            <div className="absolute bottom-0 w-48 h-10 bg-stone-600 rounded-t-md shadow-inner"></div>

            {/* The new flame component */}
            <FlameComponent isOn={flameOn} />
        </div>
    );
};


const AltarDoFogo = ({ onClose, checkoutUrl }: { onClose: () => void, checkoutUrl: string }) => {
    const [step, setStep] = useState<"choice" | "formBringBack" | "formNewLove" | "loading" | "final">("choice");
    const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);
    const [targetName, setTargetName] = useState("");
    const [requesterName, setRequesterName] = useState("");
    const [loadingMessages, setLoadingMessages] = useState<string[]>([]);
    const [flameOn, setFlameOn] = useState(false);
    const [altarMessage, setAltarMessage] = useState("CLIQUE NO ALTAR PARA ACENDER A CHAMA");
    
    const handleAltarClick = () => {
        setFlameOn(true);
        setAltarMessage("A CHAMA ESTÁ ARDENDO");
    }

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

    const renderContent = () => {
        switch (step) {
          case "choice":
            return (
              <>
                <h2 className="text-center text-2xl font-headline font-bold text-gray-800">Qual é a sua intenção?</h2>
                <p className="text-center text-gray-600 mb-6">Escolha o caminho do seu coração para que a Sacerdotisa Azara possa guiar o ritual.</p>
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
                <p className="text-center text-gray-600 mb-6">A Sacerdotisa Azara precisa dos nomes para vincular a alma de vocês dois.</p>
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
                <p className="text-center text-gray-600 mb-6">Informe seu nome para que a Sacerdotisa Azara possa abrir seus caminhos para o amor.</p>
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
                <div className="flex flex-col items-center justify-center text-center">
                    <Sparkles className="h-16 w-16 text-green-500 mb-4"/>
                    <h3 className="text-2xl font-bold font-headline text-green-600 mb-2">CONEXÃO ESTABELECIDA!</h3>
                    {targetName ? (
                         <p className="text-lg text-gray-700 mb-2">
                            <span className="font-bold text-primary">{targetName}</span> está espiritualmente vulnerável. O vínculo foi mapeado com sucesso.
                        </p>
                    ) : (
                        <p className="text-lg text-gray-700 mb-2">
                            Seu campo energético está aberto. O universo está pronto para trazer seu novo amor.
                        </p>
                    )}
                    <div className="text-center my-4">
                        <p className={cn("text-sm font-bold uppercase", flameOn ? "text-destructive" : "text-primary")}>{altarMessage}</p>
                    </div>
                    <AltarInterativo flameOn={flameOn} onClick={handleAltarClick} />
                    <p className="text-md text-gray-600 mt-4 mb-6">Tudo está pronto. A Sacerdotisa Azara aguarda sua confirmação para finalizar o ritual.</p>
                    <Button onClick={() => window.location.href = checkoutUrl} size="lg" className="w-full font-bold bg-green-600 text-white hover:bg-green-700 animate-button-glow-success text-lg h-12">FINALIZAR O RITUAL</Button>
                </div>
            );
        }
      };

      return (
        <div className="relative w-full max-w-md mx-auto rounded-lg p-8 bg-white border shadow-2xl">
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


// ====================================================================
// PÁGINA PRINCIPAL
// ====================================================================
export default function Fogo2Page() {
  const [showAltar, setShowAltar] = useState(false);

  const handleStartRitual = () => {
    setShowAltar(true);
  };

  const handleCloseAltar = () => {
    setShowAltar(false);
  }

  return (
    <>
      <FacebookPixel pixelId="977302024872953" />
      <RitualFogoSocialProof />
      <div className="bg-background text-foreground min-h-screen">
        {showAltar ? (
            <div className="w-full min-h-screen flex items-center justify-center p-4">
                 <AltarDoFogo onClose={handleCloseAltar} checkoutUrl="https://go.perfectpay.com.br/PPU38CQ6JN4" />
            </div>
        ) : (
        <div className="w-full">
            <div className="w-full max-w-4xl mx-auto pt-8">
            <FogoBanner />
            </div>
            <header className="text-center my-8 md:my-12 px-4 max-w-4xl mx-auto">
            <h1 className="text-xl md:text-4xl font-bold font-headline text-primary uppercase">
                Sussurre o nome da pessoa desejada nesta chama sagrada…
                e em até 5 noites, ela vai ficar totalmente obcecada por você 
                ou alguém novo surgirá, tomado por um desejo impossível de ignorar.
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
                priority
                />
                <Paragraph className="mt-6 font-semibold text-foreground">
                    Ele ou ela vai se revirar na cama à noite, incapaz de tirar você da cabeça.
                    E, na quinta noite, vai rastejar de volta para você — ou surgir na sua vida com uma intensidade inexplicável — como se a vida dele(a) dependesse disso.
                </Paragraph>
            </Section>

            <Section>
                <Paragraph>Eu não imploro para ninguém.</Paragraph>
                <Paragraph>Eu não corro atrás de homens ou mulheres.</Paragraph>
                <Paragraph>E com certeza não fico sentada(o) chorando, me perguntando por que a pessoa que eu quero “precisa de espaço”.</Paragraph>
                <Paragraph>Porque eu encontrei algo mais antigo.<br/>Mais sombrio.<br/>Algo contra o qual nenhum coração humano consegue lutar.</Paragraph>
                <Paragraph>Tudo o que fiz foi entregar o nome da pessoa que eu queria trazer de volta — ou atrair pela primeira vez — a uma sacerdotisa que guarda uma chama antiga que queima há mais de 1.500 anos.</Paragraph>
                <Paragraph>Ela sussurrou o nome dele ou dela no fogo.</Paragraph>
                <Paragraph>E em menos de 48 horas, minha realidade começou a mudar.</Paragraph>
                <Paragraph>Mensagens.<br/>Sinais.<br/>Atenção inesperada.<br/>Conexões surgindo do nada.</Paragraph>
                <Paragraph className="font-bold">Implorando. Chorando. Rastejando de volta — ou se aproximando com uma intensidade que eu nunca tinha vivido antes — como alguém que perdeu completamente o controle.</Paragraph>
            </Section>

            <Section>
                <SectionTitle>A Última Vez Que Ele (Ou Ela) Se Afastou…<br/>Ou quando ninguém especial parecia aparecer na minha vida…</SectionTitle>
                <Paragraph>A pessoa achou que podia simplesmente sumir.<br/>Ou o universo parecia me ignorar.</Paragraph>
                <Paragraph>Me deixar no vácuo.<br/>Agir como se o que eu sentia não tivesse significado nada.</Paragraph>
                <Paragraph className="font-bold text-xl text-center">Ahhh… que fofo.</Paragraph>
                <Paragraph>Entreguei o nome — ou a intenção clara de atrair o amor certo — à Sacerdotisa Azara.<br/>Ela acendeu a vela sagrada em seu templo de fogo, pronunciou o nome ou abriu o caminho energético, e deixou o fogo fazer o trabalho.</Paragraph>
                
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
                <Paragraph className="italic">Uma mensagem do nada.<br/>Um encontro inesperado.<br/>Ou alguém dizendo:</Paragraph>
                <Paragraph className="italic">“Tive o sonho mais estranho com você. Não consigo parar de pensar em você.”</Paragraph>
                <Paragraph>Na terceira noite?</Paragraph>
                <Paragraph className="italic">37 ligações perdidas.<br/>Mensagens sem parar.<br/>Ou uma conexão tão intensa que parecia destino:</Paragraph>
                <Paragraph className="italic">“Me desculpa… não sei o que está acontecendo comigo. Eu preciso te ver.”</Paragraph>
                <Paragraph>Na quinta noite?</Paragraph>
                <Paragraph className="italic">Ele ou ela estava na minha porta.<br/>Ou totalmente presente na minha vida.<br/>Olhos vermelhos. Voz tremendo.<br/>Jurando que nunca mais iria embora.</Paragraph>
                <Paragraph>Disse que sentia o peito em chamas e que eu era a única coisa capaz de apagar aquele fogo.</Paragraph>
                <Paragraph className="font-bold text-center">Tudo isso em menos de 5 noites.</Paragraph>
            </Section>

            <Section>
                <SectionTitle>Por Que Isso Funciona (E Por Que Todo o Resto Falha)</SectionTitle>
                <Paragraph>A maioria das pessoas faz tudo errado.</Paragraph>
                <Paragraph>Choram abraçadas ao travesseiro.<br/>Imploram atenção.<br/>Stalkeiam redes sociais.<br/>Ou simplesmente esperam o “amor aparecer”.</Paragraph>
                <Paragraph>Ouvem amigos dizendo:</Paragraph>
                <Paragraph className="font-bold text-primary border-l-4 border-primary pl-4">“Dá tempo ao tempo.”</Paragraph>
                <Paragraph>Deixa eu te contar a verdade:</Paragraph>
                <Paragraph>O amor não volta por espaço.<br/>E não aparece por acaso.</Paragraph>
                <Paragraph className="font-bold">Ele volta — ou surge — quando algo se agarra à alma e não solta mais.</Paragraph>
                <Paragraph className="font-bold">E é exatamente isso que essa chama faz.</Paragraph>
                <Paragraph>Ela não pede.<br/>Não convence.<br/>Ela queima o seu nome — ou a sua energia — no espírito da pessoa certa até você ser tudo em que ela consegue pensar.</Paragraph>
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
                <Paragraph>Não são velas de loja barata nem pensamentos positivos.</Paragraph>
                <Paragraph>É um ritual de fogo antigo que remonta a mais de 3.000 anos, às sacerdotisas zoroastristas da Pérsia.</Paragraph>
                <Paragraph>Elas sabiam algo que foi escondido das pessoas por séculos:</Paragraph>
                <Paragraph className="font-bold text-primary border-l-4 border-primary pl-4">Todo ser humano tem um ponto na alma que pode ser incendiado. E quando é aceso, ele queima por uma única pessoa — e apenas uma.</Paragraph>
                <Paragraph>Rainhas e reis usavam isso para manter seus amores leais. Tão leais que abandonavam amantes, largavam guerras pela metade e atravessavam reinos inteiros apenas para estar perto de quem incendiou sua alma novamente.</Paragraph>
                <Paragraph>Os sacerdotes odiavam isso.</Paragraph>
                <Paragraph>Chamavam de perigoso.</Paragraph>
                <Paragraph>Tentaram enterrar esse conhecimento.</Paragraph>
                <Paragraph>Mas os sussurros nunca cessaram.</Paragraph>
                <Paragraph>Porque toda pessoa que usava sabia a verdade:</Paragraph>
                <Paragraph className="font-bold text-center text-xl">Uma vez que o nome entra na chama sagrada, a alma fica ligada a você.</Paragraph>
                <Paragraph className="font-bold text-center text-xl">E esse fogo nunca se apaga.</Paragraph>
            </Section>

            <Section>
                <SectionTitle>AS PESSOAS ACHAM QUE ESTÃO NO CONTROLE DE TUDO.</SectionTitle>
                <Paragraph className="text-center font-bold text-2xl">Não estão !!</Paragraph>
                <Paragraph>Todo ser humano tem um interruptor escondido dentro de si.<br/>Quando está ligado?</Paragraph>
                <Paragraph>Não consegue pensar.<br/>Não dorme.<br/>Não para de imaginar você.</Paragraph>
                <Paragraph>Quando está desligado?</Paragraph>
                <Paragraph>Fica frio. Distante. Some.</Paragraph>
                <Paragraph className="font-bold text-primary border-l-4 border-primary pl-4">O Ritual da Chama de 5 Noites liga esse interruptor novamente.</Paragraph>
                <Paragraph className="font-bold">Por isso as pessoas chamam de "ritual das pessoas em CHAMAS!'</Paragraph>
                <Paragraph>Because quando o nome toca na chama, essa pessoa vai se queimar por você. E SOMENTE POR VOCÊ</Paragraph>
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
                <Paragraph>A Sacerdotisa Azara sussurra o nome na chama sagrada e, em até 5 noites, o mundo da pessoa vira de cabeça para baixo.</Paragraph>
                
                <div className="space-y-4 mt-6">
                <p><strong>Noite 1: A Primeira Faísca</strong><br/>No momento em que o nome entra na chama, algo muda. A pessoa vai se sentir inquieta naquela noite. Vai se revirar às 3 da manhã sem saber por quê. Seu rosto vai piscar na mente dela. Sentirá uma dor estranha no peito que não consegue explicar.</p>
                <p><strong>Noite 2: O Calor Aumenta</strong><br/>Começa a pensar em você mais. Muito mais. Vai se pegar olhando fotos antigas suas. Revivendo conversas. A ideia de você com outra pessoa vai deixá-lo enjoada.</p>
                <p><strong>Noite 3: O Fogo se Espalha</strong><br/>Agora não consegue mais se livrar de você. Vai sonhar com você de forma tão real que acorda confusa. Os amigos vão perceber que algo está errado. Vai mandar uma mensagem fraca só para “testar o terreno”, porque não aguenta mais a pressão.</p>
                <p><strong>Noite 4: O Incêndio</strong><br/>Está perdendo o controle. Não consegue focar no trabalho. Não sente prazer em nada. Todas as outras pessoas parecem sem graça perto de você. O fogo queimou tudo. Só você restou na mente dela.</p>
                <p><strong>Noite 5: Rendição Total</strong><br/>Ela quebra. O orgulho? Sumiu. As defesas? Viraram cinzas. Liga. Manda mensagem. Aparece. Chora, pede desculpas e jura que nunca mais vai te deixar. Diz coisas como: “Não sei o que aconteceu comigo, mas não consigo viver sem você.”</p>
                </div>
                <Paragraph className="font-bold text-center mt-4">Ou… se não havia ninguém específico, alguém novo surge, dominado por esse mesmo fogo.</Paragraph>
            </Section>

            <Section>
                <SectionTitle>Mas Preciso Te Avisar…</SectionTitle>
                <Paragraph>Isso não é brincadeira.</Paragraph>
                <Paragraph>Quando a Sacerdotisa Azara realiza esse ritual, as pessoas não apenas voltam.</Paragraph>
                <Paragraph className="font-bold">Elas grudam.<br/>Elas se tornam obcecadas.<br/>Elas não se cansam de você.</Paragraph>
                <Paragraph className="text-center font-bold text-destructive border-2 border-destructive p-4 rounded-lg">Se você não está pronta(o) para essa pessoa te desejar a cada segundo de todos os dias… não faça isso.</Paragraph>
            </Section>
            
            <Section>
                <SectionTitle>Histórias reais de pessoas que usaram a chama</SectionTitle>
                <div className="flex gap-4 justify-center mb-8">
                    <div className="w-1/2">
                        <video
                            src="https://i.imgur.com/ytP7xVn.mp4"
                            poster="https://i.imgur.com/fgbqWuB.jpeg"
                            controls
                            playsInline
                            className="w-full rounded-lg"
                        />
                    </div>
                    <div className="w-1/2">
                        <video
                            src="https://i.imgur.com/EA2kXJ9.mp4"
                            poster="https://i.imgur.com/fUvqemu.jpeg"
                            controls
                            playsInline
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>
                <Testimonials />
            </Section>

            <Section>
                <SectionTitle>A História Proibida Que Tentaram Enterrar</SectionTitle>
                <Paragraph>Acha que eu inventei isso?</Paragraph>
                <Paragraph>Não.</Paragraph>
                <Paragraph>Esse ritual é mais antigo que a igreja.</Paragraph>
                <Paragraph>Mais antigo que a terapia.</Paragraph>
                <Paragraph>Mais antigo que qualquer conselho de relacionamento que você já ouviu.</Paragraph>
                <Paragraph>Pessoas usam o fogo para ligar corações há milhares de anos.</Paragraph>
                <Paragraph>Em templos persas antigos.</Paragraph>
                <Paragraph>Em câmaras escondidas.</Paragraph>
                <Paragraph>Em cerimônias secretas passadas de geração em geração.</Paragraph>
                <Paragraph>Porque quem aprendia isso sabia de uma coisa:</Paragraph>
                <Paragraph className="font-bold text-center text-xl">Todo ser humano tem um ponto fraco na alma.<br/>Todo ser humano pode ser ligado.<br/>Todo ser humano pode ser incendiado por alguém.</Paragraph>
                <Paragraph>E o fogo era como isso era feito.</Paragraph>
            </Section>

            <Section>
                <SectionTitle>Rainhas e Reis Que Fizeram Amores Rastejarem</SectionTitle>
                <Image
                src="https://i.imgur.com/1sAIPUI.jpeg"
                alt="Rainha e Rei"
                width={700}
                height={400}
                className="rounded-lg shadow-lg mx-auto mb-6"
                />
                <Paragraph>Existem histórias — sussurradas, apagadas dos livros de história — sobre rainhas e reis que usaram a chama sagrada para trazer seus amores de volta.</Paragraph>
                <Paragraph>Uma rainha — ou um rei — mandou realizar o ritual enquanto a pessoa amada estava longe, envolvida em outra relação, em outra vida, em outro caminho.</Paragraph>
                <Paragraph>Cinco noites depois?</Paragraph>
                <Paragraph>Ela ou ele abandonou o amante.</Paragraph>
                <Paragraph>Abandonou a distração.</Paragraph>
                <Paragraph>Abandonou tudo o que achava importante.</Paragraph>
                <Paragraph>Voltou correndo, pálido(a) e tremendo(a), sussurrando:</Paragraph>
                <Paragraph className="italic">“Não consigo respirar sem você.”</Paragraph>
                <Paragraph>Os generais chamaram de loucura.</Paragraph>
                <Paragraph>Os sacerdotes chamaram de bruxaria.</Paragraph>
                <Paragraph className="font-bold">Quem usou a chama chamou de power.</Paragraph>
            </Section>
            
            <Section>
                <SectionTitle>Tentaram Destruir Isso</SectionTitle>
                <Paragraph>Quando os sacerdotes perceberam o que as guardiãs do fogo faziam com a chama sagrada?</Paragraph>
                <Paragraph>Entraram em pânico.</Paragraph>
                <Paragraph>Chamaram de mal.</Paragraph>
                <Paragraph>Disseram que ameaçava a ordem natural.</Paragraph>
                <Paragraph>Por quê?</Paragraph>
                <Paragraph>Porque funcionava.</Paragraph>
                <Paragraph>Porque pessoas “lógicas” desmoronavam como crianças.</Paragraph>
                <Paragraph>Porque pessoas “fortes” choravam como bebês.</Paragraph>
                <Paragraph>Porque pessoas “fiéis” abandonavam tudo para rastejar de volta a quem incendiou sua alma.</Paragraph>
                <Paragraph>Então proibiram. Queimaram os textos. Espalharam as sacerdotisas e guardiões.</Paragraph>
                <Paragraph>Mas sussurros nunca morrem.</Paragraph>
                <Paragraph>O conhecimento sobreviveu. Passado em segredo, de guardiã para guardião, de geração em geração.</Paragraph>
                <Paragraph className="font-bold text-center text-xl">E agora está aqui. Pronto para ligar a alma da pessoa que você deseja à sua.</Paragraph>
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
                <Paragraph>Hoje, ela realiza o ritual da chama em seu templo particular para um número limitado de pessoas por semana.</Paragraph>
                <Paragraph>Ela não faz isso por dinheiro. É o chamado dela. O propósito dela. Garantir que esse poder antigo não se perca no mundo.</Paragraph>
                <Paragraph className="font-bold">Mas o ritual a drena. Cada um exige dias de preparação e recuperação. Por isso ela só pode ajudar um número limitado de pessoas.</Paragraph>
            </Section>

            <Section>
                <SectionTitle>Como Funciona</SectionTitle>
                <Paragraph className="text-center">É simples.</Paragraph>
                <div className="space-y-4 text-center">
                    <p><strong>1 –</strong> Você clica no botão abaixo e preenche um formulário curto com o nome da pessoa desejada ou solicita a abertura para um novo amor.</p>
                    <p><strong>2 –</strong> A Sacerdotisa Azara realiza o Ritual da Chama de 5 Noites em seu templo.</p>
                    <p><strong>3 –</strong> Você segue com a sua vida enquanto a chama faz o trabalho.</p>
                    <p><strong>4 –</strong> Em até 5 noites, veja o fogo agir.</p>
                </div>
                <Paragraph className="text-center mt-4">É isso. Você não precisa fazer nada além de estar pronta(o) quando o universo se mover.</Paragraph>
            </Section>
            
            <Section className="text-center bg-card/80 p-6 rounded-2xl shadow-2xl shadow-primary/10 backdrop-blur-sm">
                <SectionTitle>Quanto Vale a Obsessão Dessa Pessoa Para Você?</SectionTitle>
                <Paragraph>Seja honesta(o).</Paragraph>
                <Paragraph>Quanto você pagaria para acabar com a humilhação de ser ignorada(o)?</Paragraph>
                <Paragraph>Para cortar qualquer outra pessoa da vida dela de vez?</Paragraph>
                <Paragraph>Para vê-la de joelhos, implorando por outra chance?</Paragraph>
                <Paragraph>Pessoas gastam milhares em terapia e coaches que não funcionam. Perdem meses com estratégias de “nenhum contato” que não levam a lugar nenhum.</Paragraph>
                <Paragraph>Nada disso liga o interruptor da obsessão dessa pessoa.</Paragraph>
                <Paragraph className="font-bold">Nada disso queima seu nome na alma dela.</Paragraph>
                <Paragraph className="font-bold text-xl mt-4">Mas isso faz.</Paragraph>
            </Section>
            
            <Section className="text-center">
                <SectionTitle>Seu Preço Hoje</SectionTitle>
                <Paragraph>A Sacerdotisa Azara não faz isso por lucro. Mas precisamos cobrir os custos de manter este site e o templo dela.</Paragraph>
                <Paragraph>Então concordamos em um valor acessível para qualquer pessoa, independentemente da situação.</Paragraph>
                <Paragraph className="text-xl line-through text-destructive">Não R$500.</Paragraph>
                <Paragraph className="text-xl line-through text-destructive">Não R$200.</Paragraph>
                <Paragraph className="text-2xl line-through text-destructive mb-4">Nem mesmo R$100.</Paragraph>
                <Paragraph className="text-2xl">Hoje, você pode ter o Ritual da Chama de 5 Noites realizado por apenas <span className="font-bold text-green-500 text-3xl">R$27</span>.</Paragraph>
                <Paragraph>Vinte e sete reais.</Paragraph>
                <Paragraph>Menos que um jantar fora.</Paragraph>
                <Paragraph className="font-bold text-xl">Pelo poder de fazer essa pessoa queimar por você para sempre.</Paragraph>
                
                <div className="text-center bg-card/80 p-6 rounded-2xl shadow-2xl shadow-primary/10 backdrop-blur-sm my-8">
                    <h3 className="font-headline text-2xl font-bold text-center text-primary mb-4">🎁 BÔNUS EXCLUSIVOS PARA QUEM FAZER O RITUAL HOJE</h3>
                    <p className="text-lg text-foreground/80 mb-6">⚠️ ATENÇÃO: Estes bônus não são vendidos separadamente. Eles só são liberados para quem ativa o Ritual do Fogo HOJE.</p>
                    <div className="space-y-4 text-left">
                        <div>
                            <h4 className="font-bold">🔥 BÔNUS #1 – Ativação do Vínculo Energético Noturno</h4>
                            <p className="text-foreground/80">Valor real: <span className="line-through">R$97</span><br/>Ativação extra durante as 5 noites do ritual, fortalecendo o vínculo enquanto a pessoa dorme, intensificando sonhos, pensamentos involuntários e o chamado emocional.</p>
                        </div>
                        <div>
                            <h4 className="font-bold">🔥 BÔNUS #2 – Ritual de Corte de Terceiras Pessoas</h4>
                            <p className="text-foreground/80">Valor real: <span className="line-through">R$127</span><br/>Ritual silencioso para esfriar qualquer interferência externa, afastando rivais e conexões paralelas sem confronto ou conflitos.</p>
                        </div>
                        <div>
                            <h4 className="font-bold">🔥 BÔNUS #3 – Selamento da Chama (Anti-Arrependimento)</h4>
                            <p className="text-foreground/80">Valor real: <span className="line-through">R$147</span><br/>Após a quinta noite, a chama é selada para evitar esfriamento, afastamentos futuros ou recaídas emocionais.</p>
                        </div>
                        <div>
                            <h4 className="font-bold">🔥 BÔNUS #4 – Abertura para Amor Novo (se não houver nome específico)</h4>
                            <p className="text-foreground/80">Valor real: <span className="line-through">R$97</span><br/>Ativação energética para atrair uma nova pessoa alinhada, com conexão intensa desde o primeiro contato.</p>
                        </div>
                        <div>
                            <h4 className="font-bold">🔥 BÔNUS #5 – Proteção Energética da Chama</h4>
                            <p className="text-foreground/80">Valor real: <span className="line-through">R$87</span><br/>Blindagem contra inveja, interferências externas e energias negativas que possam enfraquecer o ritual.</p>
                        </div>
                        <div>
                            <h4 className="font-bold">🔥 BÔNUS #6 – Prioridade Máxima no Templo</h4>
                            <p className="text-foreground/80">Valor real: <span className="line-through">R$67</span><br/>Seu ritual é iniciado imediatamente, na mesma noite, sem fila de espera.</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <p className="text-xl font-bold">👉 VALOR TOTAL REAL: <span className="line-through">R$819</span></p>
                        <p className="text-2xl font-bold text-destructive mt-2">⚠️ MAS FAZENDO HOJE…</p>
                        <p className="text-xl font-bold mt-2">FAZENDO HOJE O RITUAL DO FOGO VOCÊ GANHA TOTALMENTE GRÁTIS:</p>
                        <p className="text-lg font-bold text-green-500 mt-2">✔️ TODOS OS 6 BÔNUS</p>
                        <p className="text-lg font-bold text-green-500">✔️ ATIVAÇÃO IMEDIATA</p>
                        <p className="text-lg font-bold text-green-500">✔️ PRIORIDADE NO TEMPLO</p>
                    </div>
                </div>

                <Button onClick={handleStartRitual} size="lg" className="mt-8 animate-button-glow-success bg-success text-success-foreground hover:bg-success/90 font-bold w-full max-w-md text-lg h-auto py-3">
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
                <Paragraph className="font-bold">Cada noite que você espera é mais uma noite em que essa pessoa se afasta.</Paragraph>
                <Paragraph className="font-bold">Mais uma noite em que outra pessoa crava as garras mais fundo nela.</Paragraph>
                <Paragraph className="font-bold">Mais uma noite que você perde.</Paragraph>
                <Paragraph className="text-2xl font-bold text-destructive my-6">E Aqui Está a Verdade Mais Sombria…</Paragraph>
                <Paragraph>Esta página pode não ficar no ar.</Paragraph>
                <Paragraph>Eles já tentaram enterrar esse ritual antes.</Paragraph>
                <Paragraph>Terapeutas, coaches de relacionamento, toda a indústria de “autoajuda” — eles adorariam ver isso desaparecer.</Paragraph>
                <Paragraph>Porque quando as pessoas têm esse poder, ningém tem chance.</Paragraph>
                <Paragraph>Não posso prometer que esta página estará aqui amanhã.</Paragraph>
                <Paragraph>Mas posso prometer isto:</Paragraph>
                <Paragraph className="font-bold text-primary text-xl">👉 Se você agir agora, a Sacerdotisa Azara começará seu ritual ainda hoje à noite.</Paragraph>
                <Paragraph className="font-bold text-destructive text-xl">👉 Se você esperar, talvez nunca mais veja esta página — ou essa pessoa — novamente.</Paragraph>
                <Button onClick={handleStartRitual} size="lg" className="mt-8 animate-button-glow-success bg-success text-success-foreground hover:bg-success/90 font-bold w-full max-w-md text-lg h-auto py-3">
                    EU QUERO, ESTOU PRONTA(O)
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
                <Paragraph>Se essa pessoa não estiver queimando de obsessão por você…</Paragraph>
                <Paragraph>Se essa pessoa não voltar rastejando, implorando pelo seu perdão…</Paragraph>
                <Paragraph>Se você não ficar completamente chocado(a) com o nível de desespero dessa pessoa por você…</Paragraph>
                <Paragraph className="font-bold">Basta enviar um e-mail e você recebe cada centavo de volta. Sem perguntas. Sem complicações.</Paragraph>
                <Paragraph className="mt-6 font-semibold">Ou você recupera essa pessoa, totalmente devota a você, ou recebe seu dinheiro de volta.</Paragraph>
                <Paragraph className="font-bold text-xl">Não há risco.</Paragraph>
                <Button onClick={handleStartRitual} size="lg" className="mt-8 animate-button-glow-success bg-success text-success-foreground hover:bg-success/90 font-bold w-full max-w-md text-lg h-auto py-3">
                    GARANTIR O RITUAL
                </Button>
            </Section>

            <Section>
                <SectionTitle>Perguntas Frequentes</SectionTitle>
                <div className="space-y-6 max-w-2xl mx-auto">
                    <div>
                        <h3 className="font-bold text-lg text-primary">E se essa pessoa estiver com outra pessoa?</h3>
                        <Paragraph>Ótimo. Essa outra pessoa é apenas um espaço vazio. A chama não compete — ela apaga. A conexão dela com essa pessoa esfria. O toque parece errado. A voz irrita. Ela olha e sente apenas vazio. E então corre de volta para você.</Paragraph>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-primary">E se essa pessoa me bloqueou em tudo?</h3>
                        <Paragraph>Melhor ainda. O bloqueio não protege. Ele prende a pessoa dentro da própria cabeça com o fogo. Ela ficará tão obcecada que dará um jeito de falar com você — uma conta nova, um e-mail, aparecendo pessoalmente. O bloqueio vira a prisão dela, e você é a única saída.</Paragraph>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-primary">E se já se passaram meses ou anos?</h3>
                        <Paragraph>Não importa. O tempo não apaga essa chama. A conexão entre vocês ainda existe como uma brasa enterrada. Esse ritual é o vento que transforma essa brasa em incêndio. Quanto mais tempo passou, mais forte as memórias batem quando voltam.</Paragraph>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-primary">E se essa pessoa jurou que nunca voltaria?</h3>
                        <Paragraph>Pessoas dizem muitas coisas. Palavras grandes. Mas palavras não significam nada quando a alma está em chamas. Na quinta noite, ele nem vai lembrar do que jurou. Estará ocupada demais implorando para você aceitá-lo de volta.</Paragraph>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-primary">E se eu não acreditar nisso?</h3>
                        <Paragraph>Você não precisa acreditar. O fogo não liga para crença. Ele queima de qualquer forma. Tudo o que você precisa fazer é entregar o nome à Sacerdotisa Azara. Ela cuida do resto.</Paragraph>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-primary">Isso é permanente?</h3>
                        <Paragraph>Sim. Por isso eu avisei. Não é temporário. Uma vez que o nome entra na chama, o vínculo é selado. Não faça isso se não tiver certeza de que quer essa pessoa ligada a você.</Paragraph>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <Button onClick={handleStartRitual} size="lg" className="mt-8 animate-button-glow-success bg-success text-success-foreground hover:bg-success/90 font-bold w-full max-w-md text-lg h-auto py-3">
                    QUERO AGORA
                    </Button>
                </div>
            </Section>
            </main>
        </div>
        )}
      </div>
    </>
  );
}
