<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-22 15:36:52
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-27 10:04:18
 * @FilePath: \obio-ui\src\views\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-container>
    <el-header class="index-header">
      <AwHeader :headerShadowActive="headerShadowActive"></AwHeader
    ></el-header>
    <el-main class="index-main"><router-view></router-view></el-main>
    <el-footer><AwFooter></AwFooter></el-footer>
  </el-container>
</template>
<script lang="ts" setup>
// 导入组件
import AwHeader from "@/components/Header.vue";
import AwFooter from "@/components/Footer.vue";
import { onMounted, onUnmounted, ref } from "vue";

const scrollTop = ref(0);
onMounted(() => {
  window.addEventListener("scroll", scrollHandle);
});

onUnmounted(() => {
  window.removeEventListener("scroll", scrollHandle);
});
const headerShadowActive = ref(false);
function scrollHandle() {
  scrollTop.value =
    document.documentElement.scrollTop ||
    window.pageYOffset ||
    document.body.scrollTop;
  if (scrollTop.value <= 300) {
    headerShadowActive.value = false;
  } else {
    headerShadowActive.value = true;
  }
}
</script>
<style>
.index-con {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
.el-header {
  height: 0 !important;
}
.aside {
  width: 64px !important;
  height: 100%;
  background-color: #334157;
  margin: 0px;
}
.index-header,
.index-main,
.el-footer {
  padding: 0px;
  /* border-left: 2px solid #333; */
}
</style>
