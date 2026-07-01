import { supabase } from "../../lib/supabase";
import { motion } from 'framer-motion'
import { DollarSign, Factory, Users } from 'lucide-react'
import { ActivityIcon, TrendIcon, dashboardActivities, dashboardProducts, dashboardStats } from '../../data/dashboard'
import { GlassPanel } from "../../components/ui/GlassPanel";
import { StatusPill } from "../../components/ui/StatusPill";

function StatCard({ stat, index }: { stat: (typeof dashboardStats)[number]; index: number }) {
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
        <TrendIcon className="h-3.5 w-3.5 text-[#D4AF37]" />
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
            {dashboardProducts.map((product) => (
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
                <td className="px-5 py-4"><StatusPill status={product.status} /></td>
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
        <ActivityIcon className="h-5 w-5 text-[#D4AF37]" />
      </div>
      <div className="space-y-4">
        {dashboardActivities.map((activity, index) => (
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

export function Dashboard() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      className="mx-auto flex max-w-[1600px] flex-col gap-5 px-4 py-5 sm:px-6 lg:py-7 xl:px-8"
    >
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat, index) => (
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
  )
}
