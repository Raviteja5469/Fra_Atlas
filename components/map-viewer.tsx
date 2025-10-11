"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ZoomIn, ZoomOut, Maximize2, Download, X } from "lucide-react"
import { useState } from "react"
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import L from 'leaflet'
import geoData from "@/data/mock-geo-data..json" // Make sure this path is correct

// Fix for default Leaflet icon not showing up correctly
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

export function MapViewer() {
  const [selectedFeature, setSelectedFeature] = useState<any>(null)

  // Function to handle clicks on map features
  const onEachFeature = (feature: any, layer: L.Layer) => {
    layer.on({
      click: () => {
        setSelectedFeature(feature.properties)
      },
    })
  }

  return (
    <div className="relative h-full w-full">
      <Card className="h-full overflow-hidden">
        <div className="relative h-full w-full bg-muted/20">
          
          {/* --- Integrated Leaflet Map --- */}
          <MapContainer
            center={[21.8045, 80.1863]}
            zoom={11}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%' }}
            className="z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON data={geoData as any} onEachFeature={onEachFeature} />
          </MapContainer>

          {/* --- Your Existing UI Overlays --- */}
          <div className="absolute right-4 top-4 z-10 flex flex-col gap-2">
            <Button size="icon" variant="secondary" className="h-9 w-9 shadow-lg">
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="secondary" className="h-9 w-9 shadow-lg">
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="secondary" className="h-9 w-9 shadow-lg">
              <Maximize2 className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="secondary" className="h-9 w-9 shadow-lg">
              <Download className="h-4 w-4" />
            </Button>
          </div>

          <div className="absolute bottom-4 left-4 z-10 rounded-lg bg-background/95 px-3 py-2 shadow-lg backdrop-blur">
            <div className="flex items-center gap-2">
              <div className="h-1 w-20 border-b-2 border-l-2 border-r-2 border-foreground" />
              <span className="text-xs font-medium">10 km</span>
            </div>
          </div>

          <div className="absolute bottom-4 right-4 z-10 rounded-lg bg-background/95 px-3 py-2 shadow-lg backdrop-blur">
            <p className="text-xs font-mono">21.8045° N, 80.1863° E</p>
          </div>

          {selectedFeature && (
            <div className="absolute left-1/2 top-1/2 z-10 w-80 -translate-x-1/2 -translate-y-1/2">
              <Card className="shadow-2xl">
                <div className="flex items-start justify-between border-b border-border p-4">
                  <div>
                    <h3 className="font-semibold">{selectedFeature.village}</h3>
                    <p className="text-xs text-muted-foreground">
                      {selectedFeature.district}, {selectedFeature.state}
                    </p>
                  </div>
                  <Button size="icon" variant="ghost" className="h-6 w-6" onClick={() => setSelectedFeature(null)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-4 p-4">
                  <div>
                    <p className="mb-2 text-xs font-medium text-muted-foreground">Coordinates</p>
                    <p className="text-sm font-mono">{selectedFeature.coordinates}</p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-medium text-muted-foreground">FRA Claims</p>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="rounded-lg bg-muted p-2 text-center">
                        <p className="text-lg font-bold">{selectedFeature.claims.total}</p>
                        <p className="text-xs text-muted-foreground">Total</p>
                      </div>
                      <div className="rounded-lg bg-chart-1/10 p-2 text-center">
                        <p className="text-lg font-bold text-chart-1">{selectedFeature.claims.granted}</p>
                        <p className="text-xs text-muted-foreground">Granted</p>
                      </div>
                      <div className="rounded-lg bg-chart-2/10 p-2 text-center">
                        <p className="text-lg font-bold text-chart-2">{selectedFeature.claims.pending}</p>
                        <p className="text-xs text-muted-foreground">Pending</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-medium text-muted-foreground">Area Distribution</p>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Total Area</span>
                        <span className="font-medium">{selectedFeature.area.total}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>IFR</span>
                        <span className="font-medium">{selectedFeature.area.ifr}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>CFR</span>
                        <span className="font-medium">{selectedFeature.area.cfr}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-medium text-muted-foreground">Linked CSS Schemes</p>
                    <div className="flex flex-wrap gap-1">
                      {selectedFeature.schemes.map((scheme: string) => (
                        <Badge key={scheme} variant="secondary" className="text-xs">
                          {scheme}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      Download PDF
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      Export CSV
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}