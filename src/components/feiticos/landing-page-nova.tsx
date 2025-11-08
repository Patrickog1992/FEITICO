
"use client";

import { Sparkles, Check, Heart, LockIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Testimonials from "./testimonials";
import React, { useState, useEffect } from "react";

type LandingPageProps = {
  onStart: () => void;
};

const Section: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <section
    className={`w-full max-w-4xl mx-auto my-8 md:my-12 px-4 ${className}`}
  >
    {children}
  </section>
);

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <h2 className="font-headline text-3xl font-bold text-center text-primary mb-6">{children}</h2>;

const Paragraph: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <p className={`text-lg text-foreground/80 mb-4 leading-relaxed ${className}`}>
    {children}
  </p>
);

const VturbVideoPlayer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/82b0f5b7-3ef8-4fad-9a6a-1e700b3d750b/players/690f41a0230c7d2caf630448/v4/player.js?autoplay=false";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      const scripts = document.head.getElementsByTagName('script');
      for (let i = 0; i < scripts.length; i++) {
        if (scripts[i].src === script.src) {
          document.head.removeChild(scripts[i]);
          break;
        }
      }
    };
  }, []);

  return React.createElement('vturb-smartplayer', {
    id: 'vid-690f41a0230c7d2caf630448',
    style: { display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }
  });
};

const VideoPlayer = () => {
    const [showVideo, setShowVideo] = useState(false);

    if (showVideo) {
        return <VturbVideoPlayer />;
    }

    return (
        <div className="relative cursor-pointer" onClick={() => setShowVideo(true)}>
            <Image
                src="https://i.imgur.com/2hnUgvP.png"
                alt="Play Video"
                width={400}
                height={225}
                className="mx-auto"
                style={{ maxWidth: '400px', width: '100%' }}
            />
             <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)">
                    <path d="M8 5v14l11-7z" />
                </svg>
            </div>
        </div>
    );
};


