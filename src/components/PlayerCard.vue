<template>
  <v-container v-if="user">
    <v-simple-table height="auto">
      <h3>Your Players</h3>
      <v-btn text rounded>Add Player</v-btn>
      <!-- <v-bottom-sheet v-model="sheet" persistent>
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
      </v-bottom-sheet> -->
      <template v-if="players">
        <div v-for="player in players" :key="player['.key']">
          <h2>{{ player.firstname }} {{ player.lastname }}</h2>
          <thead>
            <tr>
              <th class="text-left">Team Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ getTeamInformation(player[".key"]) }}</td>
            </tr>
          </tbody>
        </div>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
import { countObjectProperties } from "@/utils/index";

const PlayerCard = Vue.extend({
  name: "PlayerCard",
  computed: {
    user() {
      return this.$store.state.users.u1;
    },
    teams() {
      const teamIds = Object.values(this.user.teams);
      return Object.values(this.$store.state.teams).filter(team =>
        teamIds.includes(team[".key"])
      );
    },
    players() {
      const playerIds = Object.values(this.user.players);
      return Object.values(this.$store.state.players).filter(player =>
        playerIds.includes(player[".key"])
      );
    }
  },
  data() {
    return {
      sheet: false
    }
  },
  methods: {
    ...mapActions(["fetchUser", "fetchTeams", "fetchPlayers"]),
    getTeamsFromEachPlayer(playerId) {
      return this.teams.filter(team => {
        return Object.values(team.players).includes(playerId);
      });
    },
    getTeamInformation(playerId) {
      return this.getTeamsFromEachPlayer(playerId)
        .map(team => {
          return `${team.teamname}`;
        })
        .toString();
    },
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
  },
  async created() {
    await this.fetchUser({ id: "u1" });
    await this.fetchPlayers({
      ids: Object.keys(this.user.players)
    });
    await this.fetchTeams({
      ids: Object.keys(this.user.teams)
    });
  }
});
export default PlayerCard;
</script>
