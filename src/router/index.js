import { createWebHashHistory } from 'vue-router';
import { createRouter } from 'vue-router';


const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/pages/login.vue"),
    meta: {
      title: "登录页",
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/pages/about.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/pages/404.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;


