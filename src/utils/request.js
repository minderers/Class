import axios from "axios";
import { ElNotification } from "element-plus";
import { getItem } from "@/utils/cache";

// 构建axios实例对象
const service = axios.create({
  baseURL: "http://main.zhananclub.com:13098",
  timeout: 5000,
});

/**
 * 请求拦截器
 */
service.interceptors.request.use(
  (config) => {
    // 获取token
    const token = getItem("token");
    //判断token是否存在
    if (token) {
      //将token设置到请求头中
      config.headers["token"] = token;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

/**
 * 响应拦截器
 */
service.interceptors.response.use(
  (response) => {
    // 处理响应数据 这边.data之后我们页面就不需要在嵌套一次.data 可以简便我们写的步骤
    return response.data;
  },
  (err) => {
    // 处理全局错误消息提示
    console.log(err);
    ElNotification({
      message: err.response.data.message || "请求失败",
      type: "error",
      duration: 2000,
    });
    return Promise.reject(err);
  }
);

export default service;
