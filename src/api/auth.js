import service from "@/utils/request";

// 登录
export function studentLogin(account, password) {
  return service.post("student/login", {
    account,
    password,
  });
}

// // 修改密码
// export function changePassword(userId, password) {
//   return service.post("/student/changepassword", {
//     userId,
//     password,
//   });
// }

// // 学生登录成功查看信息
// export function information() {
//   return service.post("/student/information");
// }


// 查询全部课程
export function searchAll() {
  return service.post("/course/search");
}

// // 选课
// export function choose() {
//   return service.post("/course/choose");
// }

// // 退课
// export function drop() {
//   return service.post("/course/drop");
// }
