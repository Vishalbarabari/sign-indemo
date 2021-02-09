<template>
    <div>
login
<form @submit.prevent="pressed">
    <div class="formContainer">
<h1>Already have a account?login below.</h1>
<hr>
<label for="email"><b>Email</b></label>
<input type="text" placeholder="Enter Email" v-model="email" required>
<label for="password"><b>Password</b></label>
<input type="password" placeholder="Enter Password" v-model="password" required>

<div>
<button type="button" class="cancel">Cancel</button>
<button type="submit" class="signup">Login</button>
</div>
</div>
</form>
<div class="error" v-if="error">{{error.message}}</div>
<span>need an account? click here to <router-link to="/register">register</router-link></span>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
    data(){
        return{
            email:'',
            password:'',
            error:''
        }
    },
    methods:{
       async pressed(){
           try {
              const val = await firebase.auth().signInWithEmailAndPassword(this.email,this.password);
              console.log(val);
              this.$router.replace({name:"secret"})
           } catch (error) {
               console.log(error)
           }
            
        }
    }
}
</script>

<style  lang="scss" scoped>
.error {
    color: red;
    font-size: 18px;

}
input{
    width: 400px;
    padding: 30px;
    margin: 20px
    font-size 23px;
    }
button{
    width: 400px;
    height: 75px;
    font-size: 100%;
}

body{
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
* {box-sizing: border-box}
input[type=text], input[type=password] {
width: 100%;
font-size: 28px;
padding: 15px;
margin: 5px 0 22px 0;
display: inline-block;
border: none;
background: #f1f1f1;
}
label{
font-size: 15px;
}
input[type=text]:focus, input[type=password]:focus {
background-color: #ddd;
outline: none;
}
hr {
border: 1px solid #f1f1f1;
margin-bottom: 25px;
}
button {
font-size: 18px;
font-weight: bold;
background-color: rgb(10, 119, 13);
color: white;
padding: 14px 20px;
margin: 8px 0;
border: none;
cursor: pointer;
width: 100%;
opacity: 0.9;
}
button:hover {
opacity:1;
}
.cancel {
padding: 14px 20px;
background-color: #ff3d2f;
}
.formContainer {
padding: 16px;
}
.formContainer p{
font-size: 28px;
}
</style>