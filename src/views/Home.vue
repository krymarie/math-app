<template>

<v-layout fluid row wrap>
<Header/>
      <app-newAccount class="new-account"/>
<v-container class="mx-auto" no-gutters>
<v-col cols="12">
      <v-row>
      <v-col xs="12" >
      <v-card
      >
      <v-img contain class="heroImg white--text align-end" contain src="/assets/images/hero-600w.jpg"
      alt="heroImage"
      >
      <v-card-title class="heroTitle" >LEARN ALGEBRA FROM HOME</v-card-title>
      <v-card-subtitle class="heroSub" >With Algebra Core, enjoy our free software and start learning now!</v-card-subtitle>
      </v-img>
      </v-card>
      </v-col>
      </v-row>
</v-col>
  </v-container>


  <v-container>
  <v-col cols="12">
 <v-row justify="center" >
 <v-col xs="8">
<h1 class="pa-2" >Virtues of Algebra From Home:</h1>
</v-col>
</v-row>
</v-col>
</v-container>


<v-container
>
<v-row row wrap
>

 <v-col
 cols="12"
   md="3"
 >
<p class="pa-8" >Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
</v-col>

 <v-col
 cols="12"
   md="3"
 >
<p class="pa-8" >Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
</v-col>
 <v-col
 cols="12"
   md="3"
 >
<p class="pa-8" >Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
</v-col>
 <v-col
 cols="12"
   md="3"
 >
<p class="pa-8" >Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
</v-col>
</v-row>
</v-container>

<v-container>
<v-row row wrap>
<v-col
cols="12"
md="6"
>
<v-img class="studentImg" src="/assets/images/hero-720w.jpg"></v-img>
</v-col>
<v-col
cols="6"
>

<h2 class="px-8">Lorem ipsum</h2>
<h3 class="px-8">Lorem ipsum dolor sit amet, consectetuer adipiscing</h3>
<p class=" paragraph col-10 pa-xs-3" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Ut sem viverra aliquet eget. Sagittis id consectetur purus ut faucibus pulvinar. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Amet est placerat in egestas erat imperdiet sed euismod.</p>
</v-col>
</v-row>
</v-container>

<v-container>
<v-row>
<v-col
cols="6"
>
<h1 class="pa-6" >Lasting Learning</h1>
<h3 class="pa-4" >Find out how Algebra From Home has helped others learn!</h3>
</v-col>
</v-row>
</v-container>

<v-container>
<v-row>
<v-col
cols="12"
>
<v-card>
<v-img class="studentImg"src="/assets/images/hero-720w.jpg"></v-img>
</v-card>
</v-col>
</v-row>
</v-container>


<v-container>
<v-row>
<v-col
cols="12"
>
<h1 class="pa-4" >Customer Stories</h1>
</v-col>
<v-col
cols="12"
>
        <v-slide-group
      v-model="model"
      class="pa-4"
      center-active
      show-arrows
    >
      <v-slide-item
        v-for="n in 15"
        :key="n"
        v-slot:default="{ active, toggle }"
      >
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          class="ma-4"
          height="200"
          width="375"
          @click="toggle"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
          <v-img 
          height="200"
          width="350"
          class="studentImg" contain src="/assets/images/hero-720w.jpg"></v-img>
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
    </v-col>
  </v-row>
  </v-container>
  
  </v-layout>
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
        justify: 'center',
      
    }),
    
}
</script>

<style scoped>
h1 {
  text-align: center;
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
</style>