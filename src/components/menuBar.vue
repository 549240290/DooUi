<template>
    <div id="menu">
        <el-menu
            router
            text-color="#fff"
            background-color="#222d32"        
        >
            <template v-for="(val, key) in menus" >
                <template v-if="val.children" >
                    <el-submenu  :index="val.index" :key="key">
                    <template slot="title" >
                        <i :class="val.icon"></i>
                        <span slot="title">{{val.title}}</span>
                    </template>
                    <el-menu-item v-for="(subval,subkey) in val.children" :key="subkey" :index="subval.index">
                        <i :class="subval.icon"></i>
                        <span slot="title">{{ subval.title }}</span>
                    </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="val.index" :key="key">
                        <i :class="val.icon"></i>
                        <span slot="title">{{ val.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import val from "@/menu.js";
export default {
  name: "menuBar",
  data() {
    return {
      menus: val
    };
  }
};
</script>

