<template>
  <v-card href="/studentdashboard" hover height="auto" class="studentCard">
    <v-card-title class="studentAvatar">
      <v-img
        class="avatarImage"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa_RduMlXDb9A-mc_msw8SXpfyv5L3pZvZyLKFKYdf1ZTM4zdd&s"
      />
    </v-card-title>
    <h2 style="padding: 10px">{{ options.firstName}}</h2>
  </v-card>
</template>

<script>
export default {
    components: {},
    inheritAttrs: false,
    props: {
        options: {required: true, type: Object }
    }
}
</script>

<style lang="sass" scoped>
.studentCard
    margin: 10px

.studentAvatar
    background-color: lightgray

.avatarImage
    max-width: 100px
    max-height: 120px
</style>
