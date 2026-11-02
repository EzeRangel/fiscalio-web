"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { resolveWaitlistSource } from "@/lib/waitlist-source";

function CtaLink({ source }: { source: string }) {
  return (
    <Link href={`?dialog=open&source=${source}`} scroll={false}>
      <Button
        size="lg"
        className="w-full text-xs tracking-[0.15em] h-14 rounded-none uppercase mb-1"
      >
        Unirme a la beta privada
        <ArrowRight className="h-3.5 w-3.5 ml-3" />
      </Button>
    </Link>
  );
}

function CtaWithSource() {
  const params = useSearchParams();

  return (
    <CtaLink
      source={resolveWaitlistSource(params.get("source") ?? undefined)}
    />
  );
}

export function WaitlistCta() {
  return (
    <Suspense fallback={<CtaLink source="calculator" />}>
      <CtaWithSource />
    </Suspense>
  );
}
