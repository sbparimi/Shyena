import { Link, useLocation } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

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
  const canonical = `https://shyena.eu${location.pathname || "/"}`;

  return (
    <>
      <link rel="canonical" href={canonical} />
      <main className="overflow-x-hidden bg-white text-slate-950">
        <section className="border-b border-slate-300 bg-white">
          <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16">
              <div>
                <div className="mb-5 border-l-4 border-[#ffb703] pl-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600 sm:mb-6 sm:pl-4 sm:text-xs sm:tracking-[0.2em]">{eyebrow}</div>
                <h1 className="max-w-4xl font-[Sora] text-[clamp(2.7rem,8vw,5.8rem)] font-extrabold leading-[0.93] tracking-[-0.06em]">{title} {accent && <span className="text-[#a87900]">{accent}</span>}</h1>
                <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:mt-7 sm:text-lg sm:leading-8">{intro}</p>
                <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
                  <Link to={primaryHref} className="inline-flex h-12 w-full items-center justify-center gap-2 border border-[#ffb703] bg-[#ffb703] px-6 text-sm font-extrabold uppercase text-slate-950 sm:w-fit sm:px-7">{primaryLabel}<ArrowRight className="h-5 w-5" /></Link>
                  <a href={secondaryHref} className="inline-flex h-12 w-full items-center justify-center gap-2 border border-slate-400 bg-white px-6 text-sm font-semibold text-slate-950 sm:w-fit sm:px-7">{secondaryLabel}</a>
                </div>
                <div className="mt-6 border-t border-slate-300 pt-4 font-mono text-[9px] font-bold uppercase leading-5 tracking-[0.14em] text-slate-400 sm:mt-7 sm:text-[10px]">{audience}</div>
              </div>
              <div className="border border-slate-300 bg-[#0b0920] p-5 sm:p-7 lg:p-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-4"><span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffb703]">Shyena assurance</span><span className="font-mono text-[10px] text-white/40">LIVE MODEL</span></div>
                <div className="py-7 sm:py-9">
                  <div className="grid grid-cols-3 gap-2 text-center sm:gap-3">{capabilities.slice(0, 3).map((item, index) => <div key={item.title} className="border border-white/10 bg-white/[0.04] px-2 py-5 sm:px-4"><div className="mx-auto flex h-9 w-9 items-center justify-center border border-[#ffb703] text-[#ffb703]"><span className="font-mono text-xs">0{index + 1}</span></div><div className="mt-3 text-xs font-bold text-white sm:text-sm">{item.title}</div></div>)}</div>
                  <div className="my-4 flex justify-center"><ArrowRight className="h-5 w-5 rotate-90 text-[#ffb703]" /></div>
                  <div className="border border-[#ffb703]/40 bg-[#ffb703]/10 px-4 py-4 text-center"><div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#ffb703]">Outcome</div><div className="mt-2 text-lg font-extrabold text-white sm:text-xl">Evidence-backed release decision</div></div>
                </div>
                <div className="flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-white/55"><CheckCircle2 className="h-4 w-4 text-[#ffb703]" />AI reasons · deterministic systems verify · evidence proves</div>
              </div>
            </div>
          </div>
        </section>

        {proof && proof.length > 0 && <section className="border-b border-slate-300 bg-[#f8fafc]"><div className="mx-auto max-w-[1440px] px-5 py-9 sm:px-8 lg:px-10 lg:py-11">{proofTitle && <div className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#a87900] sm:text-xs">{proofTitle}</div>}<div className="grid gap-px border border-slate-300 bg-slate-300 sm:grid-cols-2 lg:grid-cols-4">{proof.map((item) => <div key={item.label} className="bg-white px-5 py-5 sm:px-6"><div className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400">{item.label}</div><div className="mt-2 text-base font-extrabold text-slate-950 sm:text-lg">{item.value}</div></div>)}</div></div></section>}

        <section className="border-b border-slate-300 bg-white"><div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20"><div className="grid gap-7 border-b border-slate-300 pb-8 lg:grid-cols-[1fr_420px] lg:items-end"><div><div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#a87900] sm:text-xs">What Shyena does</div><h2 className="mt-3 max-w-4xl font-[Sora] text-[clamp(2.1rem,6vw,4.2rem)] font-extrabold leading-[0.98] tracking-[-0.05em]">One platform. A clear quality outcome.</h2></div><p className="max-w-md text-base leading-7 text-slate-600">Shyena turns system behaviour into evidence that engineering and business leaders can act on.</p></div><div className="mt-8 grid gap-px border border-slate-300 bg-slate-300 md:grid-cols-3">{capabilities.map((item, index) => <div key={item.title} className="bg-white p-6 sm:p-8"><div className="font-mono text-xs text-slate-400">0{index + 1}</div><h3 className="mt-8 text-xl font-extrabold tracking-tight sm:text-2xl">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p></div>)}</div></div></section>

        <section id="how-it-works" className="scroll-mt-20 border-b border-slate-300 bg-[#f8fafc]"><div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20"><div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]"><div><div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#a87900] sm:text-xs">How it works</div><h2 className="mt-4 max-w-xl font-[Sora] text-[clamp(2.2rem,5vw,4.4rem)] font-extrabold leading-[0.95] tracking-[-0.05em]">From intent to proof.</h2><p className="mt-5 max-w-xl text-base leading-7 text-slate-600">A single flow connects understanding, execution, evidence and the final decision.</p></div><div className="grid border-t border-slate-300 sm:grid-cols-2 lg:grid-cols-3">{workflow.map((item) => <div key={item.step} className="border-b border-slate-300 px-0 py-6 sm:px-6 sm:py-7"><div className="font-mono text-xs text-slate-400">{item.step}</div><h3 className="mt-3 text-lg font-extrabold sm:text-xl">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p></div>)}</div></div></div></section>

        <section className="border-b border-slate-300 bg-white"><div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20"><div className="mb-8"><div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#a87900] sm:text-xs">Business outcome</div><h2 className="mt-4 max-w-4xl font-[Sora] text-[clamp(2.2rem,5vw,4.4rem)] font-extrabold leading-[0.95] tracking-[-0.05em]">{outcomeTitle}</h2></div><div className="grid gap-px border border-slate-300 bg-slate-300 md:grid-cols-2 lg:grid-cols-4">{outcomes.map((item) => <div key={item.title} className="bg-white p-6 sm:p-7"><Sparkles className="h-5 w-5 text-slate-500" /><h3 className="mt-5 text-lg font-extrabold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p></div>)}</div></div></section>

        <section className="bg-[#0b0920] text-white"><div className="mx-auto max-w-[1440px] px-5 py-14 text-center sm:px-8 sm:py-20 lg:px-10 lg:py-24"><div className="mx-auto flex h-11 w-11 items-center justify-center border border-[#ffb703] text-[#ffb703]"><ShieldCheck className="h-5 w-5" /></div><h2 className="mx-auto mt-6 max-w-4xl font-[Sora] text-[clamp(2.4rem,5.5vw,5rem)] font-extrabold leading-[0.94] tracking-[-0.06em]">{finalTitle}</h2><p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">{finalBody}</p><Link to="/contact" className="mt-8 inline-flex h-12 items-center justify-center gap-2 border border-[#ffb703] bg-[#ffb703] px-7 text-sm font-extrabold uppercase text-slate-950">Start a conversation<ArrowRight className="h-5 w-5" /></Link></div></section>
      </main>
    </>
  );
}
