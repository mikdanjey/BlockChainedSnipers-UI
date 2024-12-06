import axios from "axios";
import { signOut } from "next-auth/react";
axios.defaults.headers.common["Content-Type"] = "application/json";

const calculateValue = (loaded, total) => Math.floor(loaded * 1.0) / total;
const percentageCompleted = (loaded, total) =>
  Math.round((100 * loaded) / total);

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: apiUrl,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  async (error) => {
    // return Promise.reject(error);
    console.log("Error");
    await signOut({ callbackUrl: "/login" });
  },
);

// axiosInstance.interceptors.response.use((response) => {
//   return response;
// }, error => {
//   if (error.response.status === 401) {
//     signOut();
//   }
// });

export default axiosInstance;
