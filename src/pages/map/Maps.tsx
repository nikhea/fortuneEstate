import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "./icon.png";
import L from "leaflet";

interface IMapProps {
  coords?: any;
  display_name?: string;
  street?: string;
  lat: any;
  long: any;
}

export default function Map({ lat, long, street }: IMapProps) {
  const latitude = lat;
  const longitude = long;

  const customIcon = new L.Icon({
    //creating a custom icon to use in Marker
    iconUrl: icon,
    iconSize: [25, 35],
    iconAnchor: [5, 30],
  });

  function MapView() {
    let map = useMap();
    map.setView([latitude, longitude], map.getZoom());
    //Sets geographical center and zoom for the view of the map
    return null;
  }

  return (
    <MapContainer
      className="map"
      center={[latitude, longitude]}
      zoom={10}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> 
        contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={customIcon} position={[latitude, longitude]}>
        <Popup>
          <h1>{street}</h1>
          <p>
            {latitude} {longitude}
          </p>
        </Popup>
      </Marker>
      <MapView />
    </MapContainer>
  );
}
