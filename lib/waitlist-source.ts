const SOURCE_PATTERN = /^[a-z0-9_]{1,64}$/;

export function resolveWaitlistSource(
  value: string | string[] | undefined,
  fallback = "calculator",
): string {
  const candidate = Array.isArray(value) ? value[0] : value;
  if (!candidate) return fallback;
  return SOURCE_PATTERN.test(candidate) ? candidate : fallback;
}
