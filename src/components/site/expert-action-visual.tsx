import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { PointerEvent as ReactPointerEvent } from "react";

type ExpertVisual = {
  id: string;
  name: string;
  role: string;
  skills: string[];
  gender: "woman" | "man";
  compact?: boolean;
};

function avatarFor(name: string, woman: boolean) {
  const source = woman ? SYNTHETIC_FEMALE_AVATARS : SYNTHETIC_MALE_AVATARS;
  const hash = [...name].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return source[hash % source.length];
}

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

function avatarUrl(id: string) {
  const person = AVATAR_BY_EXPERT_ID[id] ?? "P001";
  return `https://raw.githubusercontent.com/Prompt-Haus/OpenPeople/main/openpeople/data/curated/${person}/assets/studio_portrait.jpg`;
}

function specialtyFor(skills: string[]) {
  const text = skills.join(" ").toLowerCase();
  if (/(security|red team|owasp|prompt injection|adversarial)/.test(text)) return "CHAKRA";
  if (/(eval|deepeval|promptfoo|testing|qa|playwright|automation|rag|performance|accessibility)/.test(text)) return "VERA";
  return "NEXUS";
}

function Portrait({ woman, name }: { woman: boolean; name: string }) {
  const src = avatarFor(name, woman);
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0, scale: 1.02 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <img
        src={src}
        alt={`Synthetic AI-generated ${woman ? "woman" : "man"} expert portrait for ${name}`}
        className="h-full w-full object-cover object-[50%_18%]"
        loading="lazy"
        draggable={false}
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
    </motion.div>
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
      aria-label={`${name} synthetic profile portrait`}
    >
      <Portrait woman={woman} id={id} name={name} />

      <div className="absolute left-3 top-3 z-10 rounded-full border border-white/20 bg-black/55 px-2.5 py-1 text-[8px] font-bold tracking-[0.16em] text-white/80 backdrop-blur-md">
        SHYENA
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 p-4">
        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0">
            <div className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#ffd43b]">{product} · EXPERT</div>
            <div className="mt-1 truncate text-[11px] font-semibold text-white/75">{role}</div>
          </div>
          <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffd43b] shadow-[0_0_14px_rgba(255,212,59,.9)]" />
        </div>
      </div>
    </motion.div>
  );
}
