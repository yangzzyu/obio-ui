<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-03-21 17:10:03
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="Viral-Vector-wrap">
    <div class="section-1" style="padding-top: 0">
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
          <span class="fontf8 font-size50"
            >Development and Manufacturing at Pre-IND stage</span
          >
          <div class="p font-size18"></div>
        </div>
        <div
          class="font-size18 pub-pal20 pub-mart30 color666"
          style="line-height: 1.8"
        >
          We provide process development and cGMP manufacturing services for
          various oncolytic virus products including oncolytic adenovirus,
          herpes simplex virus, vaccinia virus, and vesicular stomatitis virus
          and new castle disease virus. Our flexible cGMP manufacturing platform
          can meet your manufacturing demands of different scales.
        </div>
        <br />
        <div class="content" style="text-align:center;">
          <img :src="handleViteImages('uploads/image/20240601/2-Oncolytic-Virus.png')" alt="Oncolytic Virus" style="max-width:1024px;"/>
        </div>
        <div class="list">
          <div class="bg"></div>
          <el-row class="row">
            <el-col :span="12" class="item"></el-col>
            <el-col
              v-for="(i, k) in stageList"
              :key="k"
              class="item"
              :span="12"
              :xs="22"
            >
              <div class="box">
                <div class="num">
                  <span class="tx fontf7 font-size50">{{ k + 1 }}</span
                  ><i class="line"></i>
                </div>
                <div class="txt">
                  <div class="title font-size30 fontf7">
                    {{ i.title }}
                  </div>
                  <div class="p font-size18">
                    {{ i.txt }}
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </div>
    <div class="section-2">
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
          <span class="fontf8 font-size50"
            >Development and Manufacturing at Post-IND stage</span
          >
          <div class="p font-size18"></div>
        </div>
        <div class="swiper-con-main">
          <div
            class="ViralVectorPrev swiper-button-disabled"
            id="ViralVectorPrev"
            tabindex="0"
            role="button"
            aria-label="Previous slide"
            aria-disabled="true"
          ></div>
          <div
            class="ViralVectorNext"
            id="ViralVectorNext"
            tabindex="0"
            role="button"
            aria-label="Next slide"
            aria-disabled="false"
          ></div>

          <div class="swiper-con">
            <div
              class="index indexm font-size50 fontf7"
              v-if="isShow"
              id="ViralVectorLen"
            >
              {{ SwiperList.length }}
            </div>
            <Swiper
              :modules="[Autoplay, Navigation, Scrollbar]"
              :freeMode="true"
              :initialSlide="0"
              :slidesPerView="4"
              :watchSlidesVisibility="true"
              :navigation="navigation"
              slideVisibleClass="my-slide-visible"
              :breakpoints="breakpoints"
              @slide-change="onSlideChange"
              :class="!isShow ? 'hidebg' : ''"
            >
              <swiper-slide
                v-for="(item, index) in SwiperList"
                :key="index"
                class="my-slide-visible"
              >
                <!-- :class="index % 2 === 0 ? 'even' : 'odd'" -->
                <div class="index font-size50 fontf7">{{ index + 1 }}</div>
                <div class="boxs">
                  <div class="content">
                    <div class="title font-size30 fontf7 font-color-ts">
                      {{ item.title }}
                    </div>
                    <div class="p font-size18">
                      {{ item.txt }}
                    </div>
                  </div>
                </div></swiper-slide
              >
            </Swiper>
          </div>
        </div>
      </el-col>
    </div>
    <ObioFooter :list="vectorFooterList" />
  </div>
</template>

<script lang="ts" setup name="Cdmo">
import { ref } from "vue";
import { useTransition } from "@vueuse/core";
import { ArrowRight } from "@element-plus/icons-vue";
import ObioFooter from "@/components/ObioFooter.vue";
import { handleViteImages } from "@/utils";

