import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Calculator, ShieldCheck, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";

const RATE = 0.05;

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Shyena Pricing | Enterprise AI Agent Assurance" },
      { name: "description", content: "Start with a focused AI assurance pilot and build the evidence needed to scale across your AI estate." },
      { name: "keywords", content: "AI agent assurance pricing, enterprise AI testing pricing, Cognigy testing pricing, AI agent evaluation pricing, AI security testing pricing" },
      { property: "og:title", content: "Shyena Pricing | Enterprise AI Agent Assurance" },
      { property: "og:description", content: "Start with a focused pilot. Prove the assurance model. Scale with confidence." },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/pricing" }],
  }),
  component: PricingPage,
});

const PLATFORM_FEATURES = [
  "Nexus — understand agent systems",
  "Vera — test and evaluate agents",
  "Chakra — defend against adversarial behavior",
  "CI/CD and API access",
  "Unlimited platform users",
  "Unlimited agents and projects, subject to contracted usage and technical limits",
];

const FAQS = [
  ["What does €0.05 mean?", "Each generated CIS test journey, Vera AI conversation and Chakra security interaction is measured as one transparent usage unit."],
  ["Are Nexus, Vera and Chakra separate subscriptions?", "No. All three capabilities are available within the same Shyena platform. Usage is metered by activity, not by module subscription."],
  ["What is a billable CIS test journey?", "A generated executable test journey. Source-flow analysis itself is not presented as a separate charge."],
  ["What is a billable conversation?", "A multi-turn AI agent interaction executed through Vera. The conversation is the usage unit, regardless of the number of turns."],
  ["How is Chakra security usage measured?", "Security testing is measured by security interactions executed through Chakra's adversarial testing capability."],
  ["Can developers debug and rerun tests?", "Yes. Development, debugging, validation and assessment executions use the same transparent usage model."],
  ["Is onboarding included?", "Yes. Every customer receives a free one-week onboarding period with a dedicated Shyena engineer."],
  ["Are there hidden per-user or per-agent charges?", "No separate per-user or per-agent licence is used in the public model. Executed or generated usage is the metered component."],
  ["Can enterprise customers negotiate the rate?", "Yes. Enterprise customers can negotiate committed volume and tailored commercial terms directly."],
];

