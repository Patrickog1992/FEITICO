
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
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
import { X, Sparkles, Wand2, LockIcon, Flame, Heart, UserPlus } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ThumbsUp } from "lucide-react";
import React from "react";
import FacebookPixel from "@/components/analytics/facebook-pixel";
import Link from 'next/link';


// ====================================================================
// BANNER DE DATA DINÂMICA
// ====================================================================
const FogoBanner = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date().toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
    });
    setCurrentDate(date);
  }, []);

  if (!currentDate) {
    return (
        <div className="bg-destructive text-destructive-foreground text-center p-3 text-sm font-semibold w-full max-w-4xl mx-auto rounded-lg mb-4 h-20 animate-pulse" />
    );
  }

  return (
    <div className="bg-destructive text-destructive-foreground text-center p-3 text-sm font-semibold w-full max-w-4xl mx-auto rounded-lg mb-4">
      ATENÇÃO: O fim de ano é um período raro de transição energética. Durante essa virada, e no dia <span className="bg-yellow-400 text-black px-2 py-1 rounded-md mx-1">{currentDate}</span>, o Ritual da Chama de 5 Noites atua com intensidade maior, acelerando o retorno de um amor perdido OU a atração irresistível de um novo amor, despertando desejo e obsessão.
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
    avatar: "https://i.imgur.com/GJZpDHa.png",
    text: "Meu relacionamento estava por um fio. Depois do ritual da chama, a energia entre nós mudou completamente. Ela se tornou mais carinhosa, atenciosa e finalmente aceitou meu pedido de casamento! Sou eternamente grato.",
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
    avatar: "https://i.imgur.com/SPsVs9s.jpg",
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
// ====================================================================

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
// PÁGINA PRINCIPAL
// ====================================================================
export default function FogoPage() {

  const checkoutUrl = "https://pay.kirvano.com/c298ed00-5e07-4499-8eb4-6426ba33068d";

  return (
    <>
      <FacebookPixel />
      <div className="bg-background text-foreground min-h-screen">
        <div className="w-full max-w-4xl mx-auto pt-8">
          <FogoBanner />
        </div>
        <header className="text-center my-8 md:my-12 px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary uppercase">
            Sussurre o nome da pessoa desejada nesta chama sagrada…
e em até 5 noites, ela vai ficar totalmente obcecada por você 
ou alguém novo surgirá, tomado por um desejo impossível de ignorar.
          </h1>
        </header>
        
        <main>
          <Section className="text-center">
            <Image
              src="https://i.imgur.com/rJhARQH.jpg"
              alt="Chama sagrada"
              width={700}
              height={400}
              className="rounded-lg shadow-lg mx-auto"
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
                src="https://i.imgur.com/kkGFDp4.jpg"
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
              src="https://i.imgur.com/RfnM0Aw.jpg"
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
            <Paragraph className="font-bold text-center text-xl">Uma vez que o nome entra na chama sagrada, a alma fica ligada a você. E esse fogo nunca se apaga.</Paragraph>
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
            <Paragraph>Porque quando o nome toca na chama, essa pessoa vai se queimar por você. E SOMENTE POR VOCÊ</Paragraph>
          </Section>
          
          <Section>
            <SectionTitle>O Que Acontece Ao Longo das 5 Noites</SectionTitle>
             <Image
              src="https://i.imgur.com/EcmtW16.jpg"
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
              <p><strong>Noite 2: O Calor Aumenta</strong><br/>Começa a pensar em você mais. Muito mais. Vai se pegar olhando fotos antigas suas. Revivendo conversas. A ideia de você com outra pessoa vai deixá-la enjoada.</p>
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
              src="https://i.imgur.com/1sAIPUI.jpg"
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
            <Paragraph className="font-bold">Quem usou a chama chamou de poder.</Paragraph>
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
                  src="https://i.imgur.com/S0BPoDO.jpg"
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
              <Paragraph className="text-2xl">Hoje, você pode ter o Ritual da Chama de 5 Noites realizado por apenas <span className="font-bold text-green-500 text-3xl">R$37</span>.</Paragraph>
              <Paragraph>Trinta e sete reais.</Paragraph>
              <Paragraph>Menos que um jantar fora.</Paragraph>
              <Paragraph className="font-bold text-xl">Pelo poder de fazer essa pessoa queimar por você para sempre.</Paragraph>
               <Button asChild size="lg" className="mt-8 animate-button-glow-success bg-success text-success-foreground hover:bg-success/90 font-bold w-full max-w-md text-lg h-auto py-3">
                  <Link href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                    ACENDA A CHAMA
                  </Link>
                </Button>
              <SectionTitle className="text-destructive mt-8">Mas Você Precisa Agir Agora</SectionTitle>
          </Section>

          <Section className="text-center">
               <Image
                  src="https://i.imgur.com/gLqf1pr.jpg"
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
              <Paragraph>Porque quando as pessoas têm esse poder, ninguém tem chance.</Paragraph>
              <Paragraph>Não posso prometer que esta página estará aqui amanhã.</Paragraph>
              <Paragraph>Mas posso prometer isto:</Paragraph>
              <Paragraph className="font-bold text-primary text-xl">👉 Se você agir agora, a Sacerdotisa Azara começará seu ritual ainda hoje à noite.</Paragraph>
              <Paragraph className="font-bold text-destructive text-xl">👉 Se você esperar, talvez nunca mais veja esta página — ou essa pessoa — novamente.</Paragraph>
              <Button asChild size="lg" className="mt-8 animate-button-glow-success bg-success text-success-foreground hover:bg-success/90 font-bold w-full max-w-md text-lg h-auto py-3">
                  <Link href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                    EU QUERO, ESTOU PRONTA(O)
                  </Link>
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
              <Button asChild size="lg" className="mt-8 animate-button-glow-success bg-success text-success-foreground hover:bg-success/90 font-bold w-full max-w-md text-lg h-auto py-3">
                  <Link href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                    GARANTIR O RITUAL
                  </Link>
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
                    <Paragraph>Pessoas dizem muitas coisas. Palavras grandes. Mas palavras não significam nada quando a alma está em chamas. Na quinta noite, ela nem vai lembrar do que jurou. Estará ocupada demais implorando para você aceitá-la de volta.</Paragraph>
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
               <Button asChild size="lg" className="mt-8 animate-button-glow-success bg-success text-success-foreground hover:bg-success/90 font-bold w-full max-w-md text-lg h-auto py-3">
                  <Link href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                    QUERO AGORA
                  </Link>
                </Button>
            </div>
          </Section>
        </main>
      </div>
    </>
  );
}

    