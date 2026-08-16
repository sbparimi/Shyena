import { Check, X } from "lucide-react";

export function PersonaMock() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-card">
      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
      <div className="relative flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-primary/15" />
        <div className="space-y-1.5">
          <div className="h-2.5 w-28 rounded bg-primary/25" />
          <div className="h-2 w-20 rounded bg-muted" />
        </div>
      </div>
      <div className="relative mt-5 space-y-2">
        <div className="h-2 w-full rounded bg-muted" />
        <div className="h-2 w-5/6 rounded bg-muted" />
        <div className="h-2 w-4/6 rounded bg-muted" />
      </div>
      <div className="relative mt-5 flex flex-wrap gap-2">
        {["Goal", "Playbook", "Traits"].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border bg-secondary px-2.5 py-1 text-[10px] font-medium text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ConversationMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        <div className="ml-2 h-2 w-24 rounded bg-muted" />
      </div>
      <div className="space-y-3 p-4">
        <div className="flex justify-end">
          <div className="max-w-[70%] rounded-xl rounded-tr-sm bg-primary/15 px-3 py-2">
            <div className="h-2 w-24 rounded bg-primary/30" />
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[75%] rounded-xl rounded-tl-sm bg-secondary px-3 py-2">
            <div className="h-2 w-32 rounded bg-muted" />
            <div className="mt-1.5 h-2 w-20 rounded bg-muted" />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[65%] rounded-xl rounded-tr-sm bg-primary/15 px-3 py-2">
            <div className="h-2 w-28 rounded bg-primary/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function JudgeMock() {
  const bars = [
    { label: "Grounding", value: 91 },
    { label: "Resolution", value: 62 },
    { label: "Tone", value: 88 },
    { label: "Policy", value: 100, pass: true },
  ];

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
      <div className="mb-4 flex items-center justify-between">
        <div className="h-2 w-24 rounded bg-muted" />
        <div className="h-2 w-10 rounded bg-accent/40" />
      </div>
      {bars.map((bar) => (
        <div key={bar.label} className="mb-3 last:mb-0">
          <div className="flex items-center justify-between text-[10px] font-medium text-muted-foreground">
            <span>{bar.label}</span>
            <span>{bar.pass ? "PASS" : `${bar.value / 100}`}</span>
          </div>
          <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-accent"
              style={{ width: `${bar.value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function AssertionMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card font-mono text-[11px] shadow-card">
      <div className="border-b border-border bg-secondary/60 px-4 py-2.5 text-muted-foreground">
        assertions.contract
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-start gap-2">
          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
          <div className="space-y-1">
            <div className="h-2 w-36 rounded bg-muted" />
            <div className="h-2 w-28 rounded bg-muted" />
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
          <div className="space-y-1">
            <div className="h-2 w-40 rounded bg-muted" />
            <div className="h-2 w-24 rounded bg-muted" />
          </div>
        </div>
        <div className="flex items-start gap-2">
          <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-destructive" />
          <div className="space-y-1">
            <div className="h-2 w-32 rounded bg-muted" />
            <div className="h-2 w-20 rounded bg-muted" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function IntegrityMock() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-card">
      <div className="relative flex items-center justify-between">
        <div className="space-y-1">
          <div className="h-2 w-20 rounded bg-muted" />
          <div className="h-2 w-12 rounded bg-primary/30" />
        </div>
        <span className="rounded-full bg-destructive/15 px-2.5 py-1 text-[10px] font-semibold text-destructive ring-1 ring-destructive/30">
          FAIL
        </span>
      </div>
      <div className="relative mt-5 space-y-1.5">
        <div className="h-2 w-full rounded bg-muted" />
        <div className="h-2 w-5/6 rounded bg-muted" />
        <div className="h-2 w-4/6 rounded bg-muted" />
        <div className="h-2 w-3/6 rounded bg-muted" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-destructive/10 to-transparent" />
      <div className="absolute right-4 top-4 text-[10px] font-medium text-destructive">
        score capped
      </div>
    </div>
  );
}

export function AuditMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card font-mono text-[10px] shadow-card">
      <div className="border-b border-border bg-secondary/60 px-4 py-2.5 text-muted-foreground">
        run-audit.log
      </div>
      <div className="space-y-2 p-4 text-muted-foreground">
        <div className="flex gap-2">
          <span className="text-primary">00:01.2</span>
          <span className="flex-1">judge_call → grounding</span>
        </div>
        <div className="flex gap-2">
          <span className="text-primary">00:02.5</span>
          <span className="flex-1">assert → refund_amount</span>
        </div>
        <div className="flex gap-2">
          <span className="text-primary">00:03.1</span>
          <span className="flex-1">judge_call → policy</span>
        </div>
        <div className="flex gap-2">
          <span className="text-primary">00:04.8</span>
          <span className="flex-1">gate → execution_incomplete</span>
        </div>
      </div>
    </div>
  );
}
