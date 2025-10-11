"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, TrendingDown, CheckCircle2, AlertCircle } from "lucide-react"

const kpis = [
  {
    title: "Total Claims Processed",
    value: "89,456",
    target: "100,000",
    progress: 89.5,
    change: "+12.3%",
    trend: "up",
    status: "on-track",
  },
  {
    title: "Claims Granted",
    value: "67,234",
    target: "75,000",
    progress: 89.6,
    change: "+8.7%",
    trend: "up",
    status: "on-track",
  },
  {
    title: "Area Recognized (ha)",
    value: "234,567",
    target: "250,000",
    progress: 93.8,
    change: "+15.2%",
    trend: "up",
    status: "on-track",
  },
  {
    title: "Pending Claims",
    value: "15,678",
    target: "10,000",
    progress: 156.8,
    change: "-3.4%",
    trend: "down",
    status: "at-risk",
  },
  {
    title: "Avg. Processing Time",
    value: "45 days",
    target: "30 days",
    progress: 150,
    change: "+5 days",
    trend: "down",
    status: "at-risk",
  },
  {
    title: "CSS Convergence Rate",
    value: "67%",
    target: "80%",
    progress: 83.8,
    change: "+9.2%",
    trend: "up",
    status: "on-track",
  },
]

export function KPIDashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {kpis.map((kpi, index) => (
        <Card key={index}>
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">{kpi.title}</CardTitle>
              {kpi.status === "on-track" ? (
                <CheckCircle2 className="h-4 w-4 text-green-600" />
              ) : (
                <AlertCircle className="h-4 w-4 text-yellow-600" />
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold">{kpi.value}</p>
                <p className="text-xs text-muted-foreground">Target: {kpi.target}</p>
              </div>
              <div className="flex items-center gap-1">
                {kpi.trend === "up" ? (
                  <TrendingUp className="h-4 w-4 text-green-600" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-600" />
                )}
                <span className={`text-sm font-medium ${kpi.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                  {kpi.change}
                </span>
              </div>
            </div>
            <div className="space-y-1">
              <Progress
                value={kpi.progress > 100 ? 100 : kpi.progress}
                className={`h-2 ${kpi.status === "at-risk" ? "[&>div]:bg-yellow-600" : ""}`}
              />
              <p className="text-xs text-muted-foreground">{kpi.progress.toFixed(1)}% of target</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
