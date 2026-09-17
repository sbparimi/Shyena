import { Link, useLocation } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

export type ExecutivePageProps = {
  eyebrow: string;
  title: string;
  accent?: string;
  intro: string;
  primaryLabel: string;
  primaryHref?: "/contact" | "/nexus" | "/vera" | "/chakra";
  secondaryLabel?: string;
  secondaryHref?: string;
  audience?: string;
  capabilities: { title: string; body: string }[];
  workflow: { step: string; title: string; body: string }[];
  outcomeTitle: string;
  outcomes: { title: string; body: string }[];
  proofTitle?: string;
  proof?: { label: string; value: string }[];
  finalTitle: string;
  finalBody: string;
};

export function ExecutivePage({ eyebrow, title, accent, intro, primaryLabel, primaryHref = "/contact", secondaryLabel = "See how it works", secondaryHref = "#how-it-works", audience = "AI agents · Enterprise applications · Conversational AI · Autonomous testing", capabilities, workflow, outcomeTitle, outcomes, proofTitle, proof, finalTitle, finalBody }: ExecutivePageProps) {
  const location = useLocation();
  const canonical = `https://www.shyena.eu${location.pathname || "/"}`;

  return (
    <>
      <link rel="canonical" href={canonical} />
      <main className="overflow-x-hidden bg-white text-[#17213f]">
        <section className="border-b border-[#e6e8ed] bg-white">
          <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:gap-14">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[.16em] text-[#e87512]">{eyebrow}</div>
                <h1 className="mt-4 max-w-3xl font-[Sora] text-[clamp(2.8rem,6vw,5rem)] font-extrabold leading-[.96] tracking-[-.055em] text-[#17213f]">{title} {accent && <span className="text-[#e87512]">{accent}</span>}</h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#69707d]">{intro}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link to={primaryHref} className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#ff5a0a] px-5 text-sm font-semibold text-white transition hover:bg-[#e94f04]">{primaryLabel}<ArrowRight className="h-4 w-4" /></Link>
                  <a href={secondaryHref} className="inline-flex h-11 items-center gap-2 rounded-lg border border-[#d8dce3] bg-white px-5 text-sm font-semibold text-[#17213f] transition hover:border-[#17213f]">{secondaryLabel}<ArrowRight className="h-4 w-4" /></a>
                </div>
                <div className="mt-7 border-t border-[#e6e8ed] pt-4 text-xs font-medium text-[#7a8290]">{audience}</div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-[#e0e3e8] bg-[#fafbfc] shadow-[0_30px_80px_-55px_rgba(23,33,63,.45)]">
                <div className="flex items-center gap-2 border-b border-[#e7e9ed] bg-white px-5 py-3"><span className="h-2 w-2 rounded-full bg-[#ff5a0a]" /><span className="font-mono text-[10px] uppercase tracking-[.15em] text-[#7a8290]">Shyena · assurance workspace</span></div>
                <div className="p-5 sm:p-7">
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">{capabilities.slice(0, 3).map((item, index) => <div key={item.title} className="rounded-lg border border-[#e1e4e9] bg-white p-4 text-center"><div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0e7] font-mono text-xs font-bold text-[#ff5a0a]">0{index + 1}</div><div className="mt-3 text-xs font-bold text-[#17213f] sm:text-sm">{item.title}</div></div>)}</div>
                  <div className="my-4 flex justify-center"><ArrowRight className="h-5 w-5 rotate-90 text-[#ff5a0a]" /></div>
                  <div className="rounded-lg border border-[#f4cdb7] bg-[#fff5ee] px-4 py-4 text-center"><div className="text-[10px] font-bold uppercase tracking-[.15em] text-[#e87512]">Outcome</div><div className="mt-2 text-lg font-extrabold text-[#17213f] sm:text-xl">Evidence-backed release decision</div></div>
                </div>
                <div className="flex items-center gap-2 border-t border-[#e7e9ed] bg-white px-5 py-4 text-xs text-[#69707d]"><CheckCircle2 className="h-4 w-4 text-[#ff5a0a]" />Evidence remains linked to execution.</div>
              </div>
            </div>
          </div>
        </section>

        {proof && proof.length > 0 && <section className="border-b border-[#e6e8ed] bg-[#fafbfc]"><div className="mx-auto max-w-[1280px] px-5 py-10 sm:px-8 lg:px-10"><div className="mb-5 text-xs font-semibold uppercase tracking-[.16em] text-[#e87512]">{proofTitle || "Built for production"}</div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{proof.map((item) => <div key={item.label} className="rounded-xl border border-[#e0e3e8] bg-white p-5"><div className="text-[10px] font-semibold uppercase tracking-[.15em] text-[#9aa1ae]">{item.label}</div><div className="mt-2 text-base font-extrabold text-[#17213f] sm:text-lg">{item.value}</div></div>)}</div></div></section>}

        <section className="bg-white"><div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="grid gap-8 border-b border-[#e6e8ed] pb-8 lg:grid-cols-[1fr_420px] lg:items-end"><div><div className="text-xs font-semibold uppercase tracking-[.16em] text-[#e87512]">Platform capabilities</div><h2 className="mt-4 max-w-4xl font-[Sora] text-[clamp(2.2rem,5vw,4.2rem)] font-extrabold leading-[.98] tracking-[-.05em] text-[#17213f]">One platform. A clear quality outcome.</h2></div><p className="max-w-md text-base leading-7 text-[#69707d]">Shyena turns system behaviour into evidence that engineering and business leaders can act on.</p></div><div className="mt-8 grid gap-3 md:grid-cols-3">{capabilities.map((item, index) => <div key={item.title} className="rounded-xl border border-[#e0e3e8] bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-32px_rgba(23,33,63,.35)] sm:p-7"><div className="text-xs font-mono font-bold text-[#e87512]">0{index + 1}</div><h3 className="mt-7 text-xl font-extrabold tracking-tight text-[#17213f] sm:text-2xl">{item.title}</h3><p className="mt-3 text-sm leading-7 text-[#69707d]">{item.body}</p></div>)}</div></div></section>

        <section id="how-it-works" className="scroll-mt-20 border-y border-[#e6e8ed] bg-[#fafbfc]"><div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]"><div><div className="text-xs font-semibold uppercase tracking-[.16em] text-[#e87512]">How it works</div><h2 className="mt-4 max-w-xl font-[Sora] text-[clamp(2.2rem,5vw,4.4rem)] font-extrabold leading-[.95] tracking-[-.05em] text-[#17213f]">From intent to proof.</h2><p className="mt-5 max-w-xl text-base leading-7 text-[#69707d]">A single flow connects understanding, execution, evidence and the final decision.</p></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{workflow.map((item) => <div key={item.step} className="rounded-xl border border-[#e0e3e8] bg-white p-6"><div className="text-xs font-mono font-bold text-[#e87512]">{item.step}</div><h3 className="mt-3 text-lg font-extrabold text-[#17213f] sm:text-xl">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[#69707d]">{item.body}</p></div>)}</div></div></div></section>

        <section className="bg-white"><div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="mb-8"><div className="text-xs font-semibold uppercase tracking-[.16em] text-[#e87512]">Business outcome</div><h2 className="mt-4 max-w-4xl font-[Sora] text-[clamp(2.2rem,5vw,4.4rem)] font-extrabold leading-[.95] tracking-[-.05em] text-[#17213f]">{outcomeTitle}</h2></div><div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">{outcomes.map((item) => <div key={item.title} className="rounded-xl border border-[#e0e3e8] bg-white p-6"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0e7] text-[#ff5a0a]"><CheckCircle2 className="h-4 w-4" /></div><h3 className="mt-5 text-lg font-extrabold text-[#17213f]">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[#69707d]">{item.body}</p></div>)}</div></div></section>

        <section className="border-t border-[#e6e8ed] bg-[#fafbfc]"><div className="mx-auto max-w-[900px] px-5 py-16 text-center sm:px-8 lg:py-20"><div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#fff0e7] text-[#ff5a0a]"><ShieldCheck className="h-5 w-5" /></div><h2 className="mx-auto mt-6 max-w-4xl font-[Sora] text-[clamp(2.4rem,5.5vw,4.8rem)] font-extrabold leading-[.94] tracking-[-.06em] text-[#17213f]">{finalTitle}</h2><p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#69707d] sm:text-lg sm:leading-8">{finalBody}</p><Link to="/contact" className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#ff5a0a] px-7 text-sm font-semibold text-white">Start a conversation <ArrowRight className="h-5 w-5" /></Link></div></section>
      </main>
    </>
  );
}
