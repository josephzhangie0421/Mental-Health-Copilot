"use client"

import { useState } from "react"

const recentMoments = [
  {
    id: 1,
    time: "今天早晨",
    content: "在窗边喝咖啡时，感到一种难得的平静。阳光很好，暖暖的。",
    mood: "宁静"
  },
  {
    id: 2,
    time: "昨天傍晚",
    content: "和朋友通话后，心情轻松了很多。有时候只是需要被倾听。",
    mood: "连接"
  },
  {
    id: 3,
    time: "三天前",
    content: "截止日期的压力又来了，但这次我选择先出去走走再继续工作。",
    mood: "应对"
  }
]

const gentleActions = [
  { title: "出去走走", desc: "十分钟的户外时间" },
  { title: "写下想法", desc: "不加评判地记录" },
  { title: "深呼吸", desc: "缓慢地，三次" },
  { title: "泡杯茶", desc: "用双手感受温度" },
]

export default function ReflectionSpace() {
  const [entry, setEntry] = useState("")

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Washi paper texture overlay */}
      <div className="fixed inset-0 paper-texture pointer-events-none" />
      
      {/* Warm ambient glows - like morning sunlight through shoji screens */}
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
        <div 
          className="absolute top-[40%] left-[50%] w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] rounded-full animate-gentle-breathe"
          style={{ 
            background: 'radial-gradient(circle, oklch(0.90 0.06 75 / 0.08) 0%, transparent 60%)',
            animationDelay: '2.5s'
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
            
            {/* Greeting - warm, personal */}
            <section className="mb-16">
              <p className="text-sm text-muted-foreground/50 mb-3 tracking-wide">五月二十二日，星期四</p>
              <h1 className="text-2xl sm:text-3xl font-light text-foreground/90 leading-relaxed">
                早上好，雨泽
              </h1>
              <p className="text-muted-foreground/60 mt-3 text-base font-light leading-relaxed">
                今天的你，感觉怎么样？
              </p>
            </section>

            {/* Journal entry area - warm, inviting */}
            <section className="mb-16">
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

            {/* Recent moments - soft cards */}
            <section className="mb-16">
              <h2 className="text-xs text-muted-foreground/50 tracking-widest mb-6 font-light">
                最近的记录
              </h2>
              <div className="space-y-4">
                {recentMoments.map((moment) => (
                  <div 
                    key={moment.id}
                    className="group rounded-xl bg-card/60 border border-border/30 p-5 sm:p-6 transition-all duration-300 hover:bg-card hover:border-border/50 hover:shadow-sm"
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
                        <span className="inline-block mt-3 text-xs text-muted-foreground/40 px-2.5 py-1 rounded-full bg-secondary/50">
                          {moment.mood}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Gentle AI observation - warm, non-clinical */}
            <section className="mb-16">
              <div className="rounded-2xl bg-peach/20 border border-warmth/15 p-6 sm:p-7">
                <div className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="h-3 w-3 rounded-full bg-warmth/40 animate-gentle-breathe" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-foreground/75 leading-relaxed text-sm font-light mb-5">
                      我注意到这周你提到了几次「截止日期」和「压力」。也许可以花一点时间，看看是否有什么可以提前准备的，或者哪些事情其实没有那么紧急。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <button className="text-xs px-4 py-2 rounded-full bg-card/80 text-foreground/70 hover:bg-card hover:text-foreground/90 transition-all duration-200 border border-border/30">
                        谢谢提醒
                      </button>
                      <button className="text-xs px-4 py-2 rounded-full text-muted-foreground/50 hover:text-muted-foreground/70 hover:bg-secondary/30 transition-all duration-200">
                        现在不想谈这个
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Gentle suggestions - organic, rounded */}
            <section className="mb-16">
              <h2 className="text-xs text-muted-foreground/50 tracking-widest mb-6 font-light">
                也许可以
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {gentleActions.map((action, i) => (
                  <button
                    key={i}
                    className="group text-left p-5 rounded-xl bg-card/50 border border-border/30 hover:bg-card hover:border-border/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <p className="text-sm text-foreground/80 mb-1 font-light">{action.title}</p>
                    <p className="text-xs text-muted-foreground/45 font-light">{action.desc}</p>
                  </button>
                ))}
              </div>
            </section>

            {/* Quiet closing thought */}
            <section className="py-12 text-center">
              <p className="text-muted-foreground/35 leading-relaxed text-sm max-w-sm mx-auto font-light">
                "稳定不是没有波动，而是在波动中找到回归的路径。"
              </p>
            </section>

          </div>
        </main>

        {/* Footer - minimal */}
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
