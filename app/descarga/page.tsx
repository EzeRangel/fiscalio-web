import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Download,
  Check,
  ArrowLeft,
  Monitor,
  Apple,
  Terminal,
} from "lucide-react";
import { getPaidSession } from "@/lib/stripe";
import { getLatestRelease, findInstallerAsset } from "@/lib/github-release";

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

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-70 transition-opacity"
            >
              <Image
                src="/logo.png"
                width={20}
                height={20}
                alt="Logotipo de Fiscalio"
              />
              <span className="text-sm tracking-tight">FISCALIO</span>
            </Link>
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs tracking-wider h-8"
              >
                <ArrowLeft className="h-3 w-3 mr-2" />
                VOLVER
              </Button>
            </Link>
          </div>
        </div>
      </nav>

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
              <div className="grid gap-6 sm:grid-cols-3">
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
                      macOS
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

              {/* Hash Verification */}
              {(winHash || macHash) && (
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
                          macOS SHA-256:{" "}
                        </span>
                        <span className="font-mono">{macHash}</span>
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
                Abre este página desde el enlace que te enviamos después de tu
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
