"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Lightbulb, Download, TrendingUp, AlertTriangle } from "lucide-react"

const insights = [
  {
    type: "opportunity",
    title: "High PM-KISAN Uptake Potential",
    description:
      "189 FRA beneficiaries (81%) are eligible for PM-KISAN but only 67% are currently enrolled. Targeted outreach could add 26 beneficiaries.",
    impact: "High",
    action: "Launch enrollment drive",
  },
  {
    type: "gap",
    title: "Water Access Gap",
    description:
      "Only 45% of FRA households have piped water connections despite 88% eligibility for Jal Jeevan Mission.",
    impact: "Critical",
    action: "Coordinate with Jal Shakti Ministry",
  },
  {
    type: "success",
    title: "MGNREGA Integration Success",
    description:
      "86% of eligible FRA beneficiaries are actively participating in MGNREGA, generating 18,450 person-days of employment.",
    impact: "Positive",
    action: "Document best practices",
  },
  {
    type: "risk",
    title: "Low Awareness of New Schemes",
    description: "Recent schemes like PM-KUSUM and PM-PRANAM have less than 15% awareness among FRA beneficiaries.",
    impact: "Medium",
    action: "Conduct awareness campaigns",
  },
]

export function PolicyInsights() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Lightbulb className="h-5 w-5" />
            Policy Insights & Recommendations
          </CardTitle>
          <Button size="sm" variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight, index) => (
          <div key={index} className="rounded-lg border border-border p-4">
            <div className="mb-3 flex items-start justify-between">
              <div className="flex items-center gap-2">
                {insight.type === "opportunity" && <TrendingUp className="h-5 w-5 text-green-600" />}
                {insight.type === "gap" && <AlertTriangle className="h-5 w-5 text-red-600" />}
                {insight.type === "success" && <TrendingUp className="h-5 w-5 text-blue-600" />}
                {insight.type === "risk" && <AlertTriangle className="h-5 w-5 text-yellow-600" />}
                <h4 className="font-semibold">{insight.title}</h4>
              </div>
              <Badge
                variant={
                  insight.impact === "Critical" ? "destructive" : insight.impact === "High" ? "default" : "secondary"
                }
              >
                {insight.impact}
              </Badge>
            </div>
            <p className="mb-3 text-sm text-muted-foreground">{insight.description}</p>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-primary">Recommended: {insight.action}</p>
              <Button size="sm" variant="outline">
                View Details
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
