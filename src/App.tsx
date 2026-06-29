import {
  Activity,
  Bell,
  Boxes,
  CheckCircle2,
  ChevronRight,
  DollarSign,
  Factory,
  FileText,
  FlaskConical,
  LayoutDashboard,
  LineChart,
  Megaphone,
  Menu,
  Package,
  PackageCheck,
  Search,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Truck,
  Users,
  X,
} from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { useState, type ReactNode } from 'react'

const sidebarItems: Array<{ label: string; icon: LucideIcon; active?: boolean }> = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Products', icon: Package },
  { label: 'Manufacturing', icon: Factory },
  { label: 'Formulas', icon: FlaskConical },
  { label: 'Inventory', icon: Boxes },
  { label: 'Suppliers', icon: Truck },
  { label: 'Finance', icon: LineChart },
  { label: 'Marketing', icon: Megaphone },
  { label: 'Documents', icon: FileText },
  { label: 'Settings', icon: Settings },
]

const stats: Array<{ label: string; value: string; detail: string; icon: LucideIcon }> = [
  { label: "Today's Revenue", value: '$12,450', detail: '+18.4% from yesterday', icon: DollarSign },
  { label: 'Orders', value: '26', detail: '14 fulfilled, 12 in review', icon: ShoppingBag },
  { label: 'Products', value: '2', detail: '2 hero SKUs in portfolio', icon: Sparkles },
  { label: 'Inventory', value: '775 Units', detail: 'Stable for next 11 days', icon: Boxes },
]

