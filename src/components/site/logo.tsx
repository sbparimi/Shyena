export function Logo({ tone = "default" }: { tone?: "default" | "navy" }) {
  return (
    <div aria-label="Shyena" role="img" className="inline-flex shrink-0 items-center select-none">
      <img
        src="/shyena-logo-exact.webp?v=20260906"
        alt="Shyena"
        className="block h-auto w-[220px] shrink-0 sm:w-[240px]"
      />
    </div>
  );
}
