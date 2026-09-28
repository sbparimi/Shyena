import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

const SITE = "https://www.shyena.eu";

export const Route = createFileRoute("/govern")({
  head: () => ({
    links: [{ rel: "canonical", href: `${SITE}/govern` }],
    meta: [
      { title: "Govern | AI Governance, EU AI Act & ISO 42001 | Shyena" },
      { name: "description", content: "Turn AI evaluation evidence into governance evidence mapped to the EU AI Act, ISO/IEC 42001 and AI assurance controls." },
      { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
      { property: "og:title", content: "Govern | AI Governance, EU AI Act & ISO 42001 | Shyena" },
      { property: "og:description", content: "AI governance evidence mapped to the EU AI Act and ISO/IEC 42001." },
      { property: "og:type", content: "website" }, { property: "og:site_name", content: "Shyena" },
      { property: "og:url", content: `${SITE}/govern` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Govern | AI Governance, EU AI Act & ISO 42001 | Shyena" },
      { name: "twitter:description", content: "Turn AI evaluation evidence into governance evidence." },
    ],
  }),
  component: GovernPage,
});

const requirements = [
  "EU AI Act Art. 50 transparency",
  "Risk management — Art. 9",
  "Data governance — Art. 10",
  "Technical documentation — Art. 11",
  "Record-keeping / logging — Art. 12",
  "Transparency to deployers — Art. 13",
  "Human oversight — Art. 14",
  "Accuracy, robustness and cybersecurity — Art. 15",
  "ISO/IEC 42001 AI management system controls",
  "Accessibility of AI chat interfaces — WCAG 2.2 AA / European Accessibility Act",
];

function GovernPage() {
  return (
    <main className="overflow-hidden bg-white text-[#17213f]">
      <section className="border-b border-[#e6e8ed] bg-[#07101f] text-white">
        <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-5xl">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#f18a32]">Govern · Prove</div>
            <h1 className="mt-5 font-[Sora] text-[clamp(3rem,6vw,6rem)] font-extrabold leading-[.9] tracking-[-.065em]">Turn AI test evidence into governance evidence.</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">Shyena maps every evaluation result, trace and finding to the obligations and controls your auditors, risk and compliance teams care about.</p>
            <Link to="/contact" className="mt-9 inline-flex h-12 items-center gap-2 rounded-lg bg-[#e87512] px-6 text-sm font-semibold text-white">Book an AI Act readiness call <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e6e8ed] bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["2 August 2026", "Transparency obligations such as Article 50 apply from this date."],
              ["2 December 2027", "High-risk obligations for Annex III systems apply from this date under the amended timeline."],
              ["2 August 2028", "High-risk obligations for AI systems covered by Annex I apply from this date under the amended timeline."],
            ].map(([date,body])=><article key={date} className="rounded-2xl border border-[#e1e4e9] bg-[#fafbfc] p-7"><div className="font-[Sora] text-2xl font-extrabold">{date}</div><p className="mt-3 text-sm leading-6 text-[#69707d]">{body}</p></article>)}
          </div>
          <p className="mt-5 text-xs leading-5 text-[#7a8290]">Timeline reflects Regulation (EU) 2026/1744 and the current EU AI Act application dates. Specific obligations depend on the AI system's classification and role.</p>
        </div>
      </section>

      <section className="border-b border-[#e6e8ed] bg-white"><div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="max-w-3xl"><div className="text-sm font-semibold text-[#e87512]">Illustrative evidence map</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em]">Requirement → evidence → status.</h2></div><div className="mt-8 overflow-x-auto rounded-2xl border border-[#e1e4e9]"><table className="w-full min-w-[650px] text-left text-sm"><thead className="bg-[#fafbfc] text-xs uppercase tracking-[.12em] text-[#69707d]"><tr><th className="px-5 py-4">Requirement</th><th className="px-5 py-4">Evidence</th><th className="px-5 py-4">Status</th></tr></thead><tbody>{[["AI disclosure","Conversation trace","OPEN"],["Release control","Evaluation run","PASS"],["Security control","Attack evidence","REVIEW"]].map(r=><tr key={r[0]} className="border-t border-[#e8eaee]"><td className="px-5 py-4 font-semibold">{r[0]}</td><td className="px-5 py-4 text-[#69707d]">{r[1]}</td><td className="px-5 py-4 text-[#69707d]">{r[2]}</td></tr>)}</tbody></table></div><div className="mt-3 text-xs text-[#8b929d]">Illustrative only — synthetic evidence, not a compliance assessment.</div></div></section>

      <section className="bg-[#fafbfc]"><div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="max-w-3xl"><div className="text-sm font-semibold text-[#e87512]">How a governance engagement runs</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em]">Classify → evaluate → map → re-run.</h2></div><div className="mt-9 grid gap-3 md:grid-cols-4">{[["01","Classify","Define the system, role and relevant obligations."],["02","Evaluate","Run representative journeys and technical controls."],["03","Map evidence","Connect findings and traces to requirements and controls."],["04","Re-run each release","Preserve the evidence history as the system changes."]].map(([n,t,b])=><div key={n} className="rounded-xl border border-[#e1e4e9] bg-white p-5"><span className="font-mono text-[9px] text-[#e87512]">{n}</span><h3 className="mt-4 font-bold">{t}</h3><p className="mt-2 text-sm leading-6 text-[#69707d]">{b}</p></div>)}</div></div></section>

      <section className="bg-[#fafbfc]">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="max-w-3xl"><div className="text-sm font-semibold text-[#e87512]">What Shyena maps evidence to</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em]">A traceable evidence layer for governance work.</h2></div>
          <div className="mt-10 grid gap-3 md:grid-cols-2">{requirements.map(item=><div key={item} className="flex gap-3 rounded-xl border border-[#e1e4e9] bg-white p-5 text-sm leading-6"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#e87512]" />{item}</div>)}</div>
        </div>
      </section>

      <section className="border-y border-[#e6e8ed] bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="max-w-3xl"><div className="text-sm font-semibold text-[#e87512]">Deliverables</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em]">Evidence that can be reconstructed.</h2></div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">{[
            ["Evidence pack per AI system", "Test scope, results, traces, findings, residual risks and release decision."],
            ["Requirement-to-evidence matrix", "A traceability view connecting governance requirements to the evidence produced by evaluation."],
            ["Re-run history", "A dated history of evaluations and evidence used across releases and audit preparation."],
          ].map(([title,body])=><article key={title} className="rounded-2xl border border-[#e1e4e9] bg-[#fafbfc] p-7"><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#69707d]">{body}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-[#17213f] text-white">
        <div className="mx-auto max-w-[1000px] px-5 py-16 text-center sm:px-8 lg:py-20">
          <p className="text-sm leading-6 text-white/55">Shyena provides technical evaluation and evidence. It is not legal advice and not a certification body.</p>
          <Link to="/contact" className="mt-7 inline-flex h-11 items-center gap-2 rounded-lg bg-[#e87512] px-5 text-sm font-semibold text-white">Book an AI Act readiness call <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  );
}
