import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | Shyena" },
      {
        name: "description",
        content: "Pricing for independent Cognigy AI Agent testing and evaluation.",
      },
    ],
  }),
  component: Pricing,
});

const scope = [
  {
    title: "Project understanding",
    eyebrow: "01 / Scope",
    body: "Review the Cognigy project structure, agent behaviour, key journeys, decision points and the environments that matter to the assurance scope.",
    deliverable: "A scoped test model covering the agent surface and priority business journeys.",
    duration: "Typical duration: defined by project complexity and journey scope.",
  },
  {
    title: "Test generation",
    eyebrow: "02 / Deliver",
    body: "Turn the agreed Cognigy journeys into goal-driven tests with personas, playbooks, assertions and boundary cases.",
    deliverable: "An executable test set mapped to the agreed journeys and evaluation requirements.",
    duration: "Typical duration: defined by journey count and test depth.",
  },
  {
    title: "Execution & evaluation",
    eyebrow: "03 / Evidence",
    body: "Run the conversations against the agent and evaluate deterministic behaviour, semantic quality, tool use and execution integrity.",
    deliverable: "Evidence-backed results with inspectable verdicts and evaluation findings.",
    duration: "Typical duration: defined by execution volume and evaluation scope.",
  },
];

function Pricing() {
  return (
    <div className="bg-white text-[#17213f]">
      <section className="scroll-mt-[68px] bg-[#07101f] text-white">
        <div className="mx-auto max-w-[1000px] px-5 pb-20 pt-24 text-center sm:px-8 sm:pt-28 lg:pb-28 lg:pt-32">
          <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[#f18a32]">
            Pricing
          </p>
          <h1 className="mx-auto mt-5 max-w-4xl font-[Sora] text-4xl font-extrabold leading-[1.02] tracking-[-.045em] sm:text-5xl lg:text-6xl">
            Price the testing scope, not a generic platform tier.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Pricing depends on the Cognigy agent, journeys, environments and evaluation scope.
            The site does not publish unsupported fixed tiers.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex h-12 items-center rounded-lg bg-[#f18a32] px-5 text-sm font-bold text-[#07101f]"
          >
            Book a 30-min call
          </Link>
        </div>
      </section>

      <section aria-labelledby="pricing-scope">
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-[#f18a32]">
              Testing scope
            </p>
            <h2 id="pricing-scope" className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              The work is scoped around the agent, not a generic tier.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#667085]">
              Each engagement defines what is analysed, generated, executed and evidenced before
              the work begins.
            </p>
          </div>

          <div className="mt-10 grid min-w-0 grid-cols-1 gap-4 md:grid-cols-3">
            {scope.map((item) => (
              <article
                key={item.title}
                className="min-w-0 rounded-xl border border-[#e2e5ea] bg-white p-6 shadow-[0_8px_30px_-28px_rgba(23,33,63,.45)]"
              >
                <p className="font-mono text-[10px] font-bold uppercase tracking-[.18em] text-[#f18a32]">
                  {item.eyebrow}
                </p>
                <h3 className="mt-3 min-w-0 break-words text-xl font-extrabold leading-tight tracking-tight [hyphens:auto] sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#596273]">{item.body}</p>
                <div className="mt-5 border-t border-[#eef0f3] pt-5">
                  <p className="text-xs font-bold uppercase tracking-[.12em] text-[#17213f]">
                    Delivered
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#596273]">{item.deliverable}</p>
                </div>
                <p className="mt-5 text-xs leading-5 text-[#667085]">{item.duration}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
