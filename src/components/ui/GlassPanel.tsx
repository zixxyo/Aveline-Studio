import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../common/utils";

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export function GlassPanel({
  children,
  className,
  delay = 0,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={cn(
        "relative overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.055] shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-[8px] before:border before:border-white/[0.035]",
        className,
      )}
    >
      {children}
    </motion.section>
  );
}
