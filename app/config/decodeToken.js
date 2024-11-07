import {jwtDecode} from "jwt-decode";

// @ts-ignore
export const decodedToken = jwtDecode(localStorage.getItem("token"));