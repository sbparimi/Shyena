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
        className="absolute right-[3%] bottom-[2%] h-[94%] w-[48%]"
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
      className="absolute left-1/2 top-0 h-[52%] w-[58%] -translate-x-1/2"
      animate={{ rotateY: [-5, 4, -5], y: [0, -2, 0] }}
      transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <svg viewBox="0 0 220 240" className="h-full w-full overflow-visible" role="img" aria-label={woman ? "AI-rendered woman avatar" : "AI-rendered man avatar"}>
        <defs>
          <radialGradient id="skin" cx="35%" cy="25%" r="80%">
            <stop offset="0%" stopColor="#f4c6aa" />
            <stop offset="38%" stopColor="#d99878" />
            <stop offset="72%" stopColor="#a9685a" />
            <stop offset="100%" stopColor="#633d43" />
          </radialGradient>
          <linearGradient id="hair" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={woman ? "#493039" : "#3a414c"} />
            <stop offset="58%" stopColor={woman ? "#1d151d" : "#171c24"} />
            <stop offset="100%" stopColor="#090b10" />
          </linearGradient>
          <linearGradient id="shirt" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#315f94" />
            <stop offset="55%" stopColor="#122e59" />
            <stop offset="100%" stopColor="#06101e" />
          </linearGradient>
          <filter id="softShadow" x="-30%" y="-30%" width="160%" height="180%">
            <feDropShadow dx="0" dy="14" stdDeviation="12" floodOpacity=".42" />
          </filter>
          <filter id="faceLight">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>

        {/* premium studio-lit 3D bust */}
        <ellipse cx="110" cy="228" rx="75" ry="12" fill={accent} opacity=".18" filter="url(#faceLight)" />
        <path d="M38 238 C42 188 68 170 110 169 C152 170 178 188 182 238Z" fill="url(#shirt)" stroke="rgba(255,255,255,.16)" filter="url(#softShadow)" />
        <path d="M88 155 L88 184 Q110 199 132 184 L132 155Z" fill="url(#skin)" />
        <ellipse cx="110" cy="104" rx="57" ry="72" fill="url(#skin)" stroke="rgba(255,255,255,.22)" />

        {/* ears */}
        <ellipse cx="52" cy="108" rx="11" ry="20" fill="#b87361" />
        <ellipse cx="168" cy="108" rx="11" ry="20" fill="#b87361" />

        {/* hair / silhouette */}
        {woman ? (
          <>
            <path d="M53 103 C42 46 73 18 112 20 C158 20 181 51 169 119 L153 143 L148 79 C135 61 111 54 82 64 C75 91 67 111 60 130Z" fill="url(#hair)" />
            <path d="M55 78 C58 35 84 18 116 21 C143 24 160 39 165 64 C138 48 102 43 72 59Z" fill="#33232b" opacity=".55" />
            <path d="M57 92 C47 126 53 155 76 173 L87 147 L72 91Z" fill="url(#hair)" />
            <path d="M163 89 C174 124 168 154 144 174 L134 147 L149 89Z" fill="url(#hair)" />
          </>
        ) : (
          <>
            <path d="M54 93 C49 53 68 25 108 21 C148 18 171 42 166 88 L151 74 C143 57 126 48 102 49 C80 51 68 64 63 87Z" fill="url(#hair)" />
            <path d="M65 50 C88 27 125 23 151 45" fill="none" stroke="#59616c" strokeOpacity=".32" strokeWidth="8" strokeLinecap="round" />
          </>
        )}

        {/* brow + eyes */}
        <path d="M73 98 Q86 90 98 97" fill="none" stroke="#58363a" strokeWidth="4" strokeLinecap="round" />
        <path d="M122 97 Q135 90 148 98" fill="none" stroke="#58363a" strokeWidth="4" strokeLinecap="round" />
        <ellipse cx="87" cy="108" rx="9" ry="6" fill="#fff1e7" />
        <ellipse cx="133" cy="108" rx="9" ry="6" fill="#fff1e7" />
        <circle cx="88" cy="108" r="3.3" fill="#26313c" />
        <circle cx="132" cy="108" r="3.3" fill="#26313c" />
        <circle cx="89" cy="107" r="1" fill="white" />
        <circle cx="133" cy="107" r="1" fill="white" />

        {/* nose / cheek planes */}
        <path d="M110 104 C104 122 103 132 110 137 C116 140 120 136 121 132" fill="none" stroke="#8b514f" strokeOpacity=".58" strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="80" cy="130" rx="15" ry="9" fill="#ffd5bb" opacity=".14" filter="url(#faceLight)" />
        <ellipse cx="140" cy="130" rx="15" ry="9" fill="#ffd5bb" opacity=".14" filter="url(#faceLight)" />
        <path d="M96 151 Q110 158 124 151" fill="none" stroke="#783f45" strokeWidth="4" strokeLinecap="round" />
        <path d="M99 150 Q110 153 121 150" fill="none" stroke="#f7c6b5" strokeOpacity=".55" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <div className="absolute inset-x-[20%] bottom-[-5%] h-3 rounded-full blur-lg" style={{ backgroundColor: accent, opacity: .28 }} />
    </motion.div>
  );
}

function Suitcase({ accent, product }: { accent: string; product: string }) {
  return (
    <motion.div
      className="absolute bottom-[11%] left-[-8%] z-20 h-[30%] w-[78%]"
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
