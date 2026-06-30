import { motion } from 'framer-motion'
import { Download, FileInput, Plus } from 'lucide-react'
import { useMemo, useState } from 'react'
import { BatchCalculator } from '../components/formula/BatchCalculator'
import { FormulaAnalytics, IngredientCostBreakdown } from '../components/formula/FormulaAnalytics'
import { FormulaLibrary } from '../components/formula/FormulaLibrary'
import { IngredientsTable } from '../components/formula/IngredientsTable'
import { VersionHistory } from '../components/formula/VersionHistory'
import { LuxuryButton } from '../components/ui'
import { formulas } from '../data/formulas'

export function FormulaLab() {
  const [selectedFormulaId, setSelectedFormulaId] = useState(formulas[0].id)
  const [batchSize, setBatchSize] = useState(formulas[0].batchSizeMl)
  const selectedFormula = useMemo(
    () => formulas.find((formula) => formula.id === selectedFormulaId) ?? formulas[0],
    [selectedFormulaId],
  )

  function handleSelectFormula(id: string) {
    const nextFormula = formulas.find((formula) => formula.id === id)
    setSelectedFormulaId(id)
    if (nextFormula) setBatchSize(nextFormula.batchSizeMl)
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      className="mx-auto flex max-w-[1800px] flex-col gap-5 px-4 py-5 sm:px-6 lg:py-7 xl:px-8"
    >
      <motion.header
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-4 rounded-[8px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-2xl lg:flex-row lg:items-center lg:justify-between"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">Professional Cosmetic Formula Management</p>
          <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Formula Lab</h1>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <LuxuryButton><Plus className="h-4 w-4" /> New Formula</LuxuryButton>
          <LuxuryButton variant="secondary"><FileInput className="h-4 w-4" /> Import Formula</LuxuryButton>
          <LuxuryButton variant="secondary"><Download className="h-4 w-4" /> Export PDF</LuxuryButton>
        </div>
      </motion.header>

      <div className="grid gap-5 xl:grid-cols-[340px_minmax(0,1fr)_420px]">
        <FormulaLibrary formulas={formulas} selectedId={selectedFormula.id} onSelect={handleSelectFormula} />
        <IngredientsTable formula={selectedFormula} />
        <div className="flex flex-col gap-5">
          <FormulaAnalytics formula={selectedFormula} />
          <IngredientCostBreakdown formula={selectedFormula} />
          <BatchCalculator formula={selectedFormula} batchSize={batchSize} onBatchSizeChange={setBatchSize} />
        </div>
      </div>

      <VersionHistory formula={selectedFormula} />
    </motion.div>
  )
}
