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
          <linearGradient id="shyenaInfinity" x1="12" y1="6" x2="44" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#172554" />
            <stop offset="0.48" stopColor="#4c1d95" />
            <stop offset="0.82" stopColor="#7c3aed" />
            <stop offset="1" stopColor="#a78bfa" />
          </linearGradient>
          <linearGradient id="shyenaAccent" x1="24" y1="5" x2="32" y2="51" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#d6a84f" />
            <stop offset="1" stopColor="#b7791f" />
          </linearGradient>
        </defs>

        <path
          d="M28 5C17.8 5 11 10.4 11 18.1C11 25.1 16.4 28.3 28 28.3C39.6 28.3 45 31.2 45 38.1C45 45.7 38.2 51 28 51C17.8 51 11 45.7 11 38.1C11 31.1 16.4 28.3 28 28.3C39.6 28.3 45 25.1 45 18.1C45 10.4 38.2 5 28 5Z"
          fill="none"
          stroke="url(#shyenaInfinity)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M28 5C21.2 5 16.2 7.2 13.2 11.1"
          fill="none"
          stroke="url(#shyenaAccent)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M28 51C34.8 51 39.8 48.8 42.8 44.9"
          fill="none"
          stroke="url(#shyenaAccent)"
          strokeWidth="2.4"
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
