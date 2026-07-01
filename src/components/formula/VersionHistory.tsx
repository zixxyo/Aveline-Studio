import { motion } from 'framer-motion'
import { History } from 'lucide-react'
import type { Formula } from '../../types'
import { GlassPanel } from "../ui/GlassPanel";
import { StatusPill } from "../ui/StatusPill";

export function VersionHistory({ formula }: { formula: Formula }) {
  return (
    <GlassPanel delay={0.46} className="p-5" hover={false}>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#D4AF37]">Version History</p>
          <h2 className="mt-1 text-lg font-semibold text-white">Controlled Formula Changes</h2>
        </div>
        <History className="h-5 w-5 text-[#D4AF37]" />
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {formula.versions.map((version, index) => (
          <motion.div
            key={version.version}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.54 + index * 0.08, duration: 0.34 }}
            whileHover={{ y: -3 }}
            className="rounded-[8px] border border-white/10 bg-black/25 p-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-semibold text-white">Version {version.version}</p>
                <p className="mt-2 text-sm text-zinc-500">{version.note}</p>
              </div>
              <StatusPill status={version.status} />
            </div>
          </motion.div>
        ))}
      </div>
    </GlassPanel>
  )
}
