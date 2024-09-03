import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const customIcon = new L.Icon({
  iconUrl: require('./custom-marker.png'),
  iconSize: [35, 35],
});

const LocFinderApp = () => {
  const [position, setPosition] = useState([51.505, -0.09]); // Default position
  const [markers, setMarkers] = useState([position]);

  // Function to add a marker on map click
  const addMarker = (e) => {
    const location = { lat: e.latlng.lat, lng: e.latlng.lng };
    setMarkers([...markers, location]);
  };

  // Function to get the current location
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          const currentLocation = [latitude, longitude];
          setPosition(currentLocation);
          setMarkers([currentLocation]); // Add current location as a marker
        },
        (err) => {
          console.error("Error getting location:", err);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div>
      <button onClick={handleLocationClick}>Get Current Location</button>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: '50vh', width: '50%' }}
        onClick={addMarker}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker} icon={customIcon}>
            <Popup>You clicked at {marker.toString()}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default LocFinderApp;
