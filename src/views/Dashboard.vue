<template>
  <div>
    <h1>Dashboard</h1>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
      @click:row="selectRow"
    ></v-data-table>
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
        // The rest of the data was removed
        // to shorten the length of the code sample
        // in this article
      ]
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
