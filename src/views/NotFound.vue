<template>
  <v-container fill-height>
    <v-row justify="center" align="center" class="my-3">
      <h2>Page Not Found</h2>
    </v-row>
    <v-row justify="center" align="center">
      <v-btn rounded to="/">
        Go Home Instead ?
      </v-btn>
    </v-row>
    <v-row>
      <v-col>
        <v-img
          :src="require('@/assets/notfoundsoccerplayer.png')"
          class="my-3"
          contain
          height="500"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "notfound"
};
</script>
