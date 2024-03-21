<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-27 15:15:42
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
const routerName = ref("");
const matchedData = ref([]);
const FocusData = ref({});
const pageData = ref([
  {
    path: "/cdmo",
    focusObj: {
      title: "CDMO Solutions",
      hiddenXsImgUrl:
        "https://www.obio-tech.com/public/uploads/20220326/27934f0f9b5c3e994f69ab811a53faff.jpg",

      // "https://www.obio-tech.com/public/uploads/20220330/07400c4a1cb142c46d790e5ef2b22f5a.jpg",
      visibleXsImgUrl:
        "https://www.obio-tech.com/public/uploads/20220326/27934f0f9b5c3e994f69ab811a53faff.jpg",

      // "https://www.obio-tech.com/public/uploads/20220401/a7f748f8da55b9f43ebdb3d5b9e8595d.jpg",
    },
  },
  {
    path: "/process",
    focusObj: {
      title: "Process Development",
      hiddenXsImgUrl:
        "https://www.obio-tech.com/public/uploads/20220326/27934f0f9b5c3e994f69ab811a53faff.jpg",

      // "https://www.obio-tech.com/public/uploads/20220328/d7b226a5e9332f9804019e59344efe3b.jpg",
      visibleXsImgUrl:
        "https://www.obio-tech.com/public/uploads/20220326/27934f0f9b5c3e994f69ab811a53faff.jpg",

      // "https://www.obio-tech.com/public/uploads/20220402/4f74ded2082291e087087e7766603129.jpg",
    },
  },
  {
    path: "/cgmp",
    focusObj: {
      title: "cGMP Manufacturing",
      hiddenXsImgUrl:
        "https://www.obio-tech.com/public/uploads/20220326/27934f0f9b5c3e994f69ab811a53faff.jpg",

      // "https://www.obio-tech.com/public/uploads/20220330/34ae01f5908db621bb95a22d16206e8f.jpg",
      visibleXsImgUrl:
        "https://www.obio-tech.com/public/uploads/20220326/27934f0f9b5c3e994f69ab811a53faff.jpg",

      // "https://www.obio-tech.com/public/uploads/20220402/38cf0d261cc14e8b1c869b47d7f4d566.jpg",
    },
  },
  {
    path: "/vector",
    focusObj: {
      title: "Viral Vector",
      hiddenXsImgUrl:
        "https://www.obio-tech.com/public/uploads/20220326/27934f0f9b5c3e994f69ab811a53faff.jpg",

      // "https://www.obio-tech.com/public/uploads/20220330/6fbdf45356950a4b251f06186fe587df.jpg",
      visibleXsImgUrl:
        "https://www.obio-tech.com/public/uploads/20220326/27934f0f9b5c3e994f69ab811a53faff.jpg",

      // "https://www.obio-tech.com/public/uploads/20220402/cc9b65af3beb61d3da740b1e0d11cea7.jpg",
    },
  },
  {
    path: "/virus",
    focusObj: {
      title: "Oncolytic Virus",
      hiddenXsImgUrl:
        "https://www.obio-tech.com/public/uploads/20220326/27934f0f9b5c3e994f69ab811a53faff.jpg",

      // "https://www.obio-tech.com/public/uploads/20220330/1d3be6a7e78174e244dee6cc9a6320cd.jpg",
      visibleXsImgUrl:
        "https://www.obio-tech.com/public/uploads/20220326/27934f0f9b5c3e994f69ab811a53faff.jpg",

      // "https://www.obio-tech.com/public/uploads/20220402/18833d6cae5555c28b232e74767a79cf.jpg",
    },
  },
  {
    path: "/products",
    focusObj: {
      title: "Cell Therapy Products",
      hiddenXsImgUrl:
        "https://www.obio-tech.com/public/uploads/20220326/27934f0f9b5c3e994f69ab811a53faff.jpg",

      // "https://www.obio-tech.com/public/uploads/20220330/af8a6842599b1daa7a19f6fc32f637c0.jpg",
      visibleXsImgUrl:
        "https://www.obio-tech.com/public/uploads/20220326/27934f0f9b5c3e994f69ab811a53faff.jpg",

      // "https://www.obio-tech.com/public/uploads/20220402/8492a7889ab26c1cc52ac6bb89ecb5d8.jpg",
    },
  },
  {
    path: "/nucleotides",
    focusObj: {
      title: "Plasmid & Nucleotides",
      hiddenXsImgUrl:
        "https://www.obio-tech.com/public/uploads/20220326/27934f0f9b5c3e994f69ab811a53faff.jpg",

      // "	https://www.obio-tech.com/public/uploads/20220330/6f5d5b449025bea2940b3050dba4e019.jpg",
      visibleXsImgUrl:
        "https://www.obio-tech.com/public/uploads/20220326/27934f0f9b5c3e994f69ab811a53faff.jpg",

      // "https://www.obio-tech.com/public/uploads/20220402/b8873a6a1a667ee4714c36c395923f50.jpg",
    },
  },
  {
    path: "/quality",
    focusObj: {
      title: "Quality & Regulatory",
      hiddenXsImgUrl:
        "https://www.obio-tech.com/public/uploads/20220326/27934f0f9b5c3e994f69ab811a53faff.jpg",

      // "https://www.obio-tech.com/public/uploads/20220328/216e63a85e07bb9dbe58e751a45b2fcb.jpg",
      visibleXsImgUrl:
        "https://www.obio-tech.com/public/uploads/20220326/27934f0f9b5c3e994f69ab811a53faff.jpg",

      // "https://www.obio-tech.com/public/uploads/20220402/0068ed55787bf57ae58d7ac6c791b293.jpg",
    },
  },
  {
    path: "/logistics",
    focusObj: {
      title: "Cold Chain Logistics",
      hiddenXsImgUrl:
        "https://www.obio-tech.com/public/uploads/20220326/27934f0f9b5c3e994f69ab811a53faff.jpg",

      // "https://www.obio-tech.com/public/uploads/20220328/216e63a85e07bb9dbe58e751a45b2fcb.jpg",
      visibleXsImgUrl:
        "https://www.obio-tech.com/public/uploads/20220326/27934f0f9b5c3e994f69ab811a53faff.jpg",

      // "https://www.obio-tech.com/public/uploads/20220402/b39913a6688671a22631de74e30fdb78.jpg",
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
