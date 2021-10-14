import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    alias: "/contacts",
    name: "contacts",
    component: () => import("../components/ContactList.vue")
  },
  {
    path: "/contacts/:id",
    name: "contacts-details",
    component: () => import("../components/ContactDetails.vue")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../components/AddContact.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;