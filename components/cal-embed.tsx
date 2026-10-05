"use client";

import { useEffect } from "react";
import { trackEvent, markTrackedOnce } from "@/lib/analytics";
import { trackBookingOnce } from "@/lib/booking-tracking";

import { getCalApi } from "@calcom/embed-react";
import { Button } from "./ui/button";
import { Calendar } from "lucide-react";

interface CalEmbedProps {
  label: string;
  placement?: string;
  onInteract?: () => void;
}

let pendingPlacement = "hero";
let listenersRegistered = false;

export default function CalEmbed({
  label,
  placement = "hero",
  onInteract,
}: CalEmbedProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "demo-fiscalio" });
      if (window.Cal) {
        window.Cal.config = {
          ...window.Cal.config,
          forwardQueryParams: true,
        };
      }
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });

      if (listenersRegistered) return;
      listenersRegistered = true;

      cal("on", {
        action: "linkReady",
        callback: () => {
          if (markTrackedOnce("fiscalio_calendar_view")) return;
          trackEvent("calendar_view", { placement: pendingPlacement });
        },
      });

      cal("on", {
        action: "bookingSuccessfulV2",
        callback: (event) =>
          trackBookingOnce("embed", event.detail.data.uid),
      });
    })();
  }, []);

  const handleClick = () => {
    pendingPlacement = placement;
    onInteract?.();
  };

  return (
    <Button
      onClick={handleClick}
      data-cal-namespace="demo-fiscalio"
      data-cal-link="ezerangel/demo-fiscalio"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      size="lg"
      className="rounded-none text-xs tracking-[0.15em] uppercase h-12 px-8"
    >
      <Calendar className="h-4 w-4 mr-2" />
      {label}
    </Button>
  );
}
