"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"

const themesZh = [
  {
    id: 1,
    label: "寻找平静的时刻",
    description: "你常常在日常中寻找安静和平和",
    frequency: "经常出现",
    lastSeen: "今天",
    color: "oklch(0.85 0.08 140)",
    relatedEntries: [
      "在窗边喝咖啡时，感到一种难得的平静",
      "什么都没做，就在阳台上坐着发呆",
      "早晨的那段时间，世界很安静"
    ]
  },
  {
    id: 2,
    label: "工作与生活的边界",
    description: "你在思考如何平衡不同角色的需求",
    frequency: "近期较多",
    lastSeen: "昨天",
    color: "oklch(0.80 0.08 25)",
    relatedEntries: [
      "睡不着，脑子里一直转着工作的事",
      "截止日期的压力又来了",
      "终于完成了那个拖了很久的项目"
    ]
  },
  {
    id: 3,
    label: "渴望连接",
    description: "与他人的真诚连接对你很重要",
    frequency: "偶尔浮现",
    lastSeen: "三天前",
    color: "oklch(0.85 0.10 85)",
    relatedEntries: [
      "和朋友通话后，心情轻松了很多",
      "梦到了以前的朋友",
      "有时候只是需要被倾听"
    ]
  },
  {
    id: 4,
    label: "身体的信号",
    description: "你开始注意身体给你的反馈",
    frequency: "逐渐增多",
    lastSeen: "本周",
    color: "oklch(0.80 0.06 250)",
    relatedEntries: [
      "选择先出去走走再继续工作",
      "疲惫，但也松了一口气"
    ]
  }
]

const themesEn = [
  {
    id: 1,
    label: "Finding stillness",
    description: "You often seek quiet moments in daily life",
    frequency: "Frequent",
    lastSeen: "Today",
    color: "oklch(0.85 0.08 140)",
    relatedEntries: [
      "Coffee by the window — a rare moment of calm",
      "Did nothing on the balcony, just sat",
      "Morning hours, when the world is quiet"
    ]
  },
  {
    id: 2,
    label: "Work-life boundaries",
    description: "You're thinking about balancing different roles",
    frequency: "Recent",
    lastSeen: "Yesterday",
    color: "oklch(0.80 0.08 25)",
    relatedEntries: [
      "Couldn't sleep, work kept circling",
      "Deadline pressure came back",
      "Finally finished that overdue project"
    ]
  },
  {
    id: 3,
    label: "Need for connection",
    description: "Genuine connection with others matters to you",
    frequency: "Sometimes",
    lastSeen: "3 days ago",
    color: "oklch(0.85 0.10 85)",
    relatedEntries: [
      "Felt lighter after talking with a friend",
      "Dreamed of old friends",
      "Sometimes just being heard is enough"
    ]
  },
  {
    id: 4,
    label: "Body signals",
    description: "You're starting to notice what your body tells you",
    frequency: "Growing",
    lastSeen: "This week",
    color: "oklch(0.80 0.06 250)",
    relatedEntries: [
      "Chose to walk before continuing work",
      "Tired, but also relieved"
    ]
  }
]

const insightsZh = [
  "当「平静」出现时，往往和「早晨」、「窗边」、「阳光」这些词一起",
  "你提到「朋友」时，文字中常带着温暖的感觉",
  "「散步」正在成为你应对压力的一种方式",
]

const insightsEn = [
  "When 'calm' appears, it's often with 'morning,' 'window,' or 'sunlight'",
  "When you mention friends, there's warmth in your words",
  "'Walking' is becoming one of your ways to cope with pressure",
]

