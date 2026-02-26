import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Check,
  X,
  ArrowRight,
  Code2,
  Camera,
  Store,
  UploadIcon,
  BrainCogIcon,
  CombineIcon,
  FileCode2Icon,
  ServerOffIcon,
  ActivityIcon,
} from "lucide-react";
import { DataPreview } from "@/components/data-preview";
import { Faqs } from "@/components/faqs";
import Image from "next/image";
import { WaitlistDialog } from "@/components/waitlist-dialog";
import Link from "next/link";
import { Suspense } from "react";
import { Logo } from "@/components/logo";
import Snapshot from "../public/snapshot.png";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-mono">
      <Suspense>
        <WaitlistDialog />
      </Suspense>

      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <Logo />
            <div className="hidden md:flex items-center gap-12 text-xs tracking-wider text-muted-foreground">
              <a href="#proceso" className="hover:text-foreground">
                [01] PROCESO
              </a>
              <a href="#ventajas" className="hover:text-foreground">
                [02] VENTAJAS
              </a>
              <a href="#comparacion" className="hover:text-foreground">
                [03] COMPARAR
              </a>
              <a href="#faq" className="hover:text-foreground">
                [04] FAQ
              </a>
            </div>
            <Link href="?dialog=open">
              <Button size="sm" className="text-xs tracking-wider h-8">
                RESERVAR
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="container mx-auto">
          {/* Hero Content - Centered */}
          <div className="flex flex-col items-center text-center py-20 lg:py-32 px-6 lg:px-12 border-b border-border">
            <div className="max-w-4xl space-y-12">
              <div className="space-y-8">
                <Badge
                  variant="outline"
                  className="text-[10px] tracking-[0.2em] font-mono rounded-none px-3 py-1 border-accent-amber/30 text-accent-rust uppercase"
                >
                  50 accesos con precio fundador
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight leading-[1.1]">
                  Organiza tus facturas
                  <br />
                  <span className="text-muted-foreground">
                    sin pagar mensualidades
                  </span>
                </h1>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto tracking-wide">
                Clasifica tus CFDI automáticamente y mantén tu información
                fiscal en RESICO ordenada, sin hojas de cálculo, sin copiar
                números a mano y sin subir tus datos a la nube.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="?dialog=open">
                  <Button
                    size="lg"
                    className="text-xs tracking-[0.15em] h-12 px-8 rounded-none uppercase"
                  >
                    Reservar descuento fundador
                    <ArrowRight className="h-3.5 w-3.5 ml-3" />
                  </Button>
                </Link>
                {/* <Button
                  variant="outline"
                  size="lg"
                  className="text-xs tracking-[0.15em] h-12 px-8 rounded-none bg-transparent"
                >
                  VER DEMO
                </Button> */}
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-6xl mx-auto my-20">
            {/* Browser Chrome */}
            <div className="absolute -top-6 left-0 right-0 h-6 bg-gradient-to-b from-muted/30 to-transparent rounded-t-lg flex items-center px-3 gap-1.5 z-10">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            </div>

            {/* Screenshot Container */}
            <div className="relative rounded-lg overflow-hidden border-2 border-border shadow-2xl">
              <Image
                src={Snapshot}
                alt="Factura Inteligente - Vista de la aplicación mostrando listado de facturas organizadas por mes"
                className="w-full h-auto"
              />

              {/* Subtle overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-background/5 via-transparent to-background/5 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="bg-foreground text-background">
        <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4">
              <span className="text-[10px] tracking-[0.3em] text-background/50">
                [00] CONTEXTO
              </span>
              <h2 className="font-display text-2xl lg:text-3xl font-medium tracking-tight mt-6 leading-tight">
                No lo has resuelto porque no podías hacerlo solo
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-8">
              <p className="text-sm text-background/70 leading-relaxed tracking-wide">
                Has intentado organizarte. Creaste carpetas. Descargaste XMLs.
                Prometiste{" "}
                <span className="mx-2 px-2 py-0.5 bg-background/10 text-background">
                  "este mes sí lo organizo."
                </span>{" "}
                Pero llega la declaración y ahí estás: abriendo 47 PDFs a las
                11pm, copiando números a mano.
              </p>
              <h3 className="text-sm leading-relaxed tracking-wide">
                <strong className="px-2 py-0.5 bg-background/10 text-background font-normal">
                  El problema no es el esfuerzo. Es la falta de un sistema.
                </strong>{" "}
              </h3>
              <p className="text-sm text-background/70 leading-relaxed tracking-wide">
                Necesitas un sistema externo que clasifique por ti. Algo que vea
                "Gasolina" y sepa automáticamente que es un gasto con IVA
                acreditable. Sin ese sistema, seguirás haciendo lo mismo:
                posponer hasta que ya no puedas.
              </p>
              <Separator className="bg-background/20" />
              <p className="text-lg font-normal tracking-tight text-background">
                Y todavía no sabes si ese gasto de marzo te baja el IVA o no.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="py-16 lg:py-20 border-b border-border">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground">
                  [01] PROCESO
                </span>
              </div>
              <div className="lg:col-span-8">
                <h2 className="font-display font-medium text-2xl lg:text-3xl tracking-tight">
                  El Motor de Clasificación Automática
                </h2>
              </div>
            </div>
          </div>

          {/* Steps */}
          {[
            {
              num: "01",
              title: "Arrastras tus facturas",
              description:
                "El motor lee RFC, conceptos, montos. Todo parseado en segundos.",
              icon: UploadIcon,
            },
            {
              num: "02",
              title: "Clasificador predictivo",
              description:
                "Compara contra patrones de cuentas de ingresos o egresos. 'Internet' → Gastos operativos. Sugiere la cuenta contable correcta.",
              icon: CombineIcon,
            },
            {
              num: "03",
              title: "Memoria Adaptativa",
              description:
                "Con el uso continuo, el sistema reducirá drásticamente las correcciones manuales.",
              icon: BrainCogIcon,
            },
          ].map((step) => (
            <div
              key={step.num}
              className="py-12 lg:py-16 border-b border-border last:border-b-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-1">
                  <span className="text-3xl lg:text-4xl text-muted-foreground/30">
                    {step.num}
                  </span>
                </div>
                <div className="lg:col-span-3">
                  <div className="p-3 border border-border w-fit">
                    <step.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-lg tracking-tight font-display font-medium">
                    {step.title}
                  </h3>
                </div>
                <div className="lg:col-span-4">
                  <p className="text-sm text-muted-foreground leading-relaxed tracking-wide">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section id="ventajas" className="border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="py-16 lg:py-20 border-b border-border">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground">
                  [02] VENTAJAS
                </span>
              </div>
              <div className="lg:col-span-8">
                <h2 className="text-2xl lg:text-3xl font-medium tracking-tight font-display">
                  Por qué funciona en {new Date().getFullYear()}
                </h2>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {[
              {
                icon: FileCode2Icon,
                title: "El SAT estandarizó XMLs en 2022",
                stat: "XML",
                description:
                  "Todos los CFDIs usan el mismo formato. Eso hace posible la clasificación automática. No funcionaba antes. Funciona ahora.",
              },
              {
                icon: ActivityIcon,
                title: "Patrones específicos",
                stat: "RESICO",
                description:
                  "El sistema se adapta a tu uso. Eventualmente sabrá que 'Google Ads' es publicidad, o que 'Telmex' es servicios de Internet",
              },
              {
                icon: ServerOffIcon,
                title: "Local-Only",
                stat: "0 servidores",
                description:
                  "Tus datos nunca saldrán de tu computadora. Cero posibilidad de auditoría por 'subir XMLs a servidor X'. Cumples sin exponer información.",
              },
            ].map((benefit, index) => (
              <div
                key={benefit.title}
                className={`py-12 lg:py-20 ${index < 2 ? "lg:border-r border-border" : ""} ${index > 0 ? "lg:pl-12" : ""} ${index < 2 ? "lg:pr-12" : ""}`}
              >
                <div className="space-y-8">
                  <div className="flex items-start justify-between">
                    <div className="p-3 border border-border">
                      <benefit.icon className="h-5 w-5" />
                    </div>
                    <span className="text-2xl lg:text-3xl text-muted-foreground/50">
                      {benefit.stat}
                    </span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium tracking-tight font-display">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed tracking-wide">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparacion" className="border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="py-16 lg:py-20 border-b border-border">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground">
                  [03] COMPARACIÓN
                </span>
              </div>
              <div className="lg:col-span-8">
                <h2 className="text-2xl lg:text-3xl font-medium tracking-tight font-display">
                  Apps en la nube vs. Fiscalio
                </h2>
              </div>
            </div>
          </div>

          {/* Comparison Table Header */}
          <div className="grid grid-cols-12 gap-4 py-6 border-b border-border text-[10px] tracking-[0.2em] text-muted-foreground">
            <div className="col-span-4">CONCEPTO</div>
            <div className="col-span-4">APPS_NUBE</div>
            <div className="col-span-4">FISCALIO</div>
          </div>

          {/* Comparison Rows */}
          {[
            {
              label: "Costo mensual",
              cloud: "$300-800 MXN",
              local: "$0",
              highlight: true,
            },
            {
              label: "Costo anual",
              cloud: "$3,600-9,600 MXN",
              local: "$0",
              highlight: true,
            },
            {
              label: "Costo a 3 años",
              cloud: "$10,800-28,800 MXN",
              local: "$599 MXN",
              highlight: true,
            },
            {
              label: "Ubicación de datos",
              cloud: "Servidores externos",
              local: "Tu computadora",
            },
            {
              label: "Funciona sin internet",
              cloud: "NO",
              local: "SÍ",
              isBoolean: true,
            },
            { label: "El precio aumenta", cloud: "Cada año", local: "Nunca" },
            { label: "Dueño del software", cloud: "La empresa", local: "Tú" },
            { label: "Código fuente", cloud: "Oculto", local: "Incluido" },
          ].map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-12 gap-4 py-6 border-b border-border items-center text-sm"
            >
              <div className="col-span-4 text-muted-foreground">
                {row.label}
              </div>
              <div className="col-span-4">
                {row.isBoolean ? (
                  <X className="h-4 w-4 text-muted-foreground/50" />
                ) : (
                  <span className="text-muted-foreground">{row.cloud}</span>
                )}
              </div>
              <div className="col-span-4">
                {row.isBoolean ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <span
                    className={
                      row.highlight ? "text-accent-rust font-medium" : ""
                    }
                  >
                    {row.local}
                  </span>
                )}
              </div>
            </div>
          ))}

          {/* Summary */}
          <div className="py-12 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground">
                  AHORRO_ESTIMADO
                </span>
              </div>
              <div className="lg:col-span-8">
                <div className="text-3xl lg:text-4xl tracking-tight font-display text-accent-rust font-semibold">
                  $10,000+ MXN
                  <span className="text-muted-foreground ml-4 text-lg">
                    en 3 años
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Profiles */}
      <section className="bg-foreground text-background">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="py-16 lg:py-20 border-b border-background/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <span className="text-[10px] tracking-[0.3em] text-background/50">
                  USUARIOS
                </span>
              </div>
              <div className="lg:col-span-8">
                <h2 className="text-2xl lg:text-3xl font-medium tracking-tight font-display">
                  Quién usa Fiscalio
                </h2>
              </div>
            </div>
          </div>

          {/* Profiles */}
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {[
              {
                icon: Code2,
                title: "Freelancer/Developer",
                subtitle:
                  "Freelancer con pocos ingresos, pero cero margen de error",
                description:
                  "Emites 5-20 facturas al mes. Necesitas orden para declaraciones mensuales pero no quieres pagar por funciones empresariales.",
              },
              {
                icon: Camera,
                title: "Diseñador/Consultor Creativo",
                subtitle: "Gastos mezclados entre trabajo y uso personal",
                description:
                  "Ingresos variables por plataformas. Mezclas gastos personales y de negocio. Necesitas clasificar rápido para tus declaraciones.",
              },
              {
                icon: Store,
                title: "Negocio familiar en RESICO",
                subtitle: "Muchos proveedores, poco control",
                description:
                  "Muchas facturas de proveedores. Poca experiencia con software contable. Necesitas algo simple que funcione.",
              },
            ].map((persona, index) => (
              <div
                key={persona.title}
                className={`py-12 lg:py-20 ${index < 2 ? "lg:border-r border-background/20" : ""} ${index > 0 ? "lg:pl-12" : ""} ${index < 2 ? "lg:pr-12" : ""}`}
              >
                <div className="space-y-8">
                  <div className="p-3 border border-background/20 w-fit">
                    <persona.icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium font-display tracking-tight">
                      {persona.title}
                    </h3>
                    <p className="text-[10px] tracking-[0.2em] text-background/50">
                      {persona.subtitle.toUpperCase()}
                    </p>
                  </div>
                  <p className="text-sm text-background/70 leading-relaxed tracking-wide">
                    {persona.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="py-16 lg:py-20 border-b border-border">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground">
                  [04] FAQ
                </span>
              </div>
              <div className="lg:col-span-8">
                <h2 className="text-2xl lg:text-3xl font-medium font-display tracking-tight">
                  Preguntas frecuentes
                </h2>
              </div>
            </div>
          </div>

          <Faqs />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
            <div className="lg:col-span-8 space-y-8">
              <span className="text-[10px] tracking-[0.3em] text-muted-foreground">
                CONCLUSIÓN
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-medium font-display tracking-tight leading-tight">
                Asegura tu lugar como{" "}
                <span className="text-muted-foreground block">
                  usuario fundador
                </span>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed tracking-wide max-w-lg">
                Fiscalio lanza en Q2 2026. Los primeros 50 usuarios tendrán
                acceso anticipado y precio fundador de{" "}
                <span className="text-accent-rust font-medium">$419 MXN</span>.
                Después del lanzamiento, el precio será{" "}
                <span className="text-accent-rust font-medium">$599 MXN</span>.
                Unirte a la lista es gratis. Solo pagas si decides comprar
                cuando el producto esté listo.
              </p>
            </div>
            <div className="lg:col-span-4 space-y-6">
              <Link href="?dialog=open" scroll={false}>
                <Button
                  size="lg"
                  className="w-full text-xs tracking-[0.15em] h-14 rounded-none uppercase"
                >
                  Reservar mi descuento fundador
                  <ArrowRight className="h-3.5 w-3.5 ml-3" />
                </Button>
              </Link>
              <p className="text-[10px] text-muted-foreground tracking-wide text-center">
                Sin pago ahora. Sin compromisos. Recibes la guía RESICO gratuita
                al unirte.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
