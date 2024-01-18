<template>
  <el-container>
    <el-header class="index-header"> <AwHeader></AwHeader></el-header>
    <el-main class="index-main"><router-view></router-view></el-main>
    <el-footer><AwFooter></AwFooter></el-footer>
  </el-container>
</template>
<script lang="ts" setup>
// 导入组件
import AwHeader from "@/components/Header.vue";
import AwFooter from "@/components/Footer.vue";
</script>
<style>
.index-con {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

.aside {
  width: 64px !important;
  height: 100%;
  background-color: #334157;
  margin: 0px;
}
.index-header,
.index-main {
  padding: 0px;
  /* border-left: 2px solid #333; */
}
</style>
