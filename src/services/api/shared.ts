import { baseURL, GET_CONTINENTS, GET_CONTINENT } from "../../utils/constant";
import { request } from "../../utils/axios";
import axios from "axios";
interface getAllCONTINENTS {
  url: string;
  type: string;
}
export const getAllCONTINENTS = async () => {
  const res = await axios.get(`${baseURL}${GET_CONTINENTS}`);
  return {
    status: res.status,
    data: res.data.data,
  };
};

export const getCONTINENT = async (id: any) => {
  //   const res = await axios.get(`${baseURL}${GET_CONTINENT}/${id}`);
  const res = await axios.get(
    `http://localhost:1337/api/continents/${id}?populate=countries`
  );
  //   return await res
  return {
    status: res.status,
    data: res.data.data,
  };
};
