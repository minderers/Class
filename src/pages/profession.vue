<template>
  <div class="main">
    <div class="semester">
      <span>2023-2024学年2学期&nbsp;&nbsp;</span>
      <span>1-20周&nbsp;&nbsp;</span>
      <span>仙林校区&nbsp;</span>
      <a href="" class="qh">切换校区</a>
    </div>


    <div class="select">
      <div class="sou">
        <span class="zt">是否冲突：</span>
        <el-select v-model="value" filterable placeholder="请选择" style="width: 100px">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
      <div class="sou">
        <span class="zt">课程性质：</span>
        <el-select v-model="value" filterable placeholder="请选择" style="width: 200px">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
      <div class="sou">
        <span class="zt">课程类别：</span>
        <el-select v-model="value" filterable placeholder="请选择" style="width: 200px">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
      <div class="sou gjc">
        <span class="zt">关键词：</span>
        <el-input style="margin-left: 20px;" v-model="input" placeholder="请输入关键词" />
        <el-button type="primary" style="margin-left: 20px;">
          <el-icon style="vertical-align: middle">
            <Search />
          </el-icon>
          <span style="vertical-align: middle"> 搜索 </span>
        </el-button>
      </div>
    </div>


    <el-table :data="tableData" :default-sort="{ prop: 'date', order: 'descending' }" style="width: 100%;"
      empty-text="暂无数据">
      <el-table-column prop="" label="课程号" width="180" />
      <el-table-column prop="" label="课程名称" width="180" />
      <el-table-column prop="" label="教学班个数" sortable width="150" />
      <el-table-column prop="" label="课程分类" width="180" />
      <el-table-column prop="" label="课程性质" width="180" />
      <el-table-column prop="" label="开课单位" width="250" />
      <el-table-column prop="" label="学分" />
    </el-table>

    <div class="demo-pagination-block">
      <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4" :page-sizes="[100, 200, 300, 400]"
        :small="small" :disabled="disabled" :background="background" layout="total, sizes, prev, pager, next, jumper"
        :total="400" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>



















  </div>
</template>

<style>
.main {
  padding: 0px 10px;
}

.semester {
  margin-top: 10px;
  color: #bec2ce;
  font-size: 12px;
}

.qh {
  color: #7eb1ff;
}

.zt {
  font-size: 14px;
  color: #707070;
}

.select {
  display: flex;
  flex-wrap: nowrap;
  padding-top: 15px;
}

.sou {
  margin-left: 10px;
  margin-right: 10px
}

.gjc {
  display: flex;
  white-space: nowrap;
  align-items: center;
}

.el-table {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>

<style scoped>
.demo-pagination-block+.demo-pagination-block {
  margin-top: 10px;
}

.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
</style>

<style lang="less" scoped>
//修改头部背景色
::v-deep .el-table th {
  background-color: #e6f0fc;
  font-size: 14px;
  font-weight: normal;
  color: #707070;
}
</style>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')

const value = ref('')
const options = [
  {
    value: '',
    label: '请选择',
  },
  {
    value: '1',
    label: '是',
  },
  {
    value: '0',
    label: '否',
  }
]

import type { TableColumnCtx } from 'element-plus'

interface User {
  date: string
  name: string
  address: string
}

const tableData: User[] = [

]



const currentPage4 = ref(4)
const pageSize4 = ref(100)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>