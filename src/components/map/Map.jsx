import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer, StreetViewPanorama } from '@react-google-maps/api';

const MapContainer = () => {
  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const defaultCenter = {
    lat: 6.247104372390021,
    lng: -75.56885188203198,
  };

  const [currentLocation, setCurrentLocation] = useState(null);
  const [directions, setDirections] = useState(null); 

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
      });
    }
  }, []);

  const destination = {
    lat: 6.247104372390021,
    lng: -75.56885188203198,
  };

  const directionsOptions = {
    destination: destination,
    origin: currentLocation,
    travelMode: 'DRIVING',
  };

  const onDirectionsReady = (result, status) => {
    if (status === 'OK') {
      setDirections(result);
    } else {
      console.error('Error al obtener direcciones:', status);
    }
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAM2qvvtesARLsQxOch-5eeArXiRUgdhmQ">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentLocation || defaultCenter}
        zoom={14}
      >
        {currentLocation && (
          <>
            <Marker position={currentLocation} label="Ubicación Actual" />
            <Marker position={destination} label="Destino" />
            <DirectionsService
              options={directionsOptions}
              callback={onDirectionsReady} 
            />
            {directions && <DirectionsRenderer directions={directions} />}
            <StreetViewPanorama
              position={currentLocation} // Puedes ajustar la posición según tus necesidades
              visible={false}
            />
          </>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;

  