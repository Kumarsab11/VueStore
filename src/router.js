import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Admin from "./views/Admin.vue";
import ProductDetails from "./views/ProductDetails.vue";
import Orders from "./views/Orders.vue";
const routes = [
  { path: "/", component: Home },
  { path: "/admin", component: Admin },
  { path: "/productsdetails/:id", component: ProductDetails },
  {
    path: "/orders",
    component: Orders,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
