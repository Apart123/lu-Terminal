<template>
  <div>关于本站：LuIndex 终端式的浏览器主页</div>
  <div>
    作者：
    <a href="#" target="_blank">
      luying
    </a>
  </div>
</template>

<script setup lang="ts">
interface InfoBoxProps {
  seconds: string;
}

const props = withDefaults(defineProps<InfoBoxProps>(), {});
</script>

<style scoped></style>
