import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ClipboardList, Rocket, RefreshCw, Gauge, ShieldAlert, Puzzle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Expert Services — Shyena Evaluation & Red-Teaming Implementation" },
      {
        name: "description",
        content:
          "Hire the team that builds Shyena to implement your AI evaluation and security testing program — persona and judge design, red-team campaigns using the independent Ziran engine, and CI/CD integration.",
      },
      { property: "og:title", content: "Expert Services — Shyena Evaluation & Red-Teaming Implementation" },
      {
        property: "og:description",
        content: "Our team implements evaluation and red-teaming for your AI systems, using Shyena and the independent, third-party Ziran engine.",
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
    title: "Evaluation Implementation",
    description:
      "We scope your first test personas and goals, design your quality pillars and judge rubrics, and wire the execution-integrity gate into your actual release process — so week one produces a real verdict against your live agent, not a proof of concept.",
    deliverables: [
      "Persona, goal, and playbook design for your priority flows",
      "Custom metric development where the default catalog isn't enough",
      "Release-process integration (CLI exit-code gating)",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Managed Red-Teaming",
    description:
      "We run scoped red-team campaigns using Ziran, an independent open-source engine we have no role in developing, against your real agent — tool-chain discovery, execution-level side-effect detection, adaptive multi-phase attacks — and walk your team through every finding, prioritized by actual severity, not a raw vulnerability dump.",
    deliverables: [
      "A scoped campaign against one or more of your agents",
      "Findings walkthrough with remediation guidance",
      "A repeatable campaign your team can re-run",
    ],
  },
  {
    icon: RefreshCw,
    title: "Ongoing Managed Program",
    description:
      "For teams that want this handled continuously rather than as a project: scheduled regression suites, quarterly red-team campaigns, and a dedicated point of contact who knows your agents as well as your own team does.",
    deliverables: [
      "Scheduled evaluation and red-team runs on a cadence you set",
      "A dedicated engineer, not a rotating support queue",
      "Quarterly review of what's changed and what's new",
    ],
  },
];

const PROCESS = [
  {
    icon: ClipboardList,
    step: "1",
    title: "Scoping call",
    description: "We learn your agent, your existing testing gaps, and what a successful engagement looks like.",
  },
  {
    icon: Rocket,
    step: "2",
    title: "Implementation",
    description: "We build the personas, rubrics, or campaigns — with your team, not in a black box.",
  },
  {
    icon: Puzzle,
    step: "3",
    title: "Handoff or ongoing",
    description: "You take it from there, or we keep running it as a managed program. Your call.",
  },
];

function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 -top-40 h-[420px] bg-[radial-gradient(60%_60%_at_50%_50%,var(--color-primary)_0%,transparent_70%)] opacity-[0.13]" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-4 pt-20 sm:px-8 sm:pt-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              Services
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-6xl">
              Hire the team that builds Shyena
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We built Shyena. Our red-teaming service uses Ziran, an independent open-source
              project we have no role in developing, as its engine.
              If you'd rather have us implement your evaluation or security testing program
              directly than run it yourself, that's what this is.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link to="/contact">
                  Talk to Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Engagements</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Three ways to work with us</h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {ENGAGEMENTS.map((eng) => {
            const Icon = eng.icon;
            return (
              <div key={eng.title} className="flex flex-col rounded-xl border border-border bg-card p-7 shadow-card">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{eng.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{eng.description}</p>
                <ul className="mt-5 space-y-2 border-t border-border pt-5">
                  {eng.deliverables.map((d) => (
                    <li key={d} className="text-xs leading-relaxed text-muted-foreground">
                      · {d}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="bg-navy py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">How it works</p>
            <h2 className="mt-4 text-3xl font-bold text-navy-foreground sm:text-4xl">
              A short path from scoping to a real result.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {PROCESS.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="rounded-xl border border-navy-border bg-white/[0.03] p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs text-navy-muted">Step {p.step}</span>
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-navy-foreground">{p.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-navy-muted">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
        <div className="rounded-3xl border border-border bg-secondary/40 p-8 text-center sm:p-12">
          <h2 className="mx-auto max-w-xl text-3xl font-bold sm:text-4xl">
            Tell us what you're trying to ship.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            We'll tell you honestly whether an engagement makes sense, or whether you're better off
            just using the tools yourself.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/contact">
              Talk to Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
