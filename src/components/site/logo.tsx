type LogoProps = {
  size?: "header" | "footer";
};

// Keep the primary brand lockup inline so the global header never depends on
// a missing/broken raster asset. This renders directly in the browser.
export function Logo({ size = "header" }: LogoProps) {
  const mark = size === "footer" ? "h-9 w-9" : "h-8 w-8 sm:h-9 sm:w-9";
  const word = size === "footer" ? "text-[29px]" : "text-[25px] sm:text-[28px]";

  return (
    <span
      aria-label="Shyena — AI Assurance for What's Next"
      title="Shyena — AI Assurance for What's Next"
      className="inline-flex shrink-0 items-center gap-2.5 select-none leading-none"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 40 40"
        className={`${mark} shrink-0`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 2L25.5 14.5L38 20L25.5 25.5L20 38L14.5 25.5L2 20L14.5 14.5L20 2Z" fill="#17233F" />
        <path d="M20 8L22.8 17.2L32 20L22.8 22.8L20 32L17.2 22.8L8 20L17.2 17.2L20 8Z" fill="#E87512" />
      </svg>
      <span className={`font-[Sora] ${word} font-extrabold tracking-[-0.055em] text-[#17233F]`}>Shyena</span>
    </span>
  );
}

export function BrandMark({ className = "h-10 w-7" }: { className?: string }) {
  return (
    <svg aria-label="Shyena" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role="img">
      <path d="M20 2L25.5 14.5L38 20L25.5 25.5L20 38L14.5 25.5L2 20L14.5 14.5L20 2Z" fill="#17233F" />
      <path d="M20 8L22.8 17.2L32 20L22.8 22.8L20 32L17.2 22.8L8 20L17.2 17.2L20 8Z" fill="#E87512" />
    </svg>
  );
}
