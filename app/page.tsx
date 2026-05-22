"use client"

import { useState } from "react"

// Memory continuity - past reflections that carry emotional context
const memoryTimeline = [
  {
    id: 1,
    period: "这周",
    insight: "你选择了三次「出去走走」来应对压力，这似乎对你有帮助。",
    type: "pattern"
  },
  {
    id: 2,
    period: "上周",
    insight: "当你提到朋友时，文字中常带着温暖的感觉。",
    type: "warmth"
  },
  {
    id: 3,
    period: "两周前",
    insight: "那段时间你写到过「需要被倾听」，后来和朋友的通话似乎回应了这个需要。",
    type: "connection"
  }
]

// Recurring themes - patterns that surface gently over time
const recurringThemes = [
  { 
    label: "寻找平静的时刻", 
    frequency: "常常出现",
    lastSeen: "今天",
    color: "bg-[oklch(0.85_0.08_140/0.6)]"
  },
  { 
    label: "工作与生活的边界", 
    frequency: "近期较多",
    lastSeen: "昨天",
    color: "bg-[oklch(0.80_0.08_25/0.6)]"
  },
  { 
    label: "渴望连接", 
    frequency: "偶尔浮现",
    lastSeen: "三天前",
    color: "bg-[oklch(0.85_0.10_85/0.6)]"
  },
]

// Recent moments with emotional continuity
const recentMoments = [
  {
    id: 1,
    time: "今天早晨",
    content: "在窗边喝咖啡时，感到一种难得的平静。阳光很好，暖暖的。",
    mood: "宁静",
    linkedTo: "这是你这周第三次记录到「平静」的时刻"
  },
  {
    id: 2,
    time: "昨天傍晚",
    content: "和朋友通话后，心情轻松了很多。有时候只是需要被倾听。",
    mood: "连接",
    linkedTo: null
  },
  {
    id: 3,
    time: "三天前",
    content: "截止日期的压力又来了，但这次我选择先出去走走再继续工作。",
    mood: "应对",
    linkedTo: "你正在建立一种新的应对方式"
  }
]

// Stabilization suggestions - grounded in real life patterns
const stabilizationSuggestions = [
  { 
    title: "出去走十分钟", 
    reason: "上次这对你有帮助",
    type: "movement"
  },
  { 
    title: "给那位朋友发条消息", 
    reason: "你提到过和她聊天后感觉轻松",
    type: "connection"
  },
  { 
    title: "在窗边坐一会", 
    reason: "你喜欢那里的阳光",
    type: "stillness"
  },
  { 
    title: "把想法写下来", 
    reason: "不必完整，片段也好",
    type: "expression"
  },
]

// Gentle reflection prompts - not questions, just openings
const reflectionPrompts = [
  "最近什么让你感到安心？",
  "身体此刻有什么感觉？",
  "今天有什么小事值得感谢？",
  "现在需要的是什么？",
]

const moodOptions = [
  { label: "平静", color: "bg-[oklch(0.85_0.08_140)]" },
  { label: "轻松", color: "bg-[oklch(0.85_0.10_85)]" },
  { label: "疲惫", color: "bg-[oklch(0.75_0.06_250)]" },
  { label: "焦虑", color: "bg-[oklch(0.80_0.08_25)]" },
  { label: "平淡", color: "bg-[oklch(0.80_0.03_80)]" },
]

