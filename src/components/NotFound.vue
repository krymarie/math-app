<template>
    <v-container class="body border">
      
      <app-header/>
     

 
        <h1> Oops! | 404 </h1>
        <h2> We can't seem to find the page you're looking for. </h2>
        <p> The page you are looking for might have been removed, had its name changed</p>
        <p> or is temporarily univalibale. </p>
        <div class="buttonBox">
           <router-link to="/" tag="li" exact>
              <v-btn  color="#a61d36ff"  dark rounded v-on="on" class="buttonRow">Go Home</v-btn>
            </router-link>
          <v-btn  color= "#1b74bcff" outlined rounded v-on="on" class="buttonRow">Contact Us</v-btn>
        </div>
          
          <app-footer/>
  </v-container>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Foot'

export default {
  name: 'App',
  components: {
  'app-header' : Header,
    'app-footer': Footer
  },

  data: () => ({
       
  }),
  created(){
      setTimeout( () => this.$router.push({ path: '/'}), 60000);
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
  font-size: 8rem;
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
  justify-content: space-evenly;
  margin: 4% 25%;
}



li{
  list-style: none;
}

</style>