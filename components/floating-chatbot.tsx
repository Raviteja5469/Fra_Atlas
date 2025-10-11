"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { SendHorizonal } from "lucide-react"

export default function FloatingChatbot() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    { role: "assistant", content: "Hi! I'm your FRA OnePortal coordinator. How can I help today?" },
  ])

  const quick = ["How do I upload documents?", "Show DSS recommendations", "Where is my claimant stuck?"]

  if (pathname === "/") return null

  function send() {
    if (!input.trim()) return
    setMessages((m) => [
      ...m,
      { role: "user", content: input },
      {
        role: "assistant",
        content:
          "Thanks! I’ll check and get back with steps. Meanwhile, you can browse Analytics → Repository for a quick overview.",
      },
    ])
    setInput("")
  }

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 z-50 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg"
        >
          Chat • OnePortal
        </button>
      )}
      {open && (
        <Card className="fixed bottom-5 right-5 z-50 w-80 overflow-hidden shadow-xl">
          <div className="flex items-center justify-between bg-muted/50 px-4 py-2">
            <p className="text-sm font-semibold">OnePortal Assistant</p>
            <button className="text-xs text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
          <div className="max-h-72 space-y-2 overflow-y-auto p-3 text-sm">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "assistant" ? "justify-start" : "justify-end"}`}>
                <div
                  className={`rounded-lg px-3 py-2 ${m.role === "assistant" ? "bg-muted" : "bg-primary text-primary-foreground"}`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            <div className="flex flex-wrap gap-2 pt-2">
              {quick.map((q) => (
                <button
                  key={q}
                  className="rounded-full border px-2 py-1 text-xs text-muted-foreground hover:bg-muted"
                  onClick={() => setInput(q)}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 border-t p-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question…"
              className="flex-1 rounded-md border bg-background px-2 py-1 text-sm"
            />
            <Button size="icon" onClick={send}>
              <SendHorizonal className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      )}
    </>
  )
}
