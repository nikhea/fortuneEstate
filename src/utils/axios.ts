import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8080",
});

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer token`;
  const onSuccess = (response: any) => response;
  const OnError = (error: any) => error;

  return client(options).then(onSuccess).catch(OnError);
};
