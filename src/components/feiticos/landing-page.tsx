
"use client";

import { Sparkles, Check, LockIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Testimonials from "./testimonials";
import DynamicDateBanner from "./dynamic-date-banner";

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
      <DynamicDateBanner />
      <header className="text-center my-8 md:my-12 bg-primary text-primary-foreground p-6 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">
        Último desejo de Lady Soraya
        </h1>
        <p className="text-xl md:text-2xl mt-2">
        Ajudar 3737 mulheres a criarem o amor de suas vidas
        </p>
      </header>
      
      <main>
        <Section className="text-center">
          <SectionTitle>A Sacerdotisa do amor revela: 💘 O feitiço proibido do amor que faz ele se comprometer a você de uma vez por todas</SectionTitle>
          <Image
            src="https://i.imgur.com/FxiYsRl.jpeg"
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
                Quero que você entenda que o feitiço de amor que vou te revelar é <span className="font-bold text-destructive">irreversível</span>. Uma vez que você use este feitiço proibido no homem que escolher... Não há volta. A única forma de quebrar este feitiço é — a morte. Ou seja, será mesmo até o fim.
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
                src="https://i.imgur.com/2o8Kpgj.jpeg"
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
                src="https://i.imgur.com/A6UzkcN.jpeg"
                alt="Casal jantando"
                width={700}
                height={400}
                className="rounded-lg shadow-lg mx-auto my-4"
              />
              <Paragraph>Meus amigos me avisaram: “Ele é encrenca.” Mas eu ignorei. As primeiras semanas foram um furacão de romance, amor e desejo. Parecia cena de filme. Havia faísca em cada toque. Ele me mandava mensagens o tempo todo, me fazia rir, me fazia me sentir única. E o olhar dele me dizia que éramos destinados um ao outro. Até que aconteceu... de novo. Como em todos os outros relacionamentos anteriores... Senti a mudança. Ele começou a se afastar. As mensagens de hora em hora viraram “umas duas por dia”. Os convites pra me ver viraram “estou ocupado”. E, de repente, o amor virou distância e silêncio. O olhar apaixonado virou um olhar vazio e frio.</Paragraph>
             <Paragraph>Antes que eu pudesse entender o que estava acontecendo...</Paragraph>
             <Image
                src="https://i.imgur.com/mB5bADi.jpeg"
                alt="Mulher chateada"
                width={700}
                height={400}
                className="rounded-lg shadow-lg mx-auto my-4"
            />
            <Paragraph>Fui enviada numa viagem de trabalho de última hora. Destino: Dubai. A cidade das possibilidades. Pensei que seria o lugar perfeito pra colocar a cabeça no lugar. Mas, na verdade, eu estava me preparando pro pior. Na primeira noite, fui a um bar. Pedi uma bebida atrás da outra. Conversei com o bartender, e... acabei contando tudo sobre o Andre. O quanto eu sentia que éramos almas gêmeas, mas ele simplesmente não via isso. Foi então que ele me contou sobre a mulher que mudaria minha vida.</Paragraph>
        </Section>

        <Section className="text-center">
            <Image
                src="https://i.imgur.com/E2JblYn.jpeg"
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
                src="https://i.imgur.com/0kAi4NR.jpeg"
                alt="Casa de Lady Soraya"
                width={700}
                height={400}
                className="rounded-lg shadow-lg mx-auto my-4"
            />
            <Paragraph>A viagem foi longa. Mas, ao chegar, parecia que eu tinha atravessado um portal para outro mundo. A casa era de barro antigo, com o teto gasto e uma porta coberta por símbolos estranhos. Parei por um instante, respirei fundo... e bati.</Paragraph>
            <Image
                src="https://i.imgur.com/t5lBzeb.jpeg"
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
                src="https://i.imgur.com/3lh5nwV.jpeg"
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
                src="https://i.imgur.com/z43budv.jpeg"
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
                src="https://i.imgur.com/G6zb4jR.jpeg"
                alt="Coração de amor"
                width={100}
                height={100}
                className="mx-auto mb-4"
            />
            <Paragraph>Agora você pode lançar um poderoso feitiço de amor no homem que é o seu destino. Não importa se ele está distante... Se ele está com outra... Ou se vocês não se veem há anos. Porque o feitiço de Lady Soraya alinha as energias dele às suas... e faz com que o amor que você sente se torne óbvio pra ele também. Porque simplesmente não fará sentido pra ele estar com outra mulher.</Paragraph>
            <Paragraph>E quanto isso custa? Nada comparado ao valor do amor verdadeiro. Lady Soraya não busca lucro — apenas cumprir sua missão. Mas, para manter o site, foi necessário cobrar um valor simbólico. <span className="text-green-500">Apenas R$37,37</span> — um número sagrado — para as 3737 mulheres escolhidas. Mesmo que você esteja passando por dificultades... Mesmo que seja mãe solo... Mesmo que tenha perdido as esperanças... Este é o seu sinal.</Paragraph>
            <Paragraph className="my-6 text-xl font-bold text-primary">✨ Por apenas <span className="text-green-500">R$ 37,37</span> hoje, você pode lançar o feitiço que fará ele te amar eternamente. ✨</Paragraph>
            <div className="my-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-2xl font-bold text-primary">Pouquíssimas mulheres no mundo já sentiram uma ligação assim.</p>
            </div>
             <Image
                src="https://i.imgur.com/rGTHQev.jpeg"
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
                <Paragraph>O dia em que você assumiu o controle. O dia em que ele finalmente percebeu...</Paragraph>
                <p className="text-2xl font-bold my-4 text-primary">💖 Vocês são destinados um ao outro. 💖</p>
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

        <Section className="text-center">
          <SectionTitle>Garantia de Satisfação</SectionTitle>
          <Image
            src="https://i.imgur.com/Wmv041Z.png"
            alt="Selo de Garantia"
            width={100}
            height={100}
            className="mx-auto mb-4"
          />
          <Paragraph>Lady Soraya confia tanto na experiência que criou uma garantia total:</Paragraph>
          <Paragraph>Se você sentir que o feitiço não funcionou em sua vida amorosa, basta enviar um e-mail no contato@ladysoraya.com.br dentro do prazo de 7 dias após a compra.</Paragraph>
          <Paragraph className="font-bold">👉 Você será 100% reembolsado, sem perguntas.</Paragraph>
          <Paragraph>Sem burocracia. Sem complicação. Sem risco pra você.</Paragraph>
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

    

    

    