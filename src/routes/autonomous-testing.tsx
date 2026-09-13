import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  CircleAlert,
  Database,
  GitBranch,
  Layers3,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";

export const Route = createFileRoute("/autonomous-testing")({
  head: () => ({
    meta: [
      { title: "Autonomous Quality Engineering | Shyena" },
      {
        name: "description",
        content:
          "Shyena connects software change to risk, testing, evidence and release decisions so engineering teams can release with confidence.",
      },
      { property: "og:title", content: "Autonomous Quality Engineering | Shyena" },
      {
        property: "og:description",
        content: "Turn software change into evidence-backed release confidence.",
      },
    ],
  }),
  component: AutonomousTestingPage,
});

const stack = ["Jira", "GitHub", "Playwright", "API testing", "CI/CD", "Logs & traces"];

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[.18em] text-[#a87900]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#ffb703]" />
      {children}
    </div>
  );
}

function ProblemRow({
  number,
  problem,
  consequence,
}: {
  number: string;
  problem: string;
  consequence: string;
}) {
  return (
    <div className="grid gap-4 border-t border-slate-300 py-7 sm:grid-cols-[64px_1fr_1fr] sm:items-start">
      <span className="font-mono text-[10px] font-bold tracking-[.14em] text-slate-400">{number}</span>
      <div className="font-[Sora] text-lg font-bold tracking-[-.025em] text-slate-950">{problem}</div>
      <div className="text-sm leading-6 text-slate-600">{consequence}</div>
    </div>
  );
}

