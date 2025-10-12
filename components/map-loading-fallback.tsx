"use client"

import { Card } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

export function MapLoadingFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-muted/20">
      <Card className="p-6 text-center">
        <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2 text-primary" />
        <p className="text-sm text-muted-foreground">Loading interactive map...</p>
        <p className="text-xs text-muted-foreground mt-1">This may take a moment</p>
      </Card>
    </div>
  )
}
