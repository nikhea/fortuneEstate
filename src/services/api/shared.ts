// import { baseURL, GET_CONTINENTS, GET_CONTINENT } from "../../utils/constant";
import { request, Axiosclient } from "../../utils/axios";
import axios from "axios";
interface getAllCONTINENTS {
  url: string;
  type: string;
}
export const getAllCONTINENTS = async () => {
  // const res = await axios.get(`${baseURL}${GET_CONTINENTS}`);
  // const res = await axios.get("http://localhost:4000/api/continents")
  const res = await Axiosclient.get("/continents");
  // console.log(JSON.stringify(res || {}))+ "res");
  console.log(res);
  return {
    status: res.status,
    data: res.data.data,
  };
};

export const getCONTINENT = async (name: any) => {
  //   const res = await axios.get(`${baseURL}${GET_CONTINENT}/${id}`);
  const res = await Axiosclient.get(`/continents/${name}`);
  //   return await res
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
export const getPropertiesByCountry = async (id: any, countryName: any) => {
  const res = await Axiosclient.get(`countries/${id}?populate=properties`);
  //   return await res
  return {
    status: res.status,
    data: res.data.data,
  };
};
export const getProperties = async (id: number, countryName: string) => {
  const res = await Axiosclient.get(`/properties?populate=*`);
  //   return await res
  return {
    status: res.status,
    data: res.data.data,
  };
};
export const getSingelProperties = async (id: number, countryName: string) => {
  const res = await Axiosclient.get(`/properties/${id}?populate=*`);
  //   return await res
  return {
    status: res.status,
    data: res.data.data,
  };
};

// http://localhost:1337/api/properties/1?populate=*
// http://localhost:1337/api/countries?populate=properties
// http://localhost:1337/api/countries/1?populate=properties
