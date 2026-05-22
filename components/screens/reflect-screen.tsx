"use client"

import { useState, useRef, useEffect } from "react"

interface Message {
  id: number
  type: "ai" | "user"
  content: string
  timestamp: string
}

const initialMessages: Message[] = [
  {
    id: 1,
    type: "ai",
    content: "你好，雨泽。今天感觉怎么样？不需要完整的答案，只是想陪你待一会。",
    timestamp: "刚刚"
  }
]

const aiResponses = [
  "我听到你了。这种感觉确实不容易。",
  "谢谢你愿意分享这些。你能感受到此刻身体有什么感觉吗？",
  "这让我想起你之前提到过类似的感受。那次你后来找到了什么帮助？",
  "有时候，只是把话说出来，本身就是一种释放。",
  "你提到了「疲惫」。这种疲惫更多是身体上的，还是心理上的？",
  "我注意到你今天用了「压力」这个词。想多聊聊吗？还是现在只想安静地待着？",
]

const reflectionPrompts = [
  "此刻，如果你的情绪有一种颜色，会是什么颜色？",
  "今天有什么小事，让你感到一点点温暖？",
  "身体里有没有什么地方感到紧绷？",
  "如果可以对现在的自己说一句话，你会说什么？",
]

export function ReflectScreen() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

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
      timestamp: "刚刚"
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: messages.length + 2,
        type: "ai",
        content: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        timestamp: "刚刚"
      }
      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500 + Math.random() * 1000)
  }

  const usePrompt = (prompt: string) => {
    setInput(prompt)
  }

  return (
    <div className="max-w-xl mx-auto flex flex-col h-[calc(100vh-200px)]">
      {/* Header */}
      <section className="mb-6 shrink-0">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-3 h-3 rounded-full bg-warmth/40 animate-gentle-breathe" />
          <h1 className="text-xl font-light text-foreground/90">安静的对话</h1>
        </div>
        <p className="text-muted-foreground/50 text-sm font-light leading-relaxed">
          这不是治疗，只是一个可以说话的空间。
        </p>
      </section>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-5 mb-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-5 py-4 ${
                message.type === "user"
                  ? "bg-primary/10 text-foreground/85 rounded-br-md"
                  : "bg-card border border-border/40 text-foreground/75 rounded-bl-md"
              }`}
            >
              <p className="text-sm font-light leading-relaxed">{message.content}</p>
              <p className={`text-xs mt-2 ${
                message.type === "user" ? "text-primary/40" : "text-muted-foreground/35"
              }`}>
                {message.timestamp}
              </p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-card border border-border/40 rounded-2xl rounded-bl-md px-5 py-4">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 animate-pulse" />
                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 animate-pulse" style={{ animationDelay: "0.2s" }} />
                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 animate-pulse" style={{ animationDelay: "0.4s" }} />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Reflection prompts */}
      <div className="shrink-0 mb-4">
        <p className="text-xs text-muted-foreground/40 mb-3 font-light">也许可以从这里开始...</p>
        <div className="flex flex-wrap gap-2">
          {reflectionPrompts.slice(0, 2).map((prompt, i) => (
            <button
              key={i}
              onClick={() => usePrompt(prompt)}
              className="text-xs px-3 py-2 rounded-full bg-secondary/50 border border-border/30 text-muted-foreground/60 hover:bg-secondary hover:text-muted-foreground/80 transition-all duration-200"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="shrink-0 rounded-2xl bg-card border border-border/50 p-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault()
              sendMessage()
            }
          }}
          placeholder="想说什么都可以..."
          className="w-full bg-transparent text-foreground/90 text-sm font-light leading-relaxed resize-none focus:outline-none placeholder:text-muted-foreground/35 min-h-[60px]"
        />
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/30">
          <span className="text-xs text-muted-foreground/35">
            按 Enter 发送
          </span>
          {input.trim() && (
            <button
              onClick={sendMessage}
              className="text-sm text-primary/70 hover:text-primary transition-colors font-light px-4 py-1.5 rounded-full bg-primary/5 hover:bg-primary/10"
            >
              发送
            </button>
          )}
        </div>
      </div>

      {/* Note */}
      <p className="text-center text-xs text-muted-foreground/30 mt-4 font-light">
        对话内容只保存在这里，不会被分析或分享
      </p>
    </div>
  )
}
