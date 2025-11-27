
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
    <div className="bg-yellow-400 text-black text-center p-2 text-sm font-semibold w-full max-w-4xl mx-auto rounded-lg mb-4">
      ATENÇÃO: No dia <strong className="bg-white text-yellow-500 px-1 rounded">{currentDate}</strong> as energias estão mais alinhadas e o feitiço será até 3x mais forte.
      <br className="sm:hidden" /> Amanhã o efeito já começa a enfraquecer, aproveite!
    </div>
  );
}
