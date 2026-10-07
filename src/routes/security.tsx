import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Database, Fingerprint, LockKeyhole, ShieldAlert, Wrench } from "lucide-react";

export const Route=createFileRoute("/security")({
  head:()=>({meta:[
    {title:"Agentic AI Security Testing | Ziran | Shyena"},
    {name:"description",content:"Controlled security testing for Cognigy-built AI Agents covering prompt injection, Tool abuse, authorization, data exposure, tenant boundaries and agentic attack paths."},
    {name:"robots",content:"index,follow"},
    {property:"og:title",content:"Agentic AI Security Testing | Ziran | Shyena"},
    {property:"og:description",content:"Test the security boundaries of Cognigy AI Agents under controlled adversarial journeys."},
    {property:"og:type",content:"website"}
  ],links:[{rel:"canonical",href:"https://www.shyena.eu/security"}]}),
  component:Security
});

const pillars=[
  [ShieldAlert,"Prompt injection","Test whether untrusted instructions can alter protected Agent behaviour or security policy."],
  [Wrench,"Tool abuse","Test capability authorization, sensitive parameters, Tool invocation and downstream side effects."],
  [Database,"Data boundaries","Test cross-customer, cross-account and tenant isolation using controlled data."],
  [Fingerprint,"Identity & authorization","Test whether conversational claims can improperly create or bypass privileged context."],
  [LockKeyhole,"Attack-path regression","Turn security findings into repeatable journeys that can run against future releases."]
] as const;

function Security(){
 return <div className="bg-[#f7f4ec] text-[#0e172b]">
  <section className="bg-[#07101f] text-white">
   <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:py-28">
    <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[#f18a32]">Ziran / Agentic AI Security</p>
    <h1 className="mt-5 max-w-5xl font-[Sora] text-5xl font-extrabold leading-[.98] tracking-[-.055em] sm:text-6xl lg:text-7xl">Test the security boundaries of your Cognigy Agent.</h1>
    <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65">Controlled adversarial testing for Agents that can reason, retrieve information, invoke Tools and cause business side effects.</p>
    <div className="mt-8 flex flex-wrap gap-3">
      <Link to="/contact" className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#f18a32] px-4 text-sm font-bold text-[#07101f]">Discuss a security test <ArrowRight className="h-3.5 w-3.5"/></Link>
      <Link to="/blog" className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/15 px-4 text-sm font-bold text-white">Read security research <ArrowRight className="h-3.5 w-3.5"/></Link>
    </div>
   </div>
  </section>
  <section className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 lg:py-20">
   <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    {pillars.map(([Icon,title,desc])=><article key={title} className="rounded-2xl border border-[#d2ccc0] bg-white p-7">
      <Icon className="h-5 w-5 text-[#a87900]"/>
      <h2 className="mt-5 text-xl font-extrabold">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-[#596273]">{desc}</p>
    </article>)}
   </div>
   <div className="mt-12 grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
    <div>
      <p className="font-mono text-[10px] font-bold uppercase tracking-[.18em] text-[#a87900]">Security lifecycle</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-[-.035em]">Map. Attack. Observe. Prove. Re-test.</h2>
      <p className="mt-4 text-sm leading-7 text-[#596273]">Ziran treats Agent red teaming as an engineering lifecycle, not a collection of jailbreak screenshots.</p>
    </div>
    <div className="rounded-2xl border border-[#d2ccc0] bg-[#101a19] p-7 text-white sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
       {["Map Agent capabilities","Define security invariants","Generate adversarial journeys","Execute in controlled environments","Correlate conversation + execution evidence","Turn findings into security regression"].map((x,i)=><div key={x} className="border-l border-white/15 pl-4"><span className="font-mono text-[10px] text-[#f18a32]">0{i+1}</span><p className="mt-1 text-sm font-semibold text-white/80">{x}</p></div>)}
      </div>
    </div>
   </div>
   <div className="mt-12 rounded-2xl border border-[#d2ccc0] bg-[#fff4cc] p-7 sm:p-9">
     <p className="font-mono text-[10px] font-bold uppercase tracking-[.18em] text-[#8c6500]">Five-part research series</p>
     <h2 className="mt-3 text-2xl font-extrabold">Security testing of Cognigy-built Agents</h2>
     <p className="mt-3 max-w-3xl text-sm leading-6 text-[#596273]">Deep technical articles covering the Agent attack surface, prompt injection, Tool authorization, data exfiltration and repeatable red-team methodology.</p>
     <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-sm font-bold">Explore the research <ArrowRight className="h-3.5 w-3.5"/></Link>
   </div>
   <div className="mt-12 rounded-2xl border border-[#d2ccc0] bg-white p-7 sm:p-9">
     <p className="font-mono text-[10px] font-bold uppercase tracking-[.18em] text-[#a87900]">Testing boundary</p>
     <h2 className="mt-3 text-2xl font-extrabold">Controlled, authorized security testing</h2>
     <p className="mt-3 max-w-3xl text-sm leading-6 text-[#596273]">The preferred boundary is a customer-controlled test or staging environment with scoped credentials, least-privilege access and synthetic or non-production data. Ziran is a testing capability, not a substitute for legal, compliance or penetration-testing obligations.</p>
   </div>
  </section>
 </div>
}