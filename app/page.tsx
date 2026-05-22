"use client"

import { useState } from "react"

const memoryCards = [
  {
    id: 1,
    time: "今天早晨",
    content: "在窗边喝咖啡时，感到一种难得的平静。",
    mood: "calm",
    tag: "宁静时刻"
  },
  {
    id: 2,
    time: "昨天傍晚",
    content: "和朋友通话后，心情轻松了很多。有时候只是需要被倾听。",
    mood: "gentle",
    tag: "人际连接"
  },
  {
    id: 3,
    time: "三天前",
    content: "截止日期的压力又来了，但这次我选择先出去走走再继续。",
    mood: "warmth",
    tag: "应对方式"
  }
]

const gentlePrompts = [
  "此刻，有什么在你心里？",
  "今天有什么小事让你微笑了吗？",
  "如果用一个词形容现在的感受，会是什么？",
  "最近有什么想法一直在脑海里盘旋？"
]

const suggestions = [
  { icon: "🌿", title: "短暂散步", desc: "10分钟的户外时间", type: "movement" },
  { icon: "📝", title: "自由书写", desc: "不加评判地写下想法", type: "reflection" },
  { icon: "🌙", title: "呼吸练习", desc: "4-7-8 放松呼吸", type: "calm" },
]

export default function Dashboard() {
  const [journalEntry, setJournalEntry] = useState("")
  const [currentPrompt] = useState(gentlePrompts[0])

  return (
    <div className="min-h-screen bg-background">
      {/* Ambient background gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-warmth/5 rounded-full blur-3xl animate-breathe" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-calm/5 rounded-full blur-3xl animate-breathe" style={{ animationDelay: '3s' }} />
      </div>

      {/* Header - minimal, warm */}
      <header className="relative z-10 px-6 py-8 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-warmth/60" />
            <span className="text-sm text-muted-foreground tracking-wide">Equilibria</span>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-xs font-medium text-secondary-foreground">
            YZ
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 sm:px-12 lg:px-20 pb-20">
        <div className="mx-auto max-w-4xl">
          
          {/* Greeting - Large, warm, breathing space */}
          <section className="mb-16 pt-8">
            <p className="text-sm text-muted-foreground mb-3">星期五，五月二十二日</p>
            <h1 className="text-3xl sm:text-4xl font-light text-foreground leading-relaxed text-balance">
              早上好，雨泽
            </h1>
            <p className="mt-4 text-lg text-muted-foreground font-light">
              今天感觉如何？
            </p>
          </section>

          {/* Gentle Check-in */}
          <section className="mb-16">
            <div className="rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 p-8 sm:p-10">
              <p className="text-muted-foreground text-sm mb-4">{currentPrompt}</p>
              <textarea
                value={journalEntry}
                onChange={(e) => setJournalEntry(e.target.value)}
                placeholder="开始写下你的想法..."
                className="w-full bg-transparent text-foreground text-lg font-light leading-relaxed resize-none focus:outline-none placeholder:text-muted-foreground/50 min-h-[120px]"
              />
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-muted-foreground/60">
                  你的记录只属于你自己
                </span>
                <button className="text-sm text-primary hover:text-primary/80 transition-colors">
                  保存这段记录
                </button>
              </div>
            </div>
          </section>

          {/* Memory Cards - Soft, timeline-based */}
          <section className="mb-16">
            <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              近期记忆
            </h2>
            <div className="space-y-4">
              {memoryCards.map((card) => (
                <div 
                  key={card.id}
                  className="group rounded-xl bg-card/60 backdrop-blur-sm border border-border/30 p-6 transition-all duration-300 hover:bg-card/80 hover:border-border/50"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground mb-2">{card.time}</p>
                      <p className="text-foreground/90 font-light leading-relaxed">
                        {card.content}
                      </p>
                    </div>
                    <span className="shrink-0 text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">
                      {card.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* AI Presence - Quiet, non-intrusive */}
          <section className="mb-16">
            <div className="rounded-2xl bg-gradient-to-br from-calm/5 to-gentle/5 border border-calm/10 p-8 sm:p-10">
              <div className="flex items-start gap-4">
                <div className="shrink-0 h-8 w-8 rounded-full bg-calm/20 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-calm animate-breathe" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-3">一个轻柔的观察</p>
                  <p className="text-foreground/90 font-light leading-relaxed text-balance">
                    我注意到这周你提到了几次「截止日期」。也许可以花一点时间，看看是否有什么可以提前准备，或者哪些事情其实没有那么紧急。
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <button className="text-sm px-4 py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors">
                      这很有帮助
                    </button>
                    <button className="text-sm px-4 py-2 rounded-full bg-transparent text-muted-foreground hover:bg-secondary/50 transition-colors">
                      暂时不想谈这个
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Gentle Suggestions */}
          <section className="mb-16">
            <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              也许可以试试
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {suggestions.map((item, index) => (
                <button
                  key={index}
                  className="group text-left rounded-xl bg-card/60 backdrop-blur-sm border border-border/30 p-5 transition-all duration-300 hover:bg-card/80 hover:border-border/50"
                >
                  <span className="text-2xl mb-3 block">{item.icon}</span>
                  <p className="text-foreground font-medium text-sm mb-1">{item.title}</p>
                  <p className="text-muted-foreground text-xs">{item.desc}</p>
                </button>
              ))}
            </div>
          </section>

          {/* Grounding Quote */}
          <section className="text-center py-12">
            <p className="text-muted-foreground/60 text-sm mb-4">今日一念</p>
            <p className="text-xl sm:text-2xl font-light text-foreground/80 leading-relaxed max-w-xl mx-auto text-balance">
              "稳定不是没有波动，而是在波动中找到回归的路径。"
            </p>
          </section>

        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="relative z-10 px-6 py-8 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl flex items-center justify-center">
          <p className="text-xs text-muted-foreground/50">
            Equilibria · 为人类自我调节而设计
          </p>
        </div>
      </footer>
    </div>
  )
}
