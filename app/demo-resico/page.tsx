import type { Metadata } from "next";
import { Logo } from "@/components/logo";
import { PageView } from "@/components/page-view";
import { Reveal } from "@/components/reveal";
import { DemoFooter } from "@/components/demo-footer";
import { CAL_COM_DEMO_URL, APP_URL } from "@/lib/constants";
import { DemoCta } from "./demo-cta";
import { cn } from "@/lib/utils";
import { Check, Minus } from "lucide-react";

const OFFER =
  "Prepara tu borrador de declaración mensual RESICO gratis en 15 minutos";

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export const metadata: Metadata = {
  title: "Borrador de declaración RESICO gratis en 15 minutos — Fiscalio",
  description:
    "Agenda una sesión gratuita de 15 minutos y preparamos el borrador de tu declaración mensual RESICO con tus propios CFDIs. Sin compromiso.",
  alternates: { canonical: "/demo-resico" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Tu borrador de declaración RESICO, gratis en 15 minutos",
    description:
      "Sesión gratuita de 15 minutos: revisamos tus ingresos, ISR, IVA y retenciones, y preparamos tu borrador RESICO con tus CFDIs.",
    type: "website",
    locale: "es_MX",
    images: [
      {
        url: `${APP_URL}/api/og?title=${encodeURIComponent("Tu borrador RESICO, gratis en 15 min")}&subtitle=${encodeURIComponent("Sesión gratuita para preparar tu declaración mensual con tus propios CFDIs")}&label=${encodeURIComponent("SIN COSTO")}`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

const ficha: { label: string; value: string; tone?: "accent" | "muted" }[] = [
  { label: "Duración", value: "15 minutos" },
  { label: "Formato", value: "Videollamada · Google Meet" },
  { label: "Costo", value: "$0 MXN", tone: "accent" },
  { label: "Te llevas", value: "Tu borrador RESICO del mes" },
  { label: "Trae", value: "Tus CFDIs o el resumen del mes" },
  { label: "No necesitas", value: "e.firma ni contraseñas", tone: "muted" },
];

const ticker = [
  "Sesión 1 a 1",
  "Videollamada",
  "Sin costo",
  "Sin credenciales",
  "Borrador RESICO",
];

const profiles = [
  {
    title: "Facturas bajo RESICO (clave 626)",
    desc: "Estás dado de alta y presentas pagos mensuales de ISR e IVA.",
  },
  {
    title: "Llevas tu propia contabilidad o pagas por ayuda externa",
    desc: "Tú cargas el control del mes: con una hoja de cálculo o con apoyo de alguien más.",
  },
  {
    title: "No terminas de saber si estás declarando bien",
    desc: "Quieres revisar tus números con alguien antes de mandar la declaración.",
  },
];

const timeline = [
  {
    time: "00:00 — 05:00",
    title: "Me cuentas tu situación",
    desc: "Qué te preocupa del mes, qué ingresos cobraste y con qué información cuentas.",
  },
  {
    time: "05:00 — 11:00",
    title: "Corremos tu borrador",
    desc: "Con tus CFDIs calculamos ISR, IVA y retenciones en Fiscalio y te mostramos de dónde sale cada número.",
  },
  {
    time: "11:00 — 15:00",
    title: "Te llevas tu resultado",
    desc: "Revisas el borrador, resolvemos tus dudas y decides con calma si quieres continuar.",
  },
];

const bring = [
  "Los ingresos que cobraste este mes",
  "Tus CFDIs (XML o PDF) o el resumen con el que declaras",
  "Cinco minutos para entrar a la videollamada",
];

const leave = [
  "e.firma ni contraseñas del SAT",
  "Subir tus datos a ninguna nube",
  "Tener tus números perfectos desde el inicio",
];

const guarantees = [
  "Sin tarjeta de crédito",
  "Sin contraseñas ni e.firma",
  "Sin obligación de comprar al terminar",
];

function Ruler() {
  return (
    <div aria-hidden className="container mx-auto max-w-6xl px-6 lg:px-12">
      <div className="flex items-end justify-between border-t border-border pt-2 pb-1">
        {Array.from({ length: 60 }).map((_, i) => (
          <span
            key={i}
            className={i % 5 === 0 ? "h-3 w-px bg-border" : "h-1.5 w-px bg-border"}
          />
        ))}
      </div>
    </div>
  );
}

function SectionHead({
  index,
  kicker,
  title,
  intro,
}: {
  index: string;
  kicker: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-14 lg:py-16 border-b border-border">
      <div className="lg:col-span-4">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          [{index}] {kicker}
        </span>
      </div>
      <div className="lg:col-span-8 space-y-4">
        <h2 className="font-display font-semibold tracking-tight text-2xl lg:text-3xl">
          {title}
        </h2>
        {intro ? (
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
            {intro}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function FichaCard() {
  return (
    <div className="relative border border-border bg-card">
      <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-3">
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
          Ficha de la sesión
        </span>
        <span className="-rotate-6 border border-accent-rust px-2 py-0.5 font-mono text-[10px] tracking-[0.2em] uppercase text-accent-rust">
          Sin costo
        </span>
      </div>

      <dl>
        {ficha.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-border/60 px-5 py-3.5 transition-colors hover:bg-secondary/50"
          >
            <dt className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
              {row.label}
            </dt>
            <dd
              className={cn(
                "text-sm leading-snug",
                row.tone === "accent" && "font-mono text-accent-rust",
                row.tone === "muted" && "text-muted-foreground",
              )}
            >
              {row.value}
            </dd>
          </div>
        ))}
      </dl>

      <a
        href="#reserva"
        className="flex items-center justify-between px-5 py-3 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground transition-colors hover:text-foreground"
      >
        <span>Cupo semanal limitado</span>
        <span className="text-accent-rust">↓ Reserva abajo</span>
      </a>
    </div>
  );
}

export default function DemoResicoPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageView
        event="landing_view"
        params={{ page: "demo-resico" }}
        meta="ViewContent"
        metaParams={{ content_name: "demo-resico" }}
      />

      <header className="border-b border-border">
        <div className="container mx-auto max-w-6xl px-6 lg:px-12 flex h-16 items-center justify-between">
          <Logo />
          <span className="hidden sm:flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-rust" />
            RESICO · ISR · IVA
          </span>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-border">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply"
            style={{ backgroundImage: NOISE }}
          />

          <div className="container mx-auto max-w-6xl px-6 lg:px-12">
            <div className="grid grid-cols-1 items-center gap-y-14 py-16 lg:grid-cols-12 lg:gap-x-20 lg:py-24">
              <div className="min-w-0 space-y-8 lg:col-span-7">
                <Reveal>
                  <span className="inline-flex items-center gap-2 border border-accent-amber-muted text-accent-rust text-[10px] tracking-[0.25em] font-mono px-3 py-1 uppercase">
                    Sesión gratuita · 15 minutos
                  </span>
                </Reveal>

                <Reveal delay={0.05}>
                  <h1 className="font-display font-bold tracking-tight leading-[1.03] text-4xl sm:text-5xl xl:text-6xl">
                    {OFFER.replace(" gratis en 15 minutos", "")}{" "}
                    <span className="bg-accent-amber-muted/50 px-1 text-accent-rust [box-decoration-break:clone]">
                      gratis en 15 minutos
                    </span>
                  </h1>
                </Reveal>

                <Reveal delay={0.1}>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed tracking-wide max-w-xl">
                    En una videollamada de 15 minutos revisamos tu situación y
                    preparamos el borrador de tu declaración mensual con tus
                    propios CFDIs. Ves el resultado real — ISR, IVA, retenciones
                    — y decides. Sin compromiso.
                  </p>
                </Reveal>

                <Reveal delay={0.15}>
                  <div className="flex flex-col items-start gap-3">
                    <DemoCta
                      url={CAL_COM_DEMO_URL}
                      label="Preparar mi borrador gratis"
                    />
                    <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
                      Sin tarjeta · Sin e.firma · Sin compromiso
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center border border-border font-mono text-[10px] tracking-wider text-muted-foreground">
                      EZ
                    </span>
                    <p className="text-[11px] leading-snug text-muted-foreground">
                      Te atiende{" "}
                      <span className="text-foreground">
                        Ezequiel, fundador de Fiscalio
                      </span>
                      . No un equipo de ventas.
                    </p>
                  </div>
                </Reveal>
              </div>

              <aside className="lg:col-span-5">
                <Reveal delay={0.1}>
                  <FichaCard />
                </Reveal>
              </aside>
            </div>
          </div>

          <Ruler />
        </section>

        <div className="border-b border-border bg-foreground text-background">
          <div className="container mx-auto max-w-6xl px-6 lg:px-12 py-3">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] tracking-[0.2em] uppercase text-background/70">
              {ticker.map((item, i) => (
                <li key={item} className="flex items-center gap-5">
                  {i > 0 ? (
                    <span className="h-1 w-1 rotate-45 bg-accent-rust" />
                  ) : null}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section className="border-b border-border">
          <div className="container mx-auto max-w-6xl px-6 lg:px-12">
            <SectionHead
              index="01"
              kicker="Para quién"
              title="Esto es para ti si"
            />

            <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {profiles.map((profile, i) => (
                <Reveal
                  key={profile.title}
                  delay={i * 0.06}
                  className="flex flex-col gap-6 py-10 sm:px-8 sm:py-14 first:sm:pl-0 last:sm:pr-0"
                >
                  <span className="font-display text-4xl leading-none text-muted-foreground/30">
                    {`0${i + 1}`}
                  </span>
                  <div className="space-y-3">
                    <h3 className="font-display font-medium tracking-tight text-lg leading-snug">
                      {profile.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {profile.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-foreground text-background">
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -right-4 select-none font-display text-[18rem] font-bold leading-none text-background/[0.05]"
          >
            15
          </span>
          <div className="container relative z-10 mx-auto max-w-6xl px-6 lg:px-12 py-16 lg:py-24">
            <div className="grid grid-cols-1 gap-6 border-b border-background/15 pb-10 lg:grid-cols-12 lg:pb-14">
              <div className="lg:col-span-4">
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-background/50">
                  [02] El guion
                </span>
              </div>
              <div className="space-y-4 lg:col-span-8">
                <h2 className="font-display font-semibold tracking-tight text-2xl lg:text-3xl">
                  Qué pasa en los 15 minutos
                </h2>
                <p className="text-sm text-background/70 leading-relaxed max-w-2xl">
                  Sin presentaciones largas ni compromiso. Entramos directo a tus
                  números y salimos con un borrador.
                </p>
              </div>
            </div>

            <div className="relative mt-12 lg:mt-16">
              <div className="absolute left-0 right-0 top-3 hidden h-px bg-background/20 lg:block" />
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
                {timeline.map((step, i) => (
                  <Reveal
                    key={step.time}
                    delay={i * 0.08}
                    className="relative lg:pr-8"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "flex h-6 w-6 items-center justify-center border font-mono text-[10px]",
                          i === 2
                            ? "border-accent-amber text-accent-amber"
                            : "border-background/30 text-background/60",
                        )}
                      >
                        {`0${i + 1}`}
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-background/50">
                        {step.time}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display font-medium tracking-tight text-lg">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm text-background/70 leading-relaxed">
                      {step.desc}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="mt-12 flex justify-center lg:mt-16">
              <DemoCta
                url={CAL_COM_DEMO_URL}
                label="Agendar mis 15 minutos"
                placement="process"
                className="bg-background text-foreground hover:bg-background/90"
              />
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="container mx-auto max-w-6xl px-6 lg:px-12">
            <SectionHead
              index="03"
              kicker="Preparación"
              title="Qué necesitas preparar"
              intro="No es una asesoría: es una sesión de trabajo. Con esto es suficiente para armar tu borrador."
            />

            <div className="grid grid-cols-1 divide-y divide-border lg:grid-cols-2 lg:divide-x lg:divide-y-0">
              <div className="py-10 lg:py-14 lg:pr-12">
                <h3 className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                  Trae esto
                </h3>
                <ul className="mt-6 space-y-4">
                  {bring.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center border border-accent-rust text-accent-rust">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm leading-relaxed text-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="py-10 lg:py-14 lg:pl-12">
                <h3 className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                  Y no hace falta
                </h3>
                <ul className="mt-6 space-y-4">
                  {leave.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center border border-border text-muted-foreground">
                        <Minus className="h-3 w-3" />
                      </span>
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-muted/40">
          <div className="container mx-auto max-w-6xl px-6 lg:px-12 py-16 lg:py-24">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="space-y-5 lg:col-span-7">
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  [04] Sin compromiso
                </span>
                <p className="font-display text-2xl leading-snug tracking-tight lg:text-3xl">
                  La sesión no tiene costo. Al terminar te llevas tu borrador y
                  decides con calma.{" "}
                  <span className="text-muted-foreground">
                    No hay presión ni letra chica.
                  </span>
                </p>
              </div>

              <ul className="divide-y divide-border border-y border-border lg:col-span-5">
                {guarantees.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 py-4 text-sm"
                  >
                    <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center border border-accent-rust text-accent-rust">
                      <Check className="h-2.5 w-2.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="reserva" className="scroll-mt-16 border-b border-border">
          <div className="container mx-auto max-w-6xl px-6 lg:px-12 py-16 lg:py-24">
            <div className="border border-border bg-card">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="space-y-5 border-b border-dashed border-border p-8 lg:col-span-7 lg:border-b-0 lg:border-r lg:p-12">
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                    [05] Reserva
                  </span>
                  <h2 className="font-display font-semibold tracking-tight text-2xl lg:text-3xl">
                    Reserva tus 15 minutos
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground max-w-md">
                    Las llamadas son limitadas por semana. Si hay espacio
                    disponible, elige el horario que mejor te funcione.
                  </p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                    <span>Gratis</span>
                    <span>15 min</span>
                    <span>Google Meet</span>
                  </div>
                </div>

                <div className="flex flex-col items-start justify-center gap-4 bg-muted/40 p-8 lg:col-span-5 lg:p-12">
                  <DemoCta
                    url={CAL_COM_DEMO_URL}
                    label="Agendar mi sesión gratuita"
                    placement="final"
                    className="w-full sm:w-auto"
                  />
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
                    Sin costo · Sin compromiso
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <DemoFooter />
    </div>
  );
}
