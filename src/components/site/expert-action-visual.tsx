import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { PointerEvent as ReactPointerEvent } from "react";

type ExpertVisual = {
  name: string;
  role: string;
  skills: string[];
  compact?: boolean;
};

const productMap = [
  { key: "NEXUS", match: ["strategy", "enterprise", "governance", "fusion", "salesforce", "cognigy", "architecture", "integration", "api"] },
  { key: "VERA", match: ["eval", "llm", "rag", "deepeval", "promptfoo", "playwright", "testing", "qa", "performance", "accessibility", "automation"] },
  { key: "CHAKRA", match: ["security", "red team", "owasp", "prompt injection", "adversarial"] },
] as const;

function pickProduct(skills: string[]) {
  const text = skills.join(" ").toLowerCase();
  if (text.includes("security") || text.includes("red team") || text.includes("owasp") || text.includes("prompt injection")) return "CHAKRA";
  if (text.includes("eval") || text.includes("deepeval") || text.includes("promptfoo") || text.includes("testing") || text.includes("qa") || text.includes("playwright")) return "VERA";
  return "NEXUS";
}

function initials(name: string) {
  return name.split(" ").map((part) => part[0]).join("").slice(0, 2);
}

function actionFor(product: string) {
  if (product === "CHAKRA") return { verb: "ATTACKING", label: "Unsafe path", signal: "BLOCKED", accent: "#ff7a78" };
  if (product === "VERA") return { verb: "EVALUATING", label: "Agent journey", signal: "0.91", accent: "#65e6d4" };
  return { verb: "MAPPING", label: "System flow", signal: "LINKED", accent: "#e7bf67" };
}

