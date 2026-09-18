import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { PointerEvent as ReactPointerEvent } from "react";

type ExpertVisual = {
  name: string;
  role: string;
  skills: string[];
  compact?: boolean;
};

const WOMAN_FIRST_NAMES = new Set([
  "aisha", "aisha", "anna", "amira", "chloe", "elena", "fatima", "ines",
  "kavya", "lisa", "maria", "maya", "noor", "priya", "sara", "sofia"
]);

function isWoman(name: string) {
  return WOMAN_FIRST_NAMES.has(name.trim().split(/\s+/)[0].toLowerCase());
}

function initials(name: string) {
  return name.split(" ").map((part) => part[0]).join("").slice(0, 2);
}

function pickProduct(skills: string[]) {
  const text = skills.join(" ").toLowerCase();
  if (/(security|red team|owasp|prompt injection|adversarial)/.test(text)) return "CHAKRA";
  if (/(eval|deepeval|promptfoo|testing|qa|playwright|automation|rag|performance|accessibility)/.test(text)) return "VERA";
  return "NEXUS";
}

function actionFor(product: string) {
  if (product === "CHAKRA") return { verb: "ATTACKING", label: "Unsafe path", signal: "BLOCKED", accent: "#ff7a78" };
  if (product === "VERA") return { verb: "EVALUATING", label: "Agent journey", signal: "0.91", accent: "#65e6d4" };
  return { verb: "MAPPING", label: "System flow", signal: "LINKED", accent: "#e7bf67" };
}

export function ExpertActionVisual({ name, role, skills, compact = false }: ExpertVisual) {
  const product = pickProduct(skills);
  const action = actionFor(product);
  const woman = isWoman(name);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateY = useSpring(pointerX, { stiffness: 110, damping: 20, mass: 0.7 });
  const rotateX = useSpring(pointerY, { stiffness: 110, damping: 20, mass: 0.7 });
  const avatarX = useTransform(rotateY, [-8, 8], [-7, 7]);
  const avatarY = useTransform(rotateX, [-6, 6], [5, -5]);

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 8);
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * -6);
  };

  const reset = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-[22px] border border-[#243b63] bg-[#050b16] ${compact ? "h-[205px]" : "h-[300px]"}`}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      whileHover={{ scale: 1.012 }}
      transition={{ type: "spring", stiffness: 180, damping: 22 }}
      aria-label={`${name} demonstrating ${product} inside Shyena`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(101,230,212,0.16),transparent_24%),radial-gradient(circle_at_22%_90%,rgba(18,62,145,0.34),transparent_45%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(to_top,rgba(0,0,0,.42),transparent)]" />

      <motion.div
        className="absolute left-3 top-3 z-20 rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[8px] font-bold tracking-[0.16em] text-white/55 backdrop-blur"
        animate={{ opacity: [0.45, 0.85, 0.45] }}
        transition={{ duration: 2.8, repeat: Infinity }}
      >
        SHYENA · LIVE DEMO
      </motion.div>

      <div className="absolute left-[5%] top-[23%] w-[47%]">
        <div className="mb-2 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: action.accent }} />
          <span className="text-[9px] font-bold tracking-[0.18em] text-white/50">{product}</span>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[.055] p-3 shadow-[0_20px_60px_rgba(0,0,0,.35)] backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-white/45">{action.label}</span>
            <motion.span className="text-[9px] font-bold" style={{ color: action.accent }} animate={{ opacity: [0.45, 1, 0.45] }} transition={{ duration: 1.8, repeat: Infinity }}>{action.signal}</motion.span>
          </div>
          <ProductGraphic product={product} accent={action.accent} />
        </div>
      </div>

      <motion.div
        className="absolute right-[7%] bottom-[4%] h-[88%] w-[41%]"
        style={{ x: avatarX, y: avatarY, transformStyle: "preserve-3d" }}
        animate={{
          y: [22, 7, -8, -8, 7, 22],
          scale: [0.88, 0.96, 1.08, 1.08, 0.96, 0.88],
          rotateZ: [-1.5, 0.5, 0, 0, -0.5, -1.5],
        }}
        transition={{ duration: 7.2, times: [0, .24, .43, .64, .82, 1], repeat: Infinity, ease: [0.45, 0.05, 0.2, 0.95] }}
      >
        <div className="absolute bottom-0 left-1/2 h-[69%] w-[68%] -translate-x-1/2 rounded-[42%_42%_16%_16%] border border-white/10 bg-gradient-to-b from-[#244d83] via-[#102b55] to-[#071223] shadow-[0_28px_60px_rgba(0,0,0,.55)]" />
        <Portrait woman={woman} accent={action.accent} />

        <motion.div
          className="absolute left-[2%] top-[43%] z-10 h-3 w-[38%] origin-right rounded-full bg-gradient-to-r from-[#b56f59] to-[#8c5149]"
          animate={{ rotate: [-22, -34, -22, -8, -22], x: [0, 4, 0, -2, 0] }}
          transition={{ duration: 7.2, times: [0,.24,.43,.64,1], repeat: Infinity, ease: "easeInOut" }}
        />

        <Suitcase accent={action.accent} product={product} />
        <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 text-center">
          <div className="text-[9px] font-bold tracking-[0.12em] text-white">{initials(name)}</div>
          <div className="mt-0.5 max-w-[170px] truncate text-[7px] text-white/45">{role}</div>
        </div>
      </motion.div>

      <div className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/25 px-2 py-1 text-[8px] font-semibold text-white/45 backdrop-blur">
        WALK → OPEN → SHOWCASE
      </div>
    </motion.div>
  );
}