export default function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
       <header className="text-center my-8 md:my-12">
        <p className="text-xl md:text-2xl text-accent font-semibold">Feitiço proibido para deixar qualquer homem obcecado !</p>
        <div className="bg-destructive text-primary-foreground p-6 rounded-lg mt-4">
            <h1 className="text-4xl md:text-5xl font-bold font-headline">
            Último desejo de Lady Soraya
            </h1>
            <p className="text-xl md:text-2xl mt-2">
            Ajudar 3737 mulheres a criarem o amor de suas vidas
            </p>
        </div>
      </header>
      
      <main>
        <Section className="text-center">
          <SectionTitle>A Sacerdotisa do amor revela: 💘 O feitiço proibido do amor que faz ele se comprometer de uma vez por todas</SectionTitle>
          <Image
            src="https://www.secretlovespells.com/hosted/images/a4/38766aa00344bc8c6032fb72ec7f42/desert-mystic-book-1-.png"
            alt="Livro místico no deserto"
            width={700}
            height={400}
            className="rounded-lg shadow-lg mx-auto"
          />
          <Paragraph className="mt-6">
            Mesmo que exista outra mulher na história... Mesmo que ele esteja distante... E mesmo que ele não esteja “pronto” para um compromisso.
          </Paragraph>
          <Paragraph>
            O que você está prestes a descobrir nos próximos 2 minutos vai mudar sua vida amorosa para sempre.
          </Paragraph>
        </Section>

        <Section>
            <Paragraph>Mas antes de continuar...</Paragraph>
            <Paragraph className="border-l-4 border-primary pl-4 italic font-semibold">
                Quero que você entenda que o feitiço de amor que vou te revelar é <span className="font-bold text-destructive">irreversível</span>. Uma vez que you use este feitiço proibido no homem que escolher... Não há volta. A única forma de quebrar este feitiço é — a morte. Ou seja, será mesmo até o fim.
            </Paragraph>
        </Section>

        <Section>
            <SectionTitle>Veja exatamente o que vai acontecer:</SectionTitle>
            <Paragraph>Um desejo ardente vai deixar o sangue dele em fogo só de ouvir o seu nome.</Paragraph>
            <Paragraph>A mente dele será dominada por pensamentos de amor por você a cada momento do dia.</Paragraph>
            <Paragraph>E ele ficará tão obcecado que vai mandar mensagens aleatórias só pra saber como você está.</Paragraph>
            <Paragraph className="italic">Parece inacreditável, não é? Eu também pensei o mesmo. Mas agora eu sei a verdade. Mesmo sendo cética... Esse feitiço funcionou pra mim. Muito melhor do que eu jamais imaginei. Porque hoje, eu vivo o relacionamento dos meus sonhos.</Paragraph>
        </Section>

        <Section className="text-center">
            <Image
                src="https://www.secretlovespells.com/hosted/images/77/1a351a3f2b4ce3b49e33bf65cf429b/man-and-woman.png"
                alt="Homem e mulher apaixonados"
                width={700}
                height={400}
                className="rounded-lg shadow-lg mx-auto"
            />
            <Paragraph className="mt-4">Meu nome é Jessica. E, pra ser sincera, tenho até um pouco de vergonha de contar essa história.</Paragraph>
            <Paragraph>Nos últimos meses, estávamos emocionalmente distantes... E parecia que a cada dia nos afastávamos mais.</Paragraph>
            <Paragraph>O nome dele é Andre.</Paragraph>
        </Section>

        <Section>
             <Paragraph>Tudo começou com fogo e paixão. Ele me viu olhando pra ele de longe, no bar de vinhos favorito dele. Quando se aproximou, borboletas tomaram conta do meu estômago. Os ombros largos, os braços fortes, a voz suave... era impossível resistir. Só o som da voz dele fazia meu coração derreter.</Paragraph>
             <Image
                src="https://www.secretlovespells.com/hosted/images/a7/c271e3495441dd95139f14d4d997c6/couple-having-dinner-1-.png"
                alt="Casal jantando"
                width={700}
                height={400}
                className="rounded-lg shadow-lg mx-auto my-4"
              />
              <Paragraph>Meus amigos me avisaram: “Ele é encrenca.” Mas eu ignorei. As primeiras semanas foram um furacão de romance, amor e desejo. Parecia cena de filme. Havia faísca em cada toque. Ele me mandava mensagens o tempo todo, me fazia rir, me fazia me sentir única. E o olhar dele me dizia que éramos destinados um ao outro. Até que aconteceu... de novo. Como em todos os outros relacionamentos anteriores... Senti a mudança. Ele começou a se afastar. As mensagens de hora em hora viraram “umas duas por dia”. Os convites pra me ver viraram “estou ocupado”. E, de repente, o amor virou distância e silêncio. O olhar apaixonado virou um olhar vazio e frio.</Paragraph>
             <Paragraph>Antes que eu pudesse entender o que estava acontecendo...</Paragraph>
             <Image
                src="https://www.secretlovespells.com/hosted/images/ff/660639e77c4b298e7d8a043416ae7d/upset-woman-1-.png"
                alt="Mulher chateada"
                width={700}
                height={400}
                className="rounded-lg shadow-lg mx-auto my-4"
            />
            <Paragraph>Fui enviada numa viagem de trabalho de última hora. Destino: Dubai. A cidade das possibilidades. Pensei que seria o lugar perfeito pra colocar a cabeça no lugar. Mas, na verdade, eu estava me preparando pro pior. Na primeira noite, fui a um bar. Pedi uma bebida atrás da outra. Conversei com o bartender, e... acabei contando tudo sobre o Andre. O quanto eu sentia que éramos almas gêmeas, mas ele simplesmente não via isso. Foi então que ele me contou sobre a mulher que mudaria minha vida.</Paragraph>
        </Section>

        <Section className="text-center">
            <Image
                src="https://www.secretlovespells.com/hosted/images/0d/ff23da7dbf4a96b3f587f761fe3c61/Lady-Soraya.png"
                alt="Lady Soraya"
                width={400}
                height={400}
                className="rounded-full shadow-lg mx-auto"
            />
            <Paragraph className="mt-4 font-bold text-xl text-primary">Uma sacerdotisa dos “artes arcanas”, chamada Lady Soraya.</Paragraph>
            <Paragraph>Vivia isolada no deserto, a horas dali. Todos os moradores locais sabiam sobre ela. Lady Soraya nasceu em um dos covens mais poderosos do deserto da Arábia, especializado em magia vermelha — a magia do amor, da paixão e do romance. Mas, ao envelhecer, ela se afastou das irmãs do coven... Enquanto elas mergulhavam nas artes sombrias, Soraya se dedicava ao amor verdadeiro. Uma noite, ao ver um sacrifício proibido, ela fugiu sob o véu da noite. E há mais de 30 anos, vive naquela mesma região... Ajudando as pessoas a encontrarem o amor verdadeiro. Normalmente, eu teria rido dessa história. Sou uma mulher racional. Mas... eu estava sem opções. Pedi o endereço dela. E decidi ir no dia seguinte.</Paragraph>
            <Paragraph>Aquele seria o dia que mudaria minha vida amorosa pra sempre.</Paragraph>
        </Section>
        
        <Section>
            <Image
                src="https://www.secretlovespells.com/hosted/images/02/e2a81ecfba4765a0da90d23f96523a/Lady-Sorayas-home.png"
                alt="Casa de Lady Soraya"
                width={700}
                height={400}
                className="rounded-lg shadow-lg mx-auto my-4"
            />
            <Paragraph>A viagem foi longa. Mas, ao chegar, parecia que eu tinha atravessado um portal para outro mundo. A casa era de barro antigo, com o teto gasto e uma porta coberta por símbolos estranhos. Parei por um instante, respirei fundo... e bati.</Paragraph>
            <Image
                src="https://www.secretlovespells.com/hosted/images/ab/dde032ed884b2393b31a79596a56d6/door.png"
                alt="Porta se abrindo"
                width={400}
                height={400}
                className="rounded-lg shadow-lg mx-auto my-4"
            />
            <Paragraph>A porta se abriu. E lá estava ela. Linda, misteriosa, com um olhar que parecia ter séculos de sabedoria. “Minha querida, eu já estava te esperando”, ela disse com voz calma. “Eu senti a sua dor desde que chegou à cidade.” “Meu nome é Lady Soraya.” “Diga-me, o que está te afligindo?” Contei tudo. Sobre o Andre. Sobre como sentia que ele era o homem da minha vida... E sobre como me sentia perdida, impotente e cansada. Ela ouviu atentamente. Depois sorriu:</Paragraph>
            <Paragraph>“Você veio ao lugar certo, minha querida.”</Paragraph>
            <Paragraph>“Desde jovem, dedico minha vida à magia do amor.”</Paragraph>
            <Paragraph>“E aprendi a diferença entre o amor passageiro e o amor eterno.”</Paragraph>
            <Paragraph>“Com sua permissão...”</Paragraph>
            <Paragraph>“Eu quero lançar um feitiço que fará ele DEVOTAR-SE a você.”</Paragraph>
            <Image
                src="https://www.secretlovespells.com/hosted/images/fc/834cd32ba3475fbe1d598f437a30b3/Spell-being-casted-1-.png"
                alt="Feitiço sendo lançado"
                width={700}
                height={400}
                className="rounded-lg shadow-lg mx-auto my-4"
            />
            <Paragraph>“Um amor recíproco, profundo... algo de outro mundo.”</Paragraph>
            <Paragraph>“Mas este não é um feitiço comum.”</Paragraph>
            <Paragraph>“Este feitiço desperta a devoção, e não a ilusão.”</Paragraph>
            <Paragraph>“Quando eu o lançar, ele perceberá — de corpo e alma — que você é o amor da vida dele.”</Paragraph>
            <Paragraph>“E nunca mais conseguirá imaginar ser feliz com outra mulher.”</Paragraph>
            <Paragraph>“Mas preciso te avisar...”</Paragraph>
            <Paragraph>“Uma vez lançado, ele é permanente.”</Paragraph>
            <Paragraph>Respirei fundo. E disse: Sim.</Paragraph>
            <Paragraph>Mesmo que fosse loucura... Mesmo que não funcionasse... Se houvesse 1% de chance, valeria a pena. Ela apenas disse: “Volte em dois dias.”</Paragraph>
        </Section>

        <Section className="text-center">
            <Paragraph>Os dois dias mais longos da minha vida. Na primeira noite, nada. Na segunda, nada. Já achava que tinha sido um erro...</Paragraph>
             <Image
                src="https://www.secretlovespells.com/hosted/images/cf/f8b404cf9349b0bded5609587a2576/worried-in-bed.png"
                alt="Mulher preocupada na cama"
                width={700}
                height={400}
                className="rounded-lg shadow-lg mx-auto my-4"
            />
            <Paragraph>Quando, antes de dormir, meu celular vibrou. Uma mensagem dele. "Eu sei que tenho agido estranho... mas desde que você viajou, percebi que você é a única pra mim. Quero consertar tudo quando você voltar."</Paragraph>
             <Image
                src="https://i.imgur.com/Aiaa0J9.jpeg"
                alt="Mensagem de texto do Andre"
                width={400}
                height={200}
                className="rounded-lg shadow-lg mx-auto my-4"
            />
            <Paragraph>Meu coração quase parou. O feitiço funcionou. No dia seguinte, fui correndo até a cabana de Lady Soraya. Contei tudo. Ela sorriu, emocionada... mas logo seu olhar ficou sério. “Minha querida... eu vivo sozinha desde que deixei meu coven. O que me traz alegria é ajudar mulheres como você a encontrarem o amor verdadeiro. Mas são poucas as que chegam até mim.” “Você pode me ajudar a espalhar essa bênção?” Foi aí que tive uma ideia. Criamos um site para que mulheres do mundo todo pudessem receber o feitiço de amor de Lady Soraya. Ela ficou radiante. “Meu desejo sempre foi ajudar 3737 mulheres a encontrarem o amor verdadeiro.” “E agora... você me deu essa chance.”</Paragraph>
        </Section>

        <Section className="text-center bg-card/80 p-6 rounded-2xl shadow-2xl shadow-primary/10 backdrop-blur-sm">
            <Paragraph className="font-bold text-xl">Agora é a sua vez.</Paragraph>
            <Image
                src="https://www.secretlovespells.com/hosted/images/4f/26ca3aff39432ca350f54f0eb64bf1/love-hert-1-.png"
                alt="Coração de amor"
                width={100}
                height={100}
                className="mx-auto mb-4"
            />
            <Paragraph>Agora você pode lançar um poderoso feitiço de amor no homem que é o seu destino. Não importa se ele está distante... Se ele está com outra... Ou se vocês não se veem há anos. Porque o feitiço de Lady Soraya alinha as energias dele às suas... e faz com que o amor que você sente se torne óbvio pra ele também. Porque simplesmente não fará sentido pra ele estar com outra mulher.</Paragraph>
            <Paragraph>E quanto isso custa? Nada comparado ao valor do amor verdadeiro. Lady Soraya não busca lucro — apenas cumprir sua missão. Mas, para manter o site, foi necessário cobrar um valor simbólico. <span className="text-green-500 font-bold">Apenas R$37,37</span> — um número sagrado — para as 3737 mulheres escolhidas. Mesmo que você esteja passando por dificultades... Mesmo que seja mãe solo... Mesmo que tenha perdido as esperanças... Este é o seu sinal.</Paragraph>
            <Paragraph className="my-6 text-xl font-bold text-primary">✨ Por apenas R$ 37,37 hoje, você pode lançar o feitiço que fará ele te amar eternamente. ✨</Paragraph>
            <div className="my-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-2xl font-bold text-primary">Pouquíssimas mulheres no mundo já sentiram uma ligação assim.</p>
            </div>
             <Image
                src="https://www.secretlovespells.com/hosted/images/50/d38d8157b4432497d7d8d9ef7ea0da/romantic-couple-at-park.png"
                alt="Casal romântico no parque"
                width={700}
                height={400}
                className="rounded-lg shadow-lg mx-auto my-4"
            />
            <Paragraph>Mas lembre-se: Este feitiço é poderoso e permanente. Por isso, só está disponível para mulheres que concordam com os seguintes termos:</Paragraph>
            <div className="my-6 text-left max-w-md mx-auto space-y-2">
                 <p className="flex items-start"><Check className="h-6 w-6 text-green-500 mr-2 shrink-0"/> Acredito que o amor verdadeiro é possível.</p>
                 <p className="flex items-start"><Check className="h-6 w-6 text-green-500 mr-2 shrink-0"/> Não revelarei a ninguém que lancei o feitiço (isso causa “quebra do encanto”).</p>
                 <p className="flex items-start"><Check className="h-6 w-6 text-green-500 mr-2 shrink-0"/> Entendo que, uma vez lançado, não há retorno.</p>
            </div>
            
            <div className="my-8 text-center">
              <h3 className="text-xl font-bold text-primary">Lady Soraya tem um recado para você</h3>
              <p className="text-sm text-foreground/70">(Aperte o play e escute)</p>
              <VideoPlayer />
            </div>

             <Paragraph>Se você concorda... 👉 Clique no botão abaixo:</Paragraph>
             <Button
                onClick={onStart}
                size="lg"
                className="mt-8 animate-button-glow bg-accent text-accent-foreground hover:bg-accent/90 font-bold w-full max-w-md"
            >
                LANÇAR FEITIÇO AGORA
            </Button>
            <p className="mt-4 text-sm text-foreground/70">💫 Funciona ainda hoje à noite 💫</p>
            <div className="mt-8 text-center text-foreground/80 max-w-md mx-auto">
                <Paragraph>A partir daí, você será direcionada para um formulário de pedido 100% seguro.</Paragraph>
                <Paragraph>Isso nos ajuda a manter o site no ar.</Paragraph>
                <Paragraph>Assim que preencher seus dados...</Paragraph>
                <Paragraph>Você será levada a um pequeno quiz.</Paragraph>
                <Paragraph>Esse quiz ajudará Lady Soraya a lançar o feitiço com o máximo de poder e precisão possível.</Paragraph>
                <Paragraph>Depois de concluir tudo...</Paragraph>
                <p className="text-xl font-bold my-4 text-primary">✨ Seu feitiço será lançado dentro de 24 horas. ✨</p>
                <Paragraph>E, em apenas alguns dias... Você vai olhar para este momento e sorrir,</Paragraph>
                <Paragraph>Porque este foi o momento em que sua vida amorosa mudou para sempre.</Paragraph>
                <Paragraph>O dia em que você assumiu o controle. O dia em que ele finally percebeu...</Paragraph>
                <div className="my-4 text-2xl font-bold text-primary flex items-center justify-center gap-2">
                  <Heart className="fill-current"/>
                  <span>Vocês são destinados um ao outro.</span> 
                  <Heart className="fill-current"/>
                </div>
                <Button
                    onClick={onStart}
                    size="lg"
                    className="mt-8 animate-button-glow bg-accent text-accent-foreground hover:bg-accent/90 font-bold w-full max-w-md"
                >
                    QUERO AGORA
                </Button>
                <p className="mt-4 text-sm text-foreground/70">💫 Funciona ainda hoje à noite 💫</p>
            </div>
        </Section>
        
        <Testimonials />

        <Section>
            <SectionTitle>Perguntas Frequentes</SectionTitle>
            <div className="space-y-4 max-w-2xl mx-auto">
                <div>
                    <h3 className="font-bold text-lg">O que torna o feitiço de Lady Soraya diferente?</h3>
                    <Paragraph>Outros feitiços tentam forçar o amor. Mas Lady Soraya alinha as energias do homem com a vibração natural do amor e da atração. Assim, ele escolhe te amar — de forma pura e verdadeira.</Paragraph>
                </div>
                <div>
                    <h3 className="font-bold text-lg">Em quanto tempo funciona?</h3>
                    <Paragraph>Algumas mulheres sentem os efeitos no mesmo dia. Outras, em poucos dias. Mas o resultado sempre vem.</Paragraph>
                </div>
                 <div>
                    <h3 className="font-bold text-lg">Como faço para lançar o feitiço?</h3>
                    <Paragraph>Clique no botão “Lançar Feitiço Agora”. Responda um breve quiz (para personalizar o ritual). Depois, complete o formulário seguro. E, em 24 horas, Lady Soraya lançará o feitiço em seu nome.</Paragraph>
                </div>
            </div>
        </Section>
        <Section className="text-center">
             <h2 className="text-2xl font-bold text-primary mb-4">✨ Lance seu feitiço de amor agora. ✨</h2>
            <Paragraph>Funciona ainda hoje à noite.</Paragraph>
            <Button
                onClick={onStart}
                size="lg"
                className="mt-4 animate-button-glow bg-accent text-accent-foreground hover:bg-accent/90 font-bold w-full max-w-md"
            >
                QUERO AGORA
            </Button>
             <p className="mt-4 text-sm text-foreground/70">💫 Funciona ainda hoje à noite 💫</p>
        </Section>
      </main>
      <footer className="text-center w-full max-w-4xl mx-auto my-8 md:my-12 px-4">
        <p className="text-sm text-foreground/60">Feitiços do amor todos os DIREITOS RESERVADOS</p>
      </footer>
    </div>
  );
}
