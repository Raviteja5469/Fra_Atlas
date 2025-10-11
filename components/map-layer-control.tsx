"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Layers } from "lucide-react"
import { useState } from "react"

interface Layer {
  id: string
  name: string
  enabled: boolean
  opacity: number
}

export function MapLayerControl() {
  const [layers, setLayers] = useState<Layer[]>([
    { id: "ifr", name: "IFR Boundaries", enabled: true, opacity: 80 },
    { id: "cfr", name: "CFR Areas", enabled: true, opacity: 80 },
    { id: "cr", name: "Community Rights", enabled: false, opacity: 80 },
    { id: "villages", name: "Village Boundaries", enabled: true, opacity: 60 },
    { id: "forest", name: "Forest Type / Land Use", enabled: false, opacity: 70 },
    { id: "water", name: "Water Bodies", enabled: false, opacity: 70 },
    { id: "infrastructure", name: "Infrastructure", enabled: false, opacity: 70 },
  ])

  const toggleLayer = (id: string) => {
    setLayers(layers.map((layer) => (layer.id === id ? { ...layer, enabled: !layer.enabled } : layer)))
  }

  const updateOpacity = (id: string, opacity: number) => {
    setLayers(layers.map((layer) => (layer.id === id ? { ...layer, opacity } : layer)))
  }

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Layers className="h-4 w-4" />
          Layer Controls
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {layers.map((layer) => (
          <div key={layer.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor={layer.id} className="text-sm font-medium">
                {layer.name}
              </Label>
              <Switch id={layer.id} checked={layer.enabled} onCheckedChange={() => toggleLayer(layer.id)} />
            </div>
            {layer.enabled && (
              <div className="flex items-center gap-2 pl-1">
                <span className="text-xs text-muted-foreground">Opacity</span>
                <Slider
                  value={[layer.opacity]}
                  onValueChange={(value) => updateOpacity(layer.id, value[0])}
                  max={100}
                  step={10}
                  className="flex-1"
                />
                <span className="w-8 text-xs text-muted-foreground">{layer.opacity}%</span>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
