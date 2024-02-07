import { ElNotification } from "element-plus";

// 封装消息提示
export function toast(message, type = "success") {
  ElNotification({
    message,
    type,
    duration: 2000,
  });
}
