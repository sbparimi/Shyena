import { Maximize2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ExpandableIllustration({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label={`Expand illustration: ${title}`}
          className="group relative block h-full w-full cursor-zoom-in border-0 bg-transparent p-0 text-left"
        >
          {children}
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-navy/0 opacity-0 transition-all duration-200 group-hover:bg-navy/40 group-hover:opacity-100">
            <span className="glass-card flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-navy-foreground">
              <Maximize2 className="h-3.5 w-3.5" />
              Click to expand
            </span>
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[92vh] w-[95vw] max-w-5xl overflow-y-auto border-navy-border bg-navy p-0 sm:rounded-2xl">
        <div className="p-6 sm:p-8">
          <DialogTitle className="text-xl font-semibold text-navy-foreground">{title}</DialogTitle>
          <DialogDescription className="mt-1 text-sm text-navy-muted">{description}</DialogDescription>
          <div className="mt-6 w-full overflow-hidden rounded-xl border border-navy-border">
            {children}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
