<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-03-21 13:58:20
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="lab-sciences">
    <Focus :focusObj="FocusData" />
    <!-- <div class="top-txt">
        <el-col
          :xs="22"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
          class="container"
        >
          <div class="text font-size20 color666">
            <p>
              <span style="line-height: 2"
                >At OBiO, we provide vector design, viral packaging and
                functional genomics research services for academic researchers
                and gene therapy developers at pre-clinical stage. Our
                professional team of scientists will help you address the
                obstacles in your biomedical research and continuously improve
                your existing products.</span
              >
            </p>
          </div>
        </el-col>
      </div> -->
    <section id="cro" class="cro-list">
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
            <el-col :xs="24" :span="18">
              <h1 class="font-size50 fontf8 iti item-tit">
                {{ item.title }}
              </h1>
              <p class="font-size24 cro-p textColor">
                {{ item.text }}
              </p>
              <router-link to="/spiroSite" class="font-size18 fontf7 btn-a mt-2"
                >Read More</router-link
              ></el-col
            >
          </el-row>
        </el-col>
      </div>
    </section>
    <Events />
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
import { ref } from "vue";
import Focus from "@/components/Focus.vue";
import Events from "@/components/Events.vue";
import { handleViteImages, goRouter } from "@/utils";

const FocusData = ref({
  title: "CRO Service",
  hiddenXsImgUrl: handleViteImages("@/assets/icons/head_bg.jpg"),

  // "https://www.obio-tech.com/public/uploads/20220402/39c0eb1d2e5cf6c9f1d40cc78ce30544.jpg",
  visibleXsImgUrl: handleViteImages("@/assets/icons/head_bg.jpg"),

  // "https://www.obio-tech.com/public/uploads/20220402/c513fa4925451a1f43f4227509d942c3.jpg",
});
const dialogVisible = ref(false);
function handleClose() {
  Labora.value = {};
  dialogVisible.value = false;
}
const croList = ref([
  {
    imgUrl: handleViteImages("@/assets/icons/cro1.png"),
    title: "Plasmid",
    text: `At OBiO, our dedicated development team is
committed to assisting you in designing,
constructing, and manufacturing plasmids
for fuctional genomics research, as well as 
providingexpertise in viral packaging.`,
  },
  {
    imgUrl: handleViteImages("@/assets/icons/cro2.png"),
    title: "Viral Vector",
    text: `We specialize in offering comprehensive services
encompassing the design, construction, and
packaging of various types of viral vectors.
Additionally, we assist in executing a diverse 
range of biomolecular operations tailored to 
your specific gene of interest, ensuring
thorough support throughout the process.`,
  },
  {
    imgUrl: handleViteImages("@/assets/icons/cro3.png"),
    title: "Experiment Solutions",
    text: `We offer an extensive array of contract 
research services tailored for functional 
genomics studies.`,
  },
  {
    imgUrl: handleViteImages("@/assets/icons/cro4.png"),
    title: "Related Products",
    text: `We offer a comprehensive range of
in-stock virus vectors, proteins, 
gRNA libraries, and relevant reagents, 
catering to diverse research needs across 
various aspects of your project.`,
  },
  {
    imgUrl: handleViteImages("@/assets/icons/cro5.png"),
    title: "Extracellular Vesicle",
    text: `Our services for extracellular vesicle include
isolation, identification, and functional 
research at the laboratory stage. 
For samples from different sources, 
our scientist team has developed multiple
isolation solutions which have been 
successfully applied in samples of cells,
body fluids and tissue exosomes such as
cerebrospinal fluid, urine, brain tissue and liver.
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
</script>

<style lang="scss"></style>
