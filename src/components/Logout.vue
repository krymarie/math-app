<template>
<div>
  <section >
  <v-row justify="end" >
  
    <v-dialog v-model="dialog" persistent max-width="80%" overlay-opacity=".85" >
      <template v-slot:activator="{ on }" >
        
        <v-btn  color="#1b74bcff"  dark rounded v-on="on" >Logout</v-btn>
  
      </template>
 
    <div class="layoutDialog">
      <v-card class="layoutCard">
       <v-btn color="#6d6e71"   text @click="dialog = false" class="close"> <v-icon>fas fa-times</v-icon></v-btn>
          
        <div class="layout">
        <v-img
          class="logo"
          src="/assets/images/FLC-Logo-Large-2b.png"
        ></v-img>
        </div>
     
        <v-card-text>
          <v-container class="containerLayout">
            <v-row>
               <v-text-field
                class="infomation" 
                @blur="$v.email.$touch()"
                v-model.lazy="email"
                :rules="emailRules"
                label="Email"
                required
                type="email"
                id="email"
               ></v-text-field>
 
              
            
            <v-btn  color="#1b74bcff"  tile  block class="started" type="submit" @click="logOUT" value="submit" to="/" :disabled="$v.$invalid">Logout</v-btn>
               
                
            </v-row>
          </v-container>
        </v-card-text>
       </v-card> 
     
       <v-img
          class="image"
          src="/assets/images/loginWriting.jpg"
          gradient="to top right, rgba(166,29,54,.33), rgba(27,116,188,.7)"
        ></v-img>
       
    </div>
    </v-dialog>
  </v-row>
  </section>
   
</div>
</template>


<script>

import { required, email, } from 'vuelidate/lib/validators'

  export default {

    data: () => ({
      show1: '',
      show: '',
      dialog: false,
      dialog2: false,
      dialog3: false,
      token: "",
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    
     
      formData: '',
   
    }),
     validations: {
       email:{
         required,
         email,
       },
       User: '',
   },
   methods:{
    logOUT(){
    // eslint-disable-next-line no-console
       console.log('logout')
     }
   }
  }
</script>

<style scoped>

.close{
  display: flex;
  justify-content: start;  
  margin: 0;
}

.layoutDialog{
  display:flex;
}

.layoutCard{
  width:40%;
}

.layout{
  display: flex;
  justify-content: center;

}

.logo{
  max-width:25%;
}

.infomation{
  padding: 0;
  margin: 0;
}

.headline{
  text-align: center;
  width: 100%;
  margin: 0 0 -5% 0;
}

.containerLayout {
  width:80%;
}

.started{
  margin-top:8%;
  margin-bottom: 8%;
  color: #fff;
}

h3{
  text-align: center;
}

.image{
  width:60%;
}

p {
  text-align: center;
  font-size: 1.3rem;
  width: 100%;
}

h4{
  margin: 2% 0;
}

.recovery {
  text-align: start;
  margin-top: 4%;
}


</style>