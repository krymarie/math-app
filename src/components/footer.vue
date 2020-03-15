<template>
  <v-footer padless class="back">
    <hr class="line" />

    <h5>&copy; {{ new Date().getFullYear() }} FAMILY LITERACY CENTERS</h5>
    <p class="contact">
      <a href="https://flcinc.org/support/">Customer Support</a>
    </p>
    <p class="contact">+1 (800) 580-4275</p>
  </v-footer>
</template>

<style scoped>
.back {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 100%;
}
a {
  text-decoration: none;
}
.line {
  border: 1px solid #1b74bcff;
  border-radius: 5px;
  width: 95%;
}

h5 {
  padding-top: 2%;
  padding-bottom: 1%;
}
p {
  text-align: center;
  padding: 0;
  margin: 0;
}

.bottom {
  padding-bottom: 2%;
}

.contact {
  display: block;
  color: #a61d36ff;
}
</style>
