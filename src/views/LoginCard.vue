<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card width="400px" class="mx-auto mt-5">
          <v-card-title class="justify-center">
            <h1>Log In</h1>
          </v-card-title>
          <v-form @submit.prevent="signIn">
            <v-card-text>
              <v-text-field
                label="Email"
                v-model="form.email"
                prepend-icon="mdi-account-circle"
                id="email"
                type="text"
              />
              <v-text-field
                label="Password"
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              />
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn type="submit" color="info">Login</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { IFirebaseError } from "@/interfaces/interfaces";
export default Vue.extend({
  name: "LoginCard",
  data() {
    return {
      showPassword: false,
      form: {
        email: null,
        password: null
      }
    };
  },
  methods: {
    authUser() {
      return this.$store.state.users[this.$store.state.authId];
    },
    signIn() {
      this.$store
        .dispatch("signInWithEmailAndPassword", {
          email: this.form.email,
          password: this.form.password
        })
        .then(() => this.$router.push("/dashboard"))
        .catch((error: IFirebaseError) => {
          return alert("🤷‍️" + error.message);
        });
    }
  }
});
</script>
