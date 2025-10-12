"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ZoomIn, ZoomOut, Maximize2, Download, X } from "lucide-react"
import { useState, useMemo } from "react"
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import L from 'leaflet'
import { useMapLayers } from "@/contexts/MapLayerContext"

// Import layer data - Real Indian state data
import ifrData from "@/data/ifr-boundaries-real.json"
import cfrData from "@/data/cfr-areas-real.json"
import crData from "@/data/community-rights-real.json"
import villageData from "@/data/village-boundaries-real.json"
import forestData from "@/data/forest-areas-real.json"
import waterData from "@/data/water-bodies-real.json"
import infrastructureData from "@/data/infrastructure-real.json"

// Fix for default Leaflet icon not showing up correctly
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Layer styles
const layerStyles = {
  ifr: {
    color: '#e74c3c',
    weight: 2,
    fillOpacity: 0.3
  },
  cfr: {
    color: '#3498db',
    weight: 2,
    fillOpacity: 0.3
  },
  cr: {
    color: '#f39c12',
    weight: 2,
    fillOpacity: 0.3
  },
  villages: {
    color: '#27ae60',
    weight: 1,
    fillOpacity: 0.2
  },
  forest: {
    color: '#2ecc71',
    weight: 1,
    fillOpacity: 0.2
  },
  water: {
    color: '#3498db',
    weight: 2,
    fillOpacity: 0.4
  },
  infrastructure: {
    color: '#8e44ad',
    weight: 1,
    fillOpacity: 0.6
  }
}

// Layer component that updates when layer state changes
function LayerComponent({ layerId, data, style }: { layerId: string, data: any, style: any }) {
  const { layers } = useMapLayers()
  
  const layer = layers.find(l => l.id === layerId)
  const isEnabled = layer?.enabled ?? false
  const opacity = layer?.opacity ?? 100

  // Memoize dynamic style to prevent unnecessary re-renders
  const dynamicStyle = useMemo(() => ({
    ...style,
    opacity: isEnabled ? opacity / 100 : 0,
    fillOpacity: isEnabled ? (style.fillOpacity * opacity) / 100 : 0,
    weight: style.weight,
    color: style.color
  }), [style, isEnabled, opacity])

  // Don't render if layer is disabled
  if (!isEnabled) return null

  return (
    <GeoJSON
      data={data}
      style={dynamicStyle}
      onEachFeature={(feature, layer) => {
        layer.on({
          click: () => {
            // Handle layer-specific clicks with detailed information
            const props = feature.properties
            console.log(`${layerId} clicked:`, props)
            
            // Create detailed popup content based on layer type
            let popupContent = `<div class="p-2">
              <h3 class="font-semibold text-lg mb-2">${props.name}</h3>
              <p class="text-sm text-gray-600 mb-1"><strong>State:</strong> ${props.state}</p>`
            
            if (props.district) {
              popupContent += `<p class="text-sm text-gray-600 mb-1"><strong>District:</strong> ${props.district}</p>`
            }
            
            if (props.area_hectares) {
              popupContent += `<p class="text-sm text-gray-600 mb-1"><strong>Area:</strong> ${props.area_hectares} hectares</p>`
            }
            
            if (props.claims_total) {
              popupContent += `<div class="mt-2">
                <p class="text-sm font-medium">FRA Claims:</p>
                <p class="text-xs">Total: ${props.claims_total} | Granted: ${props.claims_granted} | Pending: ${props.claims_pending}</p>
              </div>`
            }
            
            if (props.population) {
              popupContent += `<p class="text-sm text-gray-600 mb-1"><strong>Population:</strong> ${props.population}</p>`
            }
            
            if (props.tribal_groups) {
              popupContent += `<p class="text-sm text-gray-600 mb-1"><strong>Tribal Groups:</strong> ${Array.isArray(props.tribal_groups) ? props.tribal_groups.join(', ') : props.tribal_groups}</p>`
            }
            
            popupContent += `</div>`
            
            // Create popup
            layer.bindPopup(popupContent).openPopup()
          },
        })
      }}
    />
  )
}

export function MapViewer() {
  const [selectedFeature, setSelectedFeature] = useState<any>(null)
  const { layers } = useMapLayers()

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
            center={[20.5937, 78.9629]}
            zoom={5}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%' }}
            className="z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {/* Layer Components */}
            <LayerComponent layerId="ifr" data={ifrData} style={layerStyles.ifr} />
            <LayerComponent layerId="cfr" data={cfrData} style={layerStyles.cfr} />
            <LayerComponent layerId="cr" data={crData} style={layerStyles.cr} />
            <LayerComponent layerId="villages" data={villageData} style={layerStyles.villages} />
            <LayerComponent layerId="forest" data={forestData} style={layerStyles.forest} />
            <LayerComponent layerId="water" data={waterData} style={layerStyles.water} />
            <LayerComponent layerId="infrastructure" data={infrastructureData} style={layerStyles.infrastructure} />
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