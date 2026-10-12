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
    <div className="bg-white text-[var(--warp-ink)]">
      <section className="bg-[var(--warp-surface-soft)] text-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
          <div className="max-w-4xl">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[var(--warp-accent-text)]">
              {config.eyebrow}
            </div>
            <h1 className="mt-6 text-[clamp(2.8rem,6vw,6.5rem)] font-extrabold leading-[.92] tracking-[-.065em]">
              {config.title}
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--warp-muted)] sm:text-xl">
              {config.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-[var(--warp-lime)] px-6 py-4 text-xs font-extrabold uppercase tracking-[.12em] text-[var(--warp-on-accent)] warp-btn"
              >
                Request a working session <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/docs"
                className="inline-flex items-center gap-3 border border-white/20 px-6 py-4 text-xs font-extrabold uppercase tracking-[.12em] text-white"
              >
                Read the engineering docs <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-[var(--warp-border)] bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
          <p className="max-w-4xl text-xl leading-9 text-[var(--warp-muted)]">{config.intro}</p>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10 lg:px-14 lg:py-24">
          <div className="grid gap-px overflow-hidden border border-[var(--warp-border)] bg-[var(--warp-surface-soft)] md:grid-cols-2">
            {config.sections.map((section, i) => (
              <article key={section.heading} className="bg-white p-8 lg:p-10">
                <div className="font-mono text-[10px] text-[var(--warp-accent-text)]">0{i + 1}</div>
                <h2 className="mt-7 text-2xl font-bold tracking-[-.03em]">{section.heading}</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--warp-muted)]">{section.body}</p>
                {section.bullets && (
                  <ul className="mt-6 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-sm leading-6 text-[var(--warp-muted)]"
                      >
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--warp-ink)]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-[var(--warp-border)] bg-[var(--warp-surface-soft)]">
        <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
          <h2 className=" text-3xl font-extrabold tracking-[-.04em]">
            Related Shyena capabilities
          </h2>
          <div className="mt-7 flex flex-wrap gap-3">
            {config.related.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="border border-[var(--warp-border)] bg-white px-5 py-4 text-sm font-semibold text-[var(--warp-ink)] hover:border-[var(--warp-border-strong)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-[1000px] px-6 py-16 sm:px-10 lg:py-24">
          <h2 className=" text-3xl font-extrabold tracking-[-.04em]">Frequently asked questions</h2>
          <div className="mt-8 space-y-7">
            {config.faqs.map((faq) => (
              <article key={faq.q} className="border-t border-[var(--warp-border)] pt-6">
                <h3 className=" text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--warp-muted)]">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[var(--warp-surface-soft)] text-white">
        <div className="mx-auto max-w-[1000px] px-6 py-16 text-center sm:px-10 lg:py-20">
          <h2 className=" text-3xl font-extrabold">
            See the assurance model against a real AI system.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--warp-muted)]">
            Bring one business journey and see how Shyena maps, tests, evaluates, secures and
            connects the evidence to release decisions.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 bg-[var(--warp-lime)] px-6 py-4 text-xs font-extrabold uppercase tracking-[.12em] text-[var(--warp-on-accent)] warp-btn"
          >
            Request a demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export function seoHead(config: SeoLandingConfig) {
  const url = `https://www.shyena.eu${config.path}`;
  const title = `${config.title} | Shyena`;
  return {
    links: [{ rel: "canonical", href: url }],
    meta: [
      { title },
      { name: "description", content: config.description },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: config.description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Shyena" },
      { property: "og:url", content: url },
      { property: "og:image", content: "https://www.shyena.eu/shyena-logo-exact.webp" },
      { property: "og:image:alt", content: "Shyena AI assurance platform" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: config.description },
      { name: "twitter:image", content: "https://www.shyena.eu/shyena-logo-exact.webp" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(webPageSchema(config)) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema(config)) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(config)) },
    ],
  };
}

export function webPageSchema(config: SeoLandingConfig) {
  const url = `https://www.shyena.eu${config.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: config.title,
    description: config.description,
    isPartOf: { "@id": "https://www.shyena.eu/#website" },
    about: {
      "@type": "Thing",
      name: config.eyebrow,
    },
    inLanguage: "en",
  };
}

export function breadcrumbSchema(config: SeoLandingConfig) {
  const label = config.title.replace(/\s*\|\s*Shyena$/i, "");
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Shyena", item: "https://www.shyena.eu/" },
      {
        "@type": "ListItem",
        position: 2,
        name: label,
        item: `https://www.shyena.eu${config.path}`,
      },
    ],
  };
}

export function faqSchema(config: SeoLandingConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}
