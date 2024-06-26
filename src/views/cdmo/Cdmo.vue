<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-04-24 10:34:32
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="CDMO-Solutions-wrap">
    <div class="section-1 mb-3 mt-3">
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
          <el-col :xs="24" :span="10"
            ><div class="animate-imgxx uof img">
              <img :src="handleViteImages('life/WechatIMG522.jpg')" alt="SPIRO Site" />
            </div>
          </el-col>
          <el-col :xs="24" :span="14">
            <p class="font-size18 fontf4 cro-p textColor">
              We provide comprehensive CDMO services encompassing process
              development, analytical methods, IND-enabling CMC (Chemistry,
              Manufacturing, and Controls), as well as clinical and commercial
              manufacturing for viral vector, oncolytic virus, and cell therapy
              products. Our expertise extends to offering holistic solutions
              tailored to support the industrialization and commercialization of
              various products at the Pre-IND stage and beyond.
            </p>
            <p class="font-size18 fontf4 cro-p textColor">
              Through years of dedicated effort, OBiO Technology has built an integrated
              process development system, supported by a flexible cGMP
              manufacturing platform, comprehensive quality system and efficient
              project management. Our experienced team of experts will navigate
              the industrialization process with you side-by-side.
            </p>
            <p class="font-size18 fontf4 cro-p textColor">
              With our technical expertise in viral vector, oncolytic virus and
              cell therapy, we will help you to accelerate your product
              life-cycle from pre-clinical to commercially ready.
            </p>
          </el-col>
        </el-row>
        <div class="number-main text-center cGMP-zIndex active" id="numgo">
          <el-row class="row color666" :gutter="100">
            <el-col :span="4" :xs="24" class="tx-c">
              <div class="nums-list bg-pinkbluelfr">
                <div class="content">
                  <div class="pn fontf5 font-size24">
                    Assisted Clients to Obtain
                  </div>
                  <el-statistic :value="indApprovalsValue" class="number-c">
                    <template #suffix>
                      <div class="nums fontf9">
                        <span class="fh">+</span>
                      </div>
                    </template>
                  </el-statistic>
                  <div class="pn fontf5 font-size24" style="margin-bottom: -10px">
                    IND Approvals
                  </div>
                  <div class="pn fontf5 font-size24">
                    Including
                  </div>
                  <el-statistic :value="fdaApprovalsValue" class="number-c">
                    <template #suffix>
                      <div class="nums fontf9">
                        <span class="fh">+</span>
                      </div>
                    </template>
                  </el-statistic>
                  <div class="pn fontf5 font-size24">
                    FDA Approvals
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="5" :xs="24" class="tx-c">
              <div class="nums-list bg-pinkbluelfr">
                <div class="content">
                  <el-statistic :value="cellSourceValue" class="number-c">
                    <template #suffix>
                      <div class="nums fontf9">
                        <span class="fh">+</span>
                      </div>
                    </template>
                  </el-statistic>
                  <div class="pn fontf5 font-size24">
                    Gene and Cell Therapy Programs
                  </div>
                </div>
              </div>
              <br />
              <div class="nums-list bg-pinkbluelfr">
                <div class="content">
                  <el-statistic :value="squareFeetValue" class="number-c">
                    <template #suffix>
                      <div class="nums fontf4">
                        <span class="fh">K ft²</span>
                      </div>
                    </template>
                  </el-statistic>
                  <div class="pn fontf5 font-size24">
                    of CRO & CDMO service operational area
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="5" :xs="24" class="tx-c">
              <div class="nums-list bg-pinkbluelfr">
                <div class="content">
                  <el-statistic class="number-c" :value="globalServiceValue">
                    <template #suffix>
                      <div class="nums fontf9">
                        <span class="fh">+</span>
                      </div>
                    </template>
                  </el-statistic>
                  <div class="pn fontf5 font-size24">
                    Global Service Clients
                  </div>
                </div>
              </div>
              <br />
              <div class="nums-list bg-pinkbluelfr">
                <div class="content">
                  <el-statistic :value="suspendedValue" class="number-c">
                    <template #suffix>
                      <div class="nums fontf4">
                        <span class="fh">L</span>
                      </div>
                    </template>
                  </el-statistic>
                  <div class="pn fontf5 font-size24">
                    Suspended Cell Culture Production System
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="5" :xs="24" class="tx-c">
              <div class="nums-list bg-pinkbluelfr">
                <div class="content">
                  <el-statistic :value="cumulativeCgtValue" class="number-c">
                    <template #suffix>
                      <div class="nums fontf9">
                        <span class="fh">+</span>
                      </div>
                    </template>
                  </el-statistic>
                  <div class="pn fontf5 font-size24">
                    Cumulative CGT CDMO Projects
                  </div>
                </div>
              </div>
              <br />
              <div class="nums-list bg-pinkbluelfr">
                <div class="content">
                  <el-statistic :value="processSourceValue" class="number-c">
                    <template #suffix>
                      <div class="nums fontf9">
                        <span class="fh">+</span>
                      </div>
                    </template>
                  </el-statistic>
                  <div class="pn fontf5 font-size24">
                    Process Development Projects
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="5" :xs="24" class="tx-c">
              <div class="nums-list bg-pinkbluelfr">
                <div class="content">
                  <el-statistic class="number-c" :value="analyticalSourceValue">
                    <template #suffix>
                      <div class="nums fontf9">
                        <span class="fh">+</span>
                      </div>
                    </template>
                  </el-statistic>
                  <div class="pn fontf5 font-size24">
                    Analytical Method Development Projects
                  </div>
                </div>
              </div>
              <br />
              <div class="nums-list bg-pinkbluelfr">
                <div class="content">
                  <el-statistic class="number-c" :value="batchValue">
                    <template #suffix>
                      <div class="nums fontf9">
                        <span class="fh">+</span>
                      </div>
                    </template>
                  </el-statistic>
                  <div class="pn fontf5 font-size24" style="margin-bottom: 52px">
                    Batches
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </div>
    <section id="cdmo-service-box" class="cro-list" style="margin-top: -100px">
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
        <el-row class="cro--service row" :gutter="20">
          <el-col
            :xs="24"
            :span="6"
            class="cro--service-i"
            v-for="(item, index) in croList"
            :key="index"
          >
            <a class="tans service--box_link bg-pinkbluelfr">
              <div class="service--box align-items-start">
                <div class="manufacturing-list">
                  <div class="content">
                    <img :src="item.imgUrl" alt="" srcset="" />
                  </div>
                </div>
                <h2 class="font-size24 fontf7 iti">
                  {{ item.title }}
                </h2>
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
                <router-link
                  :to="item.path"
                  class="font-size18 fontf7 read-more mt-3 service--box-a"
                  >Read More</router-link
                >
              </div>
            </a>
            <!-- <a class="block tans">
                <div class="animate-imgxx uof img">
                  <img :src="item.imgUrl" alt="SPIRO Site" />
                </div>
              </a>
              <h2 class="font-size24 fontf7 iti">
                {{ item.title }}
              </h2>
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
              <router-link :to="item.path" class="font-size18 fontf7 read-more mt-3"
                >Read More</router-link
              > -->
          </el-col>
        </el-row>
      </el-col>
    </section>
    <section id="whyobio">
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
            <div class="cGMP-title-t2">
              <div class="fontf7 font-size50 ct"><span>Why OBiO?</span></div>
                <i class="bg"></i>
            </div>
            <div class="Viral-Vector-wrap cGMP-zIndex">
              <div class="section-3" style="background: transparent">
                <el-row class="list row" style="margin-top: 0">
                  <el-col :sm="12" v-for="(i, k) in vectorList" :key="k">
                    <div class="boxs">
                      <div class="ub ub-ac">
                        <img class="ico" :src="i.bgUrl" alt="" srcset="" />
                        <div class="txt fontf5 font-size18 color666 ub-f1">
                          {{ i.txt }}
                        </div>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
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
                  <a class="tans service--box_link bg-pinkbluelfr">
                    <div class="service--box align-items-start">
                      <div class="manufacturing-list">
                        <div class="content innovation-content">
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
                      <router-link to="/cdmo/innovation/aav" class="read-more font-size18 fontf7 service--box-a">Read More</router-link>
                    </div>
                  </a>
                </el-col>
                <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                  <a class="tans service--box_link bg-pinkbluelfr">
                    <div class="service--box align-items-start">
                      <div class="manufacturing-list">
                        <div class="content innovation-content">
                          <img
                            :src="handleViteImages('innovation2.png')"
                            alt="PINE Site"
                          />
                        </div>
                      </div>
                      <h1 class="font-size18 fontf7 iti">
                        OVersatile™ Platform
                      </h1>
                      <p class="font-size18 textColor txt txt-bold">
                        Versatility for Various Needs
                      </p>
                      <router-link to="/cdmo/innovation/oversatile" class="read-more font-size18 fontf7 service--box-a">Read More</router-link>
                    </div>
                  </a>
                </el-col>
                <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                  <a class="tans service--box_link bg-pinkbluelfr">
                    <div class="service--box align-items-start">
                      <div class="manufacturing-list">
                        <div class="content innovation-content">
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
                        class="read-more font-size18 fontf7 mt-3 service--box-a"
                        >Read More</a
                      >
                    </div>
                  </a>
                </el-col>
              </el-row>
            </div></el-col>
        </div>
      </div>
    </section>
  </div>
  <el-dialog
    id="cdmo-dialog"
    v-model="dialogVisible"
    width="60%"
    :before-close="handleClose"
  >
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
import Process from "@/views/cdmo/Process.vue";

