<template>
  <v-container v-if="user">
    <v-simple-table height="auto">
      <h3>Your Teams</h3>
      <v-btn text rounded>Add Team</v-btn>
      <template v-if="teams">
        <div v-for="team in teams" :key="team['.key']">
          <thead>
            <tr>
              <th class="text-left">Team Name</th>
              <th class="text-left">Players</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ team.teamname }}</td>
              <td>{{ getPlayerInformation(team[".key"]) }}</td>
            </tr>
          </tbody>
        </div>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { countObjectProperties } from "@/utils/index";

const TeamCard = Vue.extend({
  name: "TeamCard",
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
  methods: {
    getPlayersFromEachTeam(teamId) {
      return this.players.filter(player => {
        return Object.values(player.teams).includes(teamId);
      });
    },
    getPlayerInformation(teamId) {
      return this.getPlayersFromEachTeam(teamId)
        .map(player => {
          return `#${player.jerseynumber} ${player.firstname} ${player.lastname}`;
        })
        .toString();
    }
  },
  async created() {
    await this.$store.dispatch("fetchUser", { id: "u1" });
    await this.$store.dispatch("fetchTeams", {
      ids: Object.keys(this.user.teams)
    });
    await this.$store.dispatch("fetchPlayers", {
      ids: Object.keys(this.user.players)
    });
  }
});
export default TeamCard;
</script>
