<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-04-01 15:31:50
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <Focus :focusObj="FocusData" />
  <!-- <Breadcrumb :matchedData="matchedData" /> -->
  <!-- <router-view></router-view> -->
  <el-col
    :xs="22"
    :sm="20"
    :md="20"
    :lg="20"
    :xl="22"
    style="margin: auto"
    class="container"
  >
    <div class="pub-title pub-title-p ub ub-ver ub-pe">
      <i class="line"></i>
      <span class="fontf8 font-size30 font-color-ts">{{ newsItem.title }}</span>
      <div class="p font-size18">
        <div class="font-size24 fontf5" style="color: #000; margin: 5px 0">
          {{ newsItem.time }}
        </div>
        <div class="font-size20 color666">
          {{ newsItem.subhead }}
        </div>
      </div>
    </div>
    <div v-html="newsItem.html"></div>
  </el-col>
  <Events />
</template>

<script lang="ts" setup name="CdmoIndex">
import Events from "@/components/Events.vue";
import Focus from "@/components/Focus.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import { useRouter } from "vue-router";
import { computed, onBeforeMount, ref, toRefs, watch, onMounted } from "vue";
import { releases, events } from "./data/Index";
import { handleViteImages, goRouter } from "@/utils";

import { log } from "node:console";
const router = useRouter();
const currentRoute = router.currentRoute.value;
console.log(currentRoute, "currentRoute");
const routerName = ref("");
const matchedData = ref([
  {
    path: "/home",
    name: "Home",
  },
  {
    path: "/news",
    name: "News",
  },
  {
    path: currentRoute.path,
    name: "Focusing on efficient gene delivery of NK cells, The First Condor Life and OBiO Technology reach a strategic cooperation!",
  },
]);
const FocusData = ref({
  title: "News",
  hiddenXsImgUrl: handleViteImages("head_bg.jpg"),
  visibleXsImgUrl: handleViteImages("head_bg.jpg"),
});
const newsItem = ref({});
onMounted(() => {
  // const currentRoute = router.currentRoute.value;
  // console.log(router, "currentRout2121212121e");
  const routerType = currentRoute.params.type;
  console.log(routerType, "routerType");
  if (routerType == "releases") {
    newsItem.value =
      releases.value.find((i: any) => i.id == currentRoute.params.id) || {};
  } else {
    newsItem.value =
      events.value.find((i: any) => i.id == currentRoute.params.id) || {};
  }

  matchedData.value.at(-1).name = newsItem.value.title;
});
</script>

<style></style>
