import React,{useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
const customIcon = new L.Icon({
  iconUrl: require('./custom-marker.png'),
  iconSize: [35, 35],
});
const LocFinderApp = () => {
  const position = [51.505, -0.09];
  const [markers, setMarkers] = useState([position]);

  const addMarker = (e) => {
    setMarkers([...markers, [e.latlng.lat, e.latlng.lng]]);
  };

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: '100vh', width: '100%' }}
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
  );
};

export default LocFinderApp;