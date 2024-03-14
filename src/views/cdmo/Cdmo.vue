<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-03-08 14:30:00
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="CDMO-Solutions-wrap">
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
        <el-row :gutter="50" class="cdmo-top">
          <el-col :xs="24" :span="8"
            ><div class="animate-imgxx uof img">
              <img
                :src="handleViteImages('@/assets/icons/cdmo_top.png')"
                alt="SPIRO Site"
              />
            </div>
          </el-col>
          <el-col :xs="24" :span="16">
            <p class="font-size20 fontf7 fontFamily cro-p textColor">
              We provide comprehensive CDMO services encompassing process
              development, analytical methods, IND-enabling CMC (Chemistry,
              Manufacturing, and Controls), as well as clinical and commercial
              manufacturing for viral vector, oncolytic virus, and cell therapy
              products. Our expertise extends to offering holistic solutions
              tailored to support the industrialization and commercialization of
              various products at the Pre-IND stage and beyond. Through years of
              dedicated effort, OBiO has built an integrated process development
              system, supported by a flexible cGMP manufacturing platform,
              comprehensive quality system and efficient project management. Our
              experienced team of experts will navigate the industrialization
              process with you side-by-side. With our technical expertise in
              viral vector, oncolytic virus and cell therapy, we will help you
              to accelerate your product life-cycle from pre-clinical to
              commercially ready.
            </p>
          </el-col>
        </el-row>
        <div class="number-main text-center cGMP-zIndex active" id="numgo">
          <el-row class="row color666" :gutter="100">
            <el-col :span="8" :xs="24" class="tx-c">
              <div class="nums-list bg-pinkbluelfr">
                <div class="content">
                  <el-statistic :value="cellSourceValue" class="number-c">
                    <template #suffix>
                      <div class="nums fontf9">
                        <span class="fh">+</span>
                      </div>
                    </template>
                  </el-statistic>
                  <div class="pn fontf7 font-size28">
                    Gene and Cell Therapy Programs
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="8" :xs="24" class="tx-c">
              <div class="nums-list bg-pinkbluelfr">
                <div class="content">
                  <el-statistic :value="processSourceValue" class="number-c">
                    <template #suffix>
                      <div class="nums fontf9">
                        <span class="fh">+</span>
                      </div>
                    </template>
                  </el-statistic>
                  <div class="pn fontf7 font-size28">
                    Process Development Projects
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="8" :xs="24" class="tx-c">
              <div class="nums-list bg-pinkbluelfr">
                <div class="content">
                  <el-statistic class="number-c" :value="analyticalSourceValue">
                    <template #suffix>
                      <div class="nums fontf9">
                        <span class="fh">+</span>
                      </div>
                    </template>
                  </el-statistic>
                  <div class="pn fontf7 font-size28">
                    Analytical Method Development Projects
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </div>
    <div class="in-about-wrap facilities-box">
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
          <h1 class="p-title font-size50 txt-bold fontFamily">Facilities</h1>

          <div class="fac-con">
            <el-row class="row" :gutter="10">
              <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" class="">
                <div class="manufacturing-list bg-pinkbluelfr">
                  <div class="content">
                    <img
                      src="https://www.obio-tech.com/public/uploads/20220330/0b0fe1e2c354c50f919655666ccfd951.jpg"
                      alt="SPIRO Site"
                    />
                  </div>
                </div>
                <!-- <router-link to="/spiroSite" class="block tans">
                    <div class="animate-imgxx uof img">
                      <img
                        src="https://www.obio-tech.com/public/uploads/20220330/0b0fe1e2c354c50f919655666ccfd951.jpg"
                        alt="SPIRO Site"
                      />
                    </div>
                  </router-link> -->
                <div class="font-size24 fontf7 iti fontFamily">
                  Lin-Gang Free-Trade ZoneShanghai, China
                </div>
                <div class="font-size38 fontf7 iti fontFamily">
                  OBlO Intelli-M
                </div>
                <p class="font-size18 fontFamily textColor">
                  Process Development CharacterizationClinical and Commercial
                  Manufacturing77,000-square-meter Facility for Global Supply
                </p>
                <router-link
                  to="/spiroSite"
                  class="read-more font-size18 fontf7 fontFamily"
                  >Read more</router-link
                >
              </el-col>
              <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                <div class="manufacturing-list bg-pinkbluelfr">
                  <div class="content">
                    <img
                      src="https://www.obio-tech.com/public/uploads/20231212/55a4fdd1f7a358da8a3de3e938f99114.jpg"
                      alt="PINE Site"
                    />
                  </div>
                </div>
                <!-- <router-link to="/pineSite" class="block tans">
                    <div class="animate-imgxx uof img">
                      <img
                        src="https://www.obio-tech.com/public/uploads/20231212/55a4fdd1f7a358da8a3de3e938f99114.jpg"
                        alt="PINE Site"
                      />
                    </div>
                  </router-link> -->
                <div class="font-size24 fontf7 iti fontFamily">
                  International Medical ParkShanghai, China
                </div>
                <div class="font-size38 fontf7 iti fontFamily">SPIRO Site</div>

                <p class="font-size18 fontFamily textColor">
                  Integrated Laboratory Services Processand Analytical Method
                  DevelopmentResearch and Development Center
                </p>
                <router-link
                  to="/pineSite"
                  class="read-more font-size18 fontf7 fontFamily"
                  >Read more</router-link
                >
              </el-col>
              <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                <div class="manufacturing-list bg-pinkbluelfr">
                  <div class="content">
                    <img
                      src="https://www.obio-tech.com/public/uploads/20231212/8d7b5d1b0b734f04527dde989e2483c3.jpg"
                      alt="OBiO Intelli-M"
                    />
                  </div>
                </div>
                <!-- <router-link to="/intelliM" class="block tans">
                    <div class="animate-imgxx uof img">
                      <img
                        src="https://www.obio-tech.com/public/uploads/20231212/8d7b5d1b0b734f04527dde989e2483c3.jpg"
                        alt="OBiO Intelli-M"
                      />
                    </div>
                  </router-link> -->
                <div class="font-size24 fontf7 iti fontFamily">
                  International Medical ParkShanghai, China
                </div>
                <div class="font-size38 fontf7 iti fontFamily">PINE Site</div>
                <p class="font-size18 fontFamily textColor">
                  Process and Analytical MethodDevelopment Pre-clinical and
                  ClinicalManufacturing Three-building,10,000-square-meter
                  campus
                </p>
                <router-link
                  to="/intelliM"
                  class="read-more font-size18 fontf7 fontFamily"
                  >Read more</router-link
                >
              </el-col>
            </el-row>
          </div></el-col
        >
      </div>
    </div>
    <section id="cro" class="cro-list">
      <el-col
        :xs="22"
        :sm="20"
        :md="20"
        :lg="20"
        :xl="22"
        style="margin: auto"
        class="container"
      >
        <h1 class="p-title font-size50 txt-bold fontFamily">CDMO Service</h1>
      </el-col>
      <div
        class="cro-list-item row"
        v-for="(item, index) in croList"
        :key="index"
      >
        <el-col
          :xs="22"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
          class="container"
        >
          <el-row :gutter="100">
            <el-col :xs="24" :span="10"
              ><div class="animate-imgxx uof img">
                <img :src="item.imgUrl" alt="SPIRO Site" />
              </div>
            </el-col>
            <el-col :xs="24" :span="14">
              <h1 class="font-size50 fontf7 iti fontFamily item-tit">
                {{ item.title }}
              </h1>
              <ul>
                <li
                  style="padding: 5px 0"
                  v-for="(i, idx) in item.textArr"
                  :key="idx"
                  class="fontFamily font-size24 textColor"
                >
                  • {{ i }}
                </li>
              </ul>
              <!-- <p class="font-size30 fontf7 fontFamily cro-p textColor">

                {{ item.text }}
              </p> -->
              <router-link
                to="/spiroSite"
                class="font-size18 fontf7 fontFamily btn-a"
                >Read more</router-link
              ></el-col
            >
          </el-row>
        </el-col>
      </div>
    </section>
    <section>
      <div class="in-about-wrap innovation-box">
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
            <h1 class="p-title font-size50 txt-bold fontFamily">Innovation</h1>

            <div class="fac-con">
              <el-row class="row" :gutter="10">
                <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" class="">
                  <div class="manufacturing-list">
                    <div class="content">
                      <img
                        :src="
                          handleViteImages('@/assets/icons/innovation1.png')
                        "
                        alt="SPIRO Site"
                      />
                    </div>
                  </div>
                  <h1 class="font-size38 fontf7 iti fontFamily">
                    AAVneO™ System
                  </h1>
                  <p class="font-size18 fontFamily txt">
                    LNext-Generation Capsid Screening Platform
                  </p>
                  <router-link
                    to="/spiroSite"
                    class="read-more font-size18 fontf7 fontFamily"
                    >Read more</router-link
                  >
                </el-col>
                <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                  <div class="manufacturing-list">
                    <div class="content">
                      <img
                        :src="
                          handleViteImages('@/assets/icons/innovation2.png')
                        "
                        alt="PINE Site"
                      />
                    </div>
                  </div>
                  <!-- <div class="font-size24 fontf7 iti fontFamily">
                    International Medical ParkShanghai, China
                  </div> -->
                  <h1 class="font-size38 fontf7 iti fontFamily">
                    OVersatileTM Platform
                  </h1>
                  <p class="font-size18 fontFamily textColor txt">
                    Versatility for Various Needs
                  </p>
                  <router-link
                    to="/pineSite"
                    class="read-more font-size18 fontf7 fontFamily"
                    >Read more</router-link
                  >
                </el-col>
                <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                  <div class="manufacturing-list">
                    <div class="content">
                      <img
                        :src="
                          handleViteImages('@/assets/icons/innovation3.png')
                        "
                        alt="OBiO Intelli-M"
                      />
                    </div>
                  </div>
                  <h1 class="font-size38 fontf7 iti fontFamily">
                    Proprietary Cell Line Development
                  </h1>
                  <p class="font-size18 fontFamily textColor txt">
                    High-Yielding Cell Line for
                  </p>
                  <router-link
                    to="/intelliM"
                    class="read-more font-size18 fontf7 fontFamily"
                    >Read more</router-link
                  >
                </el-col>
              </el-row>
            </div></el-col
          >
        </div>
      </div>
    </section>
    <!-- <div class="Insights-wrap">
      <div class="section-3">
        <el-col
          :xs="22"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
        >
          <div class="pub-title pub-title-p ub ub-ver ub-pe">
            <i class="line"></i>
            <span class="fontf8 font-size50">Knowledge Center</span>
            <div class="p font-size18"></div>
          </div>

          <div class="Knowledge-groups">
            <div class="groups" id="1">
              <div class="labs font-size30 fontf7">Laboratory Sciences</div>
              <div class="in-news-Knowledge-swp">
                <Swiper
                  :modules="[Autoplay, Navigation, Scrollbar]"
                  :observer="true"
                  :observeParents="true"
                  :slidesPerView="4"
                  :spaceBetween="25"
                  :navigation="sciencesNavigation"
                  :breakpoints="sciencesBreakpoints"
                >
                  <swiper-slide
                    v-for="(item, index) in SciencesList"
                    :key="index"
                  >
                    <div class="block boxs tans">
                      <img
                        :src="item.imgUrl"
                        class="img-responsive"
                        :alt="item.tit"
                      /></div
                  ></swiper-slide>
                </Swiper>
              </div>
              <div class="in-news-event-btn2 ub ub-ac ub-pc">
                <div
                  class="pub-ico-left swiper-button-disabled"
                  id="inNewsKnowledgeWp1Prev"
                  tabindex="0"
                  role="button"
                  aria-label="Previous slide"
                  aria-disabled="true"
                ></div>
                <div
                  class="pub-ico-right"
                  id="inNewsKnowledgeWp1Next"
                  tabindex="0"
                  role="button"
                  aria-label="Next slide"
                  aria-disabled="false"
                ></div>
              </div>
            </div>

            <div class="groups" id="2">
              <div class="labs font-size30 fontf7">CDMO Solutions</div>
              <div class="in-news-Knowledge-swp">
                <Swiper
                  :modules="[Autoplay, Navigation, Scrollbar]"
                  :observer="true"
                  :observeParents="true"
                  :slidesPerView="4"
                  :spaceBetween="25"
                  :navigation="solutionsNavigation"
                  :breakpoints="sciencesBreakpoints"
                >
                  <swiper-slide
                    v-for="(item, index) in SolutionsList"
                    :key="index"
                  >
                    <div class="block boxs tans">
                      <img
                        :src="item.imgUrl"
                        class="img-responsive"
                        :alt="item.tit"
                      /></div
                  ></swiper-slide>
                </Swiper>
              </div>
              <div class="in-news-event-btn2 ub ub-ac ub-pc">
                <div
                  class="pub-ico-left swiper-button-disabled"
                  id="inNewsKnowledgeWp2Prev"
                  tabindex="0"
                  role="button"
                  aria-label="Previous slide"
                  aria-disabled="true"
                ></div>
                <div
                  class="pub-ico-right"
                  id="inNewsKnowledgeWp2Next"
                  tabindex="0"
                  role="button"
                  aria-label="Next slide"
                  aria-disabled="false"
                ></div>
              </div>
            </div>
          </div>
        </el-col>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts" setup name="Cdmo">
