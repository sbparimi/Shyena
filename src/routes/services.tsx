import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

const SITE = "https://www.shyena.eu";

export const Route = createFileRoute("/services")({
  head: () => ({
    links: [{ rel: "canonical", href: `${SITE}/services` }],
    meta: [
      { title: "AI Assurance & Governance Services | Shyena" },
      { name: "description", content: "AI assurance, AI governance, EU AI Act, ISO 42001 and AI evaluation services for production AI systems." },
      { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
      { property: "og:title", content: "AI Assurance & Governance Services | Shyena" },
      { property: "og:description", content: "Practical AI assurance and governance services that turn evaluation into traceable evidence." },
      { property: "og:type", content: "website" }, { property: "og:site_name", content: "Shyena" },
      { property: "og:url", content: `${SITE}/services` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI Assurance & Governance Services | Shyena" },
      { name: "twitter:description", content: "AI assurance, AI governance, EU AI Act and AI evaluation services." },
    ],
  }),
  component: ServicesPage,
});

const offers = [
  {
    eyebrow: "01 · Readiness",
    title: "AI Act Transparency & Risk Scan",
    price: "Custom pricing",
    cadence: "fixed fee · 1–2 weeks",
    body: "A focused assessment of a production AI system covering Article 50 disclosure checks, a risk classification walkthrough, a four-layer evaluation of a sample of critical journeys, an accessibility check of the chat interface and a findings report with a prioritised fix list.",
    items: ["Article 50 disclosure checks", "Risk classification walkthrough", "Four-layer evaluation of critical journeys", "Accessibility check of the chat interface", "Prioritised findings and fix list"],
  },
  {
    eyebrow: "02 · Assurance",
    title: "AI Assurance Pilot",
    price: "€7,500",
    cadence: "30–60 days · one AI system",
    body: "A focused assurance engagement for one AI system, combining realistic journey testing, evaluation, security checks and evidence that can be used in engineering and release decisions.",
    items: ["One AI system", "Realistic journey testing", "Deterministic and semantic evaluation", "Security assurance", "Traceable findings and release evidence"],
  },
  {
    eyebrow: "03 · Governance",
    title: "Governance Evidence Retainer",
    price: "Custom pricing",
    cadence: "monthly",
    body: "Ongoing assurance for teams that need scheduled re-evaluation, release regression and an updated evidence pack and traceability matrix each cycle.",
    items: ["Scheduled re-evaluation", "Release regression", "Updated evidence pack", "Requirement-to-evidence traceability matrix", "Recurring governance review"],
  },
];

function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white text-[#17213f]">
      <section className="border-b border-[#e6e8ed] bg-[#07101f] text-white">
        <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-5xl">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#f18a32]">Services</div>
            <h1 className="mt-5 font-[Sora] text-[clamp(3rem,6vw,6rem)] font-extrabold leading-[.9] tracking-[-.065em]">Start with the evidence you need now.</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">Founder-led AI assurance and governance services for production AI systems. Start with a focused scan or pilot, then establish a repeatable evidence workflow.</p>
          </div>
        </div>
      </section>
      <section className="bg-[#fafbfc]">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-4 xl:grid-cols-3">
            {offers.map((offer) => <article key={offer.title} className="flex flex-col rounded-2xl border border-[#e0e3e8] bg-white p-7 lg:p-8">
              <div className="font-mono text-[9px] font-bold tracking-[.18em] text-[#e87512]">{offer.eyebrow}</div>
              <h2 className="mt-5 font-[Sora] text-2xl font-extrabold tracking-[-.03em]">{offer.title}</h2>
              <div className="mt-6 text-3xl font-extrabold tracking-[-.04em]">{offer.price}</div>
              <div className="mt-1 text-sm text-[#69707d]">{offer.cadence}</div>
              <p className="mt-5 text-sm leading-6 text-[#69707d]">{offer.body}</p>
              <ul className="mt-6 flex-1 space-y-3 border-t border-[#eceef1] pt-6">{offer.items.map(item => <li key={item} className="flex gap-3 text-sm leading-5 text-[#4f5968]"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#e87512]" />{item}</li>)}</ul>
              <Link to="/contact" className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#e87512] px-5 text-sm font-semibold text-white">Discuss scope <ArrowRight className="h-4 w-4" /></Link>
            </article>)}
          </div>
        </div>
      </section>
      <section className="border-y border-[#e6e8ed] bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="max-w-3xl"><div className="text-sm font-semibold text-[#e87512]">What the work connects</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em]">Evaluation becomes evidence. Evidence becomes a governance input.</h2><p className="mt-5 text-base leading-7 text-[#69707d]">Shyena combines deterministic checks, semantic evaluation, execution traces, security findings and release context so technical teams and governance stakeholders can work from the same evidence.</p></div>
          <div className="mt-10 grid gap-4 md:grid-cols-4">{[
            ["Understand", "Map the AI system and critical journeys."],
            ["Evaluate", "Test behaviour across deterministic, semantic, orchestration and security layers."],
            ["Evidence", "Preserve traces, findings, residual risks and release decisions."],
            ["Govern", "Map evidence to AI governance requirements and controls."],
          ].map(([title,body]) => <article key={title} className="rounded-2xl border border-[#e1e4e9] bg-[#fafbfc] p-6"><h3 className="font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#69707d]">{body}</p></article>)}</div>
        </div>
      </section>
      <section className="bg-[#17213f] text-white">
        <div className="mx-auto max-w-[1000px] px-5 py-16 text-center sm:px-8 lg:py-20"><h2 className="font-[Sora] text-3xl font-extrabold tracking-[-.04em] sm:text-4xl">Start with one AI system and one evidence question.</h2><p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/60">The initial scope should be small enough to execute and concrete enough to produce evidence.</p><Link to="/contact" className="mt-8 inline-flex h-11 items-center gap-2 rounded-lg bg-[#e87512] px-5 text-sm font-semibold text-white">Book an assurance call <ArrowRight className="h-4 w-4" /></Link></div>
      </section>
    </main>
  );
}
