import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:46329",
  headers: {
    "Content-Type": "application/json",
  },
});