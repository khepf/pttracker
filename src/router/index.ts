import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/about",
    name: "AboutPage",
    component: () => import(/* webpackChunkName: "about" */ "@/views/AboutPage.vue")
  },
  {
    path: "/login",
    name: "LoginPage",
    component: () => import("@/views/LoginPage.vue")
  },
  {
    path: "/dashboard",
    name: "DashboardPage",
    component: () => import("@/views/DashboardPage.vue")
  },
  {
    path: "/profile",
    name: "ProfilePage",
    component: () => import("@/views/ProfilePage.vue")
  },
  {
    path: "*",
    name: "NotFoundPage",
    component: () => import("@/views/NotFoundPage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
