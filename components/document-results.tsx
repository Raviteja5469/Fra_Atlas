"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { FileText, Eye, Download, Edit, CheckCircle2, AlertCircle } from "lucide-react"
import { ExtractedDataViewer } from "./extracted-data-viewer"

const mockResults = [
  {
    id: "MP-BAL-2024-00234",
    name: "Ramesh Kumar",
    village: "Rampur",
    district: "Balaghat",
    state: "Madhya Pradesh",
    area: "3.45 ha",
    claimType: "IFR",
    status: "validated",
    confidence: 92,
    uploadDate: "2024-03-15",
  },
  {
    id: "MP-BAL-2024-00235",
    name: "Sunita Devi",
    village: "Rampur",
    district: "Balaghat",
    state: "Madhya Pradesh",
    area: "2.80 ha",
    claimType: "CFR",
    status: "pending",
    confidence: 78,
    uploadDate: "2024-03-14",
  },
  {
    id: "OD-KOR-2024-00156",
    name: "Prakash Majhi",
    village: "Kenduguda",
    district: "Koraput",
    state: "Odisha",
    area: "4.20 ha",
    claimType: "IFR",
    status: "flagged",
    confidence: 65,
    uploadDate: "2024-03-13",
  },
]

export function DocumentResults() {
  const [selectedDocument, setSelectedDocument] = useState<(typeof mockResults)[0] | null>(null)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">Showing {mockResults.length} results</p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export All (CSV)
          </Button>
          <Button variant="outline" size="sm">
            Export GeoJSON
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        {mockResults.map((result) => (
          <Card key={result.id} className="transition-shadow hover:shadow-md">
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">{result.name}</h4>
                        {result.status === "validated" ? (
                          <Badge variant="default" className="bg-green-600">
                            <CheckCircle2 className="mr-1 h-3 w-3" />
                            Validated
                          </Badge>
                        ) : result.status === "pending" ? (
                          <Badge variant="secondary">Pending Review</Badge>
                        ) : (
                          <Badge variant="destructive">
                            <AlertCircle className="mr-1 h-3 w-3" />
                            Flagged
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">Claim ID: {result.id}</p>
                    </div>
                    <Badge variant="outline">AI: {result.confidence}%</Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm md:grid-cols-4">
                    <div>
                      <span className="text-muted-foreground">Village:</span>{" "}
                      <span className="font-medium">{result.village}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">District:</span>{" "}
                      <span className="font-medium">{result.district}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Area:</span>{" "}
                      <span className="font-medium">{result.area}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Type:</span>{" "}
                      <span className="font-medium">{result.claimType}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" onClick={() => setSelectedDocument(result)}>
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedDocument} onOpenChange={(open) => !open && setSelectedDocument(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Document Details - {selectedDocument?.name}</DialogTitle>
          </DialogHeader>
          {selectedDocument && <ExtractedDataViewer overallConfidence={selectedDocument.confidence} />}
        </DialogContent>
      </Dialog>
    </div>
  )
}
