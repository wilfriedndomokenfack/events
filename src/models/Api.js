import axios from "axios"
import store from "@/store"

const Api = function() {
  const headers = {
    'Accept': 'application/json',
  };
  if(store && store?.getters.token) headers["Authorization"] = `Bearer ${store.getters.token}`;
  const baseURL = process.env.EVENT_API_HOST


  return axios.create({ baseURL, headers});
};

export default Api;
