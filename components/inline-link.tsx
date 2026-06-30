import Link from "next/link";
import { cn } from "@/lib/utils";

interface InlineLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function InlineLink({ href, children, className }: InlineLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "relative inline-block font-sans font-semibold text-accent-rust hover:text-foreground transition-colors duration-200",
        // Editorial marker highlight style
        "border-b-2 border-accent-amber/40 hover:border-accent-amber",
        // Subtle background animation that acts like a marker highlight
        "bg-gradient-to-t from-accent-amber/20 to-accent-amber/5 bg-no-repeat bg-[length:100%_2px] bg-[position:bottom_left] hover:bg-[length:100%_100%] transition-all duration-300",
        className
      )}
    >
      {children}
    </Link>
  );
}
