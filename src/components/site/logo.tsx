export function Logo({ tone = "default" }: { tone?: "default" | "navy" }) {
  const darkSurface = tone === "navy";

  return (
    <div
      aria-label="Shyena"
      role="img"
      className="inline-flex shrink-0 items-center gap-3 select-none"
    >
      <svg
        viewBox="0 0 168 150"
        aria-hidden="true"
        focusable="false"
        className="block h-[46px] w-[52px] shrink-0 sm:h-[50px] sm:w-[56px]"
      >
        <defs>
          <linearGradient id="shyenaFalconOrange" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffad1f" />
            <stop offset="0.55" stopColor="#f47a16" />
            <stop offset="1" stopColor="#df4e1a" />
          </linearGradient>
          <linearGradient id="shyenaFalconPurple" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#8d3ec0" />
            <stop offset="0.55" stopColor="#7133a8" />
            <stop offset="1" stopColor="#55278f" />
          </linearGradient>
        </defs>
        <rect width="168" height="150" rx="2" fill="#02030d" />
        <path
          d="M63 55L63 56L69 54L73 54L74 55L74 57L71 60L77 57L88 57L89 56L118 56L119 55L142 55L143 56L140 52L132 49L130 47L130 45L127 41L119 37L116 37L111 35L90 35L89 36L84 36L83 37L76 38L75 39L77 40L77 43L75 45L72 46Z"
          fill="url(#shyenaFalconOrange)"
        />
        <path
          d="M146 56L132 56L131 54L130 56L114 55L110 57L89 57L70 60L54 82L54 84L61 82L64 86L62 90L59 91L60 95L50 119L61 116L68 110L72 110L76 103L86 107L79 119L92 112L105 119L112 119L113 117L117 119L139 119L120 93L121 88L118 87L118 77L121 75L122 70L120 70L119 67L126 65L131 67L132 65L137 65L143 71L146 66Z"
          fill="url(#shyenaFalconPurple)"
        />
        <path
          d="M109 46C114 46 119 47 124 49C121 51 117 52 113 51C111 50 109 49 107 48Z"
          fill="#02030d"
        />
      </svg>

      <span className="flex flex-col justify-center leading-none">
        <span
          className={`text-[25px] font-bold tracking-[0.24em] sm:text-[27px] ${
            darkSurface ? "text-white" : "text-slate-950"
          }`}
        >
          SHYENA
        </span>
        <span
          className={`mt-1 text-[7px] font-semibold uppercase tracking-[0.18em] sm:text-[8px] ${
            darkSurface ? "text-white/70" : "text-slate-500"
          }`}
        >
          <span>EVALUATE.</span> <span className="text-orange-500">OBSERVE.</span>{" "}
          <span className="text-violet-600">ASSURE.</span>
        </span>
      </span>
    </div>
  );
}
