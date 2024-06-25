<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-03-21 17:09:09
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
          With process development and cGMP manufacturing services for viral
          vectors including adeno-associated virus and lentivirus, we can
          flexibly adjust to adherent or suspension-based platform to meet your
          manufacturing demands.
        </div>
        <br />
        <div class="fac-con">
            <el-row class="row" :gutter="10">
              <el-col :xs="24" :span="5" class="">
                <div class="content" style="width: 100%; overflow: hidden; border-bottom: 3px solid #039d8f;">
                  <el-image
                    style="width: 100%; margin: 10px;"
                    :src="handleViteImages('uploads/image/20240601/1-1-AAV-Flyers.png')"
                    alt="viral vectors"
                    :preview-src-list="viralVectorList1"
                    fit="cover"
                    :z-index="99999"
                    :preview-teleported="true"
                    :hide-on-click-modal="true"
                  />
                </div>
                <div class="content" style="width: 100%; overflow: hidden; border-bottom: 3px solid #039d8f;">
                  <el-image
                    style="width: 100%; margin: 10px;"
                    :src="handleViteImages('uploads/image/20240601/1-2-AAV.png')"
                    alt="viral vectors"
                    :preview-src-list="viralVectorList2"
                    fit="cover"
                    :z-index="99999"
                    :preview-teleported="true"
                    :hide-on-click-modal="true"
                  />
                </div>
                <div class="content" style="width: 100%; overflow: hidden">
                  <el-image
                    style="width: 100%; margin: 18px;"
                    :src="handleViteImages('uploads/image/20240601/1-6-Exsome.png')"
                    alt="viral vectors"
                    :preview-src-list="viralVectorList3"
                    fit="cover"
                    :z-index="99999"
                    :preview-teleported="true"
                    :hide-on-click-modal="true"
                  />
                </div>
              </el-col>
              <el-col :xs="24" :span="12" class="">
                <div class="content" style="width: 100%; overflow: hidden; border-left: 3px solid #039d8f; border-right: 3px solid #039d8f;">
                  <el-image
                    style="width: 100%; height: 100%"
                    :src="handleViteImages('uploads/image/20240601/viral_vectors.png')"
                    alt="viral vectors"
                    :preview-src-list="viralVectorList"
                    fit="cover"
                    :z-index="99999"
                    :preview-teleported="true"
                    :hide-on-click-modal="true"
                  />
                </div>
              </el-col>
              <el-col :xs="24" :span="6" class="">
                <div class="content" style="width: 100%; overflow: hidden; border-bottom: 3px solid #039d8f;">
                  <el-image
                    style="width: 100%; margin: 10px;"
                    :src="handleViteImages('uploads/image/20240601/1-3-LV-flyer-1.png')"
                    alt="viral vectors"
                    :preview-src-list="viralVectorList3"
                    fit="cover"
                    :z-index="99999"
                    :preview-teleported="true"
                    :hide-on-click-modal="true"
                  />
                </div>
                <div class="content" style="width: 100%; overflow: hidden; border-bottom: 3px solid #039d8f;">
                  <el-image
                    style="width: 100%; margin: 18px;"
                    :src="handleViteImages('uploads/image/20240601/1-4-LV-flyer-2.png')"
                    alt="viral vectors"
                    :preview-src-list="viralVectorList1"
                    fit="cover"
                    :z-index="99999"
                    :preview-teleported="true"
                    :hide-on-click-modal="true"
                  />
                </div>
                <div class="content" style="width: 100%; overflow: hidden">
                  <el-image
                    style="width: 100%; margin: 20px;"
                    :src="handleViteImages('uploads/image/20240601/1-5-iPSC flyer .png')"
                    alt="viral vectors"
                    :preview-src-list="viralVectorList2"
                    fit="cover"
                    :z-index="99999"
                    :preview-teleported="true"
                    :hide-on-click-modal="true"
                  />
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
import { reactive, ref } from "vue";
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

const viralVectorList = reactive([
  handleViteImages("uploads/image/20240601/viral_vectors.png"),
]);
const viralVectorList1 = reactive([
  handleViteImages("uploads/image/20240601/1-1-AAV-Flyers.png"),
]);
const viralVectorList2 = reactive([
  handleViteImages("uploads/image/20240601/1-2-AAV.png"),
]);
const viralVectorList3 = reactive([
  handleViteImages("uploads/image/20240601/1-3-LV-flyer-1.png"),
]);

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
const SwiperList = ref([
  {
    title: "Bank Transfer",
    txt: `Cell bank transfer, gap analysis, and technology
                        transfer report`,
  },
  {
    title: "Process Transfer and Scale-up",
    txt: `Project-related process transfer; or further process
                        scaling-up`,
  },
  {
    title: "Process Validation and Optimization",
    txt: `Project-related process validation and optimization your
                        process based on critical process parameters and
                        critical quality attributes`,
  },
  {
    title: "GMP Run",
    txt: `Large-scale cGMP manufacturing based on qualified
                        process protocol`,
  },
  {
    title: "Aseptic Fill and Finish",
    txt: `Aseptic isolator under automatic class-A environment`,
  },
  {
    title: "Quality Control and Release",
    txt: `Whole process quality control and regulatory compliance,
                        releasing and delivery of qualified products`,
  },
  {
    title: "Deliverables",
    txt: `Package including viral vector product, Certificate of
                        Analysis, batch production record, batch inspection
                        record, etc.`,
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
