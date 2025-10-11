"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, CheckCircle2, XCircle, AlertCircle } from "lucide-react"
import { useState } from "react"

interface EligibilityResult {
  scheme: string
  status: "eligible" | "not-eligible" | "partial"
  reason: string
  action?: string
}

export function EligibilityChecker() {
  const [showResults, setShowResults] = useState(false)

  const results: EligibilityResult[] = [
    {
      scheme: "PM-KISAN",
      status: "eligible",
      reason: "All criteria met: Valid FRA title, agricultural land, Aadhaar linked",
    },
    {
      scheme: "Jal Jeevan Mission",
      status: "eligible",
      reason: "Household eligible for piped water connection",
    },
    {
      scheme: "MGNREGA",
      status: "eligible",
      reason: "Adult members available for wage employment",
    },
    {
      scheme: "PM Awas Yojana",
      status: "not-eligible",
      reason: "Household already has pucca house",
    },
    {
      scheme: "Pradhan Mantri Fasal Bima Yojana",
      status: "partial",
      reason: "Eligible but requires crop insurance enrollment",
      action: "Complete enrollment at nearest CSC",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Individual Eligibility Checker</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="beneficiary-name">Beneficiary Name</Label>
            <Input id="beneficiary-name" placeholder="Enter name..." />
          </div>

          <div className="space-y-2">
            <Label htmlFor="claim-id">FRA Claim ID</Label>
            <Input id="claim-id" placeholder="e.g., MP-BAL-2024-00234" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="village">Village</Label>
              <Select>
                <SelectTrigger id="village">
                  <SelectValue placeholder="Select village" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rampur">Rampur</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="district">District</Label>
              <Select>
                <SelectTrigger id="district">
                  <SelectValue placeholder="Select district" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="balaghat">Balaghat</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button className="w-full" onClick={() => setShowResults(true)}>
            <Search className="mr-2 h-4 w-4" />
            Check Eligibility
          </Button>
        </div>

        {showResults && (
          <div className="space-y-3 pt-4">
            <div className="flex items-center justify-between border-t border-border pt-4">
              <h4 className="font-semibold">Eligibility Results</h4>
              <Badge variant="secondary">5 schemes checked</Badge>
            </div>

            {results.map((result, index) => (
              <div key={index} className="rounded-lg border border-border p-3">
                <div className="mb-2 flex items-start justify-between">
                  <p className="font-medium">{result.scheme}</p>
                  {result.status === "eligible" ? (
                    <Badge variant="default" className="bg-green-600">
                      <CheckCircle2 className="mr-1 h-3 w-3" />
                      Eligible
                    </Badge>
                  ) : result.status === "not-eligible" ? (
                    <Badge variant="destructive">
                      <XCircle className="mr-1 h-3 w-3" />
                      Not Eligible
                    </Badge>
                  ) : (
                    <Badge variant="secondary">
                      <AlertCircle className="mr-1 h-3 w-3" />
                      Action Required
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{result.reason}</p>
                {result.action && <p className="mt-2 text-sm font-medium text-primary">Action: {result.action}</p>}
              </div>
            ))}

            <Button variant="outline" className="w-full bg-transparent">
              Download Eligibility Report
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
