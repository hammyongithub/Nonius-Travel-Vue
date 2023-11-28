// import axios from 'axios'

// axios.defaults.withCredentials = true

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'

const vuetify = createVuetify({
  components,
  directives,
})

app.use(router)
app.use(vuetify)

app.mount('#app')