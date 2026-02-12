"use client";

import { ReactNode } from "react";

interface Props {
  title: string;
  subtitle?: string;
  content: ReactNode;
}

export function BlockQuote({ title, subtitle, content }: Props) {
  return (
    <section className="space-y-4 bg-amber-50/50 border-l-4 border-accent-rust p-8 md:p-10">
      <div className="space-y-3">
        <span className="text-[10px] tracking-[0.3em] text-accent-rust font-mono uppercase">
          {title}
        </span>
        {subtitle ? (
          <h3 className="text-xl md:text-2xl font-display font-semibold tracking-tight text-foreground">
            {subtitle}
          </h3>
        ) : null}
      </div>
      <div className="space-y-4 text-foreground/90">{content}</div>
    </section>
  );
}
