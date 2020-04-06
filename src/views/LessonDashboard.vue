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
            <!-- Itterate over these with v-for and props since each unit had diffren number of lessons -->
            <v-stepper-step :complete="e6 > 1" step="1">Lesson 1</v-stepper-step>

            <v-stepper-content step="1">
              <v-card color="grey lighten-1" class="mb-12" height="400px">
                <!-- TODO: needs to be refactored to work in .vue 
                           this may need to be last if time or next 
                           semesters project since each lesson will 
                           need to be refactord -->
                <!-- <div
                  id="unitonelessonone_hype_container"
                  style="margin:auto;position:relative;width:1024px;height:900px;overflow:hidden;"
                ></div>-->
                <!-- attempt at lesson conten -->
                <v-btn color="primary" @click="updateLessonProgressPercentage">Continue</v-btn>
              </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 2" step="2">Lesson 2</v-stepper-step>
            <v-stepper-content step="2">
              <v-card color="grey lighten-1" class="mb-12" height="400px">
                <v-btn color="primary" @click="updateLessonProgressPercentage">Continue</v-btn>
              </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 3" step="3">Lesson 3</v-stepper-step>
            <v-stepper-content step="3">
              <v-card color="grey lighten-1" class="mb-12" height="400px">
                <v-btn color="primary" @click="updateLessonProgressPercentage">Continue</v-btn>
              </v-card>
            </v-stepper-content>

            <v-stepper-step step="4">Lesson 4 - Last Lesson Example Test</v-stepper-step>
            <v-stepper-content step="4">
              <v-card color="grey lighten-1" class="mb-12" height="400px">
                <v-btn
                  color="primary"
                  @click="updateUnitProgress"
                >Complete Unit and Update Unit Test</v-btn>
              </v-card>
            </v-stepper-content>
            <!--  @click="e6 = 2" set e6 to next unit...update e6 to current Unit and currentLesson...-->
          </v-stepper>
        </div>

        <!-- needs to render last since it's absoute on top for unit dashboar/studentdashboard -->
        <div class="donut" style="display: flex; justify-content: flex-end; flex-direction: row;">
          <h2
            style="display: inline; padding: 20px"
            class="currentUnit"
          >Unit {{ currentUnit }}: Lesson {{ currentLesson }}</h2>
          <v-progress-circular
            style="margin-bottom: 10px;"
            color="rgb(27, 116, 188)"
            :value="progress"
            :rotate="-90"
            :size="60"
            :width="15"
          />
          <div style="display: inline"></div>
        </div>
        <!-- end of  donut -->
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

.studentName
  width: 50%
  padding-left: 15px
.donut
  position: absolute
  top: 0px
  right: 1px
  padding: 10px
  clear: left
  float: right
.currentUnit
  display: flex
  justify-content: center
  clear: left
</style>
