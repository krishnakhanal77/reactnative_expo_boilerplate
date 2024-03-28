import axios, { InternalAxiosRequestConfig } from "axios";
import Toast from "react-native-root-toast";
import { SESSION_EXPIRED } from "../constants";

export const API = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
    prefer: "odata.include-annotations=*,return=representation",
  },
});

API.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  // IF THE AUTHENTICATION TOKEN IS USED FROM THE MSAL ITSELF
  //const token = await MSALAUTH.getMslToken();
  config.headers.Authorization = `Bearer ${"token"}`;

  // if (
  //   config.method?.toUpperCase() === NetworkMethodEnum.POST ||
  //   config.method?.toUpperCase() === NetworkMethodEnum.PUT
  // ) {
  //   config.headers["MSCRM.SuppressDuplicateDetection"] = "false";
  // }

  return config;
});

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (401 === error.response.status || 403 === error.response.status) {
      Toast.show(SESSION_EXPIRED);
      //  MSALAUTH.logOut();
    }
    return Promise.reject(error);
  }
);
