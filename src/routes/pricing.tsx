import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Calculator, ShieldCheck, Sparkles, Users, Workflow } from "lucide-react";
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

const PILOT_FEATURES = [
  "One AI system or bot in scope",
  "Defined critical AI journey assessment",
  "Behavioural and conversation risk evaluation",
  "Focused security risk assessment",
  "Evidence-backed assurance report",
  "Remediation priorities and production rollout recommendation",
];

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

  const Field = ({
    id,
    label,
    value,
    setter,
    accent,
  }: {
    id: string;
    label: string;
    value: string;
    setter: (v: string) => void;
    accent: string;
  }) => (
    <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 transition duration-200 hover:border-white/20 hover:bg-white/[0.065]">
      <div className="flex items-center justify-between gap-3">
        <label htmlFor={id} className="text-sm font-semibold text-white">{label}</label>
        <span className={`h-2 w-2 rounded-full ${accent}`} />
      </div>
      <div className="relative mt-4">
        <input
          id={id}
          value={value}
          inputMode="numeric"
          aria-label={`${label} quantity`}
          onChange={(e) => update(e.target.value, setter)}
          onBlur={() => value === "" && setter("0")}
          className="w-full rounded-xl border border-white/10 bg-[#0b0920] px-4 py-3.5 text-lg font-semibold text-white outline-none transition placeholder:text-white/30 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20"
        />
      </div>
      <p className="mt-2 text-xs text-white/40">€0.05 each · Whole numbers only</p>
    </div>
  );

  return (
    <section id="usage-calculator" className="relative overflow-hidden border-y border-slate-200 bg-[#0b0920] text-white">
      <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-violet-600/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-400/10 text-violet-300 ring-1 ring-violet-300/10">
              <Calculator className="h-5 w-5" />
            </div>
            <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">Usage calculator</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Estimate your variable usage.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/55">Enter the activity you expect to generate and execute. The calculator applies the public €0.05 usage rates so your team can estimate cost before speaking with sales.</p>
            <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
              <div className="flex gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-violet-300" />
                <p className="text-sm leading-6 text-white/60"><span className="font-semibold text-white">Three independent usage units.</span> CIS generation, Vera conversations and Chakra security interactions are measured separately. One unit is never converted into another.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-5 shadow-[0_35px_90px_-35px_rgba(0,0,0,0.7)] sm:p-7">
            <div className="grid gap-4 md:grid-cols-3">
              <Field id="cis" label="CIS test journeys" value={cis} setter={setCis} accent="bg-violet-400" />
              <Field id="vera" label="Vera conversations" value={vera} setter={setVera} accent="bg-indigo-400" />
              <Field id="chakra" label="Chakra security interactions" value={chakra} setter={setChakra} accent="bg-orange-400" />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ["CIS", estimate.cis],
                ["Vera", estimate.vera],
                ["Chakra", estimate.chakra],
              ].map(([name, value]) => (
                <div key={name as string} className="rounded-2xl border border-white/10 bg-[#0b0920] px-5 py-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">{name as string}</p>
                  <p className="mt-2 text-xl font-semibold text-white">{formatEuro(value as number)}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-violet-300/20 bg-[linear-gradient(135deg,rgba(124,58,237,0.16),rgba(11,9,32,0.95)_58%)] p-6 sm:p-7">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200/60">Estimated monthly usage</p>
                  <p className="mt-2 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">{formatEuro(total)}</p>
                </div>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f6b800] px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:bg-[#e9aa00]">Discuss this estimate <ArrowRight className="h-4 w-4" /></Link>
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
        <div className="pointer-events-none absolute -right-32 -top-40 h-[560px] w-[560px] rounded-full bg-violet-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 left-1/4 h-[420px] w-[420px] rounded-full bg-orange-100/60 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-violet-700 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" /> Pricing
            </div>
            <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-[72px]">Simple. Transparent.<br /><span className="text-violet-700">Outcome-driven.</span></h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">Start with a focused pilot, establish measurable assurance and build the evidence needed to scale across your AI estate.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              <span>Public list prices</span><span>Excluding VAT</span><span>Enterprise volume terms negotiable</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">Enterprise offer</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Predictable platform pricing. Transparent expansion.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">The pilot lowers adoption risk. Annual plans create a predictable software commitment. Usage expands with the customer's AI estate.</p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <article className="relative rounded-[26px] border border-slate-200 bg-slate-50 p-7 sm:p-8">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">AI Assurance Pilot</div>
              <div className="mt-6 flex items-end gap-2"><span className="text-5xl font-semibold tracking-[-0.04em]">€7,500</span></div>
              <p className="mt-2 text-sm font-medium text-slate-500">30–60 days · one AI system</p>
              <p className="mt-6 text-sm leading-7 text-slate-600">Teams evaluating Shyena for the first time. Establish the baseline, execute representative journeys, evaluate outcomes and prove the assurance model.</p>
              <Button asChild className="mt-7 w-full"><Link to="/contact">Discuss this plan <ArrowRight className="h-4 w-4" /></Link></Button>
            </article>

            <article className="relative rounded-[26px] border-2 border-violet-500 bg-white p-7 shadow-[0_24px_70px_-35px_rgba(124,58,237,0.45)] sm:p-8">
              <span className="absolute right-6 top-6 rounded-full bg-violet-600 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white">Recommended</span>
              <div className="pr-24 text-xs font-bold uppercase tracking-[0.18em] text-violet-700">Professional</div>
              <div className="mt-6 flex items-end gap-2"><span className="text-5xl font-semibold tracking-[-0.04em]">€30K</span><span className="pb-1 text-sm text-slate-500">/ year</span></div>
              <p className="mt-2 text-sm font-medium text-slate-500">One AI system in production</p>
              <p className="mt-6 text-sm leading-7 text-slate-600">Default production plan with core assurance capabilities, dashboards and reporting for one production AI system.</p>
              <Button asChild className="mt-7 w-full"><Link to="/contact">Discuss this plan <ArrowRight className="h-4 w-4" /></Link></Button>
            </article>

            <article className="rounded-[26px] border border-slate-200 bg-[#0b0920] p-7 text-white shadow-xl sm:p-8">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange-300">Enterprise</div>
              <div className="mt-6 flex items-end gap-2"><span className="text-5xl font-semibold tracking-[-0.04em]">€60K</span><span className="pb-1 text-sm text-white/45">/ year</span></div>
              <p className="mt-2 text-sm font-medium text-white/45">Multiple teams and AI systems</p>
              <p className="mt-6 text-sm leading-7 text-white/60">Multiple AI systems and teams, higher included usage, governance, SSO, API/CI/CD integrations and priority support.</p>
              <Button asChild className="mt-7 w-full bg-[#f6b800] text-slate-950 hover:bg-[#e9aa00]"><Link to="/contact">Discuss this plan <ArrowRight className="h-4 w-4" /></Link></Button>
            </article>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            {[
              [Workflow, "Platform license", "Nexus, Vera and Chakra are capabilities within one Shyena assurance platform—not separate module subscriptions."],
              [Sparkles, "Usage expansion", "CIS journeys, Vera conversations and Chakra security interactions are metered independently at €0.05 per additional unit."],
              [Users, "Customer environment", "Cloud infrastructure, LLM/API consumption, hosting and monitoring are customer-funded and separate from the Shyena software fee."],
            ].map(([Icon, title, text]) => {
              const Component = Icon as typeof Workflow;
              return <div key={title as string} className="rounded-2xl border border-slate-200 bg-slate-50 p-6"><Component className="h-5 w-5 text-slate-900" /><h3 className="mt-5 text-base font-semibold">{title as string}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text as string}</p></div>;
            })}
          </div>
        </div>
      </section>

      <PricingCalculator />

      <section className="bg-[#f7f8fb] px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">Platform access</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Nexus + Vera + Chakra in every plan.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">Customers get the platform capabilities without separate module subscriptions. Unlimited access means the tools, workflows and user access are available; executed or generated usage is the metered component.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {PLATFORM_FEATURES.map((feature, index) => <div key={feature} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700"><Check className="h-4 w-4" /></span><span className="text-sm font-medium leading-6 text-slate-700">{feature}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Included onboarding</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Start with a dedicated engineer.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">Every customer receives a free one-week onboarding period with a dedicated Shyena engineer to establish the initial agent connection, test journeys and assurance configuration.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[["01", "Connect", "Establish the initial agent and execution setup."], ["02", "Configure", "Set up journeys, evaluation rules and security scope."], ["03", "Validate", "Run the initial assurance workflow and confirm the reporting path."]].map(([number, title, text]) => <div key={number} className="rounded-[24px] border border-slate-200 bg-slate-50 p-6"><span className="font-mono text-xs text-violet-600">{number}</span><h3 className="mt-6 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p></div>)}
            </div>
          </div>
          <p className="mt-8 max-w-4xl text-sm leading-6 text-slate-500">Extended implementation, training, custom development, bespoke framework adapters and other professional services are separately scoped and priced.</p>
        </div>
      </section>

      <section className="bg-[#0b0920] px-6 py-20 text-white lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">Enterprise pricing</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Public rate first. Negotiation at scale.</h2>
              <p className="mt-5 text-lg leading-8 text-white/55">The €0.05 rates establish the standard list-price anchor. Enterprise customers can negotiate committed volume, deployment, governance, support, data controls and other contractual requirements at contract stage.</p>
              <Button asChild className="mt-8 bg-[#f6b800] text-slate-950 hover:bg-[#e9aa00]"><Link to="/contact">Discuss enterprise volume <ArrowRight className="h-4 w-4" /></Link></Button>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 sm:p-8">
              <div className="flex items-start justify-between gap-6"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-white/35">Strategic</p><p className="mt-3 text-4xl font-semibold">€100K–€150K+</p><p className="mt-2 text-sm text-white/45">per year</p></div><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-400/10 text-orange-300"><ShieldCheck className="h-5 w-5" /></div></div>
              <p className="mt-7 text-base leading-7 text-white/60">Enterprise-wide assurance for large AI estates, with custom deployment, advanced integrations and dedicated support.</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">{["Committed volume", "Deployment", "Governance", "Support", "Data controls", "Contractual requirements"].map(item => <div key={item} className="flex items-center gap-2 text-sm text-white/55"><Check className="h-4 w-4 text-violet-300" />{item}</div>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">Pricing questions</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Clear answers for procurement and engineering.</h2></div>
          <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-slate-50 px-6">
            {FAQS.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold text-slate-900 marker:hidden [&::-webkit-details-marker]:hidden"><span>{question}</span><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-500 transition group-open:rotate-45 group-open:border-violet-300 group-open:text-violet-700">+</span></summary><p className="max-w-3xl pr-12 pt-3 text-sm leading-6 text-slate-600">{answer}</p></details>)}
          </div>
        </div>
      </section>

      <CtaBand eyebrow="Enterprise AI assurance" title="See it evaluate your own agent" description="Bring one real scenario. We'll run it against your live conversational AI agent and walk through every judged turn with you." primaryLabel="Request a Demo" primaryHref="/contact" />
    </main>
  );
}
