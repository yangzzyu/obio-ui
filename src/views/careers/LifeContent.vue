<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-04-17 15:10:47
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="lab-sciences">
  <!-- All Hands Meeting -->
    <section id="meeting" class="meeting-container">
      <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto" class="container">
        <h1 class="p-title font-size30 txt-bold fontf8 mb-3 mt-5">
          All Hands Meeting
        </h1>
        <el-col :xs="24" :span="20" style="margin: auto" class="container">
          <img
            :src="handleViteImages('life/meetin_bg.png')"
            width="100%"
            alt="All Hands Meeting Picture"
            srcset=""
            class="mb-5" /></el-col
      ></el-col>
    </section>
    <div class="in-about-wrap training-box" v-for="(item, index) in lifeList" :key="index">
      <div class="section-3">
        <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto" class="container">
          <h1 class="p-title font-size30 txt-bold fontf8 mb-3 mt-5">
            {{ item.title }}
          </h1>

          <div class="fac-con">
            <el-row class="row" :gutter="10">
              <el-col :xs="24" :span="item.spanList ? item.spanList[k] : item.imgList.length > 4 ? 6 : (24 / item.imgList.length)" class=""
                v-for="(i, k) in item.imgList" :key="k">
                <div class="manufacturing-list bg-pinkbluelfr">
                  <div class="content" style="width: 100%;max-height: 200px; overflow: hidden">
                    <el-image
                      style="width: 100%; height: 100%"
                      :src="i"
                      :alt="`${item.title} Picture ${k + 1}`"
                      :zoom-rate="1.2"
                      :max-scale="7"
                      :min-scale="0.2"
                      :initial-index="k"
                      :crossorigin="null"
                      :preview-src-list="item.imgList"
                      fit="cover"
                      :z-index="99999"
                      :preview-teleported="true"
                      :hide-on-click-modal="true"
                    />
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </div>
    </div>
    <section id="Seeout1" class="">
      <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto" class="container">
        <el-row :gutter="20" class="mb-4">
          <el-col :span="10" :xs="24">
            <div class="manufacturing-list bg-pinkbluelfr video-list">
              <div class="content">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/HQsTy3PhfNI?si=9tfNQvuwp8NnbYL-"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
                <p class="video-p font-size18 textColor">
                  Exciting Milestone: OBiO Lingang Facility Launches Operations
                  in 2023!
                </p>
              </div>
            </div>
          </el-col>
          <el-col :span="10" :xs="24">
            <div class="manufacturing-list bg-pinkbluelfr video-list">
              <div class="content">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/rmq1Vp3zZFg?si=mikql8NjYHJ56uFj"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>

                <p class="video-p font-size18 textColor">
                  Exciting Milestone: OBiO Lingang Facility Launches Operations
                  in 2023!
                </p>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </section>
  </div>

  <el-dialog v-model="dialogVisible" title="" width="60%" :before-close="handleClose">
    <div class="popLaboraBox-main">
      <div class="font-size30 fontf8 title title-color">
        <span>{{ Labora.title }}</span>
      </div>
      <div class="text color666 font-size18">
        <p>
          <span style="line-height: 2"> {{ Labora.txt }}</span>
        </p>
        <p>
          <br />
        </p>
        <p style="text-align: center">
          <img :src="Labora.imgUrl" :alt="Labora.title" />
        </p>
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup name="LabSciences">
import { reactive, ref } from "vue";
import Events from "@/components/Events.vue";
import { handleViteImages, goRouter } from "@/utils";

const dialogVisible = ref(false);
function handleClose() {
  Labora.value = {};
  dialogVisible.value = false;
}
type ViralItem = {
  id: number;
  imgUrl: string;
  title: string;
  path: string;
};
const Labora = ref(<any>{});
const lifeList = reactive([
  {
    title: "Training and Internship",
    imgList: [
      handleViteImages("life/1.png"),
      handleViteImages("life/2.png"),
      handleViteImages("life/3.png"),
      handleViteImages("life/4.png"),
    ],
  },
  {
    title: "Team Building",
    imgList: [
      handleViteImages("life/5.png"),
      handleViteImages("life/6.png"),
      handleViteImages("life/7.png"),
      handleViteImages("life/8.png"),
      handleViteImages("life/9.png"),
      handleViteImages("life/10.png"),
      handleViteImages("life/11.png"),
      handleViteImages("life/12.png"),
    ],
  },
  {
    title: "Mother's Day",
    imgList: [
      handleViteImages("life/13.png"),
      handleViteImages("life/14.png"),
      handleViteImages("life/15.png"),
      handleViteImages("life/16.png"),
    ],
  },
  {
    title: "Holiday",
    spanList: [3, 10, 5, 5, 5, 5, 5, 6, 6, 6],
    imgList: [
      handleViteImages("life/17.png"),
      handleViteImages("life/18.png"),
      handleViteImages("life/19.png"),
      handleViteImages("life/20.png"),
      handleViteImages("life/21.png"),
      handleViteImages("life/22.png"),
      handleViteImages("life/23.png"),
      handleViteImages("life/24.png"),
      handleViteImages("life/25.png"),
      handleViteImages("life/26.png"),
    ],
  },
  {
    title: "Charity Events - Walking 50km",
    spanList: [5, 5, 6],
    imgList: [
      handleViteImages("life/27.png"),
      handleViteImages("life/28.png"),
      handleViteImages("life/29.png"),
    ],
  },
  {
    title: "Work",
    spanList: [8,8,8,6,6,6,6,6,6,6],
    imgList: [
      handleViteImages("life/38.jpg"),
      handleViteImages("life/39.jpg"),
      handleViteImages("life/40.jpg"),
      handleViteImages("life/31.jpg"),
      handleViteImages("life/32.jpg"),
      handleViteImages("life/33.jpg"),
      handleViteImages("life/34.jpg"),
      handleViteImages("life/35.jpg"),
      handleViteImages("life/36.jpg"),
      handleViteImages("life/37.jpg"),
    ],
  },
  {
    title: "Basketball",
    spanList: [5,6],
    imgList: [
      handleViteImages("life/football1.jpg"),
      handleViteImages("life/football2.jpg"),
    ],
  }
]);
</script>

<style lang="scss" scoped>
.culture-box {
  margin-top: -100px;
  position: relative;
}

.training-box {
  margin: 0;
}
</style>
