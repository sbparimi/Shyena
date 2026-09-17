import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [
    { title: "Pricing | Shyena" },
    { name: "description", content: "Simple, transparent pricing for Shyena AI assurance. Choose the right engagement for your team." },
  ]}),
  component: PricingPage,
});

const plans = [
  { name: "Starter", price: "€0", cadence: "", body: "Get started with core features.", items: ["AI agent testing", "Core evaluations", "Sample datasets", "Documentation"] },
  { name: "Team", price: "€499", cadence: "/ month", body: "For growing teams.", items: ["Everything in Starter", "Advanced evaluations", "Trace evidence", "Release reporting", "Priority support"], popular: true },
  { name: "Business", price: "Custom", cadence: "", body: "For large organisations.", items: ["Everything in Team", "Enterprise integrations", "Security assurance", "Governance & controls", "Dedicated support"] },
] as const;

function PricingPage() {
  return (
    <main className="overflow-x-hidden bg-white text-[#17213f]">
      <section className="border-b border-[#e6e8ed] bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
          <div className="text-xs font-semibold uppercase tracking-[.16em] text-[#e87512]">Pricing</div>
          <h1 className="mt-4 font-[Sora] text-[clamp(2.8rem,6vw,5rem)] font-extrabold leading-[.96] tracking-[-.055em]">Simple, transparent pricing.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#69707d]">Choose the right plan for your team. Scale as your AI assurance requirements grow.</p>
          <div className="mt-7 inline-flex rounded-full border border-[#e2e5ea] bg-[#fafafa] p-1 text-xs font-semibold"><span className="rounded-full bg-[#ff5a0a] px-4 py-2 text-white">Monthly</span><span className="px-4 py-2 text-[#596273]">Annual (Save 20%)</span></div>
        </div>
      </section>

      <section className="bg-[#fafbfc]">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
          <div className="grid gap-4 lg:grid-cols-3">
            {plans.map((plan) => (
              <article key={plan.name} className={`relative flex flex-col rounded-xl border bg-white p-7 lg:p-8 ${plan.popular ? "border-[#ff5a0a] shadow-[0_25px_60px_-40px_rgba(255,90,10,.45)]" : "border-[#e0e3e8]"}`}>
                {plan.popular && <div className="absolute right-5 top-5 rounded-full bg-[#ff5a0a] px-3 py-1 text-[10px] font-bold uppercase tracking-[.08em] text-white">Most popular</div>}
                <div className="text-sm font-bold text-[#17213f]">{plan.name}</div>
                <div className="mt-7 flex items-end gap-1"><span className="font-[Sora] text-4xl font-extrabold tracking-[-.04em] text-[#17213f]">{plan.price}</span>{plan.cadence && <span className="pb-1 text-sm text-[#69707d]">{plan.cadence}</span>}</div>
                <p className="mt-3 text-sm leading-6 text-[#69707d]">{plan.body}</p>
                <ul className="mt-7 flex-1 space-y-3 border-t border-[#eceef1] pt-6">{plan.items.map((item) => <li key={item} className="flex gap-3 text-sm text-[#4f5968]"><span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#fff0e7] text-[#ff5a0a]"><Check className="h-3 w-3" /></span>{item}</li>)}</ul>
                <Link to="/contact" className={`mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold ${plan.popular ? "bg-[#ff5a0a] text-white hover:bg-[#e94f04]" : "border border-[#d8dce3] bg-white text-[#17213f] hover:border-[#17213f]"}`}>{plan.name === "Starter" ? "Get started" : plan.name === "Team" ? "Start a trial" : "Contact sales"}<ArrowRight className="h-4 w-4" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#e6e8ed] bg-white"><div className="mx-auto max-w-[900px] px-5 py-16 text-center sm:px-8 lg:py-20"><div className="text-xs font-semibold uppercase tracking-[.16em] text-[#e87512]">Need enterprise assurance?</div><h2 className="mt-4 font-[Sora] text-3xl font-extrabold tracking-[-.04em] text-[#17213f] sm:text-4xl">Bring your critical AI journeys.</h2><p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#69707d]">We can scope platform onboarding, security testing, governance and release evidence around your systems.</p><Link to="/contact" className="mt-7 inline-flex h-11 items-center gap-2 rounded-lg bg-[#ff5a0a] px-6 text-sm font-semibold text-white hover:bg-[#e94f04]">Talk to Shyena <ArrowRight className="h-4 w-4" /></Link></div></section>
    </main>
  );
}
