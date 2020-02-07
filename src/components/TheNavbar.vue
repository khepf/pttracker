<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>Playing Time Tracker</v-toolbar-title>
    <v-spacer></v-spacer>
    <template v-if="user">
      <v-btn
        v-for="link in links"
        :key="`${link.label}-header-link`"
        text
        rounded
        :to="link.url"
        >{{ link.label }}</v-btn
      >
      <v-btn @click.prevent="signOut" text rounded>Log Out</v-btn>
    </template>
    <template v-else>
      <v-btn to="/login" text rounded>Log In</v-btn>
    </template>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TheNavbar",
  computed: {
    user() {
      return this.$store.getters.authUser;
    }
  },
  data() {
    return {
      links: [
        {
          label: "Dashboard",
          url: "/dashboard"
        },
        {
          label: "Profile",
          url: "/profile"
        }
      ]
    };
  },
  methods: {
    signOut() {
      this.$store.dispatch("signOut");
      this.$router.push("/");
    }
  }
});
</script>
