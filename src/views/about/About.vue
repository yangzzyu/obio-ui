<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-03-28 11:04:08
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="in-about-wrap about-box">
    <div class="section-1">
      <el-col
        :xs="22"
        :sm="20"
        :md="20"
        :lg="20"
        :xl="22"
        style="margin: auto"
        class="container"
      >
        <div class="text font-size20">
          <p class="textColor">
            <text class="txt-bold fontf8"
              >OBiO Technology is a pioneering gene and cell therapy CRO and
              CDMO,</text
            >
            established to provide comprehensive solutions. Our expertise spans
            vectorology studies, functional genomics, process and analytical
            development, as well as IND-enabling CMC and clinical and commercial
            manufacturing.
            <text class="txt-bold fontf8"
              >With our mission to "enable gene therapy for better lives," </text
            >we are dedicated to delivering top-tier services globally. From
            bench to clinic, we are committed to advancing your product and
            benefiting populations worldwide. Our unwavering dedication ensures
            high-quality CDMO services for consumers worldwide across
            preclinical, IND, clinical, and commercial stages. Plasmids, mRNA,
            AAV, LVV, Ad viral vector, Cell therapy, manufacturing, CAR-T, NK,
            Treg...Oncolytic virus. Technologies Inducible viral vector
            packaging, Ultralow endotoxin process, AAVneO for AAV variants with
            tissue specific tropism
          </p>
        </div>
      </el-col>
    </div>
    <div class="section-2">
      <el-col
        :xs="14"
        :sm="20"
        :md="20"
        :lg="20"
        :xl="22"
        style="margin: auto"
        class="container"
      >
        <div class="pub-title style2 ub ub-ver ub-pe">
          <i class="line"></i><span class="fontf8 font-size50">History</span>
        </div>
        <div class="about-history-swp">
          <div
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
          ></div>
          <Swiper
            :modules="[Autoplay, Navigation, Scrollbar]"
            :initialSlide="100"
            slides-per-view="auto"
            :simulateTouch="false"
            :watchSlidesVisibility="true"
            :navigation="navigation"
            slideVisibleClass="my-slide-visible"
            class="swiper-container"
          >
            <swiper-slide
              v-for="(item, index) in historyList"
              :key="index"
              :class="index % 2 === 0 ? 'even' : 'odd'"
            >
              <div class="boxs">
                <div class="cons">
                  <div class="year">{{ item.year }} <i></i></div>
                  <div class="txt font-size18">
                    <ul>
                      <li v-for="(i, k) in item.txt" :key="k">
                        <p v-html="i"></p>
                        <!-- {{ i }} -->
                      </li>
                    </ul>
                  </div>
                </div>
              </div></swiper-slide
            >
          </Swiper>
        </div>
      </el-col>
    </div>
    <section class="in-about-wrap about-box">
      <el-col
        :xs="22"
        :sm="20"
        :md="20"
        :lg="20"
        :xl="22"
        style="margin: auto"
        class="container section-3"
      >
        <h1 class="p-title font-size50 txt-bold fontf8 mb-3 mt-5">Facility</h1>
        <div class="fac-con">
          <el-row class="row" :gutter="10">
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" class="">
              <div class="manufacturing-list bg-pinkbluelfr">
                <div class="content">
                  <img
                    :src="handleViteImages('facilities1.jpg')"
                    alt="OBIO Intelli-M"
                  />
                </div>
              </div>
              <div class="font-size24 fontf7 iti">
                Lin-Gang Free-Trade Zone<br />Shanghai, China
              </div>
              <div class="font-size38 fontf7 iti">OBIO Intelli-M</div>
              <p class="font-size18 textColor txt-bold">
                Process Development Characterization Clinical and Commercial
                Manufacturing
                <text class="title-color txt-bold">77,000</text>-square-meter
                Facility for Global Supply
              </p>
              <router-link to="/intelliM" class="read-more font-size18 fontf7"
                >Read More</router-link
              >
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
              <div class="manufacturing-list bg-pinkbluelfr">
                <div class="content">
                  <img
                    :src="handleViteImages('facilities2.jpg')"
                    alt="SPIRO Site"
                  />
                </div>
              </div>
              <div class="font-size24 fontf7 iti">
                International Medical Park<br />Shanghai, China
              </div>
              <div class="font-size38 fontf7 iti">SPIRO Site</div>

              <p class="font-size18 textColor txt-bold">
                Integrated Laboratory Services Processand Analytical Method
                DevelopmentResearch and Development Center
              </p>
              <router-link to="/spiroSite" class="read-more font-size18 fontf7"
                >Read More</router-link
              >
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
              <div class="manufacturing-list bg-pinkbluelfr">
                <div class="content">
                  <img
                    :src="handleViteImages('facilities3.jpg')"
                    alt="PINE Site"
                  />
                </div>
              </div>
              <div class="font-size24 fontf7 iti">
                International Medical Park<br />Shanghai, China
              </div>
              <div class="font-size38 fontf7 iti">PINE Site</div>
              <p class="font-size18 textColor txt-bold">
                Process and Analytical Method Development Pre-clinical and
                Clinical Manufacturing Three-building,<text
                  class="title-color txt-bold"
                  >10,000</text
                >-square-meter campus
              </p>
              <router-link to="/pineSite" class="read-more font-size18 fontf7"
                >Read More</router-link
              >
            </el-col>
          </el-row>
        </div></el-col
      >
    </section>
    <section class="in-about-wrap about-box">
      <el-col
        :xs="22"
        :sm="20"
        :md="20"
        :lg="20"
        :xl="22"
        style="margin: auto"
        class="container section-3"
      >
        <h1 class="p-title font-size50 txt-bold fontf8 mb-3 mt-5">
          Factory Images
        </h1>
        <div class="fac-con">
          <el-row class="row" :gutter="10">
            <el-col :xs="24" :span="6" class="">
              <div class="manufacturing-list">
                <div class="content">
                  <div class="factory-text">
                    <h1 class="font-size30 txt-bold fontf8">
                      LARGE <span class="text-sapn">大</span>
                    </h1>
                    <p
                      class="font-size18 txt-bold fontf7"
                      style="color: #fff; margin-bottom: 20px"
                    >
                      OBiO Technology’s intelligent medical industrialization
                      base
                    </p>
                    <p
                      class="font-size14 txt-bold is-details"
                      style="color: #fff"
                    >
                      The only 77,000m2 scale GMP-compliant facility in the
                      world Gene cell therapy commercial production service base
                      Large-scale; Large production capacity
                    </p>
                  </div>
                  <img
                    :src="handleViteImages('facility1.png')"
                    alt="SPIRO Site"
                  />
                  <div class="overlay"></div>
                </div>
              </div>
            </el-col>
            <el-col :xs="24" :span="6">
              <div class="manufacturing-list">
                <div class="content">
                  <div class="factory-text">
                    <h1 class="font-size30 txt-bold fontf8">
                      COMPREHENSIVE <span class="text-sapn">全</span>
                    </h1>
                    <p
                      class="font-size18 txt-bold fontf7"
                      style="color: #fff; margin-bottom: 20px"
                    >
                      OBiO Technology’s intelligent medical industrialization
                      base
                    </p>
                    <p
                      class="font-size14 txt-bold is-details"
                      style="color: #fff"
                    >
                      More than 30 gene cell therapy production lines
                      Large-scale multi-option prokaryocyte production capacity
                      20 cell therapy product manufacturing lines of varied
                      characteristics 50-2000L comprehensive and flexible viral
                      vector manufacturing process Filling and lyophilizing
                      platform that meets the requirements for manufacturing
                      multiple dosage forms…… Meeting the requirements of
                      clients worldwide From DNA to IND to NDA Full-process
                      business service requirements
                    </p>
                  </div>
                  <img
                    :src="handleViteImages('facility2.png')"
                    alt="PINE Site"
                  />
                </div>
              </div>
            </el-col>
            <el-col :xs="24" :span="6">
              <div class="manufacturing-list">
                <div class="content">
                  <div class="factory-text">
                    <h1 class="font-size30 txt-bold fontf8">
                      INNOVATIVE <span class="text-sapn">新</span>
                    </h1>
                    <p
                      class="font-size18 txt-bold fontf7"
                      style="color: #fff; margin-bottom: 20px"
                    >
                      OBiO Technology’s intelligent medical industrialization
                      base
                    </p>
                    <p
                      class="font-size14 txt-bold is-details"
                      style="color: #fff"
                    >
                      Single-use process vector production line Single-use
                      process prokaryocyte culture production line
                      Filling+lyophilizing integrated innovative filling system
                      Positive sample cell therapy product manufacturing line
                    </p>
                  </div>
                  <img
                    :src="handleViteImages('facility3.png')"
                    alt="OBiO Intelli-M"
                  />
                </div>
              </div>
            </el-col>
            <el-col :xs="24" :span="6">
              <div class="manufacturing-list">
                <div class="content">
                  <div class="factory-text">
                    <h1 class="font-size30 txt-bold fontf8">
                      INTELLIGENT <span class="text-sapn">智</span>
                    </h1>
                    <p
                      class="font-size18 txt-bold fontf7"
                      style="color: #fff; margin-bottom: 20px"
                    >
                      OBiO Technology’s intelligent medical industrialization
                      base
                    </p>
                    <p
                      class="font-size14 txt-bold is-details"
                      style="color: #fff"
                    >
                      Digitization and intelligentification based mechanical arm
                      material charging system Automatic dispensing system
                      Automatic sample storage system in liquid nitrogen
                      Chip-based automatic management of cleanroom suits Remote
                      electronic signature system Full-cycle visualization-based
                      project management
                    </p>
                  </div>
                  <img
                    :src="handleViteImages('facility4.png')"
                    alt="OBiO Intelli-M"
                  />
                </div>
              </div>
            </el-col>
          </el-row></div
      ></el-col>
    </section>
    <section class="our-box">
      <el-col
        :xs="22"
        :sm="20"
        :md="20"
        :lg="20"
        :xl="22"
        style="margin: auto"
        class="container"
      >
        <h1 class="p-title font-size50 txt-bold fontf8 mb-3 mt-5">
          Life at OBiO
        </h1>
        <el-row class="our-box-content" :gutter="40">
          <el-col :span="8" :xs="24" class="left-content">
            <img class="img" :src="handleViteImages('life_bg.png')" alt="" />
          </el-col>
          <el-col :span="16" :xs="24" class="font-size20 news-list">
            <h3
              class="title-color font-size30 fontf7"
              style="margin-bottom: 30px"
            >
              As OBiO Tech swiftly evolves, every OBiOers are immersed in an
              environment fostering "enhanced capabilities, purposeful work, and
              a fulfilling life."
            </h3>
            <ul class="font-size18 textColor life-ul">
              <li><i></i> Enhanced Capabilities</li>
              <li><i></i> Competitive compensation and benefits</li>
              <li>
                <i></i> Opportunities for training, rotation, and continuous
                education
              </li>
              <li><i></i>Empowerment, accountability, and value creation</li>
              <li>
                <i></i>

                Work-Life Balance: A harmonious blend of professional and
                personal pursuits This encapsulates our vibrant company culture,
                where every moment is an opportunity for growth and fulfillment.
              </li>
            </ul>
          </el-col>
        </el-row>
        <ul class="btn-ul">
          <li>
            <router-link to="/team" class="btn-a font-size18 fontf7"
              >join our team</router-link
            >
          </li>
          <li>
            <router-link to="/life" class="btn-a font-size18 fontf7"
              >Read More</router-link
            >
          </li>
        </ul></el-col
      >
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
import { onMounted, onUnmounted, ref, reactive } from "vue";
import { handleViteImages } from "@/utils";

const router = useRouter();
const navigation = ref({
  nextEl: "#historyNext",
  prevEl: "#historyPrev",
});
onMounted(() => {});
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
</script>

<style>
.txt-color {
  color: #5be2eb;
}
</style>
<style lang="scss" scoped>
.about-box {
  margin: 0 !important;
  .manufacturing-list {
    cursor: pointer;
  }
}
.factory-text {
  position: absolute;
  padding: 10px;
  height: 100%;
  h1 {
    background: linear-gradient(0deg, #26fddc 0%, #3d8bd3 100%);
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
    width: 10px; /* 圆点的直径 */
    height: 10px; /* 圆点的直径 */
    background-color: #1f757b; /* 圆点的颜色 */
    border-radius: 50%; /* 圆形的关键点 */
    margin-right: 10px; /* 与列表文本之间的距离 */
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
</style>
