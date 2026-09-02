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
    <div data-page="contact" className="reference-page-theme">
      <section className="relative overflow-hidden bg-[#0a071d] text-white">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(139,92,246,.10)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.10)_1px,transparent_1px)] [background-size:64px_64px]" aria-hidden="true" />
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#7c3aed]/20 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:py-32">
          <div className="max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#a855f7]">Contact & demo</p>
            <h1 className="mt-5 text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">Let&apos;s talk.</h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#c9c4d8]">Tell us what you are building, what you need to assure, and where release risk is highest. We will use that context to make the first conversation specific to your AI system.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#0a071d] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
          <aside className="lg:pt-2">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#f59804]">Start a conversation</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Bring a real assurance problem.</h2>
            <p className="mt-5 text-base leading-7 text-[#c9c4d8]">A good first conversation starts with a real agent, journey or release concern. We can then show where Nexus, Vera and Chakra fit into the assurance workflow.</p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-[#2b2350] bg-[#15102d] p-5">
                <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-[#a855f7]" /><span className="font-semibold text-[#faf8ff]">Direct contact</span></div>
                <p className="mt-2 text-sm text-[#918aa8]">Prefer email? Reach the Shyena team directly.</p>
                <a className="mt-3 inline-block text-sm font-semibold text-[#c4b5fd] hover:text-white" href="mailto:contact@shyena.eu">contact@shyena.eu</a>
              </div>
              <div className="rounded-2xl border border-[#2b2350] bg-[#15102d] p-5">
                <div className="flex items-center gap-3"><Clock className="h-4 w-4 text-[#f59804]" /><span className="font-semibold text-[#faf8ff]">What to expect</span></div>
                <p className="mt-2 text-sm leading-6 text-[#918aa8]">We review the request, respond within one business day, and use the first session to focus on your actual assurance gap.</p>
              </div>
            </div>
          </aside>

          <div className="rounded-3xl border border-[#2b2350] bg-[#15102d] p-6 shadow-2xl sm:p-8">
            <div className="border-b border-[#2b2350] pb-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#f59804]">Let&apos;s talk</p>
              <h2 className="mt-3 text-2xl font-bold text-[#faf8ff]">Tell us how we can help.</h2>
            </div>

            {status === "success" ? (
              <div className="flex flex-col items-center py-16 text-center"><span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-300/10 text-emerald-300"><CheckCircle2 className="h-7 w-7" /></span><h2 className="mt-5 text-xl font-bold text-[#faf8ff]">Message sent</h2><p className="mt-2 max-w-sm text-sm leading-relaxed text-[#918aa8]">We will follow up at the email you entered within 1 business day.</p><Button className="mt-6" variant="outline" onClick={() => setStatus("idle")}>Send another message</Button></div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-7 space-y-5" aria-label="Contact Shyena">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2"><Label htmlFor="inquiryReason" className="text-[#c9c4d8]">Inquiry reason</Label><Select name="inquiryReason"><SelectTrigger id="inquiryReason" className="border-[#514778] bg-[#100b25] text-[#faf8ff]"><SelectValue placeholder="Select reason" /></SelectTrigger><SelectContent><SelectItem value="demo">Request a demo</SelectItem><SelectItem value="pilot">Discuss a pilot</SelectItem><SelectItem value="platform">Platform question</SelectItem><SelectItem value="partnership">Partnership</SelectItem><SelectItem value="other">Other</SelectItem></SelectContent></Select></div>
                  <div className="space-y-2"><Label htmlFor="company" className="text-[#c9c4d8]">Company</Label><Input id="company" name="company" required placeholder="Company name" className="border-[#514778] bg-[#100b25] text-[#faf8ff] placeholder:text-[#5f5875]" /></div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2"><Label htmlFor="firstName" className="text-[#c9c4d8]">First name</Label><Input id="firstName" name="firstName" required placeholder="Jane" className="border-[#514778] bg-[#100b25] text-[#faf8ff] placeholder:text-[#5f5875]" /></div>
                  <div className="space-y-2"><Label htmlFor="lastName" className="text-[#c9c4d8]">Last name</Label><Input id="lastName" name="lastName" required placeholder="Doe" className="border-[#514778] bg-[#100b25] text-[#faf8ff] placeholder:text-[#5f5875]" /></div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2"><Label htmlFor="email" className="text-[#c9c4d8]">Work email</Label><Input id="email" name="email" type="email" required placeholder="jane@company.com" className="border-[#514778] bg-[#100b25] text-[#faf8ff] placeholder:text-[#5f5875]" /></div>
                  <div className="space-y-2"><Label htmlFor="phone" className="text-[#c9c4d8]">Phone</Label><Input id="phone" name="phone" placeholder="Optional" className="border-[#514778] bg-[#100b25] text-[#faf8ff] placeholder:text-[#5f5875]" /></div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2"><Label htmlFor="jobTitle" className="text-[#c9c4d8]">Job title</Label><Input id="jobTitle" name="jobTitle" placeholder="Engineering / QA / Product" className="border-[#514778] bg-[#100b25] text-[#faf8ff] placeholder:text-[#5f5875]" /></div>
                  <div className="space-y-2"><Label htmlFor="companySize" className="text-[#c9c4d8]">Company size</Label><Select name="companySize"><SelectTrigger id="companySize" className="border-[#514778] bg-[#100b25] text-[#faf8ff]"><SelectValue placeholder="Select size" /></SelectTrigger><SelectContent><SelectItem value="1-50">1–50</SelectItem><SelectItem value="51-200">51–200</SelectItem><SelectItem value="201-1000">201–1,000</SelectItem><SelectItem value="1000+">1,000+</SelectItem></SelectContent></Select></div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2"><Label htmlFor="country" className="text-[#c9c4d8]">Country</Label><Input id="country" name="country" placeholder="Country of residence" className="border-[#514778] bg-[#100b25] text-[#faf8ff] placeholder:text-[#5f5875]" /></div>
                  <div className="space-y-2"><Label htmlFor="message" className="text-[#c9c4d8]">Message</Label><Textarea id="message" name="message" required rows={5} placeholder="Tell us about your agent, journey or release risk." className="border-[#514778] bg-[#100b25] text-[#faf8ff] placeholder:text-[#5f5875]" /></div>
                </div>
                {status === "error" && <p className="text-sm text-red-300" role="alert">Something went wrong sending that. Try again, or email contact@shyena.eu.</p>}
                <div className="border-t border-[#2b2350] pt-5"><p className="text-xs leading-5 text-[#77708d]">By submitting this form, you agree that Shyena may use the information provided to respond to your enquiry. We only use the details needed to handle your request.</p></div>
                <Button type="submit" size="lg" className="h-12 w-full" disabled={status === "submitting"}>{status === "submitting" ? "Sending…" : "Submit"}<ArrowRight className="ml-2 h-4 w-4" /></Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-[#2b2350] bg-[#0a071d] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="max-w-3xl"><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#f59804]">What happens next</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">A focused path from conversation to evidence.</h2></div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {NEXT_STEPS.map((step, index) => { const Icon = step.icon; return <article key={step.title} className="rounded-2xl border border-[#2b2350] bg-[#15102d] p-6"><div className="flex items-center gap-3"><span className="font-mono text-xs tracking-[0.15em] text-[#a855f7]">0{index + 1}</span><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#7c3aed]/15 text-[#a855f7]"><Icon className="h-4 w-4" /></span></div><h3 className="mt-5 text-base font-semibold text-[#faf8ff]">{step.title}</h3><p className="mt-2 text-sm leading-6 text-[#918aa8]">{step.description}</p></article>; })}
          </div>
        </div>
      </section>
      <CtaBand />
    </div>
  );
}
