"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

type FRAInfo = { claims: number; titles: number; areaHa: number; status: "High" | "Medium" | "Low" }
type StateHotspot = {
  id: string
  name: string
  info: FRAInfo
  // approximate position over the PNG (percentages)
  top: string
  left: string
}

const DUMMY_STATES: StateHotspot[] = [
  {
    id: "mh",
    name: "Maharashtra",
    info: { claims: 21500, titles: 16200, areaHa: 412000, status: "High" },
    top: "58%",
    left: "37%",
  },
  {
    id: "mp",
    name: "Madhya Pradesh",
    info: { claims: 18250, titles: 12980, areaHa: 355100, status: "Medium" },
    top: "48%",
    left: "45%",
  },
  {
    id: "od",
    name: "Odisha",
    info: { claims: 14320, titles: 10950, areaHa: 251400, status: "High" },
    top: "52%",
    left: "58%",
  },
  {
    id: "ct",
    name: "Chhattisgarh",
    info: { claims: 13120, titles: 9400, areaHa: 210300, status: "Medium" },
    top: "53%",
    left: "51%",
  },
  {
    id: "rj",
    name: "Rajasthan",
    info: { claims: 8200, titles: 5100, areaHa: 99000, status: "Low" },
    top: "44%",
    left: "31%",
  },
  {
    id: "gj",
    name: "Gujarat",
    info: { claims: 7600, titles: 5200, areaHa: 86500, status: "Low" },
    top: "49%",
    left: "30%",
  },
]

export function IndiaMap() {
  const [hovered, setHovered] = useState<string | null>(null)
  const hoveredState = useMemo(() => DUMMY_STATES.find((s) => s.id === hovered), [hovered])

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="text-lg">Interactive Map</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="relative aspect-[4/3] w-full rounded-lg bg-muted/30">
          <Image src="/india-map.png" alt="India map" fill className="object-contain p-6" priority />

          {/* Hotspots */}
          {DUMMY_STATES.map((s) => (
            <HoverCard key={s.id} open={hovered === s.id}>
              <HoverCardTrigger asChild>
                <button
                  aria-label={s.name}
                  onMouseEnter={() => setHovered(s.id)}
                  onMouseLeave={() => setHovered(null)}
                  className="absolute h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary bg-primary/30 hover:bg-primary/50 focus:outline-none"
                  style={{ top: s.top, left: s.left }}
                />
              </HoverCardTrigger>
              <HoverCardContent align="center" className="w-64">
                <div className="space-y-1">
                  <p className="font-semibold">{s.name}</p>
                  <p className="text-xs text-muted-foreground">FRA status: {s.info.status}</p>
                  <div className="mt-2 grid grid-cols-3 gap-2 text-center text-xs">
                    <div>
                      <p className="font-bold">{s.info.claims.toLocaleString()}</p>
                      <p className="text-muted-foreground">Claims</p>
                    </div>
                    <div>
                      <p className="font-bold">{s.info.titles.toLocaleString()}</p>
                      <p className="text-muted-foreground">Titles</p>
                    </div>
                    <div>
                      <p className="font-bold">{(s.info.areaHa / 1000).toFixed(0)}k</p>
                      <p className="text-muted-foreground">ha</p>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
