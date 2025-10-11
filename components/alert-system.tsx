"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, AlertCircle, Info, Bell } from "lucide-react"

const alerts = [
  {
    type: "critical",
    title: "Processing Delay in Balaghat District",
    message: "234 claims pending for over 60 days. Immediate action required.",
    time: "2 hours ago",
    action: "Review Claims",
  },
  {
    type: "warning",
    title: "Low CSS Enrollment Rate",
    message: "PM-KISAN enrollment at 45% in Koraput district, below 60% target.",
    time: "5 hours ago",
    action: "Launch Campaign",
  },
  {
    type: "info",
    title: "New Scheme Guidelines Released",
    message: "Updated guidelines for PM-KUSUM scheme integration with FRA.",
    time: "1 day ago",
    action: "View Guidelines",
  },
  {
    type: "warning",
    title: "Data Quality Issues",
    message: "156 records flagged for incomplete GPS coordinates in recent uploads.",
    time: "2 days ago",
    action: "Review Data",
  },
]

export function AlertSystem() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Bell className="h-5 w-5" />
            Alerts & Notifications
          </CardTitle>
          <Badge variant="destructive">4 Active</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className={`rounded-lg border p-4 ${
                alert.type === "critical"
                  ? "border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/20"
                  : alert.type === "warning"
                    ? "border-yellow-200 bg-yellow-50 dark:border-yellow-900 dark:bg-yellow-950/20"
                    : "border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/20"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  {alert.type === "critical" ? (
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  ) : alert.type === "warning" ? (
                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                  ) : (
                    <Info className="h-5 w-5 text-blue-600" />
                  )}
                </div>
                <div className="flex-1 space-y-2">
                  <div>
                    <h4 className="font-semibold">{alert.title}</h4>
                    <p className="text-sm text-muted-foreground">{alert.message}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{alert.time}</p>
                  </div>
                  <Button size="sm" variant="outline">
                    {alert.action}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
