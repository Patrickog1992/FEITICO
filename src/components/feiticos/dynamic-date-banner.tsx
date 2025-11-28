
"use client";

import { useState, useEffect } from 'react';

export default function DynamicDateBanner() {
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
        <div className="bg-yellow-400 text-black text-center p-2 text-sm font-semibold w-full max-w-4xl mx-auto rounded-lg mb-4 h-9 animate-pulse" />
    );
  }

  return (
    <div className="bg-yellow-400 text-black text-center p-2 text-sm font-semibold w-full max-w-4xl mx-auto rounded-lg mb-4">
      ATENÇÃO: No dia <span className="bg-white text-primary px-2 py-1 rounded-md mx-1">{currentDate}</span>, as energias cósmicas estão mais abertas e o feitiço de Lady Soraya será até 3x mais forte, aproveite!
    </div>
  );
}
