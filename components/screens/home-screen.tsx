"use client"

import { useState } from "react"

const moodOptions = [
  { label: "平静", color: "bg-[oklch(0.85_0.08_140)]" },
  { label: "轻松", color: "bg-[oklch(0.85_0.10_85)]" },
  { label: "疲惫", color: "bg-[oklch(0.75_0.06_250)]" },
  { label: "焦虑", color: "bg-[oklch(0.80_0.08_25)]" },
  { label: "平淡", color: "bg-[oklch(0.80_0.03_80)]" },
]

const reflectionPrompts = [
  "最近什么让你感到安心？",
  "身体此刻有什么感觉？",
  "今天有什么小事值得感谢？",
  "现在需要的是什么？",
]

const recentMoments = [
  {
    id: 1,
    time: "今天早晨",
    content: "在窗边喝咖啡时，感到一种难得的平静。阳光很好，暖暖的。",
    mood: "宁静",
  },
  {
    id: 2,
    time: "昨天傍晚",
    content: "和朋友通话后，心情轻松了很多。有时候只是需要被倾听。",
    mood: "连接",
  },
]

export function HomeScreen() {
  const [entry, setEntry] = useState("")
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [checkedIn, setCheckedIn] = useState(false)
  const [currentPrompt] = useState(() => 
    reflectionPrompts[Math.floor(Math.random() * reflectionPrompts.length)]
  )

  return (
    <div className="max-w-xl mx-auto">
      {/* Greeting */}
      <section className="mb-12">
        <p className="text-sm text-muted-foreground/50 mb-3 tracking-wide">五月二十二日，星期四</p>
        <h1 className="text-2xl sm:text-3xl font-light text-foreground/90 leading-relaxed">
          早上好，雨泽
        </h1>
        <p className="text-muted-foreground/60 mt-3 text-base font-light leading-relaxed">
          {currentPrompt}
        </p>
      </section>

      {/* Daily check-in */}
      <section className="mb-14">
        {!checkedIn ? (
          <div className="rounded-2xl bg-card/80 border border-border/40 p-6 sm:p-7">
            <p className="text-sm text-muted-foreground/60 mb-5 font-light">
              轻轻感受一下此刻的状态...
            </p>
            <div className="flex flex-wrap gap-2.5">
              {moodOptions.map((mood) => (
                <button
                  key={mood.label}
                  onClick={() => {
                    setSelectedMood(mood.label)
                    setCheckedIn(true)
                  }}
                  className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary/50 border border-border/30 hover:bg-secondary hover:border-border/50 transition-all duration-300"
                >
                  <span className={`w-2 h-2 rounded-full ${mood.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
                  <span className="text-sm text-foreground/70 font-light group-hover:text-foreground/90">
                    {mood.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-2xl bg-peach/15 border border-warmth/10 p-6 sm:p-7">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-warmth/50" />
              <span className="text-sm text-foreground/70 font-light">
                今天感觉{selectedMood}
              </span>
            </div>
            <p className="text-xs text-muted-foreground/45 font-light">
              已记录。感谢你花时间觉察自己。
            </p>
          </div>
        )}
      </section>

      {/* Journal entry */}
      <section className="mb-14">
        <div className="rounded-2xl bg-card warm-glow border border-border/50 p-7 sm:p-8">
          <textarea
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            placeholder="此刻，有什么在你心里..."
            className="w-full bg-transparent text-foreground/90 leading-relaxed resize-none focus:outline-none placeholder:text-muted-foreground/35 min-h-[140px] text-base font-light"
          />
          <div className="mt-6 pt-5 border-t border-border/30 flex items-center justify-between">
            <span className="text-xs text-muted-foreground/40 tracking-wide">
              这是你的私人空间
            </span>
            {entry.trim() && (
              <button className="text-sm text-primary/70 hover:text-primary transition-colors font-light px-4 py-1.5 rounded-full bg-primary/5 hover:bg-primary/10">
                保存
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Recent moments preview */}
      <section className="mb-14">
        <h2 className="text-xs text-muted-foreground/50 tracking-widest mb-5 font-light">
          最近的时刻
        </h2>
        <div className="space-y-3">
          {recentMoments.map((moment) => (
            <div 
              key={moment.id}
              className="rounded-xl bg-card/60 border border-border/30 p-5 transition-all duration-300 hover:bg-card hover:border-border/50"
            >
              <p className="text-xs text-muted-foreground/50 mb-2">{moment.time}</p>
              <p className="text-foreground/80 leading-relaxed text-sm font-light line-clamp-2">
                {moment.content}
              </p>
              <span className="inline-block mt-3 text-xs text-muted-foreground/40 px-2.5 py-1 rounded-full bg-secondary/50">
                {moment.mood}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="py-8 text-center">
        <p className="text-muted-foreground/35 leading-relaxed text-sm max-w-sm mx-auto font-light">
          "稳定不是没有波动，而是在波动中找到回归的路径。"
        </p>
      </section>
    </div>
  )
}
