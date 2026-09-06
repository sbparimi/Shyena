export function Logo({ tone = "default" }: { tone?: "default" | "navy" }) {
  const darkSurface = tone === "navy";

  return (
    <div
      aria-label="Shyena"
      role="img"
      className="inline-flex shrink-0 items-center select-none"
    >
      <img
        src="/shyena-logo-exact.webp"
        alt="Shyena"
        className={`block h-auto w-[190px] shrink-0 sm:w-[210px] ${
          darkSurface ? "brightness-[0.92]" : ""
        }`}
      />
    </div>
  );
}
