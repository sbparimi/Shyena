import { createFileRoute, Link } from "@tanstack/react-router";

const SITE = "https://www.shyena.eu";

export const Route = createFileRoute("/about")({
  head: () => ({
    links: [{ rel: "canonical", href: `${SITE}/about` }],
    meta: [
      { title: "About Shyena | AI Assurance & Quality Engineering" },
      { name: "description", content: "Meet the founder behind Shyena and its AI assurance, AI governance, EU AI Act and AI evaluation approach." },
      { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
      { property: "og:title", content: "About Shyena | AI Assurance & Quality Engineering" },
      { property: "og:description", content: "Founder-led AI assurance and quality engineering for systems that need evidence." },
      { property: "og:type", content: "website" }, { property: "og:site_name", content: "Shyena" },
      { property: "og:url", content: `${SITE}/about` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Shyena | AI Assurance & Quality Engineering" },
      { name: "twitter:description", content: "Founder-led AI assurance, evaluation and governance." },
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
            <div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#f18a32]">About Shyena</div>
            <h1 className="mt-5 font-[Sora] text-[clamp(3rem,6vw,6rem)] font-extrabold leading-[.9] tracking-[-.065em]">Built by a test lead who got tired of green checkmarks on broken conversations.</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">Shyena is a founder-led AI assurance offering focused on realistic evaluation, security testing, traceable evidence and governance workflows.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e6e8ed] bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <div>
              <div className="text-sm font-semibold text-[#e87512]">Who's behind Shyena</div>
              <h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em]">Parimi</h2>
              <a href="https://linkedin.com/in/sparimi" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold underline decoration-[#e87512] decoration-2 underline-offset-4">LinkedIn <span aria-hidden="true">↗</span></a>
            </div>
            <div className="rounded-2xl border border-[#e1e4e9] bg-[#fafbfc] p-7 sm:p-8">
              <p className="text-lg leading-8 text-[#4f5968]">Parimi's background is in test leadership and conversational-AI quality engineering, with Shyena built around the practical problem of turning complex AI behaviour into repeatable evaluation and release evidence.</p>
              <p className="mt-5 text-lg leading-8 text-[#4f5968]">Being small is intentional: design and engineering decisions stay close to the work, with direct access to the founder who built the platform.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fafbfc]">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-[#e87512]">How Shyena works</div>
            <h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em]">AI reasons. Deterministic controls verify. Evidence proves.</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Understand", "Map the system, journeys, tools, dependencies and business context."],
              ["Evaluate", "Combine deterministic, semantic, trajectory and security evaluation."],
              ["Govern", "Connect findings and evidence to release policy and governance needs."],
            ].map(([title, body]) => <article key={title} className="rounded-2xl border border-[#e1e4e9] bg-white p-7"><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#69707d]">{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#17213f] text-white">
        <div className="mx-auto max-w-[1000px] px-5 py-16 text-center sm:px-8 lg:py-20">
          <h2 className="font-[Sora] text-3xl font-extrabold tracking-[-.04em] sm:text-4xl">Build evidence into the AI lifecycle.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/60">Explore the platform, governance model or founder-led services.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/govern" className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#e87512] px-5 text-sm font-semibold text-white">Explore Govern <ArrowRightIcon /></Link>
            <Link to="/services" className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/15 px-5 text-sm font-semibold text-white">View services <ArrowRightIcon /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
function ArrowRightIcon() { return <span aria-hidden="true">→</span>; }
