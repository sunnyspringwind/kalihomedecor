import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function InteractiveMap() {
  const position = [26.80816, 87.29007]; // Bhanumarga-15, Dharan

  return (
    <div className="h-64 lg:h-full bg-gray-100 rounded-lg">
      <MapContainer center={position} zoom={15} className="h-full w-full rounded-lg">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={position}>
          <Popup>
            Bhanumarga-15, Dharan
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
