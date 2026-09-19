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

const AVATAR_BY_EXPERT_ID: Record<string, string> = {
  "marcus-van-der-berg": "P005",
  "ankit-sharma": "P007",
  "viktor-petrov": "P008",
  "hans-mueller": "P014",
  "elena-kowalski": "P001",
  "david-chen": "P016",
  "maria-santos": "P002",
  "pavel-horvat": "P018",
  "lisa-thompson": "P003",
  "anna-novak": "P004",
  "sofia-lindberg": "P006",
  "rahul-mehta": "P019",
  "aisha-khan": "P009",
  "daniel-weber": "P022",
  "priya-nair": "P010",
  "thomas-keller": "P024",
  "noor-el-amrani": "P011",
  "james-okafor": "P025",
  "elena-rossi": "P012",
  "martin-novak": "P027",
  "kavya-rao": "P013",
  "lucas-meyer": "P029",
  "sara-haddad": "P015",
  "mateusz-zielinski": "P030",
  "ines-ferreira": "P017",
  "amira-yusuf": "P020",
  "george-wilson": "P031",
  "maya-patel": "P021",
  "jonas-berg": "P032",
  "fatima-alvarez": "P023",
  "erik-jansen": "P026",
  "chloe-martin": "P028",
  "adrian-popescu": "P034",
};

function specialtyFor(skills: string[]) {
  const text = skills.join(" ").toLowerCase();
  if (/(security|red team|owasp|prompt injection|adversarial)/.test(text)) return "CHAKRA";
  if (/(eval|deepeval|promptfoo|testing|qa|playwright|automation|rag|performance|accessibility)/.test(text)) return "VERA";
  return "NEXUS";
}

function TemplateAvatar({ woman }: { woman: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#f4f6f9]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(232,117,18,.14),transparent_30%),linear-gradient(135deg,#f8fafc_0%,#eef2f6_55%,#e6ebf1_100%)]" />
      <div className="absolute inset-x-0 top-0 h-1 bg-[#e87512]" />
      <div className="absolute left-5 top-5 h-16 w-16 rounded-full border border-[#17213f]/10 bg-white/70" />
      <div className="absolute right-5 top-5 text-[9px] font-bold uppercase tracking-[.18em] text-[#17213f]/35">AI QUALITY</div>
      <svg viewBox="0 0 320 260" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="avatarBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#17213f" />
            <stop offset="100%" stopColor="#273454" />
          </linearGradient>
        </defs>
        <circle cx="160" cy="112" r="66" fill="#fff" />
        <path d={woman ? "M94 113C94 58 123 31 160 31C197 31 226 58 226 113C217 92 202 82 160 82C118 82 103 92 94 113Z" : "M101 91C111 45 139 31 160 31C181 31 209 45 219 91C205 76 190 70 160 70C130 70 115 76 101 91Z"} fill="url(#avatarBg)" />
        <circle cx="139" cy="112" r="4" fill="#17213f" />
        <circle cx="181" cy="112" r="4" fill="#17213f" />
        <path d="M145 139 Q160 148 175 139" fill="none" stroke="#17213f" strokeWidth="4" strokeLinecap="round" />
        <path d="M116 180 Q160 151 204 180 L232 260 H88 Z" fill="#17213f" />
        <path d="M136 176 L160 205 L184 176" fill="none" stroke="#e87512" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M116 180 Q160 203 204 180" fill="none" stroke="#fff" strokeOpacity=".7" strokeWidth="2" />
        <circle cx="160" cy="112" r="67" fill="none" stroke="#e87512" strokeOpacity=".5" strokeWidth="2" />
      </svg>
      <div className="absolute bottom-5 left-5 rounded-xl border border-[#17213f]/10 bg-white/85 px-3 py-2 backdrop-blur">
        <div className="text-[9px] font-bold uppercase tracking-[.18em] text-[#e87512]">Professional profile</div>
        <div className="mt-1 text-[10px] font-semibold text-[#17213f]">Assurance specialist</div>
      </div>
      <div className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#e87512] text-white shadow-lg">
        <span className="text-[11px] font-black">{woman ? "W" : "M"}</span>
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
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 4);
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * -3);
  };

  const reset = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-[20px] border border-[#303030] bg-[#0a0a0a] ${compact ? "h-[250px]" : "h-[360px]"}`}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      whileHover={{ scale: 1.008 }}
      transition={{ type: "spring", stiffness: 180, damping: 24 }}
      aria-label={`${name} professional profile illustration`}
    >
      <TemplateAvatar woman={woman} />

      <div className="absolute left-3 top-3 z-10 rounded-full border border-white/20 bg-black/55 px-2.5 py-1 text-[8px] font-bold tracking-[0.16em] text-white/80 backdrop-blur-md">
        SHYENA
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 p-4">
        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0">
            <div className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#e87512]">{product} · EXPERT</div>
            <div className="mt-1 truncate text-[11px] font-semibold text-white/75">{role}</div>
          </div>
          <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#e87512] shadow-[0_0_14px_rgba(232,117,18,.9)]" />
        </div>
      </div>
    </motion.div>
  );
}
