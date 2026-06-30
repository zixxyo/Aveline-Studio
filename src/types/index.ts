import type { LucideIcon } from 'lucide-react'

export type NavigationItem = {
  label: string
  icon: LucideIcon
  href?: string
}

export type DashboardStat = {
  label: string
  value: string
  detail: string
  icon: LucideIcon
}

export type DashboardProduct = {
  name: string
  sku: string
  category: string
  status: string
  units: string
  icon: LucideIcon
}

export type ActivityEvent = {
  title: string
  description: string
  time: string
  icon: LucideIcon
}

export type FormulaIngredient = {
  name: string
  percentageLabel: string
  percentage?: number
  costShare?: number
}

export type FormulaAnalytics = {
  estimatedCost: string
  manufacturingCost: string
  suggestedRetail: string
  grossMargin: string
  supplierCount: string
  stability: string
}

export type FormulaVersion = {
  version: string
  note: string
  status: 'Approved' | 'Archived'
}

export type Formula = {
  id: string
  name: string
  shortName: string
  status: string
  version: string
  batchSizeMl: number
  ingredients: FormulaIngredient[]
  analytics: FormulaAnalytics
  versions: FormulaVersion[]
}
