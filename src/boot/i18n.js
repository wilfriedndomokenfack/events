import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from 'src/i18n'

Vue.use(VueI18n)

let response = 'en-us'
let laguages = ['fr', 'it']
const laguagesCodes = laguages.map( v => v.substring(0, 2))
let userLang = navigator.language || navigator.userLanguage;
let code = userLang.substring(0, 2);

if(laguagesCodes.indexOf(code) > -1){
  response = code;
}

const i18n = new VueI18n({
  locale: response,
  fallbackLocale: response,
  messages
})

export default ({ app }) => {
  // Set i18n instance on app
  app.i18n = i18n
}

export { i18n }
