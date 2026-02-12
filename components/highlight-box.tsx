"use client";

export const HighlightBox = ({
  title,
  children,
  variant = "dark",
}: {
  title: string;
  children: React.ReactNode;
  variant?: "dark" | "rust" | "amber" | "gray";
}) => {
  const styles = {
    dark: "bg-foreground text-background",
    rust: "bg-accent-rust text-white",
    amber: "bg-accent-amber text-white",
    gray: "bg-zinc-50 border-l-4 border-accent-rust",
  };
  return (
    <section className={`${styles[variant]} p-6 space-y-2`}>
      <div className="text-[9px] tracking-[0.3em] font-mono opacity-70 uppercase">
        {title}
      </div>
      <div className="text-sm leading-relaxed">{children}</div>
    </section>
  );
};
