"use client"
import { FeedbackForm } from "@/components/feedback-form"
import { GrievanceTracker } from "@/components/grievance-tracker"
import { StakeholderDirectory } from "@/components/stakeholder-directory"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Search, Users, Bell } from "lucide-react"

export default function StakeholderPage() {
  return (
    <div className="min-h-screen bg-background">

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 space-y-2">
          <h1 className="text-balance text-3xl font-bold">Stakeholder & Feedback Portal</h1>
          <p className="text-pretty text-muted-foreground">
            Submit feedback, track grievances, and connect with stakeholders across the FRA ecosystem
          </p>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">1,234</p>
                  <p className="text-xs text-muted-foreground">Total Feedback</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-600/10">
                  <Search className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">89</p>
                  <p className="text-xs text-muted-foreground">Pending Review</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600/10">
                  <Bell className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">1,089</p>
                  <p className="text-xs text-muted-foreground">Resolved</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600/10">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">456</p>
                  <p className="text-xs text-muted-foreground">Stakeholders</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="submit" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="submit">Submit Feedback</TabsTrigger>
            <TabsTrigger value="track">Track Grievances</TabsTrigger>
            <TabsTrigger value="directory">Stakeholder Directory</TabsTrigger>
          </TabsList>

          <TabsContent value="submit">
            <FeedbackForm />
          </TabsContent>

          <TabsContent value="track">
            <GrievanceTracker />
          </TabsContent>

          <TabsContent value="directory">
            <StakeholderDirectory />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
