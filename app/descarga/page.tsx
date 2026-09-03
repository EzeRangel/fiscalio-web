import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Download,
  Check,
  ArrowLeft,
  Monitor,
  Apple,
  Calendar,
  Terminal,
  Cpu,
} from "lucide-react";
import { getPaidSession } from "@/lib/stripe";
import { getLatestRelease, findInstallerAsset } from "@/lib/github-release";
import { CAL_COM_BOOKING_URL } from "@/lib/constants";
import { Logo } from "@/components/logo";
import { Navigation } from "@/components/navigation";

interface DescargaPageProps {
  searchParams: Promise<{ session_id?: string }>;
}

function stripDigestPrefix(digest: string | undefined): string | undefined {
  return digest?.replace("sha256:", "");
}

export default async function DescargaPage({
  searchParams,
}: DescargaPageProps) {
  const { session_id: sessionId } = await searchParams;
  const [session, release] = await Promise.all([
    getPaidSession(sessionId),
    getLatestRelease(),
  ]);
  const valid = Boolean(session);
  const winHash = stripDigestPrefix(findInstallerAsset(release, "win")?.digest);
  const macHash = stripDigestPrefix(findInstallerAsset(release, "mac")?.digest);
  const macArmHash = stripDigestPrefix(
    findInstallerAsset(release, "mac-arm64")?.digest,
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {valid ? (
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl mx-auto space-y-16">
              {/* Hero */}
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-accent-rust text-accent-rust">
                  <Check className="h-8 w-8" />
                </div>
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium font-display tracking-tight leading-tight">
                  Tu pago fue confirmado.
                </h1>
                <p className="text-sm text-muted-foreground tracking-wide max-w-lg mx-auto leading-relaxed">
                  Elige tu sistema operativo para descargar Fiscalio. También
                  puedes reutilizar el enlace que te enviamos por correo.
                </p>
              </div>

              {/* Download Cards */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Windows */}
                <div className="border border-border bg-card p-8 space-y-6 transition-colors hover:border-foreground/20">
                  <div className="space-y-3">
                    <Monitor className="h-8 w-8 text-foreground" />
                    <h2 className="text-lg font-display font-medium tracking-tight">
                      Windows
                    </h2>
                  </div>
                  <a
                    download
                    className="inline-block w-full"
                    href={`/descarga/win?session_id=${encodeURIComponent(sessionId!)}`}
                  >
                    <Button className="w-full rounded-none text-xs tracking-[0.15em] uppercase">
                      <Download className="h-4 w-4 mr-2" />
                      Descargar
                    </Button>
                  </a>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    Si SmartScreen muestra una advertencia, haz clic en
                    &quot;Más información&quot; y luego en &quot;Ejecutar de
                    todas formas&quot;.
                  </p>
                </div>

                {/* macOS */}
                <div className="border border-border bg-card p-8 space-y-6 transition-colors hover:border-foreground/20">
                  <div className="space-y-3">
                    <Apple className="h-8 w-8 text-foreground" />
                    <h2 className="text-lg font-display font-medium tracking-tight">
                      macOS Intel
                    </h2>
                  </div>
                  <a
                    download
                    className="inline-block w-full"
                    href={`/descarga/mac?session_id=${encodeURIComponent(sessionId!)}`}
                  >
                    <Button className="w-full rounded-none text-xs tracking-[0.15em] uppercase">
                      <Download className="h-4 w-4 mr-2" />
                      Descargar
                    </Button>
                  </a>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    Si Gatekeeper bloquea la app, ve a{" "}
                    <span className="text-foreground">
                      Configuración → Privacidad y seguridad
                    </span>{" "}
                    y haz clic en &quot;Abrir de todas formas&quot;.
                  </p>
                </div>

                {/* macOS Apple Silicon */}
                <div className="border border-border bg-card p-8 space-y-6 transition-colors hover:border-foreground/20">
                  <div className="space-y-3">
                    <Cpu className="h-8 w-8 text-foreground" />
                    <h2 className="text-lg font-display font-medium tracking-tight">
                      macOS Apple Silicon
                    </h2>
                  </div>
                  <a
                    download
                    className="inline-block w-full"
                    href={`/descarga/mac-arm64?session_id=${encodeURIComponent(sessionId!)}`}
                  >
                    <Button className="w-full rounded-none text-xs tracking-[0.15em] uppercase">
                      <Download className="h-4 w-4 mr-2" />
                      Descargar
                    </Button>
                  </a>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    Para Macs con chip M1, M2, M3 o M4. Si Gatekeeper bloquea la
                    app, ve a{" "}
                    <span className="text-foreground">
                      Configuración → Privacidad y seguridad
                    </span>{" "}
                    y haz clic en &quot;Abrir de todas formas&quot;.
                  </p>
                </div>

                {/* Linux */}
                <div className="border border-border bg-muted/30 p-8 space-y-6">
                  <div className="space-y-3">
                    <Terminal className="h-8 w-8 text-muted-foreground" />
                    <h2 className="text-lg font-display font-medium tracking-tight text-muted-foreground">
                      Linux
                    </h2>
                  </div>
                  <Button
                    disabled
                    className="w-full rounded-none text-xs tracking-[0.15em] uppercase"
                  >
                    Próximamente
                  </Button>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    Estamos trabajando en una versión para Linux. Pronto estará
                    disponible.
                  </p>
                </div>
              </div>

              {CAL_COM_BOOKING_URL && (
                <div className="bg-muted/30 border border-border p-8 lg:p-10 max-w-3xl mx-auto space-y-8 w-full">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="flex items-center justify-center w-12 h-12 flex-shrink-0 border-2 border-accent-rust text-accent-rust">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div className="space-y-3 flex-1">
                      <h2 className="text-xl lg:text-2xl font-display font-medium tracking-tight">
                        Antes de usarla a fondo, configuremos todo juntos en 30
                        min
                      </h2>
                      <p className="text-sm text-muted-foreground tracking-wide leading-relaxed">
                        Esta sesión 1 a 1 ya está incluida en tu acceso. Nos
                        conectamos por Google Meet, configuramos la app,
                        organizamos tus XMLs del SAT y dejamos listo tu cálculo
                        del mes. Si durante o después de la sesión sientes que
                        Fiscalio no es para ti, te devuelvo el 100% de tu
                        dinero.
                      </p>
                    </div>
                  </div>
                  <a
                    href={CAL_COM_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full sm:w-auto"
                  >
                    <Button
                      size="lg"
                      className="w-full sm:w-auto rounded-none text-xs tracking-[0.15em] uppercase"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Agendar mi sesión (30 min)
                    </Button>
                  </a>
                </div>
              )}

              {/* Hash Verification */}
              {(winHash || macHash || macArmHash) && (
                <div className="bg-muted/30 border border-border p-8 max-w-3xl mx-auto space-y-4">
                  <h2 className="text-sm font-display font-medium tracking-tight">
                    Verificación de integridad
                  </h2>
                  <div className="space-y-3">
                    {winHash && (
                      <p className="text-xs text-muted-foreground leading-relaxed break-all">
                        <span className="text-foreground font-medium">
                          Windows SHA-256:{" "}
                        </span>
                        <span className="font-mono">{winHash}</span>
                      </p>
                    )}
                    {macHash && (
                      <p className="text-xs text-muted-foreground leading-relaxed break-all">
                        <span className="text-foreground font-medium">
                          macOS Intel SHA-256:{" "}
                        </span>
                        <span className="font-mono">{macHash}</span>
                      </p>
                    )}
                    {macArmHash && (
                      <p className="text-xs text-muted-foreground leading-relaxed break-all">
                        <span className="text-foreground font-medium">
                          macOS Apple Silicon SHA-256:{" "}
                        </span>
                        <span className="font-mono">{macArmHash}</span>
                      </p>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    En macOS:{" "}
                    <span className="font-mono">shasum -a 256 Archivo.dmg</span>{" "}
                    · En Windows (PowerShell):{" "}
                    <span className="font-mono">
                      Get-FileHash Archivo.exe -Algorithm SHA256
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-24 lg:py-40">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-xl mx-auto text-center space-y-6">
              <Badge>PAGO_NO_VERIFICADO</Badge>
              <h1 className="text-3xl lg:text-4xl font-medium font-display tracking-tight leading-tight">
                No pudimos verificar tu acceso a la descarga
              </h1>
              <p className="text-sm text-muted-foreground tracking-wide leading-relaxed">
                Abre esta página desde el enlace que te enviamos después de tu
                compra. Si el problema persiste, escríbenos y lo resolvemos de
                inmediato.
              </p>
              <a href="mailto:ezequiel@fiscalio.app">
                <Button
                  variant="outline"
                  className="rounded-none text-xs tracking-[0.15em] uppercase"
                >
                  Contactar soporte
                </Button>
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block border border-accent-amber-muted text-accent-rust text-[10px] tracking-[0.2em] font-mono rounded-none px-3 py-1 uppercase">
      {children}
    </span>
  );
}
