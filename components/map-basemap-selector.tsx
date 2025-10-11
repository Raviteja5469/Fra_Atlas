"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Map } from "lucide-react"

export function MapBasemapSelector() {
  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Map className="h-4 w-4" />
          Base Map
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup defaultValue="satellite">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="satellite" id="satellite" />
            <Label htmlFor="satellite" className="text-sm font-normal">
              Satellite (Bhuvan/Sentinel)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="terrain" id="terrain" />
            <Label htmlFor="terrain" className="text-sm font-normal">
              Terrain
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="osm" id="osm" />
            <Label htmlFor="osm" className="text-sm font-normal">
              OpenStreetMap
            </Label>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  )
}
