<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-03-27 16:46:16
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="lab-sciences Laboratory-wrap">
    <Focus :focusObj="FocusData" />
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
            <el-col :xs="24" :span="4"
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
            <el-col :xs="24" :span="14">
              <h1 class="font-size30 fontf8 iti item-tit">
                {{ item.title }}
              </h1>
              <p class="font-size18 cro-p textColor">
                {{ item.text }}
              </p>
              <a
                class="font-size18 fontf7 btn-a mt-2"
                style="cursor: pointer"
                @click="popLabora(item.popLaboraId)"
                >Read More</a
              >
              <ul
                class="ul-pop font-size24 fontf5 color666"
                v-if="item.linkList"
              >
                <li class="ub" v-for="(i, k) in item.linkList" :key="k">
                  <div class="ub ub-ac stn" @click="popLabora(i.id)">
                    <i class="pub-ico-rights2"></i>
                    <div class="stx">{{ i.txt }}</div>
                  </div>
                </li>
              </ul>
            </el-col>
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

<script lang="ts" setup name="LabSciences">
import { ref } from "vue";
import Focus from "@/components/Focus.vue";
import Events from "@/components/Events.vue";
import { handleViteImages, goRouter } from "@/utils";

const FocusData = ref({
  title: "CRO Service",
  hiddenXsImgUrl: handleViteImages("head_bg.jpg"),
  visibleXsImgUrl: handleViteImages("head_bg.jpg"),
});
const dialogVisible = ref(false);
function handleClose() {
  Labora.value = {};
  dialogVisible.value = false;
}
const croList = ref([
  {
    popLaboraId: 7,
    imgUrl: handleViteImages("cro1.png"),
    title: "Plasmid",
    text: `At OBiO, our dedicated development team is
committed to assisting you in designing,
constructing, and manufacturing plasmids
for fuctional genomics research, as well as 
providing expertise in viral packaging.`,
  },
  {
    popLaboraId: 8,
    imgUrl: handleViteImages("cro2.png"),
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
    popLaboraId: 9,
    imgUrl: handleViteImages("cro3.png"),
    title: "Experiment Solutions",
    text: `We offer an extensive array of contract 
research services tailored for functional 
genomics studies.`,
    linkList: [
      { id: 1, txt: "Cell Biology" },
      { id: 2, txt: "Stable Cell Line" },
      { id: 3, txt: "Animal Studies" },
    ],
  },
  {
    popLaboraId: 10,
    imgUrl: handleViteImages("cro4.png"),
    title: "Related Products",
    text: `We offer a comprehensive range of
in-stock virus vectors, proteins, 
gRNA libraries, and relevant reagents, 
catering to diverse research needs across 
various aspects of your project.`,
    linkList: [
      { id: 4, txt: "In-stock viral vectors" },
      { id: 5, txt: "In-stock protein and relevant reagents" },
      { id: 6, txt: "gRNA library" },
    ],
  },
  {
    popLaboraId: 11,
    imgUrl: handleViteImages("cro5.png"),
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
    imgUrl: handleViteImages("cro1.jpg"),
  },
  {
    id: 2,
    title: "Stable Cell Line",
    txt: `At OBiO, we can help you construct a stable producer cell line with molecular operations such as knock-out, overexpression, or knock-down of your target gene.`,
    imgUrl: handleViteImages("cro2.jpg"),
  },
  {
    id: 3,
    title: "Animal Studies",
    txt: `We provide animal model construction for human disease, animal behavior study, pharmacodynamics, pharmacokinetic, and efficacy studies in experimental animals for a certain drug, gene of interest, or gene therapy product. `,
    imgUrl: handleViteImages("cro3.jpg"),
  },
  {
    id: 4,
    title: "In-stock viral vectors",
    txt: `In-stock viral vector plays as a handy tool in your radioactive labelling, physiological regulation, observation, and verification studies. We provide in stock adeno-associated virus as tools for experiments including optogenetics, chemical genetics, calcium/voltage indicator, neurotransmitter probe, and Cre/Flp recombinase.
To request a list of the available in-stock viral vector, please contact one of our professional technical support.`,
    imgUrl: handleViteImages("cro4.jpg"),
  },
  {
    id: 5,
    title: "In-stock protein and relevant reagents",
    txt: `We provide recombinant protein expression systems covering bacteria, yeast, mammalian cell and insect cell, meeting your varied bioengineering demands in protein functional research, protease preparation, therapeutics development, and medical diagnosis. We have optimized our manufacturing process starting from the construction of recombinant protein expression vector, and are able to express and purify your target recombinant protein with high quality standard. We can also offer recombinant protein expression services based on the vector you provided.`,
    imgUrl: handleViteImages("cro5.jpg"),
  },
  {
    id: 6,
    title: "gRNA library",
    txt: `We provide CRISPR knock-out (GeCKO V2) gRNA library and transcriptional activation (SAM) gRNA library for human and mouse genome, enabling genome-wide high throughput screening for functional gene. We also provide gRNA library customization services according to your research demand. `,
    imgUrl: handleViteImages("cro6.jpg"),
  },
  {
    id: 7,
    title: "Plasmid",
    txt: `Artificial constructed plasmid DNA is one of the most commonly used vector tools for gene therapy research. At OBiO, our reliable development team will help you design, construct and manufacture plasmid for functional genomics research and viral packaging. We provide you with efficient vector construction services in a shorten delivery cycle, optimize your molecule cloning operation with reduced time and cost, and advance the progress of your research project. All customized plasmid products are regulated with strict internal quality controls to ensure that our product fulfills your design requirements.`,
  },
  {
    id: 8,
    title: "Viral Vector",
    txt: `Viral vectors are widely used as gene transduction tools in biomedical research and gene therapy product development. At OBiO, we provide the design, construction and packaging services for adeno-associated virus, adenovirus, lentivirus, and retrovirus. We will help you complete a variety of biomolecular operations for your gene of interest, including overexpression, interference, knock-out, cell marking and physiological regulation, fully meeting your diversified demands in your study.`,
  },
  {
    id: 9,
    title: "Experiment Solutions",
    txt: `“Bridging resources for life science” as our commitment, we provide a wide spectrum of contract research services for functional genomics studies including stable producer cell line construction at laboratory phase, cell biology experiments, animal model construction, and parameter testing, as well as other specialty services for exosome, CRISPR/Cas9 library and non-coding RNA.`,
  },
  {
    id: 10,
    title: "Related Products",
    txt: `In addition to our contract research service, we provide in-stock virus vectors, proteins, gRNA library, and relevant reagent, meeting your research demand from different aspects.`,
  },
  {
    id: 11,
    title: "Extracellular Vesicle",
    txt: `Our services for extracellular vesicle include isolation, identification, and functional research at the laboratory stage. For samples from different sources, our scientist team has developed multiple isolation solutions which have been successfully applied in samples of cells, body fluids and tissue exosomes such as cerebrospinal fluid, urine, brain tissue and liver.`,
  },
]);
function popLabora(id) {
  Labora.value = LaboraList.value.find((i) => i.id === id) || {};
  dialogVisible.value = true;
}
</script>

<style lang="scss"></style>
