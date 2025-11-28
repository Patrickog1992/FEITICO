
"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { ThumbsUp, Heart } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonialsData = [
  {
    name: "Juliana Paes",
    avatar: "https://i.imgur.com/Sza1ZfT.png",
    text: "Eu estava cética, mas dei uma chance. Em menos de 24 horas, ele me ligou, pedindo perdão e dizendo que não conseguia parar de pensar em mim. Estamos juntos e mais felizes do que nunca. A magia de Lady Soraya é real!",
  },
  {
    name: "Mariana Rios",
    avatar: "https://i.imgur.com/GJZpDHa.png",
    text: "Meu relacionamento estava por um fio. Depois do ritual, a energia entre nós mudou completamente. Ele se tornou mais carinhoso, atencioso e finalmente me pediu em casamento! Sou eternamente grata.",
  },
  {
    name: "Sofia Oliveira",
    avatar: "https://i.imgur.com/K5tLVza.jpg",
    text: "Ele tinha ido embora e eu estava arrasada. Uma amiga me indicou a Lady Soraya. Fiz o feitiço e, em três dias, ele bateu na minha porta com flores, implorando para voltar. É inacreditável!",
  },
  {
    name: "Beatriz Andrade",
    avatar: "https://i.imgur.com/NVXnmUf.jpg",
    text: "Havia outra mulher na jogada, e eu pensei que tinha perdido ele para sempre. O feitiço não só o trouxe de volta, como afastou a rival de uma vez por todas. Hoje, ele só tem olhos para mim.",
  },
  {
    name: "Clara Martins",
    avatar: "https://i.imgur.com/sqYjS4V.png",
    text: "Nunca tive sorte no amor. Decidi tentar o ritual para atrair uma nova pessoa, e o homem dos meus sonhos literalmente apareceu na minha vida uma semana depois. Conexão instantânea. Obrigada, Lady Soraya!",
  },
  {
    name: "Larissa Souza",
    avatar: "https://i.imgur.com/SPsVs9s.jpg",
    text: "Estávamos separados há meses. Depois do feitiço, ele começou a curtir minhas fotos, me mandou mensagem e hoje estamos planejando nosso futuro juntos. Foi a melhor decisão que já tomei.",
  },
];

type Testimonial = typeof testimonialsData[0] & {
    likes: number;
    hearts: number;
    time: number;
};

export default function Testimonials() {
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
    <section className="w-full max-w-4xl mx-auto my-8 md:my-16 px-4">
      <h2 className="font-headline text-3xl font-bold text-center text-primary mb-2">
        Algumas mulheres que Lady Soraya ajudou
      </h2>
      <p className="text-lg text-foreground/80 mb-8 text-center">Veja o que elas estão dizendo...</p>

      <div className="w-full max-w-2xl mx-auto mb-8">
        <video
          src="https://i.imgur.com/SAVgmMc.mp4"
          className="rounded-lg shadow-xl w-full"
          controls
          playsInline
          poster="https://i.imgur.com/UnCTnGG.jpeg"
        />
      </div>
      
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
    </section>
  );
}
