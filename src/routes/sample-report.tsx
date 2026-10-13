import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Download, FileText } from "lucide-react";
import {
  SAMPLE_FINDINGS,
  SAMPLE_GATE,
  SAMPLE_REMEDIATION,
  SAMPLE_RUN,
  SAMPLE_TRACE,
  type GateStatus,
} from "@/content/sample-rfq-run";

export const Route = createFileRoute("/sample-report")({
  head: () => ({
    meta: [
      { title: "Sample Assurance Report | Shyena" },
      {
        name: "description",
        content:
          "A synthetic Shyena assurance report: how one AI agent change is executed, evaluated, attacked and turned into an evidence-backed release decision.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.shyena.eu/sample-report" }],
  }),
  component: SampleReportPage,
});

const STATUS_STYLE: Record<GateStatus, string> = {
  pass: "text-emerald-300",
  review: "text-amber-300",
  fail: "text-red-300",
};

const SEVERITY_STYLE = {
  CRITICAL: "text-red-300",
  HIGH: "text-amber-300",
  MEDIUM: "text-[var(--warp-muted)]",
} as const;

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="border border-[var(--warp-border)] bg-[var(--warp-surface)] p-4">
      <div className="font-mono text-[11px] uppercase tracking-[.12em] text-[var(--warp-subtle)]">
        {label}
      </div>
      <div className="mt-2 text-2xl font-semibold text-[var(--warp-ink)]">{value}</div>
    </div>
  );
}

