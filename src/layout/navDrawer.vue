<template>
     <v-navigation-drawer
      v-model="drawer"
      absolute 
      temporary
    >
    <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list> 
    </v-navigation-drawer>
</template>

<script>
    export default {
        props:{
            drawer:Boolean
        },
        data(){
            return{
                show: false
            }
        },
        watch:{
            show(nv,ov){
                this.$emit('updateDrawer',nv)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>