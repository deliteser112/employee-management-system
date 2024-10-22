import { createApp } from 'vue'
import { Quasar } from 'quasar'
import store from './store'
import router from './router'

import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'

import 'quasar/src/css/index.sass'

//import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(Quasar, {
    plugins: {}
})
    .use(store)
    .use(router)

app.mount('#app')
