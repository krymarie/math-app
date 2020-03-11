<template>
  <div>
    <Header />
    <v-content>
      <LogInModal />
    </v-content>
    <!-- <v-if="logIn = true">  -->
    <!-- v-navigation drawer
    thsi is where the css is dropped for this part of the product not sure why
    works for everything else i import...figure this out...
    look into what's diffrent-->
    <v-navigation-drawer
      v-model="drawer"
      app="app"
      stateless="stateless"
      floating="floating"
      width="220"
    >
      <v-toolbar class="blue darken-3">
        <!-- <router-view></router-view> -->
        <v-list>
          <!-- can't have @click empt of it breaks the build -->
          <!-- <v-list-tile @click="">
            <v-list-tile-content><v-list-tile-title.title class=v-icon.mr-2 home>FLC Account Manager</v-list-tile-title.title>
              <v-icon>mdi-mouse</v-icon>
            </v-list-tile-content>
          </v-list-tile> -->
        </v-list>
      </v-toolbar>

      <!-- Look here to wee where the css is breaking could be one missig tag from when i transfered it from codePen -->
      <v-list>
        <!-- @click is here waiting for me to add the logic that will updat wich mainMenu item is slected css and routes -->
        <!-- <v-list-tile v-for="(title, icon) in mainMenu" @click=""> can't have this empty or it breaks the build -->

        <v-list-tile-action>
          <v-icon> {{ icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title> {{ title }}</v-list-tile-title>
        </v-list-tile-content>

        <!-- </v-list-tile> -->
      </v-list>
    </v-navigation-drawer>

    <!-- This is also missing it's css so somthing is missing here as well -->
    <!-- Toolbar -->
    <v-toolbar class="blue darken-4" app="app">
      <v-toolbar-side-icon
        @click.stop="clickToggleDrawer"
      ></v-toolbar-side-icon>

      <v-spacer></v-spacer>

      <v-btn icon="icon">
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon="icon">
        <v-icon>email</v-icon>
      </v-btn>

      <v-menu offset-y="offset-y">
        <v-btn flat="flat" slot="activator" small="small"
          >FLC Account Manager
          <v-icon>keyboard_arrow_down</v-icon>
        </v-btn>
        <v-list>
          <!-- empty @ click breaking build -->
          <!-- <v-list-tile @click="">
            <v-icon class="mr-2">settings</v-icon>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile> -->
          <!-- empty @ click breaking build -->
          <!-- <v-list-tile @click="">
            <v-icon class="mr-2">exit_to_app</v-icon>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile> -->
        </v-list>
      </v-menu>

      <v-avatar class="mr-2" size="36"
        ><img src="https://avatars3.githubusercontent.com/u/4356894?s=400&v=4"
      /></v-avatar>
    </v-toolbar>
    <!-- Import CRM Content Here If Log In True && if index/CRM(home).vue-->
    <v-content>
      <CRM />
    </v-content>
    <!-- @endif -->
  </div>
</template>

<script>
import CRM from "../components/CRM";
import LogInModal from "../components/LogInModal";
import Header from "../components/Header";
// import Vue from 'vue';//check this since i moved everything around

export default {
  name: "App",
  el: "#app",

  data: () => ({
    drawer: true,
    mainMenu: {
      home: "Home",
      people: "Parents/Teachers",
      person: "Students",
      info: "Analytics",
      settings: "Settings"
    }
  }),

  methods: {
    clickToggleDrawer() {
      this.drawer = !this.drawer;
    }
  },

  components: {
    CRM,
    LogInModal,
    Header
  }
};
</script>
