import { motion } from 'framer-motion'
import { BarChart3, DollarSign, Factory, ShieldCheck, Sparkles, TrendingUp, Truck } from 'lucide-react'
import type { Formula } from '../../types'
import { GlassPanel } from '../ui'

const analyticsIcons = [DollarSign, Factory, Sparkles, TrendingUp, Truck, ShieldCheck]

export function FormulaAnalytics({ formula }: { formula: Formula }) {
  const items = [
    ['Estimated Cost', formula.analytics.estimatedCost],
    ['Manufacturing Cost', formula.analytics.manufacturingCost],
    ['Suggested Retail', formula.analytics.suggestedRetail],
    ['Gross Margin', formula.analytics.grossMargin],
    ['Supplier Count', formula.analytics.supplierCount],
    ['Formula Stability', formula.analytics.stability],
  ]

  return (
    <GlassPanel delay={0.28} className="p-5" hover={false}>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#D4AF37]">Formula Analytics</p>
          <h2 className="mt-1 text-lg font-semibold text-white">Commercial Profile</h2>
        </div>
        <BarChart3 className="h-5 w-5 text-[#D4AF37]" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
        {items.map(([label, value], index) => {
          const Icon = analyticsIcons[index]

          return (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34 + index * 0.05, duration: 0.34 }}
              whileHover={{ y: -3 }}
              className="rounded-[8px] border border-white/10 bg-black/25 p-4"
            >
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs text-zinc-500">{label}</p>
                <Icon className="h-4 w-4 text-[#D4AF37]" />
              </div>
              <p className="text-xl font-semibold text-white">{value}</p>
            </motion.div>
          )
        })}
      </div>
    </GlassPanel>
  )
}

export function IngredientCostBreakdown({ formula }: { formula: Formula }) {
  return (
    <GlassPanel delay={0.34} className="p-5" hover={false}>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#D4AF37]">Ingredient Cost Breakdown</p>
          <h2 className="mt-1 text-lg font-semibold text-white">Material Cost Drivers</h2>
        </div>
        <TrendingUp className="h-5 w-5 text-[#D4AF37]" />
      </div>
      <div className="space-y-4">
        {formula.ingredients.map((ingredient, index) => (
          <div key={ingredient.name}>
            <div className="mb-2 flex items-center justify-between gap-3 text-sm">
              <span className="truncate text-zinc-300">{ingredient.name}</span>
              <span className="text-zinc-500">{ingredient.costShare}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: String(ingredient.costShare ?? 0) + '%' }}
                transition={{ delay: 0.42 + index * 0.07, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-full bg-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.55)]"
              />
            </div>
          </div>
        ))}
      </div>
    </GlassPanel>
  )
}
