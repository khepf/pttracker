<template>
  <v-container>
    <v-simple-table height="auto">
      <h3>Your Players</h3>
      <v-bottom-sheet v-model="sheet" persistent>
        <template v-slot:activator="{ on }">
          <v-btn color="green" dark v-on="on">
            Add Player
          </v-btn>
        </template>
        <v-sheet class="text-center" height="200px">
          <v-btn class="mt-6" flat color="error" @click="sheet = !sheet"
            >cancel</v-btn
          >
          <div class="py-3">
            This is a bottom sheet using the persistent prop
          </div>
        </v-sheet>
      </v-bottom-sheet>
      <template>
        <div v-for="player in players" :key="player['.key']">
          <h2>{{ player.firstname }} {{ player.lastname }}</h2>
          <thead>
            <tr>
              <th class="text-left">Team Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="teamId in player.teams" :key="teamId['.key']">
              <td>{{ teams[teamId].teamname }}</td>
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

const PlayerCard = Vue.extend({
  name: "PlayerCard",
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
  },
  data() {
    return {
      sheet: false
    };
  },
  methods: {
    addPlayer({ player }) {
      this.$store.dispatch("createPlayer", player);
    }
  }
});
export default PlayerCard;
</script>
