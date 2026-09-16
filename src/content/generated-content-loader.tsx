import { Markdown, type MarkdownComponents } from "@tanstack/markdown/react";
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
  return source
    .replace(/cite[^]*/g, "")
    .replace(/url[^]*/g, "")
    .replace(/\n{3,}/g, "\n\n");
}

function sourceFor(sourcePath: string) {
  const normalized = `../../${sourcePath}`;
  return blogSources[normalized] ?? docSources[normalized];
}

export function GeneratedMarkdown({ sourcePath }: { sourcePath: string }) {
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
      <Markdown components={components}>{sanitizePublishedMarkdown(source)}</Markdown>
    </div>
  );
}

export function getGeneratedArticle(slug: string) {
  return generatedContent.articles.find((article) => article.slug === slug);
}

export function getGeneratedDoc(slug: string) {
  return generatedContent.docs.find((doc) => doc.slug === slug);
}
