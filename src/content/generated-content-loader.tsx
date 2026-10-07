import { Markdown, type MarkdownComponents } from "@tanstack/markdown/react";
import type { ReactNode } from "react";
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

export function GeneratedMarkdown({ sourcePath, visuals = {} }: { sourcePath: string; visuals?: Record<string, ReactNode> }) {
  const source = sourceFor(sourcePath);
  if (!source) {
    return (
      <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-6 text-sm text-muted-foreground">
        Published content is temporarily unavailable.
      </div>
    );
  }

  const cleanSource = sanitizePublishedMarkdown(source);
  const parts = cleanSource.split(/<!--\s*SHYENA_VISUAL:([a-z0-9-]+)\s*-->/gi);

  return (
    <div className="generated-content">
      {parts.map((part, index) => {
        if (index % 2 === 1) {
          const visual = visuals[part.trim().toLowerCase()];
          return visual ? <div key={"visual-" + index} className="my-12 sm:my-16">{visual}</div> : null;
        }
        if (!part.trim()) return null;
        return <Markdown key={"markdown-" + index} components={components}>{part}</Markdown>;
      })}
    </div>
  );rt { Markdown, type MarkdownComponents } from "@tanstack/markdown/react";
import type { ReactNode } from "react";
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

export function GeneratedMarkdown({ sourcePath, visuals = {} }: { sourcePath: string; visuals?: Record<string, ReactNode> }) {
  const source = sourceFor(sourcePath);
  if (!source) {
    return (
      <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-6 text-sm text-muted-foreground">
        Published content is temporarily unavailable.
      </div>
    );
  }

  const cleanSource = sanitizePublishedMarkdown(source);\n  const parts = cleanSource.split(/<!--\\s*SHYENA_VISUAL:([a-z0-9-]+)\\s*-->/gi);\n\n  return (\n    <div className="generated-content">\n      {parts.map((part, index) => {\n        if (index % 2 === 1) {\n          const visual = visuals[part.trim().toLowerCase()];\n          return visual ? <div key={"visual-" + index} className="my-12 sm:my-16">{visual}</div> : null;\n        }\n        if (!part.trim()) return null;\n        return <Markdown key={"markdown-" + index} components={components}>{part}</Markdown>;\n      })}\n    </div>\n  );
}

export function getGeneratedArticle(slug: string) {
  return generatedContent.articles.find((article) => article.slug === slug);
}

export function getGeneratedDoc(slug: string) {
  return generatedContent.docs.find((doc) => doc.slug === slug);
}
