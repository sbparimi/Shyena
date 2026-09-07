import { Link } from "@tanstack/react-router";

type LogoProps = {
  size?: "header" | "footer";
};

const MARK_SRC = "/shyena-mark-vertical.svg?v=20260907";

export function Logo({ size = "header" }: LogoProps) {
  const markSize = size === "footer" ? "h-12 w-8" : "h-10 w-7";
  const wordmarkSize = size === "footer" ? "text-[25px]" : "text-[21px]";
  const subtitleSize = size === "footer" ? "text-[8px]" : "text-[7px]";

  return (
    <Link
      to="/"
      aria-label="Shyena home"
      className="inline-flex shrink-0 items-center gap-2.5 select-none leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5b2be0] focus-visible:ring-offset-4"
    >
      <img src={MARK_SRC} alt="" aria-hidden="true" className={`block shrink-0 object-contain ${markSize}`} />
      <span className="flex flex-col justify-center">
        <span className={`font-semibold tracking-[0.27em] text-[#0b1638] ${wordmarkSize}`}>SHYENA</span>
        <span className={`mt-1 font-medium uppercase tracking-[0.16em] text-[#64748b] ${subtitleSize}`}>Autonomous Quality Engineering</span>
      </span>
    </Link>
  );
}

export function BrandMark({ className = "h-10 w-7" }: { className?: string }) {
  return <img src={MARK_SRC} alt="" aria-hidden="true" className={`block object-contain ${className}`} />;
}
