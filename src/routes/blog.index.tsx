import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, ArrowRight, Newspaper } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DivergentPathsCover,
  FalsePassCover,
  MethodologyCover,
  SecurityGraphCover,
  JudgeGaugeCover,
} from "@/components/blog/blog-cover-art";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Shyena" },
      {
        name: "description",
        content:
          "Field notes on testing conversational AI at scale: evaluation models, judge design, and release gating.",
      },
      { property: "og:title", content: "Blog — Shyena" },
      {
        property: "og:description",
        content:
          "Field notes on testing conversational AI at scale: evaluation models, judge design, and release gating.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/blog" }],
  }),
  component: BlogIndexPage,
});

const ARTICLES = [
  {
    id: "why-conversational-ai-needs-a-different-testing-model",
    title: "Why Conversational AI Needs a Different Testing Model",
    category: "Testing Strategy",
    excerpt:
      "The same test persona can take a different but equally valid path every run. That breaks the assumptions conventional QA is built on.",
    readTime: "6 min read",
    status: "published",
    cover: DivergentPathsCover,
  },
  {
    id: "the-problem-with-green-checkmarks-on-broken-conversations",
    title: "The Problem With Green Checkmarks on Broken Conversations",
    category: "Quality Assurance",
    excerpt:
      "When a test runner reports success on a conversation that never reached its goal, your metrics are lying to you.",
    readTime: "5 min read",
    status: "published",
    cover: FalsePassCover,
  },
  {
    id: "how-to-test-a-cognigy-agent",
    title: "How to Test a Cognigy Agent: A Practical Guide",
    category: "Testing Strategy",
    excerpt:
      "A practical framework for testing Cognigy conversational and voice agents — from goal-driven test design to catching false passes before they ship.",
    readTime: "7 min read",
    status: "published",
    cover: MethodologyCover,
  },
  {
    id: "cognigy-agent-security-testing-with-ziran",
    title: "Cognigy Agent Security Testing: Red-Teaming with Ziran",
    category: "Security",
    excerpt:
      "Inside the pipeline we use to red-team Cognigy agents: risk-scored campaign selection, adaptive execution with Ziran, and honest scoring.",
    readTime: "7 min read",
    status: "published",
    cover: SecurityGraphCover,
  },
  {
    id: "what-llm-as-judge-actually-means-in-practice",
    title: "What 'LLM-as-Judge' Actually Means in Practice",
    category: "Evaluation Model",
    excerpt:
      "Subjective quality is not a bug. It is a dimension that deterministic assertions were never designed to capture.",
    readTime: "7 min read",
    status: "coming-soon",
    cover: JudgeGaugeCover,
  },
];

function BlogIndexPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-lavender text-lavender-foreground">
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-6 pt-20 sm:px-8 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <Newspaper className="h-3.5 w-3.5 text-primary" />
              Blog
            </span>
            <h1 className="mt-6 text-5xl leading-[1.05] sm:text-7xl">Blog</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Notes on testing conversational AI at scale: what we have learned about evaluation models,
              judge design, and the difference between a passing metric and a release-worthy agent.
            </p>
          </div>
        </div>
      </section>

      {/* Article grid */}
      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article) => {
            const isComingSoon = article.status === "coming-soon";
            const CardWrapper = isComingSoon ? "div" : Link;
            const wrapperProps = isComingSoon
              ? {}
              : { to: "/blog/$slug", params: { slug: article.id } };
            const Cover = article.cover;

            return (
              <CardWrapper
                key={article.id}
                {...wrapperProps}
                className={cn(
                  "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all",
                  isComingSoon ? "opacity-70" : "hover:-translate-y-0.5 hover:border-primary/30",
                )}
              >
                <div className="h-40 w-full overflow-hidden border-b border-navy-border">
                  <Cover />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-1 text-xs font-medium",
                        isComingSoon
                          ? "bg-secondary text-muted-foreground"
                          : "bg-primary/10 text-primary",
                      )}
                    >
                      {article.category}
                    </span>
                    {!isComingSoon && (
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    )}
                  </div>

                  <h2 className="mt-4 text-xl font-bold leading-snug text-foreground">
                    {article.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {article.excerpt}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-medium">
                    {isComingSoon ? (
                      <span className="text-muted-foreground">Coming soon</span>
                    ) : (
                      <>
                        <span className="text-primary transition-colors group-hover:text-primary/80">
                          Read article
                        </span>
                        <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </section>
    </>
  );
}
