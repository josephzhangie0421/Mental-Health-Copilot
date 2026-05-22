"use client"

import { cn } from "@/lib/utils"

const reflectionThemes = [
  { theme: "工作压力", count: 8, trend: "decreasing" },
  { theme: "睡眠质量", count: 5, trend: "stable" },
  { theme: "社交焦虑", count: 3, trend: "decreasing" },
  { theme: "自我怀疑", count: 4, trend: "increasing" },
]

const thoughtLoops = [
  { pattern: "\"我做得还不够好\"", frequency: "频繁", lastSeen: "今天" },
  { pattern: "\"我应该更有效率\"", frequency: "偶尔", lastSeen: "昨天" },
]

const triggers = [
  { trigger: "截止日期临近", intensity: "高" },
  { trigger: "社交场合", intensity: "中" },
  { trigger: "早晨通勤", intensity: "低" },
]

export function ReflectionLayer() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h4 className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">近期情绪主题</h4>
        <div className="flex flex-wrap gap-2">
          {reflectionThemes.map((item) => (
            <div
              key={item.theme}
              className={cn(
                "flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm",
                item.trend === "decreasing" 
                  ? "border-stability/30 bg-stability/5" 
                  : item.trend === "increasing"
                  ? "border-stress/30 bg-stress/5"
                  : "border-border bg-secondary/50"
              )}
            >
              <span>{item.theme}</span>
              <span className="text-xs text-muted-foreground">×{item.count}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">循环思维模式</h4>
        <div className="space-y-2">
          {thoughtLoops.map((loop, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg border border-border/50 bg-secondary/30 p-3"
            >
              <span className="text-sm italic text-foreground/80">{loop.pattern}</span>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>{loop.frequency}</span>
                <span className="text-muted-foreground/50">•</span>
                <span>{loop.lastSeen}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">情绪触发因素</h4>
        <div className="space-y-2">
          {triggers.map((item) => (
            <div
              key={item.trigger}
              className="flex items-center justify-between rounded-lg border border-border/50 bg-secondary/30 p-3"
            >
              <span className="text-sm text-foreground">{item.trigger}</span>
              <span className={cn(
                "text-xs px-2 py-0.5 rounded-full",
                item.intensity === "高" 
                  ? "bg-stress/20 text-stress" 
                  : item.intensity === "中"
                  ? "bg-energy/20 text-energy"
                  : "bg-stability/20 text-stability"
              )}>
                {item.intensity}强度
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
