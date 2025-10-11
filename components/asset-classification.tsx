"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const landUseData = [
  { name: "Forest Cover", value: 35, color: "#006400" },
  { name: "CropLand", value: 40, color: "#F096FF" },
  { name: "Water Bodies", value: 10, color: "#0064C8" },
  { name: "Homesteads", value: 5, color: "#FA0000" },
  { name: "Other", value: 10, color: "#A9A9A9" },
]

const detectedAssets = [
  { type: "Water Ponds", count: 23, icon: "💧" },
  { type: "Farm Plots", count: 156, icon: "🌾" },
  { type: "Homesteads", count: 89, icon: "🏠" },
  { type: "Roads", count: 12, icon: "🛣️" },
  { type: "Forest Patches", count: 34, icon: "🌳" },
]

export function AssetClassification() {
  return (
    // --- MODIFIED THIS LINE ---
    <div className="space-y-4 sticky top-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Land Use Classification</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={landUseData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {landUseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: "hsl(var(--background))",
                  borderColor: "hsl(var(--border))",
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          <div className="mt-4 space-y-2">
            {landUseData.map((item) => (
              <div key={item.name} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{item.name}</span>
                  <span className="font-medium">{item.value}%</span>
                </div>
                <Progress value={item.value} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Detected Infrastructure</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {detectedAssets.map((asset) => (
              <div key={asset.type} className="flex items-center justify-between rounded-lg border border-border p-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{asset.icon}</span>
                  <span className="text-sm font-medium">{asset.type}</span>
                </div>
                <span className="text-lg font-bold text-primary">{asset.count}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}