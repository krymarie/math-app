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
      <v-list style="width: 70px; padding-top: 20px; background-color: gray; margin-right: 20px;">
        <v-list-tile
          v-for="(menuItem, key) in sideMenu"
          :key="key"
          style="display: flex; padding: 0 0 10px 15px;"
        >
          <v-list-tile-action>
            <v-icon
              style="display: flex; padding-bottom: 20px; color: white; font-size: 40px;"
            >{{ menuItem.icon }}</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <!-- </v-navigation-drawer> -->
      <!-- </v-container> -->

      <v-content>
        <div style="display: flex; padding-top: 20px;">
          <v-img
            class="avatarImage"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa_RduMlXDb9A-mc_msw8SXpfyv5L3pZvZyLKFKYdf1ZTM4zdd&s"
          />
          <h1 class="studentName">{{ studentName }}</h1>
        </div>

        <div style="padding-top: 20px;">
          <v-stepper v-model="e6" vertical>
            <!-- itterate ofer units available from db with a v-for units as unit... to created these -->

            <v-stepper-step :complete="e6 > 1" step="1">
              Unit 1
              <!-- <small>Unit 1</small> -->
            </v-stepper-step>
            <v-stepper-content step="1">
              <v-btn color="primary" href="/lessondashboard">Begin Unit 1</v-btn>
              <v-btn text @click="updateUnitProgressPercentage">SKIP FOR DEV ONLY</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 2" step="2">Unit 2</v-stepper-step>
            <v-stepper-content step="2">
              <v-btn color="primary" href="/lessondashboard">Begin Unit 2</v-btn>
              <v-btn text @click="updateUnitProgressPercentage">SKIP FOR DEV ONLY</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 3" step="3">Unit 3</v-stepper-step>
            <v-stepper-content step="3">
              <v-btn color="primary" href="/lessondashboard">Begin Unit 3</v-btn>
              <v-btn text @click="updateUnitProgressPercentage">SKIP FOR DEV ONLY</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 4" step="4">Unit 4</v-stepper-step>
            <v-stepper-content step="4">
              <v-btn color="primary" href="/lessondashboard">Begin Unit 4</v-btn>
              <v-btn text @click="updateUnitProgressPercentage">SKIP FOR DEV ONLY</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 5" step="5">Unit 5</v-stepper-step>
            <v-stepper-content step="5">
              <v-btn color="primary" href="/lessondashboard">Begin Unit 5</v-btn>
              <v-btn text @click="updateUnitProgressPercentage">SKIP FOR DEV ONLY</v-btn>
            </v-stepper-content>

            <v-stepper-step step="6">Unit 6</v-stepper-step>
            <v-stepper-content step="6">
              <v-btn color="primary" href="/lessondashboard">Begin Unit 6</v-btn>
              <v-btn text @click="e6 = 1">SKIP FOR DEV ONLY</v-btn>
              <!-- change the last @click for last unit load "Congratulations View"" -->
            </v-stepper-content>
          </v-stepper>
        </div>
        <!-- needs to render last since it's absoute on top for unit dashboar/studentdashboard -->
        <div
          class="donut"
          style="display: flex; justify-content: flex-end; flex-direction: column;"
        >
          <v-progress-circular
            style="margin-bottom: 20px;"
            color="rgb(27, 116, 188)"
            :value="progress"
            :rotate="-90"
            :size="300"
            :width="60"
          />
          <div style="display: inline">
            <h2 class="currentUnit">Unit {{ currentUnit }}</h2>
          </div>
        </div>
      </v-content>
    </v-container>
  </v-container>
</template>

<script>
import Header from "../components/Headerout";

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
      this.e6 = this.e6 + 1;
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
.studentName
  width: 50%
  padding-left: 15px
.donut
  position: absolute
  top: 120px
  right: 50px
  padding: 20px
  clear: left
  float: right
.currentUnit
  display: flex
  justify-content: center
  clear: left
</style>
