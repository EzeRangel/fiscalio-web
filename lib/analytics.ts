type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const CAMPAIGN_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "fbclid",
  "gclid",
  "msclkid",
];

export function trackEvent(name: string, params?: EventParams) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params);
}

export function trackMeta(name: string) {
  if (typeof window === "undefined") return;
  if (typeof window.fbq === "function") window.fbq("track", name);
}

export function withCampaignParams(url: string): string {
  if (typeof window === "undefined") return url;

  const current = new URLSearchParams(window.location.search);
  const present = CAMPAIGN_PARAMS.filter((param) => current.get(param));
  if (present.length === 0) return url;

  try {
    const target = new URL(url);
    for (const param of present) {
      if (!target.searchParams.has(param)) {
        target.searchParams.set(param, current.get(param) as string);
      }
    }
    return target.toString();
  } catch {
    return url;
  }
}
