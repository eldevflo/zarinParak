import axios from "axios";
import { readCookie } from "./readCookie";

const isProduction = !import.meta.env.DEV;
const csrfToken = readCookie("csrftoken");

/** to log in to server using token in all requests */
const token = import.meta.env.VITE_SERVER_SECRET_KEY;
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
export const request = axios.create({
  baseURL: "https://backend.pciset.ir/api/v1",
  headers: {
    Authorization: token ? `Token ${token}` : "",
    "X-CSRFToken": isProduction ? csrfToken : null,
  },
  cancelToken: source.token,
});
