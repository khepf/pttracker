<template>
  <div>
    <h3>{{ user ? user.email : "Your" }} Dashboard:</h3>
    <team-card />
    <!-- <player-card /> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import firebase from "firebase";
import TeamCard from "@/components/TeamCard.vue";
// import PlayerCard from "@/components/PlayerCard.vue";

const DashboardPage = Vue.extend({
  name: "DashboardPage",
  components: {
    TeamCard,
    // PlayerCard
  },
  computed: {
    user() {
      return this.$store.getters.authUser;
    }
  }
});

export default DashboardPage;
</script>
