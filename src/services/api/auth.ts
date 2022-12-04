import { request, Axiosclient } from "../../utils/axios";
import { storage } from "../../lib/storage"

interface AuthResponse {
  user: User;
  jwt: string;
}

export interface User {
  id: string;
  email: string;
  name?: string;
}



export async function handleApiResponse(response: any) {
  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    return Promise.reject(data);
  }
}

export async function getUserProfile() {
  return await fetch(`${API_URL}/auth/me`, {
    headers: {
      Authorization: storage.getToken(),
    },
  }).then(handleApiResponse);
}

export async function loginWithEmailAndPassword(
  data: any
): Promise<AuthResponse> {
  return window
    .fetch(`${API_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify(data),
    })
    .then(handleApiResponse);
}

export async function registerWithEmailAndPassword(
  data: any
): Promise<AuthResponse> {
  return window
    .fetch(`${API_URL}/auth/register`, {
      method: "POST",
      body: JSON.stringify(data),
    })
    .then(handleApiResponse);
}