function formatEuro(value: number) {
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function PricingCalculator() {
  const [cis, setCis] = useState("100");
  const [vera, setVera] = useState("1000");
  const [chakra, setChakra] = useState("250");

  const update = (value: string, setter: (v: string) => void) => {
    if (value === "" || /^\d+$/.test(value)) setter(value.replace(/^0+(?=\d)/, ""));
  };

  const estimate = useMemo(() => ({
    cis: Number(cis || 0) * RATE,
    vera: Number(vera || 0) * RATE,
    chakra: Number(chakra || 0) * RATE,
  }), [cis, vera, chakra]);

  const total = estimate.cis + estimate.vera + estimate.chakra;

  const Field = ({ id, label, value, setter, accent }: { id: string; label: string; value: string; setter: (v: string) => void; accent: string }) => (
    <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 transition duration-200 hover:border-white/20 hover:bg-white/[0.065]">
      <div className="flex items-center justify-between gap-3">
        <label htmlFor={id} className="text-sm font-semibold text-white">{label}</label>
        <span className={`h-2 w-2 rounded-full ${accent}`} />
      </div>
      <div className="relative mt-4">
        <input id={id} value={value} inputMode="numeric" aria-label={`${label} quantity`} onChange={(e) => update(e.target.value, setter)} onBlur={() => value === "" && setter("0")} className="w-full rounded-xl border border-white/10 bg-[#0b0920] px-4 py-3.5 text-lg font-semibold text-white outline-none transition placeholder:text-white/30 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20" />
      </div>
      <p className="mt-2 text-xs text-white/40">€0.05 each · Whole numbers only</p>
    </div>
  );

  return (
    <section id="usage-calculator" className="relative overflow-hidden border-y border-slate-200 bg-[#0b0920] text-white">
      <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-400/10 text-orange-300 ring-1 ring-orange-300/10"><Calculator className="h-5 w-5" /></div>
            <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">Usage calculator</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Estimate your variable usage.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/55">Enter the activity you expect to generate and execute. The calculator applies the public €0.05 usage rates so your team can estimate cost before speaking with sales.</p>
            <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.035] p-5"><div className="flex gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" /><p className="text-sm leading-6 text-white/60"><span className="font-semibold text-white">Three independent usage units.</span> CIS generation, Vera conversations and Chakra security interactions are measured separately. One unit is never converted into another.</p></div></div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-5 shadow-[0_35px_90px_-35px_rgba(0,0,0,0.7)] sm:p-7">
            <div className="grid gap-4 md:grid-cols-3">
              <Field id="cis" label="CIS test journeys" value={cis} setter={setCis} accent="bg-orange-400" />
              <Field id="vera" label="Vera conversations" value={vera} setter={setVera} accent="bg-amber-400" />
              <Field id="chakra" label="Chakra security interactions" value={chakra} setter={setChakra} accent="bg-orange-300" />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[["CIS", estimate.cis], ["Vera", estimate.vera], ["Chakra", estimate.chakra]].map(([name, value]) => (
                <div key={name as string} className="rounded-2xl border border-white/10 bg-[#0b0920] px-5 py-4"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">{name as string}</p><p className="mt-2 text-xl font-semibold text-white">{formatEuro(value as number)}</p></div>
              ))}
            </div>
            <div className="mt-4 overflow-hidden rounded-2xl border border-orange-300/20 bg-[linear-gradient(135deg,rgba(234,88,12,0.12),rgba(11,9,32,0.96)_58%)] p-6 sm:p-7">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-200/70">Estimated monthly usage</p><p className="mt-2 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">{formatEuro(total)}</p></div>
                <Button asChild size="lg"><Link to="/contact">Discuss this estimate <ArrowRight className="h-4 w-4" /></Link></Button>
              </div>
              <p className="mt-5 text-xs leading-5 text-white/40">Usage estimate only. VAT and separately scoped professional services are excluded.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#edf6ff]">
        <div className="pointer-events-none absolute -right-32 -top-40 h-[560px] w-[560px] rounded-full bg-orange-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 left-1/4 h-[420px] w-[420px] rounded-full bg-amber-100/60 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-orange-700 shadow-sm"><Sparkles className="h-3.5 w-3.5" /> Pricing</div>
            <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-[72px]">Simple. Transparent.<br /><span className="text-orange-700">Outcome-driven.</span></h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">Start with a focused pilot, establish measurable assurance and build the evidence needed to scale across your AI estate.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400"><span>Public list prices</span><span>Excluding VAT</span><span>Enterprise volume terms negotiable</span></div>
          </div>
        </div>
      </section>

      <PricingCalculator />

      <section className="relative overflow-hidden bg-[#f6f8fb] px-6 py-20 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-orange-100/50 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-700">Platform access</p>
              <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-5xl">One assurance platform. Every core capability.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">Nexus, Vera and Chakra are available as one platform. Teams can build workflows, share access and connect assurance activity without managing separate module subscriptions.</p>
              <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-500 shadow-sm"><ShieldCheck className="h-4 w-4 text-orange-600" /> Evidence stays connected</div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {PLATFORM_FEATURES.map((feature, index) => <div key={feature} className="group flex min-h-[94px] items-start gap-4 rounded-[20px] border border-slate-200 bg-white p-5 shadow-[0_12px_35px_-28px_rgba(15,23,42,0.35)] transition duration-200 hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-[0_18px_42px_-28px_rgba(234,88,12,0.25)]"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-xs font-bold text-orange-700">{String(index + 1).padStart(2, "0")}</span><span className="pt-1 text-sm font-semibold leading-6 text-slate-700">{feature}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-slate-200 bg-[#edf6ff] px-6 py-20 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-700">Included onboarding</p><h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-5xl">Start with a working assurance baseline.</h2><p className="mt-6 text-lg leading-8 text-slate-600">Every customer gets a free one-week onboarding period with a dedicated Shyena engineer. Connect the agent, configure the critical journeys and validate the reporting path before broader rollout.</p></div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[["01", "Connect", "Establish the agent connection, execution environment and access."], ["02", "Configure", "Define critical journeys, evaluation rules and security scope."], ["03", "Validate", "Run the first assurance workflow and confirm the evidence and reporting path."]].map(([number, title, text]) => <div key={number} className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_16px_42px_-30px_rgba(15,23,42,0.4)] transition duration-200 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_24px_50px_-30px_rgba(234,88,12,0.25)] sm:p-7"><div className="absolute inset-x-0 top-0 h-1 bg-orange-500 opacity-70" /><span className="font-mono text-xs font-semibold tracking-[0.08em] text-orange-700">{number}</span><h3 className="mt-8 text-xl font-semibold tracking-[-0.02em] text-slate-950">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p></div>)}
            </div>
          </div>
          <div className="mt-9 rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 text-sm leading-6 text-slate-600">Extended implementation, training, custom development, bespoke framework adapters and other professional services are separately scoped and priced.</div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl"><div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-700">Pricing questions</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Clear answers for procurement and engineering.</h2></div><div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-slate-50 px-6">{FAQS.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold text-slate-900 marker:hidden [&::-webkit-details-marker]:hidden"><span>{question}</span><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-500 transition group-open:rotate-45 group-open:border-orange-300 group-open:text-orange-700">+</span></summary><p className="max-w-3xl pr-12 pt-3 text-sm leading-6 text-slate-600">{answer}</p></details>)}</div></div>
      </section>

      <CtaBand />
    </main>
  );
}
