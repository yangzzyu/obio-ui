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
              <p class="font-size18 fontf7 cro-p textColor">
                OBiO Technology leads the way in gene and cell therapy as a pioneering Contract Research Organization (CRO) and Contract Development and Manufacturing Organization (CDMO), dedicated to providing comprehensive solutions. Guided by our mission to "enable gene therapy for better lives," we prioritize delivering top-tier services worldwide. From laboratory to clinic, we continuously advance your products, positively impacting populations worldwide. 
              </p>
              <p class="font-size18 fontf7 cro-p textColor">
                OBiO Tech leverages a decade of industry expertise, dedicated exclusively to advancing gene and cell therapies. Through unwavering commitment and the trust of our clientele, we've facilitated the progression of over 150 gene and cell therapy initiatives, with 25 programs achieving approval for clinical trials in both the US and China by April 2023.
              </p>
              <p class="font-size18 fontf7 cro-p textColor">
                Our comprehensive suite of services encompasses plasmids, mRNA, AAV vectors, oncolytic viruses, immuno cell therapies, stem cells, and more, enabling us to cater to diverse client needs. Bolstered by state-of-the-art cGMP facilities, the largest of their kind in the Asian Pacific region, we offer unparalleled proficiency and capacity, poised to drive success for clients worldwide.
              </p>
            </div>
            <h1 class="title-color font-size50 txt-bold section-title fontf8">
              Our Solutions
            </h1>
            <h2 class="title-color our-txt font-size30 section-title fontf7">
              Manufacturing Facilities
            </h2>
            <div class="content">
              <p class="font-size18 fontf7 cro-p textColor">
                As a trusted Contract Development and Manufacturing Organization (CDMO), we understand that flexible capacities and regulatory-compliant facilities are essential for delivering top-tier services to gene and cell therapy developers. To cater to our global clientele, we've strategically established an integrated research platform spanning over 5,000 ㎡ (53,819 ft²) and a GMP footprint exceeding 10,000 ㎡ (107,639 ft²) at the Shanghai International Medical Park. Additionally, our GMP manufacturing site, sprawling across 77,000 ㎡ (828,821 ft²) , is located at the Lin-Gang Free-Trade Zone.
              </p>
              <p class="font-size18 fontf7 cro-p textColor">
                With our strategic footprint across these three locations, we are poised to provide high-quality contract research and manufacturing services to meet the diverse needs of our clients worldwide.
              </p>
            </div>
            <div class="fac-con">
              <el-row class="row" :gutter="10">
                <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" class="">
                  <div class="manufacturing-list bg-pinkbluelfr">
                    <div class="content">
                      <img
                        :src="handleViteImages('facilities1.jpg')"
                        alt="OBiO Intelli-M"
                      />
                    </div>
                  </div>
                  <div class="font-size18 fontf7 iti">
                    Lin-Gang Free-Trade Zone
                  </div>
                  <div class="font-size30 fontf7 iti">OBiO Intelli-M</div>
                  <p class="font-size18 textColor txt-bold">
                    Process Development Characterization Clinical and Commercial
                    Manufacturing.
                    <text class="title-color txt-bold">77,000</text
                    > ㎡ (828,821 ft²) Facility for Global Supply
                  </p>
                  <router-link
                    to="/about/facilities/intellim"
                    class="read-more font-size18 fontf7"
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
                    International Medical Park
                  </div>
                  <div class="font-size30 fontf7 iti">SPIRO Site</div>

                  <p class="font-size18 textColor txt-bold">
                    Integrated Laboratory Services Processand Analytical Method
                    Development. Research and Development Center
                  </p>
                  <router-link
                    to="/about/facilities/spiro"
                    class="read-more font-size18 fontf7"
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
                  <div class="font-size18 fontf7 iti">
                    International Medical Park
                  </div>
                  <div class="font-size30 fontf7 iti">PINE Site</div>
                  <p class="font-size18 textColor txt-bold">
                    Process and Analytical Method Development. Pre-clinical and
                    Clinical Manufacturing. Three-building,
                    <text class="title-color txt-bold">10,000</text
                    > ㎡ (107,639 ft²) campus
                  </p>
                  <router-link
                    to="/about/facilities/pine"
                    class="read-more font-size18 fontf7"
                    >Read More</router-link
                  >
                </el-col>
              </el-row>
            </div></el-col
          >
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
          <h1 class="p-title font-size30 txt-bold fontf8 mb-3 mt-5">
            CDMO Service
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
              :span="16"
              :xs="24"
              class="cdmo-txt bg-pinkbluelfr font-size24 fontf3"
              >We provide comprehensive CDMO services encompassing process
              development, analytical methods, IND-enabling CMC (Chemistry,
              Manufacturing, and Controls), as well as clinical and commercial
              manufacturing for viral vector, oncolytic virus, and cell therapy
              products. Our expertise extends to offering holistic solutions
              tailored to support the industrialization and commercialization of
              various products at the Pre-IND stage and beyond.</el-col
            >
            <el-col :span="8" :xs="24" class="hidden-xs">
              <div
                class="image--callout_image"
                style="
                  background-image: url(https://obio-tech.com/obio-img/life/WechatIMG522.jpg);
                "
              ></div>
            </el-col>
          </el-row>

          <el-row class="news--slider row" :gutter="10">
            <el-col
              :xs="24"
              :span="6"
              class="news--slider-i"
              v-for="(item, index) in cdmoList"
              :key="index"
            >
              <router-link
                to="/about/facilities/spiro"
                class="block tans service--box_link bg-pinkbluelfr"
              >
                <div class="service--box align-items-start">
                  <div class="service--box_icon mb-3 min-width-70">
                    <img
                      class="icon--white"
                      :src="item.actImgUrl"
                      alt="GMP Vector Manufacturing icon"
                    />
                    <img
                      class="icon--colour"
                      :src="item.imgUrl"
                      alt="GMP Vector Manufacturing icon"
                    />
                  </div>
                  <div class="font-bold p-large mb-3 font-size24 fontf8">
                    {{ item.title }}
                  </div>
                  <div style="height: 200px" class="cdmo-cont">
                    <ul class="txt-ul">
                      <li
                        v-for="(i, idx) in item.list"
                        :key="idx"
                        class="fontf2 font-size18"
                      >
                        {{ i }}
                      </li>
                    </ul>
                  </div>
                  <router-link
                    :to="item.path"
                    class="mt-auto flex-shrink-0 btn--underline blog-btn font-size18 fontf7"
                    >Read More</router-link
                  >
                </div>
              </router-link>
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
          <h1 class="p-title font-size30 txt-bold fontf8 mb-0 mt-5">
            CRO Service
          </h1>
          <div class="wysiwyg--content colour-white mb-3">
            <p class="textColor fontf4 font-size24">
              OBiO provides an integrated portfolio of plasmid construction,
              viral packaging, <br />
              cell biology and animal study services for biomedical researchers
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
                    <!-- <img class="icon--white" :src="item.actImgUrl" alt="GMP Vector Manufacturing icon" /> -->
                    <!-- class="icon--colour" -->
                    <img
                      :src="item.imgUrl"
                      alt="GMP Vector Manufacturing icon"
                    />
                  </div>
                  <p class="textColor font-size18">{{ item.text }}</p>
                  <a
                    @click="croPopLabora(item.popLaboraId)"
                    class="read-more font-size18 fontf7 service--box-a"
                    style="cursor: pointer"
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
          <h1 class="p-title font-size50 txt-bold fontf8 mb-3 mt-3">
            See Our Capabilities
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
      <Career />
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
    title: "Cell Therapy Products",
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
    text: `At OBiO, our dedicated
development team is
committed to assisting
you in designing,
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
    text: `We specialize in offering
comprehensive services
encompassing the
design, construction, and
packaging of various
types of viral vectors.
Additionally, we assist in
executing a diverse 
range of biomolecular
operations tailored to 
your specific gene of
interest, ensuring
thorough support
throughout the process.`,
  },
  {
    popLaboraId: 3,
    imgUrl: handleViteImages("croIcon3.png"),
    title: "Experiment Solutions",
    text: `We offer an extensive 
array of contract 
research services 
tailored for functional 
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
    text: `Our services for extracellular vesicle include isolation, 
identification, and functional 
research at the laboratory stage. For samples from different sources, our scientist team has developed multiple isolation solutions which have been 
successfully applied in samples of cells, body fluids and tissue exosomes such as cerebrospinal fluid, urine, brain tissue and liver.
`,
  },
]);
const croLaboraList = reactive([
  {
    id: 1,
    title: "Plasmid",
    txt: `Artificial constructed plasmid DNA is one of the most commonly used vector tools for gene therapy research. At OBiO, our reliable development team will help you design, construct and manufacture plasmid for functional genomics research and viral packaging. We provide you with efficient vector construction services in a shorten delivery cycle, optimize your molecule cloning operation with reduced time and cost, and advance the progress of your research project. All customized plasmid products are regulated with strict internal quality controls to ensure that our product fulfills your design requirements.`,
  },
  {
    id: 2,
    title: "Viral Vector",
    txt: `Viral vectors are widely used as gene transduction tools in biomedical research and gene therapy product development. At OBiO, we provide the design, construction and packaging services for adeno-associated virus, adenovirus, lentivirus, and retrovirus. We will help you complete a variety of biomolecular operations for your gene of interest, including overexpression, interference, knock-out, cell marking and physiological regulation, fully meeting your diversified demands in your study.`,
  },
  {
    id: 3,
    title: "Experiment Solutions",
    txt: `“Bridging resources for life science” as our commitment, we provide a wide spectrum of contract research services for functional genomics studies including stable producer cell line construction at laboratory phase, cell biology experiments, animal model construction, and parameter testing, as well as other specialty services for exosome, CRISPR/Cas9 library and non-coding RNA.`,
  },
  {
    id: 4,
    title: "Related Products",
    txt: `In addition to our contract research service, we provide in-stock virus vectors, proteins, gRNA library, and relevant reagent, meeting your research demand from different aspects.`,
  },
  {
    id: 5,
    title: "Extracellular Vesicle",
    txt: `Our services for extracellular vesicle include isolation, identification, and functional research at the laboratory stage. For samples from different sources, our scientist team has developed multiple isolation solutions which have been successfully applied in samples of cells, body fluids and tissue exosomes such as cerebrospinal fluid, urine, brain tissue and liver.`,
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
    height: 550px;
  }
  .service--box_link .service--box {
    padding: 0.5rem;
  }
  .service--box_link:hover .service--box {
    background-color: #fff;
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
