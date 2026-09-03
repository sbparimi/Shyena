import { Link } from "@tanstack/react-router";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8">
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#07091f] px-6 py-14 text-center sm:px-12 sm:py-16 lg:px-16 lg:py-20">
        <div className="relative">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#e6c58f]">
            <PlayCircle className="h-3.5 w-3.5 text-[#ffb703]" /> Live assurance walkthrough
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
            See it evaluate your own agent
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Bring one real scenario. We'll run it against your live conversational AI agent and walk
            through every judged turn with you.
          </p>
          <div className="mx-auto mt-9 flex w-full max-w-xl flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="h-12 w-full min-w-[190px] rounded-none bg-[#ffb703] px-7 text-sm font-semibold normal-case tracking-normal text-slate-950 hover:bg-[#f2aa00] sm:w-auto"
            >
              <Link to="/contact">
                Book a walkthrough
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 w-full min-w-[190px] rounded-none border-white/70 bg-transparent px-7 text-sm font-semibold normal-case tracking-normal text-white hover:border-white hover:bg-white/10 hover:text-white sm:w-auto"
            >
              <Link to="/contact">See how it works</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