function OperatingStep({
  number,
  title,
  description,
  icon: Icon,
}: {
  number: string;
  title: string;
  description: string;
  icon: typeof Search;
}) {
  return (
    <div className="group relative border-l border-slate-300 pl-6">
      <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-slate-400 transition-colors duration-300 group-hover:bg-[#ffb703]" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-mono text-[9px] font-bold tracking-[.16em] text-slate-400">{number}</div>
          <h3 className="mt-2 font-[Sora] text-lg font-bold tracking-[-.025em]">{title}</h3>
          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">{description}</p>
        </div>
        <Icon className="mt-1 h-5 w-5 shrink-0 text-slate-500 transition-colors group-hover:text-[#a87900]" />
      </div>
    </div>
  );
}

function ErpTesting() {
  const capabilities = [
    [Database, "Finance", "Close, billing, journals and controls"],
    [Target, "HCM", "Employee and workforce processes"],
    [Layers3, "Supply Chain", "Orders, inventory and fulfilment"],
    [Workflow, "Procurement", "Requisition-to-pay workflows"],
    [ShieldCheck, "Projects", "Project financials and governance"],
  ] as const;

  return (
    <section id="erp-testing" className="border-y border-slate-300 bg-[#f8fafc]">
      <div className="mx-auto max-w-[1240px] px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-20">
          <div>
            <Eyebrow>ERP testing</Eyebrow>
            <h2 className="font-[Sora] text-[clamp(2.5rem,4.4vw,4.6rem)] font-extrabold leading-[.92] tracking-[-.065em]">
              Oracle Fusion
              <br />
              <span className="text-slate-500">+ Claude AI.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              A dedicated ERP assurance capability for Oracle Fusion Cloud. Claude AI helps understand business processes and configuration, generate meaningful end-to-end scenarios and investigate complex failures.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#erp-testing"
                className="inline-flex h-11 items-center gap-2 border border-[#ffb703] bg-[#ffb703] px-5 text-xs font-extrabold uppercase text-slate-950 transition-colors hover:bg-[#e7a600]"
              >
                Explore ERP testing <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="border border-slate-300 bg-white p-5 sm:p-7">
            <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
              <div className="border border-slate-200 bg-slate-50 p-5">
                <div className="font-mono text-[10px] font-bold tracking-[.18em] text-slate-500">ORACLE</div>
                <div className="mt-2 font-[Sora] text-xl font-extrabold tracking-[-.03em] text-slate-950">Fusion Cloud</div>
                <p className="mt-2 text-xs leading-5 text-slate-600">Business processes, configuration and transactional data.</p>
              </div>
              <div className="mx-auto flex h-9 w-9 items-center justify-center border border-[#ffb703] bg-[#ffb703] text-slate-950">
                <span className="font-[Sora] text-sm font-extrabold">+</span>
              </div>
              <div className="border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-2 font-mono text-[10px] font-bold tracking-[.18em] text-slate-500">
                  <Sparkles className="h-3.5 w-3.5 text-[#a87900]" /> CLAUDE
                </div>
                <div className="mt-2 font-[Sora] text-xl font-extrabold tracking-[-.03em] text-slate-950">AI reasoning</div>
                <p className="mt-2 text-xs leading-5 text-slate-600">Scenario reasoning, analysis and failure investigation.</p>
              </div>
            </div>

            <div className="mt-5 grid gap-px border border-slate-300 bg-slate-300 sm:grid-cols-5">
              {capabilities.map(([Icon, title, description]) => (
                <div key={title} className="group bg-white p-4 transition-colors hover:bg-slate-50">
                  <Icon className="h-4 w-4 text-slate-500 transition-colors group-hover:text-[#a87900]" />
                  <div className="mt-4 text-xs font-extrabold text-slate-950">{title}</div>
                  <p className="mt-1 text-[10px] leading-4 text-slate-500">{description}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-4">
              {["Business-process aware", "Configuration driven", "End-to-end validation", "Audit-ready evidence"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-[10px] font-semibold text-slate-600">
                  <Check className="h-3.5 w-3.5 shrink-0 text-[#a87900]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReleaseDecision() {
  return (
    <div className="overflow-hidden border border-slate-300 bg-[#0b0920] shadow-[0_30px_80px_-50px_rgba(11,9,32,.7)]">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#ffb703]" />
          <span className="font-mono text-[9px] font-bold uppercase tracking-[.18em] text-white/60">Release decision</span>
        </div>
        <span className="font-mono text-[8px] uppercase tracking-[.14em] text-white/35">Change 4821</span>
      </div>

      <div className="grid lg:grid-cols-[.95fr_1.05fr]">
        <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
          <div className="font-mono text-[9px] font-bold uppercase tracking-[.18em] text-[#ffb703]">Change impact</div>
          <h3 className="mt-3 font-[Sora] text-xl font-bold tracking-[-.03em] text-white">Payment service updated</h3>
          <p className="mt-2 text-xs leading-5 text-white/45">Requirement, dependency and historical failure analysis identifies the assurance scope.</p>
          <div className="mt-7 grid grid-cols-2 gap-px border border-white/10 bg-white/10">
            {["12 requirements", "31 relevant tests", "8 critical journeys", "4 affected risks"].map((item) => (
              <div key={item} className="bg-[#0b0920] px-4 py-4 text-[10px] font-semibold text-white/65">{item}</div>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="font-mono text-[9px] font-bold uppercase tracking-[.18em] text-[#ffb703]">Requirement verification</div>
          <div className="mt-4 space-y-2">
            {[
              ["Authentication", "Verified", true],
              ["Payment authorization", "Verified", true],
              ["Payment retry", "Verified", true],
              ["Refund calculation", "Not satisfied", false],
            ].map(([name, status, ok]) => (
              <div key={String(name)} className="flex items-center justify-between border border-white/10 px-3 py-3">
                <span className="text-[10px] font-semibold text-white/70">{name}</span>
                <span className="flex items-center gap-1.5 font-mono text-[8px] font-bold uppercase text-white/55">
                  {ok ? <Check className="h-3 w-3 text-[#ffb703]" /> : <CircleAlert className="h-3 w-3 text-[#d8a54a]" />}
                  {String(status)}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-5 border-l-2 border-[#ffb703] bg-white/[.03] px-4 py-3">
            <div className="text-[10px] font-bold text-white/80">Product requirement not satisfied</div>
            <div className="mt-1 text-[10px] leading-5 text-white/40">Evidence indicates a pricing-service defect, not merely a failed automation step.</div>
          </div>
        </div>
      </div>

      <div className="grid border-t border-white/10 sm:grid-cols-[1fr_auto] sm:items-center">
        <div className="px-6 py-5 sm:px-8">
          <div className="font-mono text-[8px] font-bold uppercase tracking-[.16em] text-white/35">Why the release is blocked</div>
          <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-[9px] font-semibold text-white/50">
            <span>Evidence collected</span>
            <span>Requirement evaluated</span>
            <span>Failure classified</span>
            <span>Policy evaluated</span>
          </div>
        </div>
        <div className="border-t border-white/10 px-6 py-5 sm:border-l sm:border-t-0 sm:px-8">
          <div className="font-mono text-[8px] uppercase tracking-[.16em] text-white/35">Decision</div>
          <div className="mt-1 font-[Sora] text-2xl font-extrabold tracking-[-.04em] text-[#ffb703]">NO-GO</div>
        </div>
      </div>
    </div>
  );
}

function AutonomousTestingPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <style>{`
        .shyena-line{position:relative;overflow:hidden}
        .shyena-line::after{content:"";position:absolute;left:-30%;top:0;height:1px;width:30%;background:#ffb703;animation:shyena-scan 4s ease-in-out infinite}
        .shyena-step{transition:transform .3s ease,border-color .3s ease,box-shadow .3s ease}
        .shyena-step:hover{transform:translateY(-3px);border-color:#ffb703;box-shadow:0 18px 40px -28px rgba(15,23,42,.22)}
        @keyframes shyena-scan{0%{left:-30%;opacity:0}15%{opacity:1}55%{opacity:1}100%{left:100%;opacity:0}}
        @media(prefers-reduced-motion:reduce){.shyena-line::after{animation:none}.shyena-step{transition:none}.shyena-step:hover{transform:none}}
      `}</style>

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-14 sm:px-8 lg:px-10 lg:pb-20 lg:pt-20">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-20">
            <div>
              <Eyebrow>Autonomous quality engineering</Eyebrow>
              <h1 className="max-w-4xl font-[Sora] text-[clamp(3rem,6vw,6.2rem)] font-extrabold leading-[.9] tracking-[-.07em]">
                Release faster.
                <br />
                <span className="text-slate-500">With confidence.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Shyena turns every software change into a continuously verified release decision — autonomously. Connect change, risk, testing and evidence without replacing the tools your teams already use.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex h-12 items-center gap-2 border border-[#ffb703] bg-[#ffb703] px-7 text-sm font-extrabold uppercase text-slate-950 transition-colors hover:bg-[#e7a600]"
                >
                  Request a demo <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#system"
                  className="inline-flex h-12 items-center gap-2 border border-slate-400 bg-white px-7 text-sm font-semibold text-slate-950 transition-colors hover:border-slate-950"
                >
                  See how it works <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-8 grid max-w-2xl grid-cols-3 border-y border-slate-300 py-5">
                {[
                  ["Higher", "release velocity"],
                  ["Lower", "risk and defects"],
                  ["Evidence-backed", "decisions"],
                ].map(([value, label], index) => (
                  <div key={label} className={`${index > 0 ? "border-l border-slate-300 pl-4 sm:pl-6" : ""} pr-3`}>
                    <div className="font-[Sora] text-lg font-extrabold text-[#a87900]">{value}</div>
                    <div className="mt-1 text-[10px] font-semibold text-slate-500">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[330px] overflow-hidden border border-slate-300 bg-[#f8fafc] p-6 sm:p-8">
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#ffb703]/30" />
              <div className="absolute -right-2 top-0 h-72 w-px rotate-[24deg] bg-[#ffb703]/40" />
              <div className="relative flex h-full min-h-[280px] flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-[.18em] text-slate-400">The executive question</span>
                  <ShieldCheck className="h-5 w-5 text-[#a87900]" />
                </div>
                <div>
                  <div className="font-[Sora] text-[clamp(2rem,3vw,3rem)] font-extrabold leading-[.95] tracking-[-.055em]">“A test failed.”</div>
                  <div className="mt-2 font-[Sora] text-[clamp(2rem,3vw,3rem)] font-extrabold leading-[.95] tracking-[-.055em] text-slate-500">Should we stop?</div>
                  <p className="mt-6 max-w-md text-sm leading-6 text-slate-600">Shyena determines what the failure means for the requirement, the customer and the release — not just whether an automation step failed.</p>
                </div>
                <div className="flex items-center gap-3 font-mono text-[8px] font-bold uppercase tracking-[.15em] text-slate-400">
                  <span className="h-px w-12 bg-[#ffb703]" />
                  Evidence before decision
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="border-b border-slate-300 bg-[#f8fafc]">
        <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
            <div>
              <Eyebrow>The challenge</Eyebrow>
              <h2 className="font-[Sora] text-[clamp(2.4rem,4.2vw,4.2rem)] font-extrabold leading-[.92] tracking-[-.065em]">Software changes faster than testing can.</h2>
              <p className="mt-6 max-w-md text-sm leading-6 text-slate-600">More frequent releases, complex systems and AI-powered features make it harder to know what to test, what failed, why it failed and whether it is safe to release.</p>
            </div>
            <div>
              <ProblemRow number="01" problem="Change moves faster than regression suites." consequence="Teams cannot manually determine the right scope for every release, so they either test too much or accept blind spots." />
              <ProblemRow number="02" problem="Automation tells you that something failed — not why." consequence="Engineers spend valuable time separating application defects, test defects, data problems and environment failures." />
              <ProblemRow number="03" problem="Leadership still lacks evidence for the release decision." consequence="A dashboard of pass/fail results does not prove that the business requirement was actually satisfied." />
            </div>
          </div>
        </div>
      </section>

      <section id="system" className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 lg:px-10 lg:py-20">
          <div className="max-w-3xl">
            <Eyebrow>The Shyena approach</Eyebrow>
            <h2 className="font-[Sora] text-[clamp(2.5rem,4.6vw,4.6rem)] font-extrabold leading-[.9] tracking-[-.065em]">From change to confident release.</h2>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-600">An autonomous quality engineering system that connects requirements, tests, evidence and release governance around the work your teams already do.</p>
          </div>

          <div className="mt-12 grid gap-px border border-slate-300 bg-slate-300 md:grid-cols-5">
            {[
              ["01", "UNDERSTAND", "Requirements, code, dependencies", Search],
              ["02", "ASSESS", "Risk, impact and coverage", Target],
              ["03", "TEST", "Execute what matters", Workflow],
              ["04", "INVESTIGATE", "AI-driven RCA and validation", Layers3],
              ["05", "PROVE", "Evidence-backed release decision", ShieldCheck],
            ].map(([number, title, description, Icon]) => (
              <div key={String(number)} className="shyena-step bg-white p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] font-bold tracking-[.16em] text-slate-400">{String(number)}</span>
                  <Icon className="h-5 w-5 text-slate-500" />
                </div>
                <div className="mt-12 font-mono text-[9px] font-bold tracking-[.16em] text-slate-950">{String(title)}</div>
                <p className="mt-3 text-xs leading-5 text-slate-600">{String(description)}</p>
              </div>
            ))}
          </div>

          <div className="shyena-line mt-5 h-px bg-slate-300" />
          <div className="mt-4 flex flex-wrap justify-between gap-4 font-mono text-[8px] font-bold uppercase tracking-[.16em] text-slate-400">
            <span>Change intelligence</span>
            <span>Risk-based selection</span>
            <span>Evidence collection</span>
            <span>Forensic verification</span>
            <span>Release governance</span>
          </div>
        </div>
      </section>

      <ErpTesting />

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[.68fr_1.32fr] lg:items-end lg:gap-20">
            <div>
              <Eyebrow>Shyena in action</Eyebrow>
              <h2 className="font-[Sora] text-[clamp(2.4rem,4vw,4rem)] font-extrabold leading-[.92] tracking-[-.06em]">A real example.<br />A real decision.</h2>
              <p className="mt-5 max-w-md text-sm leading-6 text-slate-600">From a code change to a clear GO / NO-GO recommendation with the evidence needed to defend the decision.</p>
              <div className="mt-7 space-y-5 border-l border-slate-300 pl-6">
                {[
                  ["01", "Change detected", "Payment service updated"],
                  ["02", "Impact analysis", "12 requirements · 31 tests"],
                  ["03", "Testing", "28 passed · 3 failed"],
                  ["04", "Investigation", "AI analysis in progress"],
                  ["05", "Release decision", "NO-GO · policy breach"],
                ].map(([number, title, detail]) => (
                  <div key={number} className="relative">
                    <div className="absolute -left-[31px] top-0.5 flex h-2.5 w-2.5 items-center justify-center rounded-full border-2 border-white bg-slate-400" />
                    <div className="font-mono text-[9px] font-bold tracking-[.15em] text-slate-400">{number}</div>
                    <div className="mt-1 text-xs font-extrabold text-slate-950">{title}</div>
                    <div className="mt-0.5 text-[10px] text-slate-500">{detail}</div>
                  </div>
                ))}
              </div>
            </div>
            <ReleaseDecision />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-[#f8fafc]">
        <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <div>
              <Eyebrow>More than test results</Eyebrow>
              <h2 className="font-[Sora] text-[clamp(2.4rem,4vw,4.1rem)] font-extrabold leading-[.92] tracking-[-.06em]">Automation executes.<br /><span className="text-slate-500">Shyena reasons.</span></h2>
            </div>
            <div className="grid gap-0 border border-slate-300 bg-white sm:grid-cols-2">
              {[
                ["AI REASONING", "Understands requirements, assesses change impact, selects assurance and forms failure hypotheses."],
                ["DETERMINISTIC PROOF", "Rules, calculations, contracts and evidence checks provide reproducible verification."],
                ["EVIDENCE", "Browser, API, data, logs, traces and business events are correlated to the requirement being tested."],
                ["GOVERNANCE", "Policies determine how evidence becomes an auditable release recommendation."],
              ].map(([title, description], index) => (
                <div key={title} className={`${index % 2 === 0 ? "sm:border-r" : ""} border-b border-slate-300 p-6 last:border-b-0 sm:p-7 ${index >= 2 ? "sm:border-b-0" : ""}`}>
                  <div className="font-mono text-[9px] font-bold tracking-[.16em] text-[#a87900]">{title}</div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-[.65fr_1.35fr] lg:gap-24">
            <div>
              <Eyebrow>Works with what you already have</Eyebrow>
              <h2 className="font-[Sora] text-[clamp(2.3rem,4vw,4rem)] font-extrabold leading-[.92] tracking-[-.06em]">Keep the tools.<br /><span className="text-slate-500">Add the intelligence.</span></h2>
              <p className="mt-5 max-w-md text-sm leading-6 text-slate-600">Shyena does not require a replacement testing stack. It connects the systems that already contain requirements, code, automation and runtime evidence.</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <span key={item} className="border border-slate-300 bg-white px-3 py-2 font-mono text-[8px] font-bold uppercase tracking-[.12em] text-slate-500">{item}</span>
                ))}
              </div>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <OperatingStep number="01" title="Your requirements" description="Jira remains the source of truth for business intent, acceptance and priority." icon={Target} />
              <OperatingStep number="02" title="Your engineering" description="GitHub remains the source of truth for test contracts, automation and version history." icon={GitBranch} />
              <OperatingStep number="03" title="Your runtime" description="Existing execution engines and observability systems provide the evidence." icon={Workflow} />
              <OperatingStep number="04" title="Your decision" description="Shyena brings the signals together into traceable quality intelligence and release governance." icon={ShieldCheck} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-[#0b0920] text-white">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-5xl">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#ffb703]">The outcome</div>
            <h2 className="mt-5 font-[Sora] text-[clamp(2.7rem,5.5vw,5.7rem)] font-extrabold leading-[.9] tracking-[-.07em]">Move from “did the tests pass?”<br /><span className="text-white/35">to “is the release safe?”</span></h2>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/55">Shyena makes quality engineering autonomous without removing human accountability. AI reasons. Deterministic systems verify. Evidence proves. Policy governs. Leaders decide.</p>
            <Link to="/contact" className="mt-8 inline-flex h-12 items-center gap-2 border border-[#ffb703] bg-[#ffb703] px-6 text-sm font-extrabold text-slate-950 transition-colors hover:bg-[#e7a600]">Discuss your quality system <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
