import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ClipboardList,
  Gauge,
  Puzzle,
  RefreshCw,
  Rocket,
  ShieldAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Professional Services — Shyena" },
      {
        name: "description",
        content:
          "Specialist implementation, security assurance, enablement and managed programs that extend the Shyena AI assurance platform without changing the SaaS boundary.",
      },
      { property: "og:title", content: "Professional Services — Shyena" },
      {
        property: "og:description",
        content:
          "Specialist engineering and assurance services for teams deploying AI systems in production.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/services" }],
  }),
  component: ServicesPage,
});

const ENGAGEMENTS = [
  {
    icon: Gauge,
    number: "01",
    label: "IMPLEMENT",
    title: "Evaluation implementation",
    description:
      "Configure Nexus and Vera around your priority agents, personas, quality pillars, evaluation contracts and release gates.",
    deliverables: [
      "Priority journey and persona design",
      "Custom metric or judge-rubric design",
      "CI/CD and release-gate integration",
    ],
  },
  {
    icon: ShieldAlert,
    number: "02",
    label: "DEFEND",
    title: "Managed security assurance",
    description:
      "Run scoped Chakra campaigns against your real agent estate, combining adversarial testing, evidence review and remediation guidance.",
    deliverables: [
      "Scoped campaign against selected agents",
      "Findings and evidence walkthrough",
      "Repeatable campaign definition for your team",
    ],
  },
  {
    icon: RefreshCw,
    number: "03",
    label: "OPERATE",
    title: "Ongoing managed program",
    description:
      "Continuous specialist support for scheduled assurance, security campaigns, release reviews and accountable operational guidance.",
    deliverables: [
      "Scheduled evaluation and security runs",
      "Dedicated assurance contact",
      "Periodic assurance and risk review",
    ],
  },
];

const PROCESS = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Scope",
    description:
      "Define the agents, environments, assurance objectives and commercial boundaries.",
  },
  {
    icon: Rocket,
    step: "02",
    title: "Implement",
    description:
      "Configure the platform with your team. Bespoke engineering is explicitly scoped rather than hidden in the SaaS subscription.",
  },
  {
    icon: Puzzle,
    step: "03",
    title: "Handoff or operate",
    description:
      "Your team can operate the platform, or a separately contracted managed program can run alongside it.",
  },
];

const NOT_SAAS = [
  "Pilot and proof-of-value engagements",
  "Training, workshops and enablement",
  "Custom development and bespoke reporting",
  "New framework, channel or platform adapters",
  "Dedicated engineering or managed programs",
];

