import React, {useState, useEffect} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
function Map({locationName}) {
    const [position, setPosition] = useState([0, 0]);
    const [name, setName] = useState('');
  
    useEffect(() => {
      const fetchCoordinates = async () => {
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(locationName)}&format=json`
          );
          const data = await response.json();
          
          if (data.length > 0) {
            const { lat, lon, display_name } = data[0];
            setPosition([parseFloat(lat), parseFloat(lon)]);
            setName(display_name);
          }
        } catch (error) {
          console.error('Error fetching location data:', error);
        }
      };
  
      fetchCoordinates();
    }, [locationName]);
  return (
    <div>
        <MapContainer center={position} zoom={13} style={{ width: '100%', height: '400px' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
                 <Popup>{name}</Popup>
            </Marker>
        </MapContainer>
    </div>
  )
}

export default Map