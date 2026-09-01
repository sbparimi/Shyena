import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Check, Calculator } from "lucide-react";
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

const LIFETIME_FEATURES = [
  "One-time lifetime platform license",
  "CIS, ECAAP & Chakra platform access",
  "Product updates and platform upgrades",
  "Use across agreed enterprise AI systems",
  "Internal enterprise use",
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
  }: {
    id: string;
    label: string;
    value: string;
    setter: (v: string) => void;
  }) => (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-[#e9e5f2]">{label}</label>
      <input
        id={id}
        value={value}
        inputMode="numeric"
        onChange={(e) => update(e.target.value, setter)}
        onBlur={() => value === "" && setter("0")}
        className="mt-2 w-full rounded-xl border border-[#514778] bg-[#15102d] px-4 py-3 text-lg font-semibold text-[#faf8ff] outline-none focus:border-[#a855f7] focus:ring-2 focus:ring-[#7c3aed]/20"
      />
      <p className="mt-2 text-xs text-[#918aa8]">€0.05 each · Whole numbers only</p>
    </div>
  );

  return (
    <section id="usage-calculator" className="border-y border-[#2b2350] bg-[#0a071d] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <div>
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#7c3aed]/15 text-[#a855f7]"><Calculator className="h-5 w-5" /></div>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-[#f59804]">Usage calculator</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#faf8ff] sm:text-4xl">Estimate your variable usage.</h2>
          <p className="mt-5 text-base leading-relaxed text-[#c9c4d8]">Estimate the variable usage component across CIS test journeys, Vera conversations and Chakra security interactions.</p>
          <div className="mt-6 rounded-2xl border border-[#2b2350] bg-[#15102d] p-5 text-sm leading-relaxed text-[#c9c4d8]"><span className="font-semibold text-[#faf8ff]">Three independent units.</span> CIS test journeys, Vera conversations and Chakra security interactions are measured separately. One unit is never converted into another.</div>
        </div>

        <div className="rounded-3xl border border-[#2b2350] bg-[#15102d] p-6 shadow-xl sm:p-8">
          <div className="grid gap-7 md:grid-cols-3">
            <Field id="cis" label="CIS test journeys" value={cis} setter={setCis} />
            <Field id="vera" label="Vera conversations" value={vera} setter={setVera} />
            <Field id="chakra" label="Chakra security interactions" value={chakra} setter={setChakra} />
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[#2b2350] pt-7">
            <div><p className="text-xs uppercase tracking-wider text-[#918aa8]">CIS</p><p className="mt-1 text-xl font-bold text-[#faf8ff]">{formatEuro(estimate.cis)}</p></div>
            <div><p className="text-xs uppercase tracking-wider text-[#918aa8]">Vera</p><p className="mt-1 text-xl font-bold text-[#faf8ff]">{formatEuro(estimate.vera)}</p></div>
            <div><p className="text-xs uppercase tracking-wider text-[#918aa8]">Chakra</p><p className="mt-1 text-xl font-bold text-[#faf8ff]">{formatEuro(estimate.chakra)}</p></div>
          </div>
          <div className="mt-7 rounded-2xl bg-[#0a071d] p-6 text-[#faf8ff]"><p className="text-xs uppercase tracking-[0.18em] text-[#a9a2bd]">Estimated variable usage</p><p className="mt-2 text-4xl font-bold tracking-tight">{formatEuro(total)}</p><p className="mt-2 text-xs text-[#a9a2bd]">Illustrative usage estimate only. VAT and separately scoped professional services are excluded.</p></div>
        </div>
      </div>
    </section>
  );
}

function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0a071d] text-white">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(139,92,246,.10)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.10)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#7c3aed]/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#a855f7]">Pricing</p>
            <h1 className="mt-5 text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">Simple. Transparent.<br /><span className="text-[#a855f7]">Outcome-driven.</span></h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-[#c9c4d8]">Start with a focused pilot, establish measurable assurance and build the evidence needed to scale across your AI estate.</p>
          </div>
        </div>
      </section>

      <section id="pilot-project" className="bg-[#0a071d] px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-[#514778] bg-[#15102d] shadow-2xl shadow-[#7c3aed]/15">
          <div className="border-b border-[#2b2350] px-7 py-8 sm:px-10">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#f59804]">Pilot Project</p>
                <p className="mt-4 text-4xl font-bold tracking-tight text-[#faf8ff] sm:text-5xl">€7,500</p>
                <p className="mt-2 text-base text-[#918aa8]">one-time pilot engagement · 30 days</p>
              </div>
              <span className="rounded-full bg-[#7c3aed] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">Recommended</span>
            </div>

            <div className="mt-7 rounded-2xl border border-[#2b2350] bg-[#0a071d] p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#a855f7]">Goal of the pilot</p>
              <p className="mt-3 max-w-4xl text-base leading-relaxed text-[#e8e3f2]">Establish your baseline, assess critical AI journeys, identify behavioural and security risks, and receive an evidence-backed assurance report with remediation priorities and a production rollout recommendation.</p>
            </div>
          </div>

          <div className="px-7 py-8 sm:px-10">
            <div className="overflow-hidden rounded-2xl border border-[#2b2350]">
              <div className="grid grid-cols-[1fr_auto] bg-[#0a071d] px-5 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#a855f7] sm:px-6">
                <span>What’s included</span>
                <span>Included</span>
              </div>
              <div>
                {PILOT_FEATURES.map((feature) => (
                  <div key={feature} className="grid grid-cols-[1fr_auto] items-center gap-5 border-t border-[#2b2350] px-5 py-4 sm:px-6">
                    <span className="text-sm text-[#c9c4d8] sm:text-base">{feature}</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7c3aed]/15 text-[#a855f7]"><Check className="h-4 w-4" /></span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-5 border-t border-[#2b2350] pt-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-[#c9c4d8]">A focused starting point for teams validating Shyena before broader rollout.</p>
              <Button asChild className="shrink-0"><Link to="/contact">Discuss this plan <ArrowRight className="h-4 w-4" /></Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section id="lifetime-platform-license" className="bg-[#0a071d] px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-[#7c3aed] bg-[#15102d] shadow-2xl shadow-[#7c3aed]/20">
          <div className="border-b border-[#2b2350] px-7 py-8 sm:px-10">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#a855f7]">After the pilot</p>
                <p className="mt-3 text-2xl font-bold text-[#faf8ff] sm:text-3xl">Lifetime Platform License</p>
                <p className="mt-4 text-4xl font-bold tracking-tight text-[#faf8ff] sm:text-5xl">€50,000 <span className="text-lg font-medium text-[#918aa8]">+ applicable taxes</span></p>
                <p className="mt-2 text-base text-[#918aa8]">one-time license fee</p>
              </div>
              <span className="rounded-full border border-[#a855f7]/40 bg-[#7c3aed]/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#d8b4fe]">Preferred pilot offer</span>
            </div>

            <p className="mt-7 max-w-4xl text-base leading-relaxed text-[#e8e3f2]">For customers who complete the pilot, continue with a one-time lifetime license for the Shyena assurance platform.</p>
          </div>

          <div className="px-7 py-8 sm:px-10">
            <div className="overflow-hidden rounded-2xl border border-[#2b2350]">
              <div className="grid grid-cols-[1fr_auto] bg-[#0a071d] px-5 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#a855f7] sm:px-6">
                <span>License includes</span>
                <span>Included</span>
              </div>
              <div>
                {LIFETIME_FEATURES.map((feature) => (
                  <div key={feature} className="grid grid-cols-[1fr_auto] items-center gap-5 border-t border-[#2b2350] px-5 py-4 sm:px-6">
                    <span className="text-sm text-[#c9c4d8] sm:text-base">{feature}</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7c3aed]/15 text-[#a855f7]"><Check className="h-4 w-4" /></span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-5 border-t border-[#2b2350] pt-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-relaxed text-[#c9c4d8]">Implementation, custom development, professional services, support and infrastructure are separately scoped where required.</p>
              <Button asChild className="shrink-0"><Link to="/contact">Discuss the lifetime license <ArrowRight className="h-4 w-4" /></Link></Button>
            </div>
          </div>
        </div>
      </section>

      <PricingCalculator />

      <CtaBand eyebrow="Enterprise AI assurance" title="Prove your AI agent is ready to operate." description="Start with one focused pilot. Build the evidence. Scale the assurance model across the estate." primaryLabel="Request an Assurance Review" primaryHref="/contact" />
    </>
  );
}

// Production deployment trigger: keep the pricing calculator and focused pilot aligned with the approved scope.
