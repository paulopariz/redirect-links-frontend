import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/axios'
import './assets/css/main.css'
import VueSweetalert2 from "vue-sweetalert2"

Vue.config.productionTip = false

import "sweetalert2/dist/sweetalert2.min.css";

Vue.use(VueSweetalert2);


Vue.use(require('vue-moment'));



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
