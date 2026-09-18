import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { PointerEvent as ReactPointerEvent } from "react";

type ExpertVisual = {
  name: string;
  role: string;
  skills: string[];
  gender: "woman" | "man";
  compact?: boolean;
};

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

export function ExpertActionVisual({ name, role, skills, gender, compact = false }: ExpertVisual) {
  const product = pickProduct(skills);
  const action = actionFor(product);
  const woman = gender === "woman";
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(101,230,212,0.12),transparent_24%),radial-gradient(circle_at_22%_90%,rgba(18,62,145,0.30),transparent_45%)]" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-[linear-gradient(to_top,rgba(0,0,0,.38),transparent)]" />

      <motion.div
        className="absolute left-3 top-3 z-20 rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[8px] font-bold tracking-[0.16em] text-white/55 backdrop-blur"
        animate={{ opacity: [0.45, 0.85, 0.45] }}
        transition={{ duration: 2.8, repeat: Infinity }}
      >
        SHYENA
      </motion.div>

      <div className="absolute left-[4%] top-[20%] z-10 w-[49%]">
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
        <Portrait woman={woman} accent={action.accent} name={name} />

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

      <div className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/20 px-2 py-1 text-[8px] font-semibold text-white/40 backdrop-blur">
        {product} · LIVE
      </div>
    </motion.div>
  );
}

const SYNTHETIC_FEMALE_AVATARS = [
  "https://raw.githubusercontent.com/Prompt-Haus/OpenPeople/main/openpeople/data/curated/P001/assets/studio_portrait.jpg",
  "https://raw.githubusercontent.com/Prompt-Haus/OpenPeople/main/openpeople/data/curated/P002/assets/studio_portrait.jpg",
  "https://raw.githubusercontent.com/Prompt-Haus/OpenPeople/main/openpeople/data/curated/P003/assets/studio_portrait.jpg",
  "https://raw.githubusercontent.com/Prompt-Haus/OpenPeople/main/openpeople/data/curated/P004/assets/studio_portrait.jpg",
  "https://raw.githubusercontent.com/Prompt-Haus/OpenPeople/main/openpeople/data/curated/P006/assets/studio_portrait.jpg",
  "https://raw.githubusercontent.com/Prompt-Haus/OpenPeople/main/openpeople/data/curated/P009/assets/studio_portrait.jpg",
  "https://raw.githubusercontent.com/Prompt-Haus/OpenPeople/main/openpeople/data/curated/P010/assets/studio_portrait.jpg",
];

const SYNTHETIC_MALE_AVATARS = [
  "https://raw.githubusercontent.com/Prompt-Haus/OpenPeople/main/openpeople/data/curated/P005/assets/studio_portrait.jpg",
  "https://raw.githubusercontent.com/Prompt-Haus/OpenPeople/main/openpeople/data/curated/P007/assets/studio_portrait.jpg",
  "https://raw.githubusercontent.com/Prompt-Haus/OpenPeople/main/openpeople/data/curated/P008/assets/studio_portrait.jpg",
];

function avatarFor(name: string, woman: boolean) {
  const source = woman ? SYNTHETIC_FEMALE_AVATARS : SYNTHETIC_MALE_AVATARS;
  const hash = [...name].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return source[hash % source.length];
}

function Portrait({ woman, accent, name }: { woman: boolean; accent: string; name: string }) {
  const src = avatarFor(name, woman);
  return (
    <motion.div
      className="absolute left-1/2 top-[-1%] h-[78%] w-[76%] -translate-x-1/2"
      initial={{ opacity: 0, y: 18, scale: 0.94 }}
      animate={{ opacity: 1, y: [18, 4, -2, 4, 18], scale: [0.94, 1, 1.04, 1, 0.94], rotateY: [-5, 3, -5] }}
      transition={{ duration: 7.2, times: [0, .22, .45, .72, 1], repeat: Infinity, ease: [0.45, 0.05, 0.2, 0.95] }}
      style={{ transformStyle: "preserve-3d", transformPerspective: 1100 }}
    >
      <div
        className="absolute inset-0 overflow-hidden rounded-[26px] border border-white/20 bg-[#09111f] shadow-[0_30px_70px_rgba(0,0,0,.62)]"
        style={{ boxShadow: `0 30px 70px rgba(0,0,0,.62), 0 0 45px ${accent}22` }}
      >
        <motion.img
          src={src}
          alt={`Synthetic AI-generated ${woman ? "woman" : "man"} expert portrait for ${name}`}
          className="h-full w-full object-cover object-[50%_16%]"
          animate={{ scale: [1.04, 1.08, 1.04], x: [-2, 2, -2] }}
          transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
          loading="lazy"
          draggable={false}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,16,.02)_20%,rgba(4,8,16,.08)_52%,rgba(4,8,16,.86)_100%)]" />
        <motion.div
          className="absolute inset-y-0 left-[-45%] w-[34%] rotate-[14deg] bg-white/20 blur-xl"
          animate={{ x: ["0%", "410%"] }}
          transition={{ duration: 4.8, repeat: Infinity, repeatDelay: 2.2, ease: "easeInOut" }}
        />
        <div className="absolute inset-x-[18%] bottom-3 h-1 rounded-full blur-md" style={{ backgroundColor: accent, opacity: .65 }} />
      </div>
      <div className="absolute inset-x-[20%] top-[7%] h-7 rounded-full bg-white/8 blur-2xl" />
    </motion.div>
  );
}

function Suitcase({ accent, product }: { accent: string; product: string }) {
  return (
    <motion.div
      className="absolute bottom-[9%] left-[-10%] z-20 h-[31%] w-[82%]"
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
