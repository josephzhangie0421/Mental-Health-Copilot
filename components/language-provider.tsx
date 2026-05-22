"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "zh" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (zh: string, en: string) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used within LanguageProvider")
  return context
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh")

  const t = (zh: string, en: string) => (language === "zh" ? zh : en)

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === "zh" ? "en" : "zh")}
      className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/40 border border-border/30 hover:bg-secondary/60 hover:border-border/50 transition-all duration-300"
      aria-label="Toggle language"
    >
      <span
        className={`text-xs transition-all duration-300 ${
          language === "zh"
            ? "text-foreground/70 font-medium"
            : "text-muted-foreground/50"
        }`}
      >
        中文
      </span>
      <span className="text-muted-foreground/30">/</span>
      <span
        className={`text-xs transition-all duration-300 ${
          language === "en"
            ? "text-foreground/70 font-medium"
            : "text-muted-foreground/50"
        }`}
      >
        EN
      </span>
    </button>
  )
}
