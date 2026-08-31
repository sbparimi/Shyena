import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Check, CheckCircle2, Clock, MessageSquare, ShieldCheck, Sparkles, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CtaBand } from "@/components/site/cta-band";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Demo | Shyena" },
      { name: "description", content: "Book a Shyena working session and see a real AI assurance workflow executed against your agent with evidence-backed results." },
      { property: "og:title", content: "Contact & Demo | Shyena" },
      { property: "og:description", content: "See Shyena evaluate a real AI agent and produce evidence you can use in release decisions." },
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
  { icon: Sparkles, title: "A practical pilot path", description: "We define the smallest useful assurance scope for your team." },
];

const NEXT_STEPS = [
  { icon: Clock, title: "We reply within 1 business day", description: "A real person on the team reads every submission — no ticket queue." },
  { icon: MessageSquare, title: "A 30-minute working session", description: "We walk through your agent and the testing gaps that matter." },
  { icon: Sparkles, title: "A pilot against your real agent", description: "We run one real scenario and show you the actual assurance verdict." },
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
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      });
      if (!response.ok) {
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
      (window as unknown as { plausible?: (event: string) => void }).plausible?.("Demo Request Submitted");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="relative overflow-hidden bg-[#0a071d] text-white">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(139,92,246,.10)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.10)_1px,transparent_1px)] [background-size:64px_64px]" aria-hidden="true" />
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#7c3aed]/20 blur-3xl" aria-hidden="true" />
        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#f59804]/[.06] blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#a855f7]">Contact & demo</p>
              <h1 className="mt-5 text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">See the evidence.<br /><span className="text-[#a855f7]">Not the story.</span></h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#c9c4d8]">Tell us about your agent and what you are trying to catch before it reaches customers. The session is built around a real assurance workflow, not a slide deck.</p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
                <span className="rounded-full border border-[#514778] bg-[#15102d] px-4 py-2">Real agent journey</span>
                <span className="rounded-full border border-[#514778] bg-[#15102d] px-4 py-2">Evidence-backed verdict</span>
                <span className="rounded-full border border-[#514778] bg-[#15102d] px-4 py-2">Release-ready evidence</span>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-5 rounded-3xl bg-[#7c3aed]/15 blur-3xl" aria-hidden="true" />
              <div className="relative rounded-3xl border border-[#2b2350] bg-[#15102d] p-6 shadow-2xl sm:p-8">
                <div className="flex items-center justify-between border-b border-[#2b2350] pb-5">
                  <div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#f59804]">Working session</p><h2 className="mt-2 text-xl font-bold text-[#faf8ff]">What we demonstrate</h2></div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7c3aed]/15 text-[#a855f7]"><ShieldCheck className="h-5 w-5" /></span>
                </div>
                <div className="mt-6 space-y-3">
                  {DEMO_OUTCOMES.map((item, index) => { const Icon = item.icon; return <div key={item.title} className="flex gap-4 rounded-2xl border border-[#2b2350] bg-[#100b25] p-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#7c3aed]/15 text-[#a855f7]"><Icon className="h-4 w-4" /></span><div className="min-w-0 flex-1"><div className="flex items-center gap-2"><span className="font-mono text-[9px] tracking-[0.18em] text-[#f59804]">0{index + 1}</span><span className="text-sm font-semibold text-[#faf8ff]">{item.title}</span></div><p className="mt-1 text-xs leading-5 text-[#918aa8]">{item.description}</p></div><Check className="mt-1 h-4 w-4 shrink-0 text-emerald-300/80" /></div>; })}
                </div>
                <div className="mt-5 rounded-2xl border border-[#2b2350] bg-[#100b25] p-4 text-xs leading-5 text-[#a9a2bd]">Map the journey → execute the agent → evaluate evidence → make the release decision.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a071d]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="max-w-3xl"><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#f59804]">Request a demo</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-[#faf8ff] sm:text-4xl">Start with the AI system you need to assure.</h2><p className="mt-4 text-lg leading-relaxed text-[#c9c4d8]">Give us enough context to make the first session specific to your system, business journey and release risk.</p></div>
          <div id="request-demo" className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:gap-12">
            <div className="rounded-3xl border border-[#2b2350] bg-[#15102d] p-6 shadow-2xl sm:p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center py-16 text-center"><span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-300/10 text-emerald-300"><CheckCircle2 className="h-7 w-7" /></span><h2 className="mt-5 text-xl font-bold text-[#faf8ff]">Message sent</h2><p className="mt-2 max-w-sm text-sm leading-relaxed text-[#918aa8]">We will follow up at the email you entered within 1 business day.</p><Button className="mt-6" variant="outline" onClick={() => setStatus("idle")}>Send another message</Button></div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" aria-label="Request a Shyena demo">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2"><Label htmlFor="name" className="text-[#c9c4d8]">Name</Label><Input id="name" name="name" required placeholder="Jane Doe" className="border-[#514778] bg-[#100b25] text-[#faf8ff] placeholder:text-[#5f5875]" /></div>
                    <div className="space-y-2"><Label htmlFor="email" className="text-[#c9c4d8]">Work email</Label><Input id="email" name="email" type="email" required placeholder="jane@company.com" className="border-[#514778] bg-[#100b25] text-[#faf8ff] placeholder:text-[#5f5875]" /></div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2"><Label htmlFor="company" className="text-[#c9c4d8]">Company</Label><Input id="company" name="company" required placeholder="Acme Inc." className="border-[#514778] bg-[#100b25] text-[#faf8ff] placeholder:text-[#5f5875]" /></div>
                    <div className="space-y-2"><Label htmlFor="companySize" className="text-[#c9c4d8]">Company size</Label><Select name="companySize"><SelectTrigger id="companySize" className="border-[#514778] bg-[#100b25] text-[#faf8ff]"><SelectValue placeholder="Select size" /></SelectTrigger><SelectContent><SelectItem value="1-50">1–50</SelectItem><SelectItem value="51-200">51–200</SelectItem><SelectItem value="201-1000">201–1,000</SelectItem><SelectItem value="1000+">1,000+</SelectItem></SelectContent></Select></div>
                  </div>
                  <div className="space-y-2"><Label htmlFor="message" className="text-[#c9c4d8]">Message</Label><Textarea id="message" name="message" required rows={6} placeholder="Tell us about your agent, current testing approach and what you want to catch before release." className="border-[#514778] bg-[#100b25] text-[#faf8ff] placeholder:text-[#5f5875]" /></div>
                  {status === "error" && <p className="text-sm text-red-300" role="alert">Something went wrong sending that. Try again, or reach us another way.</p>}
                  <Button type="submit" size="lg" className="h-12 w-full" disabled={status === "submitting"}>{status === "submitting" ? "Sending…" : "Request a Demo"}<ArrowRight className="ml-2 h-4 w-4" /></Button>
                </form>
              )}
            </div>

            <div id="what-happens-next" className="lg:pt-2">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#f59804]">What happens next</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#faf8ff]">A working session, not a sales script.</h2>
              <div className="mt-8 space-y-4">
                {NEXT_STEPS.map((step, index) => { const Icon = step.icon; return <article key={step.title} className="rounded-2xl border border-[#2b2350] bg-[#15102d] p-5 sm:p-6"><div className="flex items-start gap-4"><span className="font-mono text-xs tracking-[0.15em] text-[#a855f7]">0{index + 1}</span><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#7c3aed]/15 text-[#a855f7]"><Icon className="h-4 w-4" /></span><div className="min-w-0 flex-1"><h3 className="text-base font-semibold text-[#faf8ff]">{step.title}</h3><p className="mt-2 text-sm leading-6 text-[#918aa8]">{step.description}</p></div></div></article>; })}
              </div>
              <div className="mt-5 rounded-2xl border border-[#2b2350] bg-[#15102d] p-6"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#a855f7]">The objective</p><p className="mt-3 text-sm leading-6 text-[#c9c4d8]">Leave the session knowing what Shyena would test, what evidence it would produce and where it would sit in your release workflow.</p></div>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
