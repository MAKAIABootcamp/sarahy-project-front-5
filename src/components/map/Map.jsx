import React from 'react';
import marcador from '../../assets/image/puntoMapa.png'
import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.scss';
import icono from 'leaflet/dist/images/Marker-icon.png';
import Leaflet from 'leaflet'



const Map = () => {
  const colombiaCoords = [6.2442, -75.5812];
  const casaBoston = [6.247367954395559, -75.55800910625467]
  const salonLaureles = [6.239721264886833, -75.59696424146144]


  const image = new Leaflet.icon({
    iconUrl: icono,          // URL del icono
    // URL de la sombra
    iconSize: [35, 47],      // tamaño del icono (ancho, alto)
    shadowSize: [50, 64],    // tamaño de la sombra (ancho, alto)
    iconAnchor: [22, 94],    // punto del icono que corresponderá a la ubicación del marcador
    shadowAnchor: [4, 62],   // lo mismo para la sombra
    popupAnchor: [-3, -76]   // punto desde el cual se abrirá el popup en relación con iconAnchor
  })

  return (
    <div>
      <MapContainer center={casaBoston} zoom={14} scrollWheelZoom={true} className='map-container'>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={casaBoston} icon={image}>
          <Popup>
            Casa de Boston.
            <div>
              <h2>Convenio Bostón</h2>
              <p>Telefono: 2365968</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

    </div>
  );
};

export default Map;