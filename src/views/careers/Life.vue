<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-03-21 11:07:54
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="lab-sciences">
    <Focus :focusObj="FocusData" />
    <section class="culture-box hero-style-top">
      <el-col
        :xs="22"
        :sm="20"
        :md="20"
        :lg="20"
        :xl="22"
        style="margin: auto"
        class="container"
      >
        <h1 class="title-color font-size70 txt-bold section-title fontf8">
          Life at OBiO
        </h1>
        <h2 class="title-color our-txt font-size30 section-title fontf7">
          As OBiO Tech swiftly evolves, every OBiOers are immersed in an
          environment fostering "enhanced capabilities, purposeful work, and a
          fulfilling life."
        </h2>
        <ul class="font-size24 textColor">
          <li>Enhanced Capabilities</li>
          <li>Competitive compensation and benefits</li>
          <li>
            Opportunities for training, rotation, and continuous education
          </li>
          <li>Empowerment, accountability, and value creation</li>
          <li>
            Work-Life Balance: A harmonious blend of professional and personal
            pursuits
          </li>
        </ul>
        <p class="font-size24 textColor" style="margin-bottom: 20px">
          This encapsulates our vibrant company culture, where every moment is
          an opportunity for growth and fulfillment.
        </p>
      </el-col>
    </section>
    <div
      class="in-about-wrap training-box"
      v-for="(item, index) in lifeList"
      :key="index"
    >
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
            {{ item.title }}
          </h1>

          <div class="fac-con">
            <el-row class="row" :gutter="10">
              <el-col
                :xs="24"
                :span="6"
                class=""
                v-for="(i, index) in item.imgList"
                :key="index"
              >
                <div class="manufacturing-list bg-pinkbluelfr">
                  <div class="content">
                    <img :src="i" alt="" srcset="" />
                  </div>
                </div>
              </el-col>
            </el-row></div
        ></el-col>
      </div>
    </div>
    <!-- All Hands Meetin -->
    <section id="meetin" class="meetin-container">
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
          All Hands Meetin
        </h1>
        <el-col :xs="24" :span="20" style="margin: auto" class="container">
          <img
            src="@/assets/icons/meetin_bg.png"
            width="100%"
            alt=""
            srcset=""
            class="mb-5" /></el-col
      ></el-col>
    </section>
    <div class="in-about-wrap training-box">
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
            Football matches
          </h1>

          <div class="fac-con">
            <el-row class="row" :gutter="10">
              <el-col
                :xs="24"
                :span="12"
                class=""
                v-for="(i, index) in footballList"
                :key="index"
              >
                <div class="manufacturing-list bg-pinkbluelfr">
                  <div class="content">
                    <img :src="i" alt="" srcset="" width="100%" />
                  </div>
                </div>
              </el-col>
            </el-row></div
        ></el-col>
      </div>
    </div>
    <section id="Seeout1" class="">
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
          Life at OBiO video
        </h1>
        <el-row :gutter="20" class="mb-4">
          <el-col :span="12" :xs="24">
            <div class="manufacturing-list bg-pinkbluelfr video-list">
              <div class="content">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/HQsTy3PhfNI?si=9tfNQvuwp8NnbYL-"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <p class="video-p font-size20 textColor">
                  Exciting Milestone: OBiO Lingang Facility Launches Operations
                  in 2023!
                </p>
              </div>
            </div></el-col
          >
          <el-col :span="12" :xs="24">
            <div class="manufacturing-list bg-pinkbluelfr video-list">
              <div class="content">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/rmq1Vp3zZFg?si=mikql8NjYHJ56uFj"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>

                <p class="video-p font-size20 textColor">
                  Exciting Milestone: OBiO Lingang Facility Launches Operations
                  in 2023!
                </p>
              </div>
            </div></el-col
          >
        </el-row>
      </el-col>
    </section>
  </div>

  <el-dialog
    v-model="dialogVisible"
    title=""
    width="60%"
    :before-close="handleClose"
  >
    <!-- <span>This is a message</span> -->
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
    <!-- <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </span>
    </template> -->
  </el-dialog>
</template>

<script lang="ts" setup name="LabSciences">
import { reactive, ref } from "vue";
import Focus from "@/components/Focus.vue";
import Events from "@/components/Events.vue";
import { handleViteImages, goRouter } from "@/utils";

