<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-22 16:13:07
 * @FilePath: \obio-ui\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { computed, onBeforeMount, ref, toRefs, watch } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";
const router = useRouter();
const currentRoute = router.currentRoute.value;
// import HelloWorld from "./components/HelloWorld.vue";
// import FooterView from "@/views/FooterView.vue";
const fullPath = ref("");
watch(
  () => currentRoute,
  (newValue: any) => {
    fullPath.value = newValue.fullPath;
    // FocusData.value.title = obj.title;
    // FocusData.value.imgUrl = obj.imgUrl;
  },
  { immediate: true, deep: true }
);
</script>

<template>
  <router-view :key="fullPath"></router-view>
  <!-- <header> -->
  <!-- <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    /> -->
  <!-- 
    <div class="wrapper">
      <HelloWorld msg="OBiO" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About Us</RouterLink>
        <RouterLink to="/sys">Laboratory Sciences</RouterLink>
        <RouterLink to="/cdmo">CDMO Solutions</RouterLink>
        <RouterLink to="/cx">Innovations</RouterLink>
        <RouterLink to="/news">Insights</RouterLink>
        <RouterLink to="/investor-relations">Investor Relations</RouterLink>
        <RouterLink to="/contact">Contact Us</RouterLink>
      </nav>
    </div> -->
  <!-- </header> -->

  <!-- <RouterView /> -->

  <!-- <footer class="mb-3">
    <FooterView />
  </footer> -->
</template>

<style lang="scss" scoped></style>
