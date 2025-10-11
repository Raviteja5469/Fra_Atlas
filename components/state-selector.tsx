"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const states = [
  { name: "Madhya Pradesh", code: "MP", claims: "45,234", area: "2.3M ha", color: "bg-chart-1" },
  { name: "Odisha", code: "OD", claims: "38,567", area: "1.8M ha", color: "bg-chart-2" },
  { name: "Telangana", code: "TG", claims: "22,891", area: "1.2M ha", color: "bg-chart-3" },
  { name: "Tripura", code: "TR", claims: "15,432", area: "0.8M ha", color: "bg-chart-4" },
]

export function StateSelector() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">States Covered</h3>
          <Badge variant="secondary">{states.length} Active</Badge>
        </div>

        {/* Smooth Infinite Loop */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6 whitespace-nowrap"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ width: "max-content" }}
          >
            {/* Duplicate twice for perfect looping */}
            {[...states, ...states].map((state, index) => (
              <div
                key={index}
                className="group relative min-w-[220px] overflow-hidden rounded-xl border border-border bg-card p-5 text-left transition-all hover:border-primary hover:shadow-lg"
              >
                <div className={`absolute right-0 top-0 h-full w-1 ${state.color}`} />
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground">{state.code}</span>
                  <svg
                    className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <h4 className="mb-3 text-sm font-semibold">{state.name}</h4>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Claims</span>
                    <span className="font-medium">{state.claims}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Area</span>
                    <span className="font-medium">{state.area}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </CardContent>
    </Card>
  )
}
