// EVENTS
const setEvents = (state, payload) => {
  state.events = payload
}
const addEvent = (state, payload) => {
  state.events = state.events ? [payload, ...state.events] : [{...payload}]
}
const removeEvent = (state, payload) => {
  const index = state.events.indexOf(payload)
  state.events.splice(index, 1);
}
const updateEvent = (state, payload) => {
  let events = state.events?.filter(v => v.id !== payload.id)
  state.events = [payload, ...events]
}

const setSearchParams = (state, payload) => {
  state.searchParams = payload || {};
}

export default {
  setEvents,
  addEvent,
  removeEvent,
  updateEvent,
  setSearchParams
};
