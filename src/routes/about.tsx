import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, CheckCircle2, CircleDot, Mountain, ShieldCheck, Sparkles, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Shyena | Vision, Precision, Assurance" },
      {
        name: "description",
        content:
          "The story behind Shyena: vision, precision and the purpose behind an evidence-first AI assurance platform.",
      },
      { property: "og:title", content: "About Shyena | Vision, Precision, Assurance" },
      {
        property: "og:description",
        content:
          "Born from a problem. Built with purpose. Shyena helps teams understand, evaluate and defend AI with confidence.",
      },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/about" }],
  }),
  component: AboutPage,
});

const STORY = [
  {
    number: "01",
    title: "The Problem",
    icon: Mountain,
    copy:
      "AI testing stopped at the answer. Companies lacked visibility across systems, conversations and risks. Tools saw fragments. No one saw the whole truth.",
  },
  {
    number: "02",
    title: "The Build",
    icon: Sparkles,
    copy:
      "We set out to build assurance that engineers could trust — across every layer of an AI system. Not another tool. A complete assurance layer.",
  },
  {
    number: "03",
    title: "The Evolution",
    icon: CircleDot,
    copy:
      "From that mission, Shyena was born. A name that represents vision, precision and the power to return with what matters.",
  },
  {
    number: "04",
    title: "Today",
    icon: CheckCircle2,
    copy:
      "Shyena has evolved into a platform with three purpose-built suites — helping teams understand, evaluate and defend AI with confidence.",
  },
] as const;

const SUITES = [
  {
    name: "NEXUS",
    title: "Understand",
    copy: "Gain complete visibility into your AI systems, conversations and dependencies.",
    to: "/nexus",
    tone: "text-[#101d3a]",
    button: "border-slate-500 text-slate-900 hover:bg-slate-50",
  },
  {
    name: "VERA",
    title: "Evaluate",
    copy: "Continuously evaluate behavior, performance and experience with multi-layer assurance.",
    to: "/vera",
    tone: "text-[#d18a00]",
    button: "border-[#e5a51a] text-[#c38300] hover:bg-[#fffaf0]",
  },
  {
    name: "CHAKRA",
    title: "Defend",
    copy: "Proactively detect risks, vulnerabilities and misuse before they impact users.",
    to: "/chakra",
    tone: "text-[#7137b8]",
    button: "border-[#9b68d5] text-[#7137b8] hover:bg-[#fbf8ff]",
  },
] as const;

function NexusLogo() {
  return (
    <svg viewBox="0 0 52 48" aria-hidden="true" className="h-11 w-12">
      <path d="M4 8 16 3v25L4 33Z" fill="currentColor" />
      <path d="M23 3h9l16 15v13h-9L23 16Z" fill="currentColor" />
      <path d="M23 22h9l16 15v8h-9L23 32Z" fill="currentColor" opacity=".92" />
    </svg>
  );
}

function VeraLogo() {
  return (
    <svg viewBox="0 0 58 48" aria-hidden="true" className="h-11 w-14">
      <path d="M2 3h16l11 21L40 3h16L31 45h-5Z" fill="currentColor" />
      <path d="M19 3h11l7 14-8 12Z" fill="#fff" opacity=".24" />
    </svg>
  );
}

function ChakraLogo() {
  return (
    <svg viewBox="0 0 52 52" aria-hidden="true" className="h-12 w-12">
      <circle cx="26" cy="26" r="21" fill="none" stroke="currentColor" strokeWidth="3" />
      <ellipse cx="26" cy="26" rx="9" ry="20" fill="none" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="26" cy="26" rx="9" ry="20" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(60 26 26)" />
      <ellipse cx="26" cy="26" rx="9" ry="20" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(120 26 26)" />
      <circle cx="26" cy="26" r="3" fill="currentColor" />
    </svg>
  );
}

function StoryCard({ item }: { item: (typeof STORY)[number] }) {
  const Icon = item.icon;
  return (
    <article className="min-h-[285px] border border-slate-300 bg-white p-5 sm:p-6">
      <span className="font-mono text-sm text-[#d99000]">{item.number}</span>
      <Icon className="mt-5 h-9 w-9 stroke-[1.5] text-slate-900" />
      <h3 className="mt-5 text-[17px] font-semibold tracking-tight">{item.title}</h3>
      <p className="mt-2 text-[13px] leading-5 text-slate-700">{item.copy}</p>
    </article>
  );
}

function SuiteCard({ suite }: { suite: (typeof SUITES)[number] }) {
  const Logo = suite.name === "NEXUS" ? NexusLogo : suite.name === "VERA" ? VeraLogo : ChakraLogo;
  return (
    <article className="border border-slate-200 bg-white p-6 sm:p-7">
      <div className={`flex items-center gap-4 ${suite.tone}`}>
        <Logo />
        <span className="text-xl font-semibold tracking-tight">{suite.name}</span>
      </div>
      <h3 className="mt-3 text-base font-semibold text-slate-950">{suite.title}</h3>
      <p className="mt-2 min-h-[64px] text-[13px] leading-5 text-slate-700">{suite.copy}</p>
      <Button asChild variant="outline" className={`mt-4 h-9 rounded-none bg-white px-4 text-[11px] font-semibold ${suite.button}`}>
        <Link to={suite.to}>
          Explore {suite.name.charAt(0) + suite.name.slice(1).toLowerCase()}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </Button>
    </article>
  );
}

