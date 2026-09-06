type LogoProps = {
  tone?: "default" | "navy";
  size?: "header" | "footer";
};

export function Logo({ tone = "default", size = "header" }: LogoProps) {
  const width = size === "footer" ? "w-[220px] sm:w-[240px]" : "w-[180px] sm:w-[190px]";
  return (
    <LinkBrand href="/" aria-label="Shyena home">
      <img
        src="/shyena-logo-exact.webp?v=20260906"
        alt="Shyena"
        className={`block h-auto shrink-0 ${width}`}
      />
    </LinkBrand>
  );
}

function LinkBrand({ href, children, ...props }: { href: string; children: React.ReactNode; "aria-label": string }) {
  return (
    <a href={href} {...props} className="inline-flex shrink-0 items-center select-none leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5b2be0] focus-visible:ring-offset-4">
      {children}
    </a>
  );
}
