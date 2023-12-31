import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealList from "../views/MealList.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/letter/:letter",
    name: "byLetter",
    component: MealList,
  },
];

const router = createRouter({
  history: createWebHistory(), // Provide the base URL if applicable, like createWebHistory('/my-app/')
  routes,
});

export default router;
