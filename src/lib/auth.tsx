import { initReactQueryAuth } from "react-query-auth";
import {
  getUserProfile,
  registerWithEmailAndPassword,
  loginUser,
  User,
} from "../services/api/auth";
import { storage } from "./storage";

import { notify } from "../services/api/notification";

export async function handleUserResponse(data: any) {
  const {
    _id,
    token: jwt,
    email,
    firstname,
    userID,
    lastname,
    username,
    role,
    profile,
  } = data.data;

  storage.setToken(jwt);
  const user = {
    _id,
    // jwt,
    email,
    firstname,
    userID,
    lastname,
    username,
    role,
    profile,
  };
  return user;
}

async function loadUser() {
  let user = null;

  if (storage.getToken()) {
    const data = await getUserProfile();
    if (data) {
      const {
        _id,
        email,
        firstname,
        lastname,
        userID,
        username,
        role,
        profile,
      } = data.data;
      user = {
        _id,
        // jwt:storage.getToken(),
        email,
        firstname,
        userID,
        lastname,
        username,
        role,
        profile,
      };
    }
  }
  return user;
}

async function loginFn(data: any) {
  const response = await loginUser(data);
  const user = await handleUserResponse(response);
  return user;
}

async function registerFn(data: any) {
  const response = await registerWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function logoutFn() {
  storage.clearToken();
  notify(200, "logged out successfully");
}

const authConfig = {
  loadUser,
  loginFn,
  registerFn,
  logoutFn,
};
// ts-ignore
const { AuthProvider, useAuth } = initReactQueryAuth<User>(authConfig);

export { AuthProvider, useAuth };
