<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-23 14:49:11
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
const router = useRouter();
const currentRoute = router.currentRoute.value;
console.log(currentRoute, "currentRoute");
const routerName = ref("");
const matchedData = ref([]);
const FocusData = ref({});
const pageData = ref([
  {
    path: "/cdmo",
    focusObj: {
      title: "CDMO Solutions",
      imgUrl:
        "https://www.obio-tech.com/public/uploads/20220330/07400c4a1cb142c46d790e5ef2b22f5a.jpg",
    },
  },
  {
    path: "/process",
    focusObj: {
      title: "Process Development",
      imgUrl:
        "https://www.obio-tech.com/public/uploads/20220328/d7b226a5e9332f9804019e59344efe3b.jpg",
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
  {
    path: "/virus",
    focusObj: {
      title: "Oncolytic Virus",
      imgUrl:
        "https://www.obio-tech.com/public/uploads/20220330/1d3be6a7e78174e244dee6cc9a6320cd.jpg",
    },
  },
  {
    path: "/products",
    focusObj: {
      title: "Cell Therapy Products",
      imgUrl:
        "https://www.obio-tech.com/public/uploads/20220330/af8a6842599b1daa7a19f6fc32f637c0.jpg",
    },
  },
  {
    path: "/nucleotides",
    focusObj: {
      title: "Plasmid & Nucleotides",
      imgUrl:
        "	https://www.obio-tech.com/public/uploads/20220330/6f5d5b449025bea2940b3050dba4e019.jpg",
    },
  },
  {
    path: "/quality",
    focusObj: {
      title: "Quality & Regulatory",
      imgUrl:
        "https://www.obio-tech.com/public/uploads/20220328/216e63a85e07bb9dbe58e751a45b2fcb.jpg",
    },
  },
  {
    path: "/logistics",
    focusObj: {
      title: "Cold Chain Logistics",
      imgUrl:
        "https://www.obio-tech.com/public/uploads/20220328/216e63a85e07bb9dbe58e751a45b2fcb.jpg",
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
