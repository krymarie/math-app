<template>
  <v-container class="page-container">
    <Header />
    <h1>Who's Learning?</h1>

    <v-container>
      <v-layout style="justify-content: center;">
        <v-flex xs12 sm6 style="display: flex;">
          <!-- itterates over student data to populate student tiles -->
          <div v-for="(student, key) in students" :key="key">
            <StudentCard :options="student" />
          </div>
          <!-- TODO: add function to open Add Student Modal -->
          <StudentCard
            :options="addStudent"
            class="addStudent"
            @click="openAddStudenModal"
          />
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import Header from "../components/Header";
import StudentCard from "../components/StudentCard";

export default {
  name: "App",
  components: {
    Header,
    StudentCard
  },

  data() {
    return {
      // import student data for this component
      students: [
        {
          firstName: "Cameron",
          key: "00001"
        },
        {
          firstName: "Kelly",
          key: "00002"
        },
        {
          firstName: "Sam",
          key: "00003"
        }
      ],
      addStudent: { firstName: "+ Add", key: "00000" }
    };
  }
};
</script>
<style lang="sass">
.page-container
  width:1200px
  height: 100%
</style>

<style lang="sass" scoped>
h1
  font-size: 40px
  margin-top: 40px
  text-align: center

.addStudent
    opacity: 0.3
</style>
