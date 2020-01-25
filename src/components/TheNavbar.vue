<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>Playing Time Tracker</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      v-for="link in links"
      :key="`${link.label}-header-link`"
      text
      rounded
      :to="link.url"
      >{{ link.label }}</v-btn
    >
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TheNavbar",
  data() {
    return {
      links: [
        {
          label: "Home",
          url: "/"
        },
        {
          label: "Login",
          url: "/login"
        },
        {
          label: "Dashboard",
          url: "/dashboard"
        }
      ]
    };
  }
});
</script>
