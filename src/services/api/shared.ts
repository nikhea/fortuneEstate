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
  filterProperties?: any,
  sortProperties?: any,
  pageNumber?: number
) => {
  //     `/properties`,

  const res = await Axiosclient.get(
    `/properties?page=${pageNumber}&sort=${sortProperties}`,
    {
      params: filterProperties,
    }
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

export const getSingelPropertiesByName = async (id: any, name: any) => {
  const res = await Axiosclient.get(`/properties/${id}/${name}`);

  return {
    status: res.status,
    data: res.data.data,
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

export const addProfileImage = async (ProfileImage: any) => {
  // http://localhost:4000/api/properties

  // const res = await Axiosclient.put(`user/me`, imageDate);
  const res = await Axiosclient.patch(
    `user/me`,
    { ProfileImage },
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

export const updateProfile = async (data: any) => {
  const res = await Axiosclient.patch(
    `user/me/profile`,
    { data },
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
// export const getAllProperties = async (
//   pageNumber?: number,
//   limitProperties?: number,
//   sortProperties?: number,
//   filterProperties?: any
// ) => {
//   // console.log(filterProperties, "filterProperties");

//   const res = await Axiosclient.get(
//     // `/properties?page=${pageNumber}&limit=${limitProperties}&sort=${sortProperties}`,

//     `/properties?page=${pageNumber}&limit=${limitProperties}&sort=${sortProperties}`,
//     {
//       params: filterProperties,
//     }
//   );
//   return {
//     status: res.status,
//     data: res.data.data,
//   };
// };
