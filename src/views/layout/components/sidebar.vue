<template>
  <div id="menu">
<el-menu
        router
        text-color="#fff"
        background-color="#222d32"        
        @open="handleOpen"
        @close="handleClose">
    </el-menu>
  </div>
    
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      key = keyPath;
    },
    handleClose(key, keyPath) {
      key = keyPath;
    }
  },
  mounted: function() {
    
  }
};
</script>
