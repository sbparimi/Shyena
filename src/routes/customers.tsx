import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

const SITE = "https://www.shyena.eu";

export const Route = createFileRoute("/customers")({
  head: () => ({
    links: [{ rel: "canonical", href: `${SITE}/customers` }],
    meta: [
      { title: "Design Partners | Shyena" },
      { name: "description", content: "Join the Shyena design partner programme for AI assurance, AI governance, EU AI Act evidence and AI evaluation." },
      { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
      { property: "og:title", content: "Design Partners | Shyena" },
      { property: "og:description", content: "A small European design partner programme for organisations running conversational AI or AI agents in production." },
      { property: "og:type", content: "website" }, { property: "og:site_name", content: "Shyena" },
      { property: "og:url", content: `${SITE}/customers` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Design Partners | Shyena" },
      { name: "twitter:description", content: "Work directly with Shyena on an AI assurance pilot and shape the product roadmap." },
    ],
  }),
  component: DesignPartnersPage,
});

function DesignPartnersPage() {
  return (
    <main className="overflow-x-hidden bg-white text-[#17213f]">
      <section className="border-b border-[#e6e8ed] bg-[#07101f] text-white">
        <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-5xl">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#f18a32]">Design partner programme</div>
            <h1 className="mt-5 font-[Sora] text-[clamp(3rem,6vw,6rem)] font-extrabold leading-[.9] tracking-[-.065em]">Become a Shyena design partner.</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">Shyena is onboarding a small number of European organisations running conversational AI or AI agents in production. Design partners get a discounted assurance pilot, direct founder access and influence on the roadmap, in exchange for feedback and (optionally) a reference once results are proven.</p>
            <Link to="/contact" className="mt-9 inline-flex h-12 items-center gap-2 rounded-lg bg-[#e87512] px-6 text-sm font-semibold text-white">Apply to become a design partner <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e6e8ed] bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Discounted assurance pilot", "Start with a focused assurance scope around one production AI system or critical journey."],
              ["Direct founder access", "Work directly with the founder during the pilot and evidence review."],
              ["Roadmap influence", "Share structured feedback that can shape product priorities and workflows."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-2xl border border-[#e0e3e8] bg-[#fafbfc] p-7">
                <Check className="h-5 w-5 text-[#e87512]" />
                <h2 className="mt-5 text-xl font-bold">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#69707d]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fafbfc]">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="text-sm font-semibold text-[#e87512]">Who it is for</div>
              <h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em]">Teams responsible for AI quality and risk.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {["CX teams", "Contact-centre teams", "Conversational-AI teams", "Compliance teams"].map((item) => <div key={item} className="rounded-xl border border-[#e1e4e9] bg-white p-5 text-sm font-semibold">{item}</div>)}
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-[#dfe3e9] bg-[#17213f] p-8 text-white sm:p-10">
            <h2 className="font-[Sora] text-3xl font-extrabold tracking-[-.04em]">A practical partnership, not a logo programme.</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/60">The objective is to validate the assurance workflow against real production conditions, learn from the results and establish evidence that can support engineering and governance decisions. Any future reference is optional and only considered once results are proven.</p>
            <Link to="/contact" className="mt-7 inline-flex h-11 items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 text-sm font-semibold text-white">Apply through contact <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
