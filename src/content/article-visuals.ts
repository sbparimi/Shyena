import type { ArticleConcept } from "@/components/blog/article-concept-diagrams";

/** A concept diagram rendered directly after the article section heading it explains. */
export type InlineArticleVisual = {
  /** Case-insensitive text that identifies the h2 the diagram follows. */
  match: string;
  concept: ArticleConcept;
  label: string;
};

export const INLINE_ARTICLE_VISUALS: Record<string, readonly InlineArticleVisual[]> = {
  "ai-agent-testing-is-a-systems-problem": [
    {
      match: "The LLM is only one part of the system",
      concept: "systems",
      label: "The model is one component inside the assurance surface.",
    },
    {
      match: "Six contracts need to agree",
      concept: "contracts",
      label: "The six assurance contracts separate what must be true.",
    },
    {
      match: "The test case should describe intent",
      concept: "trajectory",
      label: "Goal-driven tests allow valid runtime variation.",
    },
    {
      match: "Evidence is more important than the score",
      concept: "evidence",
      label: "The verdict must be reconstructable from evidence.",
    },
    {
      match: "The release gate should reflect the system's risk",
      concept: "false-pass",
      label: "A critical failure cannot be averaged away.",
    },
  ],
};
