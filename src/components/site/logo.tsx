export function Logo({ tone = "default" }: { tone?: "default" | "navy" }) {
  const darkSurface = tone === "navy";

  return (
    <div aria-label="Shyena" role="img" className="inline-flex shrink-0 items-center gap-3 select-none">
      <svg
        viewBox="0 0 240 200"
        aria-hidden="true"
        focusable="false"
        className="block h-[46px] w-[56px] shrink-0 sm:h-[50px] sm:w-[60px]"
      >
        <defs>
          <clipPath id="shyenaEagleClip">
            <path d="M18 108 61 65 45 54 98 28 84 17 151 12c38 1 65 15 72 37 7 20-3 36-21 39-14 2-25-4-35-12l7 19 32 67-61-20-24 26-20-28-39 27 14-39-58-20Z" />
          </clipPath>
          <linearGradient id="shyenaSky" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#dbeefa" />
            <stop offset="0.55" stopColor="#f7a45b" />
            <stop offset="1" stopColor="#e56a24" />
          </linearGradient>
          <linearGradient id="shyenaMountain" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#233a61" />
            <stop offset="1" stopColor="#071a3a" />
          </linearGradient>
        </defs>
        <g clipPath="url(#shyenaEagleClip)">
          <rect width="240" height="200" fill="url(#shyenaSky)" />
          <path d="M0 170 48 116 76 139 111 77 137 116 166 69 240 158V200H0Z" fill="url(#shyenaMountain)" />
          <path d="m48 116 28 23 35-62-13 48-19 7-18-8Z" fill="#f8fbff" />
          <path d="m111 77 26 39-14-10-12 22-11-16Z" fill="#eaf4fb" />
          <path d="m166 69 74 89-49-29-17-28-14 19-13-12Z" fill="#f5f9fc" />
          <path d="M0 176 61 148 91 158 125 139 155 156 196 143 240 171V200H0Z" fill="#0b2347" opacity=".92" />
        </g>
        <path d="M18 108 61 65 45 54 98 28 84 17 151 12c38 1 65 15 72 37 7 20-3 36-21 39-14 2-25-4-35-12l7 19 32 67-61-20-24 26-20-28-39 27 14-39-58-20Z" fill="none" stroke="#0b1833" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M187 52c7 1 14 4 18 8-7 4-14 4-21 1-3-2-4-5-4-8Z" fill="#071226" />
        <circle cx="192" cy="53" r="2.2" fill="#ffb703" />
      </svg>

      <span className={`shyena-wordmark text-[25px] font-bold leading-none sm:text-[27px] ${darkSurface ? "text-white" : "text-slate-950"}`}>
        SHYENA
      </span>
    </div>
  );
}
