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

function splitName(name: string) {
  const clean = name.replace(/^Dr\.\s+/i, "").trim();
  const parts = clean.split(/\s+/);
  return {
    first: parts[0] ?? clean,
    last: parts.slice(1).join(" "),
  };
}

function CorporateIdentity({ id, name, role }: { id: string; name: string; role: string }) {
  const { first, last } = splitName(name);
  let hash = 0;
  for (let index = 0; index < id.length; index += 1) hash = (hash * 31 + id.charCodeAt(index)) | 0;
  const variant = Math.abs(hash) % 5;
  const accents = ["#e87512", "#d66d12", "#f08a2e", "#c8610d", "#e87512"];
  const accent = accents[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#17213f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(232,117,18,.20),transparent_30%),linear-gradient(135deg,#17213f_0%,#202d50_55%,#111a34_100%)]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:36px_36px]" />
      <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full border border-white/10" />
      <div className="absolute -right-4 top-12 h-28 w-28 rounded-full border border-[#e87512]/30" />

      <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
        <div className="flex items-start justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-white/65 backdrop-blur">
            {specialtyFor(role ? [role] : [])} · EXPERT
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.07] px-3 py-1.5 text-[9px] font-semibold text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e87512] shadow-[0_0_10px_rgba(232,117,18,.9)]" />
            Available
          </div>
        </div>

        <div className="max-w-[92%]">
          <div className="mb-5 h-px w-14" style={{ background: accent }} />
          <div className="font-[Sora] text-[clamp(2rem,5vw,3.8rem)] font-extrabold leading-[0.9] tracking-[-0.055em] text-white">
            <div>{first}</div>
            <div className="text-white/55">{last}</div>
          </div>
          <div className="mt-5 max-w-[30rem] text-[11px] font-semibold uppercase tracking-[0.13em] text-white/55">
            {role}
          </div>
          <div className="mt-5 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full" style={{ background: accent }} />
            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/45">Shyena expert network</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.07] backdrop-blur">
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: accent }} />
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
      className={`relative overflow-hidden rounded-[20px] border border-[#24304d] bg-[#17213f] shadow-[0_18px_40px_-28px_rgba(23,33,63,.7)] ${compact ? "h-[250px]" : "h-[360px]"}`}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      whileHover={{ scale: 1.006 }}
      transition={{ type: "spring", stiffness: 180, damping: 24 }}
      aria-label={`${name} corporate identity profile`}
    >
      <CorporateIdentity id={id} name={name} role={role} />

      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#17213f] to-transparent" aria-hidden="true" />
      <div className="absolute left-4 bottom-4 z-10 rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-1 text-[8px] font-bold tracking-[0.16em] text-white/50">
        {product}
      </div>
    </motion.div>
  );
}
