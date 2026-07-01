import { motion } from 'framer-motion'
import { Calculator } from 'lucide-react'
import type { Formula } from '../../types'
import { GlassPanel } from "../ui/GlassPanel";

function formatQuantity(value: number) {
  if (value < 1) return value.toFixed(2) + ' g'
  if (value < 10) return value.toFixed(1) + ' g'
  return Math.round(value) + ' g'
}

export function BatchCalculator({
  formula,
  batchSize,
  onBatchSizeChange,
}: {
  formula: Formula
  batchSize: number
  onBatchSizeChange: (value: number) => void
}) {
  const fixedPercentage = formula.ingredients.reduce((total, ingredient) => total + (ingredient.percentage ?? 0), 0)

  return (
    <GlassPanel delay={0.4} className="p-5" hover={false}>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#D4AF37]">Batch Calculator</p>
          <h2 className="mt-1 text-lg font-semibold text-white">Scale Ingredient Quantities</h2>
        </div>
        <Calculator className="h-5 w-5 text-[#D4AF37]" />
      </div>
      <label className="block">
        <span className="text-sm text-zinc-500">Batch Size (mL)</span>
        <input
          type="number"
          min="100"
          step="100"
          value={batchSize}
          onChange={(event) => onBatchSizeChange(Number(event.target.value) || 0)}
          className="mt-2 h-11 w-full rounded-[8px] border border-white/10 bg-black/30 px-3 text-sm text-white outline-none transition focus:border-[#D4AF37]/50"
        />
      </label>
      <div className="mt-5 space-y-2">
        {formula.ingredients.map((ingredient, index) => {
          const percentage = ingredient.percentage ?? Math.max(0, 100 - fixedPercentage)
          const quantity = (batchSize * percentage) / 100

          return (
            <motion.div
              key={ingredient.name}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.48 + index * 0.045, duration: 0.32 }}
              className="flex items-center justify-between gap-4 rounded-[8px] border border-white/10 bg-black/20 px-3 py-3"
            >
              <span className="text-sm text-zinc-300">{ingredient.name}</span>
              <span className="text-sm font-medium text-white">{formatQuantity(quantity)}</span>
            </motion.div>
          )
        })}
      </div>
    </GlassPanel>
  )
}
