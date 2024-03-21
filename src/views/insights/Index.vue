<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-27 15:11:52
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <Focus :focusObj="FocusData" />
  <Breadcrumb v-if="routerName !== 'news'" :matchedData="matchedData" />
  <router-view></router-view>
</template>

<script lang="ts" setup name="CdmoIndex">
import Focus from "@/components/Focus.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import { useRouter } from "vue-router";
import { computed, onBeforeMount, ref, toRefs, watch } from "vue";
import { handleViteImages } from "@/utils";

const router = useRouter();
const currentRoute = router.currentRoute.value;
const routerName = ref("");
const matchedData = ref([]);
const FocusData = ref({});
const pageData = ref([
  {
    name: "News and Events",
    focusObj: {
      title: "News and Events",
      hiddenXsImgUrl:
         handleViteImages('@/assets/icons/head_bg.jpg'),

      visibleXsImgUrl:
         handleViteImages('@/assets/icons/head_bg.jpg'),

      // hiddenXsImgUrl: handleViteImages("@/assets/icons/head_bg3.png"),
      // visibleXsImgUrl: handleViteImages("@/assets/icons/head_bg3.png"),
    },
  },
  {
    name: "Press Releases",
    focusObj: {
      title: "Insights",
      hiddenXsImgUrl:
         handleViteImages('@/assets/icons/head_bg.jpg'),

      //  handleViteImages('@/assets/icons/head_bg.jpg'),
      visibleXsImgUrl:
         handleViteImages('@/assets/icons/head_bg.jpg'),

      // "https://www.obio-tech.com/public/uploads/20220401/fed2a39854c2e2e0bd6d7d8434597de8.jpg",
    },
  },
  {
    name: "Events",
    focusObj: {
      title: "Insights",
      hiddenXsImgUrl:
         handleViteImages('@/assets/icons/head_bg.jpg'),

      //  handleViteImages('@/assets/icons/head_bg.jpg'),
      visibleXsImgUrl:
         handleViteImages('@/assets/icons/head_bg.jpg'),

      // "https://www.obio-tech.com/public/uploads/20220401/fed2a39854c2e2e0bd6d7d8434597de8.jpg",
    },
  },
  {
    name: "News Details",
    focusObj: {
      title: "Insights",
      hiddenXsImgUrl:
         handleViteImages('@/assets/icons/head_bg.jpg'),

      //  handleViteImages('@/assets/icons/head_bg.jpg'),
      visibleXsImgUrl:
         handleViteImages('@/assets/icons/head_bg.jpg'),

      // "https://www.obio-tech.com/public/uploads/20220401/fed2a39854c2e2e0bd6d7d8434597de8.jpg",
    },
  },
]);
watch(
  () => router.currentRoute.value,
  (newValue: any) => {
    FocusData.value =
      pageData.value.find((i) => i.name === newValue.name)?.focusObj || {};
    matchedData.value = newValue.matched || [];
    routerName.value = newValue.name;
  },
  { immediate: true, deep: true }
);
</script>

<style></style>
