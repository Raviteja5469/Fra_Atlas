"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity } from "lucide-react"

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    memoryUsage: 0,
    renderCount: 0
  })

  useEffect(() => {
    const startTime = performance.now()
    
    // Monitor memory usage if available
    const updateMetrics = () => {
      const loadTime = performance.now() - startTime
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0
      
      setMetrics(prev => ({
        loadTime: Math.round(loadTime),
        memoryUsage: Math.round(memoryUsage / 1024 / 1024), // MB
        renderCount: prev.renderCount + 1
      }))
    }

    updateMetrics()
    const interval = setInterval(updateMetrics, 1000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Activity className="h-4 w-4" />
          Performance Monitor
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-xs text-muted-foreground">Load Time</span>
          <Badge variant="secondary" className="text-xs">
            {metrics.loadTime}ms
          </Badge>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-muted-foreground">Memory Usage</span>
          <Badge variant="secondary" className="text-xs">
            {metrics.memoryUsage}MB
          </Badge>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-muted-foreground">Renders</span>
          <Badge variant="secondary" className="text-xs">
            {metrics.renderCount}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
