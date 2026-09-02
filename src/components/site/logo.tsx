import { Link } from "@tanstack/react-router";

export function Logo({ tone = "default" }: { tone?: "default" | "navy" }) {
  const foreground = tone === "navy" ? "#ffffff" : "currentColor";
  const muted = tone === "navy" ? "#e5e7eb" : "#9ca3af";

  return (
    <Link to="/" aria-label="Shyena home" className="inline-flex items-center">
      <svg width="210" height="58" viewBox="0 0 368 102" role="img" aria-labelledby="shyena-logo-title shyena-logo-desc" className="h-[58px] w-auto" data-brand="shyena-wordmark-v4">
        <title id="shyena-logo-title">SHYENA</title>
        <desc id="shyena-logo-desc">SHYENA — Understand. Test. Defend.</desc>
        <defs>
          <linearGradient id="shyenaFalcon" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f59804" />
            <stop offset="0.48" stopColor="#a855f7" />
            <stop offset="1" stopColor="#6d28d9" />
          </linearGradient>
        </defs>
        <g transform="translate(5 8) scale(.92)">
          <path fill="url(#shyenaFalcon)" d="M14 45c9-21 23-34 43-37 11-2 20 1 27 8-8-1-14 1-19 6 10-1 18 1 25 7-13-1-24 1-33 7-7 5-14 12-20 21-8 11-17 16-28 18 6-9 9-18 5-30z"/>
          <path fill="#8b5cf6" d="M42 52c8-9 16-15 25-19-4 12-2 23 7 34-10-3-18-8-24-15-3 9-8 16-16 21 3-8 4-15 8-21z"/>
          <path fill="#7c3aed" d="M25 66c9-7 16-15 20-24 2 13 7 22 16 30-13-1-25-3-36-6z"/>
          <path fill="#f59804" d="M60 13c10-3 19-1 27 3l-8 7c-6-5-12-7-19-10z"/>
        </g>
        <text x="116" y="48" fill={foreground} fontFamily="Arial, Helvetica, sans-serif" fontSize="31" fontWeight="700" letterSpacing="8">SHYENA</text>
        <g aria-label="Understand. Test. Defend.">
          <text x="117" y="71" fill="#7c3aed" fontFamily="Arial, Helvetica, sans-serif" fontSize="10.5" fontWeight="800" letterSpacing="1.8" className="shyena-tagline-word shyena-tagline-word-1">UNDERSTAND.</text>
          <text x="230" y="71" fill="#f59804" fontFamily="Arial, Helvetica, sans-serif" fontSize="10.5" fontWeight="800" letterSpacing="1.8" className="shyena-tagline-word shyena-tagline-word-2">TEST.</text>
          <text x="274" y="71" fill="#a855f7" fontFamily="Arial, Helvetica, sans-serif" fontSize="10.5" fontWeight="800" letterSpacing="1.8" className="shyena-tagline-word shyena-tagline-word-3">DEFEND.</text>
        </g>
      </svg>
    </Link>
  );
}