function SampleReportPage() {
  const { impact, outcome, adversarial, regression } = SAMPLE_RUN;
  return (
    <div className="min-h-screen bg-[var(--warp-canvas)] text-[var(--warp-ink)]">
      <section className="border-b border-[var(--warp-border)] bg-[var(--warp-surface-soft)]">
        <div className="mx-auto max-w-[1000px] px-5 py-16 sm:px-8 sm:py-20">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[.12em] text-[var(--warp-muted)]">
            <FileText className="h-4 w-4" aria-hidden="true" /> Sample assurance report
            <span className="border border-[var(--warp-border-strong)] px-2 py-1 text-[var(--warp-ink)]">
              {SAMPLE_RUN.label}
            </span>
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
            One agent change, from execution evidence to a release decision.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--warp-muted)]">
            This is the report behind the run you can watch on the{" "}
            <Link to="/demo" className="text-[var(--warp-accent-text)] underline">
              demo page
            </Link>
            : a {SAMPLE_RUN.scenario.toLowerCase()} changed in {SAMPLE_RUN.change}. The data is
            synthetic; no customer, production system or measured result is represented.
          </p>
          <dl className="mt-8 grid gap-x-8 gap-y-2 font-mono text-[12px] text-[var(--warp-muted)] sm:grid-cols-2">
            <div>
              <dt className="inline text-[var(--warp-subtle)]">Run </dt>
              <dd className="inline">{SAMPLE_RUN.runId}</dd>
            </div>
            <div>
              <dt className="inline text-[var(--warp-subtle)]">Environment </dt>
              <dd className="inline">{SAMPLE_RUN.environment}</dd>
            </div>
            <div>
              <dt className="inline text-[var(--warp-subtle)]">Transaction </dt>
              <dd className="inline">
                {SAMPLE_RUN.transaction.id} · {SAMPLE_RUN.transaction.summary}
              </dd>
            </div>
            <div>
              <dt className="inline text-[var(--warp-subtle)]">Business rule </dt>
              <dd className="inline">{SAMPLE_RUN.businessRule}</dd>
            </div>
          </dl>
        </div>
      </section>

      <main className="mx-auto max-w-[1000px] space-y-14 px-5 py-12 sm:px-8 sm:py-16">
        <section
          aria-labelledby="verdict-heading"
          className="border border-red-400/40 bg-red-500/10 p-6 sm:p-8"
        >
          <div className="font-mono text-xs uppercase tracking-[.12em] text-red-300">
            Release decision
          </div>
          <h2 id="verdict-heading" className="mt-3 text-3xl font-semibold text-[var(--warp-ink)]">
            {SAMPLE_RUN.verdict}
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-[var(--warp-muted)]">
            {SAMPLE_RUN.verdictReason} The semantic answer quality was good; the release is blocked
            because a deterministic business control failed and reproduced on replay.
          </p>
        </section>

        <section aria-labelledby="impact-heading">
          <h2 id="impact-heading" className="text-2xl font-semibold tracking-tight">
            1. What changed and what it touches
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-4">
            <Stat label="Changed files" value={impact.changedFiles} />
            <Stat label="System nodes" value={impact.systemNodes} />
            <Stat label="Journeys" value={impact.journeys} />
            <Stat label="Executable cases" value={impact.executableCases} />
          </div>
        </section>

        <section aria-labelledby="execution-heading">
          <h2 id="execution-heading" className="text-2xl font-semibold tracking-tight">
            2. Execution outcome
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Stat label="Pass" value={outcome.pass} />
            <Stat label="Review" value={outcome.review} />
            <Stat label="Fail" value={outcome.fail} />
          </div>
          <h3 className="mt-8 text-lg font-semibold">Trace of the failing journey</h3>
          <ol className="mt-4 divide-y divide-[var(--warp-border)] border border-[var(--warp-border)] font-mono text-[12px]">
            {SAMPLE_TRACE.map(([actor, event], index) => (
              <li key={`${actor}-${index}`} className="grid grid-cols-[80px_1fr] gap-3 px-4 py-2.5">
                <span className={actor === "POLICY" ? "text-red-300" : "text-[var(--warp-subtle)]"}>
                  {actor}
                </span>
                <span className={actor === "POLICY" ? "text-red-300" : "text-[var(--warp-muted)]"}>
                  {event}
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="findings-heading">
          <h2 id="findings-heading" className="text-2xl font-semibold tracking-tight">
            3. Findings ({SAMPLE_FINDINGS.length})
          </h2>
          <div className="mt-6 overflow-x-auto border border-[var(--warp-border)]">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead className="bg-[var(--warp-surface-soft)]">
                <tr>
                  {["ID", "Severity", "Finding", "Reproduced", "Action"].map((heading) => (
                    <th
                      key={heading}
                      scope="col"
                      className="border-b border-[var(--warp-border)] p-3 font-semibold"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SAMPLE_FINDINGS.map((finding) => (
                  <tr key={finding.id}>
                    <th
                      scope="row"
                      className="border-b border-[var(--warp-border)] p-3 font-mono font-medium"
                    >
                      {finding.id}
                    </th>
                    <td
                      className={`border-b border-[var(--warp-border)] p-3 font-mono text-[12px] ${SEVERITY_STYLE[finding.severity]}`}
                    >
                      {finding.severity}
                    </td>
                    <td className="border-b border-[var(--warp-border)] p-3">
                      <div className="font-medium text-[var(--warp-ink)]">{finding.title}</div>
                      <div className="mt-1 text-[var(--warp-muted)]">{finding.detail}</div>
                    </td>
                    <td className="border-b border-[var(--warp-border)] p-3 font-mono text-[12px] text-[var(--warp-muted)]">
                      {finding.reproduction}
                    </td>
                    <td className="border-b border-[var(--warp-border)] p-3 font-mono text-[12px] text-[var(--warp-muted)]">
                      {finding.action}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-6 text-[var(--warp-muted)]">
            Adversarial run: {adversarial.cases} cases, {adversarial.blocked} blocked,{" "}
            {adversarial.review} for review, {adversarial.failed} failed.
          </p>
        </section>

        <section aria-labelledby="gate-heading">
          <h2 id="gate-heading" className="text-2xl font-semibold tracking-tight">
            4. Release gate
          </h2>
          <ul className="mt-6 divide-y divide-[var(--warp-border)] border border-[var(--warp-border)]">
            {SAMPLE_GATE.map((row) => (
              <li
                key={row.label}
                className="flex flex-wrap justify-between gap-2 px-4 py-3 text-sm"
              >
                <span className="text-[var(--warp-ink)]">{row.label}</span>
                <span className={`font-mono text-[12px] ${STATUS_STYLE[row.status]}`}>
                  {row.result}
                </span>
              </li>
            ))}
          </ul>
          <h3 className="mt-8 text-lg font-semibold">Remediation loop</h3>
          <ol className="mt-4 list-decimal space-y-1 pl-6 text-[var(--warp-muted)]">
            {SAMPLE_REMEDIATION.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-[var(--warp-muted)]">
            Regression suite after the fix: {regression.casesBefore} → {regression.casesAfter}{" "}
            cases.
          </p>
        </section>

        <div className="flex flex-wrap gap-3">
          <a
            href="/api/sample-report-pdf"
            download="shyena-sample-assurance-report.pdf"
            className="warp-btn inline-flex min-h-11 items-center gap-2 bg-[var(--warp-lime)] px-4 text-[var(--warp-on-accent)]"
          >
            <Download className="h-4 w-4" aria-hidden="true" /> Download the PDF report
          </a>
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center gap-2 border border-[var(--warp-border-strong)] px-4 text-sm font-medium text-[var(--warp-ink)]"
          >
            Run this on your system <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            to="/docs/reporting"
            className="inline-flex min-h-11 items-center gap-2 px-3 text-sm font-medium text-[var(--warp-muted)]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Reporting documentation
          </Link>
        </div>
      </main>
    </div>
  );
}
