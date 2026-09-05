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
  head: () => ({ meta: [{ title: "Contact & Demo | Shyena" }, { name: "description", content: "Talk to Shyena about assuring your AI agents with evidence-backed testing and release decisions." }], links: [{ rel: "canonical", href: "https://shyena.eu/contact" }] }),
  component: ContactPage,
});

const NEXT_STEPS = [
  { icon: Target, title: "Understand your assurance need", description: "We identify the agent, business journey, release risk and evidence you need." },
  { icon: MessageSquare, title: "Run a focused working session", description: "We walk through a representative journey and show how Shyena evaluates it." },
  { icon: ShieldCheck, title: "Define the pilot", description: "We agree the smallest useful scope for your team and release workflow." },
];

const FREE_EMAIL_DOMAINS = new Set(["gmail.com", "googlemail.com", "outlook.com", "hotmail.com", "hotmail.co.uk", "live.com", "live.co.uk", "msn.com", "yahoo.com", "yahoo.co.uk", "ymail.com", "rocketmail.com", "icloud.com", "me.com", "mac.com", "aol.com", "proton.me", "protonmail.com", "pm.me", "gmx.com", "gmx.net", "mail.com", "yandex.com", "yandex.ru", "zoho.com", "mail.ru", "qq.com", "163.com", "126.com"]);
const FIELD_CLASS = "h-12 rounded-xl border-slate-200 bg-white text-slate-950 shadow-sm transition-all duration-200 placeholder:text-slate-400 focus-visible:border-[#f6b800] focus-visible:ring-2 focus-visible:ring-[#f6b800]/20";
const SELECT_CLASS = "h-12 rounded-xl border-slate-200 bg-white text-slate-950 shadow-sm transition-all duration-200 focus:border-[#f6b800] focus:ring-2 focus:ring-[#f6b800]/20";
const LABEL_CLASS = "text-sm font-semibold text-slate-800";

