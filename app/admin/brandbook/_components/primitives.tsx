import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] uppercase tracking-[0.2em] text-accent-rust",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function Section({
  index,
  id,
  title,
  lead,
  children,
}: {
  index: number;
  id: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-8 border-t-2 border-foreground pt-6 pb-20 lg:pb-28"
    >
      <Eyebrow>
        [{String(index).padStart(2, "0")}] {title}
      </Eyebrow>
      <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-[1.1] tracking-tight lg:text-5xl">
        {title}
      </h2>
      {lead ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
          {lead}
        </p>
      ) : null}
      <div className="mt-12 space-y-16">{children}</div>
    </section>
  );
}

export function Block({
  title,
  note,
  children,
}: {
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-3">
        <h3 className="font-display text-xl font-medium tracking-tight">
          {title}
        </h3>
        {note ? (
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {note}
          </p>
        ) : null}
      </div>
      <div className="min-w-0 lg:col-span-9">{children}</div>
    </div>
  );
}

export function Tabla({
  head,
  rows,
  mono = [],
}: {
  head: string[];
  rows: React.ReactNode[][];
  mono?: number[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[520px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-t-2 border-foreground">
            {head.map((h) => (
              <th
                key={h}
                className="py-3 pr-6 font-mono text-[11px] font-normal uppercase tracking-[0.14em] text-muted-foreground"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t align-top">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={cn(
                    "py-3 pr-6 leading-relaxed",
                    j === 0 && "font-medium",
                    mono.includes(j) && "font-mono text-[13px] font-normal",
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Lista({
  items,
  tone = "neutral",
}: {
  items: string[];
  tone?: "neutral" | "si" | "no";
}) {
  const mark = tone === "si" ? "→" : tone === "no" ? "×" : "·";
  return (
    <ul className="divide-y border-y">
      {items.map((item) => (
        <li key={item} className="flex gap-4 py-3 text-sm leading-relaxed">
          <span
            className={cn(
              "font-mono",
              tone === "no" ? "text-accent-rust" : "text-muted-foreground",
            )}
            aria-hidden="true"
          >
            {mark}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Par({
  si,
  no,
}: {
  si: { label?: string; children: React.ReactNode };
  no: { label?: string; children: React.ReactNode };
}) {
  return (
    <div className="grid gap-px border bg-border sm:grid-cols-2">
      <div className="bg-background p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          {si.label ?? "Sí"}
        </p>
        <div className="mt-4">{si.children}</div>
      </div>
      <div className="bg-background p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent-rust">
          {no.label ?? "No"}
        </p>
        <div className="mt-4">{no.children}</div>
      </div>
    </div>
  );
}

export function Estado({ children }: { children: string }) {
  const propuesta = children.startsWith("Propuesta");
  const pendiente = children.startsWith("Pendiente");
  return (
    <span
      className={cn(
        "font-mono text-[12px] leading-relaxed",
        propuesta || pendiente ? "text-accent-rust" : "text-muted-foreground",
      )}
    >
      {children}
    </span>
  );
}
