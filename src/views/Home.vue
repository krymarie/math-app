<template>
  <div class="border">
      <h1> Home </h1>
      <app-login></app-login>
  </div>
</template>

<script>
import login from '../components/Login'

export default {
  name: 'App',
  components: {
    'app-login' : login,
  },

  data: () => ({
       
  }),
}
</script>

<style scoped>
.border{
  width:1000px;
  height: 100%;
}
h1{
  text-align: center;
}
</style>