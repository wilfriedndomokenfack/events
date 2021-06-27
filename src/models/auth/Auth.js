
import store from '@/store'
import { redirect } from "@/models/utils/common.js"

import { notify } from "@/models/utils/common.js"
import { getToken, postRegistration} from "@/models/user.js"
import { deleteCookie } from "@/models/utils/setupCookies.js";

export const login = async (user) => {
  try {
    const response = await getToken(user)
    return response.data
  } catch (error) {
    console.log("error - " + error)
  }
}

export const signup = async (user) => {
  try {
    const response = await postRegistration(user)
    return response.data
  } catch (error) {
    return  "error - " + error;
  }
}

export const logout = () => {
  store.dispatch("setCurrentUser", null);
  deleteCookie('lime-jwt')
  notify('green', 'Logout with success!')
  redirect('login')


};
