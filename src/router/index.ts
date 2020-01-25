import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginCard.vue")
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/Dashboard.vue")
  },
  {
    path: "*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
