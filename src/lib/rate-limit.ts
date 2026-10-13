// Best-effort per-instance sliding-window rate limiter. Serverless/edge runtimes keep one counter
// per instance, so this blunts bursts but does not replace an edge rate-limit rule or CAPTCHA.
export function createRateLimiter(windowMs: number, maxRequests: number) {
  const hits = new Map<string, number[]>();
  return function isLimited(key: string, now = Date.now()): boolean {
    const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
    recent.push(now);
    hits.set(key, recent);
    if (hits.size > 5000) {
      for (const [k, v] of hits) if (v.every((t) => now - t >= windowMs)) hits.delete(k);
    }
    return recent.length > maxRequests;
  };
}

/**
 * Pick the client address. cf-connecting-ip is set by Cloudflare and cannot be forged by the
 * client. Otherwise use the LAST x-forwarded-for entry (appended by the nearest trusted proxy);
 * the first entry is client-controlled and must not be trusted.
 */
export function clientKey(headers: Headers): string {
  const cf = headers.get("cf-connecting-ip");
  if (cf) return cf.trim();
  const forwarded = headers.get("x-forwarded-for");
  const last = forwarded?.split(",").at(-1)?.trim();
  return last || "unknown";
}
