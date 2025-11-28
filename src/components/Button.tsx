import { motion } from "framer-motion";
import { clsx } from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  icon?: ReactNode;
  children: ReactNode;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-cyan-400 to-accent text-ink font-semibold shadow-soft hover:shadow-glow",
  secondary: "border border-border text-slate-100 hover:border-accent hover:text-white",
  ghost: "text-slate-200 hover:text-white hover:bg-white/5"
};

export function Button({ variant = "primary", icon, children, className, ...props }: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      whileHover={{ y: -1 }}
      className={clsx(
        "inline-flex items-center gap-2 rounded-2xl px-4 py-2 transition-all duration-150",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {icon}
      <span>{children}</span>
    </motion.button>
  );
}
