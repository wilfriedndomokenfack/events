import Api from "@/models/Api";
import { notify } from "@/models/utils/common.js"
import store from "@/store"
import moment from "moment"

export const events = () => {
  const searchParams = store.getters["events/searchParams"]

  const params = {
    FromFilterDate: searchParams.FromFilterDate ?? "2021-01-01",
    ToFilterDate: searchParams.ToFilterDate ?? "9021-01-01",
  }
  return Api().get("/events", { params: params }); // INDEX
}


export const deleteEvent = (id) =>
  Api().delete("/events/"+id); // DELETE

export const sendToEvents = async (event) => {

  let returnData = null
  let message = 'Evento salvato con successo'
  let color = 'green'
  try{
    let response = await saveEvent(event)
    returnData = response?.data
    returnData.start_time = moment(returnData.start_time).subtract(1, 'hours').format('HH:mm');
    returnData.end_time = moment(returnData.end_time).subtract(1, 'hours').format('HH:mm');
  }catch(err){
    message = 'ERROR: ' + err
    color = 'red'
  }finally{
    notify(color, message)
  }
  return returnData
}

export const saveEvent = async event => { // CREATE OR UPDATE
  let responce = null
  if(event.id){
    responce = await Api().patch(`/events/${event.id}`, event ); // UPDATE
  }else{
    responce = await Api().post(`/events`, event ); // CREATE
  }
  return responce
}

export const prepareEvent = event => {
  event.start_time = moment(event.start_time).subtract(1, 'hours').format('HH:mm');
  event.end_time = moment(event.end_time).subtract(1, 'hours').format('HH:mm');
}
