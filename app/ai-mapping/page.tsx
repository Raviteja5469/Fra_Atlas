"use client"


import { Header } from "@/components/header"
import { AssetClassification } from "@/components/asset-classification"
import { ValidationTools } from "@/components/validation-tools"
import { ChangeDetection } from "@/components/change-detection"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Download, Share2, Map } from "lucide-react"
// import { SatelliteViewer } from "@/components/satellite-viewer"
import dynamic from "next/dynamic";

const SatelliteViewer = dynamic(() => import("@/components/satellite-viewer").then(mod => ({ default: mod.SatelliteViewer })), {
  ssr: false,
  loading: () => <div>Loading...</div>
})


// const SatelliteViewer = dynamic(() => import("@/components/satellite-viewer"), {
//   ssr: false,
// });


export default function AIMappingPage() {
  return (
    <div className="min-h-screen bg-background">

      <div className="container px-4 py-8">
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold">AI-Powered Asset Mapping</h1>
          </div>
          <p className="text-muted-foreground">
            Visualize and validate AI-detected natural and physical assets from satellite imagery
          </p>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download GeoTIFF
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Shapefile
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export CSV
          </Button>
          <Button variant="outline">
            <Share2 className="mr-2 h-4 w-4" />
            Share Analysis
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card className="h-[800px] overflow-hidden">
              <SatelliteViewer />
            </Card>
          </div>

          <div className="space-y-6">
            <AssetClassification />
            <ValidationTools />
            <ChangeDetection />
          </div>
        </div>

        <Card className="mt-6">
          <CardContent className="p-6">
            <h3 className="mb-4 text-lg font-semibold">AI Model Information</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-sm text-muted-foreground">Model Version</p>
                <p className="text-lg font-semibold">v2.3.1</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Training Dataset</p>
                <p className="text-lg font-semibold">Sentinel-2 + Bhuvan</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Overall Accuracy</p>
                <p className="text-lg font-semibold">91.2%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}