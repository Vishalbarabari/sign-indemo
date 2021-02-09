import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue"
import login from "../views/login.vue"
import register from "../views/register.vue";
import secret from "../views/secret.vue"

import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: "/register",
    name: "register",
    component: register
  },
  {
    path: "/secret",
    name: "secret",
    component: secret,
    meta:{requiresAuth:true}
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to,from,next)=>{
  const requiresAuth = to.matched.some(record=>record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if(requiresAuth && !isAuthenticated){
    next("/login");

  }else{
    next();
  }
})
export default router;
