<template>
  <div>
    <Header/>
    <v-header>  
      <LogInModal/>
    </v-header>
    
    <v-navigation-drawer v-model="drawer" app="app" stateless="stateless" floating="floating" width="220">
      <v-list>
          <v-img
        class="logo"
        src="/assets/images/FLC-Logo-Large-2b.png"
        style="width: 100px"
      />
        <v-list-tile v-for="(title, icon) in mainMenu" @click="" style="display: flex">
          
          <v-list-tile-action>
            <v-icon> {{ icon }}</v-icon>
          </v-list-tile-action>
      
          <v-list-tile-content>
            <v-list-tile-title> {{ title }}</v-list-tile-title>
          </v-list-tile-content>  

        </v-list-tile>
      </v-list>

    </v-navigation-drawer>

    <v-content> 
        <h1>Cameron</h1>
        <p>Here we can conditionally pull each page</p>
    </v-content>
  </div>
</template>

<script>
import CRM from '../components/CRM';
import LogInModal from '../components/LogInModal';
import Vue from 'vue';//check this since i moved everything around
import Header from '../components/Header'

export default {
  name: 'App',
  el: '#app',

  data: () => ({
    drawer: true,
    mainMenu: {
      home: '',
      person: '',
      info: '',
      settings: '',
    },
  }),

  methods: {
    clickToggleDrawer() {
      this.drawer = !this.drawer
    },
  },
  
  components: {
    LogInModal,
    Header
  },
};
</script>
