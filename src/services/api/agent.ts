// import { baseURL, GET_CONTINENTS, GET_CONTINENT } from "../../utils/constant";
import { request, Axiosclient } from "../../utils/axios";

export const createProperties = async (properties: any) => {
  // http://localhost:4000/api/properties

  const res = await Axiosclient.post(`properties`, properties);
  return {
    status: res.status,
    data: res.data.data,
  };
};
export const deleteProperties = async (id: string) => {
  // http://localhost:4000/api/properties/id
  const res = await Axiosclient.delete(`properties/${id}`);
  return {
    status: res.status,
    data: res.data.data,
  };
};
export const getAgentProperties = async () => {
  const res = await Axiosclient.get(`/properties/me`);
  console.log(res, "res Service");

  return {
    status: res.status,
    data: res.data.data,
  };
};