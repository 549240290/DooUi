<template>
  <div id="login">
    <div class="login-form">
      <el-form ref="form" :model="loginParam" :rules="loginRules">
        <div class="login-header">
          <img src="@/assets/images/logo.png" height="100">
          <p>系统登录</p>
        </div>
        <el-input
            placeholder="请输入用户名"
            prefix-icon="fa fa-user"
            v-model="loginParam.username"
            style="margin-bottom: 18px"
        >
        </el-input>

        <el-input
            placeholder="请输入密码"
            prefix-icon="fa fa-keyboard-o"
            v-model="loginParam.password"
            type="password"
            style="margin-bottom: 18px"
            @keyup.native.enter="handleLogin"
        >
        </el-input>

        <el-button
            type="primary" :loading="loading"
            style="width: 100%;margin-bottom: 18px"
            @click.native="handleLogin"
        >登录
        </el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginParam: {
        username: 'aufree@yousails.com',
        password: 'password'
      },
      loginRules: {
        username: [
          
        ],
        password: [

        ]
      },
      loading: false
    };
  },
  methods: {
    handleLogin() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("login", this.loginParam)
            .then( () => {
                this.$router.push({ path: "/" });
            })
            .catch( () => {
              this.loading = false              
              this.$message.error('请求失败')              
            })
        } else {
          this.$message.error("error submit!!")
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "login.less";
</style>