/* eslint-disable vue/valid-template-root */
<template>
<v-container class="header">
  <div class="logoBox">
  <router-link to="/"  active-class="active" exact>
    <img
      class="logo"
      src="/assets/images/FLC-Logo-Large-2b.png"
    />
  </router-link>
  </div>
  <div class="group">
    <div class="navigation">
     <router-link to="/" tag="li" class="list" exact>
        <a class="links">Math</a>
     </router-link>
      <li class= "list"> 
        <a  class="links" href="https://flcinc.org/library/children-reading/"> Kids </a> 
      </li>
      <li> 
        <a class="links" href="https://flcinc.org/library/adult-reading/">Adults </a> 
      </li>
      <li> 
        <a class="links" href="https://flcinc.org/about-us-2/"> About </a>
      </li>
      <li> 
        <a class="links" href="https://flcinc.org/support/">Support </a>
      </li>
    </div>
    <app-login class="login"/>
     </div>
  </v-container>


</template>


<script>

import login from '../components/Login'


  export default { 
    components: {
        'app-login' : login,

    },
    data: () => ({
      
    }),
  }
</script>

<style  scoped>

.header{
  display: flex;
  justify-content: space-between;

}
.logoBox{
  width: 20%;
}
  .logo{
    height: auto;
    width: 110px;
  }
  .login{
    padding-right: 10px;
    padding-top: 20px;
  }

.navigation{
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
}

li{
list-style-type: none;
}

.links{
  text-decoration: none;
color: black;
}
  
.group{
  width: 80%;
  display: flex;
justify-content: space-evenly;
}

</style>