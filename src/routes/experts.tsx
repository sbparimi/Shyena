import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Search,
  SlidersHorizontal,
  ShieldCheck,
  Users,
  Workflow,
  X,
} from "lucide-react";
import { CtaLink } from "@/components/ui/cta-link";
import {
  getSampleCandidates,
  searchCandidates,
  submitHireRequest,
  type Candidate,
} from "@/lib/supabase";

const capabilities = [
  [
    "AI Evaluation Engineering",
    "Model evaluation, classification and prediction metrics, LLM and RAG quality, generated-output assessment, robustness and regression evaluation.",
  ],
  [
    "Agentic QA",
    "Model and pipeline testing, AI application behaviour, integrations, agent orchestration, recovery paths and business outcome validation.",
  ],
  [
    "AI Security",
    "Adversarial robustness, prompt injection, model abuse, data leakage, unsafe tool use and AI system security assurance.",
  ],
  [
    "AI Observability",
    "Tracing, evidence correlation, failure attribution, latency and production feedback loops.",
  ],
  [
    "Domain Assurance",
    "Payments, healthcare, CRM, ERP, customer service and other domain-specific business journeys.",
  ],
  [
    "Accessibility & Human Experience",
    "WCAG, assistive technology, voice journeys and accessibility validation across AI-enabled experiences.",
  ],
];

const assuranceFlow = [
  [
    "1",
    "System profile",
    "Shyena maps the AI system, risk surface, workflows and assurance requirements.",
  ],
  [
    "2",
    "Capability graph",
    "The platform translates unresolved assurance gaps into specific specialist capabilities.",
  ],
  [
    "3",
    "Scoped work",
    "A specialist receives a Shyena-generated assurance work package rather than an open-ended staffing brief.",
  ],
  [
    "4",
    "Evidence",
    "Execution results, findings, traces and specialist conclusions return to the same Shyena evidence graph.",
  ],
  [
    "5",
    "Continuous learning",
    "Validated findings become reusable evaluations, attacks or regression coverage.",
  ],
];

export const Route = createFileRoute("/experts")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://www.shyena.eu/experts" }],
    meta: [
      { title: "Shyena Assurance Expertise | AI Quality & Evaluation Specialists" },
      {
        name: "description",
        content:
          "A capability-driven network for AI assurance work generated and orchestrated by Shyena Assurance Cloud.",
      },
    ],
  }),
  component: ExpertsPage,
});

