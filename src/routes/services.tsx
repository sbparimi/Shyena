import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ClipboardList, Rocket, RefreshCw, Gauge, ShieldAlert, Puzzle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Professional Services — Shyena" },
      { name: "description", content: "Optional professional services for Shyena: implementation, pilots, training, managed assurance, red-teaming, custom development and bespoke framework adapters. These services are separate from the SaaS subscription." },
      { property: "og:title", content: "Professional Services — Shyena" },
      { property: "og:description", content: "Keep the SaaS platform predictable. Scope implementation and specialist engineering separately." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/services" }],
  }),
  component: ServicesPage,
});

const ENGAGEMENTS = [
  { icon: Gauge, title: "Evaluation implementation", description: "Configure Nexus and Vera around your priority agents, personas, quality pillars, evaluation contracts and release gates.", deliverables: ["Priority journey and persona design", "Custom metric or judge-rubric design where required", "CI/CD and release-gate integration"] },
  { icon: ShieldAlert, title: "Managed security assurance", description: "Run scoped Chakra campaigns against your real agent estate, including adversarial testing, evidence review and remediation guidance.", deliverables: ["Scoped campaign against selected agents", "Findings and evidence walkthrough", "Repeatable campaign definition for your team"] },
  { icon: RefreshCw, title: "Ongoing managed program", description: "For teams that want continuous specialist support: scheduled assurance, security campaigns, release reviews and an accountable point of contact.", deliverables: ["Scheduled evaluation and security runs", "Dedicated assurance contact", "Periodic assurance and risk review"] },
];

const PROCESS = [
  { icon: ClipboardList, step: "1", title: "Scope", description: "Define the agents, environments, assurance objectives and commercial boundaries." },
  { icon: Rocket, step: "2", title: "Implement", description: "Configure the platform with your team. Custom work is explicitly scoped rather than hidden in the SaaS subscription." },
  { icon: Puzzle, step: "3", title: "Handoff or operate", description: "Your team can operate the platform, or a separately contracted managed program can run alongside it." },
];

const NOT_SAAS = [
  "Pilot and proof-of-value engagements",
  "Training, workshops and enablement",
  "Custom development and bespoke reporting",
  "New framework, channel or platform adapters",
  "Dedicated engineering or managed programs",
];

function ServicesPage() {
  return <>
    <section className="relative overflow-hidden bg-lavender text-lavender-foreground"><div className="relative mx-auto w-full max-w-7xl px-5 pb-4 pt-20 sm:px-8 sm:pt-28"><div className="mx-auto max-w-3xl text-center"><span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-muted-foreground">Professional services</span><h1 className="mt-6 text-5xl leading-[1.05] sm:text-7xl">Keep the SaaS platform predictable. Scope specialist work separately.</h1><p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">Shyena is the recurring software platform. Implementation, training, custom engineering, pilots and managed assurance are optional professional services with their own scope and commercial agreement.</p><div className="mt-9 flex flex-wrap items-center justify-center gap-3"><Button asChild size="lg"><Link to="/contact">Discuss an engagement <ArrowRight className="h-4 w-4" /></Link></Button><Button asChild size="lg" variant="outline"><Link to="/pricing">View SaaS model</Link></Button></div></div></div></section>

    <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8"><div className="max-w-2xl"><p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Optional engagements</p><h2 className="mt-4 text-3xl font-bold sm:text-4xl">Three ways to add specialist support.</h2><p className="mt-4 text-muted-foreground">These services extend the platform; they do not change what the SaaS subscription means.</p></div><div className="mt-12 grid gap-6 lg:grid-cols-3">{ENGAGEMENTS.map((eng) => { const Icon = eng.icon; return <div key={eng.title} className="flex flex-col rounded-xl border border-border bg-card p-7 shadow-card"><span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span><h3 className="mt-5 text-lg font-semibold">{eng.title}</h3><p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{eng.description}</p><ul className="mt-5 space-y-2 border-t border-border pt-5">{eng.deliverables.map((d) => <li key={d} className="text-xs leading-relaxed text-muted-foreground">· {d}</li>)}</ul></div>; })}</div></section>

    <section className="bg-muted/40"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center"><div><p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Commercial boundary</p><h2 className="mt-4 text-3xl font-bold sm:text-4xl">What is deliberately outside the SaaS subscription?</h2><p className="mt-4 leading-relaxed text-muted-foreground">The boundary is intentional. A recurring platform contract should not quietly absorb one customer's bespoke engineering, training or operational requirements.</p></div><div className="rounded-2xl border border-border bg-card p-6"><ul className="space-y-4">{NOT_SAAS.map((item) => <li key={item} className="flex items-start gap-3"><span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" /><span className="text-sm leading-relaxed">{item}</span></li>)}</ul></div></div></section>

    <section className="bg-navy py-24"><div className="mx-auto w-full max-w-7xl px-5 sm:px-8"><div className="max-w-2xl"><p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">How it works</p><h2 className="mt-4 text-3xl font-bold text-navy-foreground sm:text-4xl">From scope to an operational assurance program.</h2></div><div className="mt-14 grid gap-6 lg:grid-cols-3">{PROCESS.map((p) => { const Icon = p.icon; return <div key={p.title} className="rounded-xl border border-navy-border bg-white/[0.03] p-6"><div className="flex items-center justify-between"><span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary"><Icon className="h-5 w-5" /></span><span className="font-mono text-xs text-navy-muted">Step {p.step}</span></div><h3 className="mt-5 text-base font-semibold text-navy-foreground">{p.title}</h3><p className="mt-2.5 text-sm leading-relaxed text-navy-muted">{p.description}</p></div>; })}</div></div></section>

    <section className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8"><div className="rounded-3xl border border-border bg-secondary/40 p-8 text-center sm:p-12"><h2 className="mx-auto max-w-xl text-3xl font-bold sm:text-4xl">Start with the platform. Add services only where they create value.</h2><p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Your order form can define the SaaS subscription, contracted assurance/security volumes and any separate professional services without mixing the three.</p><Button asChild size="lg" className="mt-8"><Link to="/contact">Talk to Sales <ArrowRight className="h-4 w-4" /></Link></Button></div></section>
  </>;
}
