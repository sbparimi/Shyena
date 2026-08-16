import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function PlaceholderPage({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="mx-auto w-full max-w-3xl px-5 py-28 sm:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h1 className="mt-4 text-4xl font-bold sm:text-5xl">{title}</h1>
      <p className="mt-5 text-lg text-muted-foreground">{description}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <Link to="/contact">Request a Demo</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/">Back to home</Link>
        </Button>
      </div>
    </section>
  );
}