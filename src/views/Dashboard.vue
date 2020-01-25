<template>
  <div>
    <h3>{{ user ? user.email : "Your" }} Dashboard:</h3>
    <h3>Your Teams</h3>
    <div v-for="team in teams" :key="team['.key']">
      <h2>{{ team.teamname }}</h2>
      <div v-for="playerId in team.players" :key="playerId['.key']">
        <p>{{ players[playerId].firstname }}</p>
        <p>{{ players[playerId].lastname }}</p>
      </div>
    </div>
    <!-- <v-data-table
      :headers="pHeaders"
      :items="Object.values(players)"
      :items-per-page="5"
      class="elevation-1"
      group-key="team"
    >
    </v-data-table> -->

    <!-- <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
      @click:row="selectRow"
    ></v-data-table> -->
    <v-snackbar v-model="snackbar">
      You have selected {{ currentItem }}
      <v-btn color="pink" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import firebase from "firebase";
const sourceData = require("@/data/data.json");
console.log("data!!!!", sourceData);

interface DashBoardEvent {
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
  iron: string;
}

const DashboardPage = Vue.extend({
  name: "DashboardPage",
  computed: {
    user() {
      return this.$store.getters.authUser;
    }
  },
  data() {
    return {
      currentItem: "",
      snackbar: false,
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" }
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        }
      ],
      pHeaders: [
        {
          text: "First Name",
          align: "left",
          sortable: false,
          value: "firstname"
        },
        {
          text: "Last Name",
          align: "left",
          sortable: false,
          value: "lastname"
        }
      ],
      tHeaders: [
        {
          text: "Team Name",
          align: "left",
          sortable: false,
          value: "teamname"
        }
      ],
      players: sourceData.players,
      teams: sourceData.teams,
      users: sourceData.users
    };
  },
  methods: {
    selectRow(event: DashBoardEvent) {
      this.snackbar = true;
      this.currentItem = event.name;
    }
  }
});

export default DashboardPage;
</script>
