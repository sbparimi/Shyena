import { Children, isValidElement, type ReactNode } from "react";
import { Markdown, type MarkdownComponents } from "@tanstack/markdown/react";
import { ArticleConceptDiagram } from "@/components/blog/article-concept-diagrams";
import type { InlineArticleVisual } from "@/content/article-visuals";
import { stripLeadingTitle } from "@/lib/markdown";
import { generatedContent } from "@/content/generated-content";

const blogSources = import.meta.glob("../../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const docSources = import.meta.glob("../../content/docs/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const components = {
  a(props) {
    const href = props.href || "";
    const external = /^https?:\/\//i.test(href);
    return (
      <a
        {...props}
        href={href}
        rel={external ? "noopener noreferrer" : props.rel}
        target={external ? "_blank" : props.target}
      />
    );
  },
  img(props) {
    return <img {...props} loading="lazy" decoding="async" />;
  },
} satisfies MarkdownComponents;

/**
 * Published markdown can contain internal ChatGPT citation tokens from the
 * research workflow. Those tokens are not valid website markup and the
 * markdown renderer exposes them as raw text. Remove them before rendering;
 * public source links remain the authoritative citations for readers.
 */
function sanitizePublishedMarkdown(source: string) {
  // Drop the leading "# Title" (after any frontmatter): the page template already renders the title as
  // the one <h1>, so repeating it in the body would duplicate the headline.
  return stripLeadingTitle(source)
    .replace(/cite[^]*/g, "")
    .replace(/url[^]*/g, "")
    .replace(/\n{3,}/g, "\n\n");
}

function sourceFor(sourcePath: string) {
  const normalized = `../../${sourcePath}`;
  return blogSources[normalized] ?? docSources[normalized];
}

function textOf(node: ReactNode): string {
  return Children.toArray(node)
    .map((child) => {
      if (typeof child === "string" || typeof child === "number") return String(child);
      if (isValidElement<{ children?: ReactNode }>(child)) return textOf(child.props.children);
      return "";
    })
    .join("");
}

/**
 * Renders a concept diagram after each section heading listed in `visuals`.
 * Rendering it here (instead of inserting DOM nodes after hydration) keeps the
 * server and client markup identical.
 */
function withInlineVisuals(visuals: readonly InlineArticleVisual[]): MarkdownComponents {
  return {
    ...components,
    h2(props) {
      const heading = textOf(props.children).toLowerCase();
      const visual = visuals.find((item) => heading.includes(item.match.toLowerCase()));
      return (
        <>
          <h2 {...props} />
          {visual && (
            <figure className="shyena-inline-visual my-8 w-full">
              <ArticleConceptDiagram concept={visual.concept} />
              <figcaption className="mt-3 text-center text-xs font-medium uppercase tracking-[0.16em] text-[var(--warp-muted)]">
                {visual.label}
              </figcaption>
            </figure>
          )}
        </>
      );
    },
  };
}

export function GeneratedMarkdown({
  sourcePath,
  inlineVisuals,
}: {
  sourcePath: string;
  inlineVisuals?: readonly InlineArticleVisual[] | undefined;
}) {
  const source = sourceFor(sourcePath);
  if (!source) {
    return (
      <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-6 text-sm text-muted-foreground">
        Published content is temporarily unavailable.
      </div>
    );
  }

  return (
    <div className="generated-content">
      <Markdown components={inlineVisuals?.length ? withInlineVisuals(inlineVisuals) : components}>
        {sanitizePublishedMarkdown(source)}
      </Markdown>
    </div>
  );
}

export function getGeneratedArticle(slug: string) {
  return generatedContent.articles.find((article) => article.slug === slug);
}

export function getGeneratedDoc(slug: string) {
  return generatedContent.docs.find((doc) => doc.slug === slug);
}
