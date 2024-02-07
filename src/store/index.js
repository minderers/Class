import { defineStore } from "pinia";

export const useAdminStore = defineStore("useAdminStore", {
  state: () => ({
    token: '',
    userInfo: {},
    menu:[],
  }),
  actions: {
    // 设置 token
    setStoreToken(token) {
      this.token = token;
    },
    // 设置用户信息
    setStoreUserInfo(userInfo) {
      this.userInfo = userInfo;
    },
    clearnStore(){
        this.token='';
        this.userInfo={};
        this.menu=[];
    },
    // 保存用户菜单
    setStoreMenu(menu){
        this.menu=menu;
      //  console.log("this is menu", JSON.stringify(menu));
    }
  },

  //持久化
  persist: true
});
