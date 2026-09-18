import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { PointerEvent as ReactPointerEvent } from "react";

type ExpertVisual = {
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

export function ExpertActionVisual({ name, role, skills, gender, compact = false }: ExpertVisual) {
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
      <Portrait woman={woman} name={name} />

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
