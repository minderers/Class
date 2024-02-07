import { createApp } from 'vue';
// 引入 Element Plus
import ElementPlus from 'element-plus';
// 引入 Element Plus 样式
import 'element-plus/dist/index.css';
import "./reset.css";
import App from './App.vue';
import router from './router';
import * as ElementPlusIconVue from '@element-plus/icons-vue';
import { createPinia } from 'pinia';

// 路由守卫
import './utils/permission';
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// 国际化
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// 创建应用实例
const app = createApp(App);
// 全局注册
for (const [key, component] of Object.entries(ElementPlusIconVue)) {
  app.component(key, component);
}
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
// 使用 Element Plus
app.use(ElementPlus);
// app.use指的就是app这个使用要使用什么东西 app必须use才能挂载才会生效
app.use(router);
// 使用国际化
app.use(ElementPlus, {
  locale: zhCn,
})
app.mount('#app');