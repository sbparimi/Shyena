import { motion } from "framer-motion";

function ShyenaAssuranceArchitecture() {
  const groups = [
    { title: "BUILD", className: "left-[3%] top-[7%] w-[31%]", items: ["NEXUS", "VERA", "CHAKRA", "AUTONOMOUS QA"] },
    { title: "TEST", className: "right-[3%] top-[12%] w-[27%]", items: ["JOURNEYS", "EVALUATION", "EXPERIMENTS"] },
    { title: "MONITOR", className: "left-[3%] bottom-[8%] w-[28%]", items: ["TRACES", "EVIDENCE", "FINDINGS", "METRICS"] },
    { title: "DEPLOY", className: "right-[3%] bottom-[8%] w-[27%]", items: ["CI/CD", "RELEASE GATES", "ENVIRONMENTS", "INTEGRATIONS"] },
  ];

  return (
    <motion.div
      className="relative mx-auto h-[500px] w-full max-w-[820px] [perspective:1600px] sm:h-[590px]"
      aria-label="Shyena assurance architecture"
    >
      <div className="absolute inset-5 rounded-[38px] bg-[radial-gradient(circle_at_50%_48%,rgba(88,157,215,.20),transparent_34%),radial-gradient(circle_at_50%_90%,rgba(232,117,18,.07),transparent_40%)] blur-2xl" />
      <motion.div
        className="relative h-full w-full overflow-hidden rounded-[34px] border border-[#29445b] bg-[#0a121b] shadow-[0_45px_120px_rgba(0,0,0,.55)]"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(92,166,224,.09),transparent_34%),linear-gradient(145deg,rgba(255,255,255,.035),transparent_30%,transparent_72%,rgba(232,117,18,.025))]" />
        <div className="shyena-grid pointer-events-none absolute inset-0 opacity-20" />
        <div className="relative flex h-14 items-center justify-center border-b border-white/10 bg-[#13283a]/90">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-[8px] border border-[#7ac9ff]/60 bg-[#72c8ff]/90 text-[#07101a] shadow-[0_0_20px_rgba(114,200,255,.18)]"><span className="text-sm font-black tracking-[-.12em]">S</span></div>
            <div className="font-[Sora] text-lg font-bold tracking-[-.035em] text-[#9ed8ff] sm:text-xl">Shyena <span className="font-normal text-[#7fb6d8]">Assurance Engine</span></div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-14 bottom-0">
          <div className="absolute left-1/2 top-1/2 h-[74%] w-[57%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/70 shadow-[0_0_90px_rgba(55,117,169,.16)]" />
          <motion.div className="absolute left-1/2 top-1/2 h-[68%] w-[53%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[5px] border-[#72c8ff]/80 shadow-[0_0_25px_rgba(114,200,255,.24),inset_0_0_35px_rgba(114,200,255,.10)]" animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }}>
            <span className="absolute -right-2 top-[12%] h-5 w-5 rounded-full bg-[#72c8ff] shadow-[0_0_18px_rgba(114,200,255,.95)]" />
            <span className="absolute bottom-[12%] left-[7%] h-4 w-4 rounded-full bg-[#72c8ff] shadow-[0_0_18px_rgba(114,200,255,.95)]" />
          </motion.div>
          <motion.div className="absolute left-1/2 top-1/2 h-[74%] w-[59%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6aa7ce]/45" animate={{ rotate: -360 }} transition={{ duration: 34, repeat: Infinity, ease: "linear" }}>
            <span className="absolute left-[19%] top-0 h-1 w-24 rounded-full bg-[#72c8ff]/75" />
            <span className="absolute bottom-[8%] right-[18%] h-1 w-20 rounded-full bg-[#72c8ff]/65" />
          </motion.div>
          <motion.div className="absolute left-1/2 top-1/2 h-[51%] w-[39%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#29445b]/70 bg-[#020609]/95 shadow-[inset_0_0_60px_rgba(56,108,148,.13),0_0_35px_rgba(0,0,0,.55)]" animate={{ scale: [1, 1.015, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
          <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3">
            <div className="rounded-full border border-[#69b8e9]/50 bg-[#11202c]/95 px-7 py-3 font-mono text-sm text-[#d7efff] shadow-[0_0_25px_rgba(114,200,255,.08)] sm:text-base">Evidence</div>
            <div className="rounded-full border border-[#69b8e9]/40 bg-[#11202c]/95 px-8 py-3 font-mono text-sm text-[#c4e4f6] shadow-[0_0_25px_rgba(114,200,255,.07)] sm:text-base">Verdict</div>
          </div>
          <div className="absolute left-1/2 top-1/2 z-10 h-[86%] w-[66%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#527e9e]/35" />
          {groups.map((group) => (
            <div key={group.title} className={`absolute z-30 rounded-[26px] border border-[#72c8ff]/65 bg-[#173047]/[.78] p-4 shadow-[0_18px_55px_rgba(0,0,0,.24)] backdrop-blur-md sm:p-5 ${group.className}`}>
              <div className="mb-4 text-center font-mono text-base font-medium tracking-[.04em] text-[#d5edfc] sm:text-lg">{group.title}</div>
              <div className="space-y-2">{group.items.map((item) => <div key={item} className="flex h-9 items-center rounded-full border border-[#5b9bca]/60 bg-[#08131d]/70 px-3 font-mono text-[8px] font-medium text-[#d0e9f9] sm:h-10 sm:px-4 sm:text-[9px]"><span className="mr-2 h-2 w-2 shrink-0 rounded-[3px] border border-[#72c8ff]/75 bg-[#72c8ff]/15" />{item}</div>)}</div>
            </div>
          ))}
          <div className="absolute bottom-[1%] left-1/2 z-40 w-[28%] -translate-x-1/2 rounded-[24px] border border-dashed border-[#72c8ff]/60 bg-[#173047]/90 p-3 text-center shadow-[0_18px_45px_rgba(0,0,0,.3)] backdrop-blur-md sm:p-4">
            <div className="font-mono text-sm font-medium text-[#d5edfc] sm:text-base">GOVERN</div>
            <div className="mt-3 flex h-9 items-center justify-center rounded-full border border-[#5b9bca]/60 bg-[#08131d]/75 px-3 font-mono text-[8px] text-[#d0e9f9] sm:h-10 sm:text-[9px]">RELEASE POLICY</div>
          </div>
          <div className="absolute bottom-3 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap font-mono text-[6px] uppercase tracking-[.20em] text-white/25 sm:text-[7px]">NEXUS · VERA · CHAKRA · EVIDENCE · DECISION</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

