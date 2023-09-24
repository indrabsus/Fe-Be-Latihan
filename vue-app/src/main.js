import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import store from './store'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

const app = createApp(App)

app.use(vuetify)
// const vuetify = new Vuetify();
app.use(store)
app.use(router)
app.mount('#app')



