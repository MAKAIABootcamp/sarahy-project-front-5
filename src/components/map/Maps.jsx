import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '280px',
    marginBottom: '100px', // Corrección: Usar 'marginBottom' en lugar de 'margin-botton'
    borderRadius: '9px'   // Corrección: Usar 'borderRadius' en lugar de 'border-radius'
};

const initialMarkers = [
    {
        position: {
            lat: 28.625485,
            lng: 79.821091
        },
        label: { color: "white", text: "P1" },
        draggable: true
    },
    {
        position: {
            lat: 28.625293,
            lng: 79.817926
        },
        label: { color: "white", text: "P2" },
        draggable: false
    },
    {
        position: {
            lat: 28.625182,
            lng: 79.81464
        },
        label: { color: "white", text: "P3" },
        draggable: true
    },
];

function Maps({ elemento }) {
    const [dataLocation, setdataLocation] = useState(null);



    useEffect(() => {
        if (elemento) {
            setdataLocation(elemento);
        } else {
            setdataLocation({}); 
        }
    }, [elemento]);

    const latitud = dataLocation && dataLocation.coordenadas ? dataLocation.coordenadas.lat : 0;
    const longitud = dataLocation && dataLocation.coordenadas ? dataLocation.coordenadas.ing : 0;
    console.log(dataLocation, "locacion");
    // const center = {
    //     lat: -3.745,
    //     lng: -38.523
    // };

    const center = {
        lat: latitud,
        lng: longitud
    }


    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAMd047JkkjhxDswT9CsIGo27NNn7_nTWo"
    })

    const [map, setMap] = React.useState(null);
    const [markers, setMarkers] = React.useState(initialMarkers);
    const [activeInfoWindow, setActiveInfoWindow] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    const mapClicked = (event) => {
        console.log(event.latLng.lat(), event.latLng.lng())
    }

    const markerClicked = (marker, index) => {
        setActiveInfoWindow(index)
        console.log(marker, index)
    }

    const markerDragEnd = (event, index) => {
        console.log(event.latLng.lat(), event.latLng.lng())
    }

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
            onLoad={onLoad}
            onUnmount={onUnmount}
            onClick={mapClicked}
        >
            {markers.map((marker, index) => (
                <Marker
                    key={index}
                    position={marker.position}
                    label={marker.label}
                    draggable={marker.draggable}
                    onDragEnd={event => markerDragEnd(event, index)}
                    onClick={event => markerClicked(marker, index)}
                >
                    {
                        (activeInfoWindow === index)
                        &&
                        <InfoWindow
                            position={marker.position}
                            onCloseClick={() => setActiveInfoWindow(null)}
                        >
                            <b>{marker.position.lat}, {marker.position.lng}</b>
                        </InfoWindow>
                    }
                </Marker>
            ))}

        </GoogleMap>
    ) : <></>
}

export default React.memo(Maps)