<template>
    <div class="create">
        <div class="article">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="文档导入">
                    <el-upload
                        class="upload-word"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-progress="uploading" 
                        :on-success="uploadSuccess"
                        :on-error="uploadError"
                        auto-upload
                    >
                        <el-button size="small" type="primary">上传文档，支持DOCX格式，Office2007、2010、2013、2016</el-button>
                    </el-upload>
                </el-form-item> 
                <el-form-item label="文章标题">
                    <el-input v-model="form.title"></el-input>
                </el-form-item>

                <el-form-item label="转载链接">
                    <el-input v-model="form.source"></el-input>
                </el-form-item>

                <el-form-item label="内容">
                    <tinymce v-model="form.content"></tinymce>
                </el-form-item>

                <el-form-item label="发布备注">
                    <el-input type="textarea" v-model="form.note"></el-input>
                    
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="next">下一步</el-button>
                    <el-button type="primary" @click="draft">保存草稿</el-button>
                    <el-button type="primary" @click="preview">预览</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="tipbox">
            <h4><i class="el-icon-warning" style="margin-right:15px;"></i><strong>注 意 事 项</strong></h4>
            <p>1、文章内容必须属于合法内容，如有负面、涉政、敏感等一律不予发布。</p>
            <p>2、文章提交发布后不可修改、取消或删除，请在提交之前确认好文章内容。</p>
            <p>3、一篇文章的发布时间为1-24小时以内，平均大约花费3小时，节假日可提交稿件，媒体上班后发布。</p>
            <p>4、审稿时间为：周一至周五 09:00-18:00，下午17点后提交的文章有些会在隔天发布。</p>
            <p>5、所选媒体可能会因为审稿不达标，导致个别所选媒体不能发布，届时会建议您更换媒体。</p>
            <p>6、不能带网址的一律不能带电话、QQ、微信等信息，百度新闻源根据文章质量不保证100%收录。</p>
            <p>7、文章标题22字以内，内容500~2500字内，图片0~10张内，图片宽度设置500像素内高度留空不填。</p>
            <p>8、文章中包含的网址、电话、图片过大、图片过多等，个别媒体会根据内容规范进行调整或者删减，属于正常情况。</p>
            <p>9、文章提交如遇到拒绝发布、系统自动退回对应媒体金额。</p>
            <p>10、不可插入任何形式视频，媒体可能会对文章进行适当的调整。</p>
        </div>
    </div>
   
</template>
<script>
import tinymce from "@/components/tinymce";
export default {
  data() {
    return {
      editor: "",
      fileList: [],
      form: {
        title: "",
        source: "",
        content: "",
        note: ""
      }
    };
  },
  methods: {
    next() {
      this.$message("下一步： 选择发布媒体");
    },

    draft() {
      this.$message("将内容转存至草稿箱");
    },

    preview() {
      this.$message("预览您发布的内容");
    },

    uploading() {
      this.$message("上传中");
    },

    uploadSuccess() {
      this.$message("上传成功");
    },

    uploadError() {
      this.$message("上传失败");
    }
  },
  components: { tinymce }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.create {
  .article {
    width: 85%;
    margin: 0px auto;
  }
  .tipbox {
    margin: 10px 60px;
    padding: 5px 30px;
    background-color: #e5f3ff;
    font-size: 15px;
    h4 {
      font-size: 18px;
    }
    p {
      padding: 0px 30px;
    }
  }
}
</style>
