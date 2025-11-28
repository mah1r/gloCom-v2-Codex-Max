import { clsx } from "clsx";
import type { ReactNode } from "react";

interface CardProps {
  title?: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Card({ title, subtitle, action, children, className }: CardProps) {
  return (
    <div className={clsx("glass rounded-3xl p-5 shadow-soft", className)}>
      {(title || action) && (
        <div className="mb-3 flex items-start justify-between">
          <div>
            {title && <p className="text-sm uppercase tracking-[0.08em] text-neutral">{title}</p>}
            {subtitle && <p className="text-lg font-semibold text-white">{subtitle}</p>}
          </div>
          {action}
        </div>
      )}
      {children}
    </div>
  );
}
