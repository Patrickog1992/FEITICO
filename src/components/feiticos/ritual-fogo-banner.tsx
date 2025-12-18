"use client";

import { useState, useEffect } from 'react';

export default function RitualFogoBanner() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // This will only run on the client side, after hydration
    const date = new Date().toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
    });
    setCurrentDate(date);
  }, []); // Empty dependency array ensures this runs once on mount

  if (!currentDate) {
    return (
        <div className="bg-destructive text-destructive-foreground text-center p-3 text-sm font-semibold w-full max-w-4xl mx-auto rounded-lg mb-4 h-12 animate-pulse" />
    );
  }

  return (
    <div className="bg-destructive text-destructive-foreground text-center p-3 text-sm font-semibold w-full max-w-4xl mx-auto rounded-lg mb-4">
      ATENÇÃO: O fim de ano é um período raro de transição energética. Durante essa virada, e no dia <span className="bg-yellow-400 text-black px-2 py-1 rounded-md mx-1">{currentDate}</span>, o Ritual da Chama de 5 Noites atua com intensidade maior, acelerando o retorno e a obsessão.
    </div>
  );
}
