import {
  Bell,
  Boxes,
  ChevronRight,
  Factory,
  FileText,
  FlaskConical,
  LayoutDashboard,
  LineChart,
  Megaphone,
  Menu,
  Package,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Truck,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom"; // Removed Outlet
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "../common/utils";
interface NavigationItem {
  label: string;
  icon: LucideIcon;
  href?: string;
}

interface AppShellProps {
  children: ReactNode;
}
const sidebarItems: NavigationItem[] = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/" },
  { label: "Products", icon: Package },
  { label: "Manufacturing", icon: Factory },
  { label: "Formulas", icon: FlaskConical, href: "/formula-lab" },
  { label: "Inventory", icon: Boxes },
  { label: "Suppliers", icon: Truck, href: "/suppliers" },
  { label: "Ingredients", icon: Package, href: "/ingredients" }, // Added Ingredients to sidebar
  { label: "Finance", icon: LineChart },
  { label: "Marketing", icon: Megaphone },
  { label: "Documents", icon: FileText },
  { label: "Settings", icon: Settings },
];

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-11 w-11 place-items-center rounded-[8px] border border-[#D4AF37]/40 bg-[#D4AF37]/10 shadow-[0_0_34px_rgba(212,175,55,0.18)]">
        <Sparkles className="h-5 w-5 text-[#D4AF37]" />
      </div>
      <div>
        <p className="text-lg font-semibold tracking-[0.32em] text-white">AVELINE</p>
        <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Atelier Suite</p>
      </div>
    </div>
  );
}

function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="space-y-1.5">
      {sidebarItems.map((item, index) => {
        if (!item.href) {
          return (
            <motion.button
              key={item.label}
              type="button"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 + index * 0.035, duration: 0.35 }}
              whileHover={{ x: 5 }}
              className="group flex w-full items-center justify-between rounded-[8px] px-3 py-3 text-sm text-zinc-500 transition-colors hover:bg-white/[0.055] hover:text-zinc-100"
            >
              <span className="flex items-center gap-3">
                <item.icon className="h-[18px] w-[18px] text-zinc-600 group-hover:text-[#D4AF37]" />
                {item.label}
              </span>
            </motion.button>
          );
        }

        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08 + index * 0.035, duration: 0.35 }}
            whileHover={{ x: 5 }}
          >
            <NavLink
              to={item.href}
              end={item.href === "/"}
              onClick={onNavigate}
              className={({ isActive }) =>
                cn(
                  "group flex items-center justify-between rounded-[8px] px-3 py-3 text-sm transition-colors",
                  isActive
                    ? "border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                    : "text-zinc-500 hover:bg-white/[0.055] hover:text-zinc-100",
                )
              }
            >
              {({ isActive }) => (
                <>
                  <span className="flex items-center gap-3">
                    <item.icon
                      className={cn(
                        "h-[18px] w-[18px]",
                        isActive ? "text-[#D4AF37]" : "text-zinc-600 group-hover:text-[#D4AF37]",
                      )}
                    />
                    {item.label}
                  </span>
                  {isActive && <ChevronRight className="h-4 w-4 text-[#D4AF37]" />}
                </>
              )}
            </NavLink>
          </motion.div>
        );
      })}
    </nav>
  );
}

function DesktopSidebar() {
  return (
    <motion.aside
      initial={{ x: -28, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-white/10 bg-black/55 p-5 backdrop-blur-2xl xl:flex xl:flex-col"
    >
      <div className="mb-8 px-2 pt-2">
        <BrandMark />
      </div>
      <SidebarNav />
      <div className="mt-auto rounded-[8px] border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-4">
        <div className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
          <ShieldCheck className="h-4 w-4 text-[#D4AF37]" />
          Compliance Ready
        </div>
        <p className="text-xs leading-5 text-zinc-500">GMP documentation, batch records, and supplier approvals are synchronized.</p>
      </div>
    </motion.aside>
  );
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
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-8 flex items-center justify-between gap-3 px-2 pt-2">
              <BrandMark />
              <button
                className="grid h-9 w-9 place-items-center rounded-[8px] border border-white/10 bg-white/[0.055] text-zinc-300"
                onClick={onClose}
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <SidebarNav onNavigate={onClose} />
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function TopNav({ onMenuClick }: { onMenuClick: () => void }) {
  const location = useLocation();
  const isFormulaLab = location.pathname.startsWith("/formulas");

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
            <h1 className="mt-1 text-2xl font-semibold text-white sm:text-3xl">
              {isFormulaLab ? "Aveline R&D Operations" : "Aveline Operations Dashboard"}
            </h1>
          </div>
          <button
            className="grid h-10 w-10 place-items-center rounded-[8px] border border-white/10 bg-white/[0.055] text-zinc-300 xl:hidden"
            aria-label="Open menu"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <label className="relative min-w-0 flex-1 lg:w-80 lg:flex-none">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
            <input
              className="h-11 w-full rounded-[8px] border border-white/10 bg-white/[0.055] pl-10 pr-4 text-sm text-white outline-none transition focus:border-[#D4AF37]/50 focus:bg-white/[0.075]"
              placeholder={isFormulaLab ? "Search ingredients, INCI, formulas" : "Search batches, formulas, suppliers"}
              type="search"
            />
          </label>
          <button
            className="relative grid h-11 w-11 place-items-center rounded-[8px] border border-white/10 bg-white/[0.055] text-zinc-300 transition hover:border-[#D4AF37]/40 hover:text-white"
            aria-label="Notifications"
          >
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
  );
}

export function AppShell({ children }: AppShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(212,175,55,0.16),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.045),transparent_35%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.08),transparent_24%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />

      <DesktopSidebar />
      <MobileSidebar open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="relative xl:pl-72">
        <TopNav onMenuClick={() => setIsSidebarOpen(true)} />
        {children}
      </div>
    </main>
  );
}
