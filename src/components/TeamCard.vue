<template>
  <v-container>
    <v-simple-table height="auto">
      <h3>Your Teams</h3>
      <v-btn text
        rounded>Add Team</v-btn>
      <template>
        <div v-for="team in teams" :key="team['.key']">
          <h2>{{ team.teamname }}</h2>
          <thead>
            <tr>
              <th class="text-left">First Name</th>
              <th class="text-left">Last Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="playerId in team.players" :key="playerId['.key']">
              <td>{{ players[playerId].firstname }}</td>
              <td>{{ players[playerId].lastname }}</td>
            </tr>
          </tbody>
        </div>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import firebase from "firebase";

const TeamCard = Vue.extend({
  name: "TeamCard",
  computed: {
    players() {
      return this.$store.state.players;
    },
    teams() {
      return this.$store.state.teams;
    },
    users() {
      return this.$store.state.users;
    }
  }
});
export default TeamCard;
</script>
