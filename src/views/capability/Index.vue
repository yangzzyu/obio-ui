<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-03-28 11:07:01
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="cap-sciences">
    <Focus :focusObj="FocusData" />
    <section id="cap" class="cap-section hero-style-top">
      <el-col
        :xs="22"
        :sm="20"
        :md="20"
        :lg="20"
        :xl="22"
        style="margin: auto"
        class="container"
      >
        <h1 class="title-color font-size50 txt-bold section-title fontf8">
          Why Us
        </h1>
        <h2 class="title-color our-txt font-size30 section-title fontf7">
          Core“hard strength”+ “soft strength” for accelerating the development
          process of CGT drugs
        </h2>
        <el-row class="news--slider row us-list" :gutter="10">
          <el-col
            :xs="24"
            :span="4"
            class="news--slider-i us-list-i"
            v-for="(item, index) in cdmoList"
            :key="index"
          >
            <a class="block tans service--box_link bg-pinkbluelfr">
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
                <p class="textColor font-size18">{{ item.text }}</p>
              </div>
            </a>
          </el-col>
        </el-row></el-col
      >
    </section>
    <div class="in-about-wrap industrialize-box">
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
            Industrialize Your Product
          </h1>

          <div class="fac-con">
            <el-row class="row" :gutter="10">
              <el-col
                :xs="24"
                :span="6"
                class=""
                v-for="(item, index) in industrializeList"
                :key="index"
              >
                <div class="manufacturing-list">
                  <div class="content">
                    <img :src="item.imgUrl" alt="" srcset="" />
                  </div>
                </div>
                <div class="font-size18 fontf7 iti">
                  {{ item.title }}
                </div>
                <ul class="txt-ul">
                  <li
                    class="font-size18 txt-bold textColor"
                    v-for="(i, idx) in item.txtList"
                    :key="idx"
                  >
                    {{ i }}
                  </li>
                </ul>
                <router-link
                  :to="item.path"
                  class="read-more font-size18 fontf7 mt-3"
                  >Read More</router-link
                >
              </el-col>
            </el-row>
          </div></el-col
        >
      </div>
    </div>
    <section class="our-box mb-5">
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
          Our Commitment: FAST
        </h1>
        <el-row class="our-box-content" :gutter="60">
          <el-col :span="8" :xs="24" class="left-content">
            <img
              class="img"
              :src="handleViteImages('Viral_Vector_bg3.png')"
              alt=""
            />
          </el-col>
          <el-col :span="16" :xs="24" class="font-size20 news-list">
            <div class="content-i" v-for="(i, idx) in ourList" :key="idx">
              <h3 class="title-color font-size30 fontf8">{{ i.title }}</h3>
              <p class="font-size18 textColor">
                {{ i.text }}
              </p>
            </div>
          </el-col>
        </el-row></el-col
      >
    </section>
    <Events />
    <Career />
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
        <p style="text-align: center">
          <img :src="Labora.imgUrl" :alt="Labora.title" />
        </p>
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup name="LabSciences">
import { ref, reactive } from "vue";
import Focus from "@/components/Focus.vue";
import Events from "@/components/Events.vue";
import Career from "@/components/Career.vue";
import { handleViteImages, goRouter } from "@/utils";