function getEmailError(email: string) {
  const value = email.trim().toLowerCase();
  if (!value) return "Work email is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email address.";
  if (FREE_EMAIL_DOMAINS.has(value.split("@")[1] ?? "")) return "Use your company work email. Personal email providers are not accepted.";
  return "";
}

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageLength, setMessageLength] = useState(0);
  const [inquiryReason, setInquiryReason] = useState("");
  const [companySize, setCompanySize] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError("");
    const form = event.currentTarget; const formData = new FormData(form);
    const emailValidation = getEmailError(String(formData.get("email") ?? ""));
    if (emailValidation) { setEmailError(emailValidation); return; }
    setEmailError("");
    const requiredFields = ["inquiryReason", "company", "firstName", "lastName", "email", "phone", "jobTitle", "companySize", "country", "message"];
    if (requiredFields.some((field) => !String(formData.get(field) ?? "").trim())) { setError("Please complete every field before submitting."); return; }
    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", { method: "POST", body: JSON.stringify(Object.fromEntries(formData.entries())), headers: { "Content-Type": "application/json", Accept: "application/json" } });
      if (!response.ok) { const result = await response.json().catch(() => ({})) as { error?: string }; setError(result.error ?? "Something went wrong sending your message. Please try again."); setStatus("error"); return; }
      setStatus("success"); form.reset(); setInquiryReason(""); setCompanySize(""); setMessageLength(0);
      (window as unknown as { plausible?: (event: string) => void }).plausible?.("Demo Request Submitted");
    } catch { setError("Something went wrong sending your message. Please try again."); setStatus("error"); }
  }

  return (
    <div data-page="contact" className="overflow-hidden bg-white text-slate-950">
      <section className="relative border-b border-slate-200 bg-slate-950 text-white"><div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(246,184,0,0.18),transparent_30%)]" /><div className="relative mx-auto max-w-[1440px] px-6 py-16 sm:px-8 lg:px-10 lg:py-24"><div className="max-w-5xl"><div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-slate-300"><span className="h-2 w-2 rounded-full bg-[#f6b800]" />Contact & demo</div><h1 className="font-[Sora] text-[clamp(3.5rem,8vw,7.5rem)] font-extrabold leading-[0.88] tracking-[-0.07em]">Assure what<br /><span className="text-[#f6b800]">you release.</span></h1><p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">Bring a real AI agent, business journey or release concern. We will use the context you provide to make the first session specific to your system.</p><div className="mt-9 flex flex-wrap gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400"><span className="rounded-full border border-white/10 px-3 py-2">NEXUS · Understand</span><span className="rounded-full border border-white/10 px-3 py-2">VERA · Evaluate</span><span className="rounded-full border border-white/10 px-3 py-2">CHAKRA · Defend</span></div></div></div></section>

      <section className="bg-slate-50"><div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-14 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-10 lg:py-20">
        <aside className="lg:sticky lg:top-8 lg:self-start"><p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">Start a conversation</p><h2 className="mt-5 font-[Sora] text-4xl font-extrabold leading-[0.95] tracking-[-0.045em] text-slate-950 sm:text-5xl">A real assurance problem deserves a real working session.</h2><p className="mt-6 text-base leading-7 text-slate-600">Tell us enough about the system, risk and team so the first conversation starts with engineering context instead of a generic sales pitch.</p><div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-1"><div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-center gap-3"><Mail className="h-4 w-4 text-[#a87900]" /><span className="font-semibold">Direct contact</span></div><a className="mt-3 inline-block text-sm font-semibold underline decoration-[#f6b800] decoration-2 underline-offset-4" href="mailto:contact@shyena.eu">contact@shyena.eu</a></div><div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-center gap-3"><Clock className="h-4 w-4 text-[#a87900]" /><span className="font-semibold">Response</span></div><p className="mt-2 text-sm leading-6 text-slate-500">Every submission is reviewed by the Shyena team. We respond within one business day.</p></div></div></aside>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_24px_80px_-35px_rgba(15,23,42,0.35)] sm:p-8 lg:p-10"><div className="border-b border-slate-200 pb-7"><p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#a87900]">Tell us about your system</p><h2 className="mt-3 font-[Sora] text-2xl font-extrabold tracking-tight">Request a focused demo</h2><p className="mt-2 text-sm leading-6 text-slate-500">All fields are required. Use a company email so we can route the enquiry correctly.</p></div>
          {status === "success" ? <div className="flex flex-col items-center py-20 text-center"><span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f6b800] shadow-lg shadow-[#f6b800]/20"><CheckCircle2 className="h-8 w-8" /></span><h2 className="mt-6 font-[Sora] text-2xl font-extrabold">Request received</h2><p className="mt-3 max-w-md text-sm leading-7 text-slate-500">We will review your context and follow up at your work email within one business day.</p><Button className="mt-7 h-11 rounded-xl border border-slate-900" variant="outline" onClick={() => setStatus("idle")}>Send another enquiry</Button></div> : <form onSubmit={handleSubmit} className="mt-8 space-y-7" aria-label="Contact Shyena" noValidate>
            <div className="grid gap-5 sm:grid-cols-2"><div className="space-y-2"><Label htmlFor="inquiryReason" className={LABEL_CLASS}>What can we help with? <span className="text-[#a87900]">*</span></Label><Select name="inquiryReason" value={inquiryReason} onValueChange={setInquiryReason} required><SelectTrigger id="inquiryReason" className={SELECT_CLASS}><SelectValue placeholder="Select an enquiry type" /></SelectTrigger><SelectContent><SelectItem value="demo">Request a demo</SelectItem><SelectItem value="pilot">Discuss a pilot</SelectItem><SelectItem value="platform">Platform question</SelectItem><SelectItem value="partnership">Partnership</SelectItem><SelectItem value="other">Other</SelectItem></SelectContent></Select></div><div className="space-y-2"><Label htmlFor="company" className={LABEL_CLASS}>Company <span className="text-[#a87900]">*</span></Label><Input id="company" name="company" required placeholder="Company name" className={FIELD_CLASS} /></div></div>
            <div className="grid gap-5 sm:grid-cols-2"><div className="space-y-2"><Label htmlFor="firstName" className={LABEL_CLASS}>First name <span className="text-[#a87900]">*</span></Label><Input id="firstName" name="firstName" required autoComplete="given-name" placeholder="Jane" className={FIELD_CLASS} /></div><div className="space-y-2"><Label htmlFor="lastName" className={LABEL_CLASS}>Last name <span className="text-[#a87900]">*</span></Label><Input id="lastName" name="lastName" required autoComplete="family-name" placeholder="Doe" className={FIELD_CLASS} /></div></div>
            <div className="grid gap-5 sm:grid-cols-2"><div className="space-y-2"><Label htmlFor="email" className={LABEL_CLASS}>Work email <span className="text-[#a87900]">*</span></Label><Input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@company.com" className={`${FIELD_CLASS} ${emailError ? "border-red-400" : ""}`} onBlur={(event) => setEmailError(getEmailError(event.currentTarget.value))} onChange={() => emailError && setEmailError("")} aria-invalid={Boolean(emailError)} aria-describedby="email-help email-error" /><p id="email-help" className="text-xs text-slate-400">Company domains only. Gmail, Outlook, Yahoo and other personal providers are blocked.</p>{emailError && <p id="email-error" className="text-xs font-medium text-red-600" role="alert">{emailError}</p>}</div><div className="space-y-2"><Label htmlFor="phone" className={LABEL_CLASS}>Phone <span className="text-[#a87900]">*</span></Label><Input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="+31 20 123 4567" className={FIELD_CLASS} /></div></div>
            <div className="grid gap-5 sm:grid-cols-2"><div className="space-y-2"><Label htmlFor="jobTitle" className={LABEL_CLASS}>Job title <span className="text-[#a87900]">*</span></Label><Input id="jobTitle" name="jobTitle" required autoComplete="organization-title" placeholder="Engineering / QA / Product" className={FIELD_CLASS} /></div><div className="space-y-2"><Label htmlFor="companySize" className={LABEL_CLASS}>Company size <span className="text-[#a87900]">*</span></Label><Select name="companySize" value={companySize} onValueChange={setCompanySize} required><SelectTrigger id="companySize" className={SELECT_CLASS}><SelectValue placeholder="Select company size" /></SelectTrigger><SelectContent><SelectItem value="1-50">1–50</SelectItem><SelectItem value="51-200">51–200</SelectItem><SelectItem value="201-1000">201–1,000</SelectItem><SelectItem value="1000+">1,000+</SelectItem></SelectContent></Select></div></div>
            <div className="space-y-2"><Label htmlFor="country" className={LABEL_CLASS}>Country <span className="text-[#a87900]">*</span></Label><Input id="country" name="country" required autoComplete="country-name" placeholder="Country" className={FIELD_CLASS} /></div>
            <div className="space-y-2"><div className="flex items-center justify-between"><Label htmlFor="message" className={LABEL_CLASS}>Message <span className="text-[#a87900]">*</span></Label><span className="text-xs text-slate-400">{messageLength}/5000</span></div><Textarea id="message" name="message" required rows={6} maxLength={5000} placeholder="Tell us about your AI agent, business journey, release risk or testing challenge." className="min-h-40 rounded-xl border-slate-200 bg-white shadow-sm transition-all duration-200 placeholder:text-slate-400 focus-visible:border-[#f6b800] focus-visible:ring-2 focus-visible:ring-[#f6b800]/20" onChange={(event) => setMessageLength(event.currentTarget.value.length)} /></div>
            {error && <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700" role="alert">{error}</div>}
            <div className="border-t border-slate-200 pt-6"><p className="text-xs leading-5 text-slate-500">By submitting this form, you agree that Shyena may use the information provided to respond to your enquiry. We only use the details needed to handle your request.</p></div>
            <Button type="submit" size="lg" className="group h-13 w-full rounded-xl border border-[#f6b800] bg-[#f6b800] font-extrabold text-slate-950 shadow-lg shadow-[#f6b800]/15 transition-all hover:-translate-y-0.5 hover:bg-[#e9aa00]" disabled={status === "submitting"}>{status === "submitting" ? "Sending your request…" : "Request a demo"}<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Button><p className="text-center text-[11px] text-slate-400">We respond within one business day.</p>
          </form>}
        </div></div></section>

      <section className="border-y border-slate-200 bg-white"><div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 lg:px-10 lg:py-24"><div className="max-w-4xl"><p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">What happens next</p><h2 className="mt-5 font-[Sora] text-[clamp(3rem,5vw,5.5rem)] font-extrabold leading-[0.9] tracking-[-0.06em]">From conversation<br />to evidence.</h2></div><div className="mt-12 grid overflow-hidden rounded-2xl border border-slate-200 md:grid-cols-3">{NEXT_STEPS.map((step, index) => { const Icon = step.icon; return <article key={step.title} className="group border-b border-slate-200 p-7 last:border-b-0 md:border-b-0 md:border-r md:p-9 md:last:border-r-0"><div className="flex items-center gap-4"><span className="font-mono text-xs tracking-[0.15em] text-slate-400">0{index + 1}</span><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f6b800] text-slate-950 transition-transform duration-200 group-hover:scale-105"><Icon className="h-5 w-5" /></span></div><h3 className="mt-7 text-xl font-extrabold tracking-tight">{step.title}</h3><p className="mt-4 text-sm leading-7 text-slate-600">{step.description}</p></article>; })}</div></div></section>
      <CtaBand />
    </div>
  );
}
