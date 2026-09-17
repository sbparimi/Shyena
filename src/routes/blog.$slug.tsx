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
    <section className="relative overflow-hidden bg-[#f7f8fb] text-[#17213f]">
      <div className="mx-auto w-full max-w-5xl px-5 pb-10 pt-12 sm:px-8 sm:pt-20">
        <div className="mb-10 flex items-center justify-center">
          <img src="/shyena-mark.svg?v=20260917" alt="Shyena" className="h-14 w-11 object-contain" />
          <span className="ml-3 font-[Sora] text-2xl font-extrabold tracking-[-.04em] text-[#0B1B3A]">Shyena</span>
        </div>
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#f0d6c2] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#e87512]">{article.category || "Engineering"}</span>
          <h1 className="mt-6 text-3xl font-bold leading-[1.1] tracking-[-.035em] sm:text-5xl">{article.title}</h1>
        </div>
        {article.diagram && <div className="mt-10"><ArticleConceptDiagram concept={article.diagram as ArticleConcept} /></div>}
        {article.thesis && <p className="mx-auto mt-10 max-w-3xl text-center text-base font-medium leading-relaxed text-[#4f5b70] sm:text-lg">{article.thesis}</p>}
        <div className="mt-5 text-center text-sm text-[#7b8494]">{article.author || "Shyena Engineering"}</div>
      </div>
    </section>

    <article className="mx-auto w-full max-w-3xl px-5 pb-24 pt-12 sm:px-8">
      <GeneratedMarkdown sourcePath={article.sourcePath} />

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
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4"><Button asChild variant="ghost" className="px-0 text-muted-foreground hover:text-foreground"><Link to="/blog"><ArrowLeft className="mr-2 h-4 w-4" />Back to Insights</Link></Button><Link to="/docs" className="inline-flex items-center gap-1 text-sm font-semibold text-[#e87512]">Documentation <ExternalLink className="h-3.5 w-3.5" /></Link></div>
    </article>
  </>;
}