"use client";

import { useEffect } from "react";
import { trackEvent, trackMeta } from "@/lib/analytics";

const CAL_EMBED_SRC = "https://app.cal.com/embed.js";
const CAL_ORIGIN = "https://app.cal.com";

type CalQueueEntry = unknown[];

interface CalGlobal {
  (...args: unknown[]): void;
  loaded?: boolean;
  q?: CalQueueEntry[];
}

declare global {
  interface Window {
    Cal?: CalGlobal;
  }
}

let bookingTracked = false;

function trackBooking(source: string) {
  if (bookingTracked) return;
  bookingTracked = true;
  trackEvent("booking", { page: "demo-resico", source });
  trackMeta("Lead");
}

function ensureCal(): CalGlobal {
  if (window.Cal) return window.Cal;

  const cal = ((...args: unknown[]) => {
    if (!cal.loaded) {
      cal.loaded = true;
      cal.q = [];
      const script = document.createElement("script");
      script.src = CAL_EMBED_SRC;
      script.async = true;
      document.head.appendChild(script);
    }
    (cal.q = cal.q || []).push(args);
  }) as CalGlobal;

  window.Cal = cal;
  return cal;
}

export function CalEmbed() {
  useEffect(() => {
    const cal = ensureCal();
    cal("init", { origin: CAL_ORIGIN });
    cal("on", {
      action: "bookingSuccessful",
      callback: () => trackBooking("embed"),
    });

    const onMessage = (event: MessageEvent) => {
      if (typeof event.data !== "object" || event.data === null) return;
      if (!event.origin.includes("cal.com")) return;

      const data = event.data as { originator?: unknown; type?: unknown; action?: unknown };
      if (data.originator !== "CAL") return;

      const types = [data.type, data.action].filter(
        (value): value is string => typeof value === "string",
      );
      if (types.some((value) => /booking[_A-Za-z]*success/i.test(value))) {
        trackBooking("embed");
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return null;
}
