import { Link } from "@tanstack/react-router";

export function Logo({ tone = "default" }: { tone?: "default" | "navy" }) {
  const muted = tone === "navy" ? "text-navy-muted" : "text-muted-foreground";
  const foreground = tone === "navy" ? "text-navy-foreground" : "text-foreground";

  return (
    <Link to="/" className="group inline-flex items-center gap-3" aria-label="Shyena home">
      <img
        src="/shyena-icon.png"
        alt="Shyena falcon"
        width={42}
        height={52}
        className="h-[42px] w-auto shrink-0 object-contain"
      />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-bold tracking-[0.22em] ${foreground}`}>SHYENA</span>
        <span className={`mt-1 text-[8px] font-semibold uppercase tracking-[0.08em] ${muted}`}>
          Evaluate. <span className="text-[#f59804]">Observe.</span> <span className="text-[#a855f7]">Assure.</span>
        </span>
      </span>
    </Link>
  );
}