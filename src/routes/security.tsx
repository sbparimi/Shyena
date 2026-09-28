import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

const SITE = "https://www.shyena.eu";

export const Route = createFileRoute("/security")({
  head: () => ({
    links: [{ rel: "canonical", href: `${SITE}/security` }],
    meta: [
      { title: "Security & Trust | Shyena AI Assurance" },
      { name: "description", content: "Security, data handling and AI governance information for Shyena, including AI assurance, EU AI Act evidence and ISO 42001 mapping." },
      { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
      { property: "og:title", content: "Security & Trust | Shyena AI Assurance" },
      { property: "og:description", content: "How Shyena approaches infrastructure, data handling and evidence-backed AI assurance." },
      { property: "og:type", content: "website" }, { property: "og:site_name", content: "Shyena" },
      { property: "og:url", content: `${SITE}/security` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Security & Trust | Shyena AI Assurance" },
      { name: "twitter:description", content: "Security, data handling and AI assurance information." },
    ],
  }),
  component: SecurityPage,
});

function SecurityPage() {
  return (
    <main className="overflow-hidden bg-white text-[#17213f]">
      <section className="border-b border-[#e6e8ed] bg-[#07101f] text-white">
        <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-5xl">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#f18a32]">Security & trust</div>
            <h1 className="mt-5 font-[Sora] text-[clamp(3rem,6vw,6rem)] font-extrabold leading-[.9] tracking-[-.065em]">Keep the assurance boundary explicit.</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">Shyena focuses on technical evaluation, evidence and governance workflows. Security and data-handling responsibilities remain explicit between Shyena, the customer and the infrastructure or model providers involved.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e6e8ed] bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["Customer-hosted infrastructure", "Where the engagement uses customer-hosted infrastructure, the customer retains control of that infrastructure and its associated access policies."],
              ["Access", "The default engagement boundary is a customer-controlled test or staging environment. Shyena uses the minimum access needed for the agreed assurance scope, prefers scoped API credentials and read-only log access, and does not require production access for an initial assessment. Any production access is explicitly scoped and agreed in advance."],
              ["Customer-funded LLM/API usage", "LLM and API usage is funded by the customer and remains subject to the terms and controls of the selected providers."],
              ["Data handling", "The public website does not use an application database for contact submissions. Contact-form data is sent to Resend for email delivery and is delivered to Shyena's contact mailbox. The Vercel-hosted application processes the request while the function is running and does not intentionally maintain a separate customer-data store. For assurance engagements, data is limited to the agreed scope and customer-controlled environments are preferred; customer data should not be supplied unless required for the test. Deletion and retention requirements for engagement data are agreed in the applicable contract or DPA."],
              ["DPA", "DPA available on request. Where personal data is processed on behalf of a customer, applicable data-processing terms should be agreed before processing begins."],
            ].map(([title, body]) => <article key={title} className="rounded-2xl border border-[#e1e4e9] bg-[#fafbfc] p-7"><Check className="h-5 w-5 text-[#e87512]" /><h2 className="mt-5 text-xl font-bold">{title}</h2><p className="mt-3 text-sm leading-6 text-[#69707d]">{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#fafbfc]"><div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-8 lg:px-10"><div className="rounded-2xl border border-[#e1e4e9] bg-white p-6"><h2 className="text-xl font-bold">Certifications</h2><p className="mt-3 text-sm leading-6 text-[#69707d]">Shyena does not currently hold SOC 2 or ISO 27001 certification.</p></div></div></section>

      <section className="bg-[#fafbfc]">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="max-w-3xl"><div className="text-sm font-semibold text-[#e87512]">Governance positioning</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em]">Mapped evidence, not compliance promises.</h2><p className="mt-5 text-base leading-7 text-[#69707d]">Shyena can map evaluation evidence to relevant AI governance requirements, including the EU AI Act and ISO/IEC 42001. This is a technical evidence workflow, not legal advice, a certification service or a guarantee of regulatory compliance.</p></div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">{[
            ["EU AI Act", "Technical evidence can be organised against relevant obligations and controls."],
            ["ISO/IEC 42001", "Evidence can be mapped to relevant AI management system controls."],
            ["Security testing", "Adversarial scenarios, control checks and reproducible findings can be preserved as evidence."],
          ].map(([title,body])=><article key={title} className="rounded-2xl border border-[#e1e4e9] bg-white p-6"><h3 className="font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#69707d]">{body}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-[#17213f] text-white">
        <div className="mx-auto max-w-[1000px] px-5 py-16 text-center sm:px-8 lg:py-20">
          <p className="text-sm leading-6 text-white/55">Shyena provides technical evaluation and evidence. It is not legal advice and not a certification body.</p>
          <Link to="/contact" className="mt-7 inline-flex h-11 items-center gap-2 rounded-lg bg-[#e87512] px-5 text-sm font-semibold text-white">Discuss your assurance scope <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  );
}
