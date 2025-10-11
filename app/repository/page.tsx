import { Header } from "@/components/header"
import { UploadZone } from "@/components/upload-zone"
import { DocumentSearch } from "@/components/document-search"
import { DocumentResults } from "@/components/document-results"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Database, Upload, Search, BarChart3 } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function RepositoryPage() {
  return (
    <div className="min-h-screen bg-background">

      <div className="container px-4 py-8">
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2">
            <Database className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold">FRA OnePortal — Data Repository</h1>
          </div>
          <p className="text-muted-foreground">
            Central archive for legacy and current FRA records with AI-powered OCR and data extraction
          </p>
        </div>

        <Tabs defaultValue="upload" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="upload" className="gap-2">
              <Upload className="h-4 w-4" />
              Upload
            </TabsTrigger>
            <TabsTrigger value="search" className="gap-2">
              <Search className="h-4 w-4" />
              Search
            </TabsTrigger>
            <TabsTrigger value="analytics" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <UploadZone />
              </div>
              <div className="grid gap-4">
                <Card>
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground">Documents Uploaded</p>
                    <div className="mt-2 flex items-end justify-between">
                      <p className="text-3xl font-bold">2,430</p>
                      <span className="text-xs text-green-600">↑ 180 today</span>
                    </div>
                    <Progress value={72} className="mt-3" />
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground">Documents Processed</p>
                    <div className="mt-2 flex items-end justify-between">
                      <p className="text-3xl font-bold">1,980</p>
                      <span className="text-xs text-blue-600">AI pipeline</span>
                    </div>
                    <Progress value={56} className="mt-3" />
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground">Documents Completed</p>
                    <div className="mt-2 flex items-end justify-between">
                      <p className="text-3xl font-bold">1,522</p>
                      <span className="text-xs text-muted-foreground">validated</span>
                    </div>
                    <Progress value={44} className="mt-3" />
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold">How It Works</h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    "⚙️ Automated",
                    "🔒 Secure",
                    "💻 Works Locally",
                    "🤖 AI Agent",
                    "🧠 Detects Duplicate Documents",
                    "⚡ Fastest Processing (2000 docs/hour)",
                  ].map((label) => (
                    <div key={label} className="rounded-lg border bg-card px-4 py-3 text-sm">
                      {label}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="search" className="space-y-6">
            <DocumentSearch />
            <DocumentResults />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">Total Documents</p>
                  <p className="mt-2 text-3xl font-bold">12,456</p>
                  <p className="mt-1 text-xs text-green-600">↑ 234 this month</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">Validated Records</p>
                  <p className="mt-2 text-3xl font-bold">9,823</p>
                  <p className="mt-1 text-xs text-muted-foreground">78.9% validation rate</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">Avg. Confidence</p>
                  <p className="mt-2 text-3xl font-bold">87.3%</p>
                  <p className="mt-1 text-xs text-green-600">↑ 2.1% improvement</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold">Processing Status</h3>
                <div className="space-y-3">
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>Validated</span>
                      <span className="font-medium">9,823 (78.9%)</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <div className="h-full bg-green-600" style={{ width: "78.9%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>Pending Review</span>
                      <span className="font-medium">1,892 (15.2%)</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <div className="h-full bg-yellow-600" style={{ width: "15.2%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>Flagged for Review</span>
                      <span className="font-medium">741 (5.9%)</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <div className="h-full bg-red-600" style={{ width: "5.9%" }} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
