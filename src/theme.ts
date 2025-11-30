export type ThemeId = "midnight" | "sunrise" | "aurora" | "classic" | "classic-dark";

export const themes: { id: ThemeId; label: string; preview: [string, string]; tagline: string }[] = [
  { id: "midnight", label: "Midnight", preview: ["#22D3EE", "#F97316"], tagline: "Cyan + amber glow" },
  { id: "sunrise", label: "Sunrise", preview: ["#EC4899", "#FB923C"], tagline: "Warm magenta horizon" },
  { id: "aurora", label: "Aurora", preview: ["#10B981", "#8B5CF6"], tagline: "Emerald + violet haze" },
  { id: "classic", label: "Classic", preview: ["#3B82F6", "#10B981"], tagline: "Light, crisp workspace" },
  { id: "classic-dark", label: "Classic Dark", preview: ["#3B82F6", "#0EA5E9"], tagline: "Deep navy + sky" }
];

export const getInitialTheme = (): ThemeId => {
  if (typeof window === "undefined") return "midnight";
  const stored = window.localStorage.getItem("color-scheme") as ThemeId | null;
  return stored ?? "midnight";
};
