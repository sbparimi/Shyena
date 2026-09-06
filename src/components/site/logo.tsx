import { Link } from "@tanstack/react-router";

type LogoProps = {
  tone?: "default" | "navy";
  size?: "header" | "footer";
};

export function Logo({ size = "header" }: LogoProps) {
  const width = size === "footer" ? "w-[220px] sm:w-[240px]" : "w-[180px] sm:w-[190px]";
  return (
    <Link
      to="/"
      aria-label="Shyena home"
      className="inline-flex shrink-0 items-center select-none leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5b2be0] focus-visible:ring-offset-4"
    >
      <img
        src="/shyena-logo-exact.webp?v=20260906"
        alt="Shyena"
        className={`block h-auto shrink-0 ${width}`}
      />
    </Link>
  );
}

export function BrandMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <span className={`relative block overflow-hidden bg-white ${className}`} aria-hidden="true">
      <img
        src="/shyena-logo-exact.webp?v=20260906"
        alt=""
        className="absolute left-0 top-0 h-full w-auto max-w-none"
      />
    </span>
  );
}
