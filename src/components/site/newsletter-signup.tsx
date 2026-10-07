import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

export function NewsletterSignup({
  compact = false,
}: {
  compact?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) throw new Error("Subscription failed");
      setEmail("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={compact ? "" : "rounded-2xl border border-white/10 bg-[#0d1728] p-6 sm:p-7"}>
      {!compact && (
        <>
          <p className="font-mono text-[10px] font-bold uppercase tracking-[.18em] text-[#f18a32]">
            Shyena research
          </p>
          <h2 className="mt-2 text-xl font-extrabold tracking-tight text-white">
            Get the next deep-dive before it gets buried.
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-white/55">
            In-depth articles on AI agent testing, evaluation, release assurance and the engineering
            decisions behind reliable production systems.
          </p>
        </>
      )}

      <form onSubmit={submit} className={compact ? "flex flex-col gap-2 sm:flex-row" : "mt-5 flex flex-col gap-2 sm:flex-row"}>
        <label className="sr-only" htmlFor="newsletter-email">Work email</label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@company.com"
          className="h-11 min-w-0 flex-1 rounded-lg border border-white/15 bg-white/5 px-3.5 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#f18a32]"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#f18a32] px-4 text-sm font-bold text-[#07101f] disabled:cursor-wait disabled:opacity-60"
        >
          {status === "loading" ? "Subscribing…" : "Subscribe"}
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </form>

      <p className="mt-2 text-[11px] leading-5 text-white/35">
        One useful deep-dive at a time. No generic newsletter noise.
      </p>
      {status === "success" && (
        <p className="mt-3 text-xs font-semibold text-[#9fe3b0]" role="status">
          You’re subscribed to Shyena Deep-Dive Articles.
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-xs font-semibold text-[#ffb4a8]" role="alert">
          Subscription could not be completed. Please try again.
        </p>
      )}
    </div>
  );
}
