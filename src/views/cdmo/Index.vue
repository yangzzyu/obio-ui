<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-03-21 16:33:36
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="cdmo">
    <Focus :focusObj="FocusData" />
    <Breadcrumb v-if="routerName !== 'cdmo'" :matchedData="matchedData" />
    <router-view></router-view>
    <Events />
  </div>
</template>

<script lang="ts" setup name="CdmoIndex">
import Events from "@/components/Events.vue";
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
    path: "/cdmo",
    focusObj: {
      title: "CDMO Solutions",
      hiddenXsImgUrl: handleViteImages("head_bg.jpg"),
      visibleXsImgUrl: handleViteImages("head_bg.jpg"),
    },
  },
  {
    path: "/process",
    focusObj: {
      title: "Process Development",
      hiddenXsImgUrl: handleViteImages("head_bg.jpg"),

      visibleXsImgUrl: handleViteImages("head_bg.jpg"),
    },
  },
  {
    path: "/cgmp",
    focusObj: {
      title: "cGMP Manufacturing",
      hiddenXsImgUrl: handleViteImages("head_bg.jpg"),

      visibleXsImgUrl: handleViteImages("head_bg.jpg"),
    },
  },
  {
    path: "/vector",
    focusObj: {
      title: "Viral Vector",
      hiddenXsImgUrl: handleViteImages("head_bg.jpg"),

      visibleXsImgUrl: handleViteImages("head_bg.jpg"),
    },
  },
  {
    path: "/virus",
    focusObj: {
      title: "Oncolytic Virus",
      hiddenXsImgUrl: handleViteImages("head_bg.jpg"),

      visibleXsImgUrl: handleViteImages("head_bg.jpg"),
    },
  },
  {
    path: "/products",
    focusObj: {
      title: "Cell Therapy Products",
      hiddenXsImgUrl: handleViteImages("head_bg.jpg"),

      visibleXsImgUrl: handleViteImages("head_bg.jpg"),
    },
  },
  {
    path: "/nucleotides",
    focusObj: {
      title: "Plasmid & Nucleotides",
      hiddenXsImgUrl: handleViteImages("head_bg.jpg"),

      visibleXsImgUrl: handleViteImages("head_bg.jpg"),
    },
  },
  {
    path: "/quality",
    focusObj: {
      title: "Quality & Regulatory",
      hiddenXsImgUrl: handleViteImages("head_bg.jpg"),

      visibleXsImgUrl: handleViteImages("head_bg.jpg"),
    },
  },
  {
    path: "/logistics",
    focusObj: {
      title: "Cold Chain Logistics",
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
  },
  { immediate: true, deep: true }
);
</script>

<style></style>
