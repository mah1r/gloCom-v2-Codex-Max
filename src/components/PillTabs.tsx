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
              "relative overflow-hidden rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors",
              isActive ? "text-ink" : "text-slate-200 hover:border-white/30"
            )}
          >
            {isActive && (
              <motion.span
                layoutId="pill"
                className="absolute inset-0 bg-gradient-to-r from-white via-cyan-100 to-white"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
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
