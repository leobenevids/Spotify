import axios from "axios";

export const Api = axios.create({
  baseURL: "http://localhost:5000",
});


export const createSession = async (email, password) => {
  return Api.post("/sessions", { email, password });
};
