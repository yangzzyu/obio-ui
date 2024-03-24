<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-03-21 16:32:40
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="lab-sciences">
    <Focus :focusObj="FocusData" />
    
    <section id="" class="cap-section hero-style-top cro-list mb-5">
      <el-col
        :xs="22"
        :sm="20"
        :md="20"
        :lg="20"
        :xl="22"
        style="margin: auto"
        class="container"
      >
        <h1 class="title-color font-size70 txt-bold p-title fontf8 mb-3 mt-5">
          Coming Soon
        </h1>
        <div
          class="cro-list-item row"
          v-for="(item, index) in releasesList"
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
            <p class="font-size24 iti textColor">
              {{ item.time }}
            </p>
            <h1 class="title fontf4 font-size28 title-color">
              {{ item.title }}
            </h1>
            <div class="font-size18 ut-s2">
              {{ item.content }}
            </div>
            <router-link
              :to="'/news-details/releases/' + item.id"
              class="read-more font-size18 fontf7"
              >Read More</router-link
            >
          </el-col>
        </div>
      </el-col>
    </section>
    <!-- <Events /> -->
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
  title: "Job Opening",
  hiddenXsImgUrl: handleViteImages("head_bg.jpg"),
  visibleXsImgUrl: handleViteImages("head_bg.jpg"),
  // hiddenXsImgUrl: handleViteImages("job_bg.png"),
  // visibleXsImgUrl: handleViteImages("job_bg.png"),
});
const dialogVisible = ref(false);
function handleClose() {
  Labora.value = {};
  dialogVisible.value = false;
}
const cdmoList = ref([
  {
    imgUrl: handleViteImages("job1.png"),
    actImgUrl: handleViteImages("job_act1.png"),
    title: "Core Values",
    text: `Everything we do is
driven by our values. We
lead with science, our
people, and doing the
right thing.
`,
  },
  {
    imgUrl: handleViteImages("job2.png"),
    actImgUrl: handleViteImages("job_act2.png"),
    title: "Diversity & Belonging",
    text: `Together is how we get
better. We are committed
to a culture that
embraces everyone.
`,
  },
  {
    imgUrl: handleViteImages("job3.png"),
    actImgUrl: handleViteImages("job_act3.png"),
    title: "Community",
    text: `Love your life in
Indianapolis. We are a
proud part of the
growing biotech hub
community.
`,
  },
  {
    imgUrl: handleViteImages("job4.png"),
    actImgUrl: handleViteImages("job_act4.png"),
    title: "Benefits",
    text: `Our people deserve the
best. We provide a
benefits package tha
ttruly rewards our team.
`,
  },
]);
const croList = ref([
  {
    imgUrl: handleViteImages("careers1.png"),
    title: "Vision by 2026:",
    text: `Providing client-centered and high-quality 
service as our commitment, we strive to 
become a world-leading gene and cell 
therapy CXO group. 
`,
  },
  {
    imgUrl: handleViteImages("careers2.png"),
    title: "Value:",
    text: `Customer Focus, Efficient Execution, 
Excellence, Innovation, Integrity.
`,
  },
  {
    imgUrl: handleViteImages("careers3.png"),
    title: "Original Aspiration：",
    text: `Developing gene therapies for the welfare of 
mankind by virtue of its in-house developed 
all-round technology platform, its R&D and GMP 
production centers (floorage: 15,000 ㎡), and its <text class="title-color txt-bold">77,000</text>
㎡  Lingang base (under construction), 
OBiO is dedicated to constantly accelerating 
gene therapies researches, drug discovery, 
pharmaceutical studies, clinical and commercial 
development of gene therapies

`,
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
    imgUrl: "",
  },
  {
    id: 2,
    title: "Stable Cell Line",
    txt: `At OBiO, we can help you construct a stable producer cell line with molecular operations such as knock-out, overexpression, or knock-down of your target gene.`,
    imgUrl: "",
  },
  {
    id: 3,
    title: "Animal Studies",
    txt: `We provide animal model construction for human disease, animal behavior study, pharmacodynamics, pharmacokinetic, and efficacy studies in experimental animals for a certain drug, gene of interest, or gene therapy product. `,
    imgUrl: "",
  },
  {
    id: 4,
    title: "In-stock viral vectors",
    txt: `In-stock viral vector plays as a handy tool in your radioactive labelling, physiological regulation, observation, and verification studies. We provide in stock adeno-associated virus as tools for experiments including optogenetics, chemical genetics, calcium/voltage indicator, neurotransmitter probe, and Cre/Flp recombinase.
To request a list of the available in-stock viral vector, please contact one of our professional technical support.`,
    imgUrl: "",
  },
  {
    id: 5,
    title: "In-stock protein and relevant reagents",
    txt: `We provide recombinant protein expression systems covering bacteria, yeast, mammalian cell and insect cell, meeting your varied bioengineering demands in protein functional research, protease preparation, therapeutics development, and medical diagnosis. We have optimized our manufacturing process starting from the construction of recombinant protein expression vector, and are able to express and purify your target recombinant protein with high quality standard. We can also offer recombinant protein expression services based on the vector you provided.`,
    imgUrl: "",
  },
  {
    id: 6,
    title: "gRNA library",
    txt: `We provide CRISPR knock-out (GeCKO V2) gRNA library and transcriptional activation (SAM) gRNA library for human and mouse genome, enabling genome-wide high throughput screening for functional gene. We also provide gRNA library customization services according to your research demand. `,
    imgUrl: "",
  },
]);
const releasesList = reactive([
  {
    id: 13,
    title: `Coming Soon`,
    time: "February 16th 2024",
    subhead: "",
    content: ``,
  }
]);
function popLabora(id) {
  // Labora.value = LaboraList.value.find((i) => i.id === id) || {};
  dialogVisible.value = true;
}
</script>

<style lang="scss" scoped>
.lab-sciences {
  overflow: hidden;
}
.culture-box {
  margin-top: -100px;
  position: relative;
}
.us-list-i:hover {
  .textColor {
    color: #fff;
  }
}
</style>
