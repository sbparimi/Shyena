import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [
    { title: "Pricing — Shyena Autonomous Quality Engineering" },
    { name: "description", content: "Flexible Shyena engagements for pilots, enterprise deployment and strategic autonomous quality engineering programs." },
  ]}),
  component: PricingPage,
});

const plans = [
  { name: "Pilot", title: "Prove the value", body: "Start with one critical AI journey, application flow or security scenario.", items: ["Focused proof of value", "System assessment", "Test & evaluation workflow", "Evidence-backed findings"], cta: "Start a pilot" },
  { name: "Enterprise", title: "Scale assurance", body: "Connect Shyena to your engineering, delivery and observability ecosystem.", items: ["Multiple systems and journeys", "Existing automation integration", "Security and quality assurance", "Governance and release evidence"], cta: "Discuss enterprise" },
  { name: "Strategic", title: "Build the capability", body: "Establish autonomous quality engineering as an operating model across the organisation.", items: ["Named technical ownership", "Platform onboarding", "Continuous improvement", "Critical incident support options"], cta: "Talk to Shyena" },
] as const;

function PricingPage() {
  return <main className="overflow-x-hidden bg-white text-slate-950">
    <section className="border-b border-slate-300"><div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24"><div className="max-w-4xl"><div className="mb-6 border-l-4 border-[#ffb703] pl-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-600">Pricing</div><h1 className="font-[Sora] text-[clamp(2.8rem,7vw,6rem)] font-extrabold leading-[0.92] tracking-[-0.065em]">Buy the outcome.<br /><span className="text-[#a87900]">Scale when it works.</span></h1><p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">Shyena pricing is shaped around the system, assurance scope and level of support—not arbitrary test-count limits.</p></div></div></section>
    <section className="border-b border-slate-300 bg-[#f8fafc]"><div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20"><div className="grid gap-4 lg:grid-cols-3">{plans.map((plan) => <div key={plan.name} className="flex flex-col border border-slate-300 bg-white p-6 sm:p-8"><div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#a87900]">{plan.name}</div><h2 className="mt-5 font-[Sora] text-2xl font-extrabold tracking-[-0.035em]">{plan.title}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{plan.body}</p><ul className="mt-7 space-y-3 border-t border-slate-300 pt-6 text-sm text-slate-700">{plan.items.map((item) => <li key={item} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#a87900]" />{item}</li>)}</ul><Link to="/contact" className="mt-8 inline-flex h-11 items-center justify-center gap-2 border border-[#ffb703] bg-[#ffb703] px-5 text-xs font-extrabold uppercase text-slate-950">{plan.cta}<ArrowRight className="h-4 w-4" /></Link></div>)}</div></div></section>
    <section className="bg-[#0b0920] text-white"><div className="mx-auto max-w-[1440px] px-5 py-14 text-center sm:px-8 sm:py-20 lg:px-10 lg:py-24"><div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ffb703]">Simple principle</div><h2 className="mx-auto mt-5 max-w-4xl font-[Sora] text-[clamp(2.3rem,5vw,4.8rem)] font-extrabold leading-[0.95] tracking-[-0.06em]">Start small. Prove it. Scale the assurance.</h2><p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">Bring one critical journey and we will define the right scope for a measurable proof of value.</p><Link to="/contact" className="mt-8 inline-flex h-12 items-center gap-2 border border-[#ffb703] bg-[#ffb703] px-7 text-sm font-extrabold uppercase text-slate-950">Discuss scope <ArrowRight className="h-5 w-5" /></Link></div></section>
  </main>;
}
