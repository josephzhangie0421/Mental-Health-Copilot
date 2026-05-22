"use client"

import { cn } from "@/lib/utils"
import { Moon, Footprints, BookOpen, Users, Smartphone } from "lucide-react"

const suggestions = [
  {
    id: 1,
    icon: Moon,
    title: "保持睡眠规律",
    description: "你的睡眠时间有波动。尝试在晚上11点前入睡。",
    priority: "high",
    category: "睡眠",
  },
  {
    id: 2,
    icon: Footprints,
    title: "午后散步",
    description: "下午2-4点外出15分钟，可以帮助调节压力水平。",
    priority: "medium",
    category: "活动",
  },
  {
    id: 3,
    icon: BookOpen,
    title: "晨间日记",
    description: "花5分钟写下三件让你感恩的事情。",
    priority: "medium",
    category: "正念",
  },
  {
    id: 4,
    icon: Users,
    title: "社交连接",
    description: "本周联系一位老朋友。社交支持有助于情绪稳定。",
    priority: "low",
    category: "社交",
  },
  {
    id: 5,
    icon: Smartphone,
    title: "数字断联",
    description: "晚上9点后减少屏幕使用，帮助改善睡眠质量。",
    priority: "high",
    category: "习惯",
  },
]

export function StabilizationSuggestions() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-medium text-foreground">稳定化建议</h3>
      
      <div className="space-y-3">
        {suggestions.map((suggestion) => {
          const Icon = suggestion.icon
          return (
            <div
              key={suggestion.id}
              className={cn(
                "group flex items-start gap-3 rounded-xl border p-4 transition-all duration-300 hover:border-primary/30 cursor-pointer",
                suggestion.priority === "high" 
                  ? "border-stress/20 bg-stress/5" 
                  : suggestion.priority === "medium"
                  ? "border-energy/20 bg-energy/5"
                  : "border-border/50 bg-secondary/30"
              )}
            >
              <div className={cn(
                "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                suggestion.priority === "high" 
                  ? "bg-stress/10 text-stress" 
                  : suggestion.priority === "medium"
                  ? "bg-energy/10 text-energy"
                  : "bg-stability/10 text-stability"
              )}>
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground">{suggestion.title}</span>
                  <span className="text-xs text-muted-foreground/70 px-1.5 py-0.5 rounded bg-secondary">
                    {suggestion.category}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {suggestion.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
