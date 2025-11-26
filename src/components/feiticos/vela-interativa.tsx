
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function VelaInterativa() {
  const [isLit, setIsLit] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center my-2 sm:my-6 cursor-pointer" onClick={() => setIsLit(!isLit)}>
        <svg
            viewBox="0 0 100 150"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-24 sm:w-24 sm:h-36"
        >
            <defs>
                <style>
                {`
                @keyframes flicker {
                    0%, 100% { transform: scaleY(1) translateY(0); opacity: 1; }
                    50% { transform: scaleY(0.95) translateY(2px); opacity: 0.9; }
                }
                @keyframes glow {
                    0%, 100% { filter: drop-shadow(0 0 3px hsl(var(--primary))); }
                    50% { filter: drop-shadow(0 0 6px hsl(var(--primary))); }
                }
                .flame {
                    transform-origin: 50% 100%;
                    animation: flicker 3s ease-in-out infinite;
                }
                .glow {
                   animation: glow 3s ease-in-out infinite;
                }
                `}
                </style>
                <linearGradient id="flameGradient" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="#FFD700" />
                    <stop offset="80%" stopColor="#FF8C00" />
                    <stop offset="100%" stopColor="#FF4500" />
                </linearGradient>
            </defs>

            {/* Candle Body */}
            <rect
                x="30"
                y="50"
                width="40"
                height="100"
                rx="5"
                fill="hsl(var(--primary))"
            />
            {/* Candle Drip */}
             <path d="M 30 55 Q 35 60 40 55 T 50 55 T 60 55 T 70 55" fill="hsl(var(--primary))" />

            {/* Wick */}
            <line
                x1="50"
                y1="50"
                x2="50"
                y2="45"
                stroke={isLit ? "#333" : "#666"}
                strokeWidth="2"
            />

            {/* Flame (conditionally rendered) */}
            {isLit && (
                <g className="flame glow">
                    {/* Outer flame */}
                    <path
                        d="M50,45 C 55,35 55,25 50,15 C 45,25 45,35 50,45 Z"
                        fill="url(#flameGradient)"
                        opacity="0.8"
                    />
                    {/* Inner flame */}
                    <path
                        d="M50,42 C 53,35 53,30 50,22 C 47,30 47,35 50,42 Z"
                        fill="#FFFFFF"
                    />
                </g>
            )}
        </svg>
      <p className="text-xs sm:text-sm text-muted-foreground mt-2 text-center">{isLit ? 'A chama está acesa!' : 'Clique na vela para acender a chama da paixão'}</p>
    </div>
  );
}
