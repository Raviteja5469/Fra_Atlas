"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import { useMapLayers } from "@/contexts/MapLayerContext"

const layerColors = {
  ifr: '#e74c3c',
  cfr: '#3498db',
  cr: '#f39c12',
  villages: '#27ae60',
  forest: '#2ecc71',
  water: '#3498db',
  infrastructure: '#8e44ad'
}

const layerDescriptions = {
  ifr: 'Individual Forest Rights (Indian States)',
  cfr: 'Community Forest Rights (Indian States)',
  cr: 'Community Rights (Indian States)',
  villages: 'Village Boundaries (Indian States)',
  forest: 'Forest Areas (Indian States)',
  water: 'Water Bodies (Indian States)',
  infrastructure: 'Infrastructure (Indian States)'
}

export function MapLegend() {
  const { layers } = useMapLayers()

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <MapPin className="h-4 w-4" />
          Map Legend
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {layers.map((layer) => (
          <div key={layer.id} className="flex items-center gap-2">
            <div 
              className="h-3 w-3 rounded-sm border"
              style={{ 
                backgroundColor: layerColors[layer.id as keyof typeof layerColors],
                opacity: layer.enabled ? layer.opacity / 100 : 0.3
              }}
            />
            <span className="text-xs text-muted-foreground">
              {layerDescriptions[layer.id as keyof typeof layerDescriptions]}
            </span>
            {layer.enabled && (
              <Badge variant="secondary" className="ml-auto text-xs">
                {layer.opacity}%
              </Badge>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
