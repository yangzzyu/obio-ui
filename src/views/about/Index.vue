<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-04-16 10:29:53
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="about">
    <Focus :focusObj="FocusData" />
    <!-- <Breadcrumb v-if="routerName !== 'About Us'" :matchedData="matchedData" /> -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup name="About">
import { useRouter } from "vue-router";
import { computed, onBeforeMount, ref, toRefs, watch } from "vue";
import Events from "@/components/Events.vue";
import Focus from "@/components/Focus.vue";
import Career from "@/components/Career.vue";

import Breadcrumb from "@/components/Breadcrumb.vue";
import { handleViteImages } from "@/utils";

const router = useRouter();
const currentRoute = router.currentRoute.value;
const routerName = ref("");
const matchedData = ref([]);
const FocusData = ref({});
const pageData = ref([
  {
    path: "/about",
    focusObj: {
      title: "About Us",
      hiddenXsImgUrl: handleViteImages("head_bg.jpg"),
      visibleXsImgUrl: handleViteImages("head_bg.jpg"),
    },
  },
  {
    path: "/about/history",
    focusObj: {
      title: "About Us",
      hiddenXsImgUrl: handleViteImages("head_bg.jpg"),
      visibleXsImgUrl: handleViteImages("head_bg.jpg"),
    },
  },
  {
    path: "/about/facilities",
    focusObj: {
      title: "About Us",
      hiddenXsImgUrl: handleViteImages("head_bg.jpg"),
      visibleXsImgUrl: handleViteImages("head_bg.jpg"),
    },
  },
  {
    path: "/about/facilities/spiro",
    focusObj: {
      title: "SPIRO Site",
      hiddenXsImgUrl: handleViteImages("head_bg.jpg"),
      visibleXsImgUrl: handleViteImages("head_bg.jpg"),
    },
  },
  {
    path: "/about/facilities/pine",
    focusObj: {
      title: "PINE Site",
      hiddenXsImgUrl: handleViteImages("head_bg.jpg"),
      visibleXsImgUrl: handleViteImages("head_bg.jpg"),
    },
  },
  {
    path: "/about/facilities/intellim",
    focusObj: {
      title: "OBiO Intelli-M",
      hiddenXsImgUrl: handleViteImages("head_bg.jpg"),
      visibleXsImgUrl: handleViteImages("head_bg.jpg"),
    },
  },
  {
    path: "/about/who",
    focusObj: {
      title: "About Us",
      hiddenXsImgUrl: handleViteImages("head_bg.jpg"),
      visibleXsImgUrl: handleViteImages("head_bg.jpg"),
    },
  },
  {
    path: "/about/commitment",
    focusObj: {
      title: "About Us",
      hiddenXsImgUrl: handleViteImages("head_bg.jpg"),
      visibleXsImgUrl: handleViteImages("head_bg.jpg"),
    },
  },
  {
    path: "/about/life",
    focusObj: {
      title: "About Us",
      hiddenXsImgUrl: handleViteImages("head_bg.jpg"),
      visibleXsImgUrl: handleViteImages("head_bg.jpg"),
    },
  },
  {
    path: "/team",
    focusObj: {
      title: "Leadership Team",
      hiddenXsImgUrl: handleViteImages("head_bg.jpg"),
      visibleXsImgUrl: handleViteImages("head_bg.jpg"),
    },
  },
]);
watch(
  () => router.currentRoute.value,
  (newValue: any) => {
    FocusData.value =
      pageData.value.find((i) => i.path === newValue.path)?.focusObj || {};
    matchedData.value = newValue.matched || [];
    routerName.value = newValue.name;
    // FocusData.value.title = obj.title;
    // FocusData.value.imgUrl = obj.imgUrl;
  },
  { immediate: true, deep: true }
);
</script>

<style></style>
