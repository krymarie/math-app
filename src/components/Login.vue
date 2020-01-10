<template>
  <v-row justify="end">
  
    <v-dialog v-model="dialog" persistent max-width="80%" overlay-opacity=".85">
      <template v-slot:activator="{ on }">
        <v-btn color="#1b74bcff" dark rounded v-on="on">Login</v-btn>
      </template>
      <div class="close">
       <v-btn color="#fff" text @click="dialog = false"> <v-icon>fas fa-times</v-icon></v-btn>
      </div>
    <div class="layoutDialog">
      <v-card class="layoutCard">
         <!-- <v-btn color="#6d6e71" text @click="dialog = false"> <v-icon>fas fa-times</v-icon></v-btn> -->
          
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
             
                <v-text-field label="Email" required></v-text-field>
            
              
                <v-text-field label="Password" type="password" required></v-text-field>
  
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
  export default {
    data: () => ({
      dialog: false,
    }),
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
  margin-top: 10%;
}

.headline{
  text-align: center;
  width: 100%;
}

.containerLayout {
  width:70%;
}

.facebook{
  display: flex;
  justify-content:space-between;
}

.iconFacebook{
  width:5%;
} 

.started{
  margin-top:8%;
  margin-bottom: 20%;
}

h3{
  text-align: center;
}

.image{
  width:60%;
}
</style>