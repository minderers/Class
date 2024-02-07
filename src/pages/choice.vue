<template>
  <div class="main">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="已选课程" name="first">
        <el-table :data="tableData" :default-sort="{ prop: 'date', order: 'descending' }" style="width: 100%;  font-weight: normal;
" empty-text="暂无数据">
          <el-table-column prop="" label="课程号/课程名" />
          <el-table-column prop="" label="教师名" />
          <el-table-column prop="" label="时间地点" />
          <el-table-column prop="" label="学号" />
          <el-table-column prop="" label="课程类型" />
          <el-table-column prop="" label="课程性质" />
          <el-table-column prop="" label="校公选课类别" />
          <el-table-column prop="" label="校区" />
          <el-table-column prop="" label="是否冲突" />
          <el-table-column prop="" label="操作" />
        </el-table>


        <el-config-provider :locale="locale">
          <div class="demo-pagination-block">
            <div class="demonstration"></div>
            <el-pagination v-model:current-page="currentPage1" :page-size="10" :small="small" :disabled="disabled"
              :background="background" layout="total, prev, pager, next, jumper" :total="100"
              @size-change="handleSizeChange" @current-change="handleCurrentChange" />
          </div>
        </el-config-provider>

      </el-tab-pane>
      <el-tab-pane label="退课日志" name="second">
        <el-table :data="tableData" :default-sort="{ prop: 'date', order: 'descending' }" style="width: 100%;  font-weight: normal;
" empty-text="暂无数据">
          <el-table-column prop="" label="课程号/课程名" />
          <el-table-column prop="" label="教师名" />
          <el-table-column prop="" label="课程类别" />
          <el-table-column prop="" label="课程性质" />
          <el-table-column prop="" label="学分" />
          <el-table-column prop="" label="退选时间" />
          <el-table-column prop="" label="推选操作人" />
          <el-table-column prop="" label="退选类型" />
          <el-table-column prop="" label="志愿等级" />


        </el-table>


        <el-config-provider :locale="locale">
          <div class="demo-pagination-block">
            <div class="demonstration"></div>
            <el-pagination v-model:current-page="currentPage1" :page-size="10" :small="small" :disabled="disabled"
              :background="background" layout="total, prev, pager, next, jumper" :total="100"
              @size-change="handleSizeChange" @current-change="handleCurrentChange" />
          </div>
        </el-config-provider>

      </el-tab-pane>
    </el-tabs>



















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

.demo-tabs>.el-tabs__content {
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs__header {
  padding: 0;
  position: relative;
  margin: 0;
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
import { computed, ref } from 'vue'
import type { TabsPaneContext, TableColumnCtx } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
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



interface User {
  date: string
  name: string
  address: string
}

const tableData: User[] = [

]

// 分页
const currentPage1 = ref(5)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}

const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

const toggle = () => {
  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
}


// 标签页
const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>