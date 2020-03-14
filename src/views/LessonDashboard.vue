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
        <v-img
          class="avatarImage"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa_RduMlXDb9A-mc_msw8SXpfyv5L3pZvZyLKFKYdf1ZTM4zdd&s"
        />
        <h1>{{ studentName }}</h1>
        <h2>Unit {{ currentUnit }}</h2>
        <h2>Lesson {{ currentLesson }}</h2>
        <v-progress-circular
          color="rgb(27, 116, 188)"
          :value="progress"
          :rotate="-90"
          :size="150"
          :width="30"
        ></v-progress-circular>
        <v-stepper v-model="e6" vertical>
          <!-- Itterate over these with v-for and props since each unit had diffren number of lessons -->
          <v-stepper-step :complete="e6 > 1" step="1">
            Current Lesson
            <small>Lesson 1</small>
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-card color="grey lighten-1" class="mb-12" height="200px">
              <v-btn color="primary" @click="updateLessonProgressPercentage"
                >Continue</v-btn
              >
            </v-card>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 2" step="2">Lesson 2</v-stepper-step>
          <v-stepper-content step="2">
            <v-card color="grey lighten-1" class="mb-12" height="200px"
              ><v-btn color="primary" @click="updateLessonProgressPercentage"
                >Continue</v-btn
              ></v-card
            >
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 3" step="3">Lesson 3</v-stepper-step>
          <v-stepper-content step="3">
            <v-card color="grey lighten-1" class="mb-12" height="200px"
              ><v-btn color="primary" @click="updateLessonProgressPercentage"
                >Continue</v-btn
              ></v-card
            >
          </v-stepper-content>

          <v-stepper-step step="4"
            >Lesson 4 - Last Lesson Example Test</v-stepper-step
          >
          <v-stepper-content step="4">
            <v-card color="grey lighten-1" class="mb-12" height="200px"
              ><v-btn color="primary" @click="updateUnitProgress"
                >Complete Unit and Update Unit Test</v-btn
              ></v-card
            >
          </v-stepper-content>
          <!--  @click="e6 = 2" set e6 to next unit...update e6 to current Unit and currentLesson...-->
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
      //student data imported and set in store
      studentName: "Cameron P", //api
      totalLessons: 23, //UPDATE HERE IF LESSONS/REVIEWS COUNT CHANGES
      currentLesson: 1, //pull from api
      currentUnit: 4,
      progress: 0 //this is the default used for increment
    };
  },
  methods: {
    updateLessonProgressPercentage() {
      // let unitIncrement = (this.currentUnit / this.totalUnits) * 100;
      let lessonIncrement = 100 / this.totalLessons; //gets increment percentage
      this.progress = this.progress + lessonIncrement; //update progress donut complete percentage
      this.currentLesson = this.currentLesson + 1; //updates current unit locally needs to also update api
      this.e6 = this.e6 + 1;
      //also need to update current unit in api once added incase accidental closure...
    },
    updateUnitProgress() {
      this.currentUnit = this.currentUnit + 1; //updates current unit locally need to update api so when page loads it populates correct unit
      //after currentUnit is updated ink back to student dashboard onload this will pull currentUnit to populate progress
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
