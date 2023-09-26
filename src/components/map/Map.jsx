import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer, StreetViewPanorama } from '@react-google-maps/api';

const MapContainer = () => {
  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const destination = {
    lat: 6.257171994676571,
    lng: -75.56078624930181,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAM2qvvtesARLsQxOch-5eeArXiRUgdhmQ">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={destination}
        zoom={14}
      >

        <Marker position={destination} label="Destino" />

        <StreetViewPanorama
          position={destination} 
          visible={true}
        />

      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;

