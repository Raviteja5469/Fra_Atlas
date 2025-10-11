"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, AlertCircle, Edit, Download } from "lucide-react"

interface ExtractedField {
  label: string
  value: string
  confidence: number
  status: "high" | "medium" | "low"
}

interface ExtractedDataViewerProps {
  data?: ExtractedField[]
  overallConfidence?: number
  // Allows hiding the header row when embedded inside another titled container (e.g., Dialog)
  showHeader?: boolean
  // Toggle footer action buttons when used read-only in details view
  showActions?: boolean
}

const defaultData: ExtractedField[] = [
  { label: "Patta Holder Name", value: "Ramesh Kumar", confidence: 98, status: "high" },
  { label: "Village", value: "Rampur", confidence: 95, status: "high" },
  { label: "District", value: "Balaghat", confidence: 97, status: "high" },
  { label: "State", value: "Madhya Pradesh", confidence: 99, status: "high" },
  { label: "Claim ID", value: "MP-BAL-2024-00234", confidence: 92, status: "high" },
  { label: "Area (hectares)", value: "3.45", confidence: 78, status: "medium" },
  { label: "Claim Type", value: "IFR", confidence: 88, status: "medium" },
  { label: "Grant Date", value: "15/03/2024", confidence: 65, status: "low" },
]

export function ExtractedDataViewer({
  data = defaultData,
  overallConfidence = 87,
  showHeader = true,
  showActions = true,
}: ExtractedDataViewerProps) {
  return (
    <div className="space-y-4">
      {/* Header can be hidden in embedded contexts like the View Details dialog */}
      {showHeader && (
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Extracted Data</h3>
          <Badge variant="secondary">AI Confidence: {overallConfidence}%</Badge>
        </div>
      )}

      <div className="grid gap-3">
        {data.map((field, index) => (
          <div
            key={index}
            className="flex items-start justify-between rounded-lg border border-border p-3 transition-colors hover:bg-muted/50"
          >
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium">{field.label}</p>
                {field.status === "high" ? (
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                ) : field.status === "low" ? (
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                ) : null}
              </div>
              <p className="text-sm text-muted-foreground">{field.value}</p>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-24 overflow-hidden rounded-full bg-muted">
                  <div
                    className={`h-full ${
                      field.status === "high"
                        ? "bg-green-600"
                        : field.status === "medium"
                          ? "bg-yellow-600"
                          : "bg-red-600"
                    }`}
                    style={{ width: `${field.confidence}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground">{field.confidence}%</span>
              </div>
            </div>
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <Edit className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>

      {/* Footer actions can be disabled in read-only detail views */}
      {showActions && (
        <div className="flex gap-2 pt-4">
          <Button className="flex-1">Validate & Save</Button>
          <Button variant="outline" className="flex-1 bg-transparent">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      )}
    </div>
  )
}
