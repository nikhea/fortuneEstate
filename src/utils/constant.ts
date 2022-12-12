export const HTTP_VERBS = {
  GET: "get",
  POST: "post",
  PUT: "put",
  PATCH: "patch",
  DELETE: "delete",
};
export const appMode = {
  admin: "ADMIN",
  agent: "AGENT",
  subscriber: "SUBSCRIBER",
};

// http://localhost:4000/api/continents
export const baseURL = `http://localhost:4000`;
// Contenet
export const GET_CONTINENTS = `/api/continents`;
export const GET_CONTINENT = `/api/continents/:id`;
// http://localhost:1337/api/countries
