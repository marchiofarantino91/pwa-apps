<template>
  <div style="height:100vh;margin-top: 25vh;">
    <v-container >
      <v-row justify="center">
        <v-card style="padding:2rem;">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="form_data.username"
                label="Name"
                required
              ></v-text-field>
              <v-text-field
                v-model="form_data.password"
                label="Password"
                type="password"
                required
              ></v-text-field>
              <v-btn color="primary" class="mr-4"  @click="login"> Login </v-btn>
            </v-form>
        </v-card>
      </v-row>
    </v-container>
    <!-- <input type="text" v-model="username" />
    <input type="password" v-model="pass" /> -->
    <!-- <button @click="login">Login</button> -->
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapGetters(["token"]),
  },
  data() {
    return {
        valid:false,
        form_data:{
            username: "",
            password: "",
        }
    };
  },
  created(){ 
  },
  methods: {
    ...mapActions({}),
    login() {
      this.$store
        .dispatch("user/login", this.form_data)
        .then((res) => {
            this.$router.push('/')
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
