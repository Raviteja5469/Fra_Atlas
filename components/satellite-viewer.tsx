"use client";

import { forwardRef, useEffect, useState, useRef, createContext } from "react";
import { MapContainer, TileLayer, LayersControl, WMSTileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// // Dummy hooks and utils (replace these imports with your actual ones)
// import { useMapFilter } from "@/lib/contexts/MapFilterContext";
// import { getStateBounds, getDistrictBounds } from "@/lib/data/indian-states-districts";
// import { getStateStats, getDistrictStats } from "@/lib/data/state-stats";
// import { buildPopupHtml } from "@/lib/popup/popupCard";

function MapSetter({ onSet }: { onSet: (m: L.Map) => void }) {
  const map = useMap();
  useEffect(() => {
    onSet(map as L.Map);
  }, [map, onSet]);
  return null;
}

export const MapMoveContext = createContext({
  moveTo: (_center: [number, number], _zoom?: number) => {},
});

export const SatelliteViewer = forwardRef<HTMLDivElement>((_props, _ref) => {
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);

  useEffect(() => {
    if (!mapInstance) return;
    mapInstance.invalidateSize();
  }, [mapInstance]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MapContainer
        center={[20.9, 85.8]}
        zoom={6}
        style={{ height: "100%", width: "100%", backgroundColor: "#f0f0f0" }}
      >
        <MapSetter onSet={(m) => setMapInstance(m)} />

        <LayersControl position="topright">
          {/* Base Map */}
          <LayersControl.BaseLayer name="Standard Map" checked>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
          </LayersControl.BaseLayer>

          {/* WorldCover */}
          <LayersControl.BaseLayer name="WorldCover (India)">
            <WMSTileLayer
              url="https://services.terrascope.be/wms/v2"
              layers="WORLDCOVER_2021_MAP"
              format="image/png"
              transparent={true}
              attribution="© ESA WorldCover"
            />
          </LayersControl.BaseLayer>
        </LayersControl>

        {/* Legend */}
        <div className="leaflet-bottom leaflet-right">
          <div className="bg-white p-3 rounded-lg shadow text-sm space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 inline-block rounded" style={{ background: "#F096FF" }}></span>
              <span>🌾 Agricultural land</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 inline-block rounded" style={{ background: "#006400" }}></span>
              <span>🌳 Forest cover</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 inline-block rounded" style={{ background: "#0064C8" }}></span>
              <span>💧 Water bodies</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 inline-block rounded" style={{ background: "#FA0000" }}></span>
              <span>🏠 Settlements</span>
            </div>
          </div>
        </div>
      </MapContainer>
    </div>
  );
});

SatelliteViewer.displayName = "SatelliteViewer";
