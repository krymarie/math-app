import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'

import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
  el: '#app',
  vuetify,
  router,

  render: h => h(App)
}).$mount('#app')
