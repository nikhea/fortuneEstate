// import { baseURL, GET_CONTINENTS, GET_CONTINENT } from "../../utils/constant";
import { storage } from "../../lib/storage";
import { request, Axiosclient } from "../../utils/axios";
import { notify } from "./notification";

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
export const getAllProperties = async (
  pageNumber?: number,
  limitProperties?: number,
  sortProperties?: number
) => {
  const res = await Axiosclient.get(
    `/properties?page=${pageNumber}&limit=${limitProperties}&sort=${sortProperties}`
  );
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
    message: res.data.message,
  };
};

export const getSingelProperties = async (id: any) => {
  const res = await Axiosclient.get(`/properties/${id}`);
  return {
    status: res.status,
    data: res.data.data,
  };
};

export const getAllAgents = async () => {
  const res = await Axiosclient.get(`/user/agents`);
  return {
    status: res.status,
    data: res.data.data,
  };
};
export const getSingleAgent = async (id: any) => {
  const res = await Axiosclient.get(`/user/agents/${id}`);
  return {
    status: res.status,
    data: res.data.data,
  };
};

export const addProfileImage = async (imageDate: any) => {
  // http://localhost:4000/api/properties

  // const res = await Axiosclient.put(`user/me`, imageDate);
  const res = await Axiosclient.put(
    `user/me`,
    { imageDate },
    {
      headers: {
        Authorization: `Bearer ${storage.getToken()}`,
      },
    }
  );
  notify(res.status, res.data.message);
  return {
    status: res.status,
    data: res.data.data,
  };
};

// export const getProperties = async (id: number, countryName: string) => {
//   const res = await Axiosclient.get(`/properties?populate=*`);
//   return {
//     status: res.status,
//     data: res.data.data,
//   };
// };
