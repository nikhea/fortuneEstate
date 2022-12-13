import { request, Axiosclient } from "../../utils/axios";
import { storage } from "../../lib/storage";

// export const API_URL = `http://localhost:4000/api`;
interface AuthResponse {
  user: User;
  jwt: string;
}

export interface User {
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
  const { data, status } = response;

  if (status === 200) {
    return data;
  } else {
    return Promise.reject(data);
  }
}

export async function getUserProfile() {
  const res = await Axiosclient.get(`/user/me`);
  return handleApiResponse(res);
}
// headers: {
//   Authorization: `Bearer ${storage.getToken()}`,
// },
// `Bearer ${storage.getToken()}`
export async function loginUser(data: any): Promise<AuthResponse> {
  const res = await Axiosclient.post(`/auth/login`, data);

  return handleApiResponse(res);
}

export async function registerWithEmailAndPassword(
  data: any
): Promise<AuthResponse> {
  console.log(data, "register service");
  const res = await Axiosclient.post(`/auth/signup`, data);

  return handleApiResponse(res);
}

// http://localhost:4000/api/auth/signup
