"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, IndianRupee } from "lucide-react"
import { useState } from "react"

export function ImpactSimulator() {
  const [coverage, setCoverage] = useState(75)
  const [budget, setBudget] = useState(50)

  const calculateImpact = () => {
    const beneficiaries = Math.round((234 * coverage) / 100)
    const totalBudget = (budget * 10).toFixed(1)
    const perCapita = ((budget * 10 * 100000) / beneficiaries).toFixed(0)

    return { beneficiaries, totalBudget, perCapita }
  }

  const impact = calculateImpact()

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Impact Simulator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Target Coverage</Label>
              <Badge variant="secondary">{coverage}%</Badge>
            </div>
            <Slider value={[coverage]} onValueChange={(v) => setCoverage(v[0])} max={100} step={5} />
            <p className="text-xs text-muted-foreground">Percentage of eligible beneficiaries to target</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Budget Allocation</Label>
              <Badge variant="secondary">₹{budget} Lakhs</Badge>
            </div>
            <Slider value={[budget]} onValueChange={(v) => setBudget(v[0])} max={100} step={5} />
            <p className="text-xs text-muted-foreground">Total budget for scheme implementation</p>
          </div>
        </div>

        <div className="space-y-3 rounded-lg border border-border bg-muted/30 p-4">
          <h4 className="font-semibold">Projected Impact</h4>

          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-lg bg-background p-3">
              <div className="mb-1 flex items-center gap-2 text-muted-foreground">
                <Users className="h-4 w-4" />
                <span className="text-xs">Beneficiaries</span>
              </div>
              <p className="text-2xl font-bold">{impact.beneficiaries}</p>
              <p className="text-xs text-muted-foreground">households reached</p>
            </div>

            <div className="rounded-lg bg-background p-3">
              <div className="mb-1 flex items-center gap-2 text-muted-foreground">
                <IndianRupee className="h-4 w-4" />
                <span className="text-xs">Total Budget</span>
              </div>
              <p className="text-2xl font-bold">₹{impact.totalBudget}L</p>
              <p className="text-xs text-muted-foreground">allocated funds</p>
            </div>

            <div className="rounded-lg bg-background p-3">
              <div className="mb-1 flex items-center gap-2 text-muted-foreground">
                <TrendingUp className="h-4 w-4" />
                <span className="text-xs">Per Capita</span>
              </div>
              <p className="text-2xl font-bold">₹{impact.perCapita}</p>
              <p className="text-xs text-muted-foreground">per household</p>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Income Increase</span>
              <span className="font-semibold text-green-600">+18.5%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Poverty Reduction</span>
              <span className="font-semibold text-green-600">-12.3%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Employment Days</span>
              <span className="font-semibold text-green-600">+2,340 days</span>
            </div>
          </div>
        </div>

        <Button className="w-full">Generate Implementation Plan</Button>
      </CardContent>
    </Card>
  )
}
