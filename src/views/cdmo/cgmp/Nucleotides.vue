<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-19 17:29:29
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
            >Development and Manufacturing for your cGMP plasmid
          </span>
          <div class="p font-size18"></div>
        </div>
        <div
          class="font-size18 pub-pal20 pub-mart30 color666"
          style="line-height: 1.8"
        >
          With extensive expertise in the development of customized plasmid DNA
          manufacturing solutions, we provide plasmid services from process
          development to large-scale cGMP manufacturing. We also provide process
          development and cGMP manufacturing services for nucleotide products
          including mini-circle plasmid and mRNA.
        </div>
        <br />
        <div class="content" style="text-align:center;">
          <img :src="handleViteImages('uploads/image/20240601/4-1-Plasmid-flyer.png')" alt="Plasmid" style="max-width:768px;"/>
        </div>
        <br />
        <div class="content" style="text-align:center;">
          <img :src="handleViteImages('uploads/image/20240601/4-2-Plasmid-flyer-2.png')" alt="Plasmid" style="max-width:1024px;"/>
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
    title: "Plasmid Construction",
    txt: `Plasmid construction from the target gene sequence or relevant plasmid`,
  },
  {
    title: "Strain Bank Construction",
    txt: `Construction of primary, master, and working strain banks Development of process and analytical procedures`,
  },
  {
    title: "Process and Analytical Method Development",
    txt: `Upstream process development, downstream process development, and analytical method development`,
  },
  {
    title: "GMP Run - Upstream Process",
    txt: `Fermentation at 50 L to 100 L in bioreactor`,
  },
  {
    title: "GMP Run - Downstream Process",
    txt: `Automated and fully closed purification process`,
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
    txt: `Package including plasmid product, seed bank, Certificate of Analysis, batch production record, batch inspection record, and relevant Chemistry Manufacturing and Control (CMC) dossier`,
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
