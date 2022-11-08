import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseURL, GET_CONTINENTS, GET_CONTINENT } from "../utils/constant";

// http://localhost:1337/api/continents/8?populate=countries

const getCONTINENT = async (id: any) => {
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

export const useGetContinentData = async (id: any) => {
  return useQuery(["continent", id], () => getCONTINENT(id));
};
