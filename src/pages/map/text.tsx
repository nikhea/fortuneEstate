import "./styles.css";
import Map from "./Maps";
import { MouseEvent, useEffect, useState } from "react";
export default function App() {
  const [coords, setCorrds] = useState({
    latitude: "",
    longitude: "",
  });
  const [display_name, setName] = useState("");
  const [address, setAddress] = useState({
    country: "United States",
    street: "123 Chestnut St, Williamstown, Berkshire County,",
    city: "Massachusetts",
    _id: "63a8a1e4a7c115b135bd8471",
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      getCurrentCityName,
      error,
      options
    );
  }, []);

  function error(err: any) {
    if (
      err.code === 1 || //if user denied accessing the location
      err.code === 2 || //for any internal errors
      err.code === 3 //error due to timeout
    ) {
      alert(err.message);
    } else {
      alert(err);
    }
  }

  const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
  };

  //get current location when the app loads for the first time
  function getCurrentCityName(position: {
    coords: { latitude: any; longitude: any };
  }) {
    setCorrds({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });

    let url =
      "https://nominatim.openstreetmap.org/reverse?format=jsonv2" +
      "&lat=" +
      coords.latitude +
      "&lon=" +
      coords.longitude;

    fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "https://o2cj2q.csb.app",
      },
    })
      .then((response) => response.json())
      .then((data) => setName(data.display_name));
  }

  //get input from text fields and append it to address object
  function update(field: string) {
    return (e: { currentTarget: { value: any } }) => {
      const value = e.currentTarget.value;
      setAddress((address) => ({ ...address, [field]: value }));
    };
  }

  //send the data on the state to the API
  function getData(url: RequestInfo | URL) {
    console.log(url, "dsajljld");

    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "https://o2cj2q.csb.app",
      },
    })
      .then((response) => {
        console.log(response, "dsajljld");
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data, "dsajljld");
        setName(data[0].display_name);
        setCorrds({
          latitude: data[0].lat,
          longitude: data[0].lon,
        });
      })
      .catch(() => error("Please Check your input"));
  }

  //set form input( data entered ) to state on form submit
  function submitHandler(e: MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    console.log(address);

    let url = `https://nominatim.openstreetmap.org/search?
    street=${address.street}
    &city=${address.city}
    &country=${address.country}
    &format=json`;

    getData(url);
  }
  //  &postalcode=${address.postalcode}    &state=${address.state}

  return (
    <div className="App">
      <h1>Enter The address</h1>
      <section className="form-container">
        <form>
          <label>street:</label>
          <input
            value={address.street}
            placeholder="1234 abc street"
            onChange={update("street")}
            id="street"
            type="text"
          />
          <label>city:</label>
          <input
            placeholder="Los Angeles"
            type="text"
            value={address.city}
            onChange={update("city")}
            id="city"
          />
          <br />
          <label>State:</label>
          <input
            placeholder="CA / California"
            type="text"
            value={address.state}
            onChange={update("state")}
            id="state"
          />
          <label>zip code:</label>
          <input
            placeholder="91423"
            type="text"
            value={address.postalcode}
            onChange={update("postalcode")}
            id="postalcode"
          />
          <br />
          <label>Country:</label>
          <input
            placeholder="USA"
            type="text"
            value={address.country}
            onChange={update("country")}
            id="country"
          />
          <br />

          <button onClick={(e: any) => submitHandler(e)}>Search</button>
        </form>
      </section>
      <Map coords={coords} display_name={display_name} />
    </div>
  );
}

import "./styles.css";
import Map from "./Maps";
import { useEffect, useState } from "react";
export default function App() {
  const [coords, setCorrds] = useState({
    latitude: "",
    longitude: "",
  });
  const [display_name, setName] = useState("");
  const [address, setAddress] = useState({
    country: "United States",
    street: "123 Chestnut St, Williamstown, Berkshire County,",
    city: "Massachusetts",
    _id: "63a8a1e4a7c115b135bd8471",
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      getCurrentCityName,
      error,
      options
    );
  }, []);
  // useEffect(() => {}, []);

  function error(err: any) {
    if (
      err.code === 1 || //if user denied accessing the location
      err.code === 2 || //for any internal errors
      err.code === 3 //error due to timeout
    ) {
      alert(err.message);
    } else {
      alert(err);
    }
  }

  const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
  };

  //get current location when the app loads for the first time
  function getCurrentCityName(position: {
    coords: { latitude: any; longitude: any };
  }) {
    setCorrds({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });

    let url =
      "https://nominatim.openstreetmap.org/reverse?format=jsonv2" +
      "&lat=" +
      coords.latitude +
      "&lon=" +
      coords.longitude;

    fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "https://o2cj2q.csb.app",
      },
    })
      .then((response) => response.json())
      .then((data) => setName(data.display_name));
  }

  function getData() {
    let url = `https://nominatim.openstreetmap.org/search?
    street=${address.street}
    &city=${address.city}
    &country=${address.country}
    &format=json`;

    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "https://o2cj2q.csb.app",
      },
    })
      .then((response) => {
        console.log(response, "response");
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data, "data");
        setName(data[0].display_name);
        setCorrds({
          latitude: data[0].lat,
          longitude: data[0].lon,
        });
      })
      .catch((error) => console.log("Please Check your input", error));
  }

  return (
    <div className="App">
      {display_name}
      <div onClick={getData()}>sche</div>
      <Map coords={coords} display_name={display_name} />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Geocode from "react-geocode";

interface Address {
  country: string;
  street: string;
  city: string;
  _id: string;
}

interface MapProps {
  address: Address;
}

function OpenStreetMap({ address }: MapProps) {
  console.log(address);

  const [position, setPosition] = useState<[number, number] | null>(null);

  useEffect(() => {
    Geocode.fromAddress(
      `${address.street}, ${address.city}, ${address.country}`
    ).then(
      (response: {
        results: { geometry: { location: { lat: any; lng: any } } }[];
      }) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(response, "kjlsahdjksl");
        setPosition([lat, lng]);
      },
      (error: any) => {
        console.error(error);
      }
    );
    console.log("useEffect");
  }, [address]);

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "400px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {position && (
        <Marker position={position}>
          <Popup>{`${address.street}, ${address.city}, ${address.country}`}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

export default OpenStreetMap;
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
