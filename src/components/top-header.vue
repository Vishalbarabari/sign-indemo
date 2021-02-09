<template>
    <div>
        logged in
        <span v-if="loggedin">yes</span>
        <span v-else>No</span>
        <div>
            <button @click="signout">signout</button>
        </div>
    </div>
</template>

<script>
import firebase from '@firebase/app';
require('firebase/auth');
export default {
    created(){
        firebase.auth().onAuthStateChanged(user=>{
            this.loggedin = !!user;
        })
    },
    
    data(){
        return{
            loggedin:false
        }
    },
    methods:{
       async signout(){

try {
    const data = await firebase.auth().signout();
    console.log(data);
    this.$router.replace({name:"login"})
} catch (error) {
    console.log(error)
    
}
        }
    }
}
</script>

<style lang="scss" scoped>

</style>