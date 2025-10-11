import { Header } from "@/components/header"
import { MapViewer } from "@/components/map-viewer"
import { MapLayerControl } from "@/components/map-layer-control"
import { MapFilters } from "@/components/map-filters"
import { MapBasemapSelector } from "@/components/map-basemap-selector"
import { MapAnalytics } from "@/components/map-analytics"

export default function AtlasPage() {
  return (
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
            <MapAnalytics />
          </div>
        </aside>

        {/* Main Map Area */}
        <main className="flex-1">
          <MapViewer />
        </main>
      </div>
    </div>
  )
}
