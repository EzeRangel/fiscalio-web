import Image from "next/image";
import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";
import { PUBLIC_GA_ID, PUBLIC_META_PIXEL_ID } from "@/lib/constants";
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
  metadataBase: new URL("https://www.fiscalio.app"),
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
          {PUBLIC_META_PIXEL_ID && (
            <Script
              id="meta-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PUBLIC_META_PIXEL_ID}');
fbq('track', 'PageView');`,
              }}
            />
          )}
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
