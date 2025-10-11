"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Edit, Check, X, Upload } from "lucide-react"

export function ValidationTools() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Validation & Ground Truth</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm font-medium">AI Detection Accuracy</p>
          <div className="flex items-center gap-2">
            <Badge variant="default" className="bg-green-600">
              High Confidence: 87%
            </Badge>
            <Badge variant="secondary">234 assets detected</Badge>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">Manual Editing Tools</p>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="justify-start bg-transparent">
              <Edit className="mr-2 h-4 w-4" />
              Draw Polygon
            </Button>
            <Button variant="outline" className="justify-start bg-transparent">
              <Edit className="mr-2 h-4 w-4" />
              Edit Boundary
            </Button>
            <Button variant="outline" className="justify-start bg-transparent">
              <Check className="mr-2 h-4 w-4" />
              Validate Asset
            </Button>
            <Button variant="outline" className="justify-start bg-transparent">
              <X className="mr-2 h-4 w-4" />
              Remove Asset
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">Upload Ground Truth Data</p>
          <Button variant="outline" className="w-full justify-start bg-transparent">
            <Upload className="mr-2 h-4 w-4" />
            Upload Field Survey Data
          </Button>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">Validation Notes</p>
          <Textarea placeholder="Add notes about validation or corrections..." rows={3} />
        </div>

        <div className="flex gap-2">
          <Button className="flex-1">
            <Check className="mr-2 h-4 w-4" />
            Approve All
          </Button>
          <Button variant="outline" className="flex-1 bg-transparent">
            Save Draft
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
