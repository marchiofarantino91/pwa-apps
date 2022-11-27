<template>
 <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      
      <v-spacer></v-spacer> 
    </v-app-bar>  
    <navDrawerVue :drawer="drawer" @updateDrawer="updateDrawer" />
    <v-main>
      <router-view/>
    </v-main>
  </v-app> 
</template>

<script>
import navDrawerVue from './navDrawer.vue';
    export default {
        components:{
            navDrawerVue
        },  
        data(){
            return{
                drawer:false
            }
        },
        methods:{
            updateDrawer(data){
                this.drawer = data
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>