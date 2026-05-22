"use client"

import { useState } from "react"

const themes = [
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

const insights = [
  {
    content: "当「平静」出现时，往往和「早晨」、「窗边」、「阳光」这些词一起",
    type: "pattern"
  },
  {
    content: "你提到「朋友」时，文字中常带着温暖的感觉",
    type: "warmth"
  },
  {
    content: "「散步」正在成为你应对压力的一种方式",
    type: "coping"
  }
]

export function PatternsScreen() {
  const [expandedTheme, setExpandedTheme] = useState<number | null>(null)

  return (
    <div className="max-w-xl mx-auto">
      {/* Header */}
      <section className="mb-10">
        <h1 className="text-2xl font-light text-foreground/90 mb-3">情绪的涟漪</h1>
        <p className="text-muted-foreground/55 text-sm font-light leading-relaxed">
          这些是在你的书写中自然浮现的主题。它们不是标签，只是帮助你看见自己的方式。
        </p>
      </section>

      {/* Themes */}
      <section className="mb-12">
        <h2 className="text-xs text-muted-foreground/50 tracking-widest mb-5 font-light">
          反复出现的主题
        </h2>
        <div className="space-y-4">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => setExpandedTheme(expandedTheme === theme.id ? null : theme.id)}
              className="w-full text-left"
            >
              <div
                className={`rounded-2xl border transition-all duration-500 ${
                  expandedTheme === theme.id
                    ? "bg-card border-border/50 p-6"
                    : "bg-card/50 border-border/30 p-5 hover:bg-card/70 hover:border-border/40"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="shrink-0 mt-1 w-3 h-3 rounded-full transition-transform duration-300"
                    style={{ 
                      backgroundColor: theme.color,
                      transform: expandedTheme === theme.id ? 'scale(1.2)' : 'scale(1)'
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4 mb-1.5">
                      <h3 className="text-sm text-foreground/80 font-light">{theme.label}</h3>
                      <span className="text-xs text-muted-foreground/35 shrink-0">{theme.lastSeen}</span>
                    </div>
                    <p className="text-xs text-muted-foreground/50 mb-2">{theme.frequency}</p>
                    
                    {expandedTheme === theme.id && (
                      <div className="mt-5 pt-5 border-t border-border/30 animate-in fade-in duration-300">
                        <p className="text-sm text-foreground/65 font-light mb-4 leading-relaxed">
                          {theme.description}
                        </p>
                        <p className="text-xs text-muted-foreground/45 mb-3">相关的记录:</p>
                        <div className="space-y-2">
                          {theme.relatedEntries.map((entry, i) => (
                            <p 
                              key={i} 
                              className="text-xs text-muted-foreground/55 font-light pl-3 border-l-2 border-border/30"
                            >
                              "{entry}"
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
      <section className="mb-14">
        <h2 className="text-xs text-muted-foreground/50 tracking-widest mb-5 font-light">
          轻声观察
        </h2>
        <div className="rounded-2xl bg-peach/15 border border-warmth/15 p-6">
          <div className="flex items-start gap-4">
            <div className="shrink-0 mt-1">
              <div className="h-2.5 w-2.5 rounded-full bg-warmth/50 animate-gentle-breathe" />
            </div>
            <div className="space-y-4">
              {insights.map((insight, i) => (
                <p key={i} className="text-sm text-foreground/70 font-light leading-relaxed">
                  {insight.content}
                </p>
              ))}
            </div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground/35 mt-4 font-light text-center">
          这些只是观察，不是诊断。你比任何系统都更了解自己。
        </p>
      </section>

      {/* Visual pattern */}
      <section className="mb-14">
        <h2 className="text-xs text-muted-foreground/50 tracking-widest mb-6 font-light">
          情绪地图
        </h2>
        <div className="rounded-2xl bg-card/50 border border-border/30 p-8">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {themes.map((theme) => (
              <div
                key={theme.id}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary/40 border border-border/20"
                style={{ opacity: theme.frequency === "经常出现" ? 1 : theme.frequency === "近期较多" ? 0.8 : 0.6 }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: theme.color }}
                />
                <span className="text-xs text-foreground/60 font-light">{theme.label}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground/35 mt-6 font-light">
            越亮的主题在近期出现得越频繁
          </p>
        </div>
      </section>

      {/* Closing */}
      <section className="py-8 text-center">
        <p className="text-muted-foreground/35 leading-relaxed text-sm font-light">
          模式不是牢笼，而是通向理解的桥梁。
        </p>
      </section>
    </div>
  )
}