function Stat({ icon: Icon, kicker, value, detail }: { icon: typeof ShieldCheck; kicker: string; value: string; detail: string }) {
  return (
    <div className="flex items-center gap-3 px-4 first:pl-0 last:pr-0 sm:px-7">
      <Icon className="h-9 w-9 shrink-0 stroke-[1.7] text-slate-900" />
      <div>
        <p className="text-[9px] text-slate-600">{kicker}</p>
        <p className="text-[17px] font-semibold leading-5 tracking-tight">{value}</p>
        <p className="text-[9px] leading-4 text-slate-600">{detail}</p>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-[#0d1935]">
      <section className="bg-[#edf6ff]">
        <div className="mx-auto max-w-[1280px] px-6 pb-14 pt-6 sm:px-10 sm:pb-16 sm:pt-8 lg:px-12">
          <div className="mb-8 text-[11px] font-medium text-slate-500 sm:mb-10">
            Home <span className="px-2">/</span> About
          </div>
          <div className="mx-auto max-w-[900px]">
            <p className="text-[11px] font-medium uppercase tracking-[0.17em] text-[#e59a00]">Our name. Our inspiration.</p>
            <h1 className="mt-4 text-[48px] font-bold leading-[1.04] tracking-[-0.045em] sm:text-[62px] lg:text-[67px]">
              Shyena is vision.<br />
              Shyena is precision.<br />
              <span className="text-[#f0a400]">Shyena returns.</span>
            </h1>
            <p className="mt-5 max-w-[760px] text-[16px] leading-6 text-slate-700 sm:text-[17px]">
              Shyena represents the strength to rise higher than all, the vision to see what others miss, and the power to return with what truly matters.
            </p>
            <div className="mt-4 border-l-[3px] border-[#ffb703] pl-4 text-[14px] font-semibold leading-6 text-slate-800">
              That is the spirit behind everything we build.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1160px] px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-14">
          <div className="text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#e59a00]">Our story</p>
            <h2 className="mt-3 text-[27px] font-semibold tracking-tight sm:text-[30px]">Born from a problem. Built with purpose.</h2>
            <p className="mt-2 text-[13px] text-slate-600">AI was moving fast. But assurance was falling behind.</p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-4 md:gap-12">
            {STORY.map((item, index) => (
              <div key={item.number} className="relative">
                <StoryCard item={item} />
                {index < STORY.length - 1 ? <ArrowRight className="absolute -right-9 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-slate-900 md:block" /> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1160px] px-6 pb-12 sm:px-10 sm:pb-14 lg:px-12 lg:pb-14">
          <div className="text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#e59a00]">Three suites. One mission.</p>
            <h2 className="mt-3 text-[27px] font-semibold tracking-tight sm:text-[30px]">Understand. Evaluate. Defend.</h2>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {SUITES.map((suite) => <SuiteCard key={suite.name} suite={suite} />)}
          </div>
        </div>
      </section>

      <section className="border-y border-[#d8e7f4] bg-[#edf6ff]">
        <div className="mx-auto grid max-w-[1160px] grid-cols-2 divide-x divide-[#d8e0e9] px-6 py-6 sm:grid-cols-4 sm:px-10 lg:px-12">
          <Stat icon={ShieldCheck} kicker="Trusted by" value="Enterprises" detail="across industries" />
          <Stat icon={Target} kicker="Assuring" value="Millions" detail="of AI interactions daily" />
          <Stat icon={BarChart3} kicker="Across" value="Complex AI" detail="landscapes" />
          <Stat icon={CheckCircle2} kicker="With" value="Evidence" detail="you can defend" />
        </div>
      </section>

      <section className="px-4 py-2 sm:px-7 sm:py-2">
        <div className="relative mx-auto max-w-[1220px] overflow-hidden rounded-[22px] bg-[#03132d] text-white">
          <div className="absolute inset-0 opacity-45" aria-hidden="true">
            <svg viewBox="0 0 900 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
              <path d="M280 300 465 60 520 155 575 105 710 300Z" fill="#15365b" />
              <path d="m465 60 55 95-31-24-25 43-20-31Z" fill="#6f88a2" opacity=".75" />
              <path d="M150 300 340 150 410 205 500 145 610 225 730 170 900 280V300Z" fill="#0b2748" />
            </svg>
          </div>
          <div className="relative grid gap-8 px-8 py-8 sm:px-12 sm:py-10 lg:grid-cols-[1.1fr_.65fr] lg:px-14">
            <div>
              <span className="inline-flex border border-[#f4b000] px-2 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-white">
                <span className="mr-1.5">●</span> Live assurance walkthrough
              </span>
              <h2 className="mt-4 text-[29px] font-semibold tracking-tight sm:text-[31px]">See it evaluate your own agent</h2>
              <p className="mt-2 max-w-[560px] text-[13px] leading-5 text-slate-200">
                Bring one real scenario. We'll run it against your live conversational AI agent and walk through every judged turn with you.
              </p>
              <div className="mt-5 flex flex-wrap gap-4">
                <Button asChild className="h-9 rounded-none bg-[#ffb703] px-4 text-[11px] font-semibold text-slate-950 hover:bg-[#f0aa00]">
                  <Link to="/contact">Book a walkthrough <ArrowRight className="h-3.5 w-3.5" /></Link>
                </Button>
                <Button asChild variant="outline" className="h-9 rounded-none border-white/80 bg-transparent px-4 text-[11px] font-semibold text-white hover:bg-white/10 hover:text-white">
                  <Link to="/docs">See how it works</Link>
                </Button>
              </div>
            </div>
            <div className="flex flex-col justify-center lg:pl-8">
              <div className="text-4xl leading-none text-[#ffb703]">“</div>
              <p className="mt-1 text-[16px] leading-6 text-white">The story is no longer about testing whether AI works. It is about proving what it did.</p>
              <p className="mt-3 text-[14px] font-semibold text-white">That is Shyena.</p>
              <div className="mt-4 text-[#ffb703]"><CheckCircle2 className="h-8 w-8" /></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
