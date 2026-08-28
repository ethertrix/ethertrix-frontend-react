"use client";

import type { ReactNode } from "react";

type Props = { target: string; className?: string; children: ReactNode; ariaLabel?: string };

export default function SmoothScrollLink({ target, className, children, ariaLabel }: Props) {
  return <button type="button" className={className} aria-label={ariaLabel} onClick={() => document.getElementById(target)?.scrollIntoView({ behavior: "smooth" })}>{children}</button>;
}
