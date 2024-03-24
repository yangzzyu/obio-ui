<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-03-22 16:09:01
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="lab-sciences">
    <Focus :focusObj="FocusData" />
    <section class="culture-box hero-style-top">
      <el-col
        :xs="22"
        :sm="20"
        :md="20"
        :lg="20"
        :xl="22"
        style="margin: auto"
        class="container"
      >
        <h1 class="title-color font-size50 txt-bold section-title fontf8">
          Life at OBiO
        </h1>
        <h2 class="title-color our-txt font-size18 section-title">
          As OBiO Tech swiftly evolves, every OBiOers are immersed in an
          environment fostering <text class="fontf7"> enhanced capabilities, purposeful work, and a
          fulfilling life.</text>
        </h2>
        <ul class="font-size18 textColor">
          <li>Enhanced Capabilities</li>
          <li>Competitive compensation and benefits</li>
          <li>
            Opportunities for training, rotation, and continuous education
          </li>
          <li>Empowerment, accountability, and value creation</li>
          <li>
            Work-Life Balance: A harmonious blend of professional and personal
            pursuits
          </li>
        </ul>
        <br />
        <p class="font-size18 textColor" style="margin-bottom: 20px">
          This encapsulates our vibrant company culture, where every moment is
          an opportunity for growth and fulfillment.
        </p>
      </el-col>
    </section>
    <div
      class="in-about-wrap training-box"
      v-for="(item, index) in lifeList"
      :key="index"
    >
      <div class="section-3">
        <el-col
          :xs="22"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
          class="container"
        >
          <h1 class="p-title font-size30 txt-bold fontf8 mb-3 mt-5">
            {{ item.title }}
          </h1>

          <div class="fac-con">
            <el-row class="row" :gutter="10">
              <el-col
                :xs="24"
                :span="24 / item.imgList.length"
                class=""
                v-for="(i, index) in item.imgList"
                :key="index"
              >
                <div class="manufacturing-list bg-pinkbluelfr">
                  <div
                    class="content"
                    style="width: 100%; height: 300px; overflow: hidden"
                  >
                    <img
                      :src="i"
                      alt=""
                      srcset=""
                      width="100%"
                      height="100%"
                      style="object-fit: cover"
                    />
                  </div>
                  <!-- <div class="content">
                    <img :src="i" alt="" srcset="" />
                  </div> -->
                </div>
              </el-col>
            </el-row>
          </div></el-col
        >
      </div>
    </div>
    <!-- All Hands Meetin -->
    <section id="meeting" class="meetin-container">
      <el-col
        :xs="22"
        :sm="20"
        :md="20"
        :lg="20"
        :xl="22"
        style="margin: auto"
        class="container"
      >
        <h1 class="p-title font-size30 txt-bold fontf8 mb-3 mt-5">
          All Hands Meeting
        </h1>
        <el-col :xs="24" :span="20" style="margin: auto" class="container">
          <img
            :src="handleViteImages('life/meetin_bg.png')"
            width="100%"
            alt=""
            srcset=""
            class="mb-5" /></el-col
      ></el-col>
    </section>
    <div class="in-about-wrap training-box">
      <div class="section-3">
        <el-col
          :xs="22"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
          class="container"
        >
          <h1 class="p-title font-size30 txt-bold fontf8 mb-3 mt-5">
            Basketball
          </h1>

          <div class="fac-con">
            <el-row class="row" :gutter="10">
              <el-col
                :xs="24"
                :span="8"
                class=""
                v-for="(i, index) in footballList"
                :key="index"
              >
                <div class="manufacturing-list bg-pinkbluelfr">
                  <div
                    class="content"
                    style="width: 100%; height: 300px; overflow: hidden"
                  >
                    <img
                      :src="i"
                      alt=""
                      srcset=""
                      width="100%"
                      height="100%"
                      style="object-fit: cover"
                    />
                  </div>
                </div>
              </el-col>
            </el-row></div
        ></el-col>
      </div>
    </div>
    <section id="Seeout1" class="">
      <el-col
        :xs="22"
        :sm="20"
        :md="20"
        :lg="20"
        :xl="22"
        style="margin: auto"
        class="container"
      >
        <el-row :gutter="20" class="mb-4">
          <el-col :span="12" :xs="24">
            <div class="manufacturing-list bg-pinkbluelfr video-list">
              <div class="content">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/HQsTy3PhfNI?si=9tfNQvuwp8NnbYL-"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <p class="video-p font-size20 textColor">
                  Exciting Milestone: OBiO Lingang Facility Launches Operations
                  in 2023!
                </p>
              </div>
            </div></el-col
          >
          <el-col :span="12" :xs="24">
            <div class="manufacturing-list bg-pinkbluelfr video-list">
              <div class="content">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/rmq1Vp3zZFg?si=mikql8NjYHJ56uFj"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>

                <p class="video-p font-size20 textColor">
                  Exciting Milestone: OBiO Lingang Facility Launches Operations
                  in 2023!
                </p>
              </div>
            </div></el-col
          >
        </el-row>
      </el-col>
    </section>
  </div>

  <el-dialog
    v-model="dialogVisible"
    title=""
    width="60%"
    :before-close="handleClose"
  >
    <!-- <span>This is a message</span> -->
    <div class="popLaboraBox-main">
      <div class="font-size50 fontf8 title">
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
    <!-- <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </span>
    </template> -->
  </el-dialog>
