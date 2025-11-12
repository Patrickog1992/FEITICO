
"use client";

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function DynamicDateBanner() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setCurrentDate(format(new Date(), "dd 'de' MMMM", { locale: ptBR }));
  }, []);

  if (!currentDate) {
    return null;
  }

  return (
    <div className="bg-yellow-400 text-black text-center p-3 font-bold animate-pulse w-full max-w-4xl mx-auto rounded-lg mb-4">
      ATENÇÃO: No dia <strong className="bg-white text-yellow-500 px-2 rounded">{currentDate}</strong>, as energias cósmicas estão mais abertas — e o feitiço de Lady Soraya será até 3x mais forte, aproveite!
    </div>
  );
}
