import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Calendar, CheckCircle2, Clock, MessageSquare, Sparkles } from "lucide-react";
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
        content: "Book a demo and watch Shyena evaluate a real conversation against your own agent.",
      },
      { property: "og:title", content: "Contact & Demo — Shyena" },
      { property: "og:description", content: "Book a demo of Shyena for your conversational AI team." },
    ],
  }),
  component: ContactPage,
});

// TODO: replace with your real Formspree form ID (sign up at https://formspree.io,
// create a form, and swap the placeholder below) before this goes live.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const NEXT_STEPS = [
  {
    icon: Clock,
    title: "We reply within 1 business day",
    description: "A real person on the team reads every submission — no ticket queue.",
  },
  {
    icon: MessageSquare,
    title: "A 30-minute call",
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
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 -top-40 h-[420px] bg-[radial-gradient(60%_60%_at_50%_50%,var(--color-primary)_0%,transparent_70%)] opacity-[0.13]" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-4 pt-20 sm:px-8 sm:pt-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              Contact
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-6xl">Let's talk</h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Tell us about your agent and what you're trying to catch before it reaches customers.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-28 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Form */}
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
              <form onSubmit={handleSubmit} className="space-y-5">
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
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your agent and what you want to catch before it reaches customers."
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-destructive">
                    Something went wrong sending that — try again, or reach us another way below.
                  </p>
                )}

                <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
                  {status === "submitting" ? "Sending…" : "Request a Demo"}
                </Button>
              </form>
            )}
          </div>

          {/* Info panel */}
          <div>
            <h2 className="text-xl font-bold">What happens next</h2>
            <div className="mt-6 space-y-6">
              {NEXT_STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="flex gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        Step {i + 1}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-foreground">{step.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-xl border border-border bg-secondary/40 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Calendar className="h-4 w-4 text-primary" />
                Prefer to just grab time?
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Calendar booking is coming soon — for now, the form above is the fastest way to
                reach us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
