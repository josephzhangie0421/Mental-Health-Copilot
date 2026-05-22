"use client"

import { cn } from "@/lib/utils"

interface StabilityScoreProps {
  score: number
  label: string
  trend?: "up" | "down" | "stable"
}

export function StabilityScore({ score, label, trend = "stable" }: StabilityScoreProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-stability"
    if (score >= 60) return "text-calm"
    if (score >= 40) return "text-energy"
    return "text-stress"
  }

  const getTrendIcon = () => {
    if (trend === "up") return "↑"
    if (trend === "down") return "↓"
    return "→"
  }

  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      <div className="flex items-end gap-2">
        <span className={cn("text-4xl font-light tabular-nums", getScoreColor(score))}>
          {score}
        </span>
        <span className={cn(
          "text-sm mb-1",
          trend === "up" ? "text-stability" : trend === "down" ? "text-stress" : "text-muted-foreground"
        )}>
          {getTrendIcon()}
        </span>
      </div>
    </div>
  )
}
