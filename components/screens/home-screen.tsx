"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"

const moodOptions = [
  { labelZh: "平静", labelEn: "Calm", color: "bg-[oklch(0.85_0.08_140)]" },
  { labelZh: "轻松", labelEn: "Light", color: "bg-[oklch(0.85_0.10_85)]" },
  { labelZh: "疲惫", labelEn: "Tired", color: "bg-[oklch(0.75_0.06_250)]" },
  { labelZh: "焦虑", labelEn: "Anxious", color: "bg-[oklch(0.80_0.08_25)]" },
  { labelZh: "平淡", labelEn: "Neutral", color: "bg-[oklch(0.80_0.03_80)]" },
]

const reflectionPromptsZh = [
  "最近什么让你感到安心？",
  "身体此刻有什么感觉？",
  "今天有什么小事值得感谢？",
  "现在需要的是什么？",
]

const reflectionPromptsEn = [
  "What feels present right now?",
  "How does your body feel in this moment?",
  "What small thing brought warmth today?",
  "What do you need right now?",
]

const recentMomentsZh = [
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

const recentMomentsEn = [
  {
    id: 1,
    time: "This morning",
    content: "Coffee by the window. A rare moment of stillness. The light was warm.",
    mood: "Still",
  },
  {
    id: 2,
    time: "Yesterday evening",
    content: "Felt lighter after talking with a friend. Sometimes just being heard is enough.",
    mood: "Connected",
  },
]

export function HomeScreen() {
  const { language, t } = useLanguage()
  const [entry, setEntry] = useState("")
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [checkedIn, setCheckedIn] = useState(false)
  
  const prompts = language === "zh" ? reflectionPromptsZh : reflectionPromptsEn
  const moments = language === "zh" ? recentMomentsZh : recentMomentsEn
  const [currentPrompt] = useState(() => 
    prompts[Math.floor(Math.random() * prompts.length)]
  )

  const greeting = language === "zh" 
    ? "早上好，雨泽" 
    : "Good morning"

  const dateStr = language === "zh"
    ? "五月二十二日，星期四"
    : "Thursday, May 22"

  return (
    <div className="max-w-xl mx-auto">
      {/* Greeting */}
      <section className="mb-14">
        <p className="text-sm text-muted-foreground/50 mb-4 tracking-wide font-light">
          {dateStr}
        </p>
        <h1 className="text-2xl sm:text-3xl font-light text-foreground/90 leading-relaxed tracking-tight">
          {greeting}
        </h1>
        <p className="text-muted-foreground/60 mt-4 text-base font-light leading-relaxed">
          {currentPrompt}
        </p>
      </section>

      {/* Daily check-in */}
      <section className="mb-16">
        {!checkedIn ? (
          <div className="rounded-2xl bg-card/80 border border-border/40 p-7 sm:p-8 hover:border-border/50 transition-all duration-500">
            <p className="text-sm text-muted-foreground/60 mb-6 font-light">
              {t("轻轻感受一下此刻的状态...", "Take a breath. How are you feeling?")}
            </p>
            <div className="flex flex-wrap gap-3">
              {moodOptions.map((mood) => (
                <button
                  key={mood.labelZh}
                  onClick={() => {
                    setSelectedMood(language === "zh" ? mood.labelZh : mood.labelEn)
                    setCheckedIn(true)
                  }}
                  className="group flex items-center gap-2.5 px-5 py-3 rounded-full bg-secondary/40 border border-border/30 hover:bg-secondary/70 hover:border-border/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <span className={`w-2.5 h-2.5 rounded-full ${mood.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                  <span className="text-sm text-foreground/65 font-light group-hover:text-foreground/85 transition-colors duration-300">
                    {language === "zh" ? mood.labelZh : mood.labelEn}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-2xl bg-peach/15 border border-warmth/15 p-7 sm:p-8 animate-in fade-in duration-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-warmth/50 animate-gentle-breathe" />
              <span className="text-sm text-foreground/70 font-light">
                {t(`今天感觉${selectedMood}`, `Feeling ${selectedMood?.toLowerCase()} today`)}
              </span>
            </div>
            <p className="text-xs text-muted-foreground/45 font-light">
              {t("已记录。感谢你花时间觉察自己。", "Noted. Thank you for checking in with yourself.")}
            </p>
          </div>
        )}
      </section>

      {/* Journal entry */}
      <section className="mb-16">
        <div className="rounded-2xl bg-card warm-glow border border-border/50 p-8 sm:p-9 hover:border-border/60 transition-all duration-500">
          <textarea
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            placeholder={t("此刻，有什么在你心里...", "What's on your mind right now...")}
            className="w-full bg-transparent text-foreground/90 leading-relaxed resize-none focus:outline-none placeholder:text-muted-foreground/35 min-h-[160px] text-base font-light"
          />
          <div className="mt-7 pt-6 border-t border-border/30 flex items-center justify-between">
            <span className="text-xs text-muted-foreground/40 tracking-wide font-light">
              {t("这是你的私人空间", "Your thoughts stay here")}
            </span>
            {entry.trim() && (
              <button className="text-sm text-primary/70 hover:text-primary transition-all duration-300 font-light px-5 py-2 rounded-full bg-primary/5 hover:bg-primary/10 hover:scale-[1.02] active:scale-[0.98]">
                {t("保存", "Save")}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Recent moments preview */}
      <section className="mb-16">
        <h2 className="text-xs text-muted-foreground/50 tracking-widest mb-6 font-light uppercase">
          {t("最近的时刻", "Recent moments")}
        </h2>
        <div className="space-y-4">
          {moments.map((moment) => (
            <div 
              key={moment.id}
              className="group rounded-xl bg-card/60 border border-border/30 p-6 transition-all duration-500 hover:bg-card/90 hover:border-border/50 hover:translate-y-[-2px] cursor-pointer"
            >
              <p className="text-xs text-muted-foreground/50 mb-3 font-light">{moment.time}</p>
              <p className="text-foreground/80 leading-relaxed text-sm font-light line-clamp-2">
                {moment.content}
              </p>
              <span className="inline-block mt-4 text-xs text-muted-foreground/40 px-3 py-1.5 rounded-full bg-secondary/50 group-hover:bg-secondary/70 transition-colors duration-300">
                {moment.mood}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="py-10 text-center">
        <p className="text-muted-foreground/35 leading-relaxed text-sm max-w-sm mx-auto font-light italic">
          {t(
            "「稳定不是没有波动，而是在波动中找到回归的路径。」",
            "\"Stability isn't the absence of waves — it's finding your way back.\""
          )}
        </p>
      </section>
    </div>
  )
}
