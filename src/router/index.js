import { createWebHashHistory } from 'vue-router';
import { createRouter } from 'vue-router';


const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/index.vue"),
    meta: {
      title: "首页",
    },
    children: [ // 嵌套子路由
      {
        path: "/", // 子页面1
        name: "Profession",
        redirent: "/dashboard",
        component: () => import("@/pages/profession.vue"),
        meta: {
          title: "专业选修课",
        },
      },
      {
        path: '/quality', // 子页面2
        name: "Quality",
        component: () => import("@/pages/quality.vue"),
        meta: {
          title: "素质拓展选修课",
        },
      },
      {
        path: "/choice", // 子页面3
        name: "Choice",
        component: () => import("@/pages/choice.vue"),
        meta: {
          title: "已选课程",
        },
      }
    ]
  },
  {
    path: "/student/login",
    name: "Login",
    component: () => import("@/pages/login.vue"),
    meta: {
      title: "登录页",
    },
  },
  {
    path: "/help",
    name: "Help",
    component: () => import("@/pages/help.vue"),
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


