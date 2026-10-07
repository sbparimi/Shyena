import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, CheckCircle2, FileText, Gauge, Layers3, ShieldCheck, Wrench } from "lucide-react";
import { NewsletterSignup } from "@/components/site/newsletter-signup";

const SITE = "https://www.shyena.eu";

export const Route = createFileRoute("/docs/")({
  head: () => ({
    meta: [
      { title: "AI Agent Testing Documentation | Shyena" },
      {
        name: "description",
        content:
          "Practical documentation for testing, evaluating and releasing Cognigy AI Agents: test specifications, evaluation models, environments, integrations, reporting and troubleshooting.",
      },
      { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
      { property: "og:title", content: "AI Agent Testing Documentation | Shyena" },
      {
        property: "og:description",
        content: "Practical guidance for testing, evaluating and proving AI agent quality in production.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/docs` },
      { property: "og:site_name", content: "Shyena" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI Agent Testing Documentation | Shyena" },
      {
        name: "twitter:description",
        content: "Practical guidance for testing, evaluating and proving AI agent quality.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE}/docs` }],
  }),
  component: Docs,
});

const items = [
  {
    title: "Getting Started",
    to: "/docs/getting-started",
    description: "Build the testing workflow from agent discovery through executable assurance.",
    icon: BookOpen,
    tag: "Start here",
  },
  {
    title: "Writing Test Specs",
    to: "/docs/writing-test-specs",
    description: "Turn business journeys, intents and edge cases into precise test specifications.",
    icon: FileText,
    tag: "Test design",
  },
  {
    title: "Evaluation Model",
    to: "/docs/evaluation-model",
    description: "Understand deterministic, semantic and orchestration signals and how they combine into evidence.",
    icon: Gauge,
    tag: "Quality model",
  },
  {
    title: "Environments",
    to: "/docs/environments",
    description: "Separate development, test and release environments without losing traceability.",
    icon: Layers3,
    tag: "Architecture",
  },
  {
    title: "Integrations",
    to: "/docs/integrations",
    description: "Connect the testing workflow to the systems that execute, observe and release your agents.",
    icon: Wrench,
    tag: "Engineering",
  },
  {
    title: "Reporting",
    to: "/docs/reporting",
    description: "Turn execution results into release evidence that engineering and business stakeholders can read.",
    icon: CheckCircle2,
    tag: "Evidence",
  },
  {
    title: "Troubleshooting",
    to: "/docs/troubleshooting",
    description: "Diagnose failed runs, environment issues and evaluation inconsistencies systematically.",
    icon: ShieldCheck,
    tag: "Operations",
  },
] as const;

function Docs() {
  return (
    <div className="overflow-hidden bg-[#f7f4ec] text-[#0e172b]">
      <section className="border-b border-[#d8d2c5] bg-[#07101f] text-white">
        <div className="mx-auto max-w-[1280px] px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24 lg:px-10 lg:pb-24 lg:pt-28">
          <div className="grid items-end gap-10 lg:grid-cols-[.8fr_1.8fr]">
            <div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[.2em] text-[#f18a32]">
                Documentation
              </p>
              <p className="mt-5 max-w-sm text-base leading-7 text-white/55">
                Practical guidance for engineering, QA, product and AI governance teams working
                with Cognigy AI Agents.
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[.2em] text-white/40">
                Test · Evaluate · Prove
              </p>
              <h1 className="mt-3 max-w-4xl font-[Sora] text-5xl font-extrabold leading-[.98] tracking-[-.055em] sm:text-6xl lg:text-7xl">
                The engineering guide to AI agent assurance.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
                Move from conversational intuition to repeatable evidence. Learn how to scope
                journeys, generate tests, evaluate behaviour and produce release-ready proof.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/demo"
                  className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#f18a32] px-4 text-sm font-bold text-[#07101f]"
                >
                  See how it works <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex h-11 items-center rounded-lg border border-white/15 px-4 text-sm font-bold text-white hover:bg-white/5"
                >
                  Discuss your agent
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
          <aside className="lg:sticky lg:top-[92px] lg:self-start">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[.18em] text-[#a87900]">
              Knowledge architecture
            </p>
            <p className="mt-4 text-sm leading-6 text-[#596273]">
              Start with the workflow, then go deeper into test design, evaluation, environments
              and evidence.
            </p>
            <div className="mt-6 hidden border-l border-[#d2ccc0] pl-4 text-xs leading-6 text-[#7a8290] lg:block">
              <div>01 — Discover</div>
              <div>02 — Specify</div>
              <div>03 — Execute</div>
              <div>04 — Evaluate</div>
              <div>05 — Prove</div>
            </div>
          </aside>

          <div>
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[.18em] text-[#a87900]">
                  Core guides
                </p>
                <h2 className="mt-2 text-3xl font-extrabold tracking-[-.035em] sm:text-4xl">
                  Choose the problem you need to solve.
                </h2>
              </div>
              <span className="hidden text-xs font-semibold text-[#8b8272] sm:block">
                7 engineering guides
              </span>
            </div>

            <div className="mt-8 grid min-w-0 gap-4 md:grid-cols-2">
              {items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="group min-w-0 rounded-2xl border border-[#d2ccc0] bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#a87900] hover:shadow-[0_18px_45px_-32px_rgba(14,23,43,.55)] sm:p-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f7f4ec] text-[#a87900]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[.14em] text-[#a19a8d]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-6 font-mono text-[10px] font-bold uppercase tracking-[.14em] text-[#a87900]">
                      {item.tag}
                    </p>
                    <h3 className="mt-2 min-w-0 break-words text-2xl font-extrabold leading-tight tracking-[-.03em] sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-[#596273]">
                      {item.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#17213f]">
                      Read guide <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-[1.35fr_.65fr]">
              <div className="rounded-2xl border border-[#d2ccc0] bg-[#101a19] p-7 text-white sm:p-8">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[.18em] text-[#f18a32]">
                  Compliance & assurance
                </p>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
                  Evidence that can travel beyond the QA team.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/55">
                  Technical testing evidence can support wider AI governance and compliance work.
                  The evidence is engineering material, not legal certification.
                </p>
                <Link
                  to="/security"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white"
                >
                  Explore assurance <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="rounded-2xl border border-[#d2ccc0] bg-white p-7 sm:p-8">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[.18em] text-[#a87900]">
                  Commercial path
                </p>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight">
                  Need an engineer, not another PDF?
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#596273]">
                  Start with a focused pilot and a dedicated engineer working against your agent.
                </p>
                <Link
                  to="/pricing"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#17213f]"
                >
                  View engagement models <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="mt-10">
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
