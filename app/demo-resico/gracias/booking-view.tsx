"use client";

import { useEffect } from "react";
import { trackBookingOnce } from "@/lib/booking-tracking";

export function BookingView() {
  useEffect(() => {
    trackBookingOnce("gracias");
  }, []);

  return null;
}
