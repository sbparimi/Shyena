import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock3, Video } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Working Sessions | Shyena" },
      { name: "description", content: "Join Shyena working sessions, product briefings and engineering discussions around AI quality engineering." },
    ],
  }),
  component: EventsPage,
});

const formats = [
  ["WORKING SESSION", "Bring one real AI journey. Walk through the evidence, evaluation signals and release decision.", "30 min"],
  ["ENGINEERING BRIEFING", "Explore practical patterns for autonomous testing, evaluation, observability and agent security.", "45 min"],
  ["PRODUCT SESSION", "See how NEXUS, VERA and CHAKRA connect system understanding, execution and evidence.", "30 min"],
];

function EventsPage() {
  return (
    <main className="min-h-screen bg-white text-[#17233f]">
      <section className="relative overflow-hidden bg-[#07101f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_25%,rgba(104,119,255,.18),transparent_30%),radial-gradient(circle_at_18%_75%,rgba(232,117,18,.13),transparent_28%)]" />
        <div className="relative mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e87512]/30 bg-[#e87512]/10 px-3.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[.16em] text-[#ffb06e]">
              <CalendarDays className="h-3.5 w-3.5" />
              Events & sessions
            </div>
            <h1 className="mt-6 font-[Sora] text-[clamp(3rem,7vw,6.8rem)] font-extrabold leading-[.9] tracking-[-.065em]">Put AI quality<br /><span className="text-[#f18a32]">under the microscope.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/55">Short, practical sessions for engineering and QA teams building, testing and operating AI systems.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#e87512] px-5 text-sm font-semibold text-white">Request a session <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/docs" className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/15 bg-white/[.04] px-5 text-sm font-semibold text-white/80">Explore the docs <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e7e9ed] bg-white">
        <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-4 lg:grid-cols-3">
            {formats.map(([title, body, duration]) => (
              <article key={title} className="group rounded-2xl border border-[#e1e4e9] bg-[#fafbfc] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#e87512]/40 hover:bg-white hover:shadow-[0_25px_60px_-35px_rgba(23,35,63,.45)]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] font-bold tracking-[.16em] text-[#e87512]">{title}</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e1e4e9] bg-white px-2.5 py-1 text-[10px] font-semibold text-[#6f7784]"><Clock3 className="h-3 w-3" />{duration}</span>
                </div>
                <h2 className="mt-10 font-[Sora] text-2xl font-extrabold tracking-[-.04em] text-[#17233f]">{title === "WORKING SESSION" ? "Solve a real quality problem." : title === "ENGINEERING BRIEFING" ? "Learn the engineering model." : "See the platform in action."}</h2>
                <p className="mt-3 text-sm leading-6 text-[#69707d]">{body}</p>
                <Link to="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#17233f]">Request this format <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <div>
              <div className="text-sm font-semibold text-[#e87512]">What to expect</div>
              <h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">Evidence, not slides.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {["Bring a real business journey", "Map the agent and tool path", "Inspect deterministic and semantic signals", "Trace failures to components", "Review security and execution integrity", "Leave with a concrete next step"].map((item, index) => (
                <div key={item} className="flex gap-3 rounded-xl border border-[#e1e4e9] bg-white p-5">
                  <span className="font-mono text-[10px] font-bold text-[#e87512]">0{index + 1}</span>
                  <span className="text-sm font-semibold text-[#17233f]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#17233f] text-white">
        <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <div className="text-sm font-semibold text-[#f18a32]">Need a deeper session?</div>
              <h2 className="mt-3 max-w-3xl font-[Sora] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">Turn your next release into an evidence review.</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/60">Talk through your agent, conversational AI or autonomous testing challenge with a Shyena expert.</p>
            </div>
            <Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#e87512] px-6 text-sm font-semibold text-white">Talk to experts <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
