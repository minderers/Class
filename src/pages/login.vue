<template>
    <el-row class="loginBox">
        <el-col :lg="16" :md="12" class="left">
            <p class="title">OA 管理系统</p>
            <p class="tips">请登录后使用该系统</p>
        </el-col>
        <el-col :lg="8" :md="16" class="right">
            <h2 class="LoginTitle">后台登录</h2>
            <div class="loginType">
                <span class="line"></span>
                <span>账号密码登录</span>
                <span class="line"></span>
            </div>
            <el-form ref="ruleFormRef" :model="form" :rules="rules" status-icon class="form">
                <el-form-item prop="username">
                    <el-input v-model="form.username" placeholder="请输入用户名" :prefix-icon="User" />
                </el-form-item>
                <el-form-item prop="password">

                    <el-input v-model="form.password" type="password" placeholder="请输入密码" :prefix-icon="Lock" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit" class="loginBtn" round :loading="loading">
                        登录
                    </el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script setup>
import { User, Lock } from '@element-plus/icons-vue';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { studentLogin, searchAll } from '@/api/auth';
import { ElNotification } from 'element-plus';
import { setItem } from "@/utils/cache";
import { toast } from '@/utils/toast';
import { useAdminStore } from '@/store';
// 绑定数据的表单
const form = reactive({
    username: '',
    password: '',
});

// 验证规则
const rules = {
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
};

//表单实例
const ruleFormRef = ref(null);
//登录事件
const router = useRouter();

//loading
const loading = ref(false);

// 结构出里面的两个方法
const { setStoreToken, setStoreUserInfo, setStoreMenu } = useAdminStore();


//登录事件

function onSubmit() {
    ruleFormRef.value.validate(valid => {
        loading.value = true;
        if (!valid) return;
        studentLogin(form.username, form.password)
            .then(res => {
                if (res.success) {
                    toast('登录成功', "success");
                    setItem('token', res.data.token);
                    // store保存token和用户信息
                    setStoreToken(res.data.token);
                    // 调用获取菜单的方法去获取菜单
                    searchAll().then(res => {
                        //保存菜单
                        setStoreMenu(res.data);
                        // console.log("this is menu", JSON.stringify(menu));
                    })
                    setStoreUserInfo(res.data);
                    router.push('/');
                    console.log(res.data);
                } else {
                    toast(res.message, "error");
                }
            })
            .catch(err => {
                toast(err.message, "error");
            }).finally(() => {
                loading.value = false;
            });
    });
}
</script>

<style scoped>
.loginBox {
    height: 100vh;
    width: 100vw;
}

.left {
    background-color: #6366f1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.title {
    font-size: 3rem;
    color: #fff;
    font-weight: 700;
    animation: jumpBoxHandler 2s infinite;
}

.tips {
    margin-top: 35px;
    font-size: 0.75rem;
    color: #fff;
}

@keyframes jumpBoxHandler {

    /* css事件 */
    0% {
        transform: translate(0px, 0px);
    }

    50% {
        transform: translate(0px, 30px);
        /* 可配置跳动方向 */
    }

    100% {
        transform: translate(0px, 0px);
    }
}

.right {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.LoginTitle {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 20px;
}

.loginType {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

.loginType span {
    color: #999;
    font-size: 0.75rem;
    margin: 0 10px;
}

.loginType .line {
    width: 50px;
    height: 1px;
    background-color: #999;
}

.form {
    width: 330px;
}

.loginBtn {
    width: 100%;
    background-color: #626aef;
    margin-top: 20px;
}
</style>