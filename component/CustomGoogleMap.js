import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 53.4298189,
    lng: 14.484542
};

function CustomGoogleMap() {
    const [map, setMap] = React.useState(null)

    // const onLoad = React.useCallback(function callback(map) {
    //     const bounds = new window.google.maps.LatLngBounds();
    //     map.fitBounds(bounds);
    //     setMap(map)
    // }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyArXpvasOvs4IdZP9a-SDQ1rJ0xCZscDaA"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={8}
                // onLoad={onLoad}
                onUnmount={onUnmount}
            >
                <Marker
                    position={center}
                />
                <></>
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(CustomGoogleMap)