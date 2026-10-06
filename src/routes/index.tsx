import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Shyena | Independent testing and evaluation for Cognigy AI Agents" },
    { name: "description", content: "Independent testing and evaluation for Cognigy AI Agents." },
  ]}),
  component: Home,
});

const cards = [
  ["Nexus", "Generate goal-driven tests from the Cognigy project.", "Reads Flows, AI Agents, Jobs, Tools, intents and handovers; maps journeys and decision points; drafts goal, persona, playbook and assertions.", "/nexus"],
  ["Vera", "Run and evaluate the tests against the agent.", "Runs persona-driven real conversations and evaluates deterministic assertions, LLM-as-judge reasoning, execution integrity and boundary cases.", "/vera"],
];

function Home() {
  return <div className="bg-white text-[#17213f]">
    <section className="bg-[#07101f] text-white">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="max-w-5xl">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#f18a32]">Independent agent testing</p>
          <h1 className="mt-6 font-[Sora] text-[clamp(3rem,7vw,7rem)] font-extrabold leading-[0.9] tracking-[-0.065em]">Independent testing and evaluation for Cognigy AI Agents.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65 sm:text-xl">Test the agent you actually run. Generate meaningful journeys from the Cognigy project, execute real conversations, verify tool behaviour and preserve the evidence behind every verdict.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Link to="/nexus" className="inline-flex h-12 items-center gap-2 rounded-lg bg-[#f18a32] px-5 text-sm font-bold text-[#07101f]">Explore Nexus <ArrowRight className="h-4 w-4"/></Link><Link to="/vera" className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/15 px-5 text-sm font-bold text-white">Explore Vera <ArrowRight className="h-4 w-4"/></Link></div>
        </div>
      </div>
    </section>
    <section className="border-b border-[#e2e5ea] bg-[#fafbfc]">
      <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-5 md:grid-cols-2">{cards.map(([name,title,body,to]) => <Link key={name} to={to} className="group rounded-2xl border border-[#dfe3e8] bg-white p-7 transition hover:-translate-y-1 hover:border-[#f18a32]"><p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#f18a32]">{name}</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight">{title}</h2><p className="mt-4 text-sm leading-7 text-[#596273]">{body}</p><span className="mt-7 inline-flex items-center gap-2 text-sm font-bold">Open {name} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1"/></span></Link>)}</div>
      </div>
    </section>
    <section><div className="mx-auto max-w-[1000px] px-5 py-16 text-center sm:px-8 lg:py-24"><p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#f18a32]">Independent by design</p><h2 className="mt-4 font-[Sora] text-4xl font-extrabold tracking-tight sm:text-5xl">Works alongside Cognigy Simulator and Playbooks.</h2><p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#596273]">Shyena is an independent testing and evaluation layer. It does not replace the tools used to build and operate the agent.</p><div className="mt-8 grid gap-3 text-left sm:grid-cols-3">{["Goal-driven journeys","Execution evidence","Boundary test cases"].map(x=><div key={x} className="flex gap-3 rounded-xl border border-[#e2e5ea] p-4 text-sm font-semibold"><Check className="h-5 w-5 shrink-0 text-[#f18a32]"/>{x}</div>)}</div></div></section>
  </div>;
}
