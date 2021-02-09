import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import firebase from "firebase/app";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyDmnvmu97PVpxxzGW4NbWyYIDvZj268eNs",
  authDomain: "signup-demo-99c63.firebaseapp.com",
  projectId: "signup-demo-99c63",
  storageBucket: "signup-demo-99c63.appspot.com",
  messagingSenderId: "600454750765",
  appId: "1:600454750765:web:fdf2c6350eafa5e7710ea4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;
firebase.auth().onAuthStateChanged(user=>{
  console.log(user)
  if(!app){
    app = 
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
    
  }
})

