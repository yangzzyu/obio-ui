<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-04-17 09:18:27
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="in-about-wrap about-box">
    <div class="section-1" id="">
      <el-col 
        :xs="22" 
        :sm="20" 
        :md="20" 
        :lg="20" 
        :xl="22" 
        style="margin: auto" 
        class="container"
      >
        <h1 class="p-title font-size30 txt-bold fontf6 mb-2 mt-5">
          Who We Are
        </h1>
        <div class="text font-size18">
          <p class="textColor mb-2">
            Established in 2013, 
            <text class="fontf8">
              OBiO Technology
            </text>
            is a pioneering Contract Research Organization (CRO) and Contract Development and Manufacturing Organization (CDMO) in gene and cell therapy, offering comprehensive solutions.
            Guided by our mission 
            <text class="fontf8">
              Enable Gene Therapy for Better Lives,
            </text>
            we are dedicated to delivering top-tier services globally. From bench to clinic, we are committed to advancing your product and benefiting populations worldwide.
          </p>
          <p class="textColor mb-2">
            With years of dedicated effort, OBiO has developed  flexible cGMP manufacturing platform, comprehensive quality system, and efficient project management. Our 
            state-of-the-art 77,000 m² (830,000 ft²) facility 
            for Global Supply ensures high-quality CDMO services across preclinical, IND, clinical, and commercial stages to meet global demand.
          </p>
          <p class="textColor mb-2">
            We specialize in 
            vectorology studies, functional genomics, and process and analytics development,  IND-enabling CMC, ensuring Investigational New Drug (IND) readiness and supporting all clinical and commercial manufacturing phases.
          </p>
          <p class="textColor">
            Our unwavering dedication ensures high-quality 
            <text class="fontf8">
              CDMO services 
            </text>
            for consumers worldwide across preclinical, IND, clinical, and commercial stages, including  plasmids, mRNA, AAV, LVV, Ad viral vectors, cell therapy (CAR-T, NK, Treg, iPSCs), exosomes, and cutting-edge technologies like inducible viral vector packaging, ultralow endotoxin processes, and AAVneO for tissue-specific AAV variants.
          </p>
        </div>
      </el-col>
    </div>
    <div class="section-2" id="history-box">
      <el-col :xs="14" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto" class="container">
        <div class="pub-title style2 ub ub-ver ub-pe">
          <i class="line"></i><span class="fontf8 font-size36">History</span>
        </div>
        <div class="about-history-swp">
          <!-- <div
            class="historyNext"
            id="historyNext"
            tabindex="0"
            role="button"
            aria-label="Next slide"
            aria-disabled="false"
          ></div>
          <div
            class="historyPrev swiper-button-disabled"
            id="historyPrev"
            tabindex="0"
            role="button"
            aria-label="Previous slide"
            aria-disabled="true"
          ></div> -->
          <Swiper ref="swiperNew" :modules="[Autoplay, Navigation, Scrollbar]" :loop="true" :speed="3000"
            :initialSlide="100" slides-per-view="auto" :simulateTouch="false" :watchSlidesVisibility="true"
            :navigation="navigation" slideVisibleClass="my-slide-visible" class="swiper-container" :autoplay="{
        delay: 0,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      }" @mouseenter="enter" @mouseleave="leave" @swiper="onSwiper">
            <swiper-slide v-for="(item, index) in historyList" :key="index" :class="index % 2 === 0 ? 'even' : 'odd'">
              <div class="boxs">
                <div class="cons">
                  <div class="year font-size24">{{ item.year }} <i></i></div>
                  <div class="txt font-size18">
                    <ul>
                      <li v-for="(i, k) in item.txt" :key="k">
                        <p v-html="i"></p>
                        <!-- {{ i }} -->
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </Swiper>
        </div>
      </el-col>
    </div>
    <section class="in-about-wrap about-box mt-5" id="facilities-box">
      <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto" class="container section-3">
        <h1 class="p-title font-size30 txt-bold fontf6 mb-3 mt-0">
          Facilities
        </h1>
        <div class="fac-con">
          <el-row class="row" :gutter="10">
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" class="">
              <div class="manufacturing-list bg-pinkbluelfr">
                <div class="content">
                  <img :src="handleViteImages('facilities1.jpg')" alt="OBiO Intelli-M" />
                </div>
              </div>
              <div class="font-size18 fontf6 iti">Lin-Gang Free-Trade Zone</div>
              <div class="font-size24 fontf6 iti">OBiO Intelli-M</div>
              <p class="font-size18 textColor">
                Process Development Characterization. Clinical and Commercial
                Manufacturing. Facility for Global Supply.
                <text class="title-color txt-bold">77,000 m²</text>  (828,821 ft²).
              </p>
              <router-link to="/about/facilities/intellim" class="mt-2 read-more font-size18 fontf7">Read More</router-link>
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
              <div class="manufacturing-list bg-pinkbluelfr">
                <div class="content">
                  <img :src="handleViteImages('facilities2.jpg')" alt="SPIRO Site" />
                </div>
              </div>
              <div class="font-size18 fontf6 iti">
                International Medical Park
              </div>
              <div class="font-size24 fontf6 iti">SPIRO Site</div>

              <p class="font-size18 textColor">
                Integrated Laboratory Services Process and Analytical Method
                Development Research and Development Center.
              </p>
              <router-link to="/about/facilities/spiro" class="mt-2 read-more font-size18 fontf7" LARGE>Read
                More</router-link>
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
              <div class="manufacturing-list bg-pinkbluelfr">
                <div class="content">
                  <img :src="handleViteImages('facilities3.jpg')" alt="PINE Site" />
                </div>
              </div>
              <div class="font-size18 fontf6 iti">
                International Medical Park
              </div>
              <div class="font-size24 fontf6 iti">PINE Site</div>
              <p class="font-size18 textColor">
                Process and Analytical Method Development. Pre-clinical and
                Clinical Manufacturing. Three-building campus.<text class="title-color txt-bold">10,000 m²</text> (107,639 ft²).
              </p>
              <router-link to="/about/facilities/pine" class="mt-2 read-more font-size18 fontf7">Read More</router-link>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </section>
    <section class="in-about-wrap about-box mt-0">
      <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto" class="container section-3">
        <!-- <h1 class="p-title font-size50 txt-bold fontf8 mb-3 mt-5">
          Factory Images
        </h1> -->

        <h1 class="p-title font-size30 txt-bold fontf6 mb-3 mt-5">
          Intelligent Medical Industrialization Base
        </h1>
        <div class="fac-con">
          <el-row class="row" :gutter="10">
            <el-col :xs="12" :span="6" class="">
              <div class="manufacturing-list">
                <div class="content">
                  <div class="factory-text">
                    <h1 class="font-size30 txt-bold fontf8">LARGE</h1>
                    <ul class="font-size16 txt-bold is-details details-ul" style="color: #fff">
                      <li>The only 77,000 m² (828,821 ft²) scale GMP-compliant facility in the world</li>
                      <li>Gene cell therapy commercial production service base</li>
                    </ul>
                  </div>
                  <img :src="handleViteImages('facility1.png')" alt="SPIRO Site" />
                  <div class="overlay"></div>
                </div>
              </div>
            </el-col>
            <el-col :xs="12" :span="6">
              <div class="manufacturing-list">
                <div class="content">
                  <div class="factory-text">
                    <h1 class="font-size30 txt-bold fontf8">COMPREHENSIVE</h1>
                    <ul class="font-size16 txt-bold is-details details-ul" style="color: #fff">
                      <li>30+ gene cell therapy production lines</li>
                      <li>Large-scale multi-option prokaryotic production capacity</li>
                      <li>20 cell therapy product manufacturing lines</li>
                      <li>50-2000L comprehensive and flexible viral vector manufacturing processes</li>
                      <li>Filling and lyophilizing platform for manufacturing multiple dosage forms</li>
                      <li>From DNA to IND to NDA</li>
                    </ul>
                  </div>
                  <img :src="handleViteImages('facility2.png')" alt="PINE Site" />
                </div>
              </div>
            </el-col>
            <el-col :xs="12" :span="6">
              <div class="manufacturing-list">
                <div class="content">
                  <div class="factory-text">
                    <h1 class="font-size30 txt-bold fontf8">INNOVATIVE</h1>
                    <ul class="font-size16 txt-bold is-details details-ul" style="color: #fff">
                      <li>Single-use process vector production line</li>
                      <li>Single-use process prokaryocyteculture production line</li>
                      <li>Filling and lyophilizing-integrated innovative filling system</li>
                      <li>Positive sample cell therapy product manufacturing line</li>
                    </ul>
                    <!-- <p class="font-size18 txt-bold is-details" style="color: #fff">
                      Single-use process vector production line Single-use
                      process prokaryocyte culture production line
                      Filling+lyophilizing integrated innovative filling system
                      Positive sample cell therapy product manufacturing line
                    </p> -->
                  </div>
                  <img :src="handleViteImages('facility3.png')" alt="OBiO Intelli-M" />
                </div>
              </div>
            </el-col>
            <el-col :xs="12" :span="6">
              <div class="manufacturing-list">
                <div class="content">
                  <div class="factory-text">
                    <h1 class="font-size30 txt-bold fontf8">INTELLIGENT</h1>
                    <ul class="font-size16 txt-bold is-details details-ul" style="color: #fff">
                      <li>Digitization and intelligentification-based mechanical arm material charging system</li>
                      <li>Automatic dispensing system</li>
                      <li>Automatic sample storage system in liquid nitrogen</li>
                      <li>Chip-based automatic management of cleanroom suits</li>
                      <li>Remote electronic signature system</li>
                      <li>Full-cycle visualization-based project management</li>
                      <li>Full-process business service requirements</li>
                    </ul>
                  </div>
                  <img :src="handleViteImages('facility4.png')" alt="OBiO Intelli-M" />
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </section>
    <section class="our-box mb-5" id="commitment-box">
      <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto" class="container">
        <h1 class="p-title font-size30 txt-bold fontf6 mb-0 mt-1">
          Our Commitment: F-A-S-T
        </h1>
        <div style="text-align:center;">
          <br />
          <img :src="handleViteImages('uploads/image/20240601/FAST-Commitment.png')" alt="FAST Commitment" style="width:100%; max-width:1024px"/>
        </div>
      </el-col>
    </section>
  </div>
