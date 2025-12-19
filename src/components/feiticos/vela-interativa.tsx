
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function VelaInterativa() {
  const [isLit, setIsLit] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center my-2 sm:my-4 cursor-pointer group" onClick={() => setIsLit(!isLit)}>
        <svg
            viewBox="0 0 100 150"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-24 sm:w-20 sm:h-32"
        >
            <defs>
                <style>
                {`
                @keyframes flicker {
                    0%, 100% { transform: scaleY(1) translateY(0); opacity: 1; }
                    50% { transform: scaleY(0.95) translateY(2px); opacity: 0.9; }
                }
                @keyframes glow {
                    0%, 100% { filter: drop-shadow(0 0 5px hsl(var(--primary) / 0.8)); }
                    50% { filter: drop-shadow(0 0 12px hsl(var(--primary))); }
                }
                .flame {
                    transform-origin: 50% 100%;
                    animation: flicker 2s ease-in-out infinite;
                }
                .glow {
                   animation: glow 2s ease-in-out infinite;
                }
                `}
                </style>
                <linearGradient id="flameGradient" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="hsl(45 100% 80%)" />
                    <stop offset="80%" stopColor="hsl(35 100% 60%)" />
                    <stop offset="100%" stopColor="hsl(15 100% 50% / 0.5)" />
                </linearGradient>
            </defs>

            {/* Candle Body */}
            <rect
                x="35"
                y="50"
                width="30"
                height="100"
                rx="3"
                className="fill-gray-200"
            />
             <path d="M 35 55 Q 40 60 45 55 T 55 55 T 65 55" className="fill-gray-200" />
            
             {/* Wick */}
            <rect
                x="48.5"
                y="42"
                width="3"
                height="8"
                className={cn("transition-colors", isLit ? "fill-black" : "fill-gray-500")}
            />

            {/* Flame (conditionally rendered) */}
            {isLit && (
                <g className="flame glow">
                    <path
                        d="M50,45 C 60,35 60,20 50,10 C 40,20 40,35 50,45 Z"
                        fill="url(#flameGradient)"
                    />
                    <path
                        d="M50,42 C 55,35 55,28 50,20 C 45,28 45,35 50,42 Z"
                        className="fill-white"
                    />
                </g>
            )}
        </svg>
      <p className="text-xs sm:text-sm text-muted-foreground mt-2 text-center group-hover:text-primary transition-colors">
        {isLit ? 'A chama da fé está acesa!' : 'Clique no altar para acender a chama'}
      </p>
    </div>
  );
}
