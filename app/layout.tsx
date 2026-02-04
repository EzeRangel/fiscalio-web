import Image from "next/image";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fiscalio | Tu asistente fiscal inteligente",
  description: "Tu asistente fiscal inteligente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* Footer */}
        <footer className="border-t border-border font-mono">
          <div className="container mx-auto px-6 lg:px-12 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo.png"
                    width={16}
                    height={16}
                    alt="Logotipo de Fiscalio"
                  />
                  <span className="text-[10px] tracking-tight">FISCALIO</span>
                  <span className="text-[10px] tracking-tight text-muted-foreground">
                    © {new Date().getFullYear()} TODOS LOS DERECHOS RESERVADOS
                  </span>
                </div>
              </div>
              <div className="lg:col-span-8 text-right">
                <span className="text-[10px] tracking-tight text-muted-foreground uppercase">
                  Fiscalio no sustituye a un contador. Te ayuda a tener tu
                  información fiscal en orden.
                </span>
              </div>
            </div>
          </div>
        </footer>
        <Toaster />
      </body>
    </html>
  );
}
