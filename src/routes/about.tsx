import { createFileRoute, Link } from "@tanstack/react-router";

const SITE = "https://www.shyena.eu";

export const Route = createFileRoute("/about")({
  head: () => ({
    links: [{ rel: "canonical", href: `${SITE}/about` }],
    meta: [
      { title: "About Shyena | AI Assurance" },
      {
        name: "description",
        content:
          "A specialist team combining quality engineering, AI agent assurance and AIOps to solve Agentic SDLC challenges with your existing technology, infrastructure and integrations.",
      },
      {
        name: "robots",
        content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
      },
      { property: "og:title", content: "About Shyena | AI Assurance" },
      {
        property: "og:description",
        content: "Quality engineering and AIOps specialists solving Agentic SDLC challenges with your tools, stack and infrastructure.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Shyena" },
      { property: "og:url", content: `${SITE}/about` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Shyena | AI Assurance" },
      {
        name: "twitter:description",
        content: "A specialist team solving Agentic SDLC challenges one business at a time.",
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
              Built to make AI quality measurable—not just chatbot conversations.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
              Shyena is an engineering team combining quality engineering, AI agent assurance and
              AIOps to solve Agentic SDLC challenges. We connect the people, systems, tools and
              infrastructure businesses need for reliable AI-enabled software delivery—with
              practical integration, measurable evidence and production feedback.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#263449] bg-[#07101f] text-white">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold text-[#f18a32]">Who we are</div>
            <h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">
              Quality engineering, AI agent engineering and AIOps—working as one team.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              Shyena brings together quality engineering specialists, AI and agentic-system
              engineers, and AIOps and infrastructure expertise to solve the engineering problems
              businesses face as they adopt agentic software development lifecycles. We connect the
              people, tools, controls and infrastructure needed to move from experimentation to
              reliable delivery.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Quality engineering", "Prove that software, agents and AI-enabled workflows behave as intended—with meaningful tests and traceable evidence."],
              ["AI agent engineering", "Connect planning, coding agents, tools, evaluations, security controls and release decisions into a governed lifecycle."],
              ["AIOps and infrastructure", "Bring observability, runtime signals, operations and delivery infrastructure into the same engineering feedback loop."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-[#0c1729] p-6 sm:p-7">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/75">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#263449] bg-[#0c1729] text-white">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:px-10 lg:py-20">
          <div>
            <div className="text-sm font-semibold text-[#f18a32]">How we work</div>
            <h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em]">
              One business. One problem. Brick by brick.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-white/75">
              We start with a real business problem, understand the workflow and constraints, and
              then build the smallest useful piece of the solution. We prove it works, learn from
              the result and extend it step by step. No big-bang transformation and no unnecessary
              platform replacement.
            </p>
            <p className="mt-5 text-lg leading-8 text-white/75">
              We combine engineering expertise with the infrastructure and controls needed to make
              solutions reliable in practice—not just impressive in a demo.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#263449] bg-[#07101f] text-white">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold text-[#f18a32]">Your environment, your choice</div>
            <h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em]">
              Fit the solution to your infrastructure.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">
              We work with your existing tools, technology stack, integrations and legacy systems,
              combining them with Shyena capabilities where they add value. Choose the operating
              model that fits your needs:
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Extend what you have", "Integrate with your existing tools, platforms, APIs, legacy systems and delivery workflows."],
              ["Run in your infrastructure", "Build and integrate within your own cloud, network, security boundaries and operational controls."],
              ["Start greenfield", "Design a new environment and workflow where there is no suitable existing foundation."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-[#0c1729] p-6 sm:p-7">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/75">{body}</p>
              </article>
            ))}
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
            Bring us one concrete engineering problem. We will work with your team and environment
            to solve it step by step—from the first integration to a working, supportable solution.
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
