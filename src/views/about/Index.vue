<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-19 10:19:36
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="about">
      <router-view></router-view>
      <div class="pub-events-wrap">
        <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto">
          <div class="pub-title pub-title-p ub ub-ver ub-pe">
            <i class="line"></i>
            <span class="fontf8 font-size50">Events</span>
            <div class="p font-size18"></div>
          </div>
          <el-row class="list row" :gutter="20">
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
              <a href="/cn/home/news/id/228" class="block tans font-size16">
                <div class="time">10th-12th Oct. ,2023</div>
                <div class="title ut-s2 font-size24 fontf3">
                  Cell&amp;Gene meeting on the Mesa
                </div>
                <div class="add">Carlsbad, CA, United States</div>
              </a>
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
              <a href="/cn/home/news/id/223" class="block tans font-size16">
                <div class="time">18th-21st Sep. ,2023</div>
                <div class="title ut-s2 font-size24 fontf3">
                  BioProcess International Conference &amp; Exhibition
                </div>
                <div class="add">Boston, MA</div>
              </a>
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
              <a href="/cn/home/news/id/218" class="block tans font-size16">
                <div class="time">16th-20th May ,2023</div>
                <div class="title ut-s2 font-size24 fontf3">
                  ASGCT 26th Annual Meeting
                </div>
                <div class="add">Los Angeles, CA</div>
              </a>
            </el-col>
          </el-row>
        </el-col>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup name="About">
  import { historyList } from "@/data/AboutPage";
  import { Swiper, SwiperSlide } from "swiper/vue";
  // 引入swiper样式（按需导入）
  import "swiper/css";
  import "swiper/css/pagination"; // 轮播图底面的小圆点
  import "swiper/css/navigation"; // 轮播图两边的左右箭头
  import "swiper/css/scrollbar"; // 轮播图的滚动条
  // 引入swiper核心和所需模块
  import {
    Autoplay,
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
  } from "swiper/modules";
  import { onMounted, onUnmounted, ref } from "vue";
  const navigation = ref({
    nextEl: "#historyNext",
    prevEl: "#historyPrev",
  });
  onMounted(() => {});
  </script>
  
  <style>
  /* @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  } */
  </style>
  