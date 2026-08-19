import type { ReactNode } from "react";

/* ── Shared docs prose primitives ────────────────────────────────────────
 * Hand-styled replacements for the (never-installed) @tailwindcss/typography
 * `prose` classes. Mirrors the pattern established in blog.$slug.tsx.
 */

export function Lead({ children }: { children: ReactNode }) {
  return <p className="text-xl leading-relaxed text-foreground">{children}</p>;
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mt-5 leading-relaxed text-muted-foreground">{children}</p>;
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="mt-12 text-2xl font-bold text-foreground sm:text-3xl">{children}</h2>;
}

export function Ul({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={i} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60"
          />
          <p className="leading-relaxed text-muted-foreground">{item}</p>
        </li>
      ))}
    </ul>
  );
}

export function OrderedList({ items }: { items: { label: string; body: ReactNode }[] }) {
  return (
    <ol className="mt-6 space-y-4">
      {items.map((item, i) => (
        <li key={item.label} className="flex gap-4">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
            {i + 1}
          </span>
          <p className="leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">{item.label} </span>
            {item.body}
          </p>
        </li>
      ))}
    </ol>
  );
}
