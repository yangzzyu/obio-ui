<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-23 14:58:01
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <Focus :focusObj="FocusData" />
  <Breadcrumb v-if="routerName !== 'news'" :matchedData="matchedData" />
  <router-view></router-view>
</template>

<script lang="ts" setup name="CdmoIndex">
import Events from "@/components/Events.vue";
import Focus from "@/components/Focus.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import { useRouter } from "vue-router";
import { computed, onBeforeMount, ref, toRefs, watch } from "vue";
const router = useRouter();
const currentRoute = router.currentRoute.value;
console.log(currentRoute, "currentRoute");
const routerName = ref("");
const matchedData = ref([]);
const FocusData = ref({});
const pageData = ref([
  {
    path: "/news",
    focusObj: {
      title: "Insights",
      imgUrl:
        "https://www.obio-tech.com/public/uploads/20220326/27934f0f9b5c3e994f69ab811a53faff.jpg",
    },
  },
  {
    path: "/releases",
    focusObj: {
      title: "Insights",
      imgUrl:
        "https://www.obio-tech.com/public/uploads/20220326/27934f0f9b5c3e994f69ab811a53faff.jpg",
    },
  },
  {
    path: "/events",
    focusObj: {
      title: "Insights",
      imgUrl:
        "https://www.obio-tech.com/public/uploads/20220326/27934f0f9b5c3e994f69ab811a53faff.jpg",
    },
  },
  {
    path: "/cgmp",
    focusObj: {
      title: "cGMP Manufacturing",
      imgUrl:
        "https://www.obio-tech.com/public/uploads/20220330/34ae01f5908db621bb95a22d16206e8f.jpg",
    },
  },
  {
    path: "/vector",
    focusObj: {
      title: "Viral Vector",
      imgUrl:
        "https://www.obio-tech.com/public/uploads/20220330/6fbdf45356950a4b251f06186fe587df.jpg",
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
