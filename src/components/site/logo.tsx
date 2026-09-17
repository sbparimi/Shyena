type LogoProps = {
  size?: "header" | "footer";
};

export function Logo({ size = "header" }: LogoProps) {
  const mark = size === "footer" ? "h-10 w-9" : "h-8 w-7 sm:h-9 sm:w-8";
  const word = size === "footer" ? "text-[29px]" : "text-[25px] sm:text-[28px]";

  return (
    <span
      aria-label="Shyena — AI Assurance for What's Next"
      title="Shyena — AI Assurance for What's Next"
      className="inline-flex shrink-0 items-center gap-2.5 select-none leading-none"
    >
      <img
        src="/shyena-mark.svg?v=20260917"
        alt=""
        aria-hidden="true"
        className={`${mark} shrink-0 object-contain`}
      />
      <span className={`font-[Sora] ${word} font-extrabold tracking-[-0.055em] text-[#0B1B3A]`}>Shyena</span>
    </span>
  );
}

export function BrandMark({ className = "h-10 w-9" }: { className?: string }) {
  return <img src="/shyena-mark.svg?v=20260917" alt="Shyena" className={`${className} object-contain`} />;
}