const FocusData = ref({
  title: "Life in OBIO",
  hiddenXsImgUrl:
     handleViteImages('@/assets/icons/head_bg.png'),
  visibleXsImgUrl:
     handleViteImages('@/assets/icons/head_bg.png'),
  // hiddenXsImgUrl: handleViteImages("@/assets/icons/head_bg3.png"),
  // visibleXsImgUrl: handleViteImages("@/assets/icons/head_bg3.png"),
});
const dialogVisible = ref(false);
function handleClose() {
  Labora.value = {};
  dialogVisible.value = false;
}
const internshipList = reactive([
  handleViteImages("@/assets/icons/carousel_bg1.jpg"),
  handleViteImages("@/assets/icons/carousel_bg1.jpg"),
  handleViteImages("@/assets/icons/carousel_bg1.jpg"),
  handleViteImages("@/assets/icons/carousel_bg1.jpg"),
]);
const footballList = reactive([
  handleViteImages("@/assets/icons/football1.jpg"),
  handleViteImages("@/assets/icons/football1.jpg"),
]);
type ViralItem = {
  id: number;
  imgUrl: string;
  title: string;
  path: string;
};
const ViralList = ref<ViralItem[]>([
  {
    id: 0,
    imgUrl: handleViteImages("@/assets/icons/cdmo_icon1.png"),
    title: "Focus",
    path: "/process",
  },
  {
    id: 1,
    imgUrl: handleViteImages("@/assets/icons/cdmo_icon2.png"),
    title: "Acceleration",
    path: "/cgmp",
  },
  {
    id: 2,
    imgUrl: handleViteImages("@/assets/icons/cdmo_icon3.png"),
    title: "Standardization",
    path: "/quality",
  },
  {
    id: 3,
    imgUrl: handleViteImages("@/assets/icons/cdmo_icon4.png"),
    title: "Team",
    path: "/logistics",
  },
]);
const croList = ref([
  {
    imgUrl: handleViteImages("@/assets/icons/croIcon1.png"),
    title: "Vision by 2026:",
    text: `Providing client-centered and high-quality 
service as our commitment, we strive to 
become a world-leading gene and cell 
therapy CXO group. 
`,
  },
  {
    imgUrl: handleViteImages("@/assets/icons/croIcon2.png"),
    title: "Value:",
    text: `Customer Focus, Efficient Execution, 
Excellence, Innovation, Integrity.
`,
  },
  {
    imgUrl: handleViteImages("@/assets/icons/croIcon3.png"),
    title: "Original Aspiration：",
    text: `Developing gene therapies for the welfare ofmankind by virtue of its in-house developedall-round technology platform, its R&D and GMPproduction centers (floorage: 15,000 m2), and its77,000 m2 Lingang base (under construction),0Bi0 is dedicated to constantly acceleratinggene therapies researches, drug discovery,.pharmaceutical studies, clinical and commercialdevelopment of gene therapies`,
  },
]);
const Labora = ref(<any>{});
const LaboraList = ref([
  {
    id: 1,
    title: "Cell Biology",
    txt: `We provide services for cytology experiment to verify cellular
            functions like proliferation, migration, and apoptosis. We can also
            conduct Western blot experiment to determine protein expression
            level, qPCR for RNA determination in addition to SEM inspection,
            particle diameter analysis and pathological examination.`,
    imgUrl:
      "https://www.obio-tech.com/public/uploads/image/20220328/20220328151428_83605.jpg",
  },
  {
    id: 2,
    title: "Stable Cell Line",
    txt: `At OBiO, we can help you construct a stable producer cell line with molecular operations such as knock-out, overexpression, or knock-down of your target gene.`,
    imgUrl:
      "https://www.obio-tech.com/public/uploads/image/20220328/20220328151533_63357.jpg",
  },
  {
    id: 3,
    title: "Animal Studies",
    txt: `We provide animal model construction for human disease, animal behavior study, pharmacodynamics, pharmacokinetic, and efficacy studies in experimental animals for a certain drug, gene of interest, or gene therapy product. `,
    imgUrl:
      "https://www.obio-tech.com/public/uploads/image/20220328/20220328151717_86002.jpg",
  },
  {
    id: 4,
    title: "In-stock viral vectors",
    txt: `In-stock viral vector plays as a handy tool in your radioactive labelling, physiological regulation, observation, and verification studies. We provide in stock adeno-associated virus as tools for experiments including optogenetics, chemical genetics, calcium/voltage indicator, neurotransmitter probe, and Cre/Flp recombinase.
To request a list of the available in-stock viral vector, please contact one of our professional technical support.`,
    imgUrl:
      "https://www.obio-tech.com/public/uploads/image/20220328/20220328151702_80624.jpg",
  },
  {
    id: 5,
    title: "In-stock protein and relevant reagents",
    txt: `We provide recombinant protein expression systems covering bacteria, yeast, mammalian cell and insect cell, meeting your varied bioengineering demands in protein functional research, protease preparation, therapeutics development, and medical diagnosis. We have optimized our manufacturing process starting from the construction of recombinant protein expression vector, and are able to express and purify your target recombinant protein with high quality standard. We can also offer recombinant protein expression services based on the vector you provided.`,
    imgUrl:
      "https://www.obio-tech.com/public/uploads/image/20220328/20220328152007_37456.jpg",
  },
  {
    id: 6,
    title: "gRNA library",
    txt: `We provide CRISPR knock-out (GeCKO V2) gRNA library and transcriptional activation (SAM) gRNA library for human and mouse genome, enabling genome-wide high throughput screening for functional gene. We also provide gRNA library customization services according to your research demand. `,
    imgUrl:
      "https://www.obio-tech.com/public/uploads/image/20220328/20220328151955_77566.jpg",
  },
]);
function popLabora(id) {
  Labora.value = LaboraList.value.find((i) => i.id === id) || {};
  dialogVisible.value = true;
}
const lifeList = reactive([
  {
    title: "Training and Internship",
    imgList: [
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
    ],
  },
  {
    title: "Team Building",
    imgList: [
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
    ],
  },
  {
    title: "Life at OBiO",
    imgList: [
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
    ],
  },
  {
    title: "Mother's Day",
    imgList: [
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
    ],
  },
  {
    title: "Children's Day",
    imgList: [
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
    ],
  },
  {
    title: "Father's Day",
    imgList: [
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
    ],
  },
  {
    title: "Holiday party - Christmas",
    imgList: [
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
    ],
  },
  {
    title: "Charity Events - Walking 50KM",
    imgList: [
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
      handleViteImages("@/assets/icons/carousel_bg1.jpg"),
    ],
  },
]);
</script>

<style lang="scss" scoped>
.culture-box {
  margin-top: -100px;
  position: relative;
}
.training-box {
  margin: 0;
}
</style>
