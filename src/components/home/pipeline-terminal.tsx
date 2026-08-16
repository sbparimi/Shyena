const LOG_LINES: { time: string; tag: string; tone: "plan" | "run" | "eval" | "gate"; text: string }[] = [
  { time: "00:00.4", tag: "PLAN", tone: "plan", text: "persona=frustrated_renewal_customer  goal=cancel_then_retain  playbook=v12" },
  { time: "00:01.9", tag: "RUN", tone: "run", text: "session opened → live agent  channel=voice  turns=0/24" },
  { time: "00:38.2", tag: "RUN", tone: "run", text: "turn 9  user: \"I already gave you that reference number twice\"" },
  { time: "00:38.9", tag: "EVAL", tone: "eval", text: "judge: grounding 0.91 · resolution 0.62 · tone 0.88 · policy PASS" },
  { time: "00:41.3", tag: "EVAL", tone: "eval", text: "assert: refund_amount == €48.50 → PASS   assert: pii_redacted → PASS" },
  { time: "00:52.7", tag: "GATE", tone: "gate", text: "execution incomplete at turn 17 → verdict capped: FAIL" },
];

const TONES: Record<string, string> = {
  PLAN: "bg-primary/15 text-[oklch(0.78_0.12_274)] ring-primary/30",
  RUN: "bg-white/8 text-navy-muted ring-white/15",
  EVAL: "bg-accent/15 text-accent ring-accent/30",
  GATE: "bg-destructive/15 text-destructive ring-destructive/30",
};

const STEPS = ["Plan personas", "Execute conversations", "Evaluate turns", "Gated verdict"];

export function PipelineTerminal() {
  return (
    <div className="overflow-hidden rounded-3xl border border-navy-border bg-navy shadow-elevated">
      <div className="flex items-center gap-3 border-b border-navy-border px-5 py-3.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        </div>
        <p className="font-mono text-xs text-navy-muted">
          verdikt run --suite billing-voice --release 2026.8.14
        </p>
      </div>

      <div className="grid gap-px bg-navy-border sm:grid-cols-4">
        {STEPS.map((step, i) => (
          <div key={step} className="bg-navy px-5 py-4">
            <p className="font-mono text-[11px] text-navy-muted">STEP {i + 1}</p>
            <p className="mt-1 text-sm font-medium text-navy-foreground">{step}</p>
          </div>
        ))}
      </div>

      <div className="space-y-2.5 border-t border-navy-border px-5 py-5 font-mono text-[12px] leading-relaxed sm:text-[13px]">
        {LOG_LINES.map((line) => (
          <div key={line.time} className="flex flex-wrap items-start gap-2.5">
            <span className="text-navy-muted/70">{line.time}</span>
            <span className={`rounded px-1.5 py-0.5 text-[10px] font-semibold tracking-wider ring-1 ${TONES[line.tag]}`}>
              {line.tag}
            </span>
            <span className="flex-1 text-navy-foreground/85">{line.text}</span>
          </div>
        ))}
        <div className="flex items-center gap-2 pt-2">
          <span className="rounded-md bg-destructive/15 px-2 py-1 text-[11px] font-semibold tracking-wider text-destructive ring-1 ring-destructive/30">
            VERDICT: FAIL
          </span>
          <span className="text-navy-muted">score 0.81 · execution integrity violated</span>
        </div>
      </div>
    </div>
  );
}