import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'

// vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
})

createApp(App)
    .use(vuetify)
    .use(router)
    .mount('#app')
