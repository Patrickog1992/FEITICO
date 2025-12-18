
"use client";

import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Flame } from "lucide-react";

const names = ["Ana", "Maria", "Juliana", "Beatriz", "Sofia", "Clara", "Mariana", "Larissa"];
const cities = ["de São Paulo", "do Rio de Janeiro", "de Belo Horizonte", "de Salvador", "de Brasília", "de Curitiba", "de Manaus", "de Recife"];

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
            <Flame className="h-4 w-4 text-primary" />
            <p className="text-xs">{name} {city} acabou de receber o ritual da chama.</p>
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
