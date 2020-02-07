<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <h1>Profile Page</h1>
          <h3>Name: {{ user ? user.name : "" }}</h3>
          <h3>Email: {{ user ? user.email : "" }}</h3>
          <v-bottom-sheet v-model="sheet" persistent>
            <template v-slot:activator="{ on }">
              <v-btn color="green" dark v-on="on">
                Edit Profile
              </v-btn>
            </template>
            <v-sheet class="text-center" height="300px">
              <div class="py-3">
                <v-form @submit.prevent="editUser">
                  <v-text-field id="name" type="text"></v-text-field>
                  <v-text-field id="email" type="text"></v-text-field>
                  <v-btn class="mt-6" color="info" type="submit">save</v-btn>
                  <v-btn class="mt-6" color="error" @click="sheet = !sheet"
                    >cancel</v-btn
                  >
                </v-form>
              </div>
            </v-sheet>
          </v-bottom-sheet>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ProfilePage",
  computed: {
    user() {
      return this.$store.getters.authUser;
    }
  },
  data() {
    return {
      sheet: false
    };
  },
  methods: {
    editUser() {
      this.$store.dispatch("updateUser", { ...this.user });
    }
  }
});
</script>
