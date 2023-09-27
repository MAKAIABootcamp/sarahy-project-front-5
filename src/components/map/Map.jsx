import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer, StreetViewPanorama } from '@react-google-maps/api';
import { element } from 'prop-types';

const MapContainer = ({cordenada}) => {
  console.log(cordenada);
  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const destination = {
    lat: cordenada.coordenadas.lat,
    lng: cordenada.coordenadas.ing,
  };

  console.log(destination, "estas son las cordenada");

  const nombreDestino = cordenada.nombre;


  return (
    <LoadScript googleMapsApiKey="AIzaSyAM2qvvtesARLsQxOch-5eeArXiRUgdhmQ">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={destination}
        zoom={15}
      >

        <Marker position={destination} label={nombreDestino} />

        <StreetViewPanorama
          position={destination} 
          visible={true}
        />

      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;