const FocusData = ref({
  title: "Capability & Commitment",
  hiddenXsImgUrl: handleViteImages("head_bg.jpg"),
  visibleXsImgUrl: handleViteImages("head_bg.jpg"),
});
const dialogVisible = ref(false);
function handleClose() {
  Labora.value = {};
  dialogVisible.value = false;
}
const cdmoList = ref([
  {
    imgUrl: handleViteImages("cap1.png"),
    actImgUrl: handleViteImages("cap_act1.png"),
    text: `Experienced experts with
over 10 years in GCT,
ensuring timely
support across the
product lifecycle.
`,
  },
  {
    imgUrl: handleViteImages("cap2.png"),
    actImgUrl: handleViteImages("cap_act2.png"),
    text: `Efficient technology
transfer with optimized
process validation
`,
  },
  {
    imgUrl: handleViteImages("cap3.png"),
    actImgUrl: handleViteImages("cap_act3.png"),
    text: `State-of-the-art facilities
with cGMP compliant
quality systems
`,
  },
  {
    imgUrl: handleViteImages("cap4.png"),
    actImgUrl: handleViteImages("cap_act4.png"),
    text: `130+ process
development projects,
230+ analytical
methods developed.
`,
  },
  {
    imgUrl: handleViteImages("cap5.png"),
    actImgUrl: handleViteImages("cap_act5.png"),
    text: `High standard and
comprehensive quality
controls.
`,
  },
  {
    imgUrl: handleViteImages("cap6.png"),
    actImgUrl: handleViteImages("cap_act6.png"),
    text: `End-to-End regulatory
support with guided
navigation
`,
  },
]);
const industrializeList = reactive([
  {
    imgUrl: handleViteImages("industrialize1.png"),
    title: `Development: Efficient and Customized Process Development with
                  BoardProduct Spectrum`,
    path: "/process",
    txtList: [
      "Upstream Process",
      "Downstream Process",
      "Analytical Developmen",
      "Process Validation",
    ],
  },
  {
    imgUrl: handleViteImages("industrialize2.png"),
    title: `cGMP Manufacturing: Flexible Large-Scale GMP Manufacturing
                  Platform:`,
    path: "/cgmp",
    txtList: [
      "End-to-End Offerin",
      "Pre-IND services",
      "Post-IND service",
      "Capacity for Global",
    ],
  },
  {
    imgUrl: handleViteImages("industrialize3.png"),
    title: `Quality & Regulatory: 
International Compliant
Quality Control System`,
    path: "/quality",
    txtList: [
      " De-risk Your Regulatory Pathway",
      `We provide e-CTD ready 
CMC related documents writing 
and review for your submission:`,
      "Analytical Developmen",
    ],
  },
  {
    imgUrl: handleViteImages("industrialize4.png"),
    title: `Cold Chain Logistic: 
Traceable 
Cold-Chain Logistics with 
Controllable Risk`,
    path: "/logistics",
    txtList: [
      ` Preserve gene and cell 
therapy products integrity and 
ensure timely delivery within 
specified temperature ranges. `,
    ],
  },
]);
const croList = ref([
  {
    imgUrl: handleViteImages("croIcon1.png"),
    title: "Plasmid",
    text: `At 0Bi0, our dedicateddevelopment team iscommitted to assistingyou in designing,constructing, andmanufacturing plasmidsfor fuctional genomicsresearch, as well asproviding expertise inviral packaging.`,
  },
  {
    imgUrl: handleViteImages("croIcon2.png"),
    title: "Viral Vector",
    text: `We specialize in offeringcomprehensive servicesencompassing thedesign, construction, andpackaging of varioustypes of viral vectors.Additionally, we assist inexecuting a diverserange of biomolecularoperations tailored toyour specific gene ofinterest, ensuringthorough supportthroughout the process.`,
  },
  {
    imgUrl: handleViteImages("croIcon3.png"),
    title: "Experiment Solutions",
    text: `We offer an extensivearray of contractresearch servicestailored for functionalgenomics studies.`,
  },
  {
    imgUrl: handleViteImages("croIcon4.png"),
    title: "Related Products",
    text: `We offer a comprehensive range ofin-stock virus vectors,proteins, gRNA libraries.and relevant reagents,catering to diverse research needs acrossvarious aspects of your project.`,
  },
  {
    imgUrl: handleViteImages("croIcon5.png"),
    title: "Extracellular Vesicle",
    text: `Our services for extracellularvesicle include isolation,identification, and functionalresearch at the laboratory stage.For samples from differentsources, our scientist team hasdeveloped multiple isolationsolutions which have beensuccessfully applied in samplesof cells, body fluids and tissueexosomes such as cerebrospinalfluid, urine, brain tissue and liver.`,
  },
]);
const Labora = ref(<any>{});
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

<style lang="scss" scoped>
.cap-section {
  margin-top: -100px;
  position: relative;
}
.us-list {
  .service--box_link {
    height: 300px;
  }
}
.us-list-i:hover {
  .textColor {
    color: #fff;
  }
}
.industrialize-box {
  margin: 0;
}
@media (max-width: 765px) {
  .us-list {
  .service--box_link {
    height: 200px !important;
  }
}
}
</style>
