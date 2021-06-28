import Api from "@/models/Api";
import { notify } from "@/models/utils/common.js"
import store from "@/store"

export const events = () =>
  Api().get("/events"); // INDEX

export const deleteEvent = (id) =>
  Api().delete("/events/"+id); // DELETE

export const sendToEvents = async (event) => {

  let returnData = null
  let message = 'Evento salvato con successo'
  let color = 'green'
  try{
    let response = await saveEvent(event)
    returnData = response?.data
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
