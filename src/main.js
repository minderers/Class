import { createApp } from 'vue';
// 引入 Element Plus
import ElementPlus from 'element-plus';
// 引入 Element Plus 样式
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';


// 创建应用实例
const app = createApp(App);
// 使用 Element Plus
app.use(ElementPlus);
// app.use指的就是app这个使用要使用什么东西 app必须use才能挂载才会生效
app.use(router);
app.mount('#app');