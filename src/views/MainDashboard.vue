<template>
  <v-container>
    <Header />
    <h1 style="font-size: 40px; margin-top: 40px">Who's Learning?</h1>

    <v-container>
      <v-layout>
        <v-flex xs12 sm6 style="display: flex;">
          <v-card href="/studentdashboard" hover height="auto" class="studentCard">
            <v-card-title class="studentAvatar">
              <v-img
                class="avatarImage"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa_RduMlXDb9A-mc_msw8SXpfyv5L3pZvZyLKFKYdf1ZTM4zdd&s"
              />
            </v-card-title>
            <h2 style="padding: 10px">Cameron</h2>
          </v-card>
          <v-card href="/studentdashboard" hover height="auto" class="studentCard">
            <v-card-title class="studentAvatar">
              <v-img
                class="avatarImage"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa_RduMlXDb9A-mc_msw8SXpfyv5L3pZvZyLKFKYdf1ZTM4zdd&s"
              />
            </v-card-title>
            <h2 style="padding: 10px">Sally</h2>
          </v-card>
          <br />
          <v-card href="/studentdashboard" hover height="auto" class="studentCard">
            <v-card-title class="studentAvatar">
              <v-img
                class="avatarImage"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa_RduMlXDb9A-mc_msw8SXpfyv5L3pZvZyLKFKYdf1ZTM4zdd&s"
              />
            </v-card-title>
            <h2 style="padding: 10px">John</h2>
          </v-card>
          <v-card href="#" hover height="auto" class="studentCard addStudent">
            <v-card-title class="studentAvatar">
              <v-img
                class="avatarImage"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa_RduMlXDb9A-mc_msw8SXpfyv5L3pZvZyLKFKYdf1ZTM4zdd&s"
              />
            </v-card-title>
            <h2 style="padding: 10px">+ Add</h2>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "App",
  components: {
    Header
  },

  data: () => ({})
};
</script>

<style lang="sass" scoped>
.border
  width:1000px
  height: 100%

h1
  text-align: center

.studentCard
    margin: 10px

.addStudent
    opacity: 0.3

.studentAvatar
    background-color: lightgray

.avatarImage
    max-width: 100px
    max-height: 120px

</style>