"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Sparkles, ExternalLink, CheckCircle2 } from "lucide-react"

const recommendations = [
  {
    scheme: "PM-KISAN",
    ministry: "Ministry of Agriculture",
    match: 95,
    eligible: 189,
    total: 234,
    benefits: "₹6,000/year direct income support",
    requirements: ["Valid FRA title", "Agricultural land ownership", "Aadhaar linkage"],
    status: "high-priority",
  },
  {
    scheme: "Jal Jeevan Mission",
    ministry: "Ministry of Jal Shakti",
    match: 88,
    eligible: 156,
    total: 234,
    benefits: "Piped water connection to every household",
    requirements: ["FRA title holder", "Household in rural area", "No existing connection"],
    status: "recommended",
  },
  {
    scheme: "MGNREGA",
    ministry: "Ministry of Rural Development",
    match: 92,
    eligible: 201,
    total: 234,
    benefits: "100 days guaranteed wage employment",
    requirements: ["Adult household member", "Rural residence", "Job card"],
    status: "high-priority",
  },
  {
    scheme: "PM Awas Yojana - Gramin",
    ministry: "Ministry of Rural Development",
    match: 76,
    eligible: 89,
    total: 234,
    benefits: "₹1.2 lakh assistance for pucca house",
    requirements: ["Houseless or kutcha house", "Below poverty line", "FRA beneficiary"],
    status: "recommended",
  },
]

export function SchemeRecommender() {
  return (
    <div className="space-y-4">
      <Card className="border-primary/50 bg-primary/5">
        <CardContent className="flex items-start gap-4 p-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="mb-1 font-semibold">AI-Powered Recommendations</h3>
            <p className="text-sm text-muted-foreground">
              Based on FRA data from Rampur village, we've identified {recommendations.length} high-impact schemes with
              a total of 635 eligible beneficiaries.
            </p>
          </div>
        </CardContent>
      </Card>

      {recommendations.map((rec, index) => (
        <Card key={index} className="transition-shadow hover:shadow-md">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <CardTitle className="text-lg">{rec.scheme}</CardTitle>
                  {rec.status === "high-priority" && (
                    <Badge variant="default" className="bg-green-600">
                      High Priority
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{rec.ministry}</p>
              </div>
              <Badge variant="outline" className="text-lg font-bold">
                {rec.match}% Match
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Eligible Beneficiaries</span>
                <span className="font-semibold">
                  {rec.eligible} of {rec.total}
                </span>
              </div>
              <Progress value={(rec.eligible / rec.total) * 100} className="h-2" />
            </div>

            <div className="rounded-lg bg-muted/50 p-3">
              <p className="text-sm font-medium text-green-700">{rec.benefits}</p>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium">Key Requirements</p>
              <ul className="space-y-1">
                {rec.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-2">
              <Button className="flex-1">View Eligible List</Button>
              <Button variant="outline" className="flex-1 bg-transparent">
                <ExternalLink className="mr-2 h-4 w-4" />
                Scheme Details
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
