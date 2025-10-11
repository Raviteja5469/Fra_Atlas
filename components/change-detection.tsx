"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

const changes = [
  {
    category: "Forest Cover",
    change: -2.3,
    from: "1,245 ha",
    to: "1,216 ha",
    trend: "decrease",
  },
  {
    category: "Water Bodies",
    change: 15.7,
    from: "89 ha",
    to: "103 ha",
    trend: "increase",
  },
  {
    category: "Agricultural Land",
    change: 8.4,
    from: "678 ha",
    to: "735 ha",
    trend: "increase",
  },
  {
    category: "Homesteads",
    change: 0.0,
    from: "45 ha",
    to: "45 ha",
    trend: "stable",
  },
]

export function ChangeDetection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Change Detection (2015 - 2025)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {changes.map((item) => (
            <div key={item.category} className="flex items-center justify-between rounded-lg border border-border p-3">
              <div className="flex-1">
                <p className="text-sm font-medium">{item.category}</p>
                <p className="text-xs text-muted-foreground">
                  {item.from} → {item.to}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {item.trend === "increase" ? (
                  <>
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <Badge variant="default" className="bg-green-600">
                      +{item.change}%
                    </Badge>
                  </>
                ) : item.trend === "decrease" ? (
                  <>
                    <TrendingDown className="h-4 w-4 text-red-600" />
                    <Badge variant="destructive">{item.change}%</Badge>
                  </>
                ) : (
                  <>
                    <Minus className="h-4 w-4 text-muted-foreground" />
                    <Badge variant="secondary">{item.change}%</Badge>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
