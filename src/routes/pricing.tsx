import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calculator, Check, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";

const RATE = 0.05;

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Shyena Pricing | Enterprise AI Agent Assurance" },
      { name: "description", content: "Transparent usage pricing for enterprise AI agent assurance across Nexus, Vera and Chakra." },
      { name: "keywords", content: "AI agent assurance pricing, enterprise AI testing pricing, Cognigy testing pricing, AI agent evaluation pricing, AI security testing pricing" },
      { property: "og:title", content: "Shyena Pricing | Enterprise AI Agent Assurance" },
      { property: "og:description", content: "Transparent usage pricing for enterprise AI agent assurance across Nexus, Vera and Chakra." },
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

function UsageField({
  id,
  label,
  value,
  setter,
}: {
  id: string;
  label: string;
  value: string;
  setter: (value: string) => void;
}) {
  const update = (next: string) => {
    if (next === "" || /^\d+$/.test(next)) {
      setter(next.replace(/^0+(?=\d)/, ""));
    }
  };

  return (
    <div className="border-t border-slate-300 pt-5">
      <label htmlFor={id} className="text-sm font-semibold text-slate-950">
        {label}
      </label>
      <div className="mt-4 flex items-center border-b-2 border-slate-900">
        <input
          id={id}
          value={value}
          inputMode="numeric"
          aria-label={`${label} quantity`}
          onChange={(event) => update(event.target.value)}
          onBlur={() => value === "" && setter("0")}
          className="w-full bg-transparent py-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950 outline-none placeholder:text-slate-300"
        />
        <span className="pb-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">units</span>
      </div>
      <p className="mt-2 text-xs leading-5 text-slate-500">€0.05 per unit · Whole numbers only</p>
    </div>
  );
}

