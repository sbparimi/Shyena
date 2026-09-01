import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";

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
  "End-to-end setup of CIS, ECAAP & Chakra",
  "Up to 3 AI systems or bots in scope",
  "Test design & automation framework",
  "Live dashboards & reporting",
  "Knowledge transfer & team enablement",
  "Pilot summary & roadmap for scale",
];

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
                <p className="mt-2 text-base text-[#918aa8]">one-time pilot engagement · 30–60 days</p>
              </div>
              <span className="rounded-full bg-[#7c3aed] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">Recommended</span>
            </div>
            <p className="mt-7 text-lg font-semibold text-[#faf8ff]">Kickstart your AI assurance journey with a guided pilot.</p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#c9c4d8]">One focused engagement to establish the assurance baseline, execute representative journeys, evaluate outcomes and create a practical roadmap for scale.</p>
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

      <CtaBand eyebrow="Enterprise AI assurance" title="Prove your AI agent is ready to operate." description="Start with one focused pilot. Build the evidence. Scale the assurance model across the estate." primaryLabel="Request an Assurance Review" primaryHref="/contact" />
    </>
  );
}
