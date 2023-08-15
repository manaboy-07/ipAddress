/** @format */

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import placeholder from "../images/placeholder.png";
import L from "leaflet";


const icon = L.icon({
  iconUrl: placeholder,
  iconSize: [38, 38],
});

function Maps({ searchText, lat, lon }) {
    console.log(searchText)
   const position = [lat, lon];
  
  
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{
        width: "100%",
        height: "62.5vh",
      }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=crcvUwpApU5pGQpSFtzL'
      />
      <Marker position={position} icon={icon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );

 
}
Maps.defaultProps = {
    lat: 51.505,
    lon: -0.09
}

export default Maps;
