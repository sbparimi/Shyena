import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/placeholder-page";

export const Route = createFileRoute("/blog/$slug")({
  head: () => ({
    meta: [
      { title: "Article — Verdikt Blog" },
      { name: "description", content: "An article from the Verdikt blog on testing and evaluating conversational AI agents." },
      { property: "og:title", content: "Article — Verdikt Blog" },
      { property: "og:description", content: "An article from the Verdikt blog on conversational AI evaluation." },
    ],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  const { slug } = Route.useParams();
  return (
    <PlaceholderPage
      eyebrow="Article"
      title={slug.replace(/-/g, " ")}
      description="This article is not published yet. Check back shortly."
    />
  );
}
