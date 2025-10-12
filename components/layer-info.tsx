"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Info } from "lucide-react"

export function LayerInfo() {
  const layerInfo = [
    {
      name: "IFR Boundaries",
      description: "Individual Forest Rights areas across Indian states",
      states: "Delhi, Maharashtra, West Bengal, Karnataka, Tamil Nadu",
      color: "bg-red-500"
    },
    {
      name: "CFR Areas", 
      description: "Community Forest Rights areas across Indian states",
      states: "Goa, Odisha, Telangana, Tripura, Kerala",
      color: "bg-blue-500"
    },
    {
      name: "Village Boundaries",
      description: "Village administrative boundaries",
      states: "All major Indian states",
      color: "bg-green-500"
    },
    {
      name: "Forest Areas",
      description: "Forest reserves and protected areas",
      states: "All major Indian states",
      color: "bg-emerald-500"
    },
    {
      name: "Water Bodies",
      description: "Rivers, lakes, and water resources",
      states: "All major Indian states",
      color: "bg-cyan-500"
    },
    {
      name: "Infrastructure",
      description: "Roads, railways, ports, and airports",
      states: "All major Indian states",
      color: "bg-purple-500"
    }
  ]

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Info className="h-4 w-4" />
          Available Layers
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {layerInfo.map((layer, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center gap-2">
              <div className={`h-3 w-3 rounded-sm ${layer.color}`} />
              <span className="text-sm font-medium">{layer.name}</span>
            </div>
            <p className="text-xs text-muted-foreground ml-5">{layer.description}</p>
            <p className="text-xs text-muted-foreground ml-5">
              <strong>States:</strong> {layer.states}
            </p>
          </div>
        ))}
        <div className="mt-4 p-2 bg-blue-50 rounded-md">
          <p className="text-xs text-blue-800">
            <strong>Tip:</strong> Click on any layer feature to see detailed information including FRA claims, population, and tribal groups.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
