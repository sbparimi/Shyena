import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
export const Route = createFileRoute("/integrations")({
  head: () => ({
    meta: [
      { title: "AI Platform Integrations & Assurance | Shyena" },
      {
        name: "description",
        content:
          "Vendor-neutral AI assurance for chatbots, LLM applications, document AI, APIs, tools, handovers and external systems.",
      },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "https://www.shyena.eu/integrations" }],
  }),
  component: Page,
});
function Page() {
  return (
    <main className="bg-white text-[var(--warp-ink)]">
      <section className="bg-[var(--warp-canvas)] text-white">
        <div className="mx-auto max-w-[1100px] px-5 py-20 sm:px-8 lg:py-28">
          <div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[var(--warp-accent-text)]">
            INTEGRATIONS
          </div>
          <h1 className="mt-5 text-[clamp(3rem,6vw,5.5rem)] font-extrabold leading-[.92] tracking-[-.06em]">
            Integrate AI assurance with the systems your business depends on.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--warp-muted)]">
            Shyena structures assurance around AI applications, prompts, models, retrieval, tools,
            APIs, document pipelines, handovers and the enterprise systems they affect. Exact
            integration scope is confirmed against the customer environment.
          </p>
          <div className="mt-8">
            <Link
              to="/ai-assurance"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-[var(--warp-lime)] px-5 text-sm font-bold text-[var(--warp-on-accent)]"
            >
              AI testing and assurance <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-[1100px] px-5 py-20 sm:px-8 lg:py-24">
          <h2 className=" text-4xl font-extrabold tracking-[-.045em]">Assurance touchpoints</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Flows and routing",
              "AI Agents and Jobs",
              "Tools and API calls",
              "Endpoints and channels",
              "AI-to-AI handover",
              "Human handover",
              "Knowledge and retrieval",
              "MCP tool boundaries",
              "Release evidence",
            ].map((x) => (
              <div
                key={x}
                className="rounded-xl border border-[var(--warp-border)] bg-[var(--warp-surface-soft)] p-5 text-sm font-semibold"
              >
                <CheckCircle2 className="h-4 w-4 text-[var(--warp-accent-text)]" />
                <div className="mt-3">{x}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
