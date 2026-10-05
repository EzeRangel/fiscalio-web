"use client";

import { useEffect } from "react";
import {
  trackEvent,
  trackMeta,
  rememberCampaignParams,
} from "@/lib/analytics";

interface PageViewProps {
  event: string;
  params?: Record<string, string>;
  meta?: string;
  metaParams?: Record<string, string | number>;
}

export function PageView({ event, params, meta, metaParams }: PageViewProps) {
  useEffect(() => {
    rememberCampaignParams();
    trackEvent(event, params);
    if (meta) trackMeta(meta, metaParams);
  }, [event, params, meta, metaParams]);

  return null;
}
