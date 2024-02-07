<template>
  <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#2655c8"
    text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
    <div class="left-title">
      <img src="@/img/tx.png" alt="">
    </div>
    <el-menu-item index="1">
      <router-link to="/">专业选修课</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/quality">素质拓展选修课</router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link to="/choice">已选课程</router-link>
    </el-menu-item>
    <router-link to="/help" target="_blank" class="help right">选课帮助</router-link>
    <router-link to="" class="help">退出</router-link>
  </el-menu>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.left-title {
  padding: 10px;
}

.help {
  padding-bottom: 4px;
  margin-left: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: var(--el-menu-text-color);
  font-size: var(--el-menu-item-font-size);
}

.right {
  margin-left: 550px;
}
</style>
