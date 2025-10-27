"use client";

import { Sparkles, Check } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type LandingPageProps = {
  onStart: () => void;
};

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

export default function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <header className="text-center my-8 md:my-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">
          🌹 Último desejo de Lady Soraya 🌹
        </h1>
        <p className="text-xl md:text-2xl text-secondary mt-2">
          Ajudar 1.111 mulheres a criarem o amor de suas vidas
        </p>
      </header>
      
      <main>
        <Section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            A Sacerdotisa do amor revela: 💘 O feitiço proibido do amor que faz ele se comprometer de uma vez por todas
          </h2>
          <Image
            src="https://www.secretlovespells.com/hosted/images/a4/38766aa00344bc8c6032fb72ec7f42/desert-mystic-book-1-.png"
            alt="Livro místico no deserto"
            width={700}
            height={400}
            className="rounded-lg shadow-lg mx-auto"
          />
          <Paragraph className="mt-6 italic">
            Mesmo que exista outra mulher na história... Mesmo que ele esteja distante... E mesmo que ele não esteja “pronto” para um compromisso.
          </Paragraph>
          <Paragraph>
            O que você está prestes a descobrir nos próximos 2 minutos vai mudar sua vida amorosa para sempre.
          </Paragraph>
        </Section>

        <Section>
            <Paragraph className="border-l-4 border-primary pl-4 italic font-semibold">
                Quero que você entenda que o feitiço de amor que vou te revelar é <span className="font-bold text-destructive">irreversível</span>. Uma vez que você use este feitiço proibido no homem que escolher... Não há volta. A única forma de quebrar este feitiço é — a morte. Ou seja, será mesmo até o fim.
            </Paragraph>
        </Section>

        <Section>
            <SectionTitle>Veja exatamente o que vai acontecer:</SectionTitle>
            <Paragraph>Um desejo ardente vai deixar o sangue dele em fogo só de ouvir o seu nome.</Paragraph>
            <Paragraph>A mente dele será dominada por pensamentos de amor por você a cada momento do dia.</Paragraph>
            <Paragraph>E ele ficará tão obcecado que vai mandar mensagens aleatórias só pra saber como você está.</Paragraph>
            <Paragraph className="italic">Parece inacreditável, não é? Eu também pensei o mesmo. Mas agora eu sei a verdade. Mesmo sendo cética... Esse feitiço funcionou pra mim.</Paragraph>
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
        </Section>

        <Section>
             <Paragraph>Tudo começou com fogo e paixão... Havia faísca em cada toque. Ele me mandava mensagens o tempo todo, me fazia rir, me fazia me sentir única. Até que aconteceu... de novo. Como em todos os outros relacionamentos anteriores... Senti a mudança. Ele começou a se afastar.</Paragraph>
             <Image
                src="https://www.secretlovespells.com/hosted/images/ff/660639e77c4b298e7d8a043416ae7d/upset-woman-1-.png"
                alt="Mulher chateada"
                width={700}
                height={400}
                className="rounded-lg shadow-lg mx-auto my-4"
            />
            <Paragraph>Fui enviada numa viagem de trabalho de última hora. Destino: Dubai. Na primeira noite, fui a um bar. Conversei com o bartender, e... acabei contando tudo sobre o Mark. Foi então que ela me contou sobre a mulher que mudaria minha vida.</Paragraph>
        </Section>

        <Section className="text-center">
            <SectionTitle>Lady Soraya</SectionTitle>
            <Image
                src="https://www.secretlovespells.com/hosted/images/0d/ff23da7dbf4a96b3f587f761fe3c61/Lady-Soraya.png"
                alt="Lady Soraya"
                width={400}
                height={400}
                className="rounded-full shadow-lg mx-auto"
            />
            <Paragraph className="mt-4">Uma sacerdotisa dos “artes arcanas”, chamada Lady Soraya. Vivia isolada no deserto, a horas dali. E há mais de 30 anos, vive naquela mesma região... Ajudando as pessoas a encontrarem o amor verdadeiro.</Paragraph>
        </Section>

        <Section>
            <Paragraph className="text-center">Aquele seria o dia que mudaria minha vida amorosa pra sempre. Ao chegar em sua casa, ela me disse: "Minha querida, eu já estava te esperando". Contei tudo. Sobre o Mark. Ela ouviu atentamente. Depois sorriu: "Você veio ao lugar certo, minha querida. Com sua permissão... Eu quero lançar um feitiço que fará ele DEVOTAR-SE a você."</Paragraph>
            <Image
                src="https://www.secretlovespells.com/hosted/images/fc/834cd32ba3475fbe1d598f437a30b3/Spell-being-casted-1-.png"
                alt="Feitiço sendo lançado"
                width={700}
                height={400}
                className="rounded-lg shadow-lg mx-auto my-4"
            />
            <Paragraph className="text-center">Respirei fundo. E disse: Sim.</Paragraph>
        </Section>
        
        <Section className="text-center">
            <Paragraph>Dois dias depois, antes de dormir, meu celular vibrou. Uma mensagem dele. "Eu sei que tenho agido estranho... mas desde que você viajou, percebi que você é a única pra mim. Quero consertar tudo quando você voltar."</Paragraph>
             <Image
                src="https://i.imgur.com/Aiaa0J9.jpeg"
                alt="Mensagem de texto do Mark"
                width={400}
                height={200}
                className="rounded-lg shadow-lg mx-auto my-4"
            />
            <Paragraph>Meu coração quase parou. O feitiço funcionou.</Paragraph>
        </Section>

        <Section className="text-center bg-card/80 p-6 rounded-2xl shadow-2xl shadow-primary/10 backdrop-blur-sm">
            <Image
                src="https://www.secretlovespells.com/hosted/images/4f/26ca3aff39432ca350f54f0eb64bf1/love-hert-1-.png"
                alt="Coração de amor"
                width={100}
                height={100}
                className="mx-auto mb-4"
            />
            <SectionTitle>Agora é a sua vez.</SectionTitle>
            <Paragraph>Agora você pode lançar um poderoso feitiço de amor no homem que é o seu destino. Não importa se ele está distante... Se ele está com outra... Ou se vocês não se veem há anos.</Paragraph>
            <Paragraph>Lady Soraya não busca lucro — apenas cumprir sua missão. Mas, para manter o site, foi necessário cobrar um valor simbólico.</Paragraph>
            <div className="my-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-2xl font-bold text-primary">✨ Por apenas $11,11 hoje, você pode lançar o feitiço que fará ele te amar eternamente. ✨</p>
            </div>
            <div className="my-6 text-left max-w-md mx-auto space-y-2">
                 <p className="flex items-start"><Check className="h-6 w-6 text-green-500 mr-2 shrink-0"/> Acredito que o amor verdadeiro é possível.</p>
                 <p className="flex items-start"><Check className="h-6 w-6 text-green-500 mr-2 shrink-0"/> Não revelarei a ninguém que lancei o feitiço (isso causa “quebra do encanto”).</p>
                 <p className="flex items-start"><Check className="h-6 w-6 text-green-500 mr-2 shrink-0"/> Entendo que, uma vez lançado, não há retorno.</p>
            </div>
             <Button
                onClick={onStart}
                size="lg"
                className="mt-8 animate-button-glow bg-accent font-bold text-accent-foreground hover:bg-accent/90 w-full max-w-md"
            >
                LANÇAR FEITIÇO AGORA
            </Button>
             <p className="mt-4 text-sm text-foreground/70">💫 Funciona ainda hoje à noite 💫</p>
        </Section>
        
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
                    <Paragraph>Clique no botão “Lançar Feitiço Agora”. Responda um breve quiz (para personalizar o ritual). Depois, complete o formulário seguro. E, em até 48 horas, Lady Soraya lançará o feitiço em seu nome.</Paragraph>
                </div>
            </div>
        </Section>
      </main>
    </div>
  );
}
