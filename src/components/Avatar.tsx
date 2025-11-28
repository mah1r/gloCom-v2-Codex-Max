import { clsx } from "clsx";

interface AvatarProps {
  name: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses: Record<NonNullable<AvatarProps["size"]>, string> = {
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-base",
  lg: "h-12 w-12 text-lg"
};

export function Avatar({ name, size = "md" }: AvatarProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={clsx(
        "flex items-center justify-center rounded-full bg-gradient-to-br from-surface-200 to-surface-100 text-white font-semibold",
        sizeClasses[size]
      )}
    >
      {initials}
    </div>
  );
}
