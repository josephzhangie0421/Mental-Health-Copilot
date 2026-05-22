"use client"

import { useState } from "react"

const recentMoments = [
  {
    id: 1,
    time: "今天早晨",
    content: "在窗边喝咖啡时，感到一种难得的平静。阳光很好，暖暖的。",
    tag: "宁静"
  },
  {
    id: 2,
    time: "昨天傍晚",
    content: "和朋友通话后，心情轻松了很多。有时候只是需要被倾听。",
    tag: "连接"
  },
  {
    id: 3,
    time: "三天前",
    content: "截止日期的压力又来了，但这次我选择先出去走走再继续工作。",
    tag: "应对"
  }
]

const gentleActions = [
  { title: "出去走走", desc: "十分钟的户外时间" },
  { title: "写下想法", desc: "不加评判地记录" },
  { title: "深呼吸", desc: "缓慢地，三次" },
]

export default function ReflectionSpace() {
  const [entry, setEntry] = useState("")

  return (
    <div className="min-h-screen bg-background relative">
      {/* Paper texture overlay */}
      <div className="fixed inset-0 paper-texture pointer-events-none" />
      
      {/* Warm ambient glow - like evening lamplight */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full animate-gentle-breathe"
          style={{ background: 'radial-gradient(circle, rgba(200, 160, 120, 0.08) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full animate-gentle-breathe"
          style={{ 
            background: 'radial-gradient(circle, rgba(180, 150, 110, 0.06) 0%, transparent 70%)',
            animationDelay: '4s'
          }}
        />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Simple header */}
        <header className="px-6 py-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <span className="text-sm text-muted-foreground/70 tracking-wide">Equilibria</span>
            <div className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center text-xs text-muted-foreground">
              Y
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 px-6 sm:px-10 lg:px-16 py-8">
          <div className="max-w-2xl mx-auto">
            
            {/* Greeting */}
            <section className="mb-14">
              <p className="text-sm text-muted-foreground/60 mb-2">五月二十二日，星期四</p>
              <h1 className="text-2xl sm:text-3xl font-light text-foreground leading-snug tracking-tight">
                早上好，雨泽
              </h1>
            </section>

            {/* Journal entry area */}
            <section className="mb-14">
              <div className="rounded-xl bg-card soft-shadow border border-border/40 p-6 sm:p-8">
                <p className="text-muted-foreground/80 text-sm mb-5">
                  此刻，有什么在你心里？
                </p>
                <textarea
                  value={entry}
                  onChange={(e) => setEntry(e.target.value)}
                  placeholder="开始写下你的想法..."
                  className="w-full bg-transparent text-foreground leading-relaxed resize-none focus:outline-none placeholder:text-muted-foreground/40 min-h-[100px] text-base"
                />
                <div className="mt-5 pt-4 border-t border-border/30 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground/50">
                    这是你的私人空间
                  </span>
                  {entry.trim() && (
                    <button className="text-sm text-primary/80 hover:text-primary transition-colors">
                      保存
                    </button>
                  )}
                </div>
              </div>
            </section>

            {/* Recent moments */}
            <section className="mb-14">
              <h2 className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-5">
                最近的记录
              </h2>
              <div className="space-y-3">
                {recentMoments.map((moment) => (
                  <div 
                    key={moment.id}
                    className="rounded-lg bg-card/70 border border-border/30 p-5 transition-colors hover:bg-card"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-muted-foreground/60 mb-1.5">{moment.time}</p>
                        <p className="text-foreground/85 leading-relaxed text-sm">
                          {moment.content}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground/50 shrink-0">
                        {moment.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Gentle observation from AI */}
            <section className="mb-14">
              <div className="rounded-xl bg-amber-glow/[0.06] border border-warmth/10 p-6 sm:p-7">
                <div className="flex gap-4">
                  <div className="shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-warmth/50 animate-gentle-breathe" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-foreground/80 leading-relaxed text-sm mb-5">
                      我注意到这周你提到了几次「截止日期」和「压力」。也许可以花一点时间，看看是否有什么可以提前准备的，或者哪些事情其实没有那么紧急。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <button className="text-xs px-3 py-1.5 rounded-md bg-secondary/80 text-secondary-foreground hover:bg-secondary transition-colors">
                        谢谢提醒
                      </button>
                      <button className="text-xs px-3 py-1.5 rounded-md text-muted-foreground/60 hover:text-muted-foreground hover:bg-secondary/50 transition-colors">
                        现在不想谈这个
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Simple suggestions */}
            <section className="mb-14">
              <h2 className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-5">
                也许可以
              </h2>
              <div className="flex flex-wrap gap-2">
                {gentleActions.map((action, i) => (
                  <button
                    key={i}
                    className="group text-left px-4 py-3 rounded-lg bg-card/70 border border-border/30 hover:bg-card hover:border-border/50 transition-colors"
                  >
                    <p className="text-sm text-foreground/85 mb-0.5">{action.title}</p>
                    <p className="text-xs text-muted-foreground/50">{action.desc}</p>
                  </button>
                ))}
              </div>
            </section>

            {/* Quiet quote */}
            <section className="py-10 text-center">
              <p className="text-muted-foreground/40 leading-relaxed text-sm max-w-md mx-auto italic">
                "稳定不是没有波动，而是在波动中找到回归的路径。"
              </p>
            </section>

          </div>
        </main>

        {/* Footer */}
        <footer className="px-6 py-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs text-muted-foreground/30">
              为人类自我调节而设计
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
