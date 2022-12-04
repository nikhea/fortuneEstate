// import { baseURL, GET_CONTINENTS, GET_CONTINENT } from "../../utils/constant";
import { request, Axiosclient } from "../../utils/axios";

interface getAllCONTINENTS {
  url: string;
  type: string;
}
export const getAllCONTINENTS = async () => {
  // const res = await axios.get(`${baseURL}${GET_CONTINENTS}`);
  const res = await Axiosclient.get("/continents");
  return {
    status: res.status,
    data: res.data.data,
  };
};

export const getCONTINENT = async (name: any) => {
  const res = await Axiosclient.get(`/continents/${name}`);
  return {
    status: res.status,
    data: res.data.data,
  };
};
export const getAllCountry = async () => {
  const res = await Axiosclient.get(`/countries`);
  return {
    status: res.status,
    data: res.data.data,
  };
};
export const getPropertiesByCountry = async (countryName: any) => {
    const res = await Axiosclient.get(`${countryName}/properties`);
  return {
    status: res.status,
    data: res.data.data,
  };
};
export const getProperties = async (id: number, countryName: string) => {
  const res = await Axiosclient.get(`/properties?populate=*`);
  return {
    status: res.status,
    data: res.data.data,
  };
};
// http://localhost:4000/api/nigeria/properties
// export const getCountryProperties = async (id: number, countryName: string) => {
//   const res = await Axiosclient.get(`${countryName}/properties`);
//   //   return await res
//   return {
//     status: res.status,
//     data: res.data.data,
//   };
// };
export const getSingelProperties = async (id: number, countryName: string) => {
  const res = await Axiosclient.get(`/properties/${id}`);
  return {
    status: res.status,
    data: res.data.data,
  };
};
// http://localhost:4000/api/properties/63829165b573eebaeae15890
// http://localhost:1337/api/properties/1?populate=*
// http://localhost:1337/api/countries?populate=properties
// http://localhost:1337/api/countries/1?populate=properties
