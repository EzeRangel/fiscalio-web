"use client";

import { useEffect } from "react";
import { trackEvent, trackMeta } from "@/lib/analytics";

import { getCalApi } from "@calcom/embed-react";
import { Button } from "./ui/button";
import { Calendar } from "lucide-react";

interface CalEmbedProps {
  label: string;
  onInteract?: () => void;
}

export default function CalEmbed({ label, onInteract }: CalEmbedProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "demo-fiscalio" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });

      cal("on", {
        action: "bookingSuccessfulV2",
        callback: () => trackBooking("embed"),
      });
    })();
  }, []);

  return (
    <Button
      onClick={onInteract}
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

let bookingTracked = false;

function trackBooking(source: string) {
  if (bookingTracked) return;
  bookingTracked = true;
  trackEvent("booking", { page: "demo-resico", source });
  trackMeta("Lead");
}

