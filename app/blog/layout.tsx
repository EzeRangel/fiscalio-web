import { Suspense } from "react";
import { WaitlistDialog } from "@/components/waitlist-dialog";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={null}>
        <WaitlistDialog />
      </Suspense>
      {children}
    </>
  );
}
