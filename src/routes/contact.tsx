import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Clock, Mail, MessageSquare, ShieldCheck, Target } from "lucide-react";
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
      { name: "description", content: "Talk to Shyena about assuring your AI agents with evidence-backed testing and release decisions." },
      { property: "og:title", content: "Contact & Demo | Shyena" },
      { property: "og:description", content: "Talk to Shyena about assuring your AI agents with evidence-backed testing and release decisions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/contact" }],
  }),
  component: ContactPage,
});

const NEXT_STEPS = [
  { icon: Target, title: "Understand your assurance need", description: "We identify the agent, business journey, release risk and evidence you need." },
  { icon: MessageSquare, title: "Run a focused working session", description: "We walk through a representative journey and show how Shyena evaluates it." },
  { icon: ShieldCheck, title: "Define the pilot", description: "We agree the smallest useful scope for your team and release workflow." },
];

const FIELD_CLASS = "h-12 rounded-xl border-slate-300 bg-white text-slate-950 shadow-none placeholder:text-slate-400 focus-visible:ring-violet-500";
const SELECT_CLASS = "h-12 rounded-xl border-slate-300 bg-white text-slate-950 shadow-none focus:ring-violet-500";
const LABEL_CLASS = "text-sm font-semibold text-slate-700";

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
          inquiryReason: formData.get("inquiryReason"),
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          company: formData.get("company"),
          jobTitle: formData.get("jobTitle"),
          companySize: formData.get("companySize"),
          country: formData.get("country"),
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
    <div data-page="contact" className="reference-page-theme bg-white text-slate-950">
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#edf6ff]">
        <div className="pointer-events-none absolute -right-24 -top-28 h-[420px] w-[420px] rounded-full bg-violet-200/40 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[360px] w-[360px] rounded-full bg-orange-100/60 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:py-28">
          <div className="max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-violet-700">Contact & demo</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-[72px]">Let&apos;s talk.</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">Tell us what you are building, what you need to assure, and where release risk is highest. We will use that context to make the first conversation specific to your AI system.</p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              <span>NEXUS · Understand</span><span>VERA · Evaluate</span><span>CHAKRA · Defend</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:py-24">
          <aside className="lg:pt-3">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">Start a conversation</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Bring a real assurance problem.</h2>
            <p className="mt-5 text-base leading-7 text-slate-600">A good first conversation starts with a real agent, journey or release concern. We can then show where Nexus, Vera and Chakra fit into the assurance workflow.</p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-violet-600" /><span className="font-semibold text-slate-950">Direct contact</span></div>
                <p className="mt-2 text-sm leading-6 text-slate-500">Prefer email? Reach the Shyena team directly.</p>
                <a className="mt-3 inline-block text-sm font-semibold text-violet-700 hover:text-violet-900" href="mailto:contact@shyena.eu">contact@shyena.eu</a>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-3"><Clock className="h-4 w-4 text-orange-600" /><span className="font-semibold text-slate-950">What to expect</span></div>
                <p className="mt-2 text-sm leading-6 text-slate-500">We review the request, respond within one business day, and use the first session to focus on your actual assurance gap.</p>
              </div>
            </div>
          </aside>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_28px_70px_-40px_rgba(15,23,42,0.45)] sm:p-8 lg:p-9">
            <div className="border-b border-slate-200 pb-6">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">Let&apos;s talk</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950">Tell us how we can help.</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">Share enough context for us to make the first session useful.</p>
            </div>

            {status === "success" ? (
              <div className="flex flex-col items-center py-16 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"><CheckCircle2 className="h-7 w-7" /></span>
                <h2 className="mt-5 text-xl font-semibold text-slate-950">Message sent</h2>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-500">We will follow up at the email you entered within 1 business day.</p>
                <Button className="mt-6 rounded-full" variant="outline" onClick={() => setStatus("idle")}>Send another message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-7 space-y-6" aria-label="Contact Shyena">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2"><Label htmlFor="inquiryReason" className={LABEL_CLASS}>Inquiry reason</Label><Select name="inquiryReason"><SelectTrigger id="inquiryReason" className={SELECT_CLASS}><SelectValue placeholder="Select reason" /></SelectTrigger><SelectContent><SelectItem value="demo">Request a demo</SelectItem><SelectItem value="pilot">Discuss a pilot</SelectItem><SelectItem value="platform">Platform question</SelectItem><SelectItem value="partnership">Partnership</SelectItem><SelectItem value="other">Other</SelectItem></SelectContent></Select></div>
                  <div className="space-y-2"><Label htmlFor="company" className={LABEL_CLASS}>Company</Label><Input id="company" name="company" required placeholder="Company name" className={FIELD_CLASS} /></div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2"><Label htmlFor="firstName" className={LABEL_CLASS}>First name</Label><Input id="firstName" name="firstName" required placeholder="Jane" className={FIELD_CLASS} /></div>
                  <div className="space-y-2"><Label htmlFor="lastName" className={LABEL_CLASS}>Last name</Label><Input id="lastName" name="lastName" required placeholder="Doe" className={FIELD_CLASS} /></div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2"><Label htmlFor="email" className={LABEL_CLASS}>Work email</Label><Input id="email" name="email" type="email" required placeholder="jane@company.com" className={FIELD_CLASS} /></div>
                  <div className="space-y-2"><Label htmlFor="phone" className={LABEL_CLASS}>Phone <span className="font-normal text-slate-400">(optional)</span></Label><Input id="phone" name="phone" placeholder="+31 ..." className={FIELD_CLASS} /></div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2"><Label htmlFor="jobTitle" className={LABEL_CLASS}>Job title</Label><Input id="jobTitle" name="jobTitle" placeholder="Engineering / QA / Product" className={FIELD_CLASS} /></div>
                  <div className="space-y-2"><Label htmlFor="companySize" className={LABEL_CLASS}>Company size</Label><Select name="companySize"><SelectTrigger id="companySize" className={SELECT_CLASS}><SelectValue placeholder="Select size" /></SelectTrigger><SelectContent><SelectItem value="1-50">1–50</SelectItem><SelectItem value="51-200">51–200</SelectItem><SelectItem value="201-1000">201–1,000</SelectItem><SelectItem value="1000+">1,000+</SelectItem></SelectContent></Select></div>
                </div>
                <div className="space-y-2"><Label htmlFor="country" className={LABEL_CLASS}>Country</Label><Input id="country" name="country" placeholder="Country of residence" className={FIELD_CLASS} /></div>
                <div className="space-y-2"><Label htmlFor="message" className={LABEL_CLASS}>Message</Label><Textarea id="message" name="message" required rows={6} placeholder="Tell us about your agent, journey or release risk." className="min-h-36 rounded-xl border-slate-300 bg-white text-slate-950 shadow-none placeholder:text-slate-400 focus-visible:ring-violet-500" /></div>
                {status === "error" && <p className="text-sm font-medium text-red-600" role="alert">Something went wrong sending that. Try again, or email contact@shyena.eu.</p>}
                <div className="border-t border-slate-200 pt-5"><p className="text-xs leading-5 text-slate-500">By submitting this form, you agree that Shyena may use the information provided to respond to your enquiry. We only use the details needed to handle your request.</p></div>
                <Button type="submit" size="lg" className="h-12 w-full rounded-full bg-[#f6b800] font-extrabold text-slate-950 shadow-none hover:bg-[#e9aa00]" disabled={status === "submitting"}>{status === "submitting" ? "Sending…" : "Submit"}<ArrowRight className="ml-2 h-4 w-4" /></Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800 bg-[#0b0920] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
          <div className="max-w-3xl"><p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">What happens next</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">A focused path from conversation to evidence.</h2></div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {NEXT_STEPS.map((step, index) => { const Icon = step.icon; return <article key={step.title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"><div className="flex items-center gap-3"><span className="font-mono text-xs tracking-[0.15em] text-violet-300">0{index + 1}</span><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300"><Icon className="h-4 w-4" /></span></div><h3 className="mt-5 text-base font-semibold text-white">{step.title}</h3><p className="mt-2 text-sm leading-6 text-white/55">{step.description}</p></article>; })}
          </div>
        </div>
      </section>
      <CtaBand />
    </div>
  );
}