</template>

<script lang="ts" setup name="LabSciences">
import { reactive, ref } from "vue";
import Focus from "@/components/Focus.vue";
import Events from "@/components/Events.vue";
import { handleViteImages, goRouter } from "@/utils";

const FocusData = ref({
  title: "Life in OBIO",
  hiddenXsImgUrl: handleViteImages("head_bg.jpg"),
  visibleXsImgUrl: handleViteImages("head_bg.jpg"),
  // hiddenXsImgUrl: handleViteImages("head_bg3.png"),
  // visibleXsImgUrl: handleViteImages("head_bg3.png"),
});
const dialogVisible = ref(false);
function handleClose() {
  Labora.value = {};
  dialogVisible.value = false;
}
const internshipList = reactive([
  handleViteImages("life/carousel_bg1.png"),
  handleViteImages("life/carousel_bg1.png"),
  handleViteImages("life/carousel_bg1.png"),
  handleViteImages("life/carousel_bg1.png"),
]);
const footballList = reactive([
  handleViteImages("life/football1.png"),
  handleViteImages("life/football2.png"),
]);
type ViralItem = {
  id: number;
  imgUrl: string;
  title: string;
  path: string;
};
const ViralList = ref<ViralItem[]>([
  {
    id: 0,
    imgUrl: handleViteImages("cdmo_icon1.png"),
    title: "Focus",
    path: "/process",
  },
  {
    id: 1,
    imgUrl: handleViteImages("cdmo_icon2.png"),
    title: "Acceleration",
    path: "/cgmp",
  },
  {
    id: 2,
    imgUrl: handleViteImages("cdmo_icon3.png"),
    title: "Standardization",
    path: "/quality",
  },
  {
    id: 3,
    imgUrl: handleViteImages("cdmo_icon4.png"),
    title: "Team",
    path: "/logistics",
  },
]);
const croList = ref([
  {
    imgUrl: handleViteImages("croIcon1.png"),
    title: "Vision by 2026:",
    text: `Providing client-centered and high-quality 
service as our commitment, we strive to 
become a world-leading gene and cell 
therapy CXO group. 
`,
  },
  {
    imgUrl: handleViteImages("croIcon2.png"),
    title: "Value:",
    text: `Customer Focus, Efficient Execution, 
Excellence, Innovation, Integrity.
`,
  },
  {
    imgUrl: handleViteImages("croIcon3.png"),
    title: "Original Aspiration：",
    text: `Developing gene therapies for the welfare ofmankind by virtue of its in-house developedall-round technology platform, its R&D and GMPproduction centers (floorage: 15,000 m2), and its77,000 m2 Lingang base (under construction),0Bi0 is dedicated to constantly acceleratinggene therapies researches, drug discovery,.pharmaceutical studies, clinical and commercialdevelopment of gene therapies`,
  },
]);
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
    ],
  },
  {
    title: "Life at OBiO",
    imgList: [
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
    title: "Children's Day",
    imgList: [
      handleViteImages("life/17.png"),
      handleViteImages("life/18.png"),
      handleViteImages("life/19.png"),
    ],
  },
  {
    title: "Father's Day",
    imgList: [
      handleViteImages("life/20.png"),
      handleViteImages("life/21.png"),
      handleViteImages("life/22.png"),
    ],
  },
  {
    title: "Holiday Party - Christmas",
    imgList: [
      handleViteImages("life/23.png"),
      handleViteImages("life/24.png"),
      handleViteImages("life/25.png"),
    ],
  },
  {
    title: "Charity Events - Walking 50km",
    imgList: [
      handleViteImages("life/26.png"),
      handleViteImages("life/27.png"),
      handleViteImages("life/28.png"),
      handleViteImages("life/29.png"),
    ],
  },
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
