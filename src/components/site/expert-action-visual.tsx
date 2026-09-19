import { motion, useMotionValue, useSpring } from "framer-motion";
import type { PointerEvent as ReactPointerEvent } from "react";

type ExpertVisual = {
  id: string;
  name: string;
  role: string;
  skills: string[];
  gender: "woman" | "man";
  compact?: boolean;
};

function specialtyFor(skills: string[]) {
  const text = skills.join(" ").toLowerCase();
  if (/(security|red team|owasp|prompt injection|adversarial)/.test(text)) return "CHAKRA";
  if (/(eval|deepeval|promptfoo|testing|qa|playwright|automation|rag|performance|accessibility)/.test(text)) return "VERA";
  return "NEXUS";
}

function initials(name: string) {
  const parts = name.replace(/^Dr\.\s+/i, "").trim().split(/\s+/).filter(Boolean);
  return parts.slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}

function variantFor(id: string) {
  let hash = 0;
  for (let index = 0; index < id.length; index += 1) {
    hash = (hash * 31 + id.charCodeAt(index)) | 0;
  }
  return Math.abs(hash) % 6;
}

function CorporatePortrait({
  id,
  name,
  woman,
}: {
  id: string;
  name: string;
  woman: boolean;
}) {
  const variant = variantFor(id);
  const monogram = initials(name);
  const backdrop = [
    "linear-gradient(145deg,#f8fafc 0%,#eef2f7 52%,#e4e9f0 100%)",
    "linear-gradient(145deg,#f5f7fa 0%,#e9eef4 55%,#dde4ec 100%)",
    "linear-gradient(145deg,#fafbfc 0%,#edf0f4 50%,#e7ebf1 100%)",
    "linear-gradient(145deg,#f4f7f9 0%,#e9edf2 55%,#dfe6ee 100%)",
    "linear-gradient(145deg,#f8f8fa 0%,#eceff3 52%,#e1e6ed 100%)",
    "linear-gradient(145deg,#f6f8fb 0%,#eaf0f5 50%,#e0e7ef 100%)",
  ][variant];

  const jacket = ["#17213f", "#202b4b", "#182540", "#263452", "#1b2948", "#222f4d"][variant];
  const accent = ["#e87512", "#c96b18", "#e87512", "#d87925", "#e87512", "#cf711f"][variant];

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: backdrop }}>
      <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(23,33,63,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(23,33,63,.035)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute -right-12 -top-16 h-44 w-44 rounded-full border border-[#17213f]/[0.06]" />
      <div className="absolute -left-16 bottom-8 h-40 w-40 rounded-full border border-[#e87512]/10" />
      <div className="absolute left-6 top-6 rounded-full border border-[#17213f]/10 bg-white/75 px-3 py-1.5 text-[9px] font-semibold tracking-[0.14em] text-[#17213f]/55 backdrop-blur">
        {monogram}
      </div>

      <svg
        viewBox="0 0 360 300"
        className="absolute inset-x-0 bottom-0 h-[94%] w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`portrait-jacket-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={jacket} />
            <stop offset="100%" stopColor="#0f1730" />
          </linearGradient>
          <linearGradient id={`portrait-skin-${id}`} x1="0" y1="0" x2="0.8" y2="1">
            <stop offset="0%" stopColor={variant % 2 === 0 ? "#f3c9a8" : "#e9b995"} />
            <stop offset="100%" stopColor={variant % 3 === 0 ? "#d99a73" : "#efbfa0"} />
          </linearGradient>
        </defs>

        <ellipse cx="180" cy="285" rx="108" ry="15" fill="#17213f" opacity=".08" />

        <path
          d={woman
            ? "M128 126C126 82 147 51 180 51C213 51 234 82 232 126C228 161 210 177 180 177C150 177 132 161 128 126Z"
            : "M130 124C128 80 148 51 180 51C212 51 232 80 230 124C226 159 208 177 180 177C152 177 134 159 130 124Z"}
          fill={`url(#portrait-skin-${id})`}
        />

        <path
          d={woman
            ? "M125 112C120 74 140 34 180 34C220 34 240 74 235 112C225 91 210 80 180 80C150 80 135 91 125 112Z"
            : variant % 2 === 0
              ? "M123 103C125 60 147 31 180 31C213 31 235 60 237 103C224 82 207 71 180 71C153 71 136 82 123 103Z"
              : "M128 96C130 55 151 31 180 31C209 31 230 55 232 96C219 77 204 68 180 68C156 68 141 77 128 96Z"}
          fill="#17213f"
        />

        <path
          d="M140 132C153 139 207 139 220 132"
          fill="none"
          stroke="#b87957"
          strokeWidth="1.5"
          opacity=".5"
        />
        <circle cx="153" cy="113" r="2.8" fill="#17213f" opacity=".72" />
        <circle cx="207" cy="113" r="2.8" fill="#17213f" opacity=".72" />
        <path d="M169 137Q180 143 191 137" fill="none" stroke="#8f5d4c" strokeWidth="2" strokeLinecap="round" opacity=".72" />

        <path
          d={woman
            ? "M116 174Q180 151 244 174L282 300H78Z"
            : "M118 174Q180 150 242 174L276 300H84Z"}
          fill={`url(#portrait-jacket-${id})`}
        />

        <path d="M151 171L180 208L209 171" fill="#f8fafc" opacity=".96" />
        <path d="M158 176L180 202L202 176" fill={accent} opacity=".9" />
        <path d="M180 205V285" stroke="#ffffff" strokeOpacity=".11" strokeWidth="1.5" />
        <path d="M105 232H255" stroke="#ffffff" strokeOpacity=".08" strokeWidth="1" />

        {variant % 2 === 0 ? (
          <path d="M120 198Q180 223 240 198" fill="none" stroke="#ffffff" strokeOpacity=".12" strokeWidth="2" />
        ) : (
          <path d="M135 190L225 190" stroke="#ffffff" strokeOpacity=".12" strokeWidth="2" />
        )}

        <circle cx="180" cy="207" r="5" fill={accent} />
        <circle cx="180" cy="207" r="2" fill="#fff" opacity=".95" />
      </svg>

      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
        <div>
          <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#17213f]/45">
            Corporate profile
          </div>
          <div className="mt-1 text-[11px] font-semibold text-[#17213f]/80">
            AI quality specialist
          </div>
        </div>
        <div
          className="h-9 w-9 rounded-full border border-white/80 bg-white/80 p-1.5 shadow-sm backdrop-blur"
          aria-hidden="true"
        >
          <div className="flex h-full w-full items-center justify-center rounded-full" style={{ background: accent }}>
            <span className="h-2 w-2 rounded-full bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ExpertActionVisual({ id, name, role, skills, gender, compact = false }: ExpertVisual) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateY = useSpring(pointerX, { stiffness: 120, damping: 24, mass: 0.7 });
  const rotateX = useSpring(pointerY, { stiffness: 120, damping: 24, mass: 0.7 });
  const product = specialtyFor(skills);
  const woman = gender === "woman";

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 3);
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * -2.2);
  };

  const reset = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-[20px] border border-[#cfd5df] bg-[#eef2f6] shadow-[0_18px_40px_-28px_rgba(23,33,63,.45)] ${compact ? "h-[250px]" : "h-[360px]"}`}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      whileHover={{ scale: 1.006 }}
      transition={{ type: "spring", stiffness: 180, damping: 24 }}
      aria-label={`${name} corporate profile illustration`}
    >
      <CorporatePortrait id={id} name={name} woman={woman} />

      <div className="absolute left-3 top-3 z-10 rounded-full border border-[#17213f]/10 bg-white/88 px-2.5 py-1 text-[8px] font-bold tracking-[0.16em] text-[#17213f]/65 backdrop-blur-md">
        {product} · EXPERT
      </div>

      <div className="absolute right-3 top-3 z-10 rounded-full border border-[#17213f]/10 bg-white/88 px-2.5 py-1 text-[8px] font-semibold text-[#17213f]/65 backdrop-blur-md">
        Available
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-[#17213f]/12 via-transparent to-transparent p-4">
        <div className="text-[10px] font-semibold text-[#17213f]/55">{role}</div>
      </div>
    </motion.div>
  );
}
