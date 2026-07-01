import { cn } from "../common/utils";

export function StatusPill({ status }: { status: string }) {
  const isApproved = status === "Approved" || status === "Ready";

  return (
    <span
      className={cn(
        "inline-flex rounded-[8px] border px-3 py-1 text-xs font-medium",
        isApproved ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-300" : "border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#D4AF37]",
      )}
    >
      {status}
    </span>
  );
}
