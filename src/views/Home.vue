<template>
<div class="homeLayout">
<v-layout fluid row wrap>
  <app-header></app-header>
      <app-newAccount class="new-account"> </app-newAccount>

<v-container class="mx-auto" no-gutters>
  <v-row>
    <v-col cols="12"  xs="12" >
        <v-card>
          <v-img contain class="heroImg white--text align-end"  src="/assets/images/laptop-typing.jpg" gradient="to top right, rgba(166,29,54,.33), rgba(27,116,188,.7)"
          alt="heroImage">
            <v-card-title class="heroTitle" >LEARN ALGEBRA FROM HOME</v-card-title>
           <v-card-subtitle class="heroSub" >With Algebra Core, enjoy our free software and start learning now!</v-card-subtitle>
          </v-img>
        </v-card>
      </v-col>
     </v-row>
  </v-container>


  <v-container>
    <v-row   
      :align="alignment"
      :justify="justify">
      <v-col cols="12" justify="center" align="center">
        <h1 >Virtues of Algebra From Home:</h1>
      </v-col>
    </v-row>
</v-container>


<v-container class="textAlign">
  <v-row row wrap>
    <v-col cols="12" md="3">
      <p class="pa-4" >Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
    </v-col>

    <v-col cols="12" md="3">
      <p class="pa-4" >Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
    </v-col> 

      <v-col cols="12" md="3">
      <p class="pa-4" >Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
    </v-col>
    <v-col cols="12" md="3">
      <p class="pa-4" >Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
    </v-col>
  </v-row>
</v-container>

<v-container>
  <v-row row wrap>
    <v-col cols="12" md="6">
      <v-img class="studentImg" src="/assets/images/hero-720w.jpg" gradient="to top right, rgba(166,29,54,.33), rgba(27,116,188,.7)"></v-img>
    </v-col>

    <v-col cols="12" md="6">
      <h2 class="px-8">Lorem ipsum</h2>
      <h3 class="px-8">Lorem ipsum dolor sit amet, consectetuer adipiscing</h3>
      <p class=" paragraph col-10 pa-xs-3" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Ut sem viverra aliquet eget. Sagittis id consectetur purus ut faucibus pulvinar. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Amet est placerat in egestas erat imperdiet sed euismod.</p>
    </v-col>
  </v-row>
</v-container>

<v-container>
  <v-row>
    <v-col cols="12">
      <h1 class="pa-6" >Lasting Learning</h1>
      <h3 class="pa-4" >Find out how Algebra From Home has helped others learn!</h3>
    </v-col>
  </v-row>
</v-container>

<v-container>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-img class="studentImg" src="/assets/images/boy-math.jpg"  gradient="to top right, rgba(166,29,54,.33), rgba(27,116,188,.7)"></v-img>
      </v-card>
    </v-col>
  </v-row>
</v-container>


<v-container>
  <v-row>
    <v-col cols="12" md="4">
      <h1 class="pa-4" >Customer Stories</h1>
    </v-col>
    <v-col cols="12" md="8">
      <div class="slidesBack">
      <v-slide-group
      v-model="model">
        <v-slide-item
          v-for="(slide, i) in slides"
          :key="i"
          v-slot:default="{ active, toggle }">
          
          <v-card
            :color="white"
            class="ma-4"
            height="200"
            width="375"
            @click="toggle">
          
            <v-row
              class="fill-height pa-6 slidesText"
              align="center"
              justify="center">
              {{ slide }} 
                <v-scale-transition>
                  <v-icon
                    v-if="active"
                    color="purple lighten-3"
                    size="48"
                    v-text="'mdi-close-circle-outline'"
                  ></v-icon>
                </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
      </div>
    </v-col>
  </v-row>
</v-container>
  
</v-layout>
</div>
</template>

<script>
/* import login from '../components/Login' */
import newAccount from '../components/NewAccount'
import Header from '../components/Header'


export default {
  name: 'App',
  components: {
 /*    'app-login' : login, */
    'app-newAccount' : newAccount,
    'app-header' : Header
  },

   data: () => ({
      model: null,
        alignmentsAvailable: [
          'start',
          'center',
          'end',
          'baseline',
          'stretch',
        ],
        alignment: 'center',
        dense: false,
        justifyAvailable: [
          'start',
          'center',
          'end',
          'space-around',
          'space-between',
        ],
        slides: [
          'My son had the best experience using FLC to learn algebra. -Margaret',
          'I loved using FLC to learn algebra. It was so helpful and I was able to pick it up really quick. -John',
          'Using FLC, I was able to pick up Algebra really fast. This app was so helpful. -Joel',
          'I homeschool my kids and FLC was so helpful to teach my kids algebra. -Jolene',
          'FLC is the best app! using it to learn algebra is so easy! -Margot',
        ],
        justify: 'center',
      
    }),
    
}
</script>

<style scoped>
h1 {
  font-size: 36px;

}


.heroImg {
  max-width: 100vw;
}

.studentImg {
  max-width: 100vw;
}
.heroTitle {
  font-size: 24px;
}
.heroSub { font-size: 18px; padding: 10px; color: white; }
p { font-size: 16px; padding: 10px; }
.paragraph {
  max-width: 100vw;
}
.homeLayout {
  width: 100vw;
}
.textAlign {
  text-align: center;
}
</style>