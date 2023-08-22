// Composables
import {
  createRouter,
  createWebHistory,
} from 'vue-router';

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/AboutMe.vue"),
      },
      {
        path: "projects",
        name: "Projects",
        component: () =>
          import(/* webpackChunkName: "projects" */ "@/views/Projects.vue"),
      },
      {
        path: "products",
        name: "Products",
        component: () =>
          import(/* webpackChunkName: "products" */ "@/views/Products.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
