<template>
  <v-container>
    <v-simple-table height="auto">
      <h3>Your {{ playerCount }} Players</h3>
      <v-bottom-sheet v-model="sheet" persistent>
        <template v-slot:activator="{ on }">
          <v-btn color="green" dark v-on="on">
            Add Player
          </v-btn>
        </template>
        <v-sheet class="text-center" height="300px">
          <div class="py-3">
            <v-form @submit.prevent="addPlayer">
              <v-text-field
                label="First Name"
                id="firstname"
                type="text"
                v-model="player.firstname"
              ></v-text-field>
              <v-text-field
                label="Last Name"
                id="lastname"
                type="text"
                v-model="player.lastname"
              ></v-text-field>
              <v-text-field
                label="Jersey Number"
                id="jerseynumber"
                type="text"
                v-model="player.jerseynumber"
              ></v-text-field>
              <v-btn class="mt-6" color="info" type="submit">save</v-btn>
              <v-btn class="mt-6" color="error" @click="sheet = !sheet"
                >cancel</v-btn
              >
            </v-form>
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
import { countObjectProperties } from "@/utils/index";

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
    },
    playerCount() {
      return countObjectProperties(this.users.players);
    }
  },
  data() {
    return {
      sheet: false,
      player: {
        firstname: "",
        lastname: "",
        jerseynumber: ""
      }
    };
  },
  methods: {
    addPlayer() {
      const player = {
        firstname: this.player.firstname,
        lastname: this.player.lastname,
        jerseynumber: this.player.jerseynumber,
        teamId: "t1",
        userId: "u1"
      };
      this.sheet = false;
      this.player.firstname = "";
      this.player.lastname = "";
      this.player.jerseynumber = "";

      this.$store.dispatch("createPlayer", player);
    }
  }
});
export default PlayerCard;
</script>
