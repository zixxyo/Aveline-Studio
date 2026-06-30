import {
  Activity,
  Boxes,
  CheckCircle2,
  DollarSign,
  Factory,
  FlaskConical,
  PackageCheck,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Truck,
} from 'lucide-react'
import type { ActivityEvent, DashboardProduct, DashboardStat } from '../types'

export const dashboardStats: DashboardStat[] = [
  { label: "Today's Revenue", value: '$12,450', detail: '+18.4% from yesterday', icon: DollarSign },
  { label: 'Orders', value: '26', detail: '14 fulfilled, 12 in review', icon: ShoppingBag },
  { label: 'Products', value: '2', detail: '2 hero SKUs in portfolio', icon: Sparkles },
  { label: 'Inventory', value: '775 Units', detail: 'Stable for next 11 days', icon: Boxes },
]

export const dashboardProducts: DashboardProduct[] = [
  {
    name: 'TXA Serum',
    sku: 'AVL-TXA-30',
    category: 'Brightening serum',
    status: 'Production',
    units: '420 units',
    icon: FlaskConical,
  },
  {
    name: 'Oud Vanilla Body Splash',
    sku: 'AVL-OVB-100',
    category: 'Fine fragrance mist',
    status: 'Ready',
    units: '355 units',
    icon: PackageCheck,
  },
]

export const dashboardActivities: ActivityEvent[] = [
  {
    title: 'Batch #004 entered filling stage',
    description: 'TXA Serum moved from compounding to sterile filling with QC sample logged.',
    time: '12 min ago',
    icon: Factory,
  },
  {
    title: 'Glass bottle inventory adjusted',
    description: '125 amber serum bottles reserved for Batch #004 packaging run.',
    time: '38 min ago',
    icon: Boxes,
  },
  {
    title: 'Supplier quote received',
    description: 'Al Nour Fragrance House submitted revised pricing for oud accord concentrate.',
    time: '1 hr ago',
    icon: Truck,
  },
  {
    title: 'Formula revision approved',
    description: 'Stability note for Oud Vanilla Body Splash signed by product development.',
    time: '2 hrs ago',
    icon: CheckCircle2,
  },
]

export const ActivityIcon = Activity
export const TrendIcon = TrendingUp
