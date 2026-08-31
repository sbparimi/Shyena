import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Database, FileCheck2, KeyRound, LockKeyhole, Network, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security & Trust — Shyena" },
      { name: "description", content: "Security, data handling and enterprise trust information for the Shyena AI assurance platform." },
      { property: "og:title", content: "Security & Trust — Shyena" },
      { property: "og:description", content: "Understand how Shyena approaches data, access, evidence and enterprise AI assurance." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/security" }],
  }),
  component: SecurityPage,
});

const CONTROLS = [
  { icon: LockKeyhole, title: "Access control", text: "Enterprise assurance should be governed by explicit access, environment and release boundaries." },
  { icon: Database, title: "Data handling", text: "Define which conversation, evaluation and evidence data enters the assurance workflow and how long it is retained." },
  { icon: FileCheck2, title: "Evidence integrity", text: "Keep the execution result, assertions, evaluation evidence and final verdict connected so release decisions remain auditable." },
  { icon: KeyRound, title: "Credential separation", text: "Keep agent credentials and environment configuration separate from test specifications and reporting artifacts." },
  { icon: Network, title: "System boundaries", text: "Make integrations explicit: agent platform, execution channel, evaluation services, CI/CD and reporting destinations." },
  { icon: ShieldCheck, title: "Release governance", text: "Use assurance outcomes as an engineering control rather than treating a quality score as a substitute for execution integrity." },
];

function SecurityPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-lavender text-lavender-foreground">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-muted-foreground">Security & trust</span>
            <h1 className="mt-6 text-5xl leading-[1.05] sm:text-7xl">Enterprise AI assurance needs enterprise-grade trust.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">Security is part of the assurance model. Shyena is designed to keep access, data boundaries, execution evidence and release decisions explicit and reviewable.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Trust model</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">Controls should be visible, not implied.</h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">The exact controls available to an account depend on the deployed Shyena configuration and contracted environment. The assurance model itself is designed around explicit evidence and governed execution.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CONTROLS.map((control) => {
            const Icon = control.icon;
            return (
              <article key={control.title} className="rounded-2xl border border-border bg-card p-7 shadow-card">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span>
                <h3 className="mt-5 text-lg font-semibold">{control.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{control.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-navy py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Assurance boundary</p>
              <h2 className="mt-4 text-3xl font-bold text-navy-foreground sm:text-5xl">Make every system boundary inspectable.</h2>
              <p className="mt-5 text-lg leading-8 text-navy-muted">A useful security page should not make unsupported compliance claims. Instead, Shyena exposes the areas an enterprise team needs to review before onboarding: identity, credentials, data, integrations, evidence and deployment.</p>
            </div>
            <div className="rounded-2xl border border-navy-border bg-white/[0.035] p-6 sm:p-8">
              <div className="space-y-3 font-mono text-xs">
                {[
                  ["IDENTITY", "Access and role boundaries"],
                  ["CREDENTIALS", "Environment-specific secrets"],
                  ["AGENT", "Target system and channel"],
                  ["EXECUTION", "Conversation and tool activity"],
                  ["EVIDENCE", "Assertions, scores and trace"],
                  ["VERDICT", "Release decision and audit trail"],
                ].map(([key, value]) => (
                  <div key={key} className="flex flex-col gap-1 rounded-lg border border-white/10 bg-white/[0.025] p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                    <span className="text-primary">{key}</span>
                    <span className="text-navy-muted sm:text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 sm:p-12">
          <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">Security review for enterprise onboarding</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">For procurement and security review, use the actual Shyena deployment and contract as the source of truth. Security documentation, data-processing terms and environment-specific controls should be reviewed before production use.</p>
          <Button asChild size="lg" className="mt-7"><Link to="/contact">Discuss enterprise requirements <ArrowRight className="h-4 w-4" /></Link></Button>
        </div>
      </section>
    </>
  );
}