export function ExpertActionVisual({ name, role, skills, compact = false }: ExpertVisual) {
  const product = pickProduct(skills);
  const action = actionFor(product);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateY = useSpring(pointerX, { stiffness: 120, damping: 18, mass: 0.65 });
  const rotateX = useSpring(pointerY, { stiffness: 120, damping: 18, mass: 0.65 });
  const avatarX = useTransform(rotateY, [-8, 8], [-5, 5]);
  const avatarY = useTransform(rotateX, [-6, 6], [4, -4]);

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
      className={`relative overflow-hidden rounded-[22px] border border-[#1f3359] bg-[#07101f] ${compact ? "h-[190px]" : "h-[250px]"}`}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(101,230,212,0.16),transparent_24%),radial-gradient(circle_at_22%_90%,rgba(18,62,145,0.32),transparent_42%)]" />
      <motion.div
        className="absolute -right-12 -top-16 h-40 w-40 rounded-full border border-[#65e6d4]/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-[7%] top-[12%] text-[8px] font-bold tracking-[0.2em] text-white/35"
        animate={{ opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 2.8, repeat: Infinity }}
      >
        SHYENA / EXPERT ACTION
      </motion.div>

      <div className="absolute left-[5%] top-[27%] w-[48%]">
        <div className="mb-2 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: action.accent }} />
          <span className="text-[9px] font-bold tracking-[0.18em] text-white/55">{product}</span>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.055] p-3 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/50">{action.label}</span>
            <motion.span
              className="text-[9px] font-bold"
              style={{ color: action.accent }}
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            >
              {action.signal}
            </motion.span>
          </div>
          <ProductGraphic product={product} accent={action.accent} />
        </div>
      </div>

      <motion.div
        className="absolute right-[7%] bottom-[4%] h-[86%] w-[38%]"
        style={{ x: avatarX, y: avatarY, transformStyle: "preserve-3d" }}
        animate={{ y: [2, -7, 2], rotateZ: [-1, 1, -1] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute bottom-0 left-1/2 h-[78%] w-[72%] -translate-x-1/2 rounded-[45%_45%_18%_18%] border border-white/10 bg-gradient-to-b from-[#193a6d] via-[#102750] to-[#081426] shadow-[0_25px_50px_rgba(0,0,0,0.45)]" />
        <div className="absolute left-1/2 top-[8%] h-[45%] w-[43%] -translate-x-1/2 rounded-[48%_48%_45%_45%] border border-white/15 bg-gradient-to-br from-[#dca98a] via-[#b87962] to-[#754b48] shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
          <div className="absolute left-[19%] top-[48%] h-1 w-1 rounded-full bg-[#1a1720]" />
          <div className="absolute right-[19%] top-[48%] h-1 w-1 rounded-full bg-[#1a1720]" />
          <div className="absolute left-1/2 top-[62%] h-1 w-5 -translate-x-1/2 rounded-full bg-[#6c3f42]/70" />
          <div className="absolute -top-[8%] left-[5%] h-[30%] w-[90%] rounded-[50%_50%_30%_30%] bg-[#18202e]" />
        </div>
        <div className="absolute left-[2%] top-[43%] h-3 w-[40%] origin-right -rotate-[20deg] rounded-full bg-gradient-to-r from-[#c68b70] to-[#a76759]" />
        <motion.div
          className="absolute left-[-2%] top-[37%] h-9 w-14 rounded-lg border border-[#65e6d4]/30 bg-[#0d1e35]/95 shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
          animate={{ x: [-2, 5, -2], y: [0, -3, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="px-2 pt-1 text-[6px] font-bold tracking-[0.12em]" style={{ color: action.accent }}>{action.verb}</div>
          <div className="mx-2 mt-1 h-1 rounded-full bg-white/10"><motion.div className="h-full rounded-full" style={{ backgroundColor: action.accent }} animate={{ width: ["35%", "82%", "35%"] }} transition={{ duration: 2.2, repeat: Infinity }} /></div>
        </motion.div>
        <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 text-center">
          <div className="text-[9px] font-bold tracking-[0.12em] text-white">{initials(name)}</div>
          <div className="mt-0.5 max-w-[150px] truncate text-[7px] text-white/45">{role}</div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/25 px-2 py-1 text-[8px] font-semibold text-white/50 backdrop-blur"
        animate={{ x: [0, 4, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        LIVE PRODUCT INTERACTION
      </motion.div>
    </motion.div>
  );
}

function ProductGraphic({ product, accent }: { product: string; accent: string }) {
  if (product === "CHAKRA") {
    return (
      <svg viewBox="0 0 180 72" className="mt-3 h-16 w-full">
        <g fill="none" stroke={accent} strokeOpacity="0.45">
          <circle cx="90" cy="36" r="25" /><circle cx="90" cy="36" r="16" /><circle cx="90" cy="36" r="7" />
        </g>
        <motion.path d="M8 18 C42 5 62 68 90 36 S137 8 172 55" fill="none" stroke={accent} strokeWidth="2" strokeDasharray="5 6" animate={{ strokeDashoffset: [0, -44] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
        {[["8","18"],["54","49"],["90","36"],["138","20"],["172","55"]].map(([cx,cy], i) => <motion.circle key={i} cx={cx} cy={cy} r="3" fill={accent} animate={{ opacity: [0.3,1,0.3], scale: [0.8,1.25,0.8] }} transition={{ duration: 1.4, delay: i * 0.12, repeat: Infinity }} />)}
      </svg>
    );
  }
  if (product === "VERA") {
    return (
      <svg viewBox="0 0 180 72" className="mt-3 h-16 w-full">
        <g fill="none" stroke={accent} strokeOpacity="0.38">
          <circle cx="90" cy="36" r="27" /><circle cx="90" cy="36" r="18" /><circle cx="90" cy="36" r="9" />
        </g>
        <motion.circle cx="90" cy="36" r="4" fill={accent} animate={{ r: [3, 7, 3] }} transition={{ duration: 1.7, repeat: Infinity }} />
        <motion.path d="M30 58 L60 42 L83 49 L112 24 L150 34" fill="none" stroke={accent} strokeWidth="2" animate={{ pathLength: [0.2, 1, 0.2] }} transition={{ duration: 2.6, repeat: Infinity }} />
        <text x="7" y="12" fill="white" fillOpacity="0.45" fontSize="7">SEMANTIC</text>
        <text x="142" y="64" fill={accent} fontSize="9" fontWeight="700">0.91</text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 180 72" className="mt-3 h-16 w-full">
      <g fill="none" stroke={accent} strokeOpacity="0.38" strokeWidth="1.5">
        <path d="M14 52 H52 V36 H88 V20 H126 V40 H166" />
        <path d="M14 60 H40 V47 H70 V58 H108 V34 H146 V50 H166" strokeOpacity="0.18" />
      </g>
      {[["14","52"],["52","36"],["88","20"],["126","40"],["166","40"]].map(([cx,cy], i) => <motion.circle key={i} cx={cx} cy={cy} r="4" fill={accent} animate={{ opacity: [0.35,1,0.35] }} transition={{ duration: 1.8, delay: i * 0.16, repeat: Infinity }} />)}
    </svg>
  );
}
