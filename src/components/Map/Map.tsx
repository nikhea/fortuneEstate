// import "./styles.css";
import Map from "./OpenStreeMap";
import { useEffect, useState } from "react";

interface Address {
  country: string;
  street: string;
  // state: string;
  city: string;
  _id: string;
}

interface MapProps {
  address: Address;
}

export default function App({ address }: MapProps) {
  const [coords, setCorrds] = useState({
    latitude: "",
    longitude: "",
  });
  const [display_name, setName] = useState("");
  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(
    //   getCurrentCityName,
    //   error,
    //   options
    // );
    getData();
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

  //send the data on the state to the API
  function getData() {
    let url = `https://nominatim.openstreetmap.org/search?&state=${address.city}&country=${address.country}&format=json`;
    // console.log(url, "dsajljld");

    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "https://o2cj2q.csb.app",
      },
    })
      .then((response) => {
        // console.log(response, "dsajljld");
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
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App flex-1">
      <Map coords={coords} display_name={display_name} />
    </div>
  );
}
//  &postalcode=${address.postalcode}    &state=${address.state}
//
// &state=${address.state}  street=${address.street}  &state=${address.state}
// &country=${address.country}
