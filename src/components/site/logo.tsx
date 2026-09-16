import { Link } from "@tanstack/react-router";

type LogoProps = {
  size?: "header" | "footer";
};

const LOCKUP_SRC = "/shyena-logo-lockup.svg?v=20260916";
const MARK_SRC = "/shyena-mark-vertical.svg?v=20260916";

export function Logo({ size = "header" }: LogoProps) {
  const dimensions = size === "footer"
    ? "h-[54px] w-[168px] sm:h-[60px] sm:w-[188px]"
    : "h-[46px] w-[138px] sm:h-[50px] sm:w-[156px] lg:h-[54px] lg:w-[168px]";

  return (
    <Link
      to="/"
      aria-label="Shyena — Autonomous Quality Engineering"
      title="Shyena — Autonomous Quality Engineering"
      className="group inline-flex shrink-0 items-center select-none leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5b2be0] focus-visible:ring-offset-4"
    >
      <img
        src={LOCKUP_SRC}
        alt="Shyena — Autonomous Quality Engineering"
        width={1385}
        height={540}
        decoding="async"
        fetchPriority="high"
        className={`block object-contain transition-transform duration-200 group-hover:scale-[1.015] ${dimensions}`}
      />
    </Link>
  );
}

export function BrandMark({ className = "h-10 w-7" }: { className?: string }) {
  return <img src={MARK_SRC} alt="Shyena" width={64} height={96} decoding="async" className={`block object-contain ${className}`} />;
}
