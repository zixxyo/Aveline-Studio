import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
}

export function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function GlassPanel({
  children,
  className,
  delay = 0,
  hover = true,
}: {
  children: ReactNode
  className?: string
  delay?: number
  hover?: boolean
}) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={cn(
        'relative overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.055] shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl',
        'before:pointer-events-none before:absolute before:inset-0 before:rounded-[8px] before:border before:border-white/[0.035]',
        className,
      )}
    >
      {children}
    </motion.section>
  )
}

export function LuxuryButton({
  children,
  variant = 'primary',
  className,
}: {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}) {
  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'inline-flex h-11 items-center justify-center gap-2 rounded-[8px] px-4 text-sm font-medium transition',
        variant === 'primary'
          ? 'border border-[#D4AF37]/50 bg-[#D4AF37] text-black shadow-[0_14px_34px_rgba(212,175,55,0.18)] hover:bg-[#e3c04c]'
          : 'border border-white/10 bg-white/[0.055] text-zinc-200 hover:border-[#D4AF37]/40 hover:text-white',
        className,
      )}
    >
      {children}
    </motion.button>
  )
}

export function StatusPill({ status }: { status: string }) {
  const isApproved = status === 'Approved' || status === 'Ready'

  return (
    <span
      className={cn(
        'inline-flex rounded-[8px] border px-3 py-1 text-xs font-medium',
        isApproved ? 'border-emerald-400/25 bg-emerald-400/10 text-emerald-300' : 'border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#D4AF37]',
      )}
    >
      {status}
    </span>
  )
}
