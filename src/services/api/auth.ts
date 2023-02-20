import { request, Axiosclient } from "../../utils/axios";
import { storage } from "../../lib/storage";
import { notify } from "./notification";

// export const API_URL = `http://localhost:4000/api`;
interface AuthResponse {
  user: User;
  jwt: string;
}

export interface User {
  _id: string;
  id: string;
  email: string;
  firstname?: string;
  lastname?: string;
  username?: string;
  password?: string;
  role?: string;
  profile?: any;
}

export async function handleApiResponse(response: any) {
  const { data, message } = response;
  const { statuscode } = data;
  if (statuscode === 200 || statuscode === 201) {
    return data;
  } else {
    return Promise.reject(data);
  }
}

export async function getUserProfile() {
  const res = await Axiosclient.get(`/user/me`, {
    headers: {
      Authorization: `Bearer ${storage.getToken()}`,
    },
  });
  return handleApiResponse(res);
}
// headers: {
//   Authorization: `Bearer ${storage.getToken()}`,
// },
// `Bearer ${storage.getToken()}`
export async function loginUser(data: any): Promise<AuthResponse> {
  const res = await Axiosclient.post(`/auth/login`, data);
  notify(res.status, res.data.message);
  return handleApiResponse(res);
}

export async function registerWithEmailAndPassword(
  data: any
): Promise<AuthResponse> {
  const res = await Axiosclient.post(`/auth/signup`, data);
  notify(res.status, res.data.message);
  return handleApiResponse(res);
}

// http://localhost:4000/api/auth/signup
