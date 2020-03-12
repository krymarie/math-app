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
      >-->
      <v-list style="width: 40px;">
        <v-list-tile
          v-for="(menuItem, key) in sideMenu"
          :key="key"
          style="display: flex;"
        >
          <v-list-tile-action>
            <v-icon>{{ menuItem.icon }}</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <!-- </v-navigation-drawer> -->
      <!-- </v-container> -->

      <v-content>
        <v-img
          class="avatarImage"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa_RduMlXDb9A-mc_msw8SXpfyv5L3pZvZyLKFKYdf1ZTM4zdd&s"
        />
        <h1>{{ studentName }}</h1>
        <h2>Unit {{ currentUnit }}</h2>
        <v-progress-circular
          color="rgb(27, 116, 188)"
          :value="progress"
          :rotate="-90"
          :size="150"
          :width="30"
        ></v-progress-circular>
        <v-stepper v-model="e6" vertical>
          <!-- itterate ofer units available from db with a v-for units as unit... to created these -->

          <v-stepper-step :complete="e6 > 1" step="1">
            Current Unit
            <small>Unit 1</small>
          </v-stepper-step>
          <v-stepper-content step="1">
            <v-btn color="primary" href="/lessondashboard">Begin Unit 1</v-btn>
            <v-btn text @click="e6 = 2">SKIP FOR DEV ONLY</v-btn>
            <!-- This button and functionality will need to be stored in LessonDashboard added to end of unit HTML 
             it will need to first update the currentUnit then redirect back to studentDashboard whil updating-->
            <v-btn text @click="updateUnitProgressPercentage"
              >Update Unit Progress Test</v-btn
            >
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 2" step="2">Unit 2</v-stepper-step>
          <v-stepper-content step="2">
            <v-btn color="primary" href="/lessondashboard">Begin Unit 2</v-btn>
            <v-btn text @click="e6 = 3">SKIP FOR DEV ONLY</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 3" step="3">Unit 3</v-stepper-step>
          <v-stepper-content step="3">
            <v-btn color="primary" href="/lessondashboard">Begin Unit 3</v-btn>
            <v-btn text @click="e6 = 4">SKIP FOR DEV ONLY</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 4" step="4">Unit 4</v-stepper-step>
          <v-stepper-content step="4">
            <v-btn color="primary" href="/lessondashboard">Begin Unit 4</v-btn>
            <v-btn text @click="e6 = 5">SKIP FOR DEV ONLY</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 5" step="5">Unit 5</v-stepper-step>
          <v-stepper-content step="5">
            <v-btn color="primary" href="/lessondashboard">Begin Unit 5</v-btn>
            <v-btn text @click="e6 = 6">SKIP FOR DEV ONLY</v-btn>
          </v-stepper-content>

          <v-stepper-step step="6">Unit 6</v-stepper-step>
          <v-stepper-content step="6">
            <v-btn color="primary" href="/lessondashboard">Begin Unit 6</v-btn>
            <v-btn text @click="e6 = 1">SKIP FOR DEV ONLY</v-btn>
            <!-- change the last @click for last unit load "Congratulations View"" -->
          </v-stepper-content>
        </v-stepper>
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
      e6: 1,
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
      ],
      //student data imported and passed thru
      studentName: "Cameron P", //api
      totalUnits: 23, //can be stored here or api UPDATE IF NUMBER OF UNITS/REVIEWS change
      currentUnit: 1, //api
      progress: 0 //this is the default used for increment
    };
  },
  computed: {
    // moved to method made more sense
    // progressPercentage: function() {
    //   let currentProgress = '';
    //   currentProgress = this.progress + 0.3333;
    //   return currentProgress;
    // }
  },

  methods: {
    updateUnitProgressPercentage() {
      // let unitIncrement = (this.currentUnit / this.totalUnits) * 100;
      let unitIncrement = 100 / this.totalUnits; //gets increment percentage
      this.progress = this.progress + unitIncrement; //update progress donut complete percentage
      this.currentUnit = this.currentUnit + 1; //updates current unit locally
      //also need to update current unit in api once added incase accidental closure...
    }
    // clickToggleDrawer() {
    // this.drawer = !this.drawer;
    //   }
  },

  components: {
    Header
  }
};
</script>

<style lang="sass" scoped>
.progress-circular
  margin: 1rem

.avatarImage
  max-width: 40px
  max-height: 40px
  border-radius: 50px
</style>
