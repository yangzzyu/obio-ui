<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-03-27 17:03:57
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
      hiddenXsImgUrl: handleViteImages("head_bg.jpg"),
      visibleXsImgUrl: handleViteImages("head_bg.jpg"),
    },
  },
  {
    name: "Press Releases",
    focusObj: {
      title: "Insights",
      hiddenXsImgUrl: handleViteImages("head_bg.jpg"),
      visibleXsImgUrl: handleViteImages("head_bg.jpg"),
    },
  },
  {
    name: "Events",
    focusObj: {
      title: "Insights",
      hiddenXsImgUrl: handleViteImages("head_bg.jpg"),
      visibleXsImgUrl: handleViteImages("head_bg.jpg"),
    },
  },
  {
    name: "News Details",
    focusObj: {
      title: "Insights",
      hiddenXsImgUrl: handleViteImages("head_bg.jpg"),
      visibleXsImgUrl: handleViteImages("head_bg.jpg"),
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
