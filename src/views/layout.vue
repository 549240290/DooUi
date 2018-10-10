<template>
  <div class="main">
    <div class="header">
      <div class="logo">
        <span>飞翔软文</span>
      </div>
      <div class="right">
          <el-dropdown>
          <span class="header-btn">
            {{ user.name }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="$router.push('/personal')"><i style="padding-right: 8px" class="fa fa-cog"></i>个人中心</el-dropdown-item>
            <el-dropdown-item @click.native="logout"><i style="padding-right: 8px" class="fa fa-key"></i>退出系统</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="app">
      <div class="aside">
        <div class="menu">
          <!-- 左侧菜单 -->
            <menu-bar />
          <!-- 左侧菜单 -->
        </div>      
      </div>
      <div class="app-body">
        <nav-bar id="nav-bar" style="position: fixed;top: 0;width:100%"></nav-bar>
        <div id="mainContainer" class="main-container">
          <!--<transition name="fade">-->
            <router-view></router-view>
          <!--</transition>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menuBar from '@/components/menuBar'
import navBar from '@/components/navBar'
export default {
  name: 'Layout',
  components: {
    menuBar,
    navBar
  },
  data() {
    return {
      
    };
  },
  computed: {
    user: function () {
      return this.$store.getters.currentUser
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push({path: '/login'}); 
    }
  }
};
</script>
<style lang="less">
.main {
  display: flex;
  .el-menu:not(.el-menu--collapse) {
    width: 230px;
  }
  .app {
    width: 100%;
    background-color: #ecf0f5;
  }
  .aside {
    position: fixed;
    margin-top: 50px;
    z-index: 10;
    background-color: #222d32;
    transition: all 0.3s ease-in-out;
    .menu {
      overflow-y: auto;
      height: calc(~"100vh");
    }
    .sidebar-toggle {
      position: relative;
      width: 100%;
      height: 50px;
      background-color: #367fa9;
      color: #fff;
      cursor: pointer;
      .icon-left {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 0;
        width: 64px;
        height: 100%;
        font-size: 20px;
        transition: all 0.3s ease-in-out;
      }
    }
  }
  .app-body {
    margin-left: 230px;
    -webkit-transition: margin-left 0.3s ease-in-out;
    transition: margin-left 0.3s ease-in-out;
  }
  .main-container {
    background-color: #fff;
    margin: 95px 8px 8px;
    padding: 6px;
    min-height: calc(~"100vh - 15px");
  }
}
.header {
  width: 100%;
  position: fixed;
  display: flex;
  height: 50px;
  background-color: #3c8dbc;
  z-index: 10;
  .logo {
    .min {
      display: none;
    }
    width: 230px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    background-color: #367fa9;
    -webkit-transition: width 0.35s;
    transition: all 0.3s ease-in-out;
  }
  .right {
    position: absolute;
    right: 0;
  }
  .header-btn {
    .el-badge__content {
      top: 14px;
      right: 7px;
      text-align: center;
      font-size: 9px;
      padding: 0 3px;
      background-color: #00a65a;
      color: #fff;
      border: none;
      white-space: nowrap;
      vertical-align: baseline;
      border-radius: 0.25em;
    }
    overflow: hidden;
    height: 50px;
    display: inline-block;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    padding: 0 14px;
    color: #fff;
    &:hover {
      background-color: #367fa9;
    }
  }
}
.menu {
  border-right: none;
}
.el-menu--vertical {
  min-width: 190px;
}
.setting-category {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}
</style>