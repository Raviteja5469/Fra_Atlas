"use client"

import { createContext, useContext, useState, ReactNode, useCallback, useMemo } from "react"

export interface Layer {
  id: string
  name: string
  enabled: boolean
  opacity: number
}

interface MapLayerContextType {
  layers: Layer[]
  toggleLayer: (id: string) => void
  updateOpacity: (id: string, opacity: number) => void
  setLayers: (layers: Layer[]) => void
}

const MapLayerContext = createContext<MapLayerContextType | undefined>(undefined)

export function MapLayerProvider({ children }: { children: ReactNode }) {
  const [layers, setLayers] = useState<Layer[]>([
    { id: "ifr", name: "IFR Boundaries", enabled: true, opacity: 80 },
    { id: "cfr", name: "CFR Areas", enabled: true, opacity: 80 },
    { id: "cr", name: "Community Rights", enabled: false, opacity: 80 },
    { id: "villages", name: "Village Boundaries", enabled: true, opacity: 60 },
    { id: "forest", name: "Forest Areas", enabled: false, opacity: 70 },
    { id: "water", name: "Water Bodies", enabled: false, opacity: 70 },
    { id: "infrastructure", name: "Infrastructure", enabled: false, opacity: 70 },
  ])

  const toggleLayer = useCallback((id: string) => {
    setLayers(prevLayers => prevLayers.map((layer) => (layer.id === id ? { ...layer, enabled: !layer.enabled } : layer)))
  }, [])

  const updateOpacity = useCallback((id: string, opacity: number) => {
    setLayers(prevLayers => prevLayers.map((layer) => (layer.id === id ? { ...layer, opacity } : layer)))
  }, [])

  const contextValue = useMemo(() => ({
    layers,
    toggleLayer,
    updateOpacity,
    setLayers
  }), [layers, toggleLayer, updateOpacity])

  return (
    <MapLayerContext.Provider value={contextValue}>
      {children}
    </MapLayerContext.Provider>
  )
}

export function useMapLayers() {
  const context = useContext(MapLayerContext)
  if (context === undefined) {
    throw new Error("useMapLayers must be used within a MapLayerProvider")
  }
  return context
}