function CandidateTile({
  candidate,
  onHire,
}: {
  candidate: Candidate;
  onHire: (candidate: Candidate) => void;
}) {
  const status =
    candidate.availability_status === "available"
      ? candidate.available_from
        ? "Available"
        : "Availability on request"
      : candidate.availability_status === "soon"
        ? candidate.available_from
          ? "Available soon"
          : "Availability on request"
        : "Unavailable";
  const initials = candidate.full_name
    .split(" ")
    .map((x) => x[0])
    .slice(0, 2)
    .join("");
  return (
    <article className="group flex min-h-[390px] flex-col overflow-hidden rounded-2xl border border-[var(--warp-border)] bg-white shadow-[0_20px_55px_-45px_rgba(23,35,63,.55)] transition hover:-translate-y-1 hover:border-[var(--warp-border)]">
      <div className="h-1 bg-[var(--warp-lime)] text-[var(--warp-on-accent)]" />
      <div className="flex-1 p-5">
        <div className="flex items-start gap-3">
          {candidate.avatar_url ? (
            <img src={candidate.avatar_url} alt="" className="h-12 w-12 rounded-xl object-cover" />
          ) : (
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--warp-surface-soft)] font-bold text-white">
              {initials}
            </div>
          )}
          <div className="min-w-0">
            {candidate.is_sample && (
              <span className="mb-1 inline-block rounded-[4px] border border-[var(--warp-border-strong)] px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[.12em] text-[var(--warp-muted)]">
                Sample profile
              </span>
            )}
            <h3 className="truncate text-lg font-extrabold">{candidate.full_name}</h3>
            <p className="mt-0.5 line-clamp-2 text-xs font-semibold leading-5 text-[var(--warp-muted)]">
              {candidate.headline}
            </p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 text-[11px]">
          <div className="rounded-lg bg-[var(--warp-surface-soft)] p-2.5">
            <div className="font-mono text-[8px] uppercase tracking-[.12em] text-[var(--warp-muted)]">
              Location
            </div>
            <div className="mt-1 font-semibold">{candidate.location}</div>
          </div>
          <div className="rounded-lg bg-[var(--warp-surface-soft)] p-2.5">
            <div className="font-mono text-[8px] uppercase tracking-[.12em] text-[var(--warp-muted)]">
              Available
            </div>
            <div className="mt-1 font-semibold">
              {candidate.available_from
                ? new Date(candidate.available_from).toLocaleDateString(undefined, {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                : status}
            </div>
          </div>
        </div>
        {candidate.years_experience !== null && (
          <div className="mt-3 text-xs text-[var(--warp-muted)]">
            <span className="font-bold text-[var(--warp-ink)]">
              {candidate.years_experience}+ years
            </span>{" "}
            experience · {candidate.timezone ?? "Timezone not specified"}
          </div>
        )}
        <div className="mt-4 flex flex-wrap gap-1.5">
          <span className="rounded-full bg-[var(--warp-surface-soft)] px-2 py-1 text-[10px] font-bold text-white">
            AI & Data
          </span>
          <span className="rounded-full border border-[var(--warp-border-strong)]/30 bg-[var(--warp-surface-soft)] px-2 py-1 text-[10px] font-bold text-[var(--warp-accent-text)]">
            AI Evals
          </span>
          <span className="rounded-full border border-[var(--warp-border)] bg-[var(--warp-surface-soft)] px-2 py-1 text-[10px] font-semibold text-[var(--warp-muted)]">
            AI Engineering
          </span>
        </div>
        <div className="mt-3">
          <div className="font-mono text-[9px] font-bold uppercase tracking-[.14em] text-[var(--warp-accent-text)]">
            Core skills
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {candidate.core_skills.slice(0, 7).map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[var(--warp-border)] bg-[var(--warp-surface-soft)] px-2 py-1 text-[10px] font-semibold text-[var(--warp-muted)]"
              >
                {skill}
              </span>
            ))}
            {candidate.core_skills.length > 7 && (
              <span className="rounded-full bg-[var(--warp-surface-soft)] px-2 py-1 text-[10px] font-bold text-white">
                +{candidate.core_skills.length - 7}
              </span>
            )}
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-[var(--warp-muted)]">
          <span
            className={`h-2 w-2 rounded-full ${candidate.availability_status === "available" ? "bg-emerald-500" : candidate.availability_status === "soon" ? "bg-amber-500" : "bg-slate-400"}`}
          />
          {status}
          {candidate.remote_modes.length > 0 && (
            <span className="text-[var(--warp-muted)]">
              · {candidate.remote_modes.slice(0, 2).join(" / ")}
            </span>
          )}
        </div>
      </div>
      <div className="border-t border-[var(--warp-border)] p-4">
        {candidate.is_sample ? (
          <CtaLink to="/contact" className="h-10 w-full">
            Request a similar expert <ArrowRight className="h-3.5 w-3.5" />
          </CtaLink>
        ) : (
          <button
            onClick={() => onHire(candidate)}
            className="warp-btn inline-flex h-10 w-full items-center justify-center gap-2 px-4"
          >
            Hire me <ArrowRight className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
    </article>
  );
}

