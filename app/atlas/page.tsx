"use client"

import { Header } from "@/components/header"
import { MapLayerControl } from "@/components/map-layer-control"
import { MapFilters } from "@/components/map-filters"
import { MapBasemapSelector } from "@/components/map-basemap-selector"
import { MapAnalytics } from "@/components/map-analytics"
import { MapLegend } from "@/components/map-legend"
import { LayerInfo } from "@/components/layer-info"
import { MapLayerProvider } from "@/contexts/MapLayerContext"
import dynamic from "next/dynamic"

import { MapLoadingFallback } from "@/components/map-loading-fallback"

// Dynamically import MapViewer with SSR disabled to prevent window is not defined error
const MapViewer = dynamic(() => import("@/components/map-viewer").then(mod => ({ default: mod.MapViewer })), {
  ssr: false,
  loading: () => <MapLoadingFallback />
})

export default function AtlasPage() {
  return (
    <MapLayerProvider>
      <div className="flex h-screen flex-col bg-background">

        <div className="flex flex-1 overflow-hidden">
          {/* Left Sidebar */}
          <aside className="w-80 overflow-y-auto border-r border-border bg-background p-4">
            <div className="space-y-4">
              <div>
                <h1 className="mb-1 text-2xl font-bold">FRA Atlas</h1>
                <p className="text-sm text-muted-foreground">Interactive WebGIS Viewer</p>
              </div>

              <MapFilters />
              <MapLayerControl />
              <MapBasemapSelector />
              <MapLegend />
              <LayerInfo />
              <MapAnalytics />
            </div>
          </aside>

          {/* Main Map Area */}
          <main className="flex-1">
            <MapViewer />
          </main>
        </div>
      </div>
    </MapLayerProvider>
  )
}
