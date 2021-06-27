import { Cookies } from "quasar";

export const setCookie = ( key, value, expiryDate) => {

  if (expiryDate === undefined){
    expiryDate = "1d 0h 0m" // in 1 day, 0 hours, 0 minutes
  }


  let options = {
    expires: expiryDate,
    path: "/",
    //secure: true,       // If true, the cookie transmission requires a secure protocol (HTTPS) and will NOT be sent over HTTP.
    domain: "",//rootDomain,
    sameSite: "Strict", // Protection against cross-site request forgery attacks (CSRF).
    //httpOnly: true      // To help mitigate cross-site scripting (XSS) attacks
  };


  if (!Cookies.has(key)) Cookies.set(key, value, options);
};

export const getCookie = key => {
  return Cookies.has(key) ? Cookies.get(key) : null;
}

export const deleteCookie = key => {
  const options = {
    path: "/",
    domain: "" //rootDomain,
  };
  if (Cookies.has(key)) Cookies.remove(key, options);
};
export const clearCookies = () => {
  const cookies = Cookies.getAll();

  for (let key in cookies) {
    deleteCookie(key);
  }
}

