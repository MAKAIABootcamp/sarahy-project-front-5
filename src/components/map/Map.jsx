import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

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
  const [directions, setDirections] = useState(null); // Nuevo estado para las direcciones

  useEffect(() => {
    // Obtener la ubicación actual del usuario
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

  // Función de devolución de llamada para manejar las direcciones
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
              callback={onDirectionsReady} // Utiliza callback para manejar las direcciones
            />
            {directions && <DirectionsRenderer directions={directions} />} {/* Renderiza las direcciones */}
          </>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;