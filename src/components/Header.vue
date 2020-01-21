<template>
  <v-img
    class="logo"
    src="/assets/images/FLC-Logo-Large-2b.png"
    style="width: 100px"
  />
  <app-login style="padding-right: 10px" />
  <h1 style="font-size: 40px; margin-top: 40px">Who's Learning?</h1>
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

<style scoped>



</style>