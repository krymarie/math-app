import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'
import { createProvider } from './vue-apollo'


import { routes } from './routes'

Vue.use(VueRouter);
Vue.use(Vuelidate)





const router = new VueRouter({
    routes,
 
    mode: 'history'
})

new Vue({
  el: '#app',
  vuetify,
  router,
  apolloProvider: createProvider(),

  render: h => h(App)
}).$mount('#app')
