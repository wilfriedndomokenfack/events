import { setCookie, getCookie, clearCookies } from "@/models/utils/setupCookies.js";

export const saveJwtToken = token => setCookie("lime-jwt", token);

export const loadSession = () => {
  return {
    token: getCookie("lime-jwt"),
  };
};

export const destroySession = () => {
  clearCookies()
};
