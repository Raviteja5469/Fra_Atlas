"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Clock, CheckCircle2, AlertCircle, MessageSquare } from "lucide-react"

const mockGrievances = [
  {
    id: "GRV-2024-00123",
    subject: "Delay in title deed issuance",
    type: "Grievance",
    status: "in-progress",
    priority: "high",
    submittedBy: "Ramesh Kumar",
    location: "Rampur, Balaghat, MP",
    submittedDate: "2024-03-10",
    lastUpdate: "2024-03-18",
    assignedTo: "District Officer - Balaghat",
  },
  {
    id: "GRV-2024-00124",
    subject: "Incorrect boundary demarcation",
    type: "Complaint",
    status: "resolved",
    priority: "medium",
    submittedBy: "Sunita Devi",
    location: "Kenduguda, Koraput, OD",
    submittedDate: "2024-03-08",
    lastUpdate: "2024-03-15",
    assignedTo: "Survey Team - Koraput",
  },
  {
    id: "GRV-2024-00125",
    subject: "Request for claim status update",
    type: "Query",
    status: "pending",
    priority: "low",
    submittedBy: "Prakash Majhi",
    location: "Dindori, Dindori, MP",
    submittedDate: "2024-03-17",
    lastUpdate: "2024-03-17",
    assignedTo: "Pending Assignment",
  },
]

export function GrievanceTracker() {
  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Track your grievance by ID (e.g., GRV-2024-00123)" className="pl-9" />
            </div>
            <Button>Track Status</Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {mockGrievances.map((grievance) => (
          <Card key={grievance.id} className="transition-shadow hover:shadow-md">
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{grievance.subject}</h4>
                      {grievance.status === "resolved" ? (
                        <Badge variant="default" className="bg-green-600">
                          <CheckCircle2 className="mr-1 h-3 w-3" />
                          Resolved
                        </Badge>
                      ) : grievance.status === "in-progress" ? (
                        <Badge variant="default" className="bg-blue-600">
                          <Clock className="mr-1 h-3 w-3" />
                          In Progress
                        </Badge>
                      ) : (
                        <Badge variant="secondary">
                          <AlertCircle className="mr-1 h-3 w-3" />
                          Pending
                        </Badge>
                      )}
                      <Badge
                        variant="outline"
                        className={
                          grievance.priority === "high"
                            ? "border-red-600 text-red-600"
                            : grievance.priority === "medium"
                              ? "border-yellow-600 text-yellow-600"
                              : ""
                        }
                      >
                        {grievance.priority.toUpperCase()}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">ID: {grievance.id}</p>
                  </div>
                  <Badge variant="outline">{grievance.type}</Badge>
                </div>

                <div className="grid gap-2 text-sm md:grid-cols-2">
                  <div>
                    <span className="text-muted-foreground">Submitted by:</span>{" "}
                    <span className="font-medium">{grievance.submittedBy}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Location:</span>{" "}
                    <span className="font-medium">{grievance.location}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Submitted:</span>{" "}
                    <span className="font-medium">{grievance.submittedDate}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Last Update:</span>{" "}
                    <span className="font-medium">{grievance.lastUpdate}</span>
                  </div>
                  <div className="md:col-span-2">
                    <span className="text-muted-foreground">Assigned to:</span>{" "}
                    <span className="font-medium">{grievance.assignedTo}</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    View Updates
                  </Button>
                  <Button size="sm" variant="outline">
                    Add Comment
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
