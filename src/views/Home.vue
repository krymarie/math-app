<template>
    <v-container class="body border">
      
      <Header/>
      <app-newAccount class="new-account"/>
    

      <v-container>
        <h1> Home </h1>
        <!-- Code Home Page Here uses SASS below as set scoped.. -->
      </v-container>
  
  </v-container>
</template>

<script>
import login from '../components/Login'
import newAccount from '../components/NewAccount'
import Header from '../components/Header'

export default {
  name: 'App',
  components: {
    'app-login' : login,
    'app-newAccount' : newAccount,
    Header
  },

  data: () => ({
       
  }),
}
</script>

<style scoped lang="sass">
.border
  width:1000px 
  height: 100%
.new-account
  position: relative
  left: -110px
  top: -55px

h1
  text-align: center

</style>