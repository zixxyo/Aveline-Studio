import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../common/utils";

export function LuxuryButton({
  children,
  variant = "primary",
  className,
}: {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-[8px] px-4 text-sm font-medium transition",
        variant === "primary"
          ? "border border-[#D4AF37]/50 bg-[#D4AF37] text-black shadow-[0_14px_34px_rgba(212,175,55,0.18)] hover:bg-[#e3c04c]"
          : "border border-white/10 bg-white/[0.055] text-zinc-200 hover:border-[#D4AF37]/40 hover:text-white",
        className,
      )}
    >
      {children}
    </motion.button>
  );
}
