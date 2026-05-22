"use client"

import { useState, useRef, useEffect } from "react"
import { useLanguage } from "@/components/language-provider"

interface Message {
  id: number
  type: "ai" | "user"
  content: string
  timestamp: string
}

const aiResponsesZh = [
  "我听到你了。这种感觉确实不容易。",
  "谢谢你愿意分享这些。你能感受到此刻身体有什么感觉吗？",
  "这让我想起你之前提到过类似的感受。那次你后来找到了什么帮助？",
  "有时候，只是把话说出来，本身就是一种释放。",
  "你提到了「疲惫」。这种疲惫更多是身体上的，还是心理上的？",
  "我注意到你今天用了「压力」这个词。想多聊聊吗？还是现在只想安静地待着？",
]

const aiResponsesEn = [
  "I hear you. That sounds like a lot to carry.",
  "Thank you for sharing. Can you feel where that sits in your body right now?",
  "That reminds me of something similar you mentioned before. What helped then?",
  "Sometimes just saying it out loud is its own kind of release.",
  "You mentioned 'tired.' Is it more physical, or more emotional?",
  "I noticed the word 'pressure' today. Would you like to explore that, or just sit here for a moment?",
]

const reflectionPromptsZh = [
  "此刻，如果你的情绪有一种颜色，会是什么颜色？",
  "今天有什么小事，让你感到一点点温暖？",
  "身体里有没有什么地方感到紧绷？",
  "如果可以对现在的自己说一句话，你会说什么？",
]

const reflectionPromptsEn = [
  "If your mood had a color right now, what would it be?",
  "What small thing brought a bit of warmth today?",
  "Is there tension anywhere in your body?",
  "If you could say one thing to yourself right now, what would it be?",
]

export function ReflectScreen() {
  const { language, t } = useLanguage()
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [hasStarted, setHasStarted] = useState(false)

  const aiResponses = language === "zh" ? aiResponsesZh : aiResponsesEn
  const prompts = language === "zh" ? reflectionPromptsZh : reflectionPromptsEn

  const initialMessage = language === "zh"
    ? "你好，雨泽。今天感觉怎么样？不需要完整的答案，只是想陪你待一会。"
    : "Hello. How are you feeling today? No need for a complete answer — just here to sit with you."

  const startConversation = () => {
    setHasStarted(true)
    setMessages([{
      id: 1,
      type: "ai",
      content: initialMessage,
      timestamp: t("刚刚", "Just now")
    }])
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      type: "user",
      content: input,
      timestamp: t("刚刚", "Just now")
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    setTimeout(() => {
      const aiMessage: Message = {
        id: messages.length + 2,
        type: "ai",
        content: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        timestamp: t("刚刚", "Just now")
      }
      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500 + Math.random() * 1000)
  }

  const usePrompt = (prompt: string) => {
    setInput(prompt)
  }

  if (!hasStarted) {
    return (
      <div className="max-w-xl mx-auto flex flex-col items-center justify-center min-h-[60vh]">
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-full bg-warmth/20 flex items-center justify-center mx-auto mb-8 animate-gentle-breathe">
            <div className="w-6 h-6 rounded-full bg-warmth/40" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-light text-foreground/90 mb-4 tracking-tight">
            {t("安静的对话", "A Quiet Conversation")}
          </h1>
          <p className="text-muted-foreground/55 text-sm font-light leading-relaxed max-w-sm mx-auto mb-10">
            {t(
              "这不是治疗，只是一个可以说话的空间。你的话不会被评判。",
              "This isn't therapy. Just a space to speak. No judgment. Just reflection."
            )}
          </p>
          <button
            onClick={startConversation}
            className="px-8 py-3.5 rounded-full bg-peach/30 border border-warmth/20 text-foreground/80 hover:bg-peach/40 hover:border-warmth/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-sm font-light"
          >
            {t("开始", "Begin")}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-xl mx-auto flex flex-col h-[calc(100vh-220px)]">
      {/* Header */}
      <section className="mb-8 shrink-0">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-3 h-3 rounded-full bg-warmth/40 animate-gentle-breathe" />
          <h1 className="text-xl font-light text-foreground/90 tracking-tight">
            {t("安静的对话", "A Quiet Conversation")}
          </h1>
        </div>
        <p className="text-muted-foreground/50 text-sm font-light leading-relaxed">
          {t("这不是治疗，只是一个可以说话的空间。", "Not therapy. Just a space to speak.")}
        </p>
      </section>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-6 mb-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-500`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-6 py-5 transition-all duration-300 ${
                message.type === "user"
                  ? "bg-primary/10 text-foreground/85 rounded-br-lg hover:bg-primary/15"
                  : "bg-card border border-border/40 text-foreground/75 rounded-bl-lg hover:border-border/50"
              }`}
            >
              <p className="text-sm font-light leading-relaxed">{message.content}</p>
              <p className={`text-xs mt-3 ${
                message.type === "user" ? "text-primary/40" : "text-muted-foreground/35"
              }`}>
                {message.timestamp}
              </p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start animate-in fade-in duration-300">
            <div className="bg-card border border-border/40 rounded-2xl rounded-bl-lg px-6 py-5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30 animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30 animate-pulse" style={{ animationDelay: "0.2s" }} />
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30 animate-pulse" style={{ animationDelay: "0.4s" }} />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Reflection prompts */}
      <div className="shrink-0 mb-5">
        <p className="text-xs text-muted-foreground/40 mb-3 font-light">
          {t("也许可以从这里开始...", "Maybe start here...")}
        </p>
        <div className="flex flex-wrap gap-2">
          {prompts.slice(0, 2).map((prompt, i) => (
            <button
              key={i}
              onClick={() => usePrompt(prompt)}
              className="text-xs px-4 py-2.5 rounded-full bg-secondary/50 border border-border/30 text-muted-foreground/60 hover:bg-secondary/70 hover:text-muted-foreground/80 hover:border-border/50 transition-all duration-300"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="shrink-0 rounded-2xl bg-card border border-border/50 p-5 hover:border-border/60 transition-all duration-300">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault()
              sendMessage()
            }
          }}
          placeholder={t("想说什么都可以...", "Say whatever comes to mind...")}
          className="w-full bg-transparent text-foreground/90 text-sm font-light leading-relaxed resize-none focus:outline-none placeholder:text-muted-foreground/35 min-h-[70px]"
        />
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/30">
          <span className="text-xs text-muted-foreground/35 font-light">
            {t("按 Enter 发送", "Press Enter to send")}
          </span>
          {input.trim() && (
            <button
              onClick={sendMessage}
              className="text-sm text-primary/70 hover:text-primary transition-all duration-300 font-light px-5 py-2 rounded-full bg-primary/5 hover:bg-primary/10 hover:scale-[1.02] active:scale-[0.98]"
            >
              {t("发送", "Send")}
            </button>
          )}
        </div>
      </div>

      {/* Note */}
      <p className="text-center text-xs text-muted-foreground/30 mt-5 font-light">
        {t(
          "对话内容只保存在这里，不会被分析或分享",
          "Your words stay here. Never analyzed. Never shared."
        )}
      </p>
    </div>
  )
}
