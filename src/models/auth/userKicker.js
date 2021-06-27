// Kicks out user upon session expiration

import { logout } from "@/models/auth/Auth.js";


const defaultSessionTimeout = 1 * 60 * 1000; // minutes -> milliseconds
let kicker = null;

// const kickOutUser = () => {
//   logout()
//  // if (window.location.pathname != loginPath) router.push({ name: "signin" });
// };

export const userKicker = exp => {
  if (kicker) clearTimeout(kicker);
  kicker = setTimeout(logout, exp);
};
