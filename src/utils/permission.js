import { getItem } from "./cache";
import { toast } from "./toast";
import router from "../router";
import { useAdminStore } from "../store";
import { storeToRefs } from "pinia";


// 全局前置路由守卫
let hasNewRoutes = false;
router.beforeEach(async (to, from, next) => {
  const token = getItem("token");
  const path = ["/student/login"];

  // 如果有token并且不是登录页，放行
  if (!token && !path.includes(to.path)) {
    toast("您还未登录，请先登录", "error");
    next("/student/login");
  }

  // 如果有token并且是登录页，提示已登录，跳转到首页
  if (token && path.includes(to.path)) {
    toast("您已登录，请勿重复登录", "error");
    next(from.path);
  }


  // 如果有token并没有获取过节点，获取节点
  let hasNewRoute = false;
  if (token && !hasNewRoutes) {
    hasNewRoutes = true;
  }

  hasNewRoute ? next(to.fullPath) : next();
});


// 路由后置事件
router.afterEach((from, to) => {
  document.title = '学生选课系统' + '-' + from.meta.title || '学生选课系统';
});