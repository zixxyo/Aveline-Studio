import { motion } from 'framer-motion'
import { Beaker, ChevronRight } from 'lucide-react'
import type { Formula } from '../../types'
import { GlassPanel } from "../ui/GlassPanel";
import { StatusPill } from "../ui/StatusPill";
import { cn } from "../common/utils";

export function FormulaLibrary({
  formulas,
  selectedId,
  onSelect,
}: {
  formulas: Formula[]
  selectedId: string
  onSelect: (id: string) => void
}) {
  return (
    <GlassPanel delay={0.16} className="p-5" hover={false}>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#D4AF37]">Formula Library</p>
          <h2 className="mt-1 text-lg font-semibold text-white">Active R&D Records</h2>
        </div>
        <Beaker className="h-5 w-5 text-[#D4AF37]" />
      </div>
      <div className="space-y-3">
        {formulas.map((formula, index) => {
          const isSelected = formula.id === selectedId

          return (
            <motion.button
              key={formula.id}
              type="button"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.22 + index * 0.08, duration: 0.38 }}
              whileHover={{ x: 4 }}
              onClick={() => onSelect(formula.id)}
              className={cn(
                'w-full rounded-[8px] border p-4 text-left transition',
                isSelected ? 'border-[#D4AF37]/40 bg-[#D4AF37]/10' : 'border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/[0.055]'
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-medium text-white">{formula.name}</p>
                  <p className="mt-1 text-xs text-zinc-500">Version {formula.version} - {formula.batchSizeMl.toLocaleString()} mL</p>
                </div>
                {isSelected && <ChevronRight className="mt-0.5 h-4 w-4 text-[#D4AF37]" />}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <p className="text-zinc-600">Status</p>
                  <div className="mt-1"><StatusPill status={formula.status} /></div>
                </div>
                <div>
                  <p className="text-zinc-600">Batch Size</p>
                  <p className="mt-2 text-zinc-300">{formula.batchSizeMl.toLocaleString()} mL</p>
                </div>
              </div>
            </motion.button>
          )
        })}
      </div>
    </GlassPanel>
  )
}
