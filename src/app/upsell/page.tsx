
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const upsellOffers = [
  {
    title: "Feitiço DUPLO + Removedor de Rivais",
    imageUrl: "https://i.imgur.com/gp4VXrm.png",
    description: "Feitiço místico que duplica o poder do amor e remove rivais, despertando devoção e atração irresistível.",
    priceFrom: "R$47,00",
    priceTo: "R$9,90",
    link: "https://pay.kirvano.com/bcfceec3-293d-46eb-b85a-abd26f6ad1fa"
  },
  {
    title: "Mensagem astral de Amor",
    imageUrl: "https://i.imgur.com/0IjhiNs.png",
    description: "Receba uma mensagem canalizada diretamente pelo oráculo de Lady Soraya, revelando o que ele sente por você neste momento.",
    priceFrom: "R$47,00",
    priceTo: "R$9,90",
    link: "https://pay.kirvano.com/fd8086e8-eb72-418c-bcac-56187b994617"
  },
  {
    title: "Leitura do Destino Amoroso",
    imageUrl: "https://i.imgur.com/hAQmrcz.png",
    description: "Descubra o que os Oráculos de Lady Soraya revelam sobre o futuro do seu relacionamento.",
    priceFrom: "R$47,00",
    priceTo: "R$9,90",
    link: "https://pay.kirvano.com/0a352bf2-5dc5-46d9-8fcf-3f9dd96bfc9f"
  },
  {
    title: "Amuleto energético de Lady Soraya",
    imageUrl: "https://i.imgur.com/NfKPewO.png",
    description: "Um selo espiritual que mantém o campo energético do amor aberto e protegido para que ele nunca mais vá embora",
    priceFrom: "R$97,00",
    priceTo: "R$19,90",
    link: "https://pay.kirvano.com/719688bc-f2c2-465b-b7c4-cb992c739f38"
  },
  {
    title: "Feitiço do arrependimento",
    imageUrl: "https://i.imgur.com/JAlVLyC.png",
    description: "Faça ele sentir saudades e se arrepender de tudo o que fez.\nLady Soraya canaliza a energia do arrependimento para abrir o coração dele de novo.",
    priceFrom: "R$97,00",
    priceTo: "R$19,90",
    link: "https://pay.kirvano.com/22ad83ea-5768-40e8-bc98-5e7ac2158781"
  }
];

export default function UpsellPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
       <div className="relative isolate overflow-hidden">
        <Image
            src="https://images.unsplash.com/photo-1679837577464-11def9613750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxteXN0aWNhbCUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzYxNTg5NzM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Mystical background"
            fill
            className="object-cover -z-10 opacity-10"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/80 to-transparent" />

        <div className="container mx-auto px-4 py-12 sm:py-16">
          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary">
              ESPERE! SEUS FEITIÇOS AINDA NÃO ACABARAM...
            </h1>
            <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto text-foreground/80">
              Antes de ir, temos várias ofertas únicas e exclusivas para você.
            </p>
          </header>

          <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {upsellOffers.map((offer, index) => (
              <div key={index} className="flex flex-col items-center text-center bg-card/80 p-6 rounded-2xl shadow-2xl shadow-primary/10 backdrop-blur-sm">
                <Image
                  src={offer.imageUrl}
                  alt={offer.title}
                  width={400}
                  height={200}
                  className="rounded-lg mb-4 w-full aspect-video object-contain"
                />
                <h2 className="text-xl font-bold font-headline text-primary mb-2">
                  {offer.title}
                </h2>
                <p className="text-foreground/80 mb-4 flex-grow whitespace-pre-line">
                  {offer.description}
                </p>
                <div className="my-4">
                  <p className="line-through text-red-500">DE {offer.priceFrom}</p>
                  <p className="text-2xl font-bold text-green-500">por {offer.priceTo}</p>
                </div>
                <Button asChild size="lg" className="w-full max-w-xs animate-button-glow-success bg-success text-success-foreground hover:bg-success/90">
                  <Link href={offer.link}>
                    COMPRAR AGORA
                  </Link>
                </Button>
              </div>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
