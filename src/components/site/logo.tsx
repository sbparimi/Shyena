type LogoProps = {
  size?: "header" | "footer";
};

// Use the real brand asset directly. The previous lockup SVG wrapped a nested
// <image> and Logo itself returned a Link, which was then wrapped by another
// Link in the global header. That produced invalid nested anchors and could
// leave the top-left logo invisible after hydration.
const LOCKUP_SRC = "/shyena-logo-exact.webp?v=20260917";
const MARK_SRC = "/shyena-mark-vertical.svg?v=20260917";

export function Logo({ size = "header" }: LogoProps) {
  const dimensions = size === "footer"
    ? "h-[54px] w-[168px] sm:h-[60px] sm:w-[188px]"
    : "h-[50px] w-[158px] sm:h-[54px] sm:w-[170px] lg:h-[58px] lg:w-[178px]";

  return (
    <span
      aria-label="Shyena — AI Assurance for What's Next"
      title="Shyena — AI Assurance for What's Next"
      className="group inline-flex shrink-0 select-none leading-none"
    >
      <img
        src={LOCKUP_SRC}
        alt="Shyena — AI Assurance for What's Next"
        width={1440}
        height={580}
        decoding="async"
        fetchPriority="high"
        className={`block object-contain transition-transform duration-200 group-hover:scale-[1.01] ${dimensions}`}
      />
    </span>
  );
}

export function BrandMark({ className = "h-10 w-7" }: { className?: string }) {
  return <img src={MARK_SRC} alt="Shyena" width={64} height={96} decoding="async" className={`block object-contain ${className}`} />;
}
