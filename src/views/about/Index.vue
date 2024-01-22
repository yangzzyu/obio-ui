<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-22 15:51:05
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="about">
    <Focus :focusObj="FocusData" />
    <Breadcrumb v-if="routerName !== 'About Us'" :matchedData="matchedData" />
    <router-view></router-view>
    <Events />
  </div>
</template>

<script lang="ts" setup name="About">
import { useRouter } from "vue-router";
import { computed, onBeforeMount, ref, toRefs, watch } from "vue";
import Events from "@/components/Events.vue";
import Focus from "@/components/Focus.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
const router = useRouter();
const currentRoute = router.currentRoute.value;
console.log(currentRoute, "currentRoute");
const routerName = ref("");
const matchedData = ref([]);
const FocusData = ref({});
const pageData = ref([
  {
    path: "/about",
    focusObj: {
      title: "About Us",
      imgUrl:
        "https://www.obio-tech.com/public/uploads/20220330/07400c4a1cb142c46d790e5ef2b22f5a.jpg",
    },
  },
  {
    path: "/spiroSite",
    focusObj: {
      title: "SPIRO Site",
      imgUrl:
        "	https://www.obio-tech.com/public/uploads/20220330/ba3c5468f02cdd8aa3f75a58fc00fdff.jpg",
    },
  },
  {
    path: "/pineSite",
    focusObj: {
      title: "PINE Site",
      imgUrl:
        "https://www.obio-tech.com/public/uploads/20220330/4f73b36b43411ab86c464b5e5477c842.jpg",
    },
  },
  {
    path: "/intelliM",
    focusObj: {
      title: "OBiO Intelli-M",
      imgUrl:
        "https://www.obio-tech.com/public/uploads/20231212/880325aa48c9982b1a9851a9fe36f90d.jpg",
    },
  },
  {
    path: "/team",
    focusObj: {
      title: "Leadership Team",
      imgUrl:
        "https://www.obio-tech.com/public/uploads/20220330/1d7540463fb4aecf7bd741586c761067.jpg",
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
