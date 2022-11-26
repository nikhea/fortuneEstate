import axios from "axios";

export const Axiosclient = axios.create({
  baseURL: "http://localhost:4000/api",
});

export const request = ({ ...options }) => {
  Axiosclient.defaults.headers.common.Authorization = `Bearer token`;
  const onSuccess = (response: any) => response;
  const OnError = (error: any) => error;

  return Axiosclient(options).then(onSuccess).catch(OnError);
};
