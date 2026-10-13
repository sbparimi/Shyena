import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, FileText, PlayCircle } from "lucide-react";

const SITE = "https://www.shyena.eu";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "AI Testing & Evaluation Resources | Shyena" },
      {
        name: "description",
        content:
          "Guides, tutorials, case studies and insights for AI agent testing, evaluation, security and production assurance.",
      },
      {
        name: "robots",
        content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
      },
      { property: "og:title", content: "AI Testing & Evaluation Resources | Shyena" },
      {
        property: "og:description",
        content:
          "Practical resources for testing, evaluating, securing and releasing AI agents and enterprise systems.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Shyena" },
      { property: "og:url", content: `${SITE}/resources` },
      { property: "og:image", content: `${SITE}/shyena-logo-lockup.svg?v=20260917` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI Testing & Evaluation Resources | Shyena" },
      {
        name: "twitter:description",
        content: "Guides and insights for AI agent testing, evaluation and security.",
      },
      { name: "twitter:image", content: `${SITE}/shyena-logo-lockup.svg?v=20260917` },
    ],
  }),
  component: ResourcesPage,
});

const cards = [
  [
    "GUIDE",
    "AI Agent Testing Guide",
    "A practical guide to testing GenAI and agentic systems.",
    "Read guide",
    BookOpen,
  ],
  [
    "CASE STUDY",
    "How BMW Scaled AI Testing",
    "See how structured assurance can turn complex AI testing into repeatable evidence.",
    "Read more",
    FileText,
  ],
  [
    "WEBINAR",
    "From Testing to Trust",
    "Watch a practical session on moving AI assurance from scripts to production evidence.",
    "Watch now",
    PlayCircle,
  ],
] as const;
function ResourceBrandVisual({ Icon }: { Icon: typeof BookOpen }) {
  return (
    <div className="relative flex h-40 items-center justify-center overflow-hidden bg-[var(--warp-surface-soft)]">
      <div className="absolute right-5 top-4 text-[9px] font-semibold uppercase tracking-[.18em] text-[var(--warp-muted)]">
        SHYENA
      </div>
      <img
        src="/shyena-mark.svg?v=20260917"
        alt=""
        aria-hidden="true"
        className="h-20 w-16 object-contain opacity-95"
      />
      <Icon
        className="absolute bottom-4 right-5 h-5 w-5 text-[var(--warp-accent-text)]"
        aria-hidden="true"
      />
    </div>
  );
}
function ResourcesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE}/resources#collection`,
    url: `${SITE}/resources`,
    name: "AI Testing & Evaluation Resources",
    description:
      "Guides, tutorials, case studies and insights for AI agent testing, evaluation, security and production assurance.",
    isPartOf: { "@id": `${SITE}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: cards.map(([type, title], index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: title,
        url: `${SITE}/blog`,
      })),
    },
  };
  return (
    <main className="overflow-x-hidden bg-white text-[var(--warp-ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="border-b border-[var(--warp-border)]">
        <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 lg:px-10 lg:py-18">
          <div className="text-xs font-semibold uppercase tracking-[.16em] text-[var(--warp-accent-text)]">
            Resources
          </div>
          <h1 className="mt-4 text-[clamp(2.7rem,6vw,5rem)] font-extrabold leading-[.96] tracking-[-.055em]">
            Learn, explore and stay ahead.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--warp-muted)]">
            Guides, tutorials, case studies and insights to help you build better AI systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-5 border-b border-[var(--warp-border)] pb-3 text-sm font-semibold">
            <span className="border-b-2 border-[var(--warp-border-strong)] pb-3 text-[var(--warp-accent-text)]">
              All
            </span>
            <Link to="/blog" className="pb-3 text-[var(--warp-muted)] hover:text-[var(--warp-ink)]">
              Blog
            </Link>
            <Link to="/blog" className="pb-3 text-[var(--warp-muted)] hover:text-[var(--warp-ink)]">
              Case studies
            </Link>
            <Link to="/blog" className="pb-3 text-[var(--warp-muted)] hover:text-[var(--warp-ink)]">
              Guides
            </Link>
            <Link to="/blog" className="pb-3 text-[var(--warp-muted)] hover:text-[var(--warp-ink)]">
              Webinars
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[var(--warp-surface-soft)]">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
          <div className="grid gap-4 lg:grid-cols-3">
            {cards.map(([type, title, text, cta, Icon]) => (
              <article
                key={title}
                className="overflow-hidden rounded-xl border border-[var(--warp-border)] bg-white transition hover:-translate-y-0.5 hover:border-[var(--warp-border)] hover:shadow-[0_22px_50px_-34px_rgba(23,33,63,.4)]"
              >
                <ResourceBrandVisual Icon={Icon} />
                <div className="p-6">
                  <div className="text-[10px] font-bold uppercase tracking-[.14em] text-[var(--warp-accent-text)]">
                    {type}
                  </div>
                  <h2 className="mt-3 text-xl font-extrabold text-[var(--warp-ink)]">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-[var(--warp-muted)]">{text}</p>
                  <Link
                    to="/blog"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--warp-accent-text)]"
                  >
                    {cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
