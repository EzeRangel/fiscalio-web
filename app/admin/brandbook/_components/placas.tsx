import { LogoLockup, LogoMark } from "@/components/brand/logo-mark";
import { PAPER_SCOPE } from "@/lib/brand";
import { cn } from "@/lib/utils";

const u = (px: number) => `${(px / 10.8).toFixed(3)}cqw`;

function Placa({
  label,
  ratio = "4 / 5",
  children,
}: {
  label: string;
  ratio?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="@container" style={PAPER_SCOPE}>
      <div
        className="flex flex-col border bg-background text-foreground"
        style={{ aspectRatio: ratio, padding: u(84) }}
      >
        <p
          className="font-mono uppercase text-accent-rust"
          style={{ fontSize: u(26), letterSpacing: "0.14em" }}
        >
          {label}
        </p>
        <div className="flex flex-1 flex-col justify-center">{children}</div>
        <LogoLockup style={{ fontSize: u(40) }} />
      </div>
    </div>
  );
}

function Etiqueta({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-mono uppercase text-muted-foreground"
      style={{ fontSize: u(24), letterSpacing: "0.14em" }}
    >
      {children}
    </p>
  );
}

export function PlacaCifra() {
  return (
    <Placa label="[01] Facturado ≠ cobrado">
      <div className="grid grid-cols-2 border-t-2 border-b border-t-foreground">
        {[
          ["Facturado", "$58,000.00"],
          ["Cobrado", "$0.00"],
        ].map(([k, v], i) => (
          <div
            key={k}
            className={cn(i === 1 && "border-l")}
            style={{
              padding: `${u(40)} 0 ${u(40)} ${i === 1 ? u(40) : "0"}`,
            }}
          >
            <Etiqueta>{k}</Etiqueta>
            <p
              className="font-mono font-medium"
              style={{
                fontSize: u(62),
                letterSpacing: "-0.05em",
                lineHeight: 1.1,
                marginTop: u(12),
              }}
            >
              {v}
            </p>
          </div>
        ))}
      </div>
      <p
        className="font-display font-bold"
        style={{
          fontSize: u(50),
          letterSpacing: "-0.02em",
          lineHeight: 1.15,
          marginTop: u(48),
        }}
      >
        Para el SAT, la factura es el inicio de la historia,{" "}
        <span className="text-accent-rust">no el final.</span>
      </p>
      <p
        className="font-mono text-muted-foreground"
        style={{ fontSize: u(22), letterSpacing: "0.04em", marginTop: u(40) }}
      >
        $50,000 + IVA 16% · cliente que paga a 30 días
      </p>
    </Placa>
  );
}

const BOVEDAS = [
  { n: 1, name: "IVA", value: "$8,000", text: "Lo cobras para el SAT.", fill: 14 },
  { n: 2, name: "ISR", value: "$550", text: "Tu costo por facturar.", fill: 1.5 },
  { n: 3, name: "Tuya", value: "$49,450", text: "Lo que sí puedes gastar.", fill: 85 },
];

export function PlacaModelo() {
  return (
    <Placa label="[03] El modelo mental">
      <p
        className="font-display font-bold"
        style={{ fontSize: u(78), letterSpacing: "-0.03em", lineHeight: 1.02 }}
      >
        Reparte cada depósito en{" "}
        <span className="text-accent-rust">tres bóvedas.</span>
      </p>
      <div
        className="grid grid-cols-3"
        style={{ gap: u(24), marginTop: u(64) }}
      >
        {BOVEDAS.map((b) => {
          const tuya = b.n === 3;
          return (
            <div
              key={b.n}
              className={cn(
                "border-2 bg-card",
                tuya ? "border-accent-amber" : "border-border",
              )}
              style={{ borderRadius: u(28), padding: u(24) }}
            >
              <Etiqueta>Bóveda {b.n}</Etiqueta>
              <p
                className="font-display font-bold"
                style={{ fontSize: u(48), letterSpacing: "-0.02em" }}
              >
                {b.name}
              </p>
              <div
                className="relative overflow-hidden border bg-secondary"
                style={{
                  height: u(260),
                  borderRadius: u(16),
                  marginTop: u(12),
                }}
              >
                <div
                  className={cn(
                    "absolute inset-x-0 bottom-0",
                    tuya ? "bg-accent-amber" : "bg-muted-foreground",
                  )}
                  style={{ height: `${b.fill}%` }}
                />
              </div>
              <p
                className="font-mono font-medium"
                style={{
                  fontSize: u(36),
                  letterSpacing: "-0.04em",
                  marginTop: u(20),
                }}
              >
                {b.value}
              </p>
              <p
                className="text-muted-foreground"
                style={{ fontSize: u(24), lineHeight: 1.3, marginTop: u(8) }}
              >
                {b.text}
              </p>
            </div>
          );
        })}
      </div>
    </Placa>
  );
}

export function PlacaCierre() {
  return (
    <Placa label="[05] El cierre">
      <p
        className="font-display font-bold"
        style={{ fontSize: u(88), letterSpacing: "-0.03em", lineHeight: 1.02 }}
      >
        Antes de emitir:{" "}
        <span className="text-accent-rust">¿ya me pagaron?</span>
      </p>
      <div
        className="border-t-2 border-t-foreground"
        style={{ marginTop: u(64) }}
      >
        {[
          ["Si dice PUE", "$8,550 este mes", "text-accent-rust"],
          ["Si dice PPD", "$0 este mes", "text-foreground"],
        ].map(([k, v, tone]) => (
          <div
            key={k}
            className="flex items-baseline justify-between border-b"
            style={{ padding: `${u(28)} 0` }}
          >
            <Etiqueta>{k}</Etiqueta>
            <p
              className={cn("font-mono font-medium", tone)}
              style={{ fontSize: u(44), letterSpacing: "-0.04em" }}
            >
              {v}
            </p>
          </div>
        ))}
      </div>
      <p
        className="font-medium"
        style={{ fontSize: u(32), lineHeight: 1.3, marginTop: u(48) }}
      >
        Sigue a Fiscalio: un modelo mental fiscal cada semana.
      </p>
    </Placa>
  );
}

export function ZonaSegura() {
  return (
    <div style={PAPER_SCOPE}>
      <div
        className="relative mx-auto w-full max-w-[220px] border bg-background text-foreground"
        style={{ aspectRatio: "9 / 16" }}
      >
        <div className="absolute inset-x-0 top-0 flex h-[14%] items-center justify-center bg-secondary">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            14% libre
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex h-[35%] items-center justify-center bg-secondary">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            35% libre
          </span>
        </div>
        <div className="absolute inset-x-[6%] top-[14%] bottom-[35%] flex flex-col justify-between border border-dashed border-foreground p-3">
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-accent-rust">
            Zona segura
          </span>
          <span className="font-display text-lg font-bold leading-[1.05] tracking-tight">
            Texto, cifras y logo viven aquí.
          </span>
        </div>
      </div>
    </div>
  );
}

export function Avatar({ invertido = false }: { invertido?: boolean }) {
  return (
    <div style={PAPER_SCOPE}>
      <div
        className={cn(
          "flex aspect-square w-full items-center justify-center rounded-full border",
          invertido
            ? "bg-primary text-primary-foreground"
            : "bg-background text-foreground",
        )}
      >
        <LogoMark className="size-[56%]" />
      </div>
    </div>
  );
}
