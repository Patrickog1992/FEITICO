
"use client";

import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Flame } from "lucide-react";

export default function RitualFogoSocialProof() {
  const { toast } = useToast();

  useEffect(() => {
    const showRandomToast = () => {
      toast({
        description: (
          <div className="flex items-center gap-2">
            <Flame className="h-2.5 w-2.5 text-primary" />
            <p className="text-[10px]">tal pessoa de tal lugar recebeu o ritual da chama</p>
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
