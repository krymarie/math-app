<template>
  <v-container class="page-container">
    <Header />

    <v-container style="display: flex;">
      <!-- <v-navigation-drawer
        v-model="drawer"
        app="app"
        stateless="stateless"
        floating="floating"
        width="220"
        style="border: 2px solid red"
      > -->
      <v-list style="width: 40px;">
        <v-list-tile
          v-for="(menuItem, key) in sideMenu"
          :key="key"
          style="display: flex;"
        >
          <v-list-tile-action>
            <v-icon> {{ menuItem.icon }}</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <!-- </v-navigation-drawer> -->
      <!-- </v-container> -->

      <v-content>
        <h1>Cameron</h1>
        <p>Here we can conditionally pull each page</p>
      </v-content>
    </v-container>
  </v-container>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "App",
  el: "#app",

  data() {
    return {
      // import student data for this component
      sideMenu: [
        {
          icon: "home",
          key: "home"
        },
        {
          icon: "person",
          key: "person"
        },
        {
          icon: "info",
          key: "info"
        },
        {
          icon: "settings",
          key: "settings"
        }
      ]
    };
  },

  // methods: {
  //   clickToggleDrawer() {
  //     this.drawer = !this.drawer;
  //   }
  // },

  components: {
    Header
  }
};
</script>
