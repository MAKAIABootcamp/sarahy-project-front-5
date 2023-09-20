import React, { useEffect, useState } from 'react';
import marcador from '../../assets/image/puntoMapa.png'
import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.scss';
import icono from 'leaflet/dist/images/Marker-icon.png';
import Leaflet from 'leaflet'

const Map = ({ cordenada1 }) => {
  // console.log(cordenada1);
  const colombiaCoords = [6.2442, -75.5812];
  const locacionBoston = [cordenada1];
  const casaBoston = [6.247367954395559, -75.55800910625467]
  const salonLaureles = [6.239721264886833, -75.59696424146144]
  // console.log("quemada, casa boston",casaBoston );
  // console.log("props, locacion boston" , locacionBoston);
  // console.log("latittud", locacionBoston[0], "longitud",locacionBoston[1]);

  const image = new Leaflet.icon({
    iconUrl: icono,
    iconSize: [35, 47],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76]
  })

  // Verificar si cordenada1 es nula o indefinida antes de renderizar el mapa
  if (!cordenada1 || cordenada1.length !== 2) {
    return null; // No renderizar el mapa si no hay datos válidos
  }

  return (
    <div>
      <MapContainer center={colombiaCoords} zoom={13} scrollWheelZoom={true} className='map-container'>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* {cordenada1 && (
          <Marker position={} icon={image}>
            <Popup>Casa de Boston.</Popup>
          </Marker>
        )} */}
          <Marker position={casaBoston} icon={image}>
            <Popup>
              <h1>Casa Boston  </h1>
              <br />
              <span>telefono: 31145784235</span> <br />
              <span>direccion: calle 13 # 13-15</span>
            </Popup>
          </Marker>

      </MapContainer>
    </div>
  );
};

export default Map;
