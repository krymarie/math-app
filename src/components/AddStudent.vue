<template>
 <v-card hover height="auto" class="studentCard">
    <v-card-title class="studentAvatar">
      <v-img
        class="avatarImage"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa_RduMlXDb9A-mc_msw8SXpfyv5L3pZvZyLKFKYdf1ZTM4zdd&s"
      />
    </v-card-title>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="300px">
      <template v-slot:activator="{ on }">
        <v-btn class="AddBtn" color="primary" tile width="131px" height="52px" large dark v-on="on">+ Add</v-btn>
      </template>
  <v-card>
         <v-btn class="closing" color="#6d6e71" text @click="dialog = false"><v-icon>fas fa-times</v-icon></v-btn>
        <v-card-title class="headliner">
         
          <span class="headline">New Student</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col >
                <v-text-field label="name*" v-model="name" required></v-text-field>
              </v-col>
         
    
            </v-row>
          </v-container>
    
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
                      
          <v-btn class="function"   color="#a61d36ff" tile  block dark  text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card> 
    </v-dialog>
  </v-row>
 </v-card>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      name: ""
    }),
  }
</script>

<style scoped>
.headliner{
    display: flex;
    justify-content: space-between;
}
.studentCard{
    margin: 10px;
}

.studentAvatar{
    background-color: lightgray;
}

.avatarImage{
    max-width: 100px;
    max-height: 120px;
}

.AddBtn{
    width: 10px;
}
</style>