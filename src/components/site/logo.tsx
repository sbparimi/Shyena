export function Logo({ tone = "default" }: { tone?: "default" | "navy" }) {
  const darkSurface = tone === "navy";

  return (
    <div
      aria-label="Shyena"
      role="img"
      className="inline-flex shrink-0 items-center gap-3 select-none"
    >
      <svg
        viewBox="0 0 56 56"
        aria-hidden="true"
        focusable="false"
        className="block h-[46px] w-[46px] shrink-0 sm:h-[50px] sm:w-[50px]"
      >
        <defs>
          <linearGradient id="shyenaInfinityRich" x1="8" y1="8" x2="48" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#f5b83d" />
            <stop offset="0.10" stopColor="#0b1f4f" />
            <stop offset="0.34" stopColor="#063b68" />
            <stop offset="0.56" stopColor="#00bfe8" />
            <stop offset="0.76" stopColor="#2563eb" />
            <stop offset="0.91" stopColor="#5b21b6" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="shyenaGoldRich" x1="24" y1="3" x2="32" y2="53" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#ffd978" />
            <stop offset="0.45" stopColor="#f4b83f" />
            <stop offset="1" stopColor="#d88919" />
          </linearGradient>
        </defs>

        <path
          d="M28 4.5C17.2 4.5 10 10.2 10 18.2C10 25.5 16.1 28.2 28 28.2C39.9 28.2 46 31.1 46 38.2C46 46.1 38.8 51.5 28 51.5C17.2 51.5 10 46.1 10 38.2C10 31.1 16.1 28.2 28 28.2C39.9 28.2 46 25.5 46 18.2C46 10.2 38.8 4.5 28 4.5Z"
          fill="none"
          stroke="url(#shyenaInfinityRich)"
          strokeWidth="6.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M28 4.5C21.1 4.5 15.8 6.9 12.8 11.2"
          fill="none"
          stroke="url(#shyenaGoldRich)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M28 51.5C34.9 51.5 40.2 49.1 43.2 44.8"
          fill="none"
          stroke="url(#shyenaGoldRich)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      <span
        className={`shyena-wordmark text-[25px] font-bold leading-none sm:text-[27px] ${
          darkSurface ? "text-white" : "text-slate-950"
        }`}
      >
        SHYENA
      </span>
    </div>
  );
}