const products = [
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

const activities = [
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

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
}

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function GlassPanel({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
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

function Sidebar() {
  return (
    <motion.aside
      initial={{ x: -28, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-white/10 bg-black/55 p-5 backdrop-blur-2xl xl:flex xl:flex-col"
    >
      <div className="mb-8 flex items-center gap-3 px-2 pt-2">
        <div className="grid h-11 w-11 place-items-center rounded-[8px] border border-[#D4AF37]/40 bg-[#D4AF37]/10 shadow-[0_0_34px_rgba(212,175,55,0.18)]">
          <Sparkles className="h-5 w-5 text-[#D4AF37]" />
        </div>
        <div>
          <p className="text-lg font-semibold tracking-[0.32em] text-white">AVELINE</p>
          <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Atelier Suite</p>
        </div>
      </div>

      <nav className="space-y-1.5">
        {sidebarItems.map((item, index) => (
          <motion.a
            key={item.label}
            href="#"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08 + index * 0.035, duration: 0.35 }}
            whileHover={{ x: 5 }}
            className={cn(
              'group flex items-center justify-between rounded-[8px] px-3 py-3 text-sm transition-colors',
              item.active
                ? 'border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]'
                : 'text-zinc-500 hover:bg-white/[0.055] hover:text-zinc-100',
            )}
          >
            <span className="flex items-center gap-3">
              <item.icon className={cn('h-[18px] w-[18px]', item.active ? 'text-[#D4AF37]' : 'text-zinc-600 group-hover:text-[#D4AF37]')} />
              {item.label}
            </span>
            {item.active && <ChevronRight className="h-4 w-4 text-[#D4AF37]" />}
          </motion.a>
        ))}
      </nav>

      <div className="mt-auto rounded-[8px] border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-4">
        <div className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
          <ShieldCheck className="h-4 w-4 text-[#D4AF37]" />
          Compliance Ready
        </div>
        <p className="text-xs leading-5 text-zinc-500">GMP documentation, batch records, and supplier approvals are synchronized.</p>
      </div>
    </motion.aside>
  )
}

function MobileSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            aria-label="Close navigation"
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed inset-y-0 left-0 z-50 flex w-[min(86vw,320px)] flex-col border-r border-white/10 bg-[#050505]/95 p-5 shadow-[30px_0_90px_rgba(0,0,0,0.55)] backdrop-blur-2xl xl:hidden"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-8 flex items-center justify-between gap-3 px-2 pt-2">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-[8px] border border-[#D4AF37]/40 bg-[#D4AF37]/10">
                  <Sparkles className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-lg font-semibold tracking-[0.32em] text-white">AVELINE</p>
                  <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Atelier Suite</p>
                </div>
              </div>
              <button className="grid h-9 w-9 place-items-center rounded-[8px] border border-white/10 bg-white/[0.055] text-zinc-300" onClick={onClose} aria-label="Close menu">
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav className="space-y-1.5">
              {sidebarItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  onClick={onClose}
                  className={cn(
                    'flex items-center justify-between rounded-[8px] px-3 py-3 text-sm transition-colors',
                    item.active ? 'border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-white' : 'text-zinc-500 hover:bg-white/[0.055] hover:text-zinc-100',
                  )}
                >
                  <span className="flex items-center gap-3">
                    <item.icon className={cn('h-[18px] w-[18px]', item.active ? 'text-[#D4AF37]' : 'text-zinc-600')} />
                    {item.label}
                  </span>
                  {item.active && <ChevronRight className="h-4 w-4 text-[#D4AF37]" />}
                </a>
              ))}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

function TopNav({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-30 border-b border-white/10 bg-black/40 px-4 py-4 backdrop-blur-2xl sm:px-6 xl:px-8"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#D4AF37]">Welcome back, Ziad</p>
            <h1 className="mt-1 text-2xl font-semibold text-white sm:text-3xl">Aveline Operations Dashboard</h1>
          </div>
          <button className="grid h-10 w-10 place-items-center rounded-[8px] border border-white/10 bg-white/[0.055] text-zinc-300 xl:hidden" aria-label="Open menu" onClick={onMenuClick}>
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <label className="relative min-w-0 flex-1 lg:w-80 lg:flex-none">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
            <input
              className="h-11 w-full rounded-[8px] border border-white/10 bg-white/[0.055] pl-10 pr-4 text-sm text-white outline-none transition focus:border-[#D4AF37]/50 focus:bg-white/[0.075]"
              placeholder="Search batches, formulas, suppliers"
              type="search"
            />
          </label>
          <button className="relative grid h-11 w-11 place-items-center rounded-[8px] border border-white/10 bg-white/[0.055] text-zinc-300 transition hover:border-[#D4AF37]/40 hover:text-white" aria-label="Notifications">
            <Bell className="h-5 w-5" />
            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_14px_rgba(212,175,55,0.9)]" />
          </button>
          <div className="flex h-11 items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.055] px-2.5 pr-4">
            <div className="grid h-8 w-8 place-items-center rounded-[8px] bg-gradient-to-br from-[#D4AF37] to-[#8f6d1b] text-sm font-semibold text-black">ZA</div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-white">Ziad A.</p>
              <p className="text-xs text-zinc-500">Operations Lead</p>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

function StatCard({ stat, index }: { stat: (typeof stats)[number]; index: number }) {
  return (
    <GlassPanel delay={0.12 + index * 0.06} className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-zinc-500">{stat.label}</p>
          <p className="mt-3 text-3xl font-semibold text-white">{stat.value}</p>
        </div>
        <div className="grid h-11 w-11 place-items-center rounded-[8px] border border-[#D4AF37]/25 bg-[#D4AF37]/10">
          <stat.icon className="h-5 w-5 text-[#D4AF37]" />
        </div>
      </div>
      <p className="mt-5 flex items-center gap-2 text-xs text-zinc-500">
        <TrendingUp className="h-3.5 w-3.5 text-[#D4AF37]" />
        {stat.detail}
      </p>
    </GlassPanel>
  )
}

function ProductsTable() {
  return (
    <GlassPanel delay={0.35} className="lg:col-span-2">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#D4AF37]">Product Portfolio</p>
          <h2 className="mt-1 text-lg font-semibold text-white">Active Products</h2>
        </div>
        <button className="rounded-[8px] border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-2 text-xs font-medium text-[#D4AF37] transition hover:bg-[#D4AF37]/15">
          Review SKUs
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left">
          <thead className="text-xs uppercase tracking-[0.18em] text-zinc-600">
            <tr>
              <th className="px-5 py-4 font-medium">Product</th>
              <th className="px-5 py-4 font-medium">Category</th>
              <th className="px-5 py-4 font-medium">Inventory</th>
              <th className="px-5 py-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {products.map((product) => (
              <motion.tr key={product.name} whileHover={{ backgroundColor: 'rgba(255,255,255,0.035)' }} className="transition-colors">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-[8px] border border-white/10 bg-white/[0.055]">
                      <product.icon className="h-[18px] w-[18px] text-[#D4AF37]" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{product.name}</p>
                      <p className="text-xs text-zinc-500">{product.sku}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 text-sm text-zinc-400">{product.category}</td>
                <td className="px-5 py-4 text-sm text-zinc-400">{product.units}</td>
                <td className="px-5 py-4">
                  <span className={cn('inline-flex rounded-[8px] border px-3 py-1 text-xs font-medium', product.status === 'Ready' ? 'border-emerald-400/25 bg-emerald-400/10 text-emerald-300' : 'border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#D4AF37]')}>
                    {product.status}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassPanel>
  )
}

function ManufacturingPanel() {
  return (
    <GlassPanel delay={0.42} className="p-5">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#D4AF37]">Manufacturing</p>
          <h2 className="mt-1 text-lg font-semibold text-white">Current Batch</h2>
        </div>
        <Factory className="h-5 w-5 text-[#D4AF37]" />
      </div>
      <div className="rounded-[8px] border border-white/10 bg-black/25 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-zinc-500">Batch</span>
          <span className="font-medium text-white">#004</span>
        </div>
        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="text-sm text-zinc-500">Progress</p>
            <p className="mt-1 text-3xl font-semibold text-white">72%</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-zinc-500">Remaining Time</p>
            <p className="mt-1 font-medium text-[#D4AF37]">3 hours</p>
          </div>
        </div>
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '72%' }}
            transition={{ duration: 1.1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="h-full rounded-full bg-[#D4AF37] shadow-[0_0_24px_rgba(212,175,55,0.65)]"
          />
        </div>
      </div>
    </GlassPanel>
  )
}

function SupplierFinancePanels() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <GlassPanel delay={0.5} className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#D4AF37]">Suppliers</p>
            <h2 className="mt-1 text-lg font-semibold text-white">Procurement</h2>
          </div>
          <Users className="h-5 w-5 text-[#D4AF37]" />
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-[8px] border border-white/10 bg-black/25 p-4">
            <p className="text-sm text-zinc-500">Active Suppliers</p>
            <p className="mt-2 text-3xl font-semibold text-white">8</p>
          </div>
          <div className="rounded-[8px] border border-white/10 bg-black/25 p-4">
            <p className="text-sm text-zinc-500">Pending Quotes</p>
            <p className="mt-2 text-3xl font-semibold text-white">3</p>
          </div>
        </div>
      </GlassPanel>

      <GlassPanel delay={0.56} className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#D4AF37]">Finance</p>
            <h2 className="mt-1 text-lg font-semibold text-white">Monthly Revenue</h2>
          </div>
          <DollarSign className="h-5 w-5 text-[#D4AF37]" />
        </div>
        <p className="mt-6 text-4xl font-semibold text-white">$46,500</p>
        <div className="mt-5 flex items-center justify-between rounded-[8px] border border-emerald-400/20 bg-emerald-400/10 p-4">
          <span className="text-sm text-zinc-300">Profit Margin</span>
          <span className="text-2xl font-semibold text-emerald-300">38%</span>
        </div>
      </GlassPanel>
    </div>
  )
}

function RecentActivity() {
  return (
    <GlassPanel delay={0.62} className="p-5">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#D4AF37]">Recent Activity</p>
          <h2 className="mt-1 text-lg font-semibold text-white">Factory & Inventory Log</h2>
        </div>
        <Activity className="h-5 w-5 text-[#D4AF37]" />
      </div>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.title}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.72 + index * 0.08, duration: 0.38 }}
            className="flex gap-3 rounded-[8px] border border-white/10 bg-black/20 p-3"
          >
            <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-[8px] bg-[#D4AF37]/10">
              <activity.icon className="h-4 w-4 text-[#D4AF37]" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <p className="font-medium text-white">{activity.title}</p>
                <span className="text-xs text-zinc-600">{activity.time}</span>
              </div>
              <p className="mt-1 text-sm leading-6 text-zinc-500">{activity.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </GlassPanel>
  )
}

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(212,175,55,0.16),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.045),transparent_35%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.08),transparent_24%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />

      <Sidebar />
      <MobileSidebar open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="relative xl:pl-72">
        <TopNav onMenuClick={() => setIsSidebarOpen(true)} />
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="mx-auto flex max-w-[1600px] flex-col gap-5 px-4 py-5 sm:px-6 lg:py-7 xl:px-8"
        >
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            <ProductsTable />
            <ManufacturingPanel />
          </div>

          <div className="grid gap-5 xl:grid-cols-[1fr_1.15fr]">
            <SupplierFinancePanels />
            <RecentActivity />
          </div>
        </motion.div>
      </div>
    </main>
  )
}
