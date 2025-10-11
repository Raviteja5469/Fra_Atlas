"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle, Clock } from "lucide-react"

const milestones = [
  {
    phase: "Phase 1: Data Collection",
    status: "completed",
    date: "Jan 2024 - Mar 2024",
    progress: 100,
    tasks: [
      { name: "Legacy data digitization", completed: true },
      { name: "Field surveys", completed: true },
      { name: "GIS mapping", completed: true },
    ],
  },
  {
    phase: "Phase 2: Claim Processing",
    status: "in-progress",
    date: "Apr 2024 - Jun 2024",
    progress: 67,
    tasks: [
      { name: "Claim verification", completed: true },
      { name: "Committee reviews", completed: true },
      { name: "Title distribution", completed: false },
    ],
  },
  {
    phase: "Phase 3: CSS Integration",
    status: "in-progress",
    date: "Jul 2024 - Sep 2024",
    progress: 45,
    tasks: [
      { name: "Scheme mapping", completed: true },
      { name: "Beneficiary enrollment", completed: false },
      { name: "Fund disbursement", completed: false },
    ],
  },
  {
    phase: "Phase 4: Monitoring & Evaluation",
    status: "upcoming",
    date: "Oct 2024 - Dec 2024",
    progress: 0,
    tasks: [
      { name: "Impact assessment", completed: false },
      { name: "Feedback collection", completed: false },
      { name: "Report generation", completed: false },
    ],
  },
]

export function TimelineTracker() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Implementation Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative">
              {index < milestones.length - 1 && <div className="absolute left-4 top-10 h-full w-0.5 bg-border" />}
              <div className="flex gap-4">
                <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-border bg-background">
                  {milestone.status === "completed" ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  ) : milestone.status === "in-progress" ? (
                    <Clock className="h-5 w-5 text-primary" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>

                <div className="flex-1 space-y-3 pb-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold">{milestone.phase}</h4>
                      <p className="text-sm text-muted-foreground">{milestone.date}</p>
                    </div>
                    <Badge
                      variant={
                        milestone.status === "completed"
                          ? "default"
                          : milestone.status === "in-progress"
                            ? "secondary"
                            : "outline"
                      }
                      className={milestone.status === "completed" ? "bg-green-600" : ""}
                    >
                      {milestone.status === "completed"
                        ? "Completed"
                        : milestone.status === "in-progress"
                          ? "In Progress"
                          : "Upcoming"}
                    </Badge>
                  </div>

                  {milestone.status !== "upcoming" && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{milestone.progress}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-muted">
                        <div className="h-full bg-primary transition-all" style={{ width: `${milestone.progress}%` }} />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    {milestone.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex items-center gap-2 text-sm">
                        {task.completed ? (
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        ) : (
                          <Circle className="h-4 w-4 text-muted-foreground" />
                        )}
                        <span className={task.completed ? "text-muted-foreground line-through" : ""}>{task.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
