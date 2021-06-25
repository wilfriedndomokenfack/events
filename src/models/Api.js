import axios from "axios";

const headers = {
    'Accept': 'application/json',
};
const baseURL = process.env.EVENT_API_HOST

const Api = function() {
  return axios.create({ baseURL, headers});
};

export default Api;
