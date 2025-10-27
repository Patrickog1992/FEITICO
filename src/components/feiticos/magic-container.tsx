import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type MagicContainerProps = {
  children: ReactNode;
  className?: string;
};

export function MagicContainer({ children, className }: MagicContainerProps) {
  return (
    <div
      className={cn(
        "w-full max-w-2xl rounded-2xl border bg-card/80 p-6 text-card-foreground shadow-2xl shadow-primary/10 backdrop-blur-sm transition-all duration-500 ease-in-out animate-in fade-in-50 slide-in-from-bottom-10",
        className
      )}
    >
      {children}
    </div>
  );
}
