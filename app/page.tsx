"use client"

import { Brain, Activity, Heart, Moon, Settings, Bell } from "lucide-react"
import { StabilityScore } from "@/components/dashboard/stability-score"
import { MetricCard } from "@/components/dashboard/metric-card"
import { EmotionalTimeline } from "@/components/dashboard/emotional-timeline"
import { ReflectionLayer } from "@/components/dashboard/reflection-layer"
import { AIReflectionAssistant } from "@/components/dashboard/ai-reflection-assistant"
import { StabilizationSuggestions } from "@/components/dashboard/stabilization-suggestions"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
              <Brain className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-medium text-foreground">Equilibria</h1>
              <p className="text-xs text-muted-foreground">情绪稳定操作系统</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              <Bell className="h-4 w-4" />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              <Settings className="h-4 w-4" />
            </button>
            <div className="ml-2 flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-sm font-medium text-foreground">
              YZ
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <p className="text-sm text-muted-foreground">2026年5月22日，星期五</p>
          <h2 className="mt-1 text-2xl font-light text-foreground">
            早上好，<span className="text-primary">雨泽</span>
          </h2>
        </div>

        {/* Daily Emotional State */}
        <section className="mb-8">
          <h3 className="mb-4 text-xs uppercase tracking-wider text-muted-foreground">今日情绪状态</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-primary/20 bg-card p-5">
              <StabilityScore score={78} label="情绪稳定性" trend="up" />
            </div>
            <MetricCard 
              title="压力水平" 
              value={32} 
              unit="%" 
              status="good"
              icon={<Activity className="h-4 w-4" />}
            />
            <MetricCard 
              title="认知负荷" 
              value="中等" 
              status="moderate"
              icon={<Heart className="h-4 w-4" />}
            />
            <MetricCard 
              title="睡眠规律" 
              value={7.2} 
              unit="小时" 
              status="good"
              icon={<Moon className="h-4 w-4" />}
            />
          </div>
        </section>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column - Timeline & Reflection */}
          <div className="lg:col-span-2 space-y-8">
            {/* Emotional Timeline */}
            <section className="rounded-xl border border-border/50 bg-card p-6">
              <EmotionalTimeline />
            </section>

            {/* Reflection Layer */}
            <section className="rounded-xl border border-border/50 bg-card p-6">
              <h3 className="mb-4 text-sm font-medium text-foreground">反思层</h3>
              <ReflectionLayer />
            </section>
          </div>

          {/* Right Column - AI Assistant & Suggestions */}
          <div className="space-y-8">
            {/* AI Reflection Assistant */}
            <section className="rounded-xl border border-border/50 bg-card p-6">
              <AIReflectionAssistant />
            </section>

            {/* Stabilization Suggestions */}
            <section className="rounded-xl border border-border/50 bg-card p-6">
              <StabilizationSuggestions />
            </section>
          </div>
        </div>

        {/* Grounding Prompt */}
        <section className="mt-8 rounded-xl border border-calm/20 bg-calm/5 p-6 text-center">
          <p className="text-sm text-muted-foreground mb-2">今日接地提示</p>
          <p className="text-lg text-foreground/90 font-light leading-relaxed max-w-2xl mx-auto text-balance">
            "稳定不是没有波动，而是在波动中找到回归的路径。"
          </p>
        </section>

        {/* Status Bar */}
        <footer className="mt-12 flex items-center justify-between text-xs text-muted-foreground/70">
          <div className="flex items-center gap-4">
            <span>系统状态: 运行中</span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-stability animate-pulse" />
              数据同步完成
            </span>
          </div>
          <span>Equilibria v1.0 — 为人类自我调节而设计</span>
        </footer>
      </main>
    </div>
  )
}
