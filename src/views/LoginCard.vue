<template>
  <v-container>
    
      <v-row :align="alignment" :justify="justify">
        <v-col cols="12">
        <v-card width="400px" class="mx-auto mt-5">
          <v-card-title class="justify-center">
            <h1>Log In</h1>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Username"
                prepend-icon="mdi-account-circle"
              />
              <v-text-field
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              />
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="success">Register</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="info">Login</v-btn>
          </v-card-actions>
        </v-card>
        </v-col>
      </v-row>
    
  </v-container>
</template>

<script lang="ts">
export default {
  name: "LoginCard",
  data() {
    return {
      showPassword: false
    };
  }
};
</script>

