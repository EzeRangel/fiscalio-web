import { LogoLockup, LogoMark } from "@/components/brand/logo-mark";
import { PAPER_SCOPE } from "@/lib/brand";
import { cn } from "@/lib/utils";

const u = (px: number) => `${(px / 10.8).toFixed(3)}cqw`;

const TOTAL = 7;

function Placa({
  n,
  antetitulo,
  firma = "isotipo",
  children,
}: {
  n: number;
  antetitulo?: string;
  firma?: "imagotipo" | "isotipo";
  children: React.ReactNode;
}) {
  return (
    <div className="@container" style={PAPER_SCOPE}>
      <div
        className="flex flex-col border bg-background text-foreground"
        style={{ aspectRatio: "4 / 5", padding: u(84) }}
      >
        <div className="shrink-0" style={{ height: u(156) }}>
          {antetitulo ? (
            <p
              className="font-mono font-medium uppercase text-accent-rust"
              style={{ fontSize: u(28), letterSpacing: "0.12em" }}
            >
              {antetitulo}
            </p>
          ) : null}
        </div>
        <div className="flex min-h-0 flex-1 flex-col">{children}</div>
        <div className="flex shrink-0 items-center justify-between">
          {firma === "imagotipo" ? (
            <LogoLockup style={{ fontSize: u(40) }} />
          ) : (
            <LogoMark style={{ width: u(56), height: u(56) }} />
          )}
          <p
            className="font-mono text-muted-foreground"
            style={{ fontSize: u(24), letterSpacing: "0.08em" }}
          >
            {n}/{TOTAL}
          </p>
        </div>
      </div>
    </div>
  );
}

function Titular({
  size = 96,
  children,
}: {
  size?: number;
  children: React.ReactNode;
}) {
  return (
    <p
      className="font-display font-bold"
      style={{
        fontSize: u(size),
        letterSpacing: size >= 120 ? "-0.04em" : "-0.03em",
        lineHeight: size >= 120 ? 0.98 : 1.02,
      }}
    >
      {children}
    </p>
  );
}

function Apoyo({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-medium"
      style={{
        fontSize: u(44),
        letterSpacing: "-0.01em",
        lineHeight: 1.25,
        marginTop: u(40),
      }}
    >
      {children}
    </p>
  );
}

function Etiqueta({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={cn(
        "font-mono font-medium uppercase text-muted-foreground",
        className,
      )}
      style={{ fontSize: u(28), letterSpacing: "0.08em" }}
    >
      {children}
    </p>
  );
}

function Mono({
  size,
  className,
  children,
}: {
  size: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={cn("font-mono font-medium", className)}
      style={{
        fontSize: u(size),
        letterSpacing: size >= 120 ? "-0.05em" : "-0.04em",
        lineHeight: 1,
      }}
    >
      {children}
    </p>
  );
}

export function PlacaPortada() {
  return (
    <Placa n={1} antetitulo="Un modelo mental fiscal" firma="imagotipo">
      <Titular size={150}>
        Facturado
        <br />
        <span className="text-accent-rust">≠</span> cobrado
      </Titular>
    </Placa>
  );
}

export function PlacaSituacion() {
  return (
    <Placa n={2}>
      <Etiqueta>Facturado</Etiqueta>
      <Mono size={190} className="mt-[1cqw]">
        $58,000
      </Mono>
      <Etiqueta className="mt-[6cqw]">Cobrado</Etiqueta>
      <Mono size={190} className="mt-[1cqw]">
        $0
      </Mono>
      <Apoyo>El cliente paga a 30 días.</Apoyo>
    </Placa>
  );
}

