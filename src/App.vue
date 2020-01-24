<template>
  <v-app>
    <the-navbar />

    <v-content>
      <login-card />
    </v-content>
    <the-footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

import TheNavbar from "./components/TheNavbar.vue";
import LoginCard from "./components/LoginCard.vue";
import TheFooter from "./components/TheFooter.vue";

export default Vue.extend({
  name: "App",
  components: {
    TheNavbar,
    LoginCard,
    TheFooter
  },

  data: () => ({
    //
  })
});
</script>
