<template>
  <v-row justify="end">
    <v-dialog v-model="dialog" persistent max-width="80%" overlay-opacity=".85">
      <template v-slot:activator="{ on }">
        <v-btn color="#a61d36ff" dark rounded v-on="on"
          >Create Free Account</v-btn
        >
      </template>
      <!--  <div class="close">
       <v-btn color="#fff" text @click="dialog = false"> <v-icon>fas fa-times</v-icon></v-btn>
      </div>-->
      <div class="layoutDialog">
        <v-card class="layoutCard">
          <v-btn color="#6d6e71" text @click="dialog = false" class="close">
            <v-icon>fas fa-times</v-icon>
          </v-btn>

          <div class="layout">
            <v-img
              class="logo"
              src="/assets/images/FLC-Logo-Large-2b.png"
            ></v-img>
          </div>
          <v-card-title>
            <h3 class="headline">Create an account</h3>
          </v-card-title>
          <v-card-text>
            <v-container class="containerLayout">
              <v-row>
                <v-btn
                  color="#1b74bcff"
                  tile
                  dark
                  block
                  @click="dialog = false"
                  class="facebook"
                >
                  <v-icon class="iconFacebook">fab fa-facebook-f</v-icon>Sign Up
                  with FaceBook
                </v-btn>

                <p>-- or --</p>

                <v-text-field
                  class="infomation"
                  @blur="$v.email.$touch()"
                  v-model.lazy="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                  type="email"
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  @blur="$v.password.$touch()"
                  :append-icon="show ? 'visibility' : 'visibility_off'"
                  :rules="[rules.required, rules.min]"
                  :type="show ? 'text' : 'password'"
                  name="password"
                  label="Enter Password"
                  hint="At least 8 characters"
                  counter
                  @click:append="show = !show"
                ></v-text-field>
                <v-text-field
                  v-model="confirmPassword"
                  @blur="$v.confirmPassword.$touch()"
                  :append-icon="show1 ? 'visibility' : 'visibility_off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="Re-enter Password"
                  hint="Password must match"
                  counter
                  @click:append="show1 = !show1"
                ></v-text-field>
                <v-btn
                  color="#a61d36ff"
                  tile
                  block
                  @click="dialog = false"
                  class="started"
                  type="submit"
                  :disabled="$v.$invalid"
                  >Get Started</v-btn
                >

                <h3 class="headline">
                  Already have an account?
                  <v-btn text color="primary" type="submit">Login</v-btn>
                </h3>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>

        <v-img
          class="image"
          src="/assets/images/loginWriting.jpg"
          gradient="to top right, rgba(166,29,54,.33), rgba(27,116,188,.7)"
        ></v-img>
      </div>
    </v-dialog>
  </v-row>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
export default {
  data: () => ({
    show1: "",
    show: "",
    dialog: false,
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],

    password: "",
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match"
    },
    confirmPassword: "",
    required: value => !!value || "Required.",
    min: v => v.length >= 8 || "Password must match"
  }),
  validations: {
    email: {
      required,
      email
      // unique: value => {}
    },
    password: {
      required,
      minLength: minLength(8)
    },
    confirmPassword: {
      required,
      sameAs: sameAs("password")
    }
  }
};
</script>

<style scoped>
.close {
  display: flex;
  justify-content: start;
  margin: 0;
}

.layoutDialog {
  display: flex;
}

.layoutCard {
  width: 40%;
}

.layout {
  display: flex;git
  justify-content: center;
  margin: -5% 0 -2% 0;
}

.logo {
  max-width: 25%;
}

.infomation {
  padding: 0;
  margin: 0;
}

.headline {
  text-align: center;
  width: 100%;
  margin: 0 0 -5% 0;
}

.containerLayout {
  width: 80%;
}

.facebook {
  display: flex;
  justify-content: space-between;
  margin: 0 0 4% 0;
}

.iconFacebook {
  width: 5%;
}

.started {
  margin-top: 6%;
  margin-bottom: 5%;
  color: #fff;
}

h3 {
  text-align: center;
}

.image {
  width: 60%;
}

p {
  text-align: center;
  font-size: 1.3rem;
  width: 100%;
}

h4 {
  margin: 2% 0;
}
</style>
