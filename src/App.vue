<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-27 15:26:48
 * @FilePath: \obio-ui\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { computed, onBeforeMount, ref, toRefs, watch } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";
const router = useRouter();
const currentRoute = router.currentRoute.value;
const fullPath = ref("");
watch(
  () => currentRoute,
  (newValue: any) => {
    fullPath.value = newValue.fullPath;
  },
  { immediate: true, deep: true }
);
</script>

<template>
  <router-view :key="fullPath"></router-view>
</template>

<style lang="scss" scoped></style>
