import { createFileRoute, Link } from "@tanstack/react-router";

const SITE = "https://www.shyena.eu";

export const Route = createFileRoute("/about")({
  head: () => ({
    links: [{ rel: "canonical", href: `${SITE}/about` }],
    meta: [
      { title: "About Shyena | Quality Engineering & AIOps" },
      {
        name: "description",
        content:
          "Meet the quality engineering and AIOps specialists combining engineering, infrastructure and AI assurance to solve agentic SDLC problems one business at a time.",
      },
      {
        name: "robots",
        content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
      },
      { property: "og:title", content: "About Shyena | Quality Engineering & AIOps" },
      {
        property: "og:description",
        content: "Quality engineering and AIOps specialists solving agentic SDLC challenges with your tools, stack and infrastructure.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Shyena" },
      { property: "og:url", content: `${SITE}/about` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Shyena | AI Assurance" },
      {
        name: "twitter:description",
        content: "Quality engineering, AIOps, AI evaluation and operational assurance for agentic systems.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-[#17213f]">
      <section className="border-b border-[#e6e8ed] bg-[#07101f] text-white">
        <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-5xl">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#f18a32]">
              About Shyena
            </div>
            <h1 className="mt-5 font-[Sora] text-[clamp(3rem,6vw,6rem)] font-extrabold leading-[.9] tracking-[-.065em]">
              Engineering trustworthy AI systems from development to production.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
              Shyena brings quality engineering specialists, AIOps specialists, software engineers and
              infrastructure expertise together to solve the real problems of the agentic software
              development lifecycle (SDLC). We connect the people, engineering practices and
              infrastructure needed to build, test, operate and improve AI-enabled systems.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e6e8ed] bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <div>
              <div className="text-sm font-semibold text-[#e87512]">Who’s behind Shyena</div>
              <h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em]">
                Quality engineering meets AIOps.
              </h2>
            </div>
            <div className="rounded-2xl border border-[#e1e4e9] bg-[#fafbfc] p-7 sm:p-8">
              <p className="text-lg leading-8 text-[#4f5968]">
                We bring quality engineering and AIOps together with software and infrastructure engineering
                to tackle the difficult parts of agentic SDLC: unreliable model behaviour, complex
                tool use, integration failures, observability gaps, security boundaries and release
                confidence.
              </p>
              <p className="mt-5 text-lg leading-8 text-[#4f5968]">
                We solve problems one business at a time, brick by brick. We learn your goals, legacy systems,
                operating constraints and risk profile, then build and validate a practical solution
                around the way your business actually works.
              </p>
            </div>
            <div className="mt-6 rounded-2xl border border-[#e1e4e9] bg-[#fafbfc] p-7 sm:p-8">
              <h3 className="text-xl font-bold">Built around your environment</h3>
              <p className="mt-3 text-base leading-7 text-[#4f5968]">
                Keep the tools, stack, integrations and legacy systems that already work. Shyena
                can integrate with your existing infrastructure, run within infrastructure you
                control, or support a greenfield implementation when a clean foundation is the
                better choice. We adapt the engineering approach to your environment instead of
                forcing a wholesale replacement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fafbfc]">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-[#e87512]">How Shyena works</div>
            <h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em]">
              AI reasons. Deterministic controls verify. Evidence proves.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Understand", "Map the system, journeys, tools, dependencies and business context."],
              ["Evaluate", "Combine deterministic, semantic, trajectory and security evaluation."],
              ["Govern", "Connect findings and evidence to release policy and governance needs."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-2xl border border-[#e1e4e9] bg-white p-7">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#69707d]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#17213f] text-white">
        <div className="mx-auto max-w-[1000px] px-5 py-16 text-center sm:px-8 lg:py-20">
          <h2 className="font-[Sora] text-3xl font-extrabold tracking-[-.04em] sm:text-4xl">
            Build evidence into the AI lifecycle.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/60">
            Explore the platform, governance model or founder-led services.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/govern"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#e87512] px-5 text-sm font-semibold text-white"
            >
              Explore Govern <ArrowRightIcon />
            </Link>
            <Link
              to="/services"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/15 px-5 text-sm font-semibold text-white"
            >
              View services <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
function ArrowRightIcon() {
  return <span aria-hidden="true">→</span>;
}
