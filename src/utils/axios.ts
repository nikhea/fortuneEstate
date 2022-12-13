import axios from "axios";
import { storage } from "../lib/storage";

export const Axiosclient = axios.create({
  baseURL: "http://localhost:4000/api",
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
