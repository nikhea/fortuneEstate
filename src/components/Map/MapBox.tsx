import React, { useState, useEffect } from "react";
import MapGL from "react-map-gl";
import Geocoder from "@mapbox/mapbox-sdk/services/geocoding";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

const initialState = {
  viewport: {
    latitude: 52.22977,
    longitude: 21.01178,
    zoom: 10,
  },
  address: {
    country: "poland",
    street: "Thomas estate ajah",
    city: "wrds",
    _id: "63a997118922669d6e3e9d3f",
  },
};
function MapBox({ address }: any) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibmlraGVhc2VudHJ5IiwiYSI6ImNsZWFhaGhxNTBhNDgzcG5tZm5veHp5czkifQ.XKoyVtujNJJF4RvJkcwzIg";

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [address.longitude, address.latitude],
      zoom: 12,
    });

    setMap(map);

    // Add geocoder control to search for locations
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    });

    map.addControl(geocoder);

    // Add marker for the address location
    new mapboxgl.Marker()
      .setLngLat([address.longitude, address.latitude])
      .addTo(map);

    // Clean up
    return () => map.remove();
  }, [address]);

  return <div id="map" style={{ width: "100%", height: "400px" }}></div>;
}

export default MapBox;
