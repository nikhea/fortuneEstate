export const storage = {
  getToken: () => JSON.parse(window.localStorage.getItem("token") as any),
  setToken: (token: any) =>
    window.localStorage.setItem("token", JSON.stringify(token)),
  clearToken: () => window.localStorage.removeItem("token"),
};
