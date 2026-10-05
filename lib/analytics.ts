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

const CAMPAIGN_STORAGE_KEY = "fiscalio_campaign_params";

const trackedKeys = new Set<string>();

function readCampaignParams(search: string): EventParams {
  const source = new URLSearchParams(search);
  const params: EventParams = {};
  for (const name of CAMPAIGN_PARAMS) {
    const value = source.get(name);
    if (value) params[name] = value;
  }
  return params;
}

export function rememberCampaignParams(): void {
  if (typeof window === "undefined") return;
  const params = readCampaignParams(window.location.search);
  if (Object.keys(params).length === 0) return;
  try {
    sessionStorage.setItem(CAMPAIGN_STORAGE_KEY, JSON.stringify(params));
  } catch {
    return;
  }
}

export function getCampaignParams(): EventParams {
  if (typeof window === "undefined") return {};
  const fromUrl = readCampaignParams(window.location.search);
  if (Object.keys(fromUrl).length > 0) return fromUrl;
  try {
    const stored = sessionStorage.getItem(CAMPAIGN_STORAGE_KEY);
    if (stored) return JSON.parse(stored) as EventParams;
  } catch {
    return {};
  }
  return {};
}

export function markTrackedOnce(key: string, persistent = false): boolean {
  if (typeof window === "undefined") return true;
  if (trackedKeys.has(key)) return true;
  trackedKeys.add(key);
  try {
    const store = persistent ? localStorage : sessionStorage;
    if (store.getItem(key)) return true;
    store.setItem(key, "1");
  } catch {
    return false;
  }
  return false;
}

export function trackEvent(name: string, params?: EventParams) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, { ...getCampaignParams(), ...params });
}

export function trackMeta(name: string, params?: EventParams) {
  if (typeof window === "undefined") return;
  if (typeof window.fbq === "function") window.fbq("track", name, params);
}