const vectorList = ref([
  {
    bgUrl: handleViteImages("highlights/1.png"),
    txt: "10+ years of dedication to gene and cell therapy",
  },
  {
    bgUrl: handleViteImages("highlights/2.png"),
    txt: `130 process development projects 230
                      analytical methods developed`,
  },
  {
    bgUrl: handleViteImages("highlights/3.png"),
    txt: "Quality-driven team of experts with in-time responding",
  },
  {
    bgUrl: handleViteImages("highlights/4.png"),
    txt: `Efficient technology transfer with optimizing process validation`,
  },
  {
    bgUrl: handleViteImages("highlights/5.png"),
    txt: `Process development versatility for various product needs stages`,
  },
  {
    bgUrl: handleViteImages("highlights/6.png"),
    txt: `End-to-end regulatory support with side-by-side navigation`,
  },
]);

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
    path: "/cdmo/cgmp/viral_vectors",
    textArr: [
      "AAV",
      "Adenoviral vector for delivery of genes",
      "Lentiviral vectors",
      "Retroviral vectors",
      "Virus like particles (VLPs)",
      "AAV Packaging",
    ],
  },
  {
    imgUrl: handleViteImages("cdmo2.png"),
    title: "Oncolytic Virus",
    path: "/cdmo/cgmp/oncolytic_virus",
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
    title: "Cell Line",
    path: "/cdmo/cgmp/cell_therapy_products",
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
    path: "/cdmo/cgmp/prasmid_nucleotides",
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
const cumulativeCgt = ref(0);
const indApprovals = ref(0);
const fdaApprovals = ref(0);
const suspended = ref(0);
const squareFeet = ref(0);
const globalService = ref(0);
const processSource = ref(0);
const analyticalSource = ref(0);
const batchSource = ref(0);
const cellSourceValue = useTransition(cellSource, {
  duration: 1500,
});
const cumulativeCgtValue = useTransition(cumulativeCgt, {
  duration: 1500,
});
const indApprovalsValue = useTransition(indApprovals, {
  duration: 1500,
});
const fdaApprovalsValue = useTransition(fdaApprovals, {
  duration: 1500,
});
const suspendedValue = useTransition(suspended, {
  duration: 1500,
});
const squareFeetValue = useTransition(squareFeet, {
  duration: 1500,
});
const globalServiceValue = useTransition(globalService, {
  duration: 1500,
});
const processSourceValue = useTransition(processSource, {
  duration: 1500,
});
const analyticalSourceValue = useTransition(analyticalSource, {
  duration: 1500,
});
const batchValue = useTransition(batchSource, {
  duration: 1500,
})
cellSource.value = 300;
cumulativeCgt.value = 300;
indApprovals.value = 38;
fdaApprovals.value = 11;
suspended.value = 200;
squareFeet.value = 990;
globalService.value = 110;
processSource.value = 200;
analyticalSource.value = 500;
batchSource.value = 400;

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
    txt: `Our AAVneO system uses in-vivo direct evolution and high-throughput screening to discover the next-generation adeno-associated viral vectors with enhanced targeting ability, improved payload size, lower immunogenicity, and superior manufacturability. AAVneo will serve as an integrated platform that enables gene therapy developersto screen, select, and co-develop the next-generation vectors for a broad range of diseases and overcome the limitations of conventional AAV-based gene therapies.`,
  },
  {
    id: 2,
    title: "OVersatile Platform：Versatile Process for Various Needs",
    txt: `Our OVersatilie process development platform aims to offer an integrated solutions for various gene and cell therapy products, fulfilling different development and manufacturing needs. The platform covers cell factories,fixed bed bioreactors, dissolvable microcarriers, and roller bottles for adherent cell culture process, the large-scale,serum-free suspension cell culture process, and conventional cell lines including 293-based cells, Vero cells, and Hela cells.`,
  },
  {
    id: 3,
    title:
      "Proprietary Cell Line Development: High-Yielding Cell Line for Suspension Culture",
    txt: `Our experienced research team dedicates to the development of proprietary high-yielding cell clones and optimizing the cell culture process and media formulation. At the current stage, our team has obtained a single-cell derived clone for AAV suspension culture with 30% to 50% improvement in viral titer compared to the conventional HEK293 cells. We will keep progressing on the screening process of a single-cell derived clone with superior performance.`,
  },
]);
function popLabora(id) {
  Labora.value = LaboraList.value.find((i) => i.id === id) || {};
  dialogVisible.value = true;
  setTimeout(() => {
    document.querySelector('#cdmo-dialog').parentElement.setAttribute('aria-label', Labora.value.title);
    document.querySelector('#cdmo-dialog .el-dialog__title').remove();
  }, 0);
}
</script>

<style lang="scss">
.number-main .number-c {
  .el-statistic__number {
    font-size: 40px;
    color: #039d8f;
    font-weight: bold;
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
    padding-left: 15px !important;
    padding-right: 15px !important;
  }
}
.number-main .fh {
  font-size: 30px;
  font-weight: bold;
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
  // margin-top: 30px;
}
.innovation-box {
  margin: 0;
  .txt {
    text-align: center;
  }
}
#cdmo-service-box,
#innovation {
  .service--box_link:hover .service--box {
    background-color: #fff;
    color: #747475;
  }
  .manufacturing-list .content {
    text-align: center;
  }
}
#cdmo-service-box {
  .service--box_link {
    height: 600px;
  }
}
#innovation {
  .service--box_link {
    height: 440px;
  }
}
@media (max-width: 765px) {
  #cdmo-service-box {
    .service--box_link {
      height: 450px !important;
    }
  }
  #innovation {
    .service--box_link {
      height: 320px !important;
    }
  }
}
</style>
