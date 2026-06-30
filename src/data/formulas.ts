import type { Formula } from '../types'

export const formulas: Formula[] = [
  {
    id: 'txa-serum',
    name: 'TXA Brightening Serum',
    shortName: 'TXA Serum',
    status: 'Production',
    version: '1.3',
    batchSizeMl: 1000,
    ingredients: [
      { name: 'Tranexamic Acid', percentageLabel: '3%', percentage: 3, costShare: 34 },
      { name: 'Niacinamide', percentageLabel: '5%', percentage: 5, costShare: 22 },
      { name: 'Glycerin', percentageLabel: '4%', percentage: 4, costShare: 10 },
      { name: 'HEPES', percentageLabel: '1%', percentage: 1, costShare: 16 },
      { name: 'Phytic Acid', percentageLabel: '0.5%', percentage: 0.5, costShare: 7 },
      { name: 'Preservative', percentageLabel: '1%', percentage: 1, costShare: 5 },
      { name: 'Purified Water', percentageLabel: 'to 100%', costShare: 6 },
    ],
    analytics: {
      estimatedCost: '$2.18 / bottle',
      manufacturingCost: '$1,420',
      suggestedRetail: '$15',
      grossMargin: '85%',
      supplierCount: '5',
      stability: 'Excellent',
    },
    versions: [
      { version: '1.3', note: 'Improved pH adjustment', status: 'Approved' },
      { version: '1.2', note: 'Added Phytic Acid', status: 'Archived' },
    ],
  },
  {
    id: 'oud-vanilla-body-splash',
    name: 'Oud Vanilla Body Splash',
    shortName: 'Oud Vanilla',
    status: 'Approved',
    version: '1.0',
    batchSizeMl: 5000,
    ingredients: [
      { name: 'Oud Vanilla Accord', percentageLabel: '7%', percentage: 7, costShare: 46 },
      { name: 'Cosmetic Alcohol', percentageLabel: '62%', percentage: 62, costShare: 20 },
      { name: 'Glycerin', percentageLabel: '2%', percentage: 2, costShare: 5 },
      { name: 'Solubilizer', percentageLabel: '4%', percentage: 4, costShare: 14 },
      { name: 'Preservative', percentageLabel: '0.8%', percentage: 0.8, costShare: 4 },
      { name: 'Purified Water', percentageLabel: 'to 100%', costShare: 11 },
    ],
    analytics: {
      estimatedCost: '$1.64 / bottle',
      manufacturingCost: '$5,880',
      suggestedRetail: '$18',
      grossMargin: '91%',
      supplierCount: '4',
      stability: 'Excellent',
    },
    versions: [
      { version: '1.0', note: 'Commercial release formula', status: 'Approved' },
      { version: '0.9', note: 'Adjusted vanilla drydown', status: 'Archived' },
    ],
  },
]
