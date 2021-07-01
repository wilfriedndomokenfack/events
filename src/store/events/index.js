// import your loadSession in index file on your module
import actions from "./actions.js";
import mutations from "./mutations";

export default {
  namespaced: true,
  mutations,
  actions,
  state: {
    events: null,
    searchParams: {},
  },

  getters: {
    events: state => state.events,
    searchParams: state => state.searchParams,
  }
};
