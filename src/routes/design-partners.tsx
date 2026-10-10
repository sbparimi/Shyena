import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
const SITE = "https://www.shyena.eu";
export const Route = createFileRoute("/design-partners")({
  head: () => ({
    links: [{ rel: "canonical", href: SITE + "/design-partners" }],
    meta: [
      { title: "Design Partner Programme | Shyena AI Assurance" },
      {
        name: "description",
        content:
          "Join Shyena's founder-led design partner programme for production conversational AI and AI-agent assurance.",
      },
      { property: "og:title", content: "Design Partner Programme | Shyena AI Assurance" },
      {
        property: "og:description",
        content: "A focused assurance pilot with direct founder access and roadmap influence.",
      },
      { property: "og:url", content: SITE + "/design-partners" },
    ],
  }),
  component: DesignPartners,
});
function DesignPartners() {
  return (
    <main className="bg-white text-[#17213f]">
      <section className="bg-[#07101f] text-white">
        <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-4xl">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#f18a32]">
              Design partner programme
            </div>
            <h1 className="mt-5 font-[Sora] text-[clamp(3rem,6vw,6rem)] font-extrabold leading-[.9] tracking-[-.065em]">
              Become a Shyena design partner.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
              Shyena is onboarding a small number of European organisations running conversational
              AI or AI agents in production. Design partners get a focused assurance pilot, direct
              founder access and roadmap influence in exchange for structured feedback.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-lg bg-[#e87512] px-5 text-sm font-bold text-white"
            >
              Apply as a design partner <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[#e1e4e9] bg-[#fafbfc] p-7">
              <h2 className="text-2xl font-extrabold">What partners get</h2>
              <ul className="mt-5 space-y-3">
                {[
                  "Discounted assurance pilot",
                  "Direct founder access",
                  "Roadmap influence",
                  "Structured feedback loop",
                  "Optional reference once results are proven",
                ].map((x) => (
                  <li key={x} className="flex gap-2 text-sm leading-6 text-[#596273]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#e87512]" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#e1e4e9] bg-white p-7">
              <h2 className="text-2xl font-extrabold">Who it is for</h2>
              <ul className="mt-5 space-y-3">
                {[
                  "CX and contact-centre teams",
                  "Conversational-AI teams",
                  "AI product and engineering teams",
                  "Risk and compliance teams preparing for the EU AI Act",
                ].map((x) => (
                  <li key={x} className="flex gap-2 text-sm leading-6 text-[#596273]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#e87512]" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#fafbfc]">
        <div className="mx-auto max-w-[1000px] px-5 py-16 text-center sm:px-8 lg:py-20">
          <h2 className="font-[Sora] text-3xl font-extrabold">Bring one production AI journey.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#69707d]">
            The first conversation is about the system, the business risk and the evidence you
            need—not a generic product demo.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex h-11 items-center gap-2 rounded-lg bg-[#17213f] px-5 text-sm font-bold text-white"
          >
            Apply as a design partner <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
