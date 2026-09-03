import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Clock, Mail, MessageSquare, ShieldCheck, Target } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CtaBand } from "@/components/site/cta-band";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact & Demo | Shyena" }, { name: "description", content: "Talk to Shyena about assuring your AI agents with evidence-backed testing and release decisions." }, { property: "og:title", content: "Contact & Demo | Shyena" }, { property: "og:description", content: "Talk to Shyena about assuring your AI agents with evidence-backed testing and release decisions." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "https://shyena.eu/contact" }] }),
  component: ContactPage,
});

const NEXT_STEPS = [
  { icon: Target, title: "Understand your assurance need", description: "We identify the agent, business journey, release risk and evidence you need." },
  { icon: MessageSquare, title: "Run a focused working session", description: "We walk through a representative journey and show how Shyena evaluates it." },
  { icon: ShieldCheck, title: "Define the pilot", description: "We agree the smallest useful scope for your team and release workflow." },
];

const FIELD_CLASS = "h-12 rounded-none border-slate-300 bg-white text-slate-950 shadow-none placeholder:text-slate-400 focus-visible:ring-[#f6b800] focus-visible:border-slate-950";
const SELECT_CLASS = "h-12 rounded-none border-slate-300 bg-white text-slate-950 shadow-none focus:ring-[#f6b800]";
const LABEL_CLASS = "text-sm font-semibold text-slate-700";

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("submitting"); const form = event.currentTarget; const formData = new FormData(form);
    try {
      const response = await fetch("/api/contact", { method: "POST", body: JSON.stringify({ inquiryReason: formData.get("inquiryReason"), firstName: formData.get("firstName"), lastName: formData.get("lastName"), email: formData.get("email"), phone: formData.get("phone"), company: formData.get("company"), jobTitle: formData.get("jobTitle"), companySize: formData.get("companySize"), country: formData.get("country"), message: formData.get("message") }), headers: { "Content-Type": "application/json", Accept: "application/json" } });
      if (!response.ok) { setStatus("error"); return; } setStatus("success"); form.reset(); (window as unknown as { plausible?: (event: string) => void }).plausible?.("Demo Request Submitted");
    } catch { setStatus("error"); }
  }

  return (
    <div data-page="contact" className="bg-white text-slate-950">
      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-5xl">
            <div className="mb-7 border-l-4 border-[#f6b800] pl-4 font-mono text-xs font-bold uppercase tracking-[0.24em] text-slate-600">Contact & demo</div>
            <h1 className="font-[Sora] text-[clamp(4rem,8vw,8rem)] font-extrabold leading-[0.86] tracking-[-0.07em] text-slate-950">Let&apos;s talk.</h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">Tell us what you are building, what you need to assure, and where release risk is highest. We will use that context to make the first conversation specific to your AI system.</p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400"><span>NEXUS · Understand</span><span>VERA · Evaluate</span><span>CHAKRA · Defend</span></div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-6 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-10 lg:py-28">
          <aside className="lg:pt-2">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">Start a conversation</p>
            <h2 className="mt-5 font-[Sora] text-4xl font-extrabold leading-[0.95] tracking-[-0.045em] text-slate-950 sm:text-5xl">Bring a real assurance problem.</h2>
            <p className="mt-6 text-base leading-7 text-slate-600">A good first conversation starts with a real agent, journey or release concern. We can then show where NEXUS, VERA and CHAKRA fit into the assurance workflow.</p>
            <div className="mt-10 border-t border-slate-300">
              <div className="border-b border-slate-300 py-6"><div className="flex items-center gap-3"><Mail className="h-4 w-4 text-[#f6b800]" /><span className="font-semibold text-slate-950">Direct contact</span></div><p className="mt-2 text-sm leading-6 text-slate-500">Prefer email? Reach the Shyena team directly.</p><a className="mt-3 inline-block text-sm font-semibold text-slate-950 underline decoration-[#f6b800] decoration-2 underline-offset-4" href="mailto:contact@shyena.eu">contact@shyena.eu</a></div>
              <div className="py-6"><div className="flex items-center gap-3"><Clock className="h-4 w-4 text-[#f6b800]" /><span className="font-semibold text-slate-950">What to expect</span></div><p className="mt-2 text-sm leading-6 text-slate-500">We review the request, respond within one business day, and use the first session to focus on your actual assurance gap.</p></div>
            </div>
          </aside>

          <div className="border border-slate-300 bg-white p-6 sm:p-8 lg:p-10">
            <div className="border-b border-slate-300 pb-6"><p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#a87900]">Let&apos;s talk</p><h2 className="mt-3 text-2xl font-extrabold text-slate-950">Tell us how we can help.</h2><p className="mt-2 text-sm leading-6 text-slate-500">Share enough context for us to make the first session useful.</p></div>
            {status === "success" ? <div className="flex flex-col items-center py-16 text-center"><span className="flex h-14 w-14 items-center justify-center border border-[#f6b800] bg-[#f6b800] text-slate-950"><CheckCircle2 className="h-7 w-7" /></span><h2 className="mt-5 text-xl font-extrabold text-slate-950">Message sent</h2><p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-500">We will follow up at the email you entered within 1 business day.</p><Button className="mt-6 rounded-none border border-slate-950" variant="outline" onClick={() => setStatus("idle")}>Send another message</Button></div> : <form onSubmit={handleSubmit} className="mt-7 space-y-6" aria-label="Contact Shyena">
              <div className="grid gap-5 sm:grid-cols-2"><div className="space-y-2"><Label htmlFor="inquiryReason" className={LABEL_CLASS}>Inquiry reason</Label><Select name="inquiryReason"><SelectTrigger id="inquiryReason" className={SELECT_CLASS}><SelectValue placeholder="Select reason" /></SelectTrigger><SelectContent><SelectItem value="demo">Request a demo</SelectItem><SelectItem value="pilot">Discuss a pilot</SelectItem><SelectItem value="platform">Platform question</SelectItem><SelectItem value="partnership">Partnership</SelectItem><SelectItem value="other">Other</SelectItem></SelectContent></Select></div><div className="space-y-2"><Label htmlFor="company" className={LABEL_CLASS}>Company</Label><Input id="company" name="company" required placeholder="Company name" className={FIELD_CLASS} /></div></div>
              <div className="grid gap-5 sm:grid-cols-2"><div className="space-y-2"><Label htmlFor="firstName" className={LABEL_CLASS}>First name</Label><Input id="firstName" name="firstName" required placeholder="Jane" className={FIELD_CLASS} /></div><div className="space-y-2"><Label htmlFor="lastName" className={LABEL_CLASS}>Last name</Label><Input id="lastName" name="lastName" required placeholder="Doe" className={FIELD_CLASS} /></div></div>
              <div className="grid gap-5 sm:grid-cols-2"><div className="space-y-2"><Label htmlFor="email" className={LABEL_CLASS}>Work email</Label><Input id="email" name="email" type="email" required placeholder="jane@company.com" className={FIELD_CLASS} /></div><div className="space-y-2"><Label htmlFor="phone" className={LABEL_CLASS}>Phone <span className="font-normal text-slate-400">(optional)</span></Label><Input id="phone" name="phone" placeholder="+31 ..." className={FIELD_CLASS} /></div></div>
              <div className="grid gap-5 sm:grid-cols-2"><div className="space-y-2"><Label htmlFor="jobTitle" className={LABEL_CLASS}>Job title</Label><Input id="jobTitle" name="jobTitle" placeholder="Engineering / QA / Product" className={FIELD_CLASS} /></div><div className="space-y-2"><Label htmlFor="companySize" className={LABEL_CLASS}>Company size</Label><Select name="companySize"><SelectTrigger id="companySize" className={SELECT_CLASS}><SelectValue placeholder="Select size" /></SelectTrigger><SelectContent><SelectItem value="1-50">1–50</SelectItem><SelectItem value="51-200">51–200</SelectItem><SelectItem value="201-1000">201–1,000</SelectItem><SelectItem value="1000+">1,000+</SelectItem></SelectContent></Select></div></div>
              <div className="space-y-2"><Label htmlFor="country" className={LABEL_CLASS}>Country</Label><Input id="country" name="country" placeholder="Country of residence" className={FIELD_CLASS} /></div>
              <div className="space-y-2"><Label htmlFor="message" className={LABEL_CLASS}>Message</Label><Textarea id="message" name="message" required rows={6} placeholder="Tell us about your agent, journey or release risk." className="min-h-36 rounded-none border-slate-300 bg-white text-slate-950 shadow-none placeholder:text-slate-400 focus-visible:ring-[#f6b800] focus-visible:border-slate-950" /></div>
              {status === "error" && <p className="text-sm font-medium text-red-600" role="alert">Something went wrong sending that. Try again, or email contact@shyena.eu.</p>}
              <div className="border-t border-slate-300 pt-5"><p className="text-xs leading-5 text-slate-500">By submitting this form, you agree that Shyena may use the information provided to respond to your enquiry. We only use the details needed to handle your request.</p></div>
              <Button type="submit" size="lg" className="h-12 w-full rounded-none border border-[#f6b800] bg-[#f6b800] font-extrabold text-slate-950 shadow-none hover:bg-[#e9aa00]" disabled={status === "submitting"}>{status === "submitting" ? "Sending…" : "Submit"}<ArrowRight className="ml-2 h-4 w-4" /></Button>
            </form>}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-4xl"><p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">What happens next</p><h2 className="mt-5 font-[Sora] text-[clamp(3rem,5vw,5.5rem)] font-extrabold leading-[0.9] tracking-[-0.06em]">A focused path from conversation to evidence.</h2></div>
          <div className="mt-12 grid border-t border-slate-300 md:grid-cols-3">
            {NEXT_STEPS.map((step, index) => { const Icon = step.icon; return <article key={step.title} className="group border-b border-slate-300 py-8 md:border-b-0 md:border-r md:px-8 md:py-9 first:md:pl-0 last:md:border-r-0"><div className="flex items-center gap-4"><span className="font-mono text-xs tracking-[0.15em] text-slate-400">0{index + 1}</span><span className="flex h-11 w-11 items-center justify-center border border-[#f6b800] bg-[#f6b800] text-slate-950 transition-transform duration-200 group-hover:scale-105"><Icon className="h-5 w-5" /></span></div><h3 className="mt-7 text-xl font-extrabold tracking-tight text-slate-950">{step.title}</h3><div className="mt-3 h-1 w-8 bg-[#f6b800] transition-all duration-200 group-hover:w-14"/><p className="mt-4 text-sm leading-7 text-slate-600">{step.description}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-950">Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/></span></article>; })}
          </div>
        </div>
      </section>
      <CtaBand />
    </div>
  );
}
