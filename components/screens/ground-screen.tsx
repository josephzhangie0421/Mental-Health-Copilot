"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"

const groundingExercisesZh = [
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
  }
]

const groundingExercisesEn = [
  {
    id: 1,
    title: "5-4-3-2-1 Grounding",
    duration: "3-5 min",
    description: "Return to now through your senses",
    steps: [
      "Find a comfortable position",
      "Name 5 things you can see",
      "Name 4 things you can hear",
      "Name 3 things you can touch",
      "Name 2 things you can smell",
      "Name 1 thing you can taste"
    ],
  },
  {
    id: 2,
    title: "Box Breathing",
    duration: "2-4 min",
    description: "Find rhythm through breath",
    steps: [
      "Breathe in for 4 counts",
      "Hold for 4 counts",
      "Breathe out for 4 counts",
      "Hold for 4 counts",
      "Repeat 3-4 times"
    ],
  },
  {
    id: 3,
    title: "Body Scan",
    duration: "5-10 min",
    description: "Notice each part of your body",
    steps: [
      "Start at your toes, notice the feeling",
      "Slowly move your attention upward",
      "Ankles, calves, knees...",
      "No need to change anything, just notice",
      "All the way to the top of your head"
    ],
  }
]

const personalizedSuggestionsZh = [
  { title: "出去走十分钟", reason: "上次这对你有帮助" },
  { title: "给那位朋友发条消息", reason: "你提到过和她聊天后感觉轻松" },
  { title: "在窗边坐一会", reason: "你喜欢那里的阳光" },
  { title: "把想法写下来", reason: "不必完整，片段也好" },
]

const personalizedSuggestionsEn = [
  { title: "Take a 10-minute walk", reason: "This helped before" },
  { title: "Message that friend", reason: "Talking with her made you feel lighter" },
  { title: "Sit by the window", reason: "You like the light there" },
  { title: "Write it down", reason: "Doesn't have to be complete" },
]

const affirmationsZh = [
  "你不需要现在就把一切都想清楚。",
  "感到疲惫是允许的。",
  "你已经度过了很多困难的日子。",
  "此刻的你，已经足够好了。",
  "慢下来不是放弃，是另一种前进。"
]

const affirmationsEn = [
  "You don't have to figure everything out right now.",
  "It's okay to feel tired.",
  "You've made it through difficult days before.",
  "You are enough, exactly as you are.",
  "Slowing down isn't giving up — it's moving differently."
]

