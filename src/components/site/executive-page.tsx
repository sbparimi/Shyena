import { Link, useLocation } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { CtaAnchor, CtaLink } from "@/components/ui/cta-link";

export type ExecutivePageProps = {
  eyebrow: string;
  title: string;
  accent?: string;
  intro: string;
  primaryLabel: string;
  primaryHref?: "/contact" | "/nexus" | "/vera" | "/chakra";
  secondaryLabel?: string;
  secondaryHref?: string;
  audience?: string;
  capabilities: { title: string; body: string }[];
  workflow: { step: string; title: string; body: string }[];
  outcomeTitle: string;
  outcomes: { title: string; body: string }[];
  proofTitle?: string;
  proof?: { label: string; value: string }[];
  finalTitle: string;
  finalBody: string;
};

export function ExecutivePage({
  eyebrow,
  title,
  accent,
  intro,
  primaryLabel,
  primaryHref = "/contact",
  secondaryLabel = "See how it works",
  secondaryHref = "#how-it-works",
  audience = "AI agents · Enterprise applications · Conversational AI · Autonomous testing",
  capabilities,
  workflow,
  outcomeTitle,
  outcomes,
  proofTitle,
  proof,
  finalTitle,
  finalBody,
}: ExecutivePageProps) {
  const location = useLocation();
  const canonical = `https://www.shyena.eu${location.pathname || "/"}`;

  return (
    <>
      <link rel="canonical" href={canonical} />
      <main className="overflow-x-hidden bg-white text-[var(--warp-ink)]">
        <section className="border-b border-[var(--warp-border)] bg-white">
          <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:gap-14">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[.16em] text-[var(--warp-accent-text)]">
                  {eyebrow}
                </div>
                <h1 className="mt-4 max-w-3xl text-[clamp(2.8rem,6vw,5rem)] font-extrabold leading-[.96] tracking-[-.055em] text-[var(--warp-ink)]">
                  {title}{" "}
                  {accent && <span className="text-[var(--warp-accent-text)]">{accent}</span>}
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--warp-muted)]">{intro}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <CtaLink
                    to={primaryHref}
                    className="inline-flex h-11 items-center gap-2 rounded-lg bg-[var(--warp-lime)] px-5 text-sm font-semibold text-[var(--warp-on-accent)] transition hover:bg-[var(--warp-lime)]"
                  >
                    {primaryLabel}
                    <ArrowRight className="h-4 w-4" />
                  </CtaLink>
                  <CtaAnchor
                    href={secondaryHref}
                    className="inline-flex h-11 items-center gap-2 rounded-lg border border-[var(--warp-border)] bg-white px-5 text-sm font-semibold text-[var(--warp-ink)] transition hover:border-[var(--warp-border-strong)]"
                  >
                    {secondaryLabel}
                    <ArrowRight className="h-4 w-4" />
                  </CtaAnchor>
                </div>
                <div className="mt-7 border-t border-[var(--warp-border)] pt-4 text-xs font-medium text-[var(--warp-muted)]">
                  {audience}
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-[var(--warp-border)] bg-[var(--warp-surface-soft)] shadow-[0_30px_80px_-55px_rgba(23,33,63,.45)]">
                <div className="flex items-center gap-2 border-b border-[var(--warp-border)] bg-white px-5 py-3">
                  <span className="h-2 w-2 rounded-full bg-[var(--warp-lime)] text-[var(--warp-on-accent)]" />
                  <span className="font-mono text-[10px] uppercase tracking-[.15em] text-[var(--warp-muted)]">
                    Shyena · assurance workspace
                  </span>
                </div>
                <div className="p-5 sm:p-7">
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {capabilities.slice(0, 3).map((item, index) => (
                      <div
                        key={item.title}
                        className="rounded-lg border border-[var(--warp-border)] bg-white p-4 text-center"
                      >
                        <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-[var(--warp-surface-soft)] font-mono text-xs font-bold text-[var(--warp-accent-text)]">
                          0{index + 1}
                        </div>
                        <div className="mt-3 text-xs font-bold text-[var(--warp-ink)] sm:text-sm">
                          {item.title}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="my-4 flex justify-center">
                    <ArrowRight className="h-5 w-5 rotate-90 text-[var(--warp-accent-text)]" />
                  </div>
                  <div className="rounded-lg border border-[var(--warp-border)] bg-[var(--warp-surface-soft)] px-4 py-4 text-center">
                    <div className="text-[10px] font-bold uppercase tracking-[.15em] text-[var(--warp-accent-text)]">
                      Outcome
                    </div>
                    <div className="mt-2 text-lg font-extrabold text-[var(--warp-ink)] sm:text-xl">
                      Evidence-backed release decision
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 border-t border-[var(--warp-border)] bg-white px-5 py-4 text-xs text-[var(--warp-muted)]">
                  <CheckCircle2 className="h-4 w-4 text-[var(--warp-accent-text)]" />
                  Evidence remains linked to execution.
                </div>
              </div>
            </div>
          </div>
        </section>

        {proof && proof.length > 0 && (
          <section className="border-b border-[var(--warp-border)] bg-[var(--warp-surface-soft)]">
            <div className="mx-auto max-w-[1280px] px-5 py-10 sm:px-8 lg:px-10">
              <div className="mb-5 text-xs font-semibold uppercase tracking-[.16em] text-[var(--warp-accent-text)]">
                {proofTitle || "Built for production"}
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {proof.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-[var(--warp-border)] bg-white p-5"
                  >
                    <div className="text-[10px] font-semibold uppercase tracking-[.15em] text-[var(--warp-muted)]">
                      {item.label}
                    </div>
                    <div className="mt-2 text-base font-extrabold text-[var(--warp-ink)] sm:text-lg">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="bg-white">
          <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-8 border-b border-[var(--warp-border)] pb-8 lg:grid-cols-[1fr_420px] lg:items-end">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[.16em] text-[var(--warp-accent-text)]">
                  Platform capabilities
                </div>
                <h2 className="mt-4 max-w-4xl text-[clamp(2.2rem,5vw,4.2rem)] font-extrabold leading-[.98] tracking-[-.05em] text-[var(--warp-ink)]">
                  One platform. A clear quality outcome.
                </h2>
              </div>
              <p className="max-w-md text-base leading-7 text-[var(--warp-muted)]">
                Shyena turns system behaviour into evidence that engineering and business leaders
                can act on.
              </p>
            </div>
            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {capabilities.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[var(--warp-border)] bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-32px_rgba(23,33,63,.35)] sm:p-7"
                >
                  <div className="text-xs font-mono font-bold text-[var(--warp-accent-text)]">
                    0{index + 1}
                  </div>
                  <h3 className="mt-7 text-xl font-extrabold tracking-tight text-[var(--warp-ink)] sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--warp-muted)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="scroll-mt-20 border-y border-[var(--warp-border)] bg-[var(--warp-surface-soft)]"
        >
          <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[.16em] text-[var(--warp-accent-text)]">
                  How it works
                </div>
                <h2 className="mt-4 max-w-xl text-[clamp(2.2rem,5vw,4.4rem)] font-extrabold leading-[.95] tracking-[-.05em] text-[var(--warp-ink)]">
                  From intent to proof.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-[var(--warp-muted)]">
                  A single flow connects understanding, execution, evidence and the final decision.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {workflow.map((item) => (
                  <div
                    key={item.step}
                    className="rounded-xl border border-[var(--warp-border)] bg-white p-6"
                  >
                    <div className="text-xs font-mono font-bold text-[var(--warp-accent-text)]">
                      {item.step}
                    </div>
                    <h3 className="mt-3 text-lg font-extrabold text-[var(--warp-ink)] sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--warp-muted)]">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="mb-8">
              <div className="text-xs font-semibold uppercase tracking-[.16em] text-[var(--warp-accent-text)]">
                Business outcome
              </div>
              <h2 className="mt-4 max-w-4xl text-[clamp(2.2rem,5vw,4.4rem)] font-extrabold leading-[.95] tracking-[-.05em] text-[var(--warp-ink)]">
                {outcomeTitle}
              </h2>
            </div>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {outcomes.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[var(--warp-border)] bg-white p-6"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--warp-surface-soft)] text-[var(--warp-accent-text)]">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold text-[var(--warp-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--warp-muted)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--warp-border)] bg-[var(--warp-surface-soft)]">
          <div className="mx-auto max-w-[900px] px-5 py-16 text-center sm:px-8 lg:py-20">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[var(--warp-surface-soft)] text-[var(--warp-accent-text)]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h2 className="mx-auto mt-6 max-w-4xl text-[clamp(2.4rem,5.5vw,4.8rem)] font-extrabold leading-[.94] tracking-[-.06em] text-[var(--warp-ink)]">
              {finalTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--warp-muted)] sm:text-lg sm:leading-8">
              {finalBody}
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[var(--warp-lime)] px-7 text-sm font-semibold text-[var(--warp-on-accent)]"
            >
              Start a conversation <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
