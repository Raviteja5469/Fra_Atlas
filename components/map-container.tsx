"use client";

import { MapContainer, TileLayer, LayersControl, WMSTileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

export function MapContainerComponent() {
  const [map, setMap] = useState<L.Map | null>(null);

  useEffect(() => {
    if (map) {
      // Add smooth zoom animation feedback
      map.on("zoomstart", () => map.getContainer().classList.add("zooming"));
      map.on("zoomend", () => map.getContainer().classList.remove("zooming"));
    }
  }, [map]);

  return (
    <MapContainer
      center={[20.9, 85.8]}
      zoom={6}
      whenCreated={setMap}
      zoomControl={true}
      style={{ height: "100%", width: "100%", backgroundColor: "#f0f0f0" }}
      className="transition-all duration-700 ease-in-out"
    >
      <LayersControl position="topright">
        <LayersControl.BaseLayer name="OpenStreetMap" checked>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
          />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="ESA WorldCover 2021">
          <WMSTileLayer
            url="https://services.terrascope.be/wms/v2"
            layers="WORLDCOVER_2021_MAP"
            format="image/png"
            transparent
            attribution="© ESA WorldCover"
          />
        </LayersControl.BaseLayer>
      </LayersControl>

      {/* Legend */}
      <div className="leaflet-bottom leaflet-right mb-4 mr-4">
        <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow text-sm space-y-2">
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 rounded" style={{ background: "#F096FF" }}></span>
            <span>Cropland</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 rounded" style={{ background: "#006400" }}></span>
            <span>Forest</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 rounded" style={{ background: "#0064C8" }}></span>
            <span>Water</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 rounded" style={{ background: "#FA0000" }}></span>
            <span>🏠 Homesteads / settlements</span>
          </div>
        </div>
      </div>
    </MapContainer>
  );
}
{/* <div className="leaflet-bottom leaflet-right">
            <div className="bg-white p-3 rounded-lg shadow text-sm space-y-2">
              <div className="flex items-center space-x-2">
                <span
                  className="w-4 h-4 inline-block rounded"
                  style={{ background: "#F096FF" }}
                ></span>
                <span>🌾 Agricultural land</span>
              </div>
              <div className="flex items-center space-x-2">
                <span
                  className="w-4 h-4 inline-block rounded"
                  style={{ background: "#006400" }}
                ></span>
                <span>🌳 Forest cover</span>
              </div>
              <div className="flex items-center space-x-2">
                <span
                  className="w-4 h-4 inline-block rounded"
                  style={{ background: "#0064C8" }}
                ></span>
                <span>💧 Water bodies</span>
              </div>
              <div className="flex items-center space-x-2">
                <span
                  className="w-4 h-4 inline-block rounded"
                  style={{ background: "#FA0000" }}
                ></span>
                <span>🏠 Homesteads / settlements</span>
              </div>
            </div>
          </div> */}