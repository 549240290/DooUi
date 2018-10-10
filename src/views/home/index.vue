<template>
  <div id="home">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
            用户简洁
        </el-card>

      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>通知公告</span>
          </div>
          <div v-for="o in inform" :key="o" class="text item">
            {{ o }}
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inform: [
        '金融广东网区块链频道媒体上架啦，点此了解。',
        '区块链百科网媒体上架啦，点此了解。',
        '常熟热线媒体上架啦，点此了解。',
        '雷电财经-区块链媒体上架啦，点此了解。',
        '中国消费商网媒体上架啦，点此了解。'
      ]
    }
  },
  methods: {
    onSubmit() {
      //console.log("submit!");
    }
  }
};
</script>
