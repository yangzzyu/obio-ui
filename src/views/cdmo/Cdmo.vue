<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-03-28 10:18:33
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
          <el-col :xs="24" :span="6"
            ><div class="animate-imgxx uof img">
              <img :src="handleViteImages('cdmo_top.png')" alt="SPIRO Site" />
            </div>
          </el-col>
          <el-col :xs="24" :span="18">
            <p class="font-size18 fontf7 cro-p textColor">
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
          <h1 class="p-title font-size50 txt-bold fontf8">Facilities</h1>

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
                <div class="font-size18 fontf7 iti">
                  Lin-Gang Free-Trade Zone, Shanghai, China
                </div>
                <div class="font-size30 fontf7 iti">OBIO Intelli-M</div>
                <p class="font-size18 textColor txt-bold">
                  Process Development Characterization Clinical and Commercial
                  Manufacturing. 
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
                <div class="font-size18 fontf7 iti">
                  International Medical Park, Shanghai, China
                </div>
                <div class="font-size30 fontf7 iti">SPIRO Site</div>

                <p class="font-size18 textColor txt-bold">
                  Integrated Laboratory Services Processand Analytical Method
                  Development. Research and Development Center
                </p>
                <router-link
                  to="/spiroSite"
                  class="read-more font-size18 fontf7"
                  >Read More</router-link
                >
              </el-col>
              <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                <div class="manufacturing-list bg-pinkbluelfr">
                  <div class="content">
                    <img
                      :src="handleViteImages('pine_site.png')"
                      alt="PINE Site"
                    />
                  </div>
                </div>
                <div class="font-size18 fontf7 iti">
                  International Medical Park, Shanghai, China
                </div>
                <div class="font-size30 fontf7 iti">PINE Site</div>
                <p class="font-size18 textColor txt-bold">
                  Process and Analytical Method Development. Pre-clinical and
                  Clinical Manufacturing. Three-building, <text
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
        <h1 class="p-title font-size50 txt-bold fontf8 mb-3 mt-5">
          CDMO Service
        </h1>
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
            <el-col :xs="24" :span="6" />
            <el-col :xs="24" :span="6"
              ><div
                class="animate-imgxx uof img"
                style="
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  height: 100%;
                "
              >
                <img :src="item.imgUrl" alt="SPIRO Site" />
              </div>
            </el-col>
            <el-col :xs="24" :span="10">
              <h1 class="font-size18 fontf7 iti item-tit">
                {{ item.title }}
              </h1>
              <ul>
                <li
                  style="padding: 5px 0"
                  v-for="(i, idx) in item.textArr"
                  :key="idx"
                  class="font-size18 textColor"
                >
                  • {{ i }}
                </li>
              </ul>
              <router-link :to="item.path" class="font-size18 fontf7 btn-a mt-3"
                >Read More</router-link
              ></el-col
            >
          </el-row>
        </el-col>
      </div>
    </section>
    <section id="innovation">
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
            <h1 class="p-title font-size50 txt-bold fontf8 mb-3 mt-5">
              Innovation
            </h1>

            <div class="fac-con">
              <el-row class="row" :gutter="10">
                <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" class="">
                  <div class="manufacturing-list">
                    <div class="content">
                      <img
                        :src="handleViteImages('innovation1.png')"
                        alt="SPIRO Site"
                      />
                    </div>
                  </div>
                  <h1 class="font-size18 fontf7 iti">AAVneO™ System</h1>
                  <p class="font-size18 txt textColor txt-bold">
                    Next-Generation Capsid <br />Screening Platform
                  </p>
                  <a
                    style="cursor: pointer"
                    @click="popLabora(1)"
                    class="read-more font-size18 fontf7 mt-3"
                    >Read More</a
                  >
                </el-col>
                <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                  <div class="manufacturing-list">
                    <div class="content">
                      <img
                        :src="handleViteImages('innovation2.png')"
                        alt="PINE Site"
                      />
                    </div>
                  </div>
                  <h1 class="font-size18 fontf7 iti">OVersatile™ Platform</h1>
                  <p class="font-size18 textColor txt txt-bold">
                    Versatility for Various Needs
                  </p>
                  <a
                    style="cursor: pointer"
                    @click="popLabora(2)"
                    class="read-more font-size18 fontf7 mt-3"
                    >Read More</a
                  >
                </el-col>
                <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                  <div class="manufacturing-list">
                    <div class="content">
                      <img
                        :src="handleViteImages('innovation3.png')"
                        alt="OBiO Intelli-M"
                      />
                    </div>
                  </div>
                  <h1 class="font-size18 fontf7 iti">
                    Proprietary Cell Line Development
                  </h1>
                  <p class="font-size18 textColor txt txt-bold">
                    High-Yielding Cell Line for <br />
                    Suspension Culture
                  </p>
                  <a
                    style="cursor: pointer"
                    @click="popLabora(3)"
                    class="read-more font-size18 fontf7 mt-3"
                    >Read More</a
                  >
                </el-col>
              </el-row>
            </div></el-col
          >
        </div>
      </div>
    </section>
  </div>
  <el-dialog
    v-model="dialogVisible"
    title=""
    width="60%"
    :before-close="handleClose"
  >
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
      </div>
    </div>
  </el-dialog>
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
const croList = ref([
  {
    imgUrl: handleViteImages("cdmo1.png"),
    title: "Viral Vectors",
    path: "/vector",
    textArr: [
      "AAV",
      "Adenoviral vector for delivery of genes",
      "Lentiviral vectors",
      "Retroviral vectors",
      "Virus like particles (VLPs)",
    ],
  },
  {
    imgUrl: handleViteImages("cdmo2.png"),
    title: "Oncolytic Virus",
    path: "/virus",
    textArr: [
      "Oncolytic adenoviruses",
      "Oncolytic herpes simplex virus",
      "Oncolytic vaccinia viruses",
      "Oncolytic vesicular stomatitis virus",
      "Oncolytic Newcastle disease virus",
    ],
  },
  {
    imgUrl: handleViteImages("cdmo3.png"),
    title: "Cell Therapy Products",
    path: "/products",
    textArr: [
      "Autologous and homologous immunocyte therapies",
      "CAR-T Therapy",
      "NK Cell Therapy",
      "TCR-T Therapy",
      "DC Therapy",
      "ΓδT Therapy",
      "Treg Therapy",
      "Stem Cell Therapy",
    ],
  },
  {
    imgUrl: handleViteImages("cdmo4.png"),
    title: "Plasmid Nucleotides",
    path: "/nucleotides",
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

const dialogVisible = ref(false);
function handleClose() {
  Labora.value = {};
  dialogVisible.value = false;
}
const Labora = ref(<any>{});
const LaboraList = ref([
  {
    id: 1,
    title: "AAVneO™ System：Next-Generation Capsid Screening Platform",
    txt: `Our AAVneO™ system uses in-vivo direct evolution and high-throughput screening to discover the next-generation adeno-associated viral vectors with enhanced targeting ability, improved payload size, lower immunogenicity, and superior manufacturability.Scientists at OBiO have constructed the 7-mers mutagenesis libraries for AAV serotypes with billion-level library abundance. AAVneO™ will serve as an integrated platform that enables gene therapy developers to screen, select, and co-develop the next-generation vectors for a broad range of diseases and overcome the limitations of conventional AAV-based gene therapies.`,
  },
  {
    id: 2,
    title: "OVersatileTM Platform: Versatility for Various Needs",
    txt: `Comprehensive process development capabilities are the critical determinant to fulfill the various development and manufacturing needs. Our OVersatilie™ process development platform aims to offer an integrated solutions for various gene and cell therapy product. The platform covers cell factories, fixed bed bioreactors, dissolvable microcarriers, and roller bottles for adherent cell culture process, the large-scale, serum-free suspension cell culture process, and conventional cell lines including 293-based cells, Vero cells, and HeLa cells. Process development experts at OBiO will assist you to diagnose the manufacturing gaps, optimize the parameters with the versatile platform, and de-risk your industrialization process.`,
  },
  {
    id: 3,
    title:
      "Proprietary Cell Line Development: High-Yielding Cell Line for Suspension Culture",
    txt: `Discovering a stable and high-yield cell line is a consistent goal for a CDMO solution provider. Our experienced research team dedicates to the development of proprietary high-yielding cell clones and optimizing the cell culture process and media formulation. At the current stage, our team has obtained a single-cell derived clone for AAV suspension culture with 30% to 50% improvement in viral titer compared to the conventional HEK293 cells. We will keep progressing on the screening process of a single-cell derived clone with superior performance.`,
  },
]);
function popLabora(id) {
  Labora.value = LaboraList.value.find((i) => i.id === id) || {};
  dialogVisible.value = true;
}
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
