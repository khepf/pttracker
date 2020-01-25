<template>
  <v-footer color="primary lighten-1" padless>
    <v-layout justify-center wrap>
      <v-flex primary lighten-2 py-4 text-center white--text xs12>
        &copy; {{ new Date().getFullYear() }} — <strong>QCTS</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TheFooter"
});
</script>
