
"use client";

import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Flame } from "lucide-react";

const names = ["Juliana", "Mariana", "Sofia", "Beatriz", "Clara", "Larissa", "Laura", "Valentina"];
const cities = ["de São Paulo", "do Rio de Janeiro", "de Belo Horizonte", "de Curitiba", "de Brasília", "de Salvador", "de Fortaleza", "de Porto Alegre"];

const getRandomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

export default function RitualFogoSocialProof() {
  const { toast } = useToast();

  useEffect(() => {
    const showRandomToast = () => {
      const name = getRandomItem(names);
      const city = getRandomItem(cities);

      toast({
        description: (
          <div className="flex items-center gap-2">
            <Flame className="h-2.5 w-2.5 text-primary" />
            <p className="text-[10px]">{name} {city} recebeu o ritual da chama</p>
          </div>
        ),
        duration: 5000,
      });
    };

    const interval = setInterval(() => {
        showRandomToast();
    }, Math.random() * (15000 - 8000) + 8000); // Between 8 and 15 seconds

    // Show one immediately on load
    const initialTimeout = setTimeout(showRandomToast, 4000);

    return () => {
        clearInterval(interval);
        clearTimeout(initialTimeout);
    }
  }, [toast]);

  return null;
}
