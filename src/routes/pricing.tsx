import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CtaBand } from "@/components/site/cta-band";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Shyena Pricing | AI Assurance Pilot" },
      {
        name: "description",
        content:
          "Start with a €7,500 AI assurance pilot for one AI system. Establish the baseline, execute representative journeys and prove the Shyena assurance model.",
      },
      {
        name: "keywords",
        content:
          "AI agent assurance pricing, AI testing pilot, Cognigy testing pricing, AI agent evaluation pricing, AI security testing pricing",
      },
      { property: "og:title", content: "Shyena Pricing | AI Assurance Pilot" },
      {
        property: "og:description",
        content: "Start with one AI system. Prove the assurance model.",
      },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/pricing" }],
  }),
  component: PricingPage,
});

const PILOT_FEATURES = [
  ["Price", "€7,500"],
  ["Duration", "30–60 days"],
  ["AI systems", "1"],
  ["Teams / users", "Limited"],
  ["Included usage", "5,000 units"],
  ["CIS – Test Journeys", "Included"],
  ["Vera – Conversations", "Included"],
  ["Chakra – Security Tests", "Included"],
  ["Dashboards & Reporting", "Basic"],
  ["Release Gate Reporting", "Basic"],
  ["Environments", "1"],
  ["Support", "Email"],
  ["Professional Services", "Optional"],
  ["Customer Infrastructure", "Customer"],
] as const;

const FAQS = [
  [
    "What is included in the €7,500 pilot?",
    "The pilot covers one AI system for 30–60 days and is designed to establish a baseline, execute representative journeys, evaluate outcomes and prove the assurance model.",
  ],
  [
    "What counts as additional usage?",
    "CIS test journeys generated, Vera AI conversations and Chakra security interactions are measured as three independent usage units. Additional usage is €0.05 per unit after the included allowance.",
  ],
  [
    "Are Nexus, Vera and Chakra separate subscriptions?",
    "No. The Shyena platform is sold as one assurance platform. Nexus, Vera and Chakra are capabilities within that platform rather than separate module subscriptions.",
  ],
  [
    "Who pays for cloud infrastructure and LLM/API consumption?",
    "Customer infrastructure, LLM/API consumption, hosting and monitoring are billed directly to and controlled by the customer. They are separate from the Shyena software subscription.",
  ],
];

function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0a071d] text-white">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(139,92,246,.10)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.10)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#7c3aed]/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#a855f7]">AI assurance pilot</p>
            <h1 className="mt-5 text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">
              Start with one AI system.
              <br />
              <span className="text-[#a855f7]">Prove the assurance model.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#c9c4d8]">
              A focused 30–60 day pilot for teams that need to establish a baseline, execute representative journeys, evaluate outcomes and build evidence for a release decision.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
              <span className="rounded-full border border-[#514778] bg-[#15102d]/40 px-4 py-2">€7,500 pilot</span>
              <span className="rounded-full border border-[#514778] bg-[#15102d]/40 px-4 py-2">1 AI system</span>
              <span className="rounded-full border border-[#514778] bg-[#15102d]/40 px-4 py-2">30–60 days</span>
            </div>
            <p className="mt-7 text-sm text-[#a855f7]">Free one-week onboarding with a dedicated Shyena engineer.</p>
          </div>
        </div>
      </section>

      <section id="pilot" className="bg-[#0a071d] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#f59804]">Pilot project</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#faf8ff] sm:text-4xl">
              One pilot. One assurance foundation.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#c9c4d8]">
              The pilot and its included capabilities are shown together so the commercial scope and engineering deliverables are explicit.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-[#2b2350] bg-[#15102d] shadow-2xl shadow-[#000]/20">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr className="bg-[#0a071d] text-white">
                    <th className="w-1/2 border-b border-r border-[#514778] px-6 py-5 text-xs font-bold uppercase tracking-[0.16em]">
                      Pilot project
                    </th>
                    <th className="border-b border-[#514778] px-6 py-5 text-xs font-bold uppercase tracking-[0.16em]">
                      Included scope
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {PILOT_FEATURES.map(([feature, value], index) => (
                    <tr key={feature} className={index % 2 === 0 ? "bg-[#15102d]" : "bg-[#0f0b25]"}>
                      <td className="border-b border-[#2b2350] px-6 py-4 text-sm font-semibold text-[#faf8ff]">
                        {feature}
                      </td>
                      <td className="border-b border-[#2b2350] px-6 py-4 text-sm text-[#c9c4d8]">
                        {feature === "CIS – Test Journeys" || feature === "Vera – Conversations" || feature === "Chakra – Security Tests" ? (
                          <span className="inline-flex items-center gap-2 font-medium text-[#faf8ff]">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#7c3aed]/20 text-[#a855f7]">
                              <Check className="h-3.5 w-3.5" />
                            </span>
                            {value}
                          </span>
                        ) : (
                          value
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-[#2b2350] bg-[#15102d] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#a855f7]">Pilot outcome</p>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-[#c9c4d8]">
                Establish the baseline, prove the evaluation workflow and create evidence-backed confidence in one real AI system.
              </p>
            </div>
            <Link to="/contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#7c3aed] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6d28d9]">
              Start the pilot
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#0a071d] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              ["01", "Baseline", "Establish the starting quality and execution picture for one real AI system."],
              ["02", "Evaluate", "Run representative journeys across deterministic, semantic and security assurance dimensions."],
              ["03", "Prove", "Turn the pilot evidence into a defensible release decision and repeatable assurance workflow."],
            ].map(([number, title, body]) => (
              <div key={number} className="rounded-3xl border border-[#2b2350] bg-[#15102d] p-7">
                <span className="font-mono text-xs text-[#a855f7]">{number}</span>
                <h3 className="mt-4 text-xl font-bold text-[#faf8ff]">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#c9c4d8]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#f59804]">Pricing questions</p>
          <h2 className="mt-4 text-3xl font-bold text-[#faf8ff]">Clear answers for the pilot.</h2>
        </div>
        <Accordion type="single" collapsible className="mt-10">
          {FAQS.map(([question, answer], index) => (
            <AccordionItem key={question} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{question}</AccordionTrigger>
              <AccordionContent className="text-[#c9c4d8]">{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <CtaBand
        eyebrow="AI assurance pilot"
        title="Prove your AI agent is ready to operate."
        description="Start with one AI system. Establish the evidence. Prove the assurance model."
        primaryLabel="Request an Assurance Review"
        primaryHref="/contact"
      />
    </>
  );
}
