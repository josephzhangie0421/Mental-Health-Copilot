"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Screen = "home" | "timeline" | "reflect" | "patterns" | "ground"

interface NavigationContextType {
  currentScreen: Screen
  navigate: (screen: Screen) => void
  isTransitioning: boolean
}

const NavigationContext = createContext<NavigationContextType | null>(null)

export function useNavigation() {
  const context = useContext(NavigationContext)
  if (!context) throw new Error("useNavigation must be used within NavigationProvider")
  return context
}

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home")
  const [isTransitioning, setIsTransitioning] = useState(false)

  const navigate = (screen: Screen) => {
    if (screen === currentScreen) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentScreen(screen)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 300)
  }

  return (
    <NavigationContext.Provider value={{ currentScreen, navigate, isTransitioning }}>
      {children}
    </NavigationContext.Provider>
  )
}

const navItems: { id: Screen; label: string }[] = [
  { id: "home", label: "此刻" },
  { id: "timeline", label: "记忆" },
  { id: "reflect", label: "对话" },
  { id: "patterns", label: "涟漪" },
  { id: "ground", label: "着陆" },
]

export function Navigation() {
  const { currentScreen, navigate } = useNavigation()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 pb-safe">
      <div className="mx-4 mb-4 sm:mx-auto sm:max-w-md">
        <div className="flex items-center justify-around gap-1 px-2 py-3 rounded-2xl bg-card/90 backdrop-blur-lg border border-border/40 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className={`relative px-4 py-2 rounded-xl text-sm font-light transition-all duration-300 ${
                currentScreen === item.id
                  ? "text-foreground/90 bg-peach/30"
                  : "text-muted-foreground/50 hover:text-muted-foreground/70 hover:bg-secondary/50"
              }`}
            >
              {item.label}
              {currentScreen === item.id && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-warmth/60" />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
