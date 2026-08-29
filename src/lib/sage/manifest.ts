import type { DraftArticle, PublicationManifest, SEOReport } from "./types";

export function createPublicationManifest(draft: DraftArticle, seo: SEOReport): PublicationManifest {
  if (!seo.passed) throw new Error("Cannot create a publication manifest before the SEO contract passes.");

  return {
    path: `content/blog/${draft.slug}.mdx`,
    slug: draft.slug,
    canonical: `https://shyena.eu/blog/${draft.slug}`,
    branch: `content/${draft.slug}`,
    requiresReview: true,
  };
}