</template>

<script lang="ts" setup name="About">
import { useRouter } from "vue-router";
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
import { onMounted, onUnmounted, ref, reactive, toRaw } from "vue";
import { handleViteImages } from "@/utils";

const router = useRouter();
const navigation = ref({
  nextEl: "#historyNext",
  prevEl: "#historyPrev",
});

let swiperNew: any;

//鼠标移入
const enter = () => {
  swiperNew.autoplay.stop();
};
//鼠标移出
const leave = () => {
  swiperNew.autoplay.start();
};
const onSwiper = (swiper: any) => {
  // console.log(swiper);
  swiperNew = toRaw(swiper); //拿到swiper对象再转换为非响应式
};
const ourList = reactive([
  {
    title: "Focus:",
    text: `Dedication to Contract Development and Manufacturi 
Strict Internal Data Management
Comprehensive Patent System
Professional Intellectual Property Protection`,
  },
  {
    title: "Acceleration:",
    text: `Commercial Readiness from Technical Expertise
Advanced Process Development Technologies
Large-Scale Manufacturing Capabilities
Fully-Closed & Automated Downstream Purification`,
  },
  {
    title: "Standardization:",
    text: `Fully Regulatory Compliance
GMP-Compliant Facilities and Equipment
Robust Quality Management System
Comprehensive Quality Control Platform`,
  },
  {
    title: "Team:",
    text: `Trustful Expertise
10+ years of Experience in Gene and Cell Therapy
Extensive Experience in IND-Enabling Support
Responses at First Instance`,
  },
]);
onMounted(() => { });
</script>

