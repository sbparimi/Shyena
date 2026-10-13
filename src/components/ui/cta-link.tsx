import * as React from "react";
import { Link, type LinkProps } from "@tanstack/react-router";

import { cn } from "@/lib/utils";

/**
 * The one way to render a call-to-action link. It carries the `warp-btn` class, which
 * src/warp-theme.css styles as the site's single action-button style (lime fill, dark text,
 * mono uppercase label, 4px radius). Use this instead of hand-styling anchors as buttons.
 */
export function CtaLink({
  className,
  ...props
}: LinkProps & { className?: string; children?: React.ReactNode }) {
  return (
    <Link
      {...props}
      className={cn("warp-btn inline-flex h-12 items-center justify-center gap-2 px-5", className)}
    />
  );
}

export function CtaAnchor({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      className={cn("warp-btn inline-flex h-12 items-center justify-center gap-2 px-5", className)}
    />
  );
}
