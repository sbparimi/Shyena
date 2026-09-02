import { Link } from "@tanstack/react-router";

export function Logo({ tone = "default" }: { tone?: "default" | "navy" }) {
  const darkSurface = tone === "navy";

  return (
    <Link to="/" aria-label="Shyena home" className="inline-flex shrink-0 items-center gap-3">
      <img
        src="/favicon.png"
        alt="Shyena falcon"
        className="block h-[46px] w-[46px] shrink-0 rounded-lg object-contain sm:h-[50px] sm:w-[50px]"
        data-brand="shyena-original-falcon"
      />
      <span className="flex flex-col justify-center leading-none">
        <span className={`text-[25px] font-bold tracking-[0.24em] sm:text-[27px] ${darkSurface ? "text-white" : "text-slate-950"}`}>
          SHYENA
        </span>
        <span className={`mt-1 text-[7px] font-semibold uppercase tracking-[0.18em] sm:text-[8px] ${darkSurface ? "text-white/70" : "text-slate-500"}`}>
          <span>EVALUATE.</span> <span className="text-orange-500">OBSERVE.</span> <span className="text-violet-600">ASSURE.</span>
        </span>
      </span>
    </Link>
  );
}
