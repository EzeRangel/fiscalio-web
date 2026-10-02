"use client";

import { useMemo, useRef, useCallback } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent, trackMeta, withCampaignParams } from "@/lib/analytics";

interface DemoCtaProps {
  url: string;
  label?: string;
  placement?: string;
}

export function DemoCta({
  url,
  label = "Preparar mi borrador gratis",
  placement = "hero",
}: DemoCtaProps) {
  const firedRef = useRef(false);
  const href = useMemo(() => withCampaignParams(url), [url]);

  const handleClick = useCallback(() => {
    trackEvent("cta_click", { placement });
    trackEvent("calendar_view", { placement });

    if (firedRef.current) return;
    firedRef.current = true;
    trackMeta("Schedule");
  }, [placement]);

  if (!url) {
    return (
      <Button
        size="lg"
        disabled
        className="rounded-none text-xs tracking-[0.15em] uppercase h-12 px-8"
      >
        <Calendar className="h-4 w-4 mr-2" />
        Próximamente
      </Button>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="inline-block"
    >
      <Button
        size="lg"
        className="rounded-none text-xs tracking-[0.15em] uppercase h-12 px-8"
      >
        <Calendar className="h-4 w-4 mr-2" />
        {label}
      </Button>
    </a>
  );
}
