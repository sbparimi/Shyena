/* eslint-disable prettier/prettier */
import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Check, CheckCircle2, Clock, MessageSquare, ShieldCheck, Sparkles, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CtaBand } from "@/components/site/cta-band";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Demo — Shyena" },
      {
        name: "description",
        content:
          "Book a Shyena demo and see a real AI assurance workflow executed against your agent with evidence-backed results.",
      },
      { property: "og:title", content: "Contact & Demo — Shyena" },
      {
        property: "og:description",
        content: "See Shyena evaluate a real AI agent and produce evidence you can use in release decisions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/contact" }],
  }),
  component: ContactPage,
});

const DEMO_OUTCOMES = [
  { icon: Target, title: "Your agent mapped", description: "We identify the journey, business goal and failure points that matter." },
  { icon: MessageSquare, title: "A real journey executed", description: "We run a representative conversation against the agent rather than a scripted transcript." },
  { icon: ShieldCheck, title: "Evidence-backed verdict", description: "You see quality, deterministic checks, execution integrity and the release decision together." },
  { icon: Sparkles, title: "A practical pilot path", description: "If there is a fit, we define the smallest useful assurance scope for your team." },
];

const NEXT_STEPS = [
  {
    icon: Clock,
    title: "We reply within 1 business day",
    description: "A real person on the team reads every submission — no ticket queue.",
  },
  {
    icon: MessageSquare,
    title: "A 30-minute working session",
    description: "We'll walk through your agent and where your current testing gaps are.",
  },
  {
    icon: Sparkles,
    title: "A pilot against your real agent",
    description: "We run one real scenario against your live agent and show you the actual verdict.",
  },
];

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          companySize: formData.get("companySize"),
          message: formData.get("message"),
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
      (window as unknown as { plausible?: (event: string) => void }).plausible?.(
        "Demo Request Submitted",
      );
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#09051b] text-white">
        <div className="absolute inset-0 bg-grid opacity-45" aria-hidden="true" />
        <div className="absolute inset-0 bg-mesh opacity-70" aria-hidden="true" />
        <div className="absolute -left-48 top-10 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" aria-hidden="true" />
        <div className="absolute -right-48 bottom-0 h-[32rem] w-[32rem] rounded-full bg-orange-500/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
          <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-white/45 sm:mb-14">
            <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-orange-400" /><span>Contact & demo</span><span className="text-white/20">/</span><span>AI assurance</span></div>
            <span className="hidden sm:block">NEXUS · VERA · CHAKRA</span>
          </div>
          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-violet-300/20 bg-violet-400/10 px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-violet-200">Request a working session</span>
              <h1 className="mt-7 text-[clamp(3.2rem,6.4vw,6.6rem)] font-semibold leading-[.94] tracking-[-.055em] text-white">See the evidence. <span className="text-gradient-brand">Not the story.</span></h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">Tell us about your agent and what you're trying to catch before it reaches customers. The session is built around a real assurance workflow, not a slide deck.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#request-demo" className="inline-flex h-12 items-center gap-2 rounded-full bg-violet-600 px-6 text-sm font-semibold text-white shadow-[0_16px_45px_-18px_rgba(124,58,237,.9)] transition hover:bg-violet-500">Request a Demo <ArrowRight className="h-4 w-4" /></a>
                <a href="#what-happens-next" className="inline-flex h-12 items-center rounded-full border border-white/15 bg-white/[.03] px-6 text-sm text-white/80 transition hover:bg-white/[.08] hover:text-white">What happens next</a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-6 rounded-[2rem] bg-violet-500/10 blur-2xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#100a29]/90 shadow-[0_30px_90px_-35px_rgba(124,58,237,.75)] backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 text-[10px] uppercase tracking-[0.2em] text-white/45"><span>Shyena · Demo flow</span><span className="text-orange-300">Live</span></div>
                <div className="p-5 sm:p-6">
                  <div className="mb-5 rounded-xl border border-white/10 bg-black/20 p-4"><div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-white/40"><span>Assurance workflow</span><span className="text-violet-200">Evidence first</span></div><div className="mt-4 flex items-center gap-2"><span className="h-1.5 flex-1 rounded-full bg-violet-500" /><span className="h-1.5 flex-1 rounded-full bg-violet-500/70" /><span className="h-1.5 flex-1 rounded-full bg-violet-500/45" /><span className="h-1.5 flex-1 rounded-full bg-white/10" /></div><p className="mt-4 text-sm leading-6 text-white/70">Map the journey → execute the agent → evaluate evidence → make the release decision.</p></div>
                  <div className="space-y-3">{DEMO_OUTCOMES.map((item, index) => { const Icon = item.icon; return <div key={item.title} className="flex gap-4 rounded-xl border border-white/10 bg-white/[.025] p-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-violet-300/20 bg-violet-400/10 text-violet-200"><Icon className="h-3.5 w-3.5" /></span><div className="min-w-0"><div className="flex items-baseline gap-2"><span className="font-mono text-[9px] tracking-[0.18em] text-orange-300">0{index + 1}</span><span className="text-sm font-semibold text-white">{item.title}</span></div><p className="mt-1 text-xs leading-5 text-white/45">{item.description}</p></div><Check className="ml-auto mt-1 h-4 w-4 shrink-0 text-emerald-300/80" /></div>; })}</div>
                </div>
                <div className="border-t border-white/10 bg-black/15 px-5 py-3 font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">Real journey → evidence → verdict</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0a071d]">
        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-end">
            <div><p className="section-kicker">What you get</p><h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-[-.035em] text-white sm:text-4xl">A working demonstration of the assurance path.</h2></div>
            <p className="max-w-md text-sm leading-6 text-white/45">The session is structured around your agent, your business journey and the evidence required to make an informed release decision.</p>
          </div>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {DEMO_OUTCOMES.map((item, index) => { const Icon = item.icon; return <article key={item.title} className="group flex flex-col bg-[#100a29] p-7 transition hover:bg-[#140d34] sm:p-8"><div className="flex items-center justify-between"><span className="font-mono text-[10px] tracking-[0.18em] text-orange-300">0{index + 1}</span><span className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-300/15 bg-violet-400/10 text-violet-200 transition group-hover:bg-violet-400/15"><Icon className="h-4 w-4" /></span></div><h3 className="mt-8 text-base font-semibold text-white">{item.title}</h3><p className="mt-3 text-sm leading-6 text-white/50">{item.description}</p></article>; })}
          </div>
        </div>
      </section>

      <section id="request-demo" className="relative overflow-hidden border-b border-white/10 bg-[#0d0822] py-20 sm:py-24">
        <div className="absolute inset-0 bg-grid opacity-25" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_.92fr] lg:gap-20">
            <div className="rounded-2xl border border-white/10 bg-[#100a29] p-7 shadow-[0_25px_80px_-40px_rgba(124,58,237,.55)] sm:p-9">
              {status === "success" ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-300/10 text-emerald-300"><CheckCircle2 className="h-7 w-7" /></span>
                  <h2 className="mt-5 text-xl font-bold text-white">Message sent</h2>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/50">Thanks — we'll follow up at the email you entered within 1 business day.</p>
                  <Button className="mt-6 rounded-full border-white/15 bg-white/[.04] text-white hover:bg-white/[.08]" variant="outline" onClick={() => setStatus("idle")}>Send another message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" aria-label="Request a Shyena demo">
                  <div className="mb-7"><p className="section-kicker">Request a demo</p><h2 className="mt-4 text-2xl font-semibold text-white">Tell us where the assurance gap is.</h2><p className="mt-2 text-sm leading-relaxed text-white/45">A few details help us make the first session specific to your system.</p></div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2"><Label htmlFor="name" className="text-white/70">Name</Label><Input id="name" name="name" required placeholder="Jane Doe" className="border-white/10 bg-white/[.03] text-white placeholder:text-white/25" /></div>
                    <div className="space-y-2"><Label htmlFor="email" className="text-white/70">Work email</Label><Input id="email" name="email" type="email" required placeholder="jane@company.com" className="border-white/10 bg-white/[.03] text-white placeholder:text-white/25" /></div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2"><Label htmlFor="company" className="text-white/70">Company</Label><Input id="company" name="company" required placeholder="Acme Inc." className="border-white/10 bg-white/[.03] text-white placeholder:text-white/25" /></div>
                    <div className="space-y-2"><Label htmlFor="companySize" className="text-white/70">Company size</Label><Select name="companySize"><SelectTrigger id="companySize" className="border-white/10 bg-white/[.03] text-white"><SelectValue placeholder="Select size" /></SelectTrigger><SelectContent><SelectItem value="1-50">1–50</SelectItem><SelectItem value="51-200">51–200</SelectItem><SelectItem value="201-1000">201–1,000</SelectItem><SelectItem value="1000+">1,000+</SelectItem></SelectContent></Select></div>
                  </div>
                  <div className="space-y-2"><Label htmlFor="message" className="text-white/70">Message</Label><Textarea id="message" name="message" required rows={5} placeholder="Tell us about your agent, current testing approach and what you want to catch before release." className="border-white/10 bg-white/[.03] text-white placeholder:text-white/25" /></div>
                  {status === "error" && <p className="text-sm text-red-300" role="alert">Something went wrong sending that — try again, or reach us another way.</p>}
                  <Button type="submit" size="lg" className="h-12 w-full rounded-full bg-violet-600 font-semibold text-white shadow-[0_16px_45px_-18px_rgba(124,58,237,.9)] hover:bg-violet-500" disabled={status === "submitting"}>{status === "submitting" ? "Sending…" : "Request a Demo"}<ArrowRight className="ml-2 h-4 w-4" /></Button>
                </form>
              )}
            </div>

            <div id="what-happens-next" className="pt-2 lg:pt-5">
              <p className="section-kicker">What happens next</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-.035em] text-white sm:text-4xl">A working session, not a sales script.</h2>
              <div className="mt-8 space-y-3">
                {NEXT_STEPS.map((step, index) => { const Icon = step.icon; return <article key={step.title} className="grid gap-4 rounded-2xl border border-white/10 bg-white/[.025] p-5 sm:grid-cols-[56px_1fr_auto] sm:items-center sm:p-6"><div className="flex items-center gap-3 sm:block"><span className="font-mono text-xs tracking-[0.15em] text-orange-300">0{index + 1}</span><span className="flex h-9 w-9 items-center justify-center rounded-lg border border-violet-300/15 bg-violet-400/10 text-violet-200 sm:mt-3"><Icon className="h-4 w-4" /></span></div><div><h3 className="text-base font-semibold text-white">{step.title}</h3><p className="mt-1 text-sm leading-6 text-white/45">{step.description}</p></div><ArrowRight className="hidden h-4 w-4 text-white/30 sm:block" aria-hidden="true" /></article>; })}
              </div>
              <div className="mt-6 rounded-2xl border border-orange-300/10 bg-orange-300/[.025] p-6"><div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-orange-300" /><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-orange-300">The objective</p></div><p className="mt-3 text-sm leading-6 text-white/55">Leave the session knowing exactly what Shyena would test, what evidence it would produce and where it would sit in your release workflow.</p></div>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
