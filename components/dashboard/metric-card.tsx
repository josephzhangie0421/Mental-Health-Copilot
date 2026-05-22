"use client"

import { cn } from "@/lib/utils"

interface MetricCardProps {
  title: string
  value: string | number
  unit?: string
  status: "good" | "moderate" | "attention"
  icon?: React.ReactNode
}

export function MetricCard({ title, value, unit, status, icon }: MetricCardProps) {
  const statusColors = {
    good: "bg-stability/10 border-stability/20",
    moderate: "bg-calm/10 border-calm/20",
    attention: "bg-stress/10 border-stress/20",
  }

  const dotColors = {
    good: "bg-stability",
    moderate: "bg-calm",
    attention: "bg-stress",
  }

  return (
    <div className={cn(
      "rounded-xl border p-4 transition-all duration-300 hover:border-border/60",
      statusColors[status]
    )}>
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-xs uppercase tracking-wider text-muted-foreground">{title}</span>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-light tabular-nums text-foreground">{value}</span>
            {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {icon && <span className="text-muted-foreground">{icon}</span>}
          <div className={cn("h-2 w-2 rounded-full", dotColors[status])} />
        </div>
      </div>
    </div>
  )
}