function HireModal({ candidate, onClose }: { candidate: Candidate; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const [state, setState] = useState<"idle" | "saving" | "done" | "error">("idle");
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("saving");
    try {
      await submitHireRequest({
        candidate_id: candidate.id,
        hiring_manager_name: form.name,
        company_name: form.company,
        work_email: form.email,
        message: form.message,
      });
      setState("done");
    } catch {
      setState("error");
    }
  }
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--warp-canvas)]/75 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 text-[var(--warp-ink)] shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-2 text-[var(--warp-muted)] hover:bg-[var(--warp-surface-soft)]"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        {state === "done" ? (
          <div className="py-8 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" />
            <h3 className="mt-4 text-2xl font-extrabold">Request received</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--warp-muted)]">
              The hiring request for {candidate.full_name} has been recorded.
            </p>
            <button
              onClick={onClose}
              className="mt-6 h-10 rounded-lg bg-[var(--warp-surface-soft)] px-5 text-sm font-bold text-white"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <div className="font-mono text-[9px] font-bold uppercase tracking-[.16em] text-[var(--warp-accent-text)]">
              HIRE ASSURANCE EXPERTISE
            </div>
            <h3 className="mt-2 text-2xl font-extrabold">Request {candidate.full_name}</h3>
            <p className="mt-2 text-sm text-[var(--warp-muted)]">{candidate.headline}</p>
            <div className="mt-5 grid gap-3">
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="h-11 rounded-lg border border-[var(--warp-border)] px-3 text-sm"
              />
              <input
                required
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="Company"
                className="h-11 rounded-lg border border-[var(--warp-border)] px-3 text-sm"
              />
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Work email"
                className="h-11 rounded-lg border border-[var(--warp-border)] px-3 text-sm"
              />
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="What assurance capability do you need?"
                rows={4}
                className="rounded-lg border border-[var(--warp-border)] p-3 text-sm"
              />
            </div>
            {state === "error" && (
              <p className="mt-3 text-xs font-semibold text-red-600">
                The request could not be submitted. Please try again.
              </p>
            )}
            <button
              disabled={state === "saving"}
              className="mt-5 h-11 w-full rounded-lg bg-[var(--warp-lime)] text-sm font-bold text-[var(--warp-on-accent)] disabled:opacity-50"
            >
              {state === "saving" ? "Submitting..." : "Send hiring request"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Marketplace() {
  const empty = { search: "", location: "", skill: "", domain: "", availableBy: "", remote: "" };
  const [filters, setFilters] = useState(empty),
    [draft, setDraft] = useState(empty),
    [candidates, setCandidates] = useState<Candidate[]>([]),
    [total, setTotal] = useState(0),
    [loading, setLoading] = useState(true),
    [error, setError] = useState(""),
    [hireCandidate, setHireCandidate] = useState<Candidate | null>(null);
  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const timeout = new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error("Candidate directory request timed out.")), 4000);
      });
      const rows = await Promise.race([
        searchCandidates({ ...filters, page: 1, pageSize: 24 }),
        timeout,
      ]);
      setCandidates(rows);
      setTotal(rows[0]?.total_count ?? 0);
    } catch {
      // Live directory slow or unreachable: show the labelled sample profiles, not an error.
      const samples = getSampleCandidates({ ...filters, page: 1, pageSize: 24 });
      setCandidates(samples);
      setTotal(samples[0]?.total_count ?? 0);
    } finally {
      setLoading(false);
    }
  }, [filters]);
  useEffect(() => {
    void load();
  }, [load]);
  const skillOptions = useMemo(
    () => Array.from(new Set(candidates.flatMap((c) => c.core_skills))).sort(),
    [candidates],
  );
  const domainOptions = useMemo(
    () => Array.from(new Set(candidates.flatMap((c) => c.domains))).sort(),
    [candidates],
  );
  return (
    <section className="border-y border-[var(--warp-border)] bg-[var(--warp-surface-soft)]">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[.18em] text-[var(--warp-accent-text)]">
              ASSURANCE EXPERTISE DIRECTORY
            </div>
            <h1 className="mt-3 text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">
              Find the capability your AI system needs.
            </h1>
            <p className="mt-4 text-base leading-7 text-[var(--warp-muted)]">
              Search published specialist profiles by capability, location, domain, work model and
              availability. Candidate resumes are stored as private PDF assets in Supabase Storage.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--warp-border)] bg-white px-4 py-3 text-right">
            <div className="font-mono text-[9px] uppercase tracking-[.12em] text-[var(--warp-muted)]">
              Profiles
            </div>
            <div className="mt-1 text-2xl font-extrabold">{total}</div>
          </div>
        </div>
        <div className="mt-8 rounded-2xl border border-[var(--warp-border)] bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="relative min-w-0 flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-[var(--warp-muted)]" />
              <label className="sr-only" htmlFor="expert-search">
                Search skills, title, domain, or technology
              </label>
              <input
                id="expert-search"
                value={draft.search}
                onChange={(e) => setDraft({ ...draft, search: e.target.value })}
                onKeyDown={(e) => e.key === "Enter" && setFilters(draft)}
                placeholder="Search skills, title, domain, technology..."
                className="h-10 w-full rounded-lg border border-[var(--warp-border)] pl-9 pr-3 text-sm outline-none focus:border-[var(--warp-border-strong)]"
              />
            </div>
            <button
              onClick={() => setFilters(draft)}
              className="warp-btn inline-flex h-10 items-center justify-center gap-2 px-4"
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
              Apply filters
            </button>
            <button
              onClick={() => {
                setDraft(empty);
                setFilters(empty);
              }}
              className="warp-btn inline-flex h-10 items-center justify-center px-4"
            >
              Reset
            </button>
          </div>
          <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            <label className="sr-only" htmlFor="expert-location">
              Location
            </label>
            <input
              id="expert-location"
              value={draft.location}
              onChange={(e) => setDraft({ ...draft, location: e.target.value })}
              placeholder="Location"
              className="h-10 rounded-lg border border-[var(--warp-border)] px-3 text-xs"
            />
            <label className="sr-only" htmlFor="expert-skill">
              Core skill
            </label>
            <select
              id="expert-skill"
              value={draft.skill}
              onChange={(e) => setDraft({ ...draft, skill: e.target.value })}
              className="h-10 rounded-lg border border-[var(--warp-border)] px-3 text-xs"
            >
              <option value="">Core skill</option>
              {skillOptions.map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
            <label className="sr-only" htmlFor="expert-domain">
              Domain
            </label>
            <select
              id="expert-domain"
              value={draft.domain}
              onChange={(e) => setDraft({ ...draft, domain: e.target.value })}
              className="h-10 rounded-lg border border-[var(--warp-border)] px-3 text-xs"
            >
              <option value="">Domain</option>
              {domainOptions.map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
            <label className="sr-only" htmlFor="expert-work-model">
              Work model
            </label>
            <select
              id="expert-work-model"
              value={draft.remote}
              onChange={(e) => setDraft({ ...draft, remote: e.target.value })}
              className="h-10 rounded-lg border border-[var(--warp-border)] px-3 text-xs"
            >
              <option value="">Work model</option>
              <option>Remote</option>
              <option>Hybrid</option>
              <option>On-site</option>
            </select>
            <label className="sr-only" htmlFor="expert-available-by">
              Available by
            </label>
            <input
              id="expert-available-by"
              type="date"
              value={draft.availableBy}
              onChange={(e) => setDraft({ ...draft, availableBy: e.target.value })}
              className="h-10 rounded-lg border border-[var(--warp-border)] px-3 text-xs"
            />
          </div>
        </div>
        {loading ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-[390px] animate-pulse rounded-2xl border border-[var(--warp-border)] bg-white"
              />
            ))}
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center text-sm font-semibold text-red-700">
            {error}
          </div>
        ) : candidates.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[var(--warp-border)] bg-white p-14 text-center">
            <Users className="mx-auto h-9 w-9 text-[var(--warp-muted)]" />
            <h3 className="mt-4 text-xl font-extrabold">No published specialists yet</h3>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[var(--warp-muted)]">
              Candidate profiles will appear here once they are added to the Shyena assurance
              network and marked published.
            </p>
          </div>
        ) : (
          <>
            {candidates.some((c) => c.is_sample) && (
              <p
                role="note"
                className="mb-4 rounded-[4px] border border-[var(--warp-border-strong)] p-4 text-sm leading-6 text-[var(--warp-muted)]"
              >
                These are illustrative sample profiles of fictional specialists, shown to
                demonstrate the capabilities the Shyena network covers. They are not real people and
                cannot be hired. To be matched with real experts for your use case,{" "}
                <Link to="/contact" className="font-semibold underline underline-offset-4">
                  contact Shyena
                </Link>
                .
              </p>
            )}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {candidates.map((c) => (
                <CandidateTile key={c.id} candidate={c} onHire={setHireCandidate} />
              ))}
            </div>
          </>
        )}
        {hireCandidate && (
          <HireModal candidate={hireCandidate} onClose={() => setHireCandidate(null)} />
        )}
      </div>
    </section>
  );
}

function ExpertsPage() {
  return (
    <div className="bg-white text-[var(--warp-ink)]">
      <Marketplace />
    </div>
  );
}
