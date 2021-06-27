import { Notify as noti } from 'quasar'
import store from "@/store";
import  { router }  from "@/router";

export const notify = (color, message) =>
  noti.create({
    message: message,
    color: `${color}-4`,
    textColor: 'white',
    icon: 'cloud_done'
  })


export const COMMON_isVisibile = elm => {

  if (!elm) return false;

  let rect = elm.getBoundingClientRect();
  let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

export const deepCopy = (obj) => {
  if(obj === null) return null
  if(typeof(obj) !== 'object') return obj

  let newObj = Array.isArray(obj) ? [...obj] : {...obj}
  for( let key in newObj){
    newObj[key] = deepCopy(newObj[key])
  }

  return newObj
}

export const Constants = {
  STATUS: [
    {label: "ACTIVE",   value: 1, color: 'yellow-10' },
    {label: "DELETED",  value: 2, color: 'red-10' },
    {label: "CANCELED", value: 3, color: 'cyan-10' },
    {label: "PUBLISHED",value: 4, color: 'green-14' }
  ]
}

export const uniqCode = (n) => {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first n characters
  // after the decimal.
  return '' + Math.random().toString(36).substr(2, n);

}

export const redirect = (goTo, params) => {
  if(store.getters.currentRoute != goTo)
    router.push({ name: goTo, params: params})
}

