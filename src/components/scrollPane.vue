<template>
  <div class="scroll-container" ref="scrollContainer">
    <div class="scroll-wrapper" ref="scrollWrapper" :style="{left: left + 'px'}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  const padding = 15;// tag's padding
  export default {
    name: 'scrollPane',
    data() {
      return {
        left: 0
      }
    },
    methods: {
      moveToTarget($target) {
        const $container = this.$refs.scrollContainer
        const $containerWidth = $container.offsetWidth
        const $targetLeft = $target.offsetLeft
        const $targetWidth = $target.offsetWidth
        if ($targetLeft < -this.left) {
          // tag in the left
          this.left = -$targetLeft + padding
        } else if ($targetLeft + padding > -this.left && $targetLeft + $targetWidth < -this.left + $containerWidth - padding) {
          // tag in the current view
          // eslint-disable-line
        } else {
          // tag in the right
          this.left = -($targetLeft - ($containerWidth - $targetWidth) + padding)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .scroll-container {
    cursor: ew-resize;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    width: 100%;
    .scroll-wrapper {
      padding: 0 4px;
      position: absolute;
      transition: left 0.3s ease-in-out;
    }
  }
</style>