function PricingCalculator() {
  const [cis, setCis] = useState("100");
  const [vera, setVera] = useState("1000");
  const [chakra, setChakra] = useState("250");

  const estimate = useMemo(
    () => ({
      cis: Number(cis || 0) * RATE,
      vera: Number(vera || 0) * RATE,
      chakra: Number(chakra || 0) * RATE,
    }),
    [cis, vera, chakra],
  );

  const total = estimate.cis + estimate.vera + estimate.chakra;

  return (
    <section id="usage-calculator" className="border-y border-slate-200 bg-[#f5f6f7]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-700">02 / Usage calculator</p>
            <h2 className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
              Price the assurance work you actually run.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              No feature tiers. No per-user licence. Enter the activity your team expects to generate and execute, and the calculator applies the public €0.05 rate.
            </p>
            <div className="mt-10 flex items-start gap-4 border-t border-slate-300 pt-5">
              <Calculator className="mt-0.5 h-5 w-5 shrink-0 text-orange-700" />
              <p className="text-sm leading-6 text-slate-600">
                <span className="font-semibold text-slate-950">Three independent usage units.</span> CIS generation, Vera conversations and Chakra security interactions are measured separately.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.45)] sm:p-9 lg:p-10">
            <div className="grid gap-8 md:grid-cols-3 md:gap-6">
              <UsageField id="cis" label="CIS test journeys" value={cis} setter={setCis} />
              <UsageField id="vera" label="Vera AI conversations" value={vera} setter={setVera} />
              <UsageField id="chakra" label="Chakra security interactions" value={chakra} setter={setChakra} />
            </div>

            <div className="mt-10 border-t border-slate-200 pt-7">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["CIS", estimate.cis],
                  ["Vera", estimate.vera],
                  ["Chakra", estimate.chakra],
                ].map(([name, value]) => (
                  <div key={name as string} className="border border-slate-300 bg-white p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{name as string}</p>
                    <p className="mt-2 text-xl font-semibold tracking-[-0.02em] text-slate-950">{formatEuro(value as number)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-6 border-t-2 border-slate-950 pt-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Estimated monthly usage</p>
                <p className="mt-2 text-5xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl">{formatEuro(total)}</p>
              </div>
              <Button asChild size="lg" className="rounded-none bg-orange-600 px-6 text-white hover:bg-orange-700">
                <Link to="/contact">Discuss this estimate <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
            <p className="mt-5 text-xs leading-5 text-slate-500">Usage estimate only. VAT and separately scoped professional services are excluded.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="relative border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="grid gap-12 lg:grid-cols-[1.18fr_0.82fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-700">01 / Pricing</p>
              <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-[clamp(4rem,7vw,7rem)]">
                One platform.<br />
                <span className="text-orange-700">Simple usage pricing.</span>
              </h1>
            </div>
            <div className="max-w-xl border-t border-slate-300 pt-6 lg:mb-2">
              <p className="text-xl leading-8 text-slate-700">
                Unlimited access to Shyena's AI agent assurance platform. Pay for what you generate and execute, without separate per-user or per-agent licences.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                <span>Public list prices</span>
                <span>Excluding VAT</span>
                <span>Volume terms negotiable</span>
              </div>
            </div>
          </div>

          <div className="mt-16 grid border-y border-slate-300 lg:grid-cols-3">
            {[
              ["€0.05", "generated test journey", "CIS"],
              ["€0.05", "AI conversation", "Vera"],
              ["€0.05", "security interaction", "Chakra"],
            ].map(([price, unit, product], index) => (
              <div key={product} className={`py-8 lg:px-8 lg:py-10 ${index > 0 ? "border-t border-slate-300 lg:border-l lg:border-t-0" : ""}`}>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{product}</p>
                <p className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">{price}</p>
                <p className="mt-2 text-sm font-medium text-slate-600">per {unit}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3 border-l-2 border-orange-600 pl-4 text-sm text-slate-600">
            <ShieldCheck className="h-4 w-4 shrink-0 text-orange-700" />
            <span><strong className="text-slate-950">Free one-week onboarding.</strong> Every customer gets a dedicated Shyena engineer.</span>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-700">03 / Platform access</p>
              <h2 className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-5xl">Everything else stays open.</h2>
            </div>
            <div>
              <p className="max-w-3xl text-xl leading-8 text-slate-700">
                Nexus, Vera and Chakra are available within the same platform. Teams can use the capabilities according to their workflow; generated and executed activity is the metered component.
              </p>
              <div className="mt-10 grid border-y border-slate-300 sm:grid-cols-2">
                {PLATFORM_FEATURES.map((feature, index) => (
                  <div key={feature} className={`flex gap-4 py-5 ${index % 2 === 1 ? "sm:border-l sm:pl-6" : "sm:pr-6"} ${index >= 2 ? "border-t border-slate-200" : ""}`}>
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-700" />
                    <span className="text-sm font-semibold leading-6 text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PricingCalculator />

      <section className="border-y border-slate-200 bg-[#edf6ff]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-700">04 / Included onboarding</p>
              <h2 className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-5xl">Start with a working assurance baseline.</h2>
            </div>
            <div>
              <p className="max-w-2xl text-xl leading-8 text-slate-700">
                Every customer receives a free one-week onboarding period with a dedicated Shyena engineer. Establish the connection, configure the critical journeys and validate the evidence path before broader rollout.
              </p>
              <div className="mt-10 grid border-y border-slate-300 sm:grid-cols-3">
                {[
                  ["01", "Connect", "Establish the agent and execution setup."],
                  ["02", "Configure", "Set up journeys, evaluation rules and security scope."],
                  ["03", "Validate", "Run the initial assurance workflow and confirm reporting."],
                ].map(([number, title, text], index) => (
                  <div key={number} className={`py-7 sm:px-6 ${index > 0 ? "border-t border-slate-300 sm:border-l sm:border-t-0" : "sm:pl-0"}`}>
                    <span className="font-mono text-xs font-semibold tracking-[0.12em] text-orange-700">{number}</span>
                    <h3 className="mt-8 text-xl font-semibold tracking-[-0.02em] text-slate-950">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-7 text-xs leading-5 text-slate-500">Extended implementation, training, custom development, bespoke framework adapters and other professional services are separately scoped and priced.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-700">05 / Enterprise</p>
              <h2 className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-5xl">Public rate first. Negotiation at scale.</h2>
            </div>
            <div>
              <p className="max-w-3xl text-xl leading-8 text-slate-700">
                The €0.05 rates establish the standard list-price anchor. Enterprise customers can negotiate committed volume, deployment, governance, support, data controls and other contractual requirements at contract stage.
              </p>
              <div className="mt-10 flex flex-col gap-6 border-y border-slate-300 py-7 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Enterprise</p>
                  <p className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-950">Negotiated</p>
                </div>
                <Button asChild variant="outline" size="lg" className="rounded-none border-slate-900 px-6 hover:bg-slate-950 hover:text-white">
                  <Link to="/contact">Discuss enterprise volume <ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-500">Volume discounts and tailored commercial terms are negotiated directly rather than hidden inside a higher public tier.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#f5f6f7]">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-700">06 / FAQ</p>
            <h2 className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-5xl">Pricing and usage questions.</h2>
          </div>
          <div className="mt-12 border-t border-slate-300">
            {FAQS.map(([question, answer]) => (
              <details key={question} className="group border-b border-slate-300 py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-8 text-base font-semibold text-slate-950 marker:hidden [&::-webkit-details-marker]:hidden">
                  <span>{question}</span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-slate-300 text-slate-500 transition group-open:rotate-45 group-open:border-orange-600 group-open:text-orange-700">+</span>
                </summary>
                <p className="max-w-3xl pr-12 pt-4 text-sm leading-6 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
