import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8">
      <div className="overflow-hidden rounded-3xl border border-navy-border bg-navy px-8 py-16 text-center shadow-elevated sm:px-16">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold text-navy-foreground sm:text-4xl">
          See it evaluate your own agent
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-navy-muted">
          Bring one real scenario. We'll run it against your live conversational AI agent and walk
          through every judged turn with you.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <Link to="/contact">
              Request a Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-navy-border bg-transparent text-navy-foreground hover:bg-white/10 hover:text-navy-foreground"
          >
            <Link to="/contact">Talk to Sales</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