import { ref } from "vue";
import { useTransition } from "@vueuse/core";
import { ViralList } from "./data/Index";
import { ArrowRight } from "@element-plus/icons-vue";
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
  nextEl: "#inNewNext",
  prevEl: "#inNewPrev",
  hideOnClick: true,
});
const breakpoints = ref({
  320: {
    //当屏幕宽度大于等于320
    slidesPerView: 1,
    spaceBetween: 0,
  },
  768: {
    //当屏幕宽度大于等于768
    slidesPerView: 2,
    spaceBetween: 10,
  },
  1280: {
    //当屏幕宽度大于等于1280
    slidesPerView: 3,
  },
  1580: {
    //当屏幕宽度大于等于1280
    slidesPerView: 3,
  },
});

const sciencesNavigation = ref({
  nextEl: "#inNewsKnowledgeWp1Next",
  prevEl: "#inNewsKnowledgeWp1Prev",
});
const sciencesBreakpoints = ref({
  320: {
    //当屏幕宽度大于等于320
    slidesPerView: 2,
    spaceBetween: 10,
  },
  768: {
    //当屏幕宽度大于等于768
    slidesPerView: 2,
    spaceBetween: 12,
  },
  1280: {
    //当屏幕宽度大于等于1280
    slidesPerView: 4,
    spaceBetween: 25,
  },
});
const solutionsNavigation = ref({
  nextEl: "#inNewsKnowledgeWp2Next",
  prevEl: "#inNewsKnowledgeWp2Prev",
});
const solutionsBreakpoints = ref({
  320: {
    //当屏幕宽度大于等于320
    slidesPerView: 2,
    spaceBetween: 10,
  },
  768: {
    //当屏幕宽度大于等于768
    slidesPerView: 2,
    spaceBetween: 12,
  },
  1280: {
    //当屏幕宽度大于等于1280
    slidesPerView: 4,
    spaceBetween: 25,
  },
});
const SciencesList = ref([
  {
    tit: "AAV Packaging Services",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20231019/1060cdb3931cb402fb967659f4645f34.jpg",
  },
  {
    tit: "Lentivirus Packaging Services",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20231019/ebcf10cfbdd41abcfa6cc931268def06.jpg",
  },
  {
    tit: "AAV Lung M3 and X",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20231019/e53e45f75ece1ff8f79d5656b95360a9.jpg",
  },
  {
    tit: "AAVneO + AAVMeta Platform",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20231019/1dcbaaaf9929529e54e508f5e1665dbd.jpg",
  },
  {
    tit: "Off-the-Shelf AAV Products",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20231019/a14ccd438e1b10ca796397d236a88770.jpg",
  },
]);
const SolutionsList = ref([
  {
    tit: "CGT CDMO Solutions at OBiO",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20231024/0a7db7cad0d47550e91ce323a47f29fe.jpg",
  },
  {
    tit: "Cell Therapy CDMO Solutions",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20231024/d21963d4b5f977d1a9f5135472a56668.jpg",
  },
  {
    tit: "Adeno Associated Virus CDMO Solutions",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20231024/e81a262802664819862f4f0d4be555ce.jpg",
  },
  {
    tit: "IPSC CDMO Services",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20230926/28fffe992afb0c7f806ce8acaf4dc20f.jpg",
  },
  {
    tit: "Phase-Appropriate Plasmid CDMO Solutions",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20230926/cd743d82fdf684f9fb1ef2866e28b52a.jpg",
  },
  {
    tit: "Lentiviral Vector CDMO Solutions",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20230926/f03331ea03516eb0b7b58e9b150887f8.jpg",
  },
  {
    tit: "Oncolytic Virus CDMO Solutions",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20230926/5da84fdce35d08986f725c27ca5d1f59.jpg",
  },
]);
const croList = ref([
  {
    imgUrl: handleViteImages("@/assets/icons/cdmo1.png"),
    title: "Viral Vectors",
    textArr: [
      "AAV",
      "Adenoviral vector for delivery of genes",
      "Lentiviral vectors",
      "Retroviral vectors",
      "Virus like particles (VLPs)",
    ],
  },
  {
    imgUrl: handleViteImages("@/assets/icons/cdmo2.png"),
    title: "Oncolytic Virus",
    textArr: [
      "Oncolytic adenoviruses",
      "Oncolytic herpes simplex virus",
      "Oncolytic vaccinia viruses",
      "Oncolytic vesicular stomatitis virus",
      "Oncolytic Newcastle disease virus",
    ],
  },
  {
    imgUrl: handleViteImages("@/assets/icons/cdmo3.png"),
    title: "Cell Therapy Products",
    textArr: [
      "CAR-T Therapy",
      "NK Cell Therapy",
      "TCR-T Therapy",
      "DC Therapy",
      "ΓδT Therapy",
      "Treg Therapy",
      "Stem cell therapy",
    ],
  },
  {
    imgUrl: handleViteImages("@/assets/icons/cdmo4.png"),
    title: "Plasmid Nucleotides",
    textArr: [
      "Plasmid DNA",
      "Minicircle plasmids",
      "dsDNA",
      "ssDNA",
      "mRNA drug substance",
      "mRNA-LNP finished product",
      "Exosomes",
    ],
  },
]);
const cellSource = ref(0);
const processSource = ref(0);
const analyticalSource = ref(0);
const cellSourceValue = useTransition(cellSource, {
  duration: 1500,
});
const processSourceValue = useTransition(processSource, {
  duration: 1500,
});
const analyticalSourceValue = useTransition(analyticalSource, {
  duration: 1500,
});
cellSource.value = 170;
processSource.value = 200;
analyticalSource.value = 500;

const activeIndex = ref(0);
</script>

<style lang="scss">
.number-main .number-c {
  .el-statistic__number {
    font-size: 90px;
    color: #039d8f;
    line-height: 0.75;
  }
}
@media (max-width: 765px) {
  .number-main .number-c .el-statistic__number {
    font-size: 40px;
    color: #039d8f;
    line-height: 0.75;
  }
}
.cdmo-top {
  align-items: center;
  img {
    width: 100%;
  }
}
.number-main {
  .tx-c {
    margin-bottom: 20px;
  }
}
.nums-list {
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 1px -1px 13px 3px rgba(0, 0, 0, 0.13);

  .content {
    border-radius: 30px;
    margin-bottom: 20px;
    padding: 20px;
    background: #fff;
    transition: all 0.5s;
    // margin-top: -20px;
    &:hover {
      transform: translateY(-7px);
    }
  }
}
.facilities-box {
  margin-top: 30px;
}
.innovation-box {
  margin: 0;
  .txt {
    text-align: center;
  }
}
</style>
