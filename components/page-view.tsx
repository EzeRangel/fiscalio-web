"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

interface PageViewProps {
  event: string;
  params?: Record<string, string>;
}

export function PageView({ event, params }: PageViewProps) {
  useEffect(() => {
    trackEvent(event, params);
  }, [event, params]);

  return null;
}
