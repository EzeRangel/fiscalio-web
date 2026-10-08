import Image from "next/image";

export function DemoFooter() {
  return (
    <footer className="bg-primary text-secondary">
      <div className="container mx-auto max-w-6xl px-6 lg:px-12 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1 rounded-sm">
              <Image
                src="/logo.png"
                width={20}
                height={20}
                alt="Logotipo de Fiscalio"
              />
            </div>
            <span className="font-mono text-xs tracking-tight text-white">
              FISCALIO
            </span>
          </div>
          <p className="max-w-md text-[10px] uppercase leading-relaxed tracking-wider text-secondary/60">
            Fiscalio no sustituye a un contador. Te ayuda a tener tu información
            fiscal en orden para que declarar sea un trámite.
          </p>
          <span className="font-mono text-[10px] tracking-wider text-secondary/40">
            © {new Date().getFullYear()} FISCALIO
          </span>
        </div>
      </div>
    </footer>
  );
}
