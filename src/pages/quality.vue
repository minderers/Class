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
        <span class="zt">开课单位：</span>
        <el-select v-model="value" filterable placeholder="请选择" style="width: 200px">
          <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
      <div class="sou">
        <span class="zt">校公选课类别：</span>
        <el-select v-model="value" filterable placeholder="请选择" style="width: 200px">
          <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
      <div class="sou gjc">
        <span class="zt">关键词：</span>
        <el-input style="margin-left: 10px;" v-model="input" placeholder="请输入关键词" />
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
      <el-table-column prop="" label="课程号" />
      <el-table-column prop="" label="课程名称" />
      <el-table-column prop="" label="教学班个数" sortable />
      <el-table-column prop="" label="课程分类" />
      <el-table-column prop="" label="课程性质" />
      <el-table-column prop="" label="开课单位" />
      <el-table-column prop="" label="学分" />
    </el-table>


    <el-config-provider :locale="locale">
      <div class="demo-pagination-block">
        <div class="demonstration"></div>
        <el-pagination v-model:current-page="currentPage1" :page-size="10" :small="small" :disabled="disabled"
          :background="background" layout="total, prev, pager, next, jumper" :total="100" @size-change="handleSizeChange"
          @current-change="handleCurrentChange" />
      </div>
    </el-config-provider>




















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
import { computed, ref } from 'vue'
import type { TableColumnCtx } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
const input = ref('')

const value = ref('')
const options1 = [
  {
    value: '',
    label: '请选择',
  },
  {
    value: '1',
    label: '机械工程学院',
  },
  {
    value: '2',
    label: '电气工程学院',
  },
  {
    value: '2',
    label: '航空工程学院',
  },
  {
    value: '2',
    label: '交通工程学院',
  },
  {
    value: '2',
    label: '计算机与软件学院',
  },
  {
    value: '2',
    label: '经济管理学院',
  },
  {
    value: '2',
    label: '商务贸易学院',
  },
  {
    value: '2',
    label: '艺术设计学院、天堂校区管理办公室',
  },
  {
    value: '2',
    label: '公共基础课部',
  },
  {
    value: '2',
    label: '工程技术实训中心',
  },
  {
    value: '2',
    label: '创新创业学院、创新创业教育工作领导小组办公室',
  }
]

const options2 = [
  {
    value: '',
    label: '请选择',
  },
  {
    value: '1',
    label: '沟通与写作类',
  },
  {
    value: '2',
    label: '跨学科跨专业类',
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
</script>