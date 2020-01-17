<template>
  <div class="border">
      <h1> Home </h1>
      <app-login></app-login> 
      <app-newAccount></app-newAccount>
  </div>
</template>

<script>
import login from '../components/Login'
import newAccount from '../components/NewAccount'

export default {
  name: 'App',
  components: {
    'app-login' : login,
    'app-newAccount' : newAccount,
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