export function PatternsScreen() {
  const { language, t } = useLanguage()
  const [expandedTheme, setExpandedTheme] = useState<number | null>(null)
  
  const themes = language === "zh" ? themesZh : themesEn
  const insights = language === "zh" ? insightsZh : insightsEn

  return (
    <div className="max-w-xl mx-auto">
      {/* Header */}
      <section className="mb-12">
        <h1 className="text-2xl sm:text-3xl font-light text-foreground/90 mb-4 tracking-tight">
          {t("情绪的涟漪", "Emotional Ripples")}
        </h1>
        <p className="text-muted-foreground/55 text-sm font-light leading-relaxed max-w-md">
          {t(
            "这些是在你的书写中自然浮现的主题。它们不是标签，只是帮助你看见自己的方式。",
            "These themes emerged naturally from your reflections. Not labels — just ways to see yourself more clearly."
          )}
        </p>
      </section>

      {/* Themes */}
      <section className="mb-14">
        <h2 className="text-xs text-muted-foreground/50 tracking-widest mb-6 font-light uppercase">
          {t("反复出现的主题", "Recurring themes")}
        </h2>
        <div className="space-y-4">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => setExpandedTheme(expandedTheme === theme.id ? null : theme.id)}
              className="w-full text-left group"
            >
              <div
                className={`rounded-2xl border transition-all duration-500 ${
                  expandedTheme === theme.id
                    ? "bg-card border-border/50 p-7"
                    : "bg-card/50 border-border/30 p-6 hover:bg-card/70 hover:border-border/40 hover:translate-y-[-2px]"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="shrink-0 mt-1 w-3 h-3 rounded-full transition-all duration-500"
                    style={{ 
                      backgroundColor: theme.color,
                      transform: expandedTheme === theme.id ? 'scale(1.3)' : 'scale(1)',
                      boxShadow: expandedTheme === theme.id ? `0 0 12px ${theme.color}` : 'none'
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <h3 className="text-sm text-foreground/80 font-light group-hover:text-foreground/90 transition-colors duration-300">
                        {theme.label}
                      </h3>
                      <span className="text-xs text-muted-foreground/35 shrink-0">{theme.lastSeen}</span>
                    </div>
                    <p className="text-xs text-muted-foreground/50">{theme.frequency}</p>
                    
                    {expandedTheme === theme.id && (
                      <div className="mt-6 pt-6 border-t border-border/30 animate-in fade-in slide-in-from-top-2 duration-500">
                        <p className="text-sm text-foreground/65 font-light mb-5 leading-relaxed">
                          {theme.description}
                        </p>
                        <p className="text-xs text-muted-foreground/45 mb-4">
                          {t("相关的记录:", "Related entries:")}
                        </p>
                        <div className="space-y-3">
                          {theme.relatedEntries.map((entry, i) => (
                            <p 
                              key={i} 
                              className="text-xs text-muted-foreground/55 font-light pl-4 border-l-2 border-border/30 leading-relaxed"
                            >
                              &ldquo;{entry}&rdquo;
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Insights */}
      <section className="mb-16">
        <h2 className="text-xs text-muted-foreground/50 tracking-widest mb-6 font-light uppercase">
          {t("轻声观察", "Quiet observations")}
        </h2>
        <div className="rounded-2xl bg-peach/15 border border-warmth/15 p-7 hover:border-warmth/25 transition-all duration-500">
          <div className="flex items-start gap-4">
            <div className="shrink-0 mt-1">
              <div className="h-3 w-3 rounded-full bg-warmth/50 animate-gentle-breathe" />
            </div>
            <div className="space-y-5">
              {insights.map((insight, i) => (
                <p key={i} className="text-sm text-foreground/70 font-light leading-relaxed">
                  {insight}
                </p>
              ))}
            </div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground/35 mt-5 font-light text-center">
          {t(
            "这些只是观察，不是诊断。你比任何系统都更了解自己。",
            "These are observations, not diagnoses. You know yourself better than any system."
          )}
        </p>
      </section>

      {/* Visual pattern */}
      <section className="mb-16">
        <h2 className="text-xs text-muted-foreground/50 tracking-widest mb-7 font-light uppercase">
          {t("情绪地图", "Emotional landscape")}
        </h2>
        <div className="rounded-2xl bg-card/50 border border-border/30 p-8 hover:border-border/40 transition-all duration-500">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {themes.map((theme) => (
              <div
                key={theme.id}
                className="group flex items-center gap-2.5 px-5 py-3 rounded-full bg-secondary/40 border border-border/20 hover:bg-secondary/60 hover:border-border/40 transition-all duration-500 cursor-pointer"
                style={{ 
                  opacity: theme.frequency === (language === "zh" ? "经常出现" : "Frequent") ? 1 : 
                           theme.frequency === (language === "zh" ? "近期较多" : "Recent") ? 0.85 : 0.65 
                }}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full transition-transform duration-300 group-hover:scale-125"
                  style={{ backgroundColor: theme.color }}
                />
                <span className="text-xs text-foreground/60 font-light group-hover:text-foreground/80 transition-colors duration-300">
                  {theme.label}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground/35 mt-7 font-light">
            {t(
              "越亮的主题在近期出现得越频繁",
              "Brighter themes appeared more frequently"
            )}
          </p>
        </div>
      </section>

      {/* Closing */}
      <section className="py-10 text-center">
        <p className="text-muted-foreground/35 leading-relaxed text-sm font-light italic">
          {t(
            "模式不是牢笼，而是通向理解的桥梁。",
            "Patterns aren't cages — they're bridges to understanding."
          )}
        </p>
      </section>
    </div>
  )
}
