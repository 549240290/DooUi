<template>
    <div class="orders">
        <div class="fifler">
            <el-select 
                class="fifler-item"
                style="width:200px" 
                v-model="query.media" 
                placeholder="媒体筛选"
            >
                <el-option
                    v-for="item in mediaOption"
                    :key="item.id"
                    :label="item.title"
                    :value="item.id">
                </el-option>
            </el-select>
            <el-date-picker
                class="fifler-item"
                style="width:150px"
                v-model="query.beginTime"
                align="right"
                type="date"
                placeholder="开始时间"
                :picker-options="pickerOptions1">
            </el-date-picker>
             <el-date-picker
                class="fifler-item"
                style="width:150px"
                v-model="query.endTime"
                align="right"
                type="date"
                placeholder="结束时间"
                :picker-options="pickerOptions1">
            </el-date-picker>
            <el-select 
                class="fifler-item" 
                style="width:150px"
                v-model="query.pubStatus" 
                placeholder="发布状态"
            >
                <el-option
                    v-for="item in pubOptions"
                    :key="item.id"
                    :label="item.title"
                    :value="item.id">
                </el-option>
            </el-select>
            <el-input class="fifler-item" v-model="input" style="width:500px;" placeholder="搜索标题"></el-input>
            <el-button class="fifler-item" type="primary">搜索</el-button>
            <el-button  class="fifler-item" type="primary">导出</el-button>
        </div>
        <el-table
            :data="item"
            border
            style="width: 100%"
        >
            <el-table-column
                prop="id"
                label="订单ID"
                width="80">
            </el-table-column>
            <el-table-column
                prop="title"
                label="文章标题"
                width="400">
            </el-table-column>
            <el-table-column
                prop="url"
                label="链接"
                width="400">
            </el-table-column>
            <el-table-column
                prop="media"
                label="媒体名称"
                width="100">
            </el-table-column>
            <el-table-column
                prop="price"
                label="价格"
                width="70">
            </el-table-column>
            
            <el-table-column
                prop="created_at"
                label="提交时间"
                width="150">
            </el-table-column>
            <el-table-column
                prop="updated_at"
                label="完成时间"
                width="150">
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="200">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">发布</el-button>
                    <el-button type="text" size="small">退稿</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="4000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import request from "@/utils/request";
export default {
  name: "orders",
  methods: {
    handleClick(row) {
      console.log(row);
    },
    getLists() {
      request({ url: "orders", method: "get" }).then(res => {
        this.item = res.data;
      });
    }
  },

  data() {
    return {
      item: null,
      mediaOption: [
        { id: 1, title: "凤凰厦门" },
        { id: 2, title: "新浪内蒙古" },
        { id: 3, title: "网易河北" },
        { id: 4, title: "中国产业经济信息网" },
        { id: 5, title: "呼和浩特产业经济发展网" }
      ],
      pubOptions: [
        { id: 1, title: "申请发布" },
        { id: 2, title: "发布成功" },
        { id: 3, title: "拒绝发布" }
      ],
      payOptions: [
        { id: 1, title: "已付款" },
        { id: 2, title: "未付款" },
        { id: 3, title: "拒绝付款" },
        { id: 4, title: "付款中" }
      ],
      query: {
        media: null,
        beginTime: null,
        endTime: null,
        pubStatus: null,
        payStatus: null
      }
    };
  },
  created() {
    this.getLists();
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.orders {
  background-color: #fff;
  margin: 5px;
  .fifler {
    height: 60px;
    .fifler-item {
      display: inline-block;
      margin: 10px;
      vertical-align: middle;
    }
  }
  .block {
    padding: 5px;
  }
}
</style>


