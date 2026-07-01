import type React from "react";
import type { LucideIcon } from "lucide-react";

export interface NavigationItem {
  label: string;
  icon: LucideIcon;
  href?: string;
}

export interface AppShellProps {
  children: React.ReactNode;
}
