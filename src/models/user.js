import Api from "@/models/Api";
import { notify } from "@/models/utils/common.js"
import store from "@/store"
import { router } from "@/router";
import jwt_decode from "jwt-decode";
import moment from "moment";

export const getUsers = async () => {
  try {
    let response = await Api().get("/users" )
    store.dispatch("wilfried/setUsers", response.data);
  } catch (error) {
    console.log("error: " + error)
  }

}

export const getToken = (userData) => {
  return Api().post("/users/sign_in", userData )
}

export const postRegistration = (userData) =>
  Api().post("/users", userData )

export const isSuperUser = async () => {
  try{
    let index = -1
    if(store.getters.currentUser){
      const id = store.getters.currentUser.id
      let response = await Api().get(`/users/${id}/get_user_roles` )
      index = response.data.indexOf('admin')
    }
    return index > -1 ? true : false
  }catch(error){
    console.log("error: " + error)
  }
}
