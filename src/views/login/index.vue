<template>
    <div> 
        <input type="text" v-model="username">
        <input type="password" v-model="pass">
        <button @click="login">Login</button>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

    export default {
        computed:{ 
            ...mapGetters(['token'])
        },  
        data(){
            return{
                username:'',
                pass:''
            }
        },
        methods:{
            ...mapActions({
                
            }), 
            login(){
                this.$store.dispatch('user/login',{
                    username:this.username,
                    password:this.pass
                }).then(res => {
                    console.log(res);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>