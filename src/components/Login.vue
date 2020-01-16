<template>
  <v-row justify="end">
  
    <v-dialog v-model="dialog" persistent max-width="80%" overlay-opacity=".85">
      <template v-slot:activator="{ on }">
        <v-btn color="#1b74bcff" dark rounded v-on="on">Login</v-btn>
      </template>
     <!--  <div class="close">
       <v-btn color="#fff" text @click="dialog = false"> <v-icon>fas fa-times</v-icon></v-btn>
      </div> -->
    <div class="layoutDialog">
      <v-card class="layoutCard">
       <v-btn color="#6d6e71" text @click="dialog = false"> <v-icon>fas fa-times</v-icon></v-btn>
          
        <div class="layout">
        <v-img
          class="logo"
          src="/assets/images/FLC-Logo-Large-2b.png"
        ></v-img>
        </div>
        <v-card-title>
          <h3 class="headline">Create an account</h3>
        </v-card-title>
        <v-card-text>
          <v-container class="containerLayout">
            <v-row>

              <v-btn  color="#1b74bcff" tile dark block @click="dialog = false" class="facebook">
                <v-icon class="iconFacebook"> fab fa-facebook-f </v-icon>
                 Sign Up with FaceBook</v-btn>
             
              <p class="headline">
                <v-icon>fas fa-minus </v-icon>
                  or
                <v-icon>fas fa-minus </v-icon>
              </p>

               <v-text-field
               class="infomation" 
               @blur="$v.email.$touch()"
            v-model.lazy="email"
            :rules="emailRules"
            label="E-mail"
            required
            type="email"
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
            counter
            @click:append="show = !show"
          ></v-text-field>
           <v-text-field            
              v-model="rePassword"
              :append-icon="show1 ? 'visibility' : 'visibility_off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Re-enter Password"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
              <v-btn  color="#a61d36ff" tile dark block @click="dialog = false" class="started">Get Started</v-btn>

              <h3 class="headline">  Already have an account? <v-btn text color="primary">Login</v-btn> </h3>
                
                
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
      dialog: false,
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
      rePassword: '',
       required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
    }),
     validations: {
       email:{
         required,
         email,
       }
   }
 }

</script>

<style scoped>

.close{
  display: flex;
  justify-content: start;  
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
  margin-top: 2%;
}

.infomation{
  padding: 0;
  margin: 0;
}

.headline{
  text-align: center;
  width: 100%;
}

.containerLayout {
  width:80%;
}

.facebook{
  display: flex;
  justify-content:space-between;
}

.iconFacebook{
  width:5%;
} 

.started{
  margin-top:6%;
  margin-bottom: 10%;
}

h3{
  text-align: center;
}

.image{
  width:60%;
}

p {
  text-align: center;
}

h4{
  margin: 2% 0;
}
</style>