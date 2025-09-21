import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

const RecenterMap = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position, map.getZoom());
    }
  }, [position, map]);

  return null;
};

const MapComponent = ({ lat, lon }) => {
  const position = [lat || 51.505, lon || -0.09];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "150px", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Fresh Kicks Here</Popup>
      </Marker>
      {lat && lon && <RecenterMap position={position} />}
    </MapContainer>
  );
};

export default MapComponent;
