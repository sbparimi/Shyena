import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Eye, ShieldOff, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Shyena" },
      {
        name: "description",
        content:
          "Why we built an evaluation platform that refuses to report a false green pass for conversational AI releases.",
      },
      { property: "og:title", content: "About — Shyena" },
      { property: "og:description", content: "The team building trustworthy release gates for conversational AI." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    icon: Eye,
    title: "Evidence over vibes",
    description:
      "A verdict has to be explainable. Every score is traceable back to the turn, the assertion, or the judge call that produced it — never a black box you're asked to trust.",
  },
  {
    icon: ShieldOff,
    title: "No false confidence",
    description:
      "A broken run should never look like a passing one. If a conversation didn't complete, the verdict says so — regardless of how well the partial transcript scored.",
  },
  {
    icon: Sparkles,
    title: "Built for how agents actually behave",
    description:
      "LLM-driven agents don't follow a script, and testing them shouldn't assume they do. Personas pursue goals; the executor improvises the rest.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 -top-40 h-[420px] bg-[radial-gradient(60%_60%_at_50%_50%,var(--color-primary)_0%,transparent_70%)] opacity-[0.13]" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-4 pt-20 sm:px-8 sm:pt-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              About
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-6xl">
              We build the evidence layer for conversational AI
            </h1>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-8">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            We built Shyena because we kept seeing the same failure mode: a conversational AI
            release ships with a clean dashboard full of green checkmarks, and the regression
            reaches customers anyway. The tools weren't lying, exactly — they were scoring
            whatever transcript they happened to collect, even when the conversation broke down
            partway through. Nothing crashed loudly, so nothing looked wrong.
          </p>
          <p>
            Testing tools built for scripted, deterministic UIs don't hold up against agents that
            reason and respond differently on every run. Two runs of the same test persona can take
            different but equally valid paths to the same correct outcome — and a script that
            hardcodes one path calls the other a failure. That's not a bug in the agent. It's a
            testing model built for the wrong kind of software.
          </p>
          <p>
            So we built something else: agentic personas that pursue a goal instead of replaying a
            script, evaluation that combines LLM judgment with deterministic hard-fact checks, and
            a gate that treats a broken execution as disqualifying — before any quality score gets
            the chance to look better than it should. The goal isn't a prettier dashboard. It's a
            verdict you can actually trust before a release goes out, not after a customer tells you
            it was wrong.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border bg-secondary/40 py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">What we believe</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Principles, not features</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="rounded-xl border border-border bg-card p-7 shadow-card">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold">{value.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Early-stage note */}
      <section className="mx-auto w-full max-w-4xl px-5 py-16 text-center sm:px-8">
        <p className="text-muted-foreground">
          We're early — building this in close collaboration with the first teams putting it to
          real use. If that's you, we'd rather show you a real verdict against your own agent than
          talk in the abstract.
        </p>
        <Button asChild className="mt-6">
          <Link to="/contact">
            Talk to us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </section>

      <CtaBand />
    </>
  );
}
