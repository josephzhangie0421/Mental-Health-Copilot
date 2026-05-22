"use client"

import { useState } from "react"

const groundingExercises = [
  {
    id: 1,
    title: "五感着陆",
    duration: "3-5 分钟",
    description: "通过感官回到当下",
    steps: [
      "找一个舒适的姿势",
      "说出你能看到的 5 样东西",
      "说出你能听到的 4 种声音",
      "说出你能触摸到的 3 种质感",
      "说出你能闻到的 2 种气味",
      "说出你能尝到的 1 种味道"
    ],
    category: "感官"
  },
  {
    id: 2,
    title: "呼吸方块",
    duration: "2-4 分钟",
    description: "用呼吸找回节奏",
    steps: [
      "吸气，数到 4",
      "屏住呼吸，数到 4",
      "呼气，数到 4",
      "屏住呼吸，数到 4",
      "重复 3-4 轮"
    ],
    category: "呼吸"
  },
  {
    id: 3,
    title: "身体扫描",
    duration: "5-10 分钟",
    description: "感受身体的每一个部分",
    steps: [
      "从脚趾开始，注意那里的感觉",
      "慢慢向上移动注意力",
      "脚踝、小腿、膝盖...",
      "不需要改变什么，只是感受",
      "一直到头顶"
    ],
    category: "身体"
  }
]

const personalizedSuggestions = [
  {
    title: "出去走十分钟",
    reason: "上次这对你有帮助",
    icon: "movement"
  },
  {
    title: "给那位朋友发条消息",
    reason: "你提到过和她聊天后感觉轻松",
    icon: "connection"
  },
  {
    title: "在窗边坐一会",
    reason: "你喜欢那里的阳光",
    icon: "stillness"
  },
  {
    title: "把想法写下来",
    reason: "不必完整，片段也好",
    icon: "expression"
  }
]

const affirmations = [
  "你不需要现在就把一切都想清楚。",
  "感到疲惫是允许的。",
  "你已经度过了很多困难的日子。",
  "此刻的你，已经足够好了。",
  "慢下来不是放弃，是另一种前进。"
]

export function GroundScreen() {
  const [activeExercise, setActiveExercise] = useState<number | null>(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [currentAffirmation] = useState(() => 
    affirmations[Math.floor(Math.random() * affirmations.length)]
  )

  const startExercise = (id: number) => {
    setActiveExercise(id)
    setCurrentStep(0)
  }

  const nextStep = () => {
    const exercise = groundingExercises.find(e => e.id === activeExercise)
    if (exercise && currentStep < exercise.steps.length - 1) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const exitExercise = () => {
    setActiveExercise(null)
    setCurrentStep(0)
  }

  const activeExerciseData = groundingExercises.find(e => e.id === activeExercise)

  return (
    <div className="max-w-xl mx-auto">
      {/* Header */}
      <section className="mb-10">
        <h1 className="text-2xl font-light text-foreground/90 mb-3">回到此刻</h1>
        <p className="text-muted-foreground/55 text-sm font-light leading-relaxed">
          当内心有些纷乱时，这里有一些方法可以帮助你着陆。
        </p>
      </section>

      {/* Active exercise view */}
      {activeExerciseData ? (
        <section className="mb-12">
          <div className="rounded-2xl bg-card border border-border/50 overflow-hidden">
            {/* Exercise header */}
            <div className="p-6 border-b border-border/30 bg-peach/10">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-light text-foreground/85">{activeExerciseData.title}</h2>
                <button 
                  onClick={exitExercise}
                  className="text-xs text-muted-foreground/50 hover:text-muted-foreground/70 transition-colors px-3 py-1.5 rounded-full hover:bg-secondary/50"
                >
                  退出
                </button>
              </div>
              <p className="text-sm text-muted-foreground/50 font-light">{activeExerciseData.description}</p>
            </div>

            {/* Current step */}
            <div className="p-8 min-h-[200px] flex flex-col items-center justify-center text-center">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-warmth/20 flex items-center justify-center mx-auto mb-6 animate-gentle-breathe">
                  <div className="w-8 h-8 rounded-full bg-warmth/40" />
                </div>
                <p className="text-lg text-foreground/80 font-light leading-relaxed max-w-sm">
                  {activeExerciseData.steps[currentStep]}
                </p>
              </div>
              
              {/* Progress dots */}
              <div className="flex items-center gap-2 mb-6">
                {activeExerciseData.steps.map((_, i) => (
                  <div 
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === currentStep ? 'bg-warmth/70 scale-125' : 
                      i < currentStep ? 'bg-warmth/40' : 'bg-muted-foreground/20'
                    }`}
                  />
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-3">
                {currentStep < activeExerciseData.steps.length - 1 ? (
                  <button
                    onClick={nextStep}
                    className="px-6 py-2.5 rounded-full bg-warmth/20 text-foreground/70 hover:bg-warmth/30 transition-all duration-200 text-sm font-light"
                  >
                    下一步
                  </button>
                ) : (
                  <button
                    onClick={exitExercise}
                    className="px-6 py-2.5 rounded-full bg-warmth/20 text-foreground/70 hover:bg-warmth/30 transition-all duration-200 text-sm font-light"
                  >
                    完成
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Affirmation */}
          <section className="mb-12">
            <div className="rounded-2xl bg-peach/15 border border-warmth/15 p-8 text-center">
              <p className="text-foreground/75 text-lg font-light leading-relaxed">
                {currentAffirmation}
              </p>
            </div>
          </section>

          {/* Grounding exercises */}
          <section className="mb-12">
            <h2 className="text-xs text-muted-foreground/50 tracking-widest mb-5 font-light">
              着陆练习
            </h2>
            <div className="space-y-3">
              {groundingExercises.map((exercise) => (
                <button
                  key={exercise.id}
                  onClick={() => startExercise(exercise.id)}
                  className="w-full text-left rounded-xl bg-card/70 border border-border/30 p-5 hover:bg-card hover:border-border/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-sm text-foreground/80 font-light mb-1">{exercise.title}</h3>
                      <p className="text-xs text-muted-foreground/50">{exercise.description}</p>
                    </div>
                    <span className="text-xs text-muted-foreground/40 shrink-0 px-2.5 py-1 rounded-full bg-secondary/50">
                      {exercise.duration}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Personalized suggestions */}
          <section className="mb-12">
            <h2 className="text-xs text-muted-foreground/50 tracking-widest mb-4 font-light">
              也许可以
            </h2>
            <p className="text-xs text-muted-foreground/40 mb-5 font-light">
              这些建议来自你过去的记录
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {personalizedSuggestions.map((suggestion, i) => (
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

          {/* Emergency note */}
          <section className="mb-14">
            <div className="rounded-xl bg-secondary/30 border border-border/20 p-5">
              <p className="text-xs text-muted-foreground/50 font-light leading-relaxed">
                如果你正在经历强烈的困扰，请考虑联系专业的心理健康服务。
                你不必独自面对一切。
              </p>
            </div>
          </section>
        </>
      )}

      {/* Closing */}
      <section className="py-8 text-center">
        <p className="text-muted-foreground/35 leading-relaxed text-sm font-light">
          稳定不是没有波动，而是在波动中找到回归的路径。
        </p>
      </section>
    </div>
  )
}
