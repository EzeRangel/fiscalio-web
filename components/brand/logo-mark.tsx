import { cn } from "@/lib/utils";

export const LOGO_MARK_PATH =
  "M100 0H300A100 100 0 0 1 400 100V300A100 100 0 0 1 300 400H100A100 100 0 0 1 0 300V100A100 100 0 0 1 100 0ZM48 48C76 120 76 280 48 352C120 324 280 324 352 352C324 280 324 120 352 48C280 76 120 76 48 48Z";

export function LogoMark({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={cn("shrink-0", className)}
      style={style}
      fill="currentColor"
      aria-hidden="true"
    >
      <path fillRule="evenodd" d={LOGO_MARK_PATH} />
    </svg>
  );
}

export function LogoLockup({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-[0.5em] font-mono font-medium uppercase leading-none tracking-[-0.04em]",
        className,
      )}
      style={style}
      role="img"
      aria-label="Fiscalio"
    >
      <LogoMark className="size-[1.8em]" />
      <span aria-hidden="true">FISCALIO</span>
    </span>
  );
}
