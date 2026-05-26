import Image from "next/image";
import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "@/components/ui/sonner";
import { PUBLIC_GA_ID } from "@/lib/constants";
import "./globals.css";
import Link from "next/link";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title:
    "Fiscalio | Control fiscal RESICO para freelancers y pequeños negocios",
  description:
    "Fiscalio es una herramienta para freelancers y pequeños negocios en México que usan RESICO. Organiza tus CFDI, controla IVA e ingresos y evita errores fiscales antes de declarar.",
  openGraph: {
    title: "Fiscalio | Control fiscal claro para RESICO",
    description:
      "Organiza tus CFDI, controla tu IVA y mantén tus ingresos RESICO bajo control. Diseñado para freelancers y pequeños negocios en México.",
    type: "website",
    locale: "es_MX",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {process.env.NODE_ENV === "production" ? (
        <>
          <GoogleAnalytics gaId={PUBLIC_GA_ID} />
        </>
      ) : null}
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} antialiased`}
      >
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
