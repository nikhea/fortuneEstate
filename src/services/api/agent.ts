// import { baseURL, GET_CONTINENTS, GET_CONTINENT } from "../../utils/constant";
import { request, Axiosclient } from "../../utils/axios";
import { notify } from "./notification";

export const createProperties = async (properties: any) => {
  // http://localhost:4000/api/properties

  const res = await Axiosclient.post(`properties`, properties);
  notify(res.status, res.data.message);
  return {
    status: res.status,
    data: res.data.data,
  };
};
export const deleteProperties = async (id: string) => {
  // http://localhost:4000/api/properties/id
  const res = await Axiosclient.delete(`properties/${id}`);
  notify(res.status, res.data.message);
  return {
    status: res.status,
    data: res.data.data,
  };
};
export const getAgentProperties = async () => {
  const res = await Axiosclient.get(`/properties/me`);

  return {
    status: res.status,
    data: res.data.data,
  };
};
