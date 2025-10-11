"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const monthlyData = [
  { month: "Jan", claims: 6500, granted: 5200, pending: 1300 },
  { month: "Feb", claims: 7200, granted: 5800, pending: 1400 },
  { month: "Mar", claims: 8100, granted: 6500, pending: 1600 },
  { month: "Apr", claims: 7800, granted: 6200, pending: 1600 },
  { month: "May", claims: 8500, granted: 6800, pending: 1700 },
  { month: "Jun", claims: 9200, granted: 7400, pending: 1800 },
]

const convergenceData = [
  { month: "Jan", rate: 45 },
  { month: "Feb", rate: 48 },
  { month: "Mar", rate: 52 },
  { month: "Apr", rate: 56 },
  { month: "May", rate: 61 },
  { month: "Jun", rate: 67 },
]

export function PerformanceTrends() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Performance Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="claims">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="claims">Claims Processing</TabsTrigger>
            <TabsTrigger value="convergence">CSS Convergence</TabsTrigger>
          </TabsList>

          <TabsContent value="claims" className="pt-4">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="granted"
                  stackId="1"
                  stroke="hsl(var(--chart-1))"
                  fill="hsl(var(--chart-1))"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="pending"
                  stackId="1"
                  stroke="hsl(var(--chart-2))"
                  fill="hsl(var(--chart-2))"
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </TabsContent>

          <TabsContent value="convergence" className="pt-4">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={convergenceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke="hsl(var(--chart-1))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--chart-1))", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