function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#09051b] text-white">
        <div className="absolute inset-0 bg-grid opacity-45" aria-hidden="true" />
        <div className="absolute inset-0 bg-mesh opacity-70" aria-hidden="true" />
        <div className="absolute -left-48 top-10 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" aria-hidden="true" />
        <div className="absolute -right-48 bottom-0 h-[32rem] w-[32rem] rounded-full bg-orange-500/10 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
          <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-white/45 sm:mb-14">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              <span>Professional services</span>
              <span className="text-white/20">/</span>
              <span>Specialist assurance</span>
            </div>
            <span className="hidden sm:block">NEXUS · VERA · CHAKRA</span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-violet-300/20 bg-violet-400/10 px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-violet-200">
                Specialist support
              </span>
              <h1 className="mt-7 text-[clamp(3.2rem,6.4vw,6.6rem)] font-semibold leading-[.94] tracking-[-.055em] text-white">
                Extend the platform. <span className="text-gradient-brand">Keep the boundary.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
                Shyena remains the recurring software platform. Implementation, training, custom engineering, pilots and managed assurance are optional services with their own scope and commercial agreement.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild className="h-12 rounded-full bg-violet-600 px-6 text-sm font-semibold text-white shadow-[0_16px_45px_-18px_rgba(124,58,237,.9)] hover:bg-violet-500">
                  <Link to="/contact">
                    Discuss an engagement <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-12 rounded-full border-white/15 bg-white/[.03] px-6 text-sm text-white/80 hover:bg-white/[.08] hover:text-white">
                  <Link to="/pricing">View SaaS model</Link>
                </Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-6 rounded-[2rem] bg-violet-500/10 blur-2xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#100a29]/90 shadow-[0_30px_90px_-35px_rgba(124,58,237,.75)] backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 text-[10px] uppercase tracking-[0.2em] text-white/45">
                  <span>Shyena · Service layer</span>
                  <span>Scoped</span>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="mb-5 rounded-xl border border-white/10 bg-black/20 p-4">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-white/40">
                      <span>Commercial boundary</span>
                      <span className="text-orange-300">Explicit</span>
                    </div>
                    <div className="mt-4 h-px bg-gradient-to-r from-violet-500 via-violet-300/40 to-transparent" />
                    <p className="mt-4 text-sm leading-6 text-white/70">
                      SaaS stays predictable. Specialist work is scoped, priced and governed separately.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {ENGAGEMENTS.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.title} className="relative flex gap-4 rounded-xl border border-white/10 bg-white/[.025] p-4">
                          {index < ENGAGEMENTS.length - 1 && (
                            <span className="absolute left-[27px] top-[52px] h-5 w-px bg-violet-400/30" aria-hidden="true" />
                          )}
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-violet-300/20 bg-violet-400/10 text-violet-200">
                            <Icon className="h-3.5 w-3.5" />
                          </span>
                          <div className="min-w-0">
                            <div className="flex items-baseline gap-2">
                              <span className="font-mono text-[9px] tracking-[0.18em] text-orange-300">{item.label}</span>
                              <span className="text-sm font-semibold text-white">{item.title}</span>
                            </div>
                            <p className="mt-1 text-xs leading-5 text-white/45">{item.description}</p>
                          </div>
                          <Check className="ml-auto mt-1 h-4 w-4 shrink-0 text-emerald-300/80" />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="border-t border-white/10 bg-black/15 px-5 py-3 font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
                  Platform capability → specialist engagement → accountable outcome
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0a071d]">
        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="section-kicker">Optional engagements</p>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-[-.035em] text-white sm:text-4xl">
                Specialist support without turning SaaS into consulting.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/45">
              Three engagement patterns cover the most common points where teams need additional engineering or assurance capacity.
            </p>
          </div>

          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
            {ENGAGEMENTS.map((engagement) => {
              const Icon = engagement.icon;
              return (
                <article key={engagement.title} className="group flex flex-col bg-[#100a29] p-7 transition hover:bg-[#140d34] sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-orange-300">{engagement.number}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-300/15 bg-violet-400/10 text-violet-200 transition group-hover:bg-violet-400/15">
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="mt-8 font-mono text-[9px] uppercase tracking-[0.18em] text-violet-300">{engagement.label}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{engagement.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/50">{engagement.description}</p>
                  <ul className="mt-6 space-y-3 border-t border-white/10 pt-5">
                    {engagement.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex gap-2.5 text-xs leading-5 text-white/45">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-300/80" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10 bg-[#0d0822] py-20 sm:py-24">
        <div className="absolute inset-0 bg-grid opacity-25" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[.35fr_.65fr] lg:gap-20">
            <div>
              <p className="section-kicker">Commercial boundary</p>
              <h2 className="mt-5 max-w-sm text-3xl font-semibold leading-tight tracking-[-.035em] text-white sm:text-4xl">
                The boundary is part of the product.
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-6 text-white/45">
                A recurring platform contract should not quietly absorb one customer's bespoke engineering, training or operational requirements.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[.025] p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">Outside SaaS subscription</span>
                <span className="rounded-full border border-orange-300/15 bg-orange-300/5 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.15em] text-orange-300">Separately scoped</span>
              </div>
              <ul className="grid gap-1 sm:grid-cols-2">
                {NOT_SAAS.map((item, index) => (
                  <li key={item} className="flex items-start gap-3 rounded-xl border border-white/5 bg-black/10 p-4">
                    <span className="font-mono text-[9px] tracking-[0.12em] text-violet-300/70">0{index + 1}</span>
                    <span className="text-sm leading-6 text-white/55">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#09051b] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[.35fr_.65fr] lg:gap-20">
            <div>
              <p className="section-kicker">How it works</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-.035em] text-white sm:text-4xl">From scope to an operational assurance program.</h2>
              <p className="mt-5 max-w-sm text-sm leading-6 text-white/45">A clear sequence keeps ownership, evidence and commercial responsibility visible at every stage.</p>
            </div>

            <div className="space-y-3">
              {PROCESS.map((process) => {
                const Icon = process.icon;
                return (
                  <article key={process.title} className="grid gap-4 rounded-2xl border border-white/10 bg-white/[.025] p-5 sm:grid-cols-[72px_1fr_auto] sm:items-center sm:p-6">
                    <div className="flex items-center gap-3 sm:block">
                      <span className="font-mono text-xs tracking-[0.15em] text-orange-300">{process.step}</span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-violet-300/15 bg-violet-400/10 text-violet-200 sm:mt-3">
                        <Icon className="h-4 w-4" />
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">{process.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-white/45">{process.description}</p>
                    </div>
                    <ArrowRight className="hidden h-4 w-4 text-white/30 sm:block" aria-hidden="true" />
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10 bg-[#0a071d] py-20 sm:py-24">
        <div className="absolute inset-0 bg-mesh opacity-40" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-orange-300">Start with the platform</p>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-[-.04em] text-white sm:text-5xl">Add specialist services only where they create measurable value.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50">Keep the SaaS subscription, contracted assurance volumes and professional services distinct in the commercial model and easy to understand.</p>
          <Button asChild className="mt-8 h-12 rounded-full bg-violet-600 px-7 text-sm font-semibold text-white shadow-[0_16px_45px_-18px_rgba(124,58,237,.9)] hover:bg-violet-500">
            <Link to="/contact">
              Talk to Sales <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
