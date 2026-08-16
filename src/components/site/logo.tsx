import { Link } from "@tanstack/react-router";

export function Logo({ tone = "default" }: { tone?: "default" | "navy" }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-2.5">
      <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-elevated">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 12.5 9 17.5 20 6.5" />
        </svg>
      </span>
      <span
        className={`font-display text-lg font-bold tracking-tight ${tone === "navy" ? "text-navy-foreground" : "text-foreground"}`}
      >
        Verdikt
      </span>
    </Link>
  );
}