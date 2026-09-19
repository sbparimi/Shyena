import { motion } from "framer-motion";

const groups = [
  { title: "BUILD", items: ["NEXUS", "VERA", "CHAKRA", "AUTONOMOUS QA"], position: "left-5 top-[66px] sm:left-7" },
  { title: "TEST", items: ["JOURNEYS", "EVALUATION", "EXPERIMENTS"], position: "right-5 top-[92px] sm:right-7" },
  { title: "MONITOR", items: ["TRACES", "EVIDENCE", "FINDINGS", "METRICS"], position: "left-5 bottom-[38px] sm:left-7" },
  { title: "DEPLOY", items: ["CI/CD", "RELEASE GATES", "ENVIRONMENTS", "INTEGRATIONS"], position: "right-5 bottom-[38px] sm:right-7" },
] as const;

export function ShyenaAssuranceArchitecture() {
  return (
    <div
      className="relative mx-auto h-[520px] w-full max-w-[800px] sm:h-[560px]"
      aria-label="Shyena AI assurance architecture"
    >
      <div className="absolute inset-8 rounded-[32px] bg-[radial-gradient(circle_at_50%_52%,rgba(104,119,255,.14),transparent_38%),radial-gradient(circle_at_85%_85%,rgba(232,117,18,.07),transparent_32%)] blur-3xl" />

      <div className="relative h-full w-full overflow-hidden rounded-[30px] border border-white/[.12] bg-[#070b14] shadow-[0_40px_100px_-45px_rgba(0,0,0,.8)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(104,119,255,.08),transparent_36%),linear-gradient(135deg,rgba(255,255,255,.025),transparent_35%,transparent_72%,rgba(232,117,18,.025))]" />
        <div className="shyena-grid pointer-events-none absolute inset-0 opacity-30" />

        <div className="relative z-50 flex h-14 items-center justify-center border-b border-white/[.09] bg-[#0d1322]/95">
          <div className="flex items-center gap-2.5">
            <img
              src="/shyena-mark.svg?v=20260917"
              alt=""
              aria-hidden="true"
              className="h-7 w-7 object-contain"
            />
            <span className="font-[Sora] text-base font-bold tracking-[-.035em] text-white sm:text-lg">
              Shyena <span className="font-medium text-white/45">Assurance Engine</span>
            </span>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 top-14">
          <div className="absolute left-1/2 top-[47%] h-[58%] w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#03060c] shadow-[0_0_80px_rgba(104,119,255,.12),inset_0_0_70px_rgba(104,119,255,.06)]" />

          <motion.div
            className="absolute left-1/2 top-[47%] h-[63%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[#6877ff]/75 shadow-[0_0_28px_rgba(104,119,255,.16)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <span className="absolute -right-1 top-[17%] h-2.5 w-2.5 rounded-full bg-[#e87512] shadow-[0_0_14px_rgba(232,117,18,.8)]" />
            <span className="absolute bottom-[15%] left-[8%] h-2 w-2 rounded-full bg-[#6877ff] shadow-[0_0_12px_rgba(104,119,255,.8)]" />
          </motion.div>

          <motion.div
            className="absolute left-1/2 top-[47%] h-[70%] w-[56%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6877ff]/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
          >
            <span className="absolute left-[18%] top-0 h-px w-20 bg-[#e87512]/60" />
            <span className="absolute bottom-[7%] right-[17%] h-px w-16 bg-[#6877ff]/55" />
          </motion.div>

          <div className="absolute left-1/2 top-[47%] z-20 flex h-[34%] w-[25%] min-w-[170px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/[.08] bg-[#050912]/90 shadow-[inset_0_0_45px_rgba(104,119,255,.06)]">
            <div className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#e87512]">Assurance</div>
            <div className="mt-3 rounded-full border border-[#6877ff]/35 bg-[#0c1322] px-6 py-2 font-mono text-sm text-white/85">Evidence</div>
            <div className="mt-2 rounded-full border border-white/10 bg-[#0c1322] px-6 py-2 font-mono text-sm text-white/60">Verdict</div>
          </div>

          {groups.map((group) => (
            <div
              key={group.title}
              className={`absolute z-30 w-[29%] min-w-[184px] rounded-[20px] border border-[#6877ff]/25 bg-[#101827]/95 p-3.5 shadow-[0_20px_50px_-30px_rgba(0,0,0,.8)] backdrop-blur-md sm:w-[27%] sm:p-4 ${group.position}`}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-[12px] font-semibold tracking-[.16em] text-white/80 sm:text-[13px]">{group.title}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#e87512] shadow-[0_0_10px_rgba(232,117,18,.65)]" />
              </div>
              <div className="space-y-1.5">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="flex h-8 items-center rounded-lg border border-white/[.07] bg-[#080e1a]/90 px-2.5 font-mono text-[8px] font-medium tracking-[.02em] text-white/60 sm:h-9 sm:px-3 sm:text-[9px]"
                  >
                    <span className="mr-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6877ff]/75" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="absolute bottom-[3%] left-1/2 z-40 w-[27%] min-w-[190px] -translate-x-1/2 rounded-[18px] border border-[#e87512]/30 bg-[#101827]/95 px-4 py-3 text-center shadow-[0_20px_50px_-30px_rgba(0,0,0,.8)] backdrop-blur-md">
            <div className="font-mono text-[11px] font-semibold tracking-[.16em] text-white/75">GOVERN</div>
            <div className="mt-2 rounded-lg border border-white/[.07] bg-[#080e1a] px-3 py-2 font-mono text-[8px] tracking-[.04em] text-white/50">
              RELEASE POLICY
            </div>
          </div>

          <div className="absolute bottom-2 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap font-mono text-[6px] uppercase tracking-[.18em] text-white/20">
            NEXUS · VERA · CHAKRA · EVIDENCE · DECISION
          </div>
        </div>
      </div>
    </div>
  );
}
