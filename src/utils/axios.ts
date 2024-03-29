// import * as dotenv from "dotenv";
// dotenv.config();
import axios from "axios";
import { storage } from "../lib/storage";

// const PRODUCTION =import.meta.env.VITE_REACT_APP_BACKEND_PRODUCTION
const DEVELOPMENT = process.env.REACT_APP_BACKEND_DEVELOPMENT;
const API_DEVELOPMENT = `http://localhost:4000/api`;
const API_URL = "https://backendfortuneestate.onrender.com/api";
const API_URL2 = "https://backendfortuneestate-production.up.railway.app/api/";

export const Axiosclient = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${storage.getToken()}`,
  },
});

export const request = ({ ...options }) => {
  // Axiosclient.defaults.headers.common.Authorization = `Bearer ${storage.getToken()}`;
  const onSuccess = (response: any) => response;
  const OnError = (error: any) => error;

  return Axiosclient(options).then(onSuccess).catch(OnError);
};

// export const request = ({ ...options }) => {
// Axiosclient.defaults.headers.common.Authorization = `Bearer ${storage.getToken()}`;
//   const onSuccess = (response: any) => response;
//   const OnError = (error: any) => error;

//   return Axiosclient(options).then(onSuccess).catch(OnError);
// };
