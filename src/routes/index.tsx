import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, Play } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shyena — AI Assurance, Engineered as Evidence" },
      { name: "description", content: "Shyena is the evidence layer for AI systems: understand, test, evaluate, secure and prove every critical release." },
      { property: "og:title", content: "Shyena — AI Assurance, Engineered as Evidence" },
      { property: "og:description", content: "Understand the system. Evaluate the behaviour. Defend the release." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=88&w=2400&auto=format&fit=crop" },
    ],
  }),
  component: HomePage,
});

const editorialStories = [
  { number: "01", eyebrow: "AI ASSURANCE", title: "AI agent testing is a systems problem.", description: "Why goals, orchestration, deterministic contracts, generated answers and security have to be tested as one system.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=88&w=1800&auto=format&fit=crop", href: "/blog/ai-agent-testing-is-a-systems-problem" },
  { number: "02", eyebrow: "EVALUATION", title: "A green checkmark is not proof.", description: "A high quality score cannot rescue a conversation that never reached its business goal.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=88&w=1800&auto=format&fit=crop", href: "/blog/the-problem-with-green-checkmarks-on-broken-conversations" },
  { number: "03", eyebrow: "CONVERSATIONAL AI", title: "Test the journey, not the transcript.", description: "Goal-driven journeys let agents vary their route while deterministic and semantic controls prove correctness.", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=88&w=1800&auto=format&fit=crop", href: "/blog/why-conversational-ai-needs-a-different-testing-model" },
];

const pillars = [
  ["NEXUS", "Understand", "Map architecture, orchestration, dependencies, business rules and critical journeys before testing."],
  ["VERA", "Evaluate", "Run realistic multi-turn journeys and combine deterministic, semantic and trajectory evidence."],
  ["CHAKRA", "Defend", "Probe trust boundaries, adversarial behaviour and control failures inside the same evidence chain."],
] as const;

function HomePage() {
  return (
    <main className="shyena-editorial bg-[#f4f1ea] text-[#151515]">
      <section className="relative min-h-[760px] overflow-hidden bg-[#09080b] text-white lg:min-h-[900px]">
        <video className="absolute inset-0 h-full w-full object-cover opacity-45" autoPlay muted loop playsInline preload="metadata" poster="https://images.unsplash.com/photo-1518770660439-4636190af475?q=88&w=2400&auto=format&fit=crop" aria-label="Cinematic technology background">
          <source src="https://cdn.coverr.co/videos/coverr-typing-on-laptop-2630/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,7,.96)_0%,rgba(5,5,7,.78)_42%,rgba(5,5,7,.25)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(255,191,71,.18),transparent_28%)]" />
        <div className="relative mx-auto flex min-h-[760px] max-w-[1600px] flex-col px-6 pb-10 pt-6 sm:px-10 lg:min-h-[900px] lg:px-14 lg:pt-8">
          <div className="flex items-center justify-between border-b border-white/15 pb-5">
            <div className="shyena-wordmark text-2xl tracking-[-0.06em] text-white">SHYENA</div>
            <div className="hidden items-center gap-8 font-mono text-[10px] uppercase tracking-[.22em] text-white/65 md:flex"><span>AI Assurance</span><span>Evidence Engineering</span><span>2026</span></div>
            <Link to="/contact" className="border border-[#d6a84a] px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[.16em] text-[#f1c86c] transition hover:bg-[#d6a84a] hover:text-black">Request a working session</Link>
          </div>
          <div className="flex flex-1 items-end pb-14 pt-24 lg:pb-20">
            <div className="grid w-full gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
              <div>
                <div className="mb-7 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.24em] text-[#e7bf67]"><span className="h-px w-12 bg-[#e7bf67]" /> Autonomous Quality Engineering</div>
                <h1 className="max-w-6xl font-[Sora] text-[clamp(4rem,10vw,9.5rem)] font-extrabold leading-[.82] tracking-[-.075em]">Evidence<br /><span className="text-[#e7bf67]">before</span><br />release.</h1>
                <p className="mt-9 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">Shyena turns AI system behaviour into traceable evidence — so engineering teams can understand what happened, why it matters and whether a release can be trusted.</p>
                <div className="mt-9 flex flex-wrap gap-3"><Link to="/contact" className="inline-flex items-center gap-3 bg-[#e7bf67] px-6 py-4 text-xs font-extrabold uppercase tracking-[.12em] text-black transition hover:bg-white">See the assurance workflow <ArrowRight className="h-4 w-4" /></Link><Link to="/vera" className="inline-flex items-center gap-3 border border-white/25 px-6 py-4 text-xs font-extrabold uppercase tracking-[.12em] text-white transition hover:border-white">Explore VERA <ArrowRight className="h-4 w-4" /></Link></div>
              </div>
              <div className="ml-auto w-full max-w-md border border-white/15 bg-black/35 p-5 backdrop-blur-md sm:p-7">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-[9px] uppercase tracking-[.2em] text-white/45"><span>Assurance chain</span><span>LIVE MODEL</span></div>
                <div className="py-5 font-mono text-[11px] leading-8 text-white/75"><div><span className="text-[#e7bf67]">01</span> Understand the system</div><div><span className="text-[#e7bf67]">02</span> Engineer the assurance intent</div><div><span className="text-[#e7bf67]">03</span> Execute realistic journeys</div><div><span className="text-[#e7bf67]">04</span> Correlate evidence</div><div><span className="text-[#e7bf67]">05</span> Defend the security boundary</div><div><span className="text-[#e7bf67]">06</span> Prove the release decision</div></div>
                <div className="border-t border-white/10 pt-4 text-sm font-semibold text-white">GO <span className="mx-2 text-white/25">/</span> NO-GO <span className="mx-2 text-white/25">/</span> REVIEW</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-white/15 pt-4 font-mono text-[9px] uppercase tracking-[.16em] text-white/45"><span>AI agents · Conversational AI · Enterprise applications</span><span className="hidden sm:block">Scroll to explore</span></div>
        </div>
      </section>

      <section className="border-b border-[#d7d0c4] bg-[#f4f1ea]">
        <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
            <div><div className="font-mono text-[10px] font-bold uppercase tracking-[.22em] text-[#9b7322]">The premise</div><h2 className="mt-6 max-w-xl font-[Sora] text-[clamp(2.6rem,5vw,5.6rem)] font-extrabold leading-[.9] tracking-[-.065em]">A score is not a proof.</h2></div>
            <div className="max-w-3xl text-xl leading-9 text-[#45413a] sm:text-2xl sm:leading-10"><p>AI agents operate through conversations, orchestration, retrieval, tools, business rules and security boundaries. The final answer is only one observable surface.</p><p className="mt-7">Shyena connects the full execution chain and keeps the evidence behind the verdict.</p><div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-[#d7d0c4] pt-6 font-mono text-[10px] uppercase tracking-[.14em] text-[#777066] sm:grid-cols-4"><span>Deterministic</span><span>Semantic</span><span>Trajectory</span><span>Security</span></div></div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d7d0c4] bg-[#151419] text-white">
        <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 lg:px-14 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[.55fr_1.45fr] lg:items-end"><div><div className="font-mono text-[10px] uppercase tracking-[.22em] text-[#e7bf67]">The assurance system</div><h2 className="mt-5 font-[Sora] text-[clamp(2.7rem,5vw,5.4rem)] font-extrabold leading-[.9] tracking-[-.065em]">One chain.<br />Three disciplines.</h2></div><p className="max-w-2xl text-lg leading-8 text-white/55">NEXUS understands the system. VERA evaluates what it actually does. CHAKRA challenges the boundary. The evidence remains connected from first observation to release decision.</p></div>
          <div className="mt-12 grid border-y border-white/15 md:grid-cols-3">{pillars.map(([name, title, body], index) => <Link key={name} to={name === "NEXUS" ? "/nexus" : name === "VERA" ? "/vera" : "/chakra"} className="group border-b border-white/15 p-7 transition hover:bg-white/[.035] md:border-b-0 md:border-r md:last:border-r-0 lg:p-10"><div className="flex items-start justify-between"><span className="font-mono text-[10px] tracking-[.2em] text-[#e7bf67]">0{index + 1}</span><ArrowDownRight className="h-5 w-5 text-white/25 transition group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-[#e7bf67]" /></div><div className="mt-14 font-mono text-[11px] font-semibold tracking-[.22em] text-white/40">{name}</div><h3 className="mt-3 font-[Sora] text-3xl font-bold tracking-[-.04em]">{title}</h3><p className="mt-5 text-sm leading-7 text-white/55">{body}</p><div className="mt-8 text-[10px] font-bold uppercase tracking-[.16em] text-[#e7bf67]">Explore capability</div></Link>)}</div>
        </div>
      </section>

      <section className="border-b border-[#d7d0c4] bg-[#f4f1ea]">
        <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><div className="font-mono text-[10px] uppercase tracking-[.22em] text-[#9b7322]">Field notes</div><h2 className="mt-5 font-[Sora] text-[clamp(2.7rem,5vw,5.4rem)] font-extrabold leading-[.9] tracking-[-.065em]">The assurance<br />journal.</h2></div><Link to="/blog" className="inline-flex items-center gap-2 border-b border-[#9b7322] pb-2 text-xs font-bold uppercase tracking-[.16em]">Read all insights <ArrowRight className="h-4 w-4" /></Link></div>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">{editorialStories.map((story) => <article key={story.number} className="group"><Link to={story.href} className="block"><div className="relative aspect-[4/3] overflow-hidden bg-[#242126]"><img src={story.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" /><div className="absolute left-5 top-5 font-mono text-[9px] tracking-[.18em] text-white/70">{story.number}</div><div className="absolute bottom-5 left-5 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.18em] text-[#f3cc75]"><span className="h-px w-7 bg-[#f3cc75]" /> {story.eyebrow}</div></div><div className="pt-6"><h3 className="font-[Sora] text-2xl font-bold leading-tight tracking-[-.04em] transition group-hover:text-[#8a641c]">{story.title}</h3><p className="mt-3 max-w-md text-sm leading-7 text-[#6d675e]">{story.description}</p><span className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em]">Read article <ArrowRight className="h-4 w-4" /></span></div></Link></article>)}</div>
        </div>
      </section>

      <section className="border-b border-[#d7d0c4] bg-[#ece7dc]">
        <div className="mx-auto grid max-w-[1600px] gap-0 lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative min-h-[520px] overflow-hidden bg-[#0c0b0f] lg:min-h-[650px]"><img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=88&w=2200&auto=format&fit=crop" alt="Cinematic close-up of a modern computing environment" className="absolute inset-0 h-full w-full object-cover opacity-75" loading="lazy" /><div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,7,11,.25),rgba(8,7,11,.86))]" /><div className="absolute inset-x-0 bottom-0 p-8 sm:p-12"><div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[.22em] text-[#e7bf67]"><Play className="h-4 w-4 fill-current" /> Cinematic product study</div><p className="mt-4 max-w-xl font-[Sora] text-2xl font-bold leading-tight tracking-[-.04em] text-white sm:text-4xl">The interface should feel as rigorous as the evidence behind it.</p></div></div>
          <div className="flex items-center p-8 sm:p-12 lg:p-16"><div className="max-w-xl"><div className="font-mono text-[10px] uppercase tracking-[.22em] text-[#9b7322]">Visual language</div><h2 className="mt-6 font-[Sora] text-[clamp(2.4rem,4.5vw,4.8rem)] font-extrabold leading-[.92] tracking-[-.065em]">Evidence you can see.</h2><p className="mt-7 text-base leading-8 text-[#5f594f]">Shyena combines cinematic product imagery, restrained typography and precise information hierarchy so the assurance story is as clear visually as it is technically.</p></div></div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#09080b] text-white"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(215,168,74,.18),transparent_38%)]" /><div className="relative mx-auto max-w-[1600px] px-6 py-24 text-center sm:px-10 lg:px-14 lg:py-32"><div className="font-mono text-[10px] uppercase tracking-[.24em] text-[#e7bf67]">Release confidence</div><h2 className="mx-auto mt-6 max-w-5xl font-[Sora] text-[clamp(3.2rem,7vw,7.5rem)] font-extrabold leading-[.84] tracking-[-.075em]">Know what<br /><span className="text-[#e7bf67]">actually happened.</span></h2><p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">Bring one critical journey. Shyena maps it, tests it, evaluates it, challenges it and preserves the evidence behind the release decision.</p><Link to="/contact" className="mt-9 inline-flex items-center gap-3 bg-[#e7bf67] px-7 py-4 text-xs font-extrabold uppercase tracking-[.14em] text-black transition hover:bg-white">Start with one journey <ArrowRight className="h-4 w-4" /></Link></div></section>
    </main>
  );
}
