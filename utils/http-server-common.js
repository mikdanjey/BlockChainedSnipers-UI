"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { signOut, getSession } from "next-auth/react";
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
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken.value}`;
    }
    return config;
  },
  async (error) => {
    // return Promise.reject(error);
    if (error.response.status === 401) {
      console.log("Error");
      await signOut({ callbackUrl: "/login" });
    }
  },
);

// axiosInstance.interceptors.response.use((response) => {
//   return response;
// }, async error => {
//   if (error.response.status === 401) {
//     const session = await getSession();
//     console.log(session)
//   }
// });

export default axiosInstance;
