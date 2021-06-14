import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import MoviesIndex from "../views/movies/Index.vue";
import MoviesNew from "../views/movies/New.vue";
import MoviesShow from "../views/movies/Show.vue";
import MoviesEdit from "../views/movies/Edit.vue";
import ActorsIndex from "../views/actors/Index.vue";
import ActorsNew from "../views/actors/New.vue";
import ActorsShow from "../views/actors/Show.vue";
import ActorsEdit from "../views/actors/Edit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/movies",
    name: "movies-index",
    component: MoviesIndex,
  },
  {
    path: "/movies/new",
    name: "movies-new",
    component: MoviesNew,
  },
  {
    path: "/movies/:id",
    name: "movies-show",
    component: MoviesShow,
  },
  {
    path: "/movies/:id/edit",
    name: "movies-edit",
    component: MoviesEdit,
  },
  {
    path: "/actors",
    name: "actors-index",
    component: ActorsIndex,
  },
  {
    path: "/actors/new",
    name: "actors-new",
    component: ActorsNew,
  },
  {
    path: "/actors/:id",
    name: "actors-show",
    component: ActorsShow,
  },
  {
    path: "/actors/:id/edit",
    name: "actors-edit",
    component: ActorsEdit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
