import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// import moment from 'moment' 
// import VueMoment from 'vue-moment'
// require('moment/locale/fr')
// moment.locale('fr')

createApp(App).use(store).use(router).mount("#app");