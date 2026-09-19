import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export type SeoLandingConfig = {
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  sections: Array<{ heading: string; body: string; bullets?: string[] }>;
  related: Array<{ label: string; href: string }>;
  faqs: Array<{ q: string; a: string }>;
};

export function SeoLanding({ config }: { config: SeoLandingConfig }) {
  return (
    <div className="bg-white text-[#17213f]">
      <section className="bg-[#17213f] text-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
          <div className="max-w-4xl">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#e87512]">{config.eyebrow}</div>
            <h1 className="mt-6 font-[Sora] text-[clamp(2.8rem,6vw,6.5rem)] font-extrabold leading-[.92] tracking-[-.065em]">{config.title}</h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">{config.description}</p>
            <div className="mt-8 flex flex-wrap gap-3"><Link to="/contact" className="inline-flex items-center gap-3 bg-[#e87512] px-6 py-4 text-xs font-extrabold uppercase tracking-[.12em] text-white">Request a working session <ArrowRight className="h-4 w-4" /></Link><Link to="/docs" className="inline-flex items-center gap-3 border border-white/20 px-6 py-4 text-xs font-extrabold uppercase tracking-[.12em] text-white">Read the engineering docs <ArrowRight className="h-4 w-4" /></Link></div>
          </div>
        </div>
      </section>
      <section className="border-b border-[#e2e5ea] bg-white"><div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20"><p className="max-w-4xl text-xl leading-9 text-[#596273]">{config.intro}</p></div></section>
      <section><div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10 lg:px-14 lg:py-24"><div className="grid gap-px overflow-hidden border border-[#e2e5ea] bg-[#e2e5ea] md:grid-cols-2">{config.sections.map((section, i) => <article key={section.heading} className="bg-white p-8 lg:p-10"><div className="font-mono text-[10px] text-[#e87512]">0{i + 1}</div><h2 className="mt-7 font-[Sora] text-2xl font-bold tracking-[-.03em]">{section.heading}</h2><p className="mt-4 text-sm leading-7 text-[#69707d]">{section.body}</p>{section.bullets && <ul className="mt-6 space-y-3">{section.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-sm leading-6 text-[#4f5968]"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#17213f]" />{bullet}</li>)}</ul>}</article>)}</div></div></section>
      <section className="border-y border-[#e2e5ea] bg-[#f8fafc]"><div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20"><h2 className="font-[Sora] text-3xl font-extrabold tracking-[-.04em]">Related Shyena capabilities</h2><div className="mt-7 flex flex-wrap gap-3">{config.related.map((item) => <Link key={item.href} to={item.href} className="border border-[#d8dce3] bg-white px-5 py-4 text-sm font-semibold text-[#17213f] hover:border-[#e87512]">{item.label}</Link>)}</div></div></section>
      <section><div className="mx-auto max-w-[1000px] px-6 py-16 sm:px-10 lg:py-24"><h2 className="font-[Sora] text-3xl font-extrabold tracking-[-.04em]">Frequently asked questions</h2><div className="mt-8 space-y-7">{config.faqs.map((faq) => <article key={faq.q} className="border-t border-[#e2e5ea] pt-6"><h3 className="font-[Sora] text-lg font-bold">{faq.q}</h3><p className="mt-3 text-sm leading-7 text-[#69707d]">{faq.a}</p></article>)}</div></div></section>
      <section className="bg-[#17213f] text-white"><div className="mx-auto max-w-[1000px] px-6 py-16 text-center sm:px-10 lg:py-20"><h2 className="font-[Sora] text-3xl font-extrabold">See the assurance model against a real AI system.</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65">Bring one business journey and see how Shyena maps, tests, evaluates, secures and connects the evidence to release decisions.</p><Link to="/contact" className="mt-8 inline-flex items-center gap-3 bg-[#e87512] px-6 py-4 text-xs font-extrabold uppercase tracking-[.12em] text-white">Request a demo <ArrowRight className="h-4 w-4" /></Link></div></section>
    </div>
  );
}

export function seoHead(config: SeoLandingConfig) {
  return { links: [{ rel: "canonical", href: `https://www.shyena.eu${config.path}` }], meta: [
    { title: `${config.title} | Shyena` },
    { name: "description", content: config.description },
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    { property: "og:title", content: `${config.title} | Shyena` },
    { property: "og:description", content: config.description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `https://www.shyena.eu${config.path}` },
    { property: "og:image", content: "https://www.shyena.eu/shyena-logo-exact.webp" },
    { property: "og:image:alt", content: "Shyena AI assurance platform" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: "https://www.shyena.eu/shyena-logo-exact.webp" },
  ] };
}

export function faqSchema(config: SeoLandingConfig) {
  return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: config.faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };
}
