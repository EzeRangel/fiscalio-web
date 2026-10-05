import { trackEvent, trackMeta, markTrackedOnce } from "./analytics";

const BOOKING_KEY = "fiscalio_booking_tracked";

export function trackBookingOnce(source: string, bookingUid?: string): void {
  if (markTrackedOnce(BOOKING_KEY)) return;
  trackEvent("booking", {
    page: "demo-resico",
    source,
    ...(bookingUid ? { booking_uid: bookingUid } : {}),
  });
  trackMeta("Lead", { content_name: "demo-resico" });
}