function Portrait({ woman, accent }: { woman: boolean; accent: string }) {
  return (
    <motion.div
      className="absolute left-1/2 top-[3%] h-[47%] w-[48%] -translate-x-1/2"
      animate={{ rotateY: [-5, 4, -5], x: [-1, 1, -1] }}
      transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* AI-photoreal portrait treatment: skin lighting, facial planes, eyes, hair and ears */}
      <div
        className="absolute inset-x-[14%] top-[16%] h-[76%] rounded-[47%_47%_43%_43%] border border-white/20 shadow-[0_16px_38px_rgba(0,0,0,.48)]"
        style={{
          background: "radial-gradient(circle at 35% 30%, #f2c4a7 0%, #d99a7b 32%, #a9675a 66%, #6d4145 100%)",
          boxShadow: `inset -16px -10px 22px rgba(54,20,24,.24), inset 10px 8px 20px rgba(255,235,218,.18), 0 16px 38px rgba(0,0,0,.48)`,
        }}
      />

      <div className="absolute left-[7%] top-[40%] h-[24%] w-[9%] rounded-full border border-white/10 bg-[#b87561]" />
      <div className="absolute right-[7%] top-[40%] h-[24%] w-[9%] rounded-full border border-white/10 bg-[#b87561]" />

      <div
        className={`absolute left-[4%] top-[2%] h-[48%] w-[92%] rounded-[52%_52%_30%_30%] shadow-[0_8px_22px_rgba(0,0,0,.48)] ${woman ? "bg-[linear-gradient(120deg,#3a2228,#17131a_62%,#0b0d13)]" : "bg-[linear-gradient(120deg,#313744,#151a23_60%,#0a0d13)]"}`}
      />
      {woman && (
        <>
          <div className="absolute -left-[1%] top-[25%] h-[59%] w-[25%] rounded-[55%_35%_45%_55%] bg-[#21171f] shadow-[inset_-5px_0_8px_rgba(255,255,255,.05)]" />
          <div className="absolute -right-[1%] top-[25%] h-[59%] w-[25%] rounded-[35%_55%_55%_45%] bg-[#21171f] shadow-[inset_5px_0_8px_rgba(255,255,255,.05)]" />
          <div className="absolute left-[17%] top-[7%] h-[34%] w-[12%] rotate-[22deg] rounded-full bg-[#4b2c35]/70 blur-[1px]" />
        </>
      )}
      {!woman && (
        <>
          <div className="absolute left-[12%] top-[9%] h-[27%] w-[76%] rounded-[55%_55%_25%_25%] bg-[#1b222c]" />
          <div className="absolute left-[13%] top-[28%] h-[8%] w-[74%] rounded-full bg-[#141921]" />
          <div className="absolute left-1/2 top-[5%] h-[7%] w-[18%] -translate-x-1/2 rounded-full bg-white/8 blur-sm" />
        </>
      )}

      {/* Brow / eye line */}
      <div className="absolute left-[19%] top-[49%] h-[4px] w-[22%] rotate-[-4deg] rounded-full bg-[#5c3436]/80" />
      <div className="absolute right-[19%] top-[49%] h-[4px] w-[22%] rotate-[4deg] rounded-full bg-[#5c3436]/80" />
      <div className="absolute left-[22%] top-[53%] h-[8px] w-[12px] rounded-[50%] bg-[#f6e6d8] shadow-[0_1px_5px_rgba(0,0,0,.28)]">
        <span className="absolute left-1/2 top-1/2 h-[4px] w-[4px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#27303a]" />
      </div>
      <div className="absolute right-[22%] top-[53%] h-[8px] w-[12px] rounded-[50%] bg-[#f6e6d8] shadow-[0_1px_5px_rgba(0,0,0,.28)]">
        <span className="absolute left-1/2 top-1/2 h-[4px] w-[4px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#27303a]" />
      </div>

      {/* Nose / cheek light / mouth */}
      <div className="absolute left-1/2 top-[53%] h-[18%] w-[8%] -translate-x-1/2 rounded-[45%] bg-[linear-gradient(to_right,rgba(96,47,47,.18),rgba(255,225,207,.24),rgba(96,47,47,.18))]" />
      <div className="absolute left-[29%] top-[62%] h-[8%] w-[13%] rounded-full bg-[#f5c3a5]/16 blur-[5px]" />
      <div className="absolute right-[29%] top-[62%] h-[8%] w-[13%] rounded-full bg-[#f5c3a5]/16 blur-[5px]" />
      <div className="absolute left-1/2 top-[72%] h-[6px] w-[25px] -translate-x-1/2 rounded-[50%] bg-[#7e4146]/75" />
      <div className="absolute left-1/2 top-[72%] h-px w-[18px] -translate-x-1/2 bg-[#f4c5b5]/50" />

      <div className="absolute left-1/2 bottom-[-8%] h-2 w-[54%] -translate-x-1/2 rounded-full blur-md" style={{ backgroundColor: accent, opacity: .32 }} />
    </motion.div>
  );
}

