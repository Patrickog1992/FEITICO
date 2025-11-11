
"use client";

import PreLandingQuiz from "@/components/feiticos/pre-landing-quiz";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useRouter } from "next/navigation";

export default function QuizzPage() {
  const router = useRouter();
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  const handleQuizComplete = () => {
    router.push('/quizz-landing');
  };

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden">
      {heroImage && (
         <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover -z-10 opacity-10"
            data-ai-hint={heroImage.imageHint}
          />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/80 to-transparent" />
      
      <div className="w-full max-w-2xl">
        <PreLandingQuiz onComplete={handleQuizComplete} />
      </div>
    </main>
  );
}
