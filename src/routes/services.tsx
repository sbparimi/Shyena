import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ClipboardList, Gauge, Puzzle, RefreshCw, Rocket, ShieldAlert } from "lucide-react";
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
        content: "Specialist engineering and assurance services for teams deploying AI systems in production.",
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
    deliverables: ["Priority journey and persona design", "Custom metric or judge-rubric design", "CI/CD and release-gate integration"],
  },
  {
    icon: ShieldAlert,
    number: "02",
    label: "DEFEND",
    title: "Managed security assurance",
    description:
      "Run scoped Chakra campaigns against your real agent estate, combining adversarial testing, evidence review and remediation guidance.",
    deliverables: ["Scoped campaign against selected agents", "Findings and evidence walkthrough", "Repeatable campaign definition for your team"],
  },
  {
    icon: RefreshCw,
    number: "03",
    label: "OPERATE",
    title: "Ongoing managed program",
    description:
      "Continuous specialist support for scheduled assurance, security campaigns, release reviews and accountable operational guidance.",
    deliverables: ["Scheduled evaluation and security runs", "Dedicated assurance contact", "Periodic assurance and risk review"],
  },
];

const PROCESS = [
  { icon: ClipboardList, step: "01", title: "Scope", description: "Define the agents, environments, assurance objectives and commercial boundaries." },
  { icon: Rocket, step: "02", title: "Implement", description: "Configure the platform with your team. Bespoke engineering is explicitly scoped rather than hidden in the SaaS subscription." },
  { icon: Puzzle, step: "03", title: "Handoff or operate", description: "Your team can operate the platform, or a separately contracted managed program can run alongside it." },
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
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24 lg:pt-20">
          <div className="mb-10 flex items-center justify-between border-b border-slate-300 pb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 sm:mb-14">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[#ffb703]" />
              <span>Professional services</span>
              <span className="text-slate-300">/</span>
              <span>Specialist assurance</span>
            </div>
            <span className="hidden sm:block">NEXUS · VERA · CHAKRA</span>
          </div>

          <div className="grid items-end gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
            <div>
              <div className="mb-7 border-l-4 border-[#ffb703] pl-4 font-mono text-xs font-bold uppercase tracking-[0.22em] text-slate-600">
                Specialist support
              </div>
              <h1 className="max-w-4xl font-[Sora] text-[clamp(3.5rem,6.7vw,7rem)] font-extrabold leading-[0.88] tracking-[-0.065em] text-slate-950">
                Extend the platform.
                <span className="block text-[#a87900]">Keep the boundary.</span>
              </h1>
            </div>
            <div className="max-w-2xl lg:ml-auto">
              <p className="text-lg leading-8 text-slate-600 sm:text-xl">
                Shyena remains the recurring software platform. Implementation, training, custom engineering, pilots and managed assurance are optional services with their own scope and commercial agreement.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex h-13 items-center justify-center gap-2 border border-[#ffb703] bg-[#ffb703] px-7 py-3.5 text-sm font-extrabold uppercase tracking-[0.01em] text-slate-950 transition-colors hover:bg-[#f5a900]">
                  Discuss an engagement <ArrowRight className="h-5 w-5" />
                </Link>
                <Link to="/pricing" className="inline-flex h-13 items-center justify-center gap-2 border border-slate-400 bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:border-slate-950">
                  View SaaS model
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-14 grid border-y border-slate-300 md:grid-cols-3">
            <div className="border-b border-slate-300 px-0 py-6 md:border-b-0 md:border-r md:pr-8">
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#a87900]">01 / Platform</div>
              <div className="mt-3 text-lg font-extrabold">Recurring SaaS</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">The core Shyena assurance platform remains predictable and reusable.</p>
            </div>
            <div className="border-b border-slate-300 px-0 py-6 md:border-b-0 md:border-r md:px-8">
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#a87900]">02 / Service</div>
              <div className="mt-3 text-lg font-extrabold">Specialist capacity</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">Engineering and assurance expertise is added where your team needs it.</p>
            </div>
            <div className="px-0 py-6 md:pl-8">
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#a87900]">03 / Outcome</div>
              <div className="mt-3 text-lg font-extrabold">Accountable delivery</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">Scope, ownership, evidence and commercial responsibility stay explicit.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-[#f5f8fc]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-10 border-b border-slate-300 pb-10 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <div className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#a87900]">Optional engagements</div>
              <h2 className="max-w-4xl font-[Sora] text-[clamp(3rem,5.7vw,6rem)] font-extrabold leading-[0.9] tracking-[-0.06em] text-slate-950">
                Specialist support without turning SaaS into consulting.
              </h2>
            </div>
            <p className="max-w-sm text-base leading-7 text-slate-600">
              Three engagement patterns cover the most common points where teams need additional engineering or assurance capacity.
            </p>
          </div>

          <div className="mt-12 grid gap-px border border-slate-300 bg-slate-300 md:grid-cols-3">
            {ENGAGEMENTS.map((engagement) => {
              const Icon = engagement.icon;
              return (
                <article key={engagement.title} className="group flex min-h-[430px] flex-col bg-white p-7 transition-[background-color,transform] duration-300 hover:-translate-y-1 hover:bg-[#fbfcfe] sm:p-8">
                  <div className="flex items-start justify-between gap-6">
                    <span className="font-mono text-xs tracking-[0.18em] text-slate-400">{engagement.number}</span>
                    <span className="flex h-11 w-11 items-center justify-center border border-[#ffb703] bg-[#ffb703] text-slate-950 transition-transform duration-200 group-hover:-translate-y-1">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="mt-12 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#a87900]">{engagement.label}</div>
                  <h3 className="mt-4 font-[Sora] text-2xl font-extrabold tracking-[-0.035em] text-slate-950">{engagement.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{engagement.description}</p>
                  <ul className="mt-auto space-y-3 border-t border-slate-300 pt-6">
                    {engagement.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex gap-3 text-sm leading-6 text-slate-600">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#a87900]" />
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

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">Commercial boundary</div>
              <h2 className="mt-5 font-[Sora] text-[clamp(3rem,5vw,5.5rem)] font-extrabold leading-[0.9] tracking-[-0.06em] text-slate-950">
                The boundary is part of the product.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                A recurring platform contract should not quietly absorb one customer's bespoke engineering, training or operational requirements.
              </p>
            </div>

            <div className="border-t border-slate-300">
              <div className="flex items-center justify-between border-b border-slate-300 py-5">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Outside SaaS subscription</span>
                <span className="border border-[#ffb703] bg-[#ffb703] px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-slate-950">Separately scoped</span>
              </div>
              <div className="grid sm:grid-cols-2">
                {NOT_SAAS.map((item, index) => (
                  <div key={item} className="flex gap-5 border-b border-slate-300 py-7 sm:px-6 sm:first:pl-0 sm:odd:border-r">
                    <span className="font-mono text-xs tracking-[0.14em] text-slate-400">0{index + 1}</span>
                    <span className="text-base leading-7 text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">How it works</div>
              <h2 className="mt-5 font-[Sora] text-[clamp(3rem,5vw,5.5rem)] font-extrabold leading-[0.9] tracking-[-0.06em] text-slate-950">
                From scope to an operational assurance program.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                A clear sequence keeps ownership, evidence and commercial responsibility visible at every stage.
              </p>
            </div>

            <div className="border-t border-slate-300">
              {PROCESS.map((process) => {
                const Icon = process.icon;
                return (
                  <article key={process.title} className="group grid gap-6 border-b border-slate-300 py-8 sm:grid-cols-[72px_1fr_auto] sm:items-center sm:py-9">
                    <div className="flex items-center gap-4 sm:block">
                      <span className="font-mono text-xs tracking-[0.15em] text-slate-400">{process.step}</span>
                      <span className="flex h-11 w-11 items-center justify-center border border-[#ffb703] bg-[#ffb703] text-slate-950 sm:mt-4">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <div>
                      <h3 className="font-[Sora] text-2xl font-extrabold tracking-[-0.035em] text-slate-950">{process.title}</h3>
                      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{process.description}</p>
                    </div>
                    <ArrowRight className="hidden h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 sm:block" aria-hidden="true" />
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b0920] text-white">
        <div className="mx-auto max-w-[1440px] px-6 py-20 text-center sm:px-8 lg:px-10 lg:py-28">
          <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ffb703]">Start with the platform</div>
          <h2 className="mx-auto mt-5 max-w-4xl font-[Sora] text-[clamp(3rem,5.2vw,5.6rem)] font-extrabold leading-[0.9] tracking-[-0.06em] text-white">
            Add specialist services only where they create measurable value.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Keep the SaaS subscription, contracted assurance volumes and professional services distinct in the commercial model and easy to understand.
          </p>
          <Link to="/contact" className="mt-9 inline-flex h-13 items-center justify-center gap-2 border border-[#ffb703] bg-[#ffb703] px-7 py-3.5 text-sm font-extrabold uppercase tracking-[0.01em] text-slate-950 transition-colors hover:bg-[#f5a900]">
            Talk to Sales <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
