<template>
    <div>
    <md-snackbar :md-position="position" :md-duration="isInfinity ? Infinity : duration" :md-active.sync="showSnackbar" md-persistent>
      <span>{{message}}</span>
      <md-button class="md-primary" @click="showSnackbar = false">Ok</md-button>
    </md-snackbar>
    </div>
</template>

<script>
    export default {
        props:{
        showSnackbar: Boolean,
        position: String,
        duration: Number,
        isInfinity: Boolean,
        message:String,
        }
    }
</script>

<style lang="scss" scoped>

</style>