import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
// 引入swiper样式（按需导入）
import "swiper/css";
import "swiper/css/pagination"; // 轮播图底面的小圆点
import "swiper/css/navigation"; // 轮播图两边的左右箭头
import "swiper/css/scrollbar"; // 轮播图的滚动条
const navigation = ref({
  nextEl: "#ViralVectorNext",
  prevEl: "#ViralVectorPrev",
  hideOnClick: true,
});
const breakpoints = ref({
  320: {
    //当屏幕宽度大于等于320
    slidesPerView: 2,
  },
  768: {
    //当屏幕宽度大于等于768
    slidesPerView: 2,
  },
  1280: {
    //当屏幕宽度大于等于1280
    slidesPerView: 4,
  },
});
const isShow = ref(false);
function onSlideChange(e) {
  if (e.isEnd) {
    isShow.value = false;
  } else {
    isShow.value = true;
  }
}
const stageList = ref([
  {
    title: "Virus Seed Stock Construction",
    txt: `Virus seed stock construction, identification, and stability studies for the oncolytic virus provided`,
  },
  {
    title: "Cell Bank Construction",
    txt: `Construction of primary, master, and working cell banks for adherent or suspension cell culture`,
  },
  {
    title: "Process and Analytical Method Development",
    txt: `Upstream process development, downstream process development, analytical method development, and formulation development`,
  },
  {
    title: "GMP Run - Upstream Process",
    txt: `Adherent or suspension cell culture with the developed method for specific type of oncolytic virus`,
  },
  {
    title: "GMP Run - Downstream Process",
    txt: `Automated and fully enclosed purification process, patented sterilization technology`,
  },
  {
    title: "Aseptic Fill and Finish",
    txt: `Aseptic isolator under automatic Class-A environment`,
  },
  {
    title: "Quality Control and Release",
    txt: `Quality control system in compliance with regulatory requirements`,
  },
  {
    title: "Deliverables",
    txt: `Package including oncolytic virus product, seed bank, Certificate of Analysis, batch production record, batch inspection record, and relevant Chemistry Manufacturing and Control (CMC) dossier`,
  },
]);
const SwiperList = ref([
  {
    title: "Virus seed stock and cell banks transfer",
    txt: `Virus seed stock transfer, cell bank transfer, gap analysis, and technology transfer report`,
  },
  {
    title: "Process Transfer and Scale-up",
    txt: `Project-related process transfer; or further process scaling-up`,
  },
  {
    title: "Process Validation and Optimization",
    txt: `Project-related process validation and optimization your process based on critical process parameters and critical quality attributes`,
  },
  {
    title: "GMP Run",
    txt: `Large-scale cGMP manufacturing based on qualified process protocol`,
  },
  {
    title: "Aseptic Fill and Finish",
    txt: `Aseptic isolator under automatic class-A environment`,
  },
  {
    title: "Quality Control and Release",
    txt: `Whole process quality control and regulatory compliance, releasing and delivery of qualified products`,
  },
  {
    title: "Deliverables",
    txt: `Package including oncolytic virus product, Certificate of Analysis, batch production record, batch inspection record, etc.`,
  },
]);
const vectorFooterList = ref([
  {
    bgUrl: handleViteImages("highlights/1.png"),
    txt: "10+ years of dedication to gene and cell therapy",
  },
  {
    bgUrl: handleViteImages("highlights/2.png"),
    txt: `Track record of 100 gene and cell therapy projects`,
  },
  {
    bgUrl: handleViteImages("highlights/3.png"),
    txt: `Compliant manufacturing for successful initiation of
                  multi-center clinical trials`,
  },
  {
    bgUrl: handleViteImages("highlights/4.png"),
    txt: `Comprehensive quality system with regulatory compliant
                  facilities`,
  },
  {
    bgUrl: handleViteImages("highlights/5.png"),
    txt: `Sufficient capacity and state-of-the-art facilities for global
                  manufacturing needs`,
  },
  {
    bgUrl: handleViteImages("highlights/6.png"),
    txt: `End-to-end professional project management for in-time
                  supports and on-time delivery`,
  },
]);
</script>
