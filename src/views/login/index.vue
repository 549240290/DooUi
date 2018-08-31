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
            v-model="loginParam.user"
            style="margin-bottom: 18px"
        >
        </el-input>

        <el-input
            placeholder="请输入密码"
            prefix-icon="fa fa-keyboard-o"
            v-model="loginParam.pass"
            type="password"
            style="margin-bottom: 18px"
            @keyup.native.enter="login"
        >
        </el-input>

        <el-button
            type="primary" :loading="loading"
            style="width: 100%;margin-bottom: 18px"
            @click.native="login"
        >登录
        </el-button>
        <div>
          <el-checkbox v-model="loginParam.remenber">记住我</el-checkbox>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error("Please enter the correct user name"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("The password can not be less than 6 digits"));
      } else {
        callback();
      }
    };
    return {
      loginParam: {
        user: "admin",
        pass: "admin",
        remenber: false
      },
      loginRules: {
        user: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        pass: [{ required: true, trigger: "blur", validator: validatePassword }]
      },
      loading: false
    };
  },
  methods: {
    login() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("LoginToSystem", this.loginParam)
            .then(() => {
              this.$router.push({ path: "/" });
            })
            .catch(() => {
              this.loading = false;
              this.$message.error("login fail");
            });
        } else {
          this.$message.error("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less">
@import "login.less";
</style>