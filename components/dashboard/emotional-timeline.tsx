"use client"

import { useState } from "react"
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"
import { cn } from "@/lib/utils"

const weeklyData = [
  { day: "周一", stability: 72, stress: 35, sleep: 85 },
  { day: "周二", stability: 68, stress: 45, sleep: 78 },
  { day: "周三", stability: 75, stress: 30, sleep: 82 },
  { day: "周四", stability: 65, stress: 55, sleep: 70 },
  { day: "周五", stability: 78, stress: 28, sleep: 88 },
  { day: "周六", stability: 82, stress: 22, sleep: 92 },
  { day: "周日", stability: 79, stress: 25, sleep: 86 },
]

const monthlyData = [
  { day: "第1周", stability: 70, stress: 40, sleep: 80 },
  { day: "第2周", stability: 73, stress: 35, sleep: 82 },
  { day: "第3周", stability: 76, stress: 32, sleep: 85 },
  { day: "第4周", stability: 79, stress: 28, sleep: 87 },
]

type TimeRange = "week" | "month"

export function EmotionalTimeline() {
  const [timeRange, setTimeRange] = useState<TimeRange>("week")
  const data = timeRange === "week" ? weeklyData : monthlyData

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-foreground">情绪时间线</h3>
        <div className="flex gap-1 rounded-lg bg-secondary p-1">
          {(["week", "month"] as TimeRange[]).map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={cn(
                "rounded-md px-3 py-1 text-xs transition-all",
                timeRange === range
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {range === "week" ? "本周" : "本月"}
            </button>
          ))}
        </div>
      </div>

      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="stabilityGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="oklch(0.72 0.12 165)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="oklch(0.72 0.12 165)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="stressGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="oklch(0.65 0.15 25)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="oklch(0.65 0.15 25)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: "oklch(0.60 0 0)", fontSize: 11 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: "oklch(0.60 0 0)", fontSize: 11 }}
              domain={[0, 100]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "oklch(0.15 0.005 260)",
                border: "1px solid oklch(0.25 0.008 260)",
                borderRadius: "8px",
                fontSize: "12px",
              }}
              labelStyle={{ color: "oklch(0.95 0 0)" }}
            />
            <Area
              type="monotone"
              dataKey="stability"
              stroke="oklch(0.72 0.12 165)"
              strokeWidth={2}
              fill="url(#stabilityGradient)"
              name="稳定性"
            />
            <Area
              type="monotone"
              dataKey="stress"
              stroke="oklch(0.65 0.15 25)"
              strokeWidth={2}
              fill="url(#stressGradient)"
              name="压力"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-stability" />
          <span className="text-muted-foreground">情绪稳定性</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-stress" />
          <span className="text-muted-foreground">压力水平</span>
        </div>
      </div>
    </div>
  )
}
