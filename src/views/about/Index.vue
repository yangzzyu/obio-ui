<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-03-21 16:30:59
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
import { handleViteImages } from "@/utils";

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
      hiddenXsImgUrl: handleViteImages("head_bg.jpg"),
      // "https://www.obio-tech.com/public/uploads/20220328/ad95627baa62ec4288fe6823b9571ee6.jpg",
      visibleXsImgUrl: handleViteImages("head_bg.jpg"),
      // "https://www.obio-tech.com/public/uploads/20220401/fbacb8fb46400e71bf84d29d77c57ea4.jpg",
      // hiddenXsImgUrl: handleViteImages("head_bg6.png"),
      // visibleXsImgUrl: handleViteImages("head_bg6.png"),
    },
  },
  {
    path: "/facilities",
    focusObj: {
      title: "About Us",
      hiddenXsImgUrl: handleViteImages("head_bg.jpg"),
      // "https://www.obio-tech.com/public/uploads/20220328/ad95627baa62ec4288fe6823b9571ee6.jpg",
      visibleXsImgUrl: handleViteImages("head_bg.jpg"),
      // "https://www.obio-tech.com/public/uploads/20220401/fbacb8fb46400e71bf84d29d77c57ea4.jpg",
    },
  },
  {
    path: "/spiroSite",
    focusObj: {
      title: "SPIRO Site",
      hiddenXsImgUrl: handleViteImages("head_bg.jpg"),

      // "https://www.obio-tech.com/public/uploads/20220330/ba3c5468f02cdd8aa3f75a58fc00fdff.jpg",
      visibleXsImgUrl: handleViteImages("head_bg.jpg"),

      // "https://www.obio-tech.com/public/uploads/20220402/40fd25acf5baaecdcf7db3ac15f705f2.jpg",
    },
  },
  {
    path: "/pineSite",
    focusObj: {
      title: "PINE Site",
      hiddenXsImgUrl: handleViteImages("head_bg.jpg"),

      // "https://www.obio-tech.com/public/uploads/20220330/4f73b36b43411ab86c464b5e5477c842.jpg",
      visibleXsImgUrl: handleViteImages("head_bg.jpg"),

      // "https://www.obio-tech.com/public/uploads/20220402/4738c4eb8c6cbcc0917281c987f1c57b.jpg",
    },
  },
  {
    path: "/intelliM",
    focusObj: {
      title: "OBiO Intelli-M",
      hiddenXsImgUrl: handleViteImages("head_bg.jpg"),

      // "https://www.obio-tech.com/public/uploads/20231212/880325aa48c9982b1a9851a9fe36f90d.jpg",
      visibleXsImgUrl: handleViteImages("head_bg.jpg"),

      // "https://www.obio-tech.com/public/uploads/20220402/2e0726ccc43f2f2c0bd315cd476d0b6f.jpg",
    },
  },
  {
    path: "/team",
    focusObj: {
      title: "Leadership Team",
      hiddenXsImgUrl: handleViteImages("head_bg.jpg"),

      // "https://www.obio-tech.com/public/uploads/20220330/1d7540463fb4aecf7bd741586c761067.jpg",
      visibleXsImgUrl: handleViteImages("head_bg.jpg"),

      // "https://www.obio-tech.com/public/uploads/20220401/0d6612cd60e36741f2ad2f3fe90eebf3.jpg",
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