function Suitcase({ accent, product }: { accent: string; product: string }) {
  return (
    <motion.div
      className="absolute bottom-[13%] left-[-7%] z-20 h-[27%] w-[70%]"
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        className="absolute bottom-0 left-0 h-[58%] w-full rounded-[9px] border border-white/15 bg-gradient-to-b from-[#182c4b] to-[#07101f] shadow-[0_18px_35px_rgba(0,0,0,.55)]"
        animate={{ rotateX: [0, -2, 0] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute left-[8%] top-1/2 h-px w-[84%] bg-white/10" />
        <div className="absolute right-[8%] top-[20%] h-2 w-2 rounded-sm border border-white/20" />
      </motion.div>
      <motion.div
        className="absolute left-0 top-[7%] h-[52%] w-full origin-bottom rounded-[9px_9px_4px_4px] border border-white/15 bg-gradient-to-br from-[#223d64] to-[#0a1424] shadow-[0_15px_30px_rgba(0,0,0,.4)]"
        animate={{ rotateX: [88, 22, 88, 88], y: [8, -1, 8, 8] }}
        transition={{ duration: 7.2, times: [0,.43,.64,1], repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "50% 100%" }}
      >
        <div className="absolute left-[8%] top-2 h-px w-[84%] bg-white/15" />
        <div className="absolute left-1/2 -top-2 h-3 w-12 -translate-x-1/2 rounded-t-md border border-white/15 bg-[#101d32]" />
      </motion.div>
      <motion.div
        className="absolute left-[11%] top-[35%] z-30 flex h-[46%] w-[78%] items-center justify-center rounded-md border border-white/15 bg-[#07101f]/95 shadow-[0_8px_25px_rgba(0,0,0,.5)]"
        animate={{ y: [8, 0, -7, -7, 0, 8], opacity: [0, .1, 1, 1, .1, 0] }}
        transition={{ duration: 7.2, times: [0,.24,.43,.64,.82,1], repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-[82%]">
          <div className="flex items-center justify-between text-[6px] font-bold tracking-[0.14em] text-white/55">
            <span>{product}</span><span style={{ color: accent }}>LIVE</span>
          </div>
          <div className="mt-1 h-1 rounded-full bg-white/10">
            <motion.div className="h-full rounded-full" style={{ backgroundColor: accent }} animate={{ width: ["18%", "92%", "18%"] }} transition={{ duration: 2.4, repeat: Infinity }} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProductGraphic({ product, accent }: { product: string; accent: string }) {
  if (product === "CHAKRA") {
    return (
      <svg viewBox="0 0 180 72" className="mt-3 h-16 w-full">
        <g fill="none" stroke={accent} strokeOpacity=".45"><circle cx="90" cy="36" r="25" /><circle cx="90" cy="36" r="16" /><circle cx="90" cy="36" r="7" /></g>
        <motion.path d="M8 18 C42 5 62 68 90 36 S137 8 172 55" fill="none" stroke={accent} strokeWidth="2" strokeDasharray="5 6" animate={{ strokeDashoffset: [0, -44] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
        {[["8","18"],["54","49"],["90","36"],["138","20"],["172","55"]].map(([cx, cy], i) => <motion.circle key={i} cx={cx} cy={cy} r="3" fill={accent} animate={{ opacity: [.3,1,.3], scale: [.8,1.25,.8] }} transition={{ duration: 1.4, delay: i * .12, repeat: Infinity }} />)}
      </svg>
    );
  }
  if (product === "VERA") {
    return (
      <svg viewBox="0 0 180 72" className="mt-3 h-16 w-full">
        <g fill="none" stroke={accent} strokeOpacity=".38"><circle cx="90" cy="36" r="27" /><circle cx="90" cy="36" r="18" /><circle cx="90" cy="36" r="9" /></g>
        <motion.circle cx="90" cy="36" r="4" fill={accent} animate={{ r: [3,7,3] }} transition={{ duration: 1.7, repeat: Infinity }} />
        <motion.path d="M30 58 L60 42 L83 49 L112 24 L150 34" fill="none" stroke={accent} strokeWidth="2" animate={{ pathLength: [.2,1,.2] }} transition={{ duration: 2.6, repeat: Infinity }} />
        <text x="7" y="12" fill="white" fillOpacity=".45" fontSize="7">SEMANTIC</text><text x="142" y="64" fill={accent} fontSize="9" fontWeight="700">0.91</text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 180 72" className="mt-3 h-16 w-full">
      <g fill="none" stroke={accent} strokeOpacity=".38" strokeWidth="1.5"><path d="M14 52 H52 V36 H88 V20 H126 V40 H166" /><path d="M14 60 H40 V47 H70 V58 H108 V34 H146 V50 H166" strokeOpacity=".18" /></g>
      {[["14","52"],["52","36"],["88","20"],["126","40"],["166","40"]].map(([cx, cy], i) => <motion.circle key={i} cx={cx} cy={cy} r="4" fill={accent} animate={{ opacity: [.35,1,.35] }} transition={{ duration: 1.8, delay: i * .16, repeat: Infinity }} />)}
    </svg>
  );
}
