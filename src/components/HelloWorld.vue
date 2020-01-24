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

    <v-row>
      <v-col cols="12">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>
        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br />please join our online
          <a href="https://community.vuetifyjs.com" target="_blank"
            >Discord Community</a
          >
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h2 class="headline font-weight-bold mb-3">What's next?</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <a
          v-for="(next, i) in whatsNext"
          :key="i"
          :href="next.href"
          class="subheading mx-3"
          target="_blank"
        >
          {{ next.text }}
        </a>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h2 class="headline font-weight-bold mb-3">Important Links</h2>

        <a
          v-for="(link, i) in importantLinks"
          :key="i"
          :href="link.href"
          class="subheading mx-3"
          target="_blank"
        >
          {{ link.text }}
        </a>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>

        <a
          v-for="(eco, i) in ecosystem"
          :key="i"
          :href="eco.href"
          class="subheading mx-3"
          target="_blank"
        >
          {{ eco.text }}
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader"
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify"
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify"
      }
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com"
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com"
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify"
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs"
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify"
      }
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/layout/pre-defined"
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
      }
    ]
  })
  //   <v-app-bar app color="primary" dark>
  //   <div class="d-flex align-center">
  //     <v-img
  //       alt="Vuetify Logo"
  //       class="shrink mr-2"
  //       contain
  //       src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
  //       transition="scale-transition"
  //       width="40"
  //     />

  //     <v-img
  //       alt="Vuetify Name"
  //       class="shrink mt-1 hidden-sm-and-down"
  //       contain
  //       min-width="100"
  //       src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
  //       width="100"
  //     />
  //   </div>

  //   <v-spacer></v-spacer>

  //   <v-btn
  //     href="https://github.com/vuetifyjs/vuetify/releases/latest"
  //     target="_blank"
  //     text
  //   >
  //     <span class="mr-2">Latest Release</span>
  //     <v-icon>mdi-open-in-new</v-icon>
  //   </v-btn>
  // </v-app-bar>
});
</script>
