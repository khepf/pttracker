<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-img
          :src="require('@/assets/ptguy.png')"
          class="my-3"
          contain
          height="500"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "home"
});
</script>
