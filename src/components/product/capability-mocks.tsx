import { Check, X, User } from "lucide-react";

export function PersonaMock() {
  return (
    <div className="glass-card relative overflow-hidden rounded-2xl p-5">
      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
      <div className="relative flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
          <User className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Amara — Frustrated Renewal</p>
          <p className="text-xs text-muted-foreground">Persona · multilingual, impatient</p>
        </div>
      </div>
      <p className="relative mt-5 text-xs leading-relaxed text-muted-foreground">
        Goal: cancel auto-renewal before the next billing date without being upsold or
        transferred more than once.
      </p>
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
    <div className="glass-card overflow-hidden rounded-2xl">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        <span className="ml-2 text-[11px] font-medium text-muted-foreground">
          Live session · Cognigy Webchat
        </span>
      </div>
      <div className="space-y-3 p-4">
        <div className="flex justify-end">
          <div className="max-w-[75%] rounded-xl rounded-tr-sm bg-primary/15 px-3 py-2 text-xs text-foreground">
            My order hasn't arrived yet
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[80%] rounded-xl rounded-tl-sm bg-secondary px-3 py-2 text-xs text-foreground">
            I'm sorry to hear that — let me pull up your order and check the tracking status.
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[75%] rounded-xl rounded-tr-sm bg-primary/15 px-3 py-2 text-xs text-foreground">
            It's been eight days now
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
    <div className="glass-card rounded-2xl p-5">
      <div className="mb-4 flex items-center justify-between text-xs">
        <span className="font-medium text-foreground">Judge scorecard</span>
        <span className="font-mono text-[10px] text-accent">turn 4 / 9</span>
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
    <div className="glass-card overflow-hidden rounded-2xl font-mono text-[11px]">
      <div className="border-b border-border bg-secondary/60 px-4 py-2.5 text-muted-foreground">
        assertions.contract
      </div>
      <div className="space-y-3 p-4">
        <div className="flex items-start gap-2">
          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
          <div>
            <p className="text-foreground">refund_amount == 42.50</p>
            <p className="text-[10px] text-muted-foreground">exact match</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
          <div>
            <p className="text-foreground">disclosure_text present</p>
            <p className="text-[10px] text-muted-foreground">required clause</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-destructive" />
          <div>
            <p className="text-foreground">handoff_target == billing_queue</p>
            <p className="text-[10px] text-destructive">got: general_queue</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function IntegrityMock() {
  return (
    <div className="glass-card relative overflow-hidden rounded-2xl p-5">
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-muted-foreground">Turn 17 of 22</p>
          <p className="text-sm font-semibold text-primary">score 0.81</p>
        </div>
        <span className="rounded-full bg-destructive/15 px-2.5 py-1 text-[10px] font-semibold text-destructive ring-1 ring-destructive/30">
          FAIL
        </span>
      </div>
      <div className="relative mt-5 space-y-1.5 font-mono text-[10px] text-muted-foreground">
        <p>Customer: can you check my refund status pl...</p>
        <p>Agent: I'm checking your account now, one mo...</p>
        <p className="text-foreground/70">Customer: I really need this resolved becau...</p>
        <p className="italic text-destructive/80">— session terminated, no response —</p>
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
    <div className="glass-card overflow-hidden rounded-2xl font-mono text-[10px]">
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
