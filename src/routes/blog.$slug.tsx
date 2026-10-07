import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArticleConceptDiagram, type ArticleConcept } from "@/components/blog/article-concept-diagrams";
import { GeneratedMarkdown, getGeneratedArticle } from "@/content/generated-content-loader";

const SITE_URL = "https://www.shyena.eu";
const BRAND_LOGO = `${SITE_URL}/shyena-logo-lockup.svg?v=20260917`;

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const article = getGeneratedArticle(params.slug);
    if (!article) return { meta: [{ title: "Article not found — Shyena" }], links: [{ rel: "canonical", href: `${SITE_URL}/blog/${params.slug}` }] };
    return {
      meta: [
        { title: `${article.title} — Shyena` },
        { name: "description", content: article.description },
        { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
        ...(article.primary_keyword ? [{ name: "keywords", content: article.primary_keyword }] : []),
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.description },
        { property: "og:type", content: "article" },
        { property: "og:site_name", content: "Shyena" },
        { property: "og:url", content: `${SITE_URL}/blog/${params.slug}` },
        { property: "og:image", content: BRAND_LOGO },
        { property: "article:section", content: article.category || "AI assurance" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: article.title },
        { name: "twitter:description", content: article.description },
        { name: "twitter:image", content: BRAND_LOGO },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/blog/${params.slug}` }],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { slug } = Route.useParams();
  const article = getGeneratedArticle(slug);

  if (!article) {
    return <div className="mx-auto w-full max-w-3xl px-5 py-24 text-center sm:px-8"><h1 className="text-3xl font-bold">Article not found</h1><p className="mt-4 text-muted-foreground">This article is not published yet.</p><Button asChild className="mt-8" variant="outline"><Link to="/blog"><ArrowLeft className="mr-2 h-4 w-4" />Back to Insights</Link></Button></div>;
  }

  const articleUrl = `${SITE_URL}/blog/${article.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${articleUrl}#article`,
        headline: article.title,
        description: article.description,
        url: articleUrl,
        mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
        author: { "@type": "Organization", name: article.author || "Shyena Engineering", url: SITE_URL },
        publisher: { "@type": "Organization", name: "Shyena", url: SITE_URL, logo: { "@type": "ImageObject", url: BRAND_LOGO } },
        articleSection: article.category || "AI assurance",
        keywords: article.primary_keyword || "AI agent testing, AI assurance",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${articleUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Shyena", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: article.title, item: articleUrl },
        ],
      },
    ],
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <section className="relative overflow-hidden border-b border-[#e7e9ee] bg-[#f8f9fb] text-[#17213f]">
      <div className="mx-auto w-full max-w-6xl px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16">
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[.18em] text-[#e87512]">
            <span>{article.category || "Engineering"}</span>
            <span className="h-1 w-1 rounded-full bg-[#c4c9d3]" />
            <span>Technical guide</span>
            <span className="h-1 w-1 rounded-full bg-[#c4c9d3]" />
            <span>~15 min read</span>
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-.05em] text-[#0b1733] sm:text-6xl">{article.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#566176] sm:text-xl">{article.description}</p>
          <div className="mt-7 flex items-center gap-3 text-sm text-[#697386]">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0b1733] text-[10px] font-bold text-white">S</span>
            <span>{article.author || "Shyena Engineering"}</span>
            <span className="text-[#c5cad3]">·</span>
            <span>AI Agent Assurance</span>
          </div>
        </div>
        {article.diagram && <div className="mt-12"><ArticleConceptDiagram concept={article.diagram as ArticleConcept} /></div>}
        {article.thesis && (
          <div className="mt-8 grid gap-5 border-y border-[#dfe3ea] py-7 sm:grid-cols-[140px_1fr] sm:items-start">
            <div className="font-mono text-[10px] font-semibold uppercase tracking-[.2em] text-[#8a92a2]">The thesis</div>
            <p className="max-w-4xl text-base font-medium leading-7 text-[#26334d] sm:text-lg">{article.thesis}</p>
          </div>
        )}
      </div>
    </section>

    <article className="mx-auto w-full max-w-6xl px-5 pb-24 pt-10 sm:px-8 sm:pt-14">
      <div className="grid gap-12 lg:grid-cols-[180px_minmax(0,760px)_1fr] lg:items-start">
        <aside className="hidden lg:sticky lg:top-28 lg:block">
          <div className="font-mono text-[9px] font-semibold uppercase tracking-[.2em] text-[#9aa2b0]">In this guide</div>
          <nav className="mt-4 space-y-3 text-[12px] leading-5 text-[#6a7384]">
            <a href="#the-ecaap-assurance-model" className="block hover:text-[#e87512]">ECAAP assurance model</a>
            <a href="#1--prove-the-contract" className="block hover:text-[#e87512]">Contracts</a>
            <a href="#2--prove-the-behaviour" className="block hover:text-[#e87512]">Behaviour</a>
            <a href="#3--evaluate-the-answer" className="block hover:text-[#e87512]">Answer quality</a>
            <a href="#4--prevent-false-greens" className="block hover:text-[#e87512]">False greens</a>
            <a href="#5--test-the-trust-boundary" className="block hover:text-[#e87512]">Security</a>
            <a href="#6--close-the-production-loop" className="block hover:text-[#e87512]">Production</a>
            <a href="#7--build-the-evidence-model" className="block hover:text-[#e87512]">Evidence</a>
          </nav>
        </aside>

        <div className="min-w-0">
          <GeneratedMarkdown
            sourcePath={article.sourcePath}
            visuals={slug === "how-to-test-a-cognigy-agent" ? {
              "assurance-path": <ArticleConceptDiagram concept="cognigy" />,
              "quadrants": <ArticleConceptDiagram concept="contracts" />,
              "flow-to-tests": <ArticleConceptDiagram concept="trajectory" />,
              "risk-universe": <ArticleConceptDiagram concept="systems" />,
              "rag": <ArticleConceptDiagram concept="judge" />,
              "false-green": <ArticleConceptDiagram concept="false-pass" />,
              "evidence": <ArticleConceptDiagram concept="evidence" />,
            } : {}}
          />

          <section className="mt-16 rounded-2xl border border-[#e2e5eb] bg-white p-6 sm:p-8" aria-labelledby="related-resources-heading">
            <div className="text-xs font-semibold uppercase tracking-[.16em] text-[#e87512]">Continue the assurance journey</div>
            <h2 id="related-resources-heading" className="mt-2 text-xl font-bold text-[#17213f]">Explore the system behind the article.</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Link to="/vera" className="group rounded-xl border border-[#e1e4e9] p-4 transition hover:-translate-y-0.5 hover:border-[#e87512]"><div className="font-semibold text-[#17213f]">Vera · Test &amp; Evaluate <ArrowRight className="ml-1 inline h-4 w-4 transition-transform group-hover:translate-x-1" /></div><p className="mt-1 text-sm leading-5 text-[#69707d]">Run realistic agent journeys and evaluate behaviour.</p></Link>
              <Link to="/nexus" className="group rounded-xl border border-[#e1e4e9] p-4 transition hover:-translate-y-0.5 hover:border-[#e87512]"><div className="font-semibold text-[#17213f]">Nexus · Understand <ArrowRight className="ml-1 inline h-4 w-4 transition-transform group-hover:translate-x-1" /></div><p className="mt-1 text-sm leading-5 text-[#69707d]">Map system logic and turn it into test intelligence.</p></Link>
              <Link to="/chakra" className="group rounded-xl border border-[#e1e4e9] p-4 transition hover:-translate-y-0.5 hover:border-[#e87512]"><div className="font-semibold text-[#17213f]">Chakra · Secure <ArrowRight className="ml-1 inline h-4 w-4 transition-transform group-hover:translate-x-1" /></div><p className="mt-1 text-sm leading-5 text-[#69707d]">Test trust boundaries and adversarial paths.</p></Link>
              <Link to="/docs/evaluation-model" className="group rounded-xl border border-[#e1e4e9] p-4 transition hover:-translate-y-0.5 hover:border-[#e87512]"><div className="font-semibold text-[#17213f]">Evaluation model <ArrowRight className="ml-1 inline h-4 w-4 transition-transform group-hover:translate-x-1" /></div><p className="mt-1 text-sm leading-5 text-[#69707d]">See how deterministic, semantic and integrity evidence combine.</p></Link>
            </div>
          </section>

          <div className="mt-8 overflow-hidden rounded-2xl border border-[#f0d6c2] bg-[#fff8f2] px-6 py-10 text-center sm:px-10">
            <img src="/shyena-mark.svg?v=20260917" alt="" aria-hidden="true" className="mx-auto h-12 w-10 object-contain" />
            <h2 className="mt-4 text-xl font-bold text-[#17213f] sm:text-2xl">Make the release decision defensible.</h2>
            <p className="mx-auto mt-3 max-w-lg text-[#69707d]">Shyena connects live agent behaviour to evidence, evaluation and release governance.</p>
            <Button asChild size="lg" className="mt-6"><Link to="/contact">See Shyena in action <ArrowRight className="h-4 w-4" /></Link></Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <Button asChild variant="ghost" className="px-0 text-muted-foreground hover:text-foreground"><Link to="/blog"><ArrowLeft className="mr-2 h-4 w-4" />Back to Insights</Link></Button>
            <Link to="/docs" className="inline-flex items-center gap-1 text-sm font-semibold text-[#e87512]">Documentation <ExternalLink className="h-3.5 w-3.5" /></Link>
          </div>
        </div>
      </div>
    </article>
  </>;
}