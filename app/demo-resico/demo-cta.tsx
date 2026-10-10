"use client";

import { useCallback } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { trackEvent, trackMeta, markTrackedOnce } from "@/lib/analytics";
import CalEmbed from "@/components/cal-embed";

interface DemoCtaProps {
  url: string;
  label?: string;
  placement?: string;
  className?: string;
}

export function DemoCta({
  url,
  label = "Preparar mi borrador gratis",
  placement = "hero",
  className,
}: DemoCtaProps) {
  const handleClick = useCallback(() => {
    trackEvent("cta_click", { placement });
    if (markTrackedOnce("fiscalio_meta_schedule")) return;
    trackMeta("Schedule", { content_name: "demo-resico" });
  }, [placement]);

  if (!url) {
    return (
      <Button
        size="lg"
        disabled
        className={cn(
          "rounded-none text-xs tracking-[0.15em] uppercase h-12 px-8",
          className,
        )}
      >
        <Calendar className="h-4 w-4 mr-2" />
        Próximamente
      </Button>
    );
  }

  return (
    <CalEmbed
      label={label}
      placement={placement}
      onInteract={handleClick}
      className={className}
    />
  );
}
