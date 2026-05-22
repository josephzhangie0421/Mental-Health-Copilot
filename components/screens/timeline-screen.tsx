"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"

const memoriesZh = [
  {
    id: 1,
    date: "今天",
    entries: [
      {
        time: "早晨",
        content: "在窗边喝咖啡时，感到一种难得的平静。阳光很好，暖暖的。",
        mood: "宁静",
        linkedTheme: "寻找平静的时刻"
      }
    ]
  },
  {
    id: 2,
    date: "昨天",
    entries: [
      {
        time: "傍晚",
        content: "和朋友通话后，心情轻松了很多。有时候只是需要被倾听。",
        mood: "连接",
        linkedTheme: "渴望连接"
      },
      {
        time: "下午",
        content: "截止日期的压力又来了，但这次我选择先出去走走再继续工作。",
        mood: "应对",
        linkedTheme: null
      }
    ]
  },
  {
    id: 3,
    date: "三天前",
    entries: [
      {
        time: "深夜",
        content: "睡不着，脑子里一直转着工作的事。也许明天试试早点放下手机。",
        mood: "不安",
        linkedTheme: "工作与生活的边界"
      }
    ]
  },
  {
    id: 4,
    date: "一周前",
    entries: [
      {
        time: "周末午后",
        content: "什么都没做，就在阳台上坐着发呆。这种空白的时间原来也很需要。",
        mood: "静默",
        linkedTheme: "寻找平静的时刻"
      }
    ]
  }
]

const memoriesEn = [
  {
    id: 1,
    date: "Today",
    entries: [
      {
        time: "Morning",
        content: "Coffee by the window. A rare moment of stillness. The light was warm.",
        mood: "Still",
        linkedTheme: "Finding quiet moments"
      }
    ]
  },
  {
    id: 2,
    date: "Yesterday",
    entries: [
      {
        time: "Evening",
        content: "Felt lighter after talking with a friend. Sometimes just being heard is enough.",
        mood: "Connected",
        linkedTheme: "Need for connection"
      },
      {
        time: "Afternoon",
        content: "Deadline pressure again. But this time I chose to walk first, then work.",
        mood: "Coping",
        linkedTheme: null
      }
    ]
  },
  {
    id: 3,
    date: "3 days ago",
    entries: [
      {
        time: "Late night",
        content: "Couldn't sleep. Work kept circling in my head. Maybe put the phone away earlier tomorrow.",
        mood: "Restless",
        linkedTheme: "Work-life boundaries"
      }
    ]
  },
  {
    id: 4,
    date: "A week ago",
    entries: [
      {
        time: "Weekend afternoon",
        content: "Did nothing. Just sat on the balcony, staring. Turns out I needed that emptiness.",
        mood: "Quiet",
        linkedTheme: "Finding quiet moments"
      }
    ]
  }
]

const emotionalContinuityZh = [
  {
    insight: "你选择了三次「出去走走」来应对压力",
    period: "这周",
  },
  {
    insight: "当你提到朋友时，文字中常带着温暖",
    period: "近两周",
  },
  {
    insight: "「需要被倾听」这个感受曾出现过两次",
    period: "本月",
  }
]

const emotionalContinuityEn = [
  {
    insight: "You've chosen to \"go for a walk\" three times to cope with stress",
    period: "This week",
  },
  {
    insight: "When you mention friends, there's warmth in your words",
    period: "Past 2 weeks",
  },
  {
    insight: "The feeling of \"needing to be heard\" has appeared twice",
    period: "This month",
  }
]

export function TimelineScreen() {
  const { language, t } = useLanguage()
  const [expandedDay, setExpandedDay] = useState<number | null>(1)
  
  const memories = language === "zh" ? memoriesZh : memoriesEn
  const continuity = language === "zh" ? emotionalContinuityZh : emotionalContinuityEn

  return (
    <div className="max-w-xl mx-auto">
      {/* Header */}
      <section className="mb-12">
        <h1 className="text-2xl sm:text-3xl font-light text-foreground/90 mb-4 tracking-tight">
          {t("记忆的河流", "River of Memory")}
        </h1>
        <p className="text-muted-foreground/55 text-sm font-light leading-relaxed max-w-md">
          {t(
            "这里保存着你的每一次书写。它们不会被评判，只是安静地陪伴着你。",
            "Every reflection lives here. No judgment. Just presence, through time."
          )}
        </p>
      </section>

      {/* Emotional continuity insights */}
      <section className="mb-14">
        <h2 className="text-xs text-muted-foreground/50 tracking-widest mb-6 font-light uppercase">
          {t("跨越时间的回响", "Echoes across time")}
        </h2>
        <div className="space-y-3">
          {continuity.map((item, i) => (
            <div
              key={i}
              className="group flex items-start gap-4 px-6 py-5 rounded-xl bg-peach/10 border border-warmth/10 hover:bg-peach/15 hover:border-warmth/20 transition-all duration-500"
            >
              <div className="shrink-0 mt-1.5">
                <div className="w-2 h-2 rounded-full bg-warmth/50 group-hover:bg-warmth/70 transition-colors duration-300" />
              </div>
              <div>
                <p className="text-sm text-foreground/70 font-light leading-relaxed">{item.insight}</p>
                <p className="text-xs text-muted-foreground/40 mt-1.5">{item.period}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-16">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-border/50 via-border/30 to-transparent" />
          
          <div className="space-y-8">
            {memories.map((day) => (
              <div key={day.id} className="relative pl-12">
                {/* Date marker */}
                <button
                  onClick={() => setExpandedDay(expandedDay === day.id ? null : day.id)}
                  className="absolute left-0 top-0 w-6 h-6 rounded-full bg-card border border-border/50 flex items-center justify-center transition-all duration-500 hover:border-warmth/40 hover:bg-peach/15 hover:scale-110"
                >
                  <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    expandedDay === day.id ? 'bg-warmth/80 scale-110' : 'bg-muted-foreground/30'
                  }`} />
                </button>

                {/* Date label */}
                <p className="text-xs text-muted-foreground/50 mb-4 tracking-wide font-light">{day.date}</p>

                {/* Entries */}
                <div className={`space-y-4 overflow-hidden transition-all duration-700 ease-out ${
                  expandedDay === day.id ? 'max-h-[800px] opacity-100' : 'max-h-24 opacity-60'
                }`}>
                  {day.entries.map((entry, i) => (
                    <div 
                      key={i}
                      className="group rounded-xl bg-card/70 border border-border/30 p-6 transition-all duration-500 hover:bg-card hover:border-border/50 hover:translate-y-[-2px] cursor-pointer"
                    >
                      <p className="text-xs text-muted-foreground/45 mb-3 font-light">{entry.time}</p>
                      <p className="text-foreground/80 leading-relaxed text-sm font-light">
                        {entry.content}
                      </p>
                      <div className="flex items-center gap-3 mt-5">
                        <span className="text-xs text-muted-foreground/40 px-3 py-1.5 rounded-full bg-secondary/50 group-hover:bg-secondary/70 transition-colors duration-300">
                          {entry.mood}
                        </span>
                        {entry.linkedTheme && (
                          <span className="text-xs text-warmth/60 font-light group-hover:text-warmth/80 transition-colors duration-300">
                            {entry.linkedTheme}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gentle note */}
      <section className="py-10 text-center">
        <p className="text-muted-foreground/35 leading-relaxed text-sm font-light italic">
          {t(
            "记忆不是负担，而是你走过的证明。",
            "Memories aren't burdens — they're proof you've walked this far."
          )}
        </p>
      </section>
    </div>
  )
}
