"use client";

import { useEffect } from "react";
import { trackBookingOnce } from "@/lib/booking-tracking";

export function BookingView() {
  useEffect(() => {
    // Only a redirect from a real booking carries the uid; direct visits don't count.
    const uid = new URLSearchParams(window.location.search).get("uid");
    if (uid) trackBookingOnce("gracias", uid);
  }, []);

  return null;
}
