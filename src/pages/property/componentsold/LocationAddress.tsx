import { FC } from "react";
import "./hr.css";
import PropertiesCard from "../../../components/card/PropertyCard";
// import Map from "../../../components/Map/Map";
import { useQuery } from "react-query";
import Maps from "../../map/Maps";

interface Props {
  street: string;
  country: string;
  city: string;
  address: any;
}

const fetchCoordinates = async (address: string, city: string) => {
  let queryUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
    address
  )}`;

  try {
    const response = await fetch(queryUrl);
    const data = await response.json();

    if (data && data.length > 0) {
      return {
        latitude: parseFloat(data[0].lat),
        longitude: parseFloat(data[0].lon),
      };
    } else {
      // If no data found for address, search by city
      queryUrl = `https://nominatim.openstreetmap.org/search?format=json&city=${encodeURIComponent(
        city
      )}`;
      const cityResponse = await fetch(queryUrl);
      const cityData = await cityResponse.json();

      if (cityData && cityData.length > 0) {
        return {
          latitude: parseFloat(cityData[0].lat),
          longitude: parseFloat(cityData[0].lon),
        };
      } else {
        throw new Error("No coordinates found for the provided city");
      }
    }
  } catch (error) {
    console.error("Error generating coordinates:", error);
    return null;
  }
};

const additionalDetails: FC<Props> = ({ street, country, city, address }) => {
  const { data: coordinates, isLoading } = useQuery(
    ["coordinates", address],
    () => fetchCoordinates(street, city)
  );

  const style = {
    header: ` flex items-center  w-full mb-5`,
    title: `ml-5 capitalize font-[600] text-[1.75rem]`,
    details: ` items-center  justify-between  flex flex-wrap `,
    description: `py-4 w-[23%] capitalize font-[400] text-[#0D304A] text-[1rem] mr-[4rem]`,
    descriptions: `py-4  capitalize font-[400] text-[#0D304A] text-[1rem] mr-[4rem]`,

    span: `capitalize`,
  };
  return (
    <span
    // data-aos="fade-up"
    // data-aos-easing="ease-in-out"
    // data-aos-duration="8000"
    >
      {/* <PropertiesCard width={100} height={100}> */}
      <div>
        <header className={style.header}>
          <div className="hr"></div>
          <h1 className={style.title}>location address</h1>
        </header>
        <div className={style.details}>
          <p className={style.description}>
            <span className={style.span}>country : </span> {country}
          </p>

          <p className={style.description}>
            <span className={style.span}>city : </span>
            {city}
          </p>
          <p className={style.description}>
            <span className={style.span}>floor number : </span>1
          </p>
          <p className={style.description}>
            <span className={style.span}>longitude : </span> W60 22'5"
          </p>
          <p className={style.description}>
            <span className={style.span}>latitude : </span> N30 22'5"
          </p>
          <p className={style.description}>
            {/* <span className={style.span}>latitude : </span> N30 22'5" */}
          </p>
        </div>
      </div>
      {/* <div>
        <p className={style.descriptions}>
          <span className={style.span}>street : </span> {street}
        </p>
      </div> */}
      <div className="h-[500px] overflow-clip">
        {coordinates && (
          <Maps
            lat={coordinates.latitude}
            long={coordinates.longitude}
            street={street}
          />
        )}
      </div>
    </span>
  );
};

// const LocationMap = ({ latitude, longitude, street, city, country }: any) => {
//   const position = [latitude, longitude];

//   return (
//     <Map center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <Marker position={position}>
//         <Popup>
//           <div>
//             <p>{street}</p>
//             <p>{city}</p>
//             <p>{country}</p>
//           </div>
//         </Popup>
//       </Marker>
//     </Map>
//   );
// };
export default additionalDetails;
