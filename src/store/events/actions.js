
// EVENTS
const setEvents = ({ commit }, payload) => {
  commit('setEvents', payload)
}
const addEvent = ({ commit }, payload) => {
  commit('addEvent', payload)
}
const removeEvent = ({ commit }, payload) => {
  commit('removeEvent', payload)
}
const updateEvent = ({ commit }, payload) => {
  commit('updateEvent', payload)
}

const setSearchParams = ({ commit }, payload) => {
  commit("setSearchParams", payload)
}


export default {
  setEvents,
  addEvent,
  removeEvent,
  updateEvent,
  setSearchParams
};
