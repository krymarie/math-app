/* eslint-disable vue/valid-template-root */
<template>
<v-container class="header">
   <router-link to="/"  active-class="active" exact>
  <img
    class="logo"
    src="/assets/images/FLC-Logo-Large-2b.png"
  />
     </router-link>
  <app-login class="login"/>
  
  </v-container>


</template>


<script>

import login from '../components/Login'

  export default { 
    components: {
        'app-login' : login,
    },
    data: () => ({
      
    }),
  }
</script>

<style lang="sass" scoped>

.header
  display: flex

  .logo
    height: autos
    width: 110px
  .login
    padding-right: 10px
    padding-top: 20px

</style>