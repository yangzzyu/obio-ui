<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-04-01 15:55:57
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="process">
    <div class="Process-Development-wrap">
      <el-col
        :xs="22"
        :sm="20"
        :md="20"
        :lg="20"
        :xl="22"
        style="margin: auto"
        class="container"
      >
        <div class="text font-size18 color666 cGMP-zIndex">
          <p>
            <span style="line-height: 2"
              >A thorough understanding of commercially viable manufacturing
              process is crucial to the successful submission of IND application
              for gene and cell therapy product. Adhering to the goal of
              “Developing robust and commercially viable manufacturing process”,
              we implement our core technologies to support various gene and
              cell therapy programs with diversified and flexible technology
              approaches, fully meeting the demands of clients at different
              stages.&nbsp;&nbsp;</span
            ><br />
            <span style="line-height: 2">&nbsp;</span><br />
            <span style="line-height: 2"
              >With the technical synergy of high throughput process development
              (HTPD) and design of experiments (DoE) approaches, we adopt the
              concept of Quality by Design (QbD) throughout the whole product
              life cycle, and facilitate a robust and reliable manufacturing
              process through identifying the critical process parameters. By
              our higher-than-standard requirements on internal quality control,
              we have established a comprehensive and rigorous testing and
              control system in line with regulatory requirements of multiple
              countries for different categories of gene and cell therapy
              products, providing a solid foundation for our clients to meet the
              application requirements.&nbsp;</span
            ><br />
            <span style="line-height: 2"></span>
          </p>
          <p>
            <br />
          </p>
        </div>
        <div class="cGMP-main-tab cGMP-zIndex">
          <div class="tcon ub ub-ac font-size24 fontf5">
            <div
              class="item ub ub-ac"
              tabidb="cGMPTgroup1"
              :class="activeProcessIndex == '1' ? 'active' : ''"
              @mouseenter="activeProcessIndex = '1'"
            >
              <span class="ub-f1">Upstream Process</span>
            </div>
            <div class="line"></div>
            <div
              class="item ub ub-ac"
              tabidb="cGMPTgroup2"
              :class="activeProcessIndex == '2' ? 'active' : ''"
              @mouseenter="activeProcessIndex = '2'"
            >
              <span class="ub-f1">Downstream Process</span>
            </div>
          </div>
        </div>
        <div class="cGMP-main-tab-group cGMP-zIndex">
          <div
            class="group"
            v-for="(item, index) in tabsData"
            :key="index"
            v-show="activeProcessIndex === item.id"
          >
            <div class="cGMP-title-t2">
              <div class="fontf7 font-size50 ct title-color">
                <span>{{ item.title }}</span>
              </div>
            </div>
            <div class="text font-size18 color666 cGMP-zIndex">
              <p style="margin-bottom: 30px">
                {{ item.pTxt }}
              </p>
              <el-row :gutter="20">
                <el-col
                  class="visible-xs-block"
                  :span="12"
                  :xs="22"
                  :sm="22"
                  :md="12"
                  :lg="12"
                  :xl="12"
                >
                  <img :src="item.imgUrl" alt="" srcset="" />
                </el-col>
                <el-col
                  :span="12"
                  :xs="22"
                  :sm="22"
                  :md="12"
                  :lg="12"
                  :xl="12"
                  class="cGMP-Process"
                >
                  <div
                    class="icon-list"
                    v-for="(i, k) in item.iconList"
                    :key="k"
                  >
                    <div class="icon-list-l">
                      <img :src="i.imgUrl" alt="" srcset="" />
                    </div>
                    <p>
                      {{ i.txt }}
                    </p>
                  </div>
                </el-col>
                <el-col
                  class="hidden-xs"
                  :span="12"
                  :xs="22"
                  :sm="22"
                  :md="12"
                  :lg="12"
                  :xl="12"
                >
                  <img :src="item.imgUrl" alt="" srcset="" />
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
        <div class="cGMP-title-t2">
          <div class="fontf7 font-size50 ct title-color">
            <span>Analytical Development</span>
          </div>
          <i class="bg"></i>
        </div>
        <div class="text font-size18 color666 cGMP-zIndex">
          <p>
            <span style="line-height: 2"
              >OBiO has established a comprehensive quality management system
              with analytical and testing technologies in compliance with NMPA,
              FDA, and EMA regulations and guidelines, supporting the
              development of various gene and cell therapy products with
              appropriate analytical methods.</span
            >
          </p>
          <p>
            <br />
          </p>
          <p>
            <span style="line-height: 2"
              >Based on the quality management system of cGMP manufacturing
              platform, and the physicochemical properties of different gene and
              cell therapy products, we have developed over 230 unique
              analytical methods, providing tailoring quality control for
              different products, and maximized guarantee for a successful
              project implementation. We have built a robust inspection system
              in accordance with the requirements of international regulatory
              agencies and implemented end-to-end process control and product
              release management.</span
            >
          </p>
          <p>
            <br />
          </p>
          <p>
            <span style="line-height: 2"
              >We follow a higher-than-industry internal standard in multiple
              assays. Namely, we have developed assays for trypsin residue
              (TryplE detection) and PEI residue to further improve the safety
              of gene and cell therapy product in clinical applications. In
              October 2019, we were invited to participate in the project for
              the verification of standard plasmid for lentivirus detection
              organized by WHO and National Institute for Biological Standards
              and Control of UK on behalf of Chinese enterprises.</span
            >
          </p>
          <p>
            <br />
          </p>
          <div class="process-mkid-ul">
            <el-row class="row">
              <el-col :sm="12"></el-col>
              <el-col
                :sm="12"
                v-for="(i, k) in mkidList"
                :key="k"
                class="item"
                :class="'item-' + k"
              >
                <div class="ub">
                  <div class="anm fontf5">{{ k + 1 }}</div>
                  <div class="ub-f1 txt">
                    <div class="ititle font-size24 fontf3">
                      {{ i.title }}
                    </div>
                    <ul>
                      <li v-for="(j, idx) in i.txtList" :key="idx">
                        <span class="color666">{{ j }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="cGMP-title-t1">
          <div class="fontf7 font-size50 ct">
            <span>Process Validation</span>
          </div>
          <i class="bg"></i>
        </div>
        <div class="text font-size18 color666 cGMP-zIndex">
          <el-row :gutter="20">
            <el-col
              :xs="22"
              :sm="10"
              :md="10"
              :lg="10"
              :xl="10"
              class="visible-xs-block uof"
            >
              <img
                :src="handleViteImages('validation_img.png')"
                align="right"
                width="586"
                alt=""
              />
            </el-col>
            <el-col :xs="24" :sm="14" :md="14" :lg="14" :xl="14">
              <div style="margin-right: 30px">
                <p style="line-height: 2">
                  We provide technology transfer, process characterization, and
                  process validation services based on your manufacturing
                  demands at different stages of the product life cycle. Through
                  the collection and evaluation of process data, our engineers
                  will ensure that the overall process flow will provide the
                  products in compliance with quality requirements. Our team are
                  equipped with in-depth insights into the effects and risks of
                  each step of the process, and the influences of critical
                  process parameters on critical quality attributes (CQA),
                  ensuring a consistent performance of an efficient and
                  successful process
                </p>
              </div>
            </el-col>
            <el-col
              :xs="24"
              :sm="10"
              :md="10"
              :lg="10"
              :xl="10"
              class="hidden-xs uof"
            >
              <img
                :src="handleViteImages('validation_img.png')"
                align="right"
                width="586"
                alt=""
              /> </el-col
          ></el-row>
        </div>
        <div class="pub-title pub-title-p ub ub-ver ub-pe">
          <i class="line"></i>
          <h1 class="fontf7 font-size50">For Global Customers</h1>
        </div>
        <div class="font-size18 pub-pal20" style="padding-top: 30px">
          <p style="line-height: 2">
            In sync with the growing global demand, we have initiated the
            construction of OBiO Intelli-M GMP manufacturing site with a
            footprint of 77,000 square meter (828,821 ft²) at Lin-Gang Free Trade Zone in
            Shanghai. Complemented by digitalized management system and enhanced
            manufacturing & testing facilities, OBiO Intelli-M will be able to
            capture diverse manufacturing needs and offer high-quality contract
            development and manufacturing services to customers worldwide.
            <br />
            <br />
            Stage 1 construction with 11 GMP production lines will be
            accomplished by 2023. The full site with 33 GMP production lines
            will be operating by 2025.
            <br />
            <br />
            At OBiO Intelli-M, we will provide our customers worldwide with
            following services:
          </p>
          <el-row>
            <el-col
              :span="12"
              :xs="22"
              v-for="(item, index) in IntelliMItemList"
              :key="index"
            >
              ● {{ item.txt }}
            </el-col>
          </el-row>
        </div>
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
  </div>
</template>

<script lang="ts" setup name="Process">
import { ref } from "vue";
import { handleViteImages } from "@/utils";
import { ArrowRight } from "@element-plus/icons-vue";
import { IntelliMItemList } from "./data/IntelliM";

const cellSource = ref(0);
const processSource = ref(0);
const analyticalSource = ref(0);
cellSource.value = 170;
processSource.value = 200;
analyticalSource.value = 500;

const activeIndex = ref(0);

const mkidList = ref([
  {
    title: "Analysis Experimenting",
    txtList: [
      "Quality-by-Design concept driven",
      `Preparation of analytical method development planning according to project requirements`,
      `Implementation of analytical method optimization experiment`,
    ],
  },
  {
    title: "Establish Analytical Method Scheme",
    txtList: [
      `Conduct research and survey on technical materials in
                        combination of regulatory requirements, references, and
                        the latest industry technology development.`,
      `Internal review of analytical method scheme`,
      `External review of analytical method scheme`,
    ],
  },
  {
    title: "Critical Quality Parameter Confirmation",
    txtList: [
      `Evaluation of critical quality parameters based on the
                        results from analytical method development`,
      `Internal review of analytical method scheme`,
      `External review of analytical method scheme`,
    ],
  },
  {
    title: "Analytical Method Validation",
    txtList: [
      `Method pre-validation, evaluation of method
                        suitability, accuracy, precision, limit of
                        quantification, and limit of detection`,
      `Validation of analytical method, and evaluation of
                        specificity, precision, accuracy, linearity range, limit
                        of quantification, limit of detection, and
                        durability`,
    ],
  },
  {
    title: "Development of Standard Operation Procedure (SOP)",
    txtList: [
      `Standard operation procedure of testing method`,
      `Testing standard development`,
    ],
  },
]);

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
const activeProcessIndex = ref("1");
const tabsData = ref([
  {
    id: "1",
    title: "Upstream Process",
    pTxt: ` Our versatile upstream process platform covers adherent and
                suspension cell culture technologies, large-scale transient
                transfection, and serum-free cell culture, fulfilling your
                differentiated upstream process development demands for gene and
                cell therapy products.`,
    imgUrl: handleViteImages("upstream_img.png"),
    iconList: [
      {
        imgUrl: handleViteImages("process_icon1.png"),
        txt: `Adherent cell culture: cell factories, microcarriers, fixed bed bioreactor, and roller bottles`,
      },
      {
        imgUrl: handleViteImages("process_icon2.png"),
        txt: `Serum-free suspension cell culture technologies with improved yield for adenovirus, adeno-associated virus, and lentivirus products`,
      },
      {
        imgUrl: handleViteImages("process_icon3.png"),
        txt: `Transient transfection at large-scale: 200 L suspension culture and 600 ㎡ (6,458 ft²) fixed bed culture`,
      },
      {
        imgUrl: handleViteImages("process_icon4.png"),
        txt: `	
Cell line development: 293 producer cell line (293A, 293T, and HEK293), Vero, Hela, CHO, A549, and Sf9`,
      },
      {
        imgUrl: handleViteImages("process_icon5.png"),
        txt: `High-yield cell line domestication based on HEK293, with a 30% yield improvement than commercial HEK293. Further cell line development is still in process`,
      },
    ],
  },
  {
    id: "2",
    title: "Downstream Process",
    pTxt: `At OBiO, our downstream process platform includes chromatography and
            ultrafiltration technologies. We have established a downstream
            process platform for a convenient large-scale purification and
            process scale-up with a wide spectrum of technologies including
            ion-exchange chromatography, hydrophobic interaction chromatography,
            affinity chromatography, molecular exclusion chromatography and
            crossflow ultrafiltration. With the integrated downstream process
            platform, we offer a high throughput, high yield purification
            process with high quality standard for your gene and cell therapy
            product.`,
    imgUrl: handleViteImages("downstream_img.png"),
    iconList: [
      {
        imgUrl: handleViteImages("downstream_icon1.png"),
        txt: `
    Harvest Process: cell lysis, clarification, and filtration`,
      },
      {
        imgUrl: handleViteImages("downstream_icon2.png"),
        txt: `Column Chromatography: affinity chromatography, gel filtration chromatography, ion-exchange chromatography, mixed-mode chromatography`,
      },
      {
        imgUrl: handleViteImages("downstream_icon3.png"),
        txt: `	
Tangential Flow Filtration: flat sheet membrane cassette, hollow fibers`,
      },
      {
        imgUrl: handleViteImages("downstream_icon4.png"),
        txt: `
    Linear Scale-up of Purification Process`,
      },
      {
        imgUrl: handleViteImages("downstream_icon5.png"),
        txt: `Product Formulation Development`,
      },
    ],
  },
]);
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
</style>

<style lang="scss" scoped>
.cGMP-Process {
  .icon-list {
    display: flex;
    align-items: center;
    padding: 10px 0;
    .icon-list-l {
      width: 15%;
      margin-right: 10px;
      text-align: center;
    }
    p {
      width: 85%;
    }
    img {
      max-width: 100%;
    }
  }
}
</style>
