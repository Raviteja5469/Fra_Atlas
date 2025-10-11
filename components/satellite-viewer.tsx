// 

"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

// Lazy-load map component (so it only runs on client)
const MapContainer = dynamic(() => import("./map-container").then(mod => mod.MapContainerComponent), {
  ssr: false,
  loading: () => (
    <div className="flex h-[500px] items-center justify-center bg-muted rounded-xl">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  ),
});

export function SatelliteViewer() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card className="p-4 shadow-sm border border-border rounded-2xl">
        <h2 className="text-xl font-semibold mb-3">Satellite Image Viewer</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Explore AI-analyzed satellite imagery with dynamic map layers and ESA WorldCover data.
        </p>

        {mounted ? (
          <div className="relative h-[500px] rounded-xl overflow-hidden">
            <MapContainer />
          </div>
        ) : (
          <div className="flex h-[500px] items-center justify-center bg-muted rounded-xl">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}
      </Card>
    </motion.div>
  );
}
