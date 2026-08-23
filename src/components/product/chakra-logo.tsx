/**
 * Chakra mark — a spinning discus with radiating blades, evoking the
 * Sudarshana Chakra (the self-guiding, all-seeing discus of Hindu
 * mythology). A distinct product mark for Chakra as a Shyena product,
 * not a replacement for the Shyena eagle wordmark/logo.
 */
export function ChakraLogo({ className = "h-9 w-9" }: { className?: string }) {
  const blades = 12;
  const items = Array.from({ length: blades }, (_, i) => (360 / blades) * i);

  return (
    <svg viewBox="0 0 100 100" role="img" aria-label="Chakra" className={className}>
      <defs>
        <radialGradient id="chakra-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-accent)" />
          <stop offset="100%" stopColor="var(--color-primary)" />
        </radialGradient>
        <linearGradient id="chakra-blade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--color-primary)" />
          <stop offset="100%" stopColor="var(--color-accent)" />
        </linearGradient>
      </defs>

      {items.map((deg) => (
        <path
          key={deg}
          d="M46,50 Q50,20 50,12 Q50,20 54,50 Z"
          fill="url(#chakra-blade)"
          opacity="0.92"
          transform={`rotate(${deg} 50 50)`}
        />
      ))}

      <circle cx="50" cy="50" r="21" fill="var(--color-navy)" stroke="url(#chakra-blade)" strokeWidth="2" />
      <circle cx="50" cy="50" r="10" fill="url(#chakra-core)" />
    </svg>
  );
}
