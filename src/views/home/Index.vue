<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-03-18 22:04:02
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-04-01 16:21:44
 * @FilePath: \obio-ui\src\views\home\Index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <div class="index">
    <div class="banner-wrap">
      <Banner :banner-height="BannerHeight"></Banner>
      <!-- <div class="home-about-wrap"> -->
      <div class="in-about-wrap mt-1">
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
            <div class="content">
              <p class="font-size18 cro-p textColor">
                OBiO Technology is a pioneering Contract Research Organization (CRO) and Contract Development and Manufacturing Organization (CDMO) in gene and cell therapy, delivering top-tier services worldwide. 
                From laboratories to clinics, we will continue to support the production of and advancement of your products to benefit populations worldwide. 
              </p>
              <p class="font-size18 cro-p textColor">
                OBiO leverages a decade of industry expertise and has facilitated the progression of over 150 gene and cell therapy initiatives, 
                25 of which achieved approval for clinical trials in both the US and China by April 2023.
                Our comprehensive set of services encompasses therapies using plasmids, mRNA, AAV vectors, oncolytic viruses, immuno cells, stem cells, and more.
                OBiO's cGMP facilities are also the largest of their kind in the Asian Pacific region, allowing us to offer unparalleled proficiency and capacity for gene and cell therapies.
              </p>
            </div>
            <h2 class="title-color our-txt font-size30 section-title fontf6">
              Manufacturing Facilities
            </h2>
            <div class="content">
              <p class="font-size18 cro-p textColor mb-3">
                As a trusted Contract Development and Manufacturing Organization (CDMO), we understand that flexible capacities and regulatory-compliant facilities are essential for delivering top-tier services to gene and cell therapy developers.
                For our global clientele, we have strategically established an integrated research platform with sites at the Lin-Gang Free-Trade Zone and the Shanghai International Medical Park. 
              </p>
            </div>

            <!-- facility locations -->
            <div class="fac-con">
              <el-row class="row" :gutter="24">
                <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" class="">
                  <div class="manufacturing-list bg-pinkbluelfr">
                    <div class="content">
                      <img
                        :src="handleViteImages('facilities1.jpg')"
                        alt="OBiO Intelli-M"
                      />
                    </div>
                  </div>
                  <div class="font-size18 fontf6 iti">
                    Lin-Gang Free-Trade Zone
                  </div>
                  <router-link
                    to="/about/facilities/intellim"
                    class="read-more font-size24 fontf6 iti"> 
                    OBiO Intelli-M
                  </router-link>
                  <p class="font-size18 textColor">
                    Process Development Characterization. Clinical and Commercial
                    Manufacturing. Facility for Global Supply.
                    <text class="title-color txt-bold">77,000 m²</text
                    > (828,821 ft²).
                  </p>
                  <ul class="txt-ul mt-2">
                    <li class="font-size18 textColor">
                      GMP Manufacturing Campus
                    </li>
                    <li class="font-size18 textColor">
                      33 Production Lines
                    </li>
                    <li class="font-size18 textColor">
                      Phase I-III Manufacturing
                    </li>
                    <li class="font-size18 textColor">
                      Commercial Manufacturing
                    </li>
                    <li class="font-size18 textColor">
                      Analytical Development
                    </li>
                    <li class="font-size18 textColor">
                      Tech-Transfer
                    </li>
                  </ul>
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
                  <div class="font-size18 fontf6 iti">
                    International Medical Park
                  </div>

                  <router-link
                    to="/about/facilities/spiro"
                    class="read-more font-size24 fontf6 iti"> 
                    SPIRO Site
                  </router-link>

                  <p class="font-size18 textColor">
                    Integrated Laboratory Services. Process and Analytical Method
                    Development. Research and Development Center.
                    <text class="title-color txt-bold">5,000 m²</text>
                    (54,000 ft²).
                  </p>
                  <ul class="txt-ul mt-2">
                    <li class="font-size18 textColor">
                      Vector Engineering
                    </li>
                    <li class="font-size18 textColor">
                      Animal Studies
                    </li>
                    <li class="font-size18 textColor">
                      Cellular Biology
                    </li>
                    <li class="font-size18 textColor">
                      Bioassay & Testing
                    </li>
                    <li class="font-size18 textColor">
                      Novel Capsid Screening
                    </li>
                  </ul>
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
                  <div class="font-size18 fontf6 iti">
                    International Medical Park
                  </div>

                  <router-link
                    to="/about/facilities/pine"
                    class="read-more font-size24 fontf6 iti"> 
                    PINE Site
                  </router-link>

                  <p class="font-size18 textColor">
                    Process and Analytical Method Development. Pre-clinical and
                    Clinical Manufacturing. Three-building campus.
                    <text class="title-color txt-bold">10,000 m²</text
                    > (107,639 ft²).
                  </p>
                  <ul class="txt-ul mt-2">
                    <li class="font-size18 textColor">
                      GMP Manufacturing Building
                    </li>
                    <li class="font-size18 textColor">
                      8 Production Lines
                    </li>
                    <li class="font-size18 textColor">
                      IND-Enabling CMC
                    </li>
                    <li class="font-size18 textColor">
                      Phase I & II Manufacturing
                    </li>
                    <li class="font-size18 textColor">
                      Bank Construction
                    </li>
                    <li class="font-size18 textColor">
                      Aseptic Fill & Finish
                    </li>
                    <li class="font-size18 textColor">
                      Non-Clinical Investigation
                    </li>
                    <li class="font-size18 textColor">
                      Tech-Transfer
                    </li>
                  </ul>
                </el-col>
              </el-row>
            </div>

            <!-- facility locations -->



          </el-col>
        </div>
      </div>
      <section id="callout" class="">
        <el-col
          :xs="22"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
          class="container"
        >
          <h1 class="p-title font-size30 section-title fontf6 mb-2 mt-0">
            CDMO Services
          </h1>
          <el-row class="image--callout">
            <el-col :span="8" :xs="24" class="visible-xs-block">
              <div
                class="image--callout_image"
                style="
                  background-image: url(https://obio-tech.com/obio-img/life/WechatIMG522.jpg);
                "
              ></div>
            </el-col>
            <el-col
              :span="15"
              :xs="24"
              class="cdmo-txt bg-pinkbluelfr font-size18"
              >We provide comprehensive CDMO services encompassing process
              development, analytical methods, IND-enabling CMC (Chemistry,
              Manufacturing, and Controls), as well as clinical and commercial
              manufacturing for viral vector, oncolytic virus, and cell therapy
              products. Our expertise extends to offering holistic solutions
              tailored to support the industrialization and commercialization of
              various products at the Pre-IND stage and beyond.
            </el-col>
            <el-col :span="9" :xs="24" class="hidden-xs">
              <div
                class="image--callout_image"
                style="
                  background-image: url(https://obio-tech.com/obio-img/life/WechatIMG522.jpg);
                "
              ></div>
            </el-col>
          </el-row>
          <el-row class="news--slider row" :gutter="24">
            <el-col
              :xs="24"
              :span="6"
              class="news--slider-i"
              v-for="(item, index) in cdmoList"
              :key="index"
            >
              <div class="block tans service--box_link bg-pinkbluelfr">
                <div class="service--box align-items-start">
                  <div class="service--box_icon mb-2 min-width-70">
                    <img
                    class="icon--colour"
                    :src="item.imgUrl"
                    alt="GMP Vector Manufacturing icon"
                    />
                  </div>
                  <span class="font-bold p-large mb-3 font-size24 fontf6">
                    {{ item.title }}
                  </span>
                  <div class="cdmo-cont">
                    <ul class="txt-ul">
                      <li
                        v-for="(i, idx) in item.list"
                        :key="idx"
                        class="font-size18"
                      >
                        {{ i }}
                      </li>
                    </ul>
                  </div>
                  <br>
                  <router-link
                    :to="item.path"
                    class="mt-auto flex-shrink-0 btn--underline blog-btn font-size18 fontf6"
                    >Read More</router-link
                  >
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
    </section>
      <section id="CROout" class="">
        <el-col
          :xs="22"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
          class="container"
        >
          <h1 class="p-title font-size30 txt-bold fontf6 mb-0 mt-4">
            CRO Service
          </h1>
          <div class="wysiwyg--content colour-white mb-2">
            <p class="textColor font-size18">
              OBiO provides an integrated portfolio of plasmid construction,
              viral packaging, cell biology and animal study services for biomedical researchers.
            </p>
          </div>
          <el-row class="cro--service row" :gutter="10">
            <el-col
              :xs="24"
              :span="5"
              class="news--slider-i us-list-i"
              v-for="(item, index) in croList"
              :key="index"
            >
              <a class="block tans service--box_link bg-pinkbluelfr">
                <div class="service--box align-items-start">
                  <div
                    class="service--box_icon mb-2 min-width-70"
                    style="margin: auto"
                  >
                    <img
                      :src="item.imgUrl"
                      alt="GMP Manufacturing icon"
                    />
                  </div>
                  <p class="textColor font-size18" style="margin-bottom:40px">{{ item.text }}</p>
                  <br>
                  <a
                    @click="croPopLabora(item.popLaboraId)"
                    class="read-more font-size18 fontf6 service--box-a"
                    style="cursor: pointer;"
                    >Read More</a
                  >
                </div>
              </a>
            </el-col>
            <!-- <el-col
              :xs="24"
              :span="5"
              class="cro--service-i"
              v-for="(item, index) in croList"
              :key="index"
            >
              <a class="block tans">
                <div class="animate-imgxx uof img">
                  <img :src="item.imgUrl" alt="SPIRO Site" />
                </div>
              </a>
              <div class="font-size24 fontf7 iti">
                {{ item.title }}
              </div>
              <p class="font-size18 cro-p">
                {{ item.text }}
              </p>
              <a
                @click="croPopLabora(item.popLaboraId)"
                class="read-more font-size18 fontf7"
                style="cursor: pointer"
                >Read More</a
              >
            </el-col> -->
          </el-row>
        </el-col>
      </section>

      <section id="Seeout" class="">
        <el-col
          :xs="22"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
          class="container"
        >
          <h1 class="p-title font-size30 txt-bold fontf6 mb-2 mt-4">
            Our Capabilities
          </h1>
          <el-row :gutter="20" class="mb-4">
            <el-col :span="8" :xs="24">
              <div class="manufacturing-list bg-pinkbluelfr video-list">
                <div class="content">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/EqjpDvB0zJY?si=eOSNuif51qAlIRjt"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <p class="video-p font-size18 textColor">
                    Experience Innovation: Explore OBiO Tech's Intelli-M
                    GMP-Compliant Plasmid Production Line Today!
                  </p>
                </div>
              </div>
            </el-col>
            <el-col :span="8" :xs="24">
              <div class="manufacturing-list bg-pinkbluelfr video-list">
                <div class="content">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/otK0yzBYHZ0?si=X_V-n6mUrJiF9n23"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>

                  <p class="video-p font-size18 textColor">
                    Exciting Milestone: OBiO Lingang Facility Launches
                    Operations in 2023!
                  </p>
                </div>
              </div></el-col
            >
            <el-col :span="8" :xs="24">
              <div class="manufacturing-list bg-pinkbluelfr video-list">
                <div class="content">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/CZaS7IvYMJc?si=ROl6eljt6sLjkmb_"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <p class="video-p font-size18 textColor">
                    Elevate Your Production Efficiency Today! OBiO Intelli-M GMP
                    offers Capacities from 20L to 2000L.
                  </p>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </section>
      <Events />
    </div>
  </div>
  <el-dialog
    v-model="dialogVisible"
    title=""
    width="80%"
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
        <p style="text-align: center">
          <img v-if="Labora.imgUrl" :src="Labora.imgUrl" :alt="Labora.title" />
        </p>
      </div>
    </div>
  </el-dialog>
</template>
<script lang="ts" setup name="Home">
import "wow.js/css/libs/animate.css";
import WOW from "wow.js";
import Banner from "@/components/Banner.vue";
import ObioFooter from "@/components/ObioFooter.vue";
import { homeFacilitiesData, insightsData } from "@/data/HomePage";
import { handleViteImages, goRouter } from "@/utils";
import { onMounted, onUnmounted, ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { releases, events } from "@/views/insights/data/Index";
import Events from "@/components/Events.vue";
import Career from "@/components/Career.vue";

type FormItem = {
  [key: string]: string;
};
const router = useRouter();
const BannerHeight = ref(0);

const InsightsType = ref(1);
const InsightsList = ref([]);
function handleInsightsType(params) {
  InsightsType.value = params;
  if (params === 1) {
    InsightsList.value = releases.value.slice(0, 3);
  } else if (params === 2) {
    InsightsList.value = events.value.slice(0, 3);
  }
}
const ruleForm = ref<FormItem>({});
const rules = ref([]);
const cdmoList = ref([
  {
    imgUrl: handleViteImages("cdmo_service1.png"),
    actImgUrl: handleViteImages("cdmo_service_act1.png"),
    title: "Viral Vectors",
    path: "/cdmo/cgmp/viral_vectors",
    list: [
      "AAV",
      "Adenoviral vector for delivery of genes",
      "Lentiviral vectors",
      "Retroviral vectors",
    ],
  },
  {
    imgUrl: handleViteImages("cdmo_service2.png"),
    actImgUrl: handleViteImages("cdmo_service_act2.png"),
    title: "Oncolytic Virus",
    path: "/cdmo/cgmp/oncolytic_virus",
    list: [
      "Oncolytic adenoviruses",
      "Oncolytic herpes simplex virus",
      "Oncolytic vaccinia viruses",
      "Oncolytic vesicular",
    ],
  },
  {
    imgUrl: handleViteImages("cdmo_service3.png"),
    actImgUrl: handleViteImages("cdmo_service_act3.png"),
    title: "Cell Line",
    headTit: "Autologous and homologous immunocyte therapies",
    path: "/cdmo/cgmp/cell_therapy_products",
    list: [
      "Autologous and homologous immunocyte therapies",
      "CAR-T Therapy",
      "NK Cell Therapy",
      "TCR-T Therapy",
      "DC Therapy",
      "ГóT Therapy",
      "Treg Therapy",
      "Stem Cell Therapy",
    ],
  },
  {
    imgUrl: handleViteImages("cdmo_service4.png"),
    actImgUrl: handleViteImages("cdmo_service_act4.png"),
    title: "Plasmid & Nucleotides",
    path: "/cdmo/cgmp/prasmid_nucleotides",
    list: [
      "Plasmid DNA",
      "Minicircle plasmids",
      "dsDNA",
      "ssDNA",
      "mRNA drug substance",
    ],
  },
]);
const croList = ref([
  {
    popLaboraId: 1,
    imgUrl: handleViteImages("croIcon1.png"),
    title: "Plasmid",
    text: `We offer assistance in designing,
constructing, and
manufacturing plasmids
for fuctional genomics
research, as well as 
providing expertise in
viral packaging.`,
  },
  {
    popLaboraId: 2,
    imgUrl: handleViteImages("croIcon2.png"),
    title: "Viral Vector",
    text: `We offer services
including the
design, construction, and
packaging of various
types of viral vectors.
We can also assist in
executing a diverse 
range of biomolecular
operations tailored to 
your specific gene of
interest.`,
  },
  {
    popLaboraId: 3,
    imgUrl: handleViteImages("croIcon3.png"),
    title: "Experiment Solutions",
    text: `We offer an extensive 
array of contract 
research services 
tailored to functional 
genomics studies.`,
  },
  {
    popLaboraId: 4,
    imgUrl: handleViteImages("croIcon4.png"),
    title: "Related Products",
    text: `We offer a 
comprehensive range of
in-stock virus vectors, 
proteins, gRNA libraries, 
and relevant reagents, 
catering to diverse 
research needs across 
various aspects of your 
project.`,
  },
  {
    popLaboraId: 5,
    imgUrl: handleViteImages("croIcon5.png"),
    title: "Extracellular Vesicle",
    text: `We offer extracellular vesicle services including isolation, 
identification, and functional 
research at the laboratory stage. Our scientists have successfully developed various isolation techniques for samples from different sources.
`,
  },
]);
const croLaboraList = reactive([
  {
    id: 1,
    title: "Plasmid",
    txt: `Artificial constructed plasmid DNA is one of the most commonly used vector tools for gene therapy research. 
    At OBiO, our reliable development team will help you design, construct and manufacture plasmids for functional genomics research and viral packaging. 
    We provide you with efficient vector construction services with a short delivery cycle, optimize your molecule cloning operations with reduced time and cost, and advance the progress of your research project. 
    All customized plasmid products are regulated with strict internal quality controls to ensure that our product fulfills your design requirements.`,
  },
  {
    id: 2,
    title: "Viral Vector",
    txt: `Viral vectors are widely used as gene transduction tools in biomedical research and gene therapy product development. 
    At OBiO, we provide the design, construction, and packaging services for adeno-associated virus, adenovirus, lentivirus, and retrovirus. 
    We will help you complete a variety of biomolecular operations for your gene of interest, including overexpression, interference, knock-out, cell marking, and physiological regulation.`,
  },
  {
    id: 3,
    title: "Experiment Solutions",
    txt: `We are committed to bridging resources for life science, so we provide a wide spectrum of contract research services for functional genomics studies, including stable producer cell line construction at laboratory phase, cell biology experiments, animal model construction, and parameter testing, as well as other specialty services for exosome, CRISPR/Cas9 library, and non-coding RNA.`,
  },
  {
    id: 4,
    title: "Related Products",
    txt: `In addition to our contract research service, we provide in-stock virus vectors, proteins, gRNA library, and relevant reagents, to meet your research demands.`,
  },
  {
    id: 5,
    title: "Extracellular Vesicle",
    txt: `Our services for extracellular vesicle include isolation, identification, and functional research at the laboratory stage. 
    For samples from different sources, our scientists have developed multiple isolation solutions that have been successfully applied in samples of cells, body fluids, and tissue exosomes, such as cerebrospinal fluid, urine, brain tissue, and liver.`,
  },
]);
function croPopLabora(id) {
  Labora.value = croLaboraList.find((i) => i.id === id) || {};
  dialogVisible.value = true;
}
type ViralItem = {
  id: number;
  imgUrl: string;
  title: string;
};
const ViralList = ref<ViralItem[]>([
  {
    id: 0,
    imgUrl: handleViteImages("cdmo_icon1.png"),
    title: "Focus",
  },
  {
    id: 1,
    imgUrl: handleViteImages("cdmo_icon2.png"),
    title: "Acceleration",
  },
  {
    id: 2,
    imgUrl: handleViteImages("cdmo_icon3.png"),
    title: "Standardization",
  },
  {
    id: 3,
    imgUrl: handleViteImages("cdmo_icon4.png"),
    title: "Team",
  },
]);

onMounted(() => {
  var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: true,
    live: true,
    callback: function (box) {},
    scrollContainer: null,
    resetAnimation: true,
  });

  wow.init();
  window.addEventListener("resize", setBannerHeight);
  setBannerHeight();
  handleInsightsType(1);
});

onUnmounted(() => {
  window.removeEventListener("resize", setBannerHeight);
});
const activeIndex = ref(-1);
function changeActive(index) {
  activeIndex.value = index;
}
function setBannerHeight() {
  BannerHeight.value = window.innerHeight;
}
const LaboraList = ref([
  {
    id: 0,
    title: "Dedication to Contract Development and Manufacturing Service",
    txt: `Strict Internal Data Management Comprehensive Patent System Professional Intellectual Property Protection`,
  },
  {
    id: 1,
    title: "Commercial Readiness from Technical Expertise",
    txt: `Advanced Process Development Technologies Large-Scale Manufacturing Capabilities Fully-Closed & Automated Downstream Purification`,
  },
  {
    id: 2,
    title: "Fully Regulatory Compliance",
    txt: `GMP-Compliant Facilities and Equipment Robust Quality Management System Comprehensive Quality Control Platform`,
  },
  {
    id: 3,
    title: "Trustful Expertise",
    txt: `10+ years of Experience in Gene and Cell Therapy Extensive Experience in IND-Enabling Support Responses at First Instance`,
  },
]);
const dialogVisible = ref(false);
const Labora = ref(<any>{});
function popLabora(id) {
  Labora.value = LaboraList.value.find((i) => i.id === id) || {};
  dialogVisible.value = true;
}
function handleClose() {
  Labora.value = {};
  dialogVisible.value = false;
}
</script>
<style lang="scss" scoped>
.banner-wrap {
  overflow: hidden;
  position: relative;
}
.overlay {
  z-index: 666;
}

.wrap-block {
  position: relative;
  padding-top: 54px;
}
.shaw-bg {
  background-repeat: no-repeat;
  background: no-repeat center/cover;
}
.home-facilities-mob .list .item {
  display: flex;
  justify-content: center;
}
#CROout {
  .service--box_link {
    height: 100%;
  }
  .service--box_link .service--box {
    padding: 1.5rem;
  }
  .service--box_link:hover .service--box {
    background-color: #fff;
  }
}
#callout {
  .service--box_link {
    height: 100%;
  }
  .service--box_link .service--box {
    padding: 1.5rem;
  }
}
@media (max-width: 765px) {
  #CROout {
    .service--box_link {
      height: 300px !important;
    }
  }
}
</style>
