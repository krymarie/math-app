<template>
    <v-row justify="end">
        <v-dialog v-model="dialog" persistent max-width="80%" overlay-opacity=".85">
            <template v-slot:activator="{ on }">
                <v-btn class="startBtn" color="#1b74bcff" dark rounded v-on="on"
                >Get Started</v-btn>
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
                                <v-btn  color="#a61d36ff"  tile  block @click="dialog = false, newAccount(email, password)" class="started" type="submit" :disabled="$v.$invalid" to="/maindashboard">Get Started</v-btn>

                                <div class="stylingLogin">
                  <h4 class="headline">  Already have an account?   </h4>
                  <app-login class="login"/>
                  </div>
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

    import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
    import login from '../components/Login'

    export default {
        components: {
            'app-login' : login
        },
        data: () => ({
            show1: '',
            show: '',
            dialog: false,
            resData: '',
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            password: '',
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => ('The email and password you entered don\'t match'),
            },
            confirmPassword: '',
            required: value => !!value || 'Required.',
            min: v => v.length >= 8 || 'Password must match',

        }),
        validations: {
            email:{
                required,
                email,

            },
            password: {
                required,
                minLength: minLength(8)
            },
            confirmPassword: {
                required,
                sameAs: sameAs('password')
            }
        },
 methods:{
     newAccount(email, password){
       // eslint-disable-next-line no-console
       console.log("logIn function")
       const graphqlQuery = {
         query: `
     mutation creation {
  createUser(userInput: {email: "${email}", password: "${password}"}) {
    email
    password
    _id
  }
}
         `
       }
         fetch('http://localhost:8000/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(graphqlQuery)
        })   
        .then(res => {
          // eslint-disable-next-line no-console
          console.log('fetch reached')
          this.$router.push({ path: '/maindashboard'})
          return res.json()
          
        })
        .then(resData => {
          if (resData.errors && resData.errors[0].status === 422){
            throw new Error(
              "Validation failed."
            )        
          }
          if (resData.errors){
            throw new Error('User login failed')
          }
          // eslint-disable-next-line no-console
          console.log(resData)
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
     
        }) 
     },
   }  

    }

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
        display: flex;
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

    .started{
        margin-top:6%;
        margin-bottom: 5%;
        color: #fff;
    }

    h4{
        padding-top: 4%;
        text-align: center;
        display: flex;

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
    .stylingLogin{
  display: flex;
  align-items: baseline;
}

.login{
  margin-left: 50px;
}
    .startBtn {
        font-size: 14px;
        width: 200px;
    }
</style>
