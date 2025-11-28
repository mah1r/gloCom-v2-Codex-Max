import { clsx } from "clsx";
import type { ReactNode } from "react";

const map: Record<string, string> = {
  available: "bg-success/15 text-success",
  away: "bg-warning/15 text-warning",
  busy: "bg-danger/15 text-danger",
  offline: "bg-white/5 text-neutral",
  default: "bg-white/5 text-slate-100"
};

interface BadgeProps {
  tone?: keyof typeof map;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Badge({ tone = "default", icon, children, className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium",
        map[tone] ?? map.default,
        className
      )}
    >
      {icon}
      {children}
    </span>
  );
}
