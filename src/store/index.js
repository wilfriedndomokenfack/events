
import { userKicker } from "@/models/auth/userKicker";
import {loadSession, saveJwtToken } from "@/models/utils/sessionHandler.js"
import jwt_decode from "jwt-decode";
import { redirect } from "@/models/utils/common.js"


import  { router }  from "@/router";
import { notify } from "@/models/utils/common.js"

import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)


const initialState = () => {
  const startState = {
    currentUser: null,
    token: null,
    ...loadSession()
  }

  if (startState.token) {
    startState.currentUser = jwt_decode(startState.token);
    userKicker(startState.currentUser.exp);
  }

  return startState
}

export default new Store({
  namespaced: true,
  strict: true,
  state: initialState(),
  modules: {

  },

  mutations: {

    setCurrentUser (state, payload) {
      const token = payload

      if(token){
        const user = jwt_decode(token);
        state.currentUser = user
        state.token = token
        userKicker(user.exp);
        saveJwtToken(token)


        redirect('home')
        notify('green', 'Login with success!')
      }else{
        state.currentUser = null
        state.token = null
      }
    },

  },
  getters: {

    currentUser: state => state.currentUser,
    token: state => state.token
,
    currentRoute: state => (state.route ? state.route.name : null),
    previousRoute: state => (state.route ? state.route.from.name : null)
  },
  actions: {

    setCurrentUser ({ commit }, payload) {
      commit('setCurrentUser', payload)
    },
  }
})
