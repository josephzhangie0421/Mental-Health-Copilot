"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const prompts = [
  "是什么让你今天感到不安？",
  "你身体的哪个部位承载着这种感受？",
  "如果这种情绪可以说话，它会说什么？",
  "你现在需要什么来感到更稳定？",
]

const responses = [
  { type: "acknowledgment", text: "我听到你了。这种感受是真实的。" },
  { type: "grounding", text: "让我们回到当下。深呼吸三次。" },
  { type: "perspective", text: "这种感受会过去的，就像之前一样。" },
]

export function AIReflectionAssistant() {
  const [currentPrompt, setCurrentPrompt] = useState(0)
  const [inputValue, setInputValue] = useState("")
  const [showResponse, setShowResponse] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      setShowResponse(true)
      setTimeout(() => {
        setInputValue("")
        setShowResponse(false)
        setCurrentPrompt((prev) => (prev + 1) % prompts.length)
      }, 3000)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-foreground">AI 反思助手</h3>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-stability animate-pulse" />
          <span className="text-xs text-muted-foreground">在线</span>
        </div>
      </div>

      <div className="rounded-xl border border-border/50 bg-secondary/30 p-4">
        <p className="text-sm text-foreground/90 leading-relaxed">
          {prompts[currentPrompt]}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="在这里写下你的想法..."
          className="min-h-[80px] w-full resize-none rounded-xl border border-border/50 bg-input p-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20"
        />
        <button
          type="submit"
          disabled={!inputValue.trim()}
          className={cn(
            "rounded-lg px-4 py-2 text-sm font-medium transition-all",
            inputValue.trim()
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-secondary text-muted-foreground cursor-not-allowed"
          )}
        >
          分享反思
        </button>
      </form>

      {showResponse && (
        <div className="animate-in fade-in slide-in-from-bottom-2 rounded-xl border border-stability/30 bg-stability/5 p-4">
          <p className="text-sm text-foreground/90 leading-relaxed">
            {responses[Math.floor(Math.random() * responses.length)].text}
          </p>
        </div>
      )}

      <p className="text-xs text-muted-foreground/70 text-center">
        这不是治疗。这是一个反思的空间。
      </p>
    </div>
  )
}
