<template>
  <div class="homeLayout">
    <v-layout fluid row wrap>
      <app-header></app-header>


      <v-container no-gutters col-12>
        <v-row>
          <v-col cols="12"  xs="12" >
            <v-card>
              <div class="imgTxt">
                <v-img contain class="heroImg white--text align-center"  src="/assets/images/laptop-typing.jpg" gradient="to top right, rgba(166,29,54,.33), rgba(27,116,188,.7)"
                       alt="heroImage">
                  <v-card-title class="heroTitle align-center justify-center"
                                :elevation="24"
                  >LEARN ALGEBRA FROM HOME</v-card-title>
                  <v-card-subtitle class="heroSub white--text"
                                   :elevation="24"
                  >With Algebra Core, enjoy our FREE software and start learning now!</v-card-subtitle>
                        <app-newAccount class="justify-center new-account"> </app-newAccount>
                </v-img>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <div class="backColorText col-12">
        <v-container>
          <v-row
                  :align="alignment"
                  :justify="justify">
            <v-col cols="12" justify="center" align="center">
              <h1 >Virtues of Algebra From Home:</h1>
            </v-col>
          </v-row>
        </v-container>

        <v-container class="textAlign">
          <v-row row>
            <v-col cols="12" md="3">
              <i class="fas fa-check-circle"></i>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
            </v-col>

            <v-col cols="12" md="3">
              <i class="fas fa-check-circle"></i>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
            </v-col>

            <v-col cols="12" md="3">
              <i class="fas fa-check-circle"></i>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
            </v-col>
            <v-col cols="12" md="3">
              <i class="fas fa-check-circle"></i>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <v-container>
        <v-row>
<!--<v-col cols="12">-->
            <div class="screenImages">
              <v-col cols="4">
            <v-img class="tabletImg xs=none d-none d-md-flex" src="/assets/images/tabletImg.png"></v-img>
              </v-col>
              <v-col cols="8">
            <v-img class="desktopImg xs=none d-none d-md-flex" src="/assets/images/desktopImg.png"></v-img>
              </v-col>
            </div>
<!--</v-col>-->
        </v-row>
      </v-container>

      <v-container>
        <v-row row wrap>
          <v-col cols="12" md="6">
            <v-img class="studentImg" src="/assets/images/hero-720w.jpg" gradient="to top right, rgba(166,29,54,.33), rgba(27,116,188,.7)"></v-img>
          </v-col>

          <v-col cols="12" md="6">
            <h2 class="px-8 midText">Lorem ipsum</h2>
            <h3 class="px-8">Lorem ipsum dolor sit amet, consectetuer adipiscing</h3>
            <p class=" paragraph col-10 pa-xs-3" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Ut sem viverra aliquet eget. Sagittis id consectetur purus ut faucibus pulvinar. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Amet est placerat in egestas erat imperdiet sed euismod.</p>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row>
          <v-col cols="12">
            <h1 class="pa-6" >Lasting Learning</h1>
            <h3 class="pa-4" >Find out how Algebra From Home has helped others learn!</h3>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-img class="studentImg" src="/assets/images/boy-math.jpg"  gradient="to top right, rgba(166,29,54,.33), rgba(27,116,188,.7)"></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>


      <v-container>
        <v-row>
          <v-col cols="12">
            <h1 class="pa-4" >Customer Stories</h1>
          </v-col>

          <v-col cols="12">
            <v-slide-group
                    v-model="model"
                    class="pa-4"
                    center-active
                    show-arrows>
              <v-slide-item
                      v-for="(slide, i) in slides"
                      :key="i"
                      v-slot:default="{ active, toggle }">

                <v-card
                        color="#E6E7E8"
                        class="ma-4"
                        height="200"
                        width="375"
                        @click="toggle">

                  <v-row
                          class="fill-height pa-6 slidesText"
                          align="center"
                          justify="center">
                    {{ slide }}
                    <v-scale-transition>
                      <v-icon
                              v-if="active"
                              color="white"
                              size="48"
                              v-text="'mdi-close-circle-outline'"
                      ></v-icon>
                    </v-scale-transition>
                  </v-row>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-col>
        </v-row>
      </v-container>
      <app-footer></app-footer>
    </v-layout>
  </div>
</template>

<script>
  /* import login from '../components/Login' */
  import newAccount from '../components/NewAccount'
  import Header from '../components/Header'
  import Footer from '../components/Foot'


  export default {
    name: 'App',
    components: {
      /*    'app-login' : login, */
      'app-newAccount' : newAccount,
      'app-header' : Header,
      'app-footer': Footer
    },

    data: () => ({
      model: null,
      alignmentsAvailable: [
        'start',
        'center',
        'end',
        'baseline',
        'stretch',
      ],
      alignment: 'center',
      dense: false,
      justifyAvailable: [
        'start',
        'center',
        'end',
        'space-around',
        'space-between',
      ],
      slides: [
        'My son had the best experience using FLC to learn algebra. -Margaret',
        'I loved using FLC to learn algebra. It was so helpful and I was able to pick it up really quick. -John',
        'Using FLC, I was able to pick up Algebra really fast. This app was so helpful. -Joel',
        'I homeschool my kids and FLC was so helpful to teach my kids algebra. -Jolene',
        'FLC is the best app! using it to learn algebra is so easy! -Margot',
      ],
      justify: 'center',
    }),

  }
</script>

<style scoped>
  h1 {
    font-size: 36px;

  }
  .heroImg {
    max-width: 100vw;
  }
  .studentImg {
    max-width: 100vw;
  }
  .heroTitle {
    font-size: 32px;
    text-shadow: 1px 2px #585858;
  }
  .heroSub { font-size: 14px; padding: 10px; color: white;
    text-shadow: 1px 2px #585858; }
  p { font-size: 16px; padding: 10px; }
  .paragraph {
    max-width: 100vw;
  }
  .homeLayout {
    width: 100vw;
  }
  .textAlign {
    text-align: center;
  }
  .backColorText {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100vw;
  }
  i {
    color: #1B74BCFF;
    font-size: 16px;
  }
  .imgTxt {
    text-align: center;
  }
  .screenImages {
    display: flex;
    align-items: flex-end;
    width: 100vw;
    justify-content: center;
  }
  .tabletImg{
    width: 30vw;
    /*width: 300px;*/
    /*height: auto;*/
  }
  .desktopImg{
    width: 60vw;
    /*width: 600px;*/
    /*height: auto;*/
  }

  @media only screen and (min-width: 600px) {
    .heroTitle {
      font-size: 38px;
    }
    .heroSub {
      font-size: 20px;
      padding-top: 16px;
    }
  }
  @media only screen and (min-width: 900px) {
    .heroTitle {
      font-size: 60px;
    }
    .heroSub {
      font-size: 28px;
      padding-top: 30px;

    }
  }

  @media only screen and (min-width: 1200px) {
    .heroTitle {
      font-size: 74px;
    }
    .heroSub {
      font-size: 32px;
      padding-top: 35px;

    }
    .midText {
      margin-top: 40px;
    }
  }

  .new-account{
   margin-top: 4%; 
  }
</style>