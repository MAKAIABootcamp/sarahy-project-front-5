import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.scss';
import icono from 'leaflet/dist/images/Marker-icon.png';
import iconoSombra from 'leaflet/dist/images/Marker-icon.png';
import Leaflet from 'leaflet'



const Map = () => {
  const colombiaCoords = [4.6097, -74.0817];


  const image = new Leaflet.icon({
    iconUrl: icono,
    shadowUrl: iconoSombra,
    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -76]// point from which the popup should open relative to the iconAnchor
  })

  
  return (
    <div>
      <MapContainer center={colombiaCoords} zoom={13} scrollWheelZoom={false} className='map-container'>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={colombiaCoords} icon={image}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>

    </div>
  );
};

export default Map;