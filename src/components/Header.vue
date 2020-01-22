<template>
<v-container class="header">
  <img
    class="logo"
    src="/assets/images/FLC-Logo-Large-2b.png"
  />
  <app-login class="login"/>
  </v-container>
</template>


<script>
import login from '../components/Login'

  export default {
    components: {
        'app-login' : login
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