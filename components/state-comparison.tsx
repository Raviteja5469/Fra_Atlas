"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const stateData = [
  {
    state: "Madhya Pradesh",
    claims: 45678,
    granted: 38234,
    pending: 7444,
    rate: 83.7,
    rank: 2,
  },
  {
    state: "Odisha",
    claims: 38456,
    granted: 34123,
    pending: 4333,
    rate: 88.7,
    rank: 1,
  },
  {
    state: "Telangana",
    claims: 28934,
    granted: 22456,
    pending: 6478,
    rate: 77.6,
    rank: 3,
  },
  {
    state: "Tripura",
    claims: 15234,
    granted: 11234,
    pending: 4000,
    rate: 73.7,
    rank: 4,
  },
]

const chartData = stateData.map((s) => ({
  name: s.state.split(" ")[0],
  Granted: s.granted,
  Pending: s.pending,
}))

export function StateComparison() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">State-wise Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)",
                }}
              />
              <Legend />
              <Bar dataKey="Granted" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Pending" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Detailed State Rankings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {stateData.map((state, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="h-8 w-8 justify-center rounded-full p-0">
                      {state.rank}
                    </Badge>
                    <div>
                      <p className="font-semibold">{state.state}</p>
                      <p className="text-xs text-muted-foreground">
                        {state.granted.toLocaleString()} / {state.claims.toLocaleString()} claims
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">{state.rate}%</p>
                    <p className="text-xs text-muted-foreground">Success Rate</p>
                  </div>
                </div>
                <Progress value={state.rate} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