export function GroundScreen() {
  const { language, t } = useLanguage()
  const [activeExercise, setActiveExercise] = useState<number | null>(null)
  const [currentStep, setCurrentStep] = useState(0)
  
  const exercises = language === "zh" ? groundingExercisesZh : groundingExercisesEn
  const suggestions = language === "zh" ? personalizedSuggestionsZh : personalizedSuggestionsEn
  const affirmations = language === "zh" ? affirmationsZh : affirmationsEn
  
  const [currentAffirmation] = useState(() => 
    affirmations[Math.floor(Math.random() * affirmations.length)]
  )

  const startExercise = (id: number) => {
    setActiveExercise(id)
    setCurrentStep(0)
  }

  const nextStep = () => {
    const exercise = exercises.find(e => e.id === activeExercise)
    if (exercise && currentStep < exercise.steps.length - 1) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const exitExercise = () => {
    setActiveExercise(null)
    setCurrentStep(0)
  }

  const activeExerciseData = exercises.find(e => e.id === activeExercise)

  return (
    <div className="max-w-xl mx-auto">
      {/* Header */}
      <section className="mb-12">
        <h1 className="text-2xl sm:text-3xl font-light text-foreground/90 mb-4 tracking-tight">
          {t("回到此刻", "Return to Now")}
        </h1>
        <p className="text-muted-foreground/55 text-sm font-light leading-relaxed max-w-md">
          {t(
            "当内心有些纷乱时，这里有一些方法可以帮助你着陆。",
            "When your mind feels scattered, here are some ways to come back."
          )}
        </p>
      </section>

      {/* Active exercise view */}
      {activeExerciseData ? (
        <section className="mb-14 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="rounded-2xl bg-card border border-border/50 overflow-hidden">
            {/* Exercise header */}
            <div className="p-7 border-b border-border/30 bg-peach/10">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-light text-foreground/85">{activeExerciseData.title}</h2>
                <button 
                  onClick={exitExercise}
                  className="text-xs text-muted-foreground/50 hover:text-muted-foreground/70 transition-all duration-300 px-4 py-2 rounded-full hover:bg-secondary/50"
                >
                  {t("退出", "Exit")}
                </button>
              </div>
              <p className="text-sm text-muted-foreground/50 font-light">{activeExerciseData.description}</p>
            </div>

            {/* Current step */}
            <div className="p-10 min-h-[280px] flex flex-col items-center justify-center text-center">
              <div className="mb-8">
                <div className="w-20 h-20 rounded-full bg-warmth/20 flex items-center justify-center mx-auto mb-8 animate-gentle-breathe">
                  <div className="w-10 h-10 rounded-full bg-warmth/40" />
                </div>
                <p className="text-lg text-foreground/80 font-light leading-relaxed max-w-sm">
                  {activeExerciseData.steps[currentStep]}
                </p>
              </div>
              
              {/* Progress dots */}
              <div className="flex items-center gap-2.5 mb-8">
                {activeExerciseData.steps.map((_, i) => (
                  <div 
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      i === currentStep ? 'bg-warmth/80 scale-125' : 
                      i < currentStep ? 'bg-warmth/40' : 'bg-muted-foreground/20'
                    }`}
                  />
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-4">
                {currentStep < activeExerciseData.steps.length - 1 ? (
                  <button
                    onClick={nextStep}
                    className="px-8 py-3 rounded-full bg-warmth/20 text-foreground/70 hover:bg-warmth/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-sm font-light"
                  >
                    {t("下一步", "Next")}
                  </button>
                ) : (
                  <button
                    onClick={exitExercise}
                    className="px-8 py-3 rounded-full bg-warmth/20 text-foreground/70 hover:bg-warmth/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-sm font-light"
                  >
                    {t("完成", "Done")}
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Affirmation */}
          <section className="mb-14">
            <div className="rounded-2xl bg-peach/15 border border-warmth/15 p-10 text-center hover:border-warmth/25 transition-all duration-500">
              <p className="text-foreground/75 text-lg font-light leading-relaxed">
                {currentAffirmation}
              </p>
            </div>
          </section>

          {/* Grounding exercises */}
          <section className="mb-14">
            <h2 className="text-xs text-muted-foreground/50 tracking-widest mb-6 font-light uppercase">
              {t("着陆练习", "Grounding exercises")}
            </h2>
            <div className="space-y-4">
              {exercises.map((exercise) => (
                <button
                  key={exercise.id}
                  onClick={() => startExercise(exercise.id)}
                  className="group w-full text-left rounded-xl bg-card/70 border border-border/30 p-6 hover:bg-card hover:border-border/50 hover:translate-y-[-2px] transition-all duration-500"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-sm text-foreground/80 font-light mb-2 group-hover:text-foreground/90 transition-colors duration-300">
                        {exercise.title}
                      </h3>
                      <p className="text-xs text-muted-foreground/50">{exercise.description}</p>
                    </div>
                    <span className="text-xs text-muted-foreground/40 shrink-0 px-3 py-1.5 rounded-full bg-secondary/50 group-hover:bg-secondary/70 transition-colors duration-300">
                      {exercise.duration}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Personalized suggestions */}
          <section className="mb-14">
            <h2 className="text-xs text-muted-foreground/50 tracking-widest mb-4 font-light uppercase">
              {t("也许可以", "Maybe try")}
            </h2>
            <p className="text-xs text-muted-foreground/40 mb-6 font-light">
              {t("这些建议来自你过去的记录", "These came from your past reflections")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {suggestions.map((suggestion, i) => (
                <button
                  key={i}
                  className="group text-left p-6 rounded-xl bg-card/50 border border-border/30 hover:bg-card hover:border-border/50 hover:translate-y-[-2px] transition-all duration-500"
                >
                  <p className="text-sm text-foreground/80 mb-2 font-light group-hover:text-foreground/90 transition-colors duration-300">
                    {suggestion.title}
                  </p>
                  <p className="text-xs text-muted-foreground/45 font-light">{suggestion.reason}</p>
                </button>
              ))}
            </div>
          </section>

          {/* Emergency note */}
          <section className="mb-16">
            <div className="rounded-xl bg-secondary/30 border border-border/20 p-6 hover:border-border/30 transition-all duration-500">
              <p className="text-xs text-muted-foreground/50 font-light leading-relaxed">
                {t(
                  "如果你正在经历强烈的困扰，请考虑联系专业的心理健康服务。你不必独自面对一切。",
                  "If you're experiencing intense distress, please consider reaching out to a mental health professional. You don't have to face everything alone."
                )}
              </p>
            </div>
          </section>
        </>
      )}

      {/* Closing */}
      <section className="py-10 text-center">
        <p className="text-muted-foreground/35 leading-relaxed text-sm font-light italic">
          {t(
            "稳定不是没有波动，而是在波动中找到回归的路径。",
            "Stability isn't the absence of waves — it's finding your way back."
          )}
        </p>
      </section>
    </div>
  )
}
