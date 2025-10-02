import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

interface SectionProps extends ComponentProps<"section"> {
  id: string;
}

export function Section({ id, className, children, ...props }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-20", className)} {...props}>
      <div className="container">
        {children}
      </div>
    </section>
  );
}
