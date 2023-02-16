import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
function Map({ address }: any) {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode(
      { address: `${address.street}, ${address.city}, ${address.country}` },
      (results: any, status) => {
        // google.maps.GeocoderResult[] || null
        if (status === "OK") {
          setCoordinates({
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
          });
        } else {
          console.error(
            `Geocode was not successful for the following reason: ${status}`
          );
        }
      }
    );
  }, [address]);

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <GoogleMap center={coordinates} zoom={15}>
          <Marker position={coordinates} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Map;
