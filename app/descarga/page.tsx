import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Check, ArrowLeft } from "lucide-react";
import { getPaidSession } from "@/lib/stripe";
import {
  getLatestRelease,
  findInstallerAsset,
} from "@/lib/github-release";

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
  const winHash = stripDigestPrefix(
    findInstallerAsset(release, "win")?.digest,
  );
  const macHash = stripDigestPrefix(
    findInstallerAsset(release, "mac")?.digest,
  );

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
        <section className="py-24 lg:py-40">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="text-center space-y-8 pb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-accent-rust text-accent-rust">
                  <Check className="h-8 w-8" />
                </div>
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium font-display tracking-tight leading-tight">
                  Tu pago fue confirmado. Descarga Fiscalio.
                </h1>
                <p className="text-sm text-muted-foreground tracking-wide max-w-xl mx-auto leading-relaxed">
                  Elige tu sistema operativo. Te recomendamos también descargar
                  desde el enlace que te enviamos por correo, por si necesitas
                  reinstalar más adelante.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
                <Link
                  href={`/descarga/win?session_id=${encodeURIComponent(sessionId!)}`}
                  className="block"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full h-28 rounded-none text-xs tracking-[0.15em] uppercase bg-background hover:bg-muted/40 flex-col gap-3"
                  >
                    <Download className="h-6 w-6 text-accent-rust" />
                    Descargar para Windows
                  </Button>
                </Link>
                <Link
                  href={`/descarga/mac?session_id=${encodeURIComponent(sessionId!)}`}
                  className="block"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full h-28 rounded-none text-xs tracking-[0.15em] uppercase bg-background hover:bg-muted/40 flex-col gap-3"
                  >
                    <Download className="h-6 w-6 text-accent-rust" />
                    Descargar para macOS
                  </Button>
                </Link>
              </div>

              <div className="bg-muted/30 border border-border p-8 max-w-2xl mx-auto space-y-6">
                <div className="space-y-4">
                  <h2 className="text-sm font-display font-medium tracking-tight">
                    Verificación de integridad
                  </h2>
                  {winHash || macHash ? (
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
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        En macOS:{" "}
                        <span className="font-mono">
                          shasum -a 256 Archivo.dmg
                        </span>{" "}
                        · En Windows (PowerShell):{" "}
                        <span className="font-mono">
                          Get-FileHash Archivo.exe -Algorithm SHA256
                        </span>
                      </p>
                    </div>
                  ) : (
                    <p className="text-xs text-muted-foreground">
                      Los hashes de verificación no están disponibles en este
                      momento.
                    </p>
                  )}
                </div>

                <div className="space-y-4 pt-6 border-t border-border">
                  <h2 className="text-sm font-display font-medium tracking-tight">
                    Notas de instalación
                  </h2>
                <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <li>
                    macOS: si Gatekeeper bloquea la app al abrirla, ve a{" "}
                    <span className="text-foreground">
                      Configuración → Privacidad y seguridad
                    </span>{" "}
                    y haz clic en &quot;Abrir de todas formas&quot;.
                  </li>
                  <li>
                    Windows: si SmartScreen muestra una advertencia, haz clic en
                    &quot;Más información&quot; y luego en &quot;Ejecutar de
                    todas formas&quot;.
                  </li>
                </ul>
                </div>
              </div>
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
                <Button variant="outline" className="rounded-none text-xs tracking-[0.15em] uppercase">
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
