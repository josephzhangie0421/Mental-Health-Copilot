"use client"

import { NavigationProvider, Navigation, useNavigation } from "@/components/navigation"
import { HomeScreen } from "@/components/screens/home-screen"
import { TimelineScreen } from "@/components/screens/timeline-screen"
import { ReflectScreen } from "@/components/screens/reflect-screen"
import { PatternsScreen } from "@/components/screens/patterns-screen"
import { GroundScreen } from "@/components/screens/ground-screen"

function ScreenContent() {
  const { currentScreen, isTransitioning } = useNavigation()

  const screens = {
    home: <HomeScreen />,
    timeline: <TimelineScreen />,
    reflect: <ReflectScreen />,
    patterns: <PatternsScreen />,
    ground: <GroundScreen />,
  }

  return (
    <div
      className={`transition-all duration-300 ${
        isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
      }`}
    >
      {screens[currentScreen]}
    </div>
  )
}

export default function EquilibriaApp() {
  return (
    <NavigationProvider>
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Washi paper texture overlay */}
        <div className="fixed inset-0 paper-texture pointer-events-none" />

        {/* Warm ambient glows */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full animate-gentle-breathe"
            style={{
              background:
                "radial-gradient(circle, oklch(0.88 0.10 65 / 0.15) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-[-15%] left-[-10%] w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] rounded-full animate-gentle-breathe"
            style={{
              background:
                "radial-gradient(circle, oklch(0.85 0.08 55 / 0.12) 0%, transparent 70%)",
              animationDelay: "5s",
            }}
          />
        </div>

        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Header */}
          <header className="px-6 py-8 sm:px-10 lg:px-16">
            <div className="max-w-xl mx-auto flex items-center justify-between">
              <span className="text-sm text-muted-foreground/60 tracking-widest font-light">
                equilibria
              </span>
              <div className="h-8 w-8 rounded-full bg-peach/40 flex items-center justify-center text-sm text-clay/80 font-light">
                雨
              </div>
            </div>
          </header>

          {/* Main content */}
          <main className="flex-1 px-6 sm:px-10 lg:px-16 py-6 pb-32">
            <ScreenContent />
          </main>

          {/* Footer */}
          <footer className="px-6 py-8 sm:px-10 lg:px-16 pb-28">
            <div className="max-w-xl mx-auto text-center">
              <p className="text-xs text-muted-foreground/25 tracking-widest font-light">
                为人类自我调节而设计
              </p>
            </div>
          </footer>

          {/* Navigation */}
          <Navigation />
        </div>
      </div>
    </NavigationProvider>
  )
}
