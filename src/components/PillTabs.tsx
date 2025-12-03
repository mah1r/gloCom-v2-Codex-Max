import { motion } from "framer-motion";
import { clsx } from "clsx";
import type { ReactNode } from "react";

export interface Tab {
  id: string;
  label: string;
  icon?: ReactNode;
}

interface PillTabsProps {
  tabs: Tab[];
  active: string;
  onChange: (id: string) => void;
}

export function PillTabs({ tabs, active, onChange }: PillTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => {
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={clsx(
              "relative overflow-hidden rounded-full border border-border/60 bg-white/5 px-4 py-2 text-sm font-medium transition-all",
              isActive
                ? "text-accent font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                : "text-ink-muted hover:border-border hover:bg-white/8 hover:shadow-[0_8px_20px_rgba(0,0,0,0.03)]"
            )}
          >
            {isActive && (
              <motion.span
                layoutId="pill"
                className="absolute inset-0 bg-gradient-to-r from-accent/26 via-white/90 to-accent2/26 border border-accent/30"
                style={{ borderRadius: 9999 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {tab.icon}
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
