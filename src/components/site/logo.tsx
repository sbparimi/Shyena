import { Link } from "@tanstack/react-router";

export function Logo({
  tone = "default",
  withTagline = false,
}: {
  tone?: "default" | "navy";
  withTagline?: boolean;
}) {
  return (
    <Link to="/" className="group inline-flex items-center gap-3">
      <img
        src="/shyena-icon.png"
        alt=""
        aria-hidden="true"
        width={40}
        height={40}
        className="h-10 w-auto"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-bold tracking-[0.18em] ${tone === "navy" ? "text-navy-foreground" : "text-foreground"}`}
        >
          SHYENA
        </span>
        {withTagline && (
          <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
            AI Testing &amp; Assurance
          </span>
        )}
      </span>
    </Link>
  );
}