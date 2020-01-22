<template>
    <v-container class="body border">
      
      <Header/>
      <app-newAccount class="new-account"/>
    

 
        <h1> OPPS! | 404 </h1>
        <h2> We can't seem to find the page you're looking for. </h2>
        <p> The page you are looking for might have been removed, had its name changed</p>
        <p> or is temporarily univalibale. </p>
        <div class="buttonBox">
          <v-btn  color="#a61d36ff"  dark rounded v-on="on" class="buttonRow">Go Home</v-btn>
          <v-btn  color= "#1b74bcff" outlined rounded v-on="on" class="buttonRow">Contact Us</v-btn>
        </div>
  
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
  created(){
      setTimeout( () => this.$router.push({ path: '/'}), 300000);
  }

}
</script>

<style scoped >
.border{
  width:1000px;
  height: 100%;
}
.new-account{
  position: relative;
  left: -110px;
  top: -55px;
}

h1{
  text-align: center;
  font-size: 72px;
   background: linear-gradient(to right, #a61d36ff, #1b74bcff); 
  /* clip hackery */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
h2{
  color: #6d6e71;
  text-align: center;
  margin: 4% 0;
}

 p{
  color: #6d6e71;
  text-align: center;
  line-height: 3%;
 
}
.buttonBox{
  display: flex;
  justify-content: center;
  margin: 4% 0;
}

.buttonRow{
  margin: 0 4%;
}

</style>