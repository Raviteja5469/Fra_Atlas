import { Header } from "@/components/header"
import { SchemeRecommender } from "@/components/scheme-recommender"
import { EligibilityChecker } from "@/components/eligibility-checker"
import { ImpactSimulator } from "@/components/impact-simulator"
import { PolicyInsights } from "@/components/policy-insights"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Target, TrendingUp } from "lucide-react"
import ClaimantsList from "@/components/claimants-list"

export default function DSSPage() {
  return (
    <div className="min-h-screen bg-background">

      <div className="container px-4 py-8">
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold">Decision Support System</h1>
          </div>
          <p className="text-muted-foreground">
            AI-powered recommendations for CSS scheme convergence and policy planning
          </p>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">635</p>
                <p className="text-sm text-muted-foreground">Total Eligible Beneficiaries</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Recommended Schemes</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">89%</p>
                <p className="text-sm text-muted-foreground">Avg. Match Score</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SchemeRecommender />
          </div>
          <div className="space-y-6">
            <EligibilityChecker />
            <ImpactSimulator />
          </div>
        </div>

        <div className="mt-6">
          <ClaimantsList />
        </div>

        <div className="mt-6">
          <PolicyInsights />
        </div>
      </div>
    </div>
  )
}
