<template>
  <v-row justify="end">
  
    <v-dialog v-model="dialog" persistent max-width="80%" overlay-opacity=".85">
      <template v-slot:activator="{ on }">
        <v-btn  color="#1b74bcff"  dark rounded v-on="on">Login</v-btn>
      </template>
     <!--  <div class="close">
       <v-btn color="#fff" text @click="dialog = false"> <v-icon>fas fa-times</v-icon></v-btn>
      </div> -->
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
 
               <v-text-field                        
                  v-model="password"
                  @blur="$v.password.$touch()"
                  :append-icon="show ? 'visibility' : 'visibility_off'"
                  :rules="[rules.required, rules.min]"
                  :type="show ? 'text' : 'password'"
                  name="password"
                  label="Enter Password"
                  hint="At least 8 characters"
                  id="password"
                  counter
                  @click:append="show = !show"
              ></v-text-field>
            
            <v-btn  color="#a61d36ff"  tile  block class="started" type="submit" @click="logIN()" value="submit" to="/maindashboard" :disabled="$v.$invalid">Login</v-btn>
              
                <h3 class="headline"> 
                  <v-btn
                  text
                    color="primary"
                          dark
                          @click="dialog2 = true"
                  > 
                   Forgot Password
                  </v-btn> 
                </h3>
                <v-dialog
                  v-model="dialog2"
                  max-width="500px"
                    >
                    <v-card>
                         <v-btn color="#6d6e71"   text @click="dialog2 = false" class="close"> <v-icon>fas fa-times</v-icon></v-btn>
                      <v-card-title class="headline" >
                        Recover Password
                      </v-card-title>
                    <v-card-text>
                      <p class="recovery"> Please enter the email you used when creating an account.</p>
                  <p class="recovery">We will send you an email with a link to a page where you can create a new password. </p>
                      <v-text-field
                      class="infomation" 
                      @blur="$v.recoverEmail.$touch()"
                      v-model.lazy="recoverEmail"
                      :rules="recoverEmail"
                      label="Email"
                      required
                      type="email"
                    ></v-text-field>
                     <v-btn  color="#a61d36ff"  tile  block @click="dialog = false" class="started" type="submit">Recover Password</v-btn>
                  </v-card-text>
         
          </v-card>
        </v-dialog>
                
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
</template>


<script>

import { required, minLength, email, } from 'vuelidate/lib/validators'

  export default {

    data: () => ({
      show1: '',
      show: '',
      dialog: false,
      dialog2: false,
      token: "",
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    
      password: '',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match'),
      },

      recoverEmail: '',
      recoverEmailRules: [
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
       password: {
         required,
         minLength: minLength(8)
       },
       User: '',
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