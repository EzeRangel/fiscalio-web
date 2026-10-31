import { trackEvent, trackMeta, markTrackedOnce } from "./analytics";

const BOOKING_KEY = "fiscalio_booking_tracked";

export function trackBookingOnce(source: string, bookingUid: string): void {
  if (markTrackedOnce(BOOKING_KEY)) return;
  trackEvent("demo_booked", {
    page: "demo-resico",
    source,
    booking_uid: bookingUid,
  });
  trackMeta("Schedule", { content_name: "demo-resico" }, bookingUid);
}
