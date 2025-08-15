import axios from "axios";
import { API_BASE_URL } from "./constants";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const getHealth = async () => {
  const { data } = await api.get("/health");
  return data;
};

export const postPredict = async (featuresObject) => {
  // Backend expects { features: { ... } }
  const { data } = await api.post("/predict", { features: featuresObject });
  return data;
};

export default api;