<style>
.txt-color {
  color: #5be2eb;
}
</style>
<style lang="scss" scoped>
.about-box {
  // margin: 0 !important;
  // .manufacturing-list {
  //   cursor: pointer;
  // }
}

.factory-text {
  position: absolute;
  padding: 10px;
  height: 100%;
  margin: 10px;

  h1 {
    background-color: #fff;
    //background: linear-gradient(0deg, #26fddc 0%, #3d8bd3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .text-sapn {
    font-family: Source Han Sans CN;
    font-weight: 400;
    font-size: 16px;
    color: #3c8fd3;
  }
}

.life-ul {
  li {
    padding: 10px 0;
    position: relative;
  }

  i {
    display: inline-block;
    width: 10px;
    /* 圆点的直径 */
    height: 10px;
    /* 圆点的直径 */
    background-color: #1f757b;
    /* 圆点的颜色 */
    border-radius: 50%;
    /* 圆形的关键点 */
    margin-right: 10px;
    /* 与列表文本之间的距离 */
  }
}

.btn-ul {
  display: flex;
  margin: 20px 0;

  li {
    flex: 1;

    a {
      margin: auto;
      display: flex;
      justify-content: center;
      width: 160px;
    }
  }
}
.details-ul {
  padding:0 10px 0 22px;
}
.details-ul li{
  list-style-type: disc !important;
}
</style>
<style>
.swiper-wrapper {
  /* 这里是改变其动画效果为匀速形式，不加此样式的话会造成滚动卡顿，看起来效果不平滑 */
  /* 样式做了各种浏览器的兼容 */
  transition-timing-function: linear !important;
  -webkit-transition-timing-function: linear !important;
  -moz-transition-timing-function: linear !important;
  -ms-transition-timing-function: linear !important;
  -o-transition-timing-function: linear !important;
  transition-timing-function: linear !important;
}
</style>
