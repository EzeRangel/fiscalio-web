"use client";

import { useEffect } from "react";
import { trackEvent, trackMeta, markTrackedOnce } from "@/lib/analytics";

interface PurchaseViewProps {
  transactionId: string;
  value: number;
  currency: string;
  contentId: string;
}

export function PurchaseView({
  transactionId,
  value,
  currency,
  contentId,
}: PurchaseViewProps) {
  useEffect(() => {
    if (markTrackedOnce(`fiscalio_purchase_${transactionId}`, true)) return;
    trackEvent("purchase", {
      transaction_id: transactionId,
      value,
      currency,
      content_id: contentId,
    });
    trackMeta(
      "Purchase",
      { value, currency, content_name: "fiscalio" },
      transactionId,
    );
  }, [transactionId, value, currency, contentId]);

  return null;
}
