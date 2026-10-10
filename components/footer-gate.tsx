"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/footer";

const BARE_ROUTES = ["/demo-resico", "/demo-resico/gracias"];

export function FooterGate() {
  const pathname = usePathname();

  if (BARE_ROUTES.includes(pathname)) return null;

  return <Footer />;
}
