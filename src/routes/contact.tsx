import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Clock, MessageSquare, ShieldCheck, Sparkles, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
          "Book a demo and watch Shyena evaluate a real conversation against your own agent.",
      },
      { property: "og:title", content: "Contact & Demo — Shyena" },
      { property: "og:description", content: "Book a demo of Shyena for your AI team." },
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
    description:
      "We run one real scenario against your live agent and show you the actual verdict.",
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
      <section className="relative overflow-hidden bg-lavender text-lavender-foreground">
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-4 pt-20 sm:px-8 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              Contact & demo
            </span>
            <h1 className="mt-6 text-5xl leading-[1.05] sm:text-7xl">See the evidence before you buy the story.</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Tell us about your agent and what you're trying to catch before it reaches customers. The demo is built around a real assurance workflow, not a slide deck.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-18">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DEMO_OUTCOMES.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-primary">0{index + 1}</span>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>
                  <h2 className="mt-5 text-base font-semibold">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-28 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="rounded-2xl border border-border bg-card p-7 shadow-card sm:p-9">
            {status === "success" ? (
              <div className="flex flex-col items-center py-12 text-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <CheckCircle2 className="h-7 w-7" />
                </span>
                <h2 className="mt-5 text-xl font-bold">Message sent</h2>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Thanks — we'll follow up at the email you entered within 1 business day.
                </p>
                <Button className="mt-6" variant="outline" onClick={() => setStatus("idle")}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" aria-label="Request a Shyena demo">
                <div className="mb-7">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Request a demo</p>
                  <h2 className="mt-3 text-2xl font-bold">Tell us where the assurance gap is.</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">A few details help us make the first session specific to your system.</p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" required placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Work email</Label>
                    <Input id="email" name="email" type="email" required placeholder="jane@company.com" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" required placeholder="Acme Inc." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="companySize">Company size</Label>
                    <Select name="companySize">
                      <SelectTrigger id="companySize">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-50">1–50</SelectItem>
                        <SelectItem value="51-200">51–200</SelectItem>
                        <SelectItem value="201-1000">201–1,000</SelectItem>
                        <SelectItem value="1000+">1,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" required rows={5} placeholder="Tell us about your agent, current testing approach and what you want to catch before release." />
                </div>

                {status === "error" && (
                  <p className="text-sm text-destructive" role="alert">
                    Something went wrong sending that — try again, or reach us another way.
                  </p>
                )}

                <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
                  {status === "submitting" ? "Sending…" : "Request a Demo"}
                </Button>
              </form>
            )}
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">What happens next</p>
            <h2 className="mt-3 text-2xl font-bold">A working session, not a sales script.</h2>
            <div className="mt-7 space-y-6">
              {NEXT_STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="flex gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Step {i + 1}</p>
                      <p className="mt-1 text-sm font-semibold text-foreground">{step.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-xl border border-primary/20 bg-primary/5 p-5">
              <p className="text-sm font-semibold text-foreground">The objective</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Leave the session knowing exactly what Shyena would test, what evidence it would produce and where it would sit in your release workflow.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