export default function ReflectionSpace() {
  const [entry, setEntry] = useState("")
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [checkedIn, setCheckedIn] = useState(false)
  const [currentPrompt] = useState(() => 
    reflectionPrompts[Math.floor(Math.random() * reflectionPrompts.length)]
  )
  const [dismissedObservation, setDismissedObservation] = useState(false)
  const [expandedMemory, setExpandedMemory] = useState<number | null>(null)

  const handleCheckIn = (mood: string) => {
    setSelectedMood(mood)
    setCheckedIn(true)
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Washi paper texture overlay */}
      <div className="fixed inset-0 paper-texture pointer-events-none" />
      
      {/* Warm ambient glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full animate-gentle-breathe"
          style={{ background: 'radial-gradient(circle, oklch(0.88 0.10 65 / 0.15) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-[-15%] left-[-10%] w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] rounded-full animate-gentle-breathe"
          style={{ 
            background: 'radial-gradient(circle, oklch(0.85 0.08 55 / 0.12) 0%, transparent 70%)',
            animationDelay: '5s'
          }}
        />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Minimal header */}
        <header className="px-6 py-8 sm:px-10 lg:px-16">
          <div className="max-w-xl mx-auto flex items-center justify-between">
            <span className="text-sm text-muted-foreground/60 tracking-widest font-light">equilibria</span>
            <div className="h-8 w-8 rounded-full bg-peach/40 flex items-center justify-center text-sm text-clay/80 font-light">
              雨
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 px-6 sm:px-10 lg:px-16 py-6">
          <div className="max-w-xl mx-auto">
            
            {/* Greeting with gentle prompt */}
            <section className="mb-12">
              <p className="text-sm text-muted-foreground/50 mb-3 tracking-wide">五月二十二日，星期四</p>
              <h1 className="text-2xl sm:text-3xl font-light text-foreground/90 leading-relaxed">
                早上好，雨泽
              </h1>
              <p className="text-muted-foreground/60 mt-3 text-base font-light leading-relaxed">
                {currentPrompt}
              </p>
            </section>

            {/* Daily emotional check-in */}
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
                        onClick={() => handleCheckIn(mood.label)}
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

            {/* Journal entry area */}
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

            {/* Memory Continuity - gentle awareness of the past */}
            <section className="mb-14">
              <h2 className="text-xs text-muted-foreground/50 tracking-widest mb-5 font-light">
                记忆的回响
              </h2>
              <div className="space-y-3">
                {memoryTimeline.map((memory) => (
                  <button
                    key={memory.id}
                    onClick={() => setExpandedMemory(expandedMemory === memory.id ? null : memory.id)}
                    className="w-full text-left group"
                  >
                    <div className={`rounded-xl border transition-all duration-300 ${
                      expandedMemory === memory.id 
                        ? 'bg-peach/15 border-warmth/20 p-5' 
                        : 'bg-card/40 border-border/25 p-4 hover:bg-card/60 hover:border-border/40'
                    }`}>
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 mt-1">
                          <div className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                            expandedMemory === memory.id ? 'bg-warmth/60' : 'bg-muted-foreground/30'
                          }`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-muted-foreground/45 mb-1.5">{memory.period}</p>
                          <p className={`text-sm font-light leading-relaxed transition-colors duration-300 ${
                            expandedMemory === memory.id ? 'text-foreground/80' : 'text-foreground/65'
                          }`}>
                            {memory.insight}
                          </p>
                          {expandedMemory === memory.id && (
                            <p className="text-xs text-muted-foreground/40 mt-3 font-light">
                              轻触以探索更多相关记录...
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* Recurring themes - pattern recognition without analysis */}
            <section className="mb-14">
              <h2 className="text-xs text-muted-foreground/50 tracking-widest mb-5 font-light">
                反复出现的主题
              </h2>
              <div className="space-y-2.5">
                {recurringThemes.map((theme, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 px-5 py-4 rounded-xl bg-card/50 border border-border/25"
                  >
                    <span className={`w-2 h-2 rounded-full ${theme.color}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground/70 font-light">{theme.label}</p>
                      <p className="text-xs text-muted-foreground/40 mt-0.5">{theme.frequency}</p>
                    </div>
                    <span className="text-xs text-muted-foreground/35 shrink-0">{theme.lastSeen}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground/35 mt-4 font-light leading-relaxed">
                这些主题在你的书写中自然浮现。它们不是问题，只是值得温柔注意的模式。
              </p>
            </section>

            {/* Gentle AI observation - quietly attentive */}
            {!dismissedObservation && (
              <section className="mb-14">
                <div className="rounded-2xl bg-peach/20 border border-warmth/15 p-6 sm:p-7">
                  <div className="flex gap-4">
                    <div className="shrink-0 mt-1">
                      <div className="h-3 w-3 rounded-full bg-warmth/40 animate-gentle-breathe" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground/50 mb-3 font-light tracking-wide">
                        我注意到...
                      </p>
                      <p className="text-foreground/75 leading-relaxed text-sm font-light mb-5">
                        这周你三次选择用散步来回应压力。这是一种你自己发展出来的智慧。
                        也许在下次感到紧绷时，可以信任这个直觉。
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <button 
                          onClick={() => setDismissedObservation(true)}
                          className="text-xs px-4 py-2 rounded-full bg-card/80 text-foreground/70 hover:bg-card hover:text-foreground/90 transition-all duration-200 border border-border/30"
                        >
                          我知道了
                        </button>
                        <button 
                          onClick={() => setDismissedObservation(true)}
                          className="text-xs px-4 py-2 rounded-full text-muted-foreground/45 hover:text-muted-foreground/65 hover:bg-secondary/30 transition-all duration-200"
                        >
                          暂时不需要提醒
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Recent moments with memory links */}
            <section className="mb-14">
              <h2 className="text-xs text-muted-foreground/50 tracking-widest mb-6 font-light">
                最近的时刻
              </h2>
              <div className="space-y-4">
                {recentMoments.map((moment) => (
                  <div 
                    key={moment.id}
                    className="group rounded-xl bg-card/60 border border-border/30 p-5 sm:p-6 transition-all duration-300 hover:bg-card hover:border-border/50"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 mt-1">
                        <div className="h-2 w-2 rounded-full bg-peach/60" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-muted-foreground/50 mb-2 tracking-wide">{moment.time}</p>
                        <p className="text-foreground/80 leading-relaxed text-sm font-light">
                          {moment.content}
                        </p>
                        <div className="flex items-center gap-3 mt-3">
                          <span className="text-xs text-muted-foreground/40 px-2.5 py-1 rounded-full bg-secondary/50">
                            {moment.mood}
                          </span>
                          {moment.linkedTo && (
                            <span className="text-xs text-warmth/60 font-light">
                              {moment.linkedTo}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Stabilization suggestions - personalized, grounded */}
            <section className="mb-14">
              <h2 className="text-xs text-muted-foreground/50 tracking-widest mb-5 font-light">
                也许可以
              </h2>
              <p className="text-xs text-muted-foreground/40 mb-5 font-light">
                这些建议来自你过去的记录，是你自己发现有帮助的事情。
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {stabilizationSuggestions.map((suggestion, i) => (
                  <button
                    key={i}
                    className="group text-left p-5 rounded-xl bg-card/50 border border-border/30 hover:bg-card hover:border-border/50 transition-all duration-300"
                  >
                    <p className="text-sm text-foreground/80 mb-1.5 font-light">{suggestion.title}</p>
                    <p className="text-xs text-muted-foreground/45 font-light">{suggestion.reason}</p>
                  </button>
                ))}
              </div>
            </section>

            {/* Quiet closing */}
            <section className="py-10 text-center">
              <p className="text-muted-foreground/35 leading-relaxed text-sm max-w-sm mx-auto font-light">
                "稳定不是没有波动，而是在波动中找到回归的路径。"
              </p>
            </section>

          </div>
        </main>

        {/* Footer */}
        <footer className="px-6 py-8 sm:px-10 lg:px-16">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-xs text-muted-foreground/25 tracking-widest font-light">
              为人类自我调节而设计
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