function LineaDeTiempo({ capa }: { capa: 1 | 2 }) {
  const previo = capa === 2;
  const dot = u(44);
  const columnas = { gridTemplateColumns: `${u(170)} 1fr` };
  return (
    <div style={{ marginTop: u(120) }}>
      <div className="grid items-end" style={columnas}>
        <span />
        <div className="flex justify-between">
          <Etiqueta>Día 1 · emites</Etiqueta>
          <Etiqueta>Día 30 · te pagan</Etiqueta>
        </div>
      </div>

      <div
        className={cn(
          "grid items-center",
          previo ? "text-muted-foreground" : "text-foreground",
        )}
        style={{ ...columnas, marginTop: u(80) }}
      >
        <Mono size={72}>PUE</Mono>
        <div className="relative" style={{ height: u(120) }}>
          <div
            className="absolute top-1/2 left-0 right-0 -translate-y-1/2 bg-border"
            style={{ height: u(6) }}
          />
          <div
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-current"
            style={{ height: u(8), width: "40%" }}
          />
          <div
            className="absolute top-1/2 left-0 -translate-y-1/2 rounded-full bg-current"
            style={{ width: dot, height: dot }}
          />
          <div
            className="absolute top-1/2 right-0 -translate-y-1/2 rounded-full border-muted-foreground bg-background"
            style={{ width: dot, height: dot, borderWidth: u(5) }}
          />
          <span
            className={cn(
              "absolute top-1/2 bg-background font-mono font-medium uppercase",
              previo
                ? "border-muted-foreground text-muted-foreground"
                : "border-accent-rust text-accent-rust",
            )}
            style={{
              left: "40%",
              fontSize: u(48),
              letterSpacing: "0.08em",
              padding: `${u(6)} ${u(20)}`,
              borderWidth: u(5),
              transform: "translate(-50%, -50%) rotate(-6deg)",
            }}
          >
            Fin
          </span>
        </div>
      </div>

      <div
        className={cn(
          "grid items-center",
          previo ? "text-foreground" : "text-border",
        )}
        style={{ ...columnas, marginTop: u(160) }}
      >
        <Mono size={72}>PPD</Mono>
        <div className="relative" style={{ height: u(120) }}>
          <div
            className="absolute top-1/2 left-0 right-0 -translate-y-1/2 border-dashed border-t-current"
            style={{ borderTopWidth: u(8) }}
          />
          <div
            className="absolute top-1/2 left-0 -translate-y-1/2 rounded-full bg-current"
            style={{ width: dot, height: dot }}
          />
          {previo ? (
            <>
              <div
                className="absolute top-1/2 right-0 -translate-y-1/2 rounded-full bg-accent-amber"
                style={{ width: u(60), height: u(60) }}
              />
              <Etiqueta className="absolute right-0 top-full text-foreground">
                Complemento de pago
              </Etiqueta>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function PlacaModelo({ capa }: { capa: 1 | 2 }) {
  return (
    <Placa n={capa === 1 ? 3 : 4}>
      <Titular size={88}>
        {capa === 1 ? (
          <>
            Con PUE, la historia{" "}
            <span className="text-accent-rust">termina al emitir.</span>
          </>
        ) : (
          <>
            Con PPD, sigue abierta{" "}
            <span className="text-accent-amber">hasta el pago.</span>
          </>
        )}
      </Titular>
      <LineaDeTiempo capa={capa} />
    </Placa>
  );
}

export function PlacaDesglose() {
  const filas: [string, string, string][] = [
    ["PUE · este mes", "$8,550.00", "text-accent-rust"],
    ["PPD · este mes", "$0.00", "text-foreground"],
    ["PPD · el mes del cobro", "$8,550.00", "text-accent-amber font-bold"],
  ];
  return (
    <Placa n={5}>
      <Titular size={88}>Lo que el SAT cuenta.</Titular>
      <div
        className="border-t-foreground"
        style={{ borderTopWidth: u(4), marginTop: u(64) }}
      >
        {filas.map(([k, v, tone]) => (
          <div
            key={k}
            className="flex items-baseline justify-between border-b"
            style={{ padding: `${u(36)} 0` }}
          >
            <Etiqueta>{k}</Etiqueta>
            <Mono size={72} className={tone}>
              {v}
            </Mono>
          </div>
        ))}
      </div>
      <p
        className="font-mono text-muted-foreground"
        style={{ fontSize: u(28), letterSpacing: "0.02em", marginTop: u(40) }}
      >
        RESICO PF · $50,000 + IVA 16% · único ingreso del mes · cliente a 30
        días
      </p>
    </Placa>
  );
}

export function PlacaRegla() {
  return (
    <Placa n={6}>
      <Etiqueta>Para el SAT</Etiqueta>
      <div style={{ marginTop: u(24) }}>
        <Titular size={104}>
          La factura es el inicio de la historia,{" "}
          <span className="text-accent-rust">no el final.</span>
        </Titular>
      </div>
    </Placa>
  );
}

export function PlacaCierre() {
  return (
    <Placa n={7} firma="imagotipo">
      <Titular size={104}>
        Antes de emitir:{" "}
        <span className="text-accent-rust">¿ya me pagaron?</span>
      </Titular>
      <Apoyo>Sigue a Fiscalio.</Apoyo>
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
