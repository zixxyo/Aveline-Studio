import { motion } from 'framer-motion'
import { Edit3, FlaskConical } from 'lucide-react'
import type { Formula } from '../../types'
import { GlassPanel } from '../ui'

export function IngredientsTable({ formula }: { formula: Formula }) {
  return (
    <GlassPanel delay={0.22} className="min-h-full" hover={false}>
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#D4AF37]">Formula Ingredients</p>
          <h2 className="mt-1 text-lg font-semibold text-white">{formula.name}</h2>
        </div>
        <div className="grid h-10 w-10 place-items-center rounded-[8px] border border-[#D4AF37]/25 bg-[#D4AF37]/10">
          <FlaskConical className="h-5 w-5 text-[#D4AF37]" />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-left">
          <thead className="text-xs uppercase tracking-[0.18em] text-zinc-600">
            <tr>
              <th className="px-5 py-4 font-medium">Ingredient</th>
              <th className="px-5 py-4 font-medium">Percentage</th>
              <th className="px-5 py-4 font-medium">Edit</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {formula.ingredients.map((ingredient, index) => (
              <motion.tr
                key={ingredient.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 + index * 0.045, duration: 0.32 }}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.035)' }}
              >
                <td className="px-5 py-4">
                  <p className="font-medium text-white">{ingredient.name}</p>
                  <p className="mt-1 text-xs text-zinc-600">Cosmetic grade specification</p>
                </td>
                <td className="px-5 py-4">
                  <input
                    aria-label={ingredient.name + ' percentage'}
                    value={ingredient.percentageLabel}
                    readOnly
                    className="h-10 w-28 rounded-[8px] border border-white/10 bg-black/30 px-3 text-sm text-zinc-100 outline-none transition hover:border-[#D4AF37]/30 focus:border-[#D4AF37]/50"
                  />
                </td>
                <td className="px-5 py-4">
                  <button className="grid h-9 w-9 place-items-center rounded-[8px] border border-white/10 bg-white/[0.055] text-zinc-400 transition hover:border-[#D4AF37]/40 hover:text-[#D4AF37]" aria-label={'Edit ' + ingredient.name}>
                    <Edit3 className="h-4 w-4" />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassPanel>
  )
}
