import { Header } from "@/components/header"
import { KPIDashboard } from "@/components/kpi-dashboard"
import { TimelineTracker } from "@/components/timeline-tracker"
import { StateComparison } from "@/components/state-comparison"
import { AlertSystem } from "@/components/alert-system"
import { PerformanceTrends } from "@/components/performance-trends"
import { Button } from "@/components/ui/button"
import { Activity, Download, RefreshCw } from "lucide-react"

export default function MonitoringPage() {
  return (
    <div className="min-h-screen bg-background">

      <div className="container px-4 py-8">
        <div className="mb-8 flex items-start justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <Activity className="h-6 w-6 text-primary" />
              <h1 className="text-3xl font-bold">Monitoring & Progress Tracker</h1>
            </div>
            <p className="text-muted-foreground">Real-time KPIs and implementation progress tracking</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh Data
            </Button>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <KPIDashboard />

          <div className="grid gap-6 lg:grid-cols-2">
            <PerformanceTrends />
            <AlertSystem />
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <StateComparison />
            </div>
            <div>
              <TimelineTracker />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
