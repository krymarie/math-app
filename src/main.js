import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import vuetify from "./plugins/vuetify";
import Vuelidate from "vuelidate";
/* import ApolloClient from "apollo-boost"; */
/*  import { createProvider } from "./vue-apollo"  */

import { routes } from "./routes";

/* const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: "http://localhost:8000/graphql"
});
 */
/* Vue.use(VueApollo); */
Vue.use(VueRouter);
Vue.use(Vuelidate);

const router = new VueRouter({
  routes,

  mode: "history"
});

new Vue({
  el: "#app",
  vuetify,
  router,
/*    apolloProvider: createProvider(),  */
  render: h => h(App)
}).$mount("#app");
