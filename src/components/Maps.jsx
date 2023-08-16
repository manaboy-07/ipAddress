/** @format */

import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import placeholder from "../images/placeholder.png";
import L from "leaflet";

const icon = L.icon({
  iconUrl: placeholder,
  iconSize: [38, 38],
});
const defaultPosition = [51.505, -0.09];
function ResetCenterView(props){
    const {position} = props
    const map = useMap();
    useEffect(() => {
        if(position){
            map.setView(
                L.latLng(position[0],position[1]),
                map.getZoom(),
                {
                    animate:true
                }
            )
        }
    }, [position])
   return null
}
function Maps({ searchText,  position }) {
 
  return (
    <MapContainer
      center={defaultPosition}
      zoom={8}
      scrollWheelZoom={false}
      style={{
        width: "100%",
        height: "75vh",
      }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=crcvUwpApU5pGQpSFtzL'
      />
      {position && (
        <Marker position={position} icon={icon}>
          <Popup>
           {searchText ? searchText: 'London'}
          </Popup>
        </Marker>
      )}
      <ResetCenterView position={position}/>
    </MapContainer>
  );
}


export default Maps;
