import { Notify as noti } from 'quasar'

export const notify = (color, message) =>
  noti.create({
    message: message,
    color: `${color}-4`,
    textColor: 'white',
    icon: 'cloud_done'
  })
