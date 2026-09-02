import { Link } from "@tanstack/react-router";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8">
      <div className="relative overflow-hidden rounded-[32px] border border-navy-border bg-navy px-6 py-14 text-center shadow-elevated sm:px-12 sm:py-16 lg:px-16 lg:py-20">
        <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="relative">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-orange-200/80">
            <PlayCircle className="h-3.5 w-3.5" /> Live assurance walkthrough
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold tracking-[-0.03em] text-navy-foreground sm:text-4xl lg:text-5xl">
            See it evaluate your own agent
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-navy-muted sm:text-lg">
            Bring one real scenario. We'll run it against your live conversational AI agent and walk
            through every judged turn with you.
          </p>
          <div className="mx-auto mt-9 flex w-full max-w-xl flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Button asChild size="lg" className="w-full min-w-[190px] sm:w-auto">
              <Link to="/contact">
                Request a Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full min-w-[190px] border-white/15 bg-white/[0.035] text-white hover:border-[#ffb804] hover:bg-white/[0.07] hover:text-white sm:w-auto"
            >
              <Link to="/contact">Talk to Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
