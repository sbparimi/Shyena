import { Link } from "@tanstack/react-router";

export function Logo({ tone = "default" }: { tone?: "default" | "navy" }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-2.5">
      <img
        src="/shyena-icon.png"
        alt=""
        aria-hidden="true"
        width={24}
        height={36}
        className="h-9 w-auto"
      />
      <span
        className={`font-display text-lg font-bold tracking-tight ${tone === "navy" ? "text-navy-foreground" : "text-foreground"}`}
      >
        SHYENA
      </span>
    </Link>
  );
}