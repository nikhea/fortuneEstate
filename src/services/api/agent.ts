// import { baseURL, GET_CONTINENTS, GET_CONTINENT } from "../../utils/constant";
import { request, Axiosclient } from "../../utils/axios";

export const createProperties = async (properties: any) => {
  // http://localhost:4000/api/properties

  const res = await Axiosclient.post(`properties`, properties);
  // console.log(res,"propertiesDate  services");
  return {
    status: res.status,
    data: res.data.data,
  };
};
export const deleteProperties = async (id: string) => {
  // http://localhost:4000/api/properties
  console.log("listing propertyID", "http://localhost:4000/api/properties", id);
  const res = await Axiosclient.delete(`properties/${id}`);
  console.log(res,"propertiesDate  services");
  return {
    status: res.status,
    data: res.data.data,
  };
};
