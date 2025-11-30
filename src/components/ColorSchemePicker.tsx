import { clsx } from "clsx";
import { themes, type ThemeId } from "../theme";

interface ColorSchemePickerProps {
  value: ThemeId;
  onChange: (theme: ThemeId) => void;
}

export function ColorSchemePicker({ value, onChange }: ColorSchemePickerProps) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-border bg-surface-200 px-3 py-2">
      <span className="text-xs uppercase tracking-[0.06em] text-neutral">Scheme</span>
      <div className="flex gap-2">
        {themes.map((theme) => {
          const isActive = theme.id === value;
          return (
            <button
              key={theme.id}
              onClick={() => onChange(theme.id)}
              className={clsx(
                "group flex items-center gap-2 rounded-xl border px-2 py-1 text-left transition",
                isActive ? "border-accent bg-white/5" : "border-border hover:border-accent/60"
              )}
              aria-pressed={isActive}
            >
              <span
                className="h-8 w-8 rounded-lg shadow-soft transition group-hover:scale-[1.02]"
                style={{
                  background: `linear-gradient(135deg, ${theme.preview[0]}, ${theme.preview[1]})`
                }}
                aria-hidden
              />
              <div className="leading-tight">
                <p className="text-xs font-semibold text-slate-100">{theme.label}</p>
                <p className="text-[11px] text-neutral">{theme.tagline}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
