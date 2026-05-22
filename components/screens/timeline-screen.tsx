"use client"

import { useState } from "react"

const memories = [
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
      },
      {
        time: "早晨",
        content: "梦到了以前的朋友，醒来有点怀念那段简单的日子。",
        mood: "怀念",
        linkedTheme: null
      }
    ]
  },
  {
    id: 5,
    date: "两周前",
    entries: [
      {
        time: "晚上",
        content: "终于完成了那个拖了很久的项目。疲惫，但也松了一口气。",
        mood: "释然",
        linkedTheme: null
      }
    ]
  }
]

const emotionalContinuity = [
  {
    insight: "你选择了三次「出去走走」来应对压力",
    period: "这周",
    type: "pattern"
  },
  {
    insight: "当你提到朋友时，文字中常带着温暖",
    period: "近两周",
    type: "warmth"
  },
  {
    insight: "「需要被倾听」这个感受曾出现过两次",
    period: "本月",
    type: "need"
  }
]

export function TimelineScreen() {
  const [expandedDay, setExpandedDay] = useState<number | null>(1)

  return (
    <div className="max-w-xl mx-auto">
      {/* Header */}
      <section className="mb-10">
        <h1 className="text-2xl font-light text-foreground/90 mb-3">记忆的河流</h1>
        <p className="text-muted-foreground/55 text-sm font-light leading-relaxed">
          这里保存着你的每一次书写。它们不会被评判，只是安静地陪伴着你。
        </p>
      </section>

      {/* Emotional continuity insights */}
      <section className="mb-12">
        <h2 className="text-xs text-muted-foreground/50 tracking-widest mb-5 font-light">
          跨越时间的回响
        </h2>
        <div className="space-y-2.5">
          {emotionalContinuity.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 px-5 py-4 rounded-xl bg-peach/10 border border-warmth/10"
            >
              <div className="shrink-0 mt-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-warmth/50" />
              </div>
              <div>
                <p className="text-sm text-foreground/70 font-light">{item.insight}</p>
                <p className="text-xs text-muted-foreground/40 mt-1">{item.period}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-14">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-border/50 via-border/30 to-transparent" />
          
          <div className="space-y-6">
            {memories.map((day) => (
              <div key={day.id} className="relative pl-10">
                {/* Date marker */}
                <button
                  onClick={() => setExpandedDay(expandedDay === day.id ? null : day.id)}
                  className="absolute left-0 top-0 w-6 h-6 rounded-full bg-card border border-border/50 flex items-center justify-center transition-all duration-300 hover:border-warmth/30 hover:bg-peach/10"
                >
                  <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    expandedDay === day.id ? 'bg-warmth/70' : 'bg-muted-foreground/30'
                  }`} />
                </button>

                {/* Date label */}
                <p className="text-xs text-muted-foreground/50 mb-3 tracking-wide">{day.date}</p>

                {/* Entries */}
                <div className={`space-y-3 overflow-hidden transition-all duration-500 ${
                  expandedDay === day.id ? 'max-h-[600px] opacity-100' : 'max-h-20 opacity-70'
                }`}>
                  {day.entries.map((entry, i) => (
                    <div 
                      key={i}
                      className="rounded-xl bg-card/70 border border-border/30 p-5 transition-all duration-300 hover:bg-card hover:border-border/50"
                    >
                      <p className="text-xs text-muted-foreground/45 mb-2.5">{entry.time}</p>
                      <p className="text-foreground/80 leading-relaxed text-sm font-light">
                        {entry.content}
                      </p>
                      <div className="flex items-center gap-3 mt-4">
                        <span className="text-xs text-muted-foreground/40 px-2.5 py-1 rounded-full bg-secondary/50">
                          {entry.mood}
                        </span>
                        {entry.linkedTheme && (
                          <span className="text-xs text-warmth/50 font-light">
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
      <section className="py-8 text-center">
        <p className="text-muted-foreground/35 leading-relaxed text-sm font-light">
          记忆不是负担，而是你走过的证明。
        </p>
      </section>
    </div>
  )
}
