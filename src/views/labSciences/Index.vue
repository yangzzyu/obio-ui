<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-27 15:24:39
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="lab-sciences">
    <Focus :focusObj="FocusData" />
    <div class="Laboratory-wrap">
      <div class="top-txt">
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
      </div>
      <div class="Innovations-wrap">
        <el-col
          :xs="22"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
          class="container"
        >
          <div class="list">
            <el-row class="item row" :gutter="10">
              <el-col :xs="22" :sm="10" :md="10" :lg="8" :xl="6">
                <div class="img block">
                  <img
                    src="https://www.obio-tech.com/public/uploads/20220328/fb31c3bc021f9b0de1ac68c274c4861b.png"
                    class="img-responsive"
                    alt="Plasmid"
                  />
                  <i class="line"></i>
                </div>
              </el-col>
              <el-col :xs="22" :sm="14" :md="14" :lg="16" :xl="18">
                <div class="txt">
                  <div class="font-size50 fontf8 title">Plasmid</div>
                  <div class="p font-size20">
                    Artificial constructed plasmid DNA is one of the most
                    commonly used vector tools for gene therapy research. At
                    OBiO, our reliable development team will help you design,
                    construct and manufacture plasmid for functional genomics
                    research and viral packaging. We provide you with efficient
                    vector construction services in a shorten delivery cycle,
                    optimize your molecule cloning operation with reduced time
                    and cost, and advance the progress of your research project.
                    All customized plasmid products are regulated with strict
                    internal quality controls to ensure that our product
                    fulfills your design requirements.
                  </div>
                </div></el-col
              >
            </el-row>
            <el-row class="item row" :gutter="10">
              <el-col
                :xs="{ span: 22, push: 0 }"
                :sm="{ span: 10, push: 14 }"
                :md="{ span: 10, push: 14 }"
                :lg="{ span: 8, push: 16 }"
                class="col-sm-push-6"
              >
                <div class="img block">
                  <img
                    src="https://www.obio-tech.com/public/uploads/20220328/3356c9237a4a9f9e07774eb87e9fa841.png"
                    class="img-responsive"
                    alt="Viral Vector"
                  />
                  <i class="line line-rotate"></i>
                </div>
              </el-col>
              <el-col
                :xs="{ span: 22, pull: 0 }"
                :sm="{ span: 14, pull: 10 }"
                :md="{ span: 14, pull: 10 }"
                :lg="{ span: 16, pull: 8 }"
              >
                <div class="txt">
                  <div class="font-size50 fontf8 title">Viral Vector</div>
                  <div class="p font-size20">
                    Viral vectors are widely used as gene transduction tools in
                    biomedical research and gene therapy product development. At
                    OBiO, we provide the design, construction and packaging
                    services for adeno-associated virus, adenovirus, lentivirus,
                    and retrovirus. We will help you complete a variety of
                    biomolecular operations for your gene of interest, including
                    overexpression, interference, knock-out, cell marking and
                    physiological regulation, fully meeting your diversified
                    demands in your study.
                  </div>
                </div></el-col
              >
            </el-row>
            <el-row class="item row" :gutter="10">
              <el-col :xs="22" :sm="10" :md="10" :lg="8" :xl="6">
                <div class="img block">
                  <img
                    src="https://www.obio-tech.com/public/uploads/20220328/093b15d78dc1fd4a455cb07e200f5ea2.png"
                    class="img-responsive"
                    alt="Experiment Solutions"
                  />
                  <i class="line"></i>
                </div>
              </el-col>
              <el-col :xs="22" :sm="14" :md="14" :lg="16" :xl="18">
                <div class="txt">
                  <div class="font-size50 fontf8 title">
                    Experiment Solutions
                  </div>
                  <div class="p font-size20">
                    “Bridging resources for life science” as our commitment, we
                    provide a wide spectrum of contract research services for
                    functional genomics studies including stable producer cell
                    line construction at laboratory phase, cell biology
                    experiments, animal model construction, and parameter
                    testing, as well as other specialty services for exosome,
                    CRISPR/Cas9 library and non-coding RNA.
                  </div>
                  <ul class="ul-pop font-size24 fontf5 color666">
                    <li class="ub">
                      <div class="ub ub-ac stn" @click="popLabora(1)">
                        <i class="pub-ico-rights2"></i>
                        <div class="stx">Cell Biology</div>
                      </div>
                    </li>
                    <li class="ub">
                      <div class="ub ub-ac stn" @click="popLabora(2)">
                        <i class="pub-ico-rights2"></i>
                        <div class="stx">Stable Cell Line</div>
                      </div>
                    </li>
                    <li class="ub">
                      <div class="ub ub-ac stn" @click="popLabora(3)">
                        <i class="pub-ico-rights2"></i>
                        <div class="stx">Animal Studies</div>
                      </div>
                    </li>
                  </ul>
                </div></el-col
              >
            </el-row>
            <el-row class="item row" :gutter="10">
              <el-col
                :xs="{ span: 22, push: 0 }"
                :sm="{ span: 10, push: 14 }"
                :md="{ span: 10, push: 14 }"
                :lg="{ span: 8, push: 16 }"
                class="col-sm-push-6"
              >
                <div class="img block">
                  <img
                    src="https://www.obio-tech.com/public/uploads/20220328/100084be2d003db1e0326fa639675f73.png"
                    class="img-responsive"
                    alt="Related Products"
                  />
                  <i class="line line-rotate"></i>
                </div>
              </el-col>
              <el-col
                :xs="{ span: 22, pull: 0 }"
                :sm="{ span: 14, pull: 10 }"
                :md="{ span: 14, pull: 10 }"
                :lg="{ span: 16, pull: 8 }"
              >
                <div class="txt">
                  <div class="font-size50 fontf8 title">Related Products</div>
                  <div class="p font-size20">
                    In addition to our contract research service, we provide
                    in-stock virus vectors, proteins, gRNA library, and relevant
                    reagent, meeting your research demand from different
                    aspects.
                  </div>
                  <ul class="ul-pop font-size24 fontf5 color666">
                    <li class="ub">
                      <div class="ub ub-ac stn" @click="popLabora(4)">
                        <i class="pub-ico-rights2"></i>
                        <div class="stx">In-stock viral vectors</div>
                      </div>
                    </li>
                    <li class="ub">
                      <div class="ub ub-ac stn" @click="popLabora(5)">
                        <i class="pub-ico-rights2"></i>
                        <div class="stx">
                          In-stock protein and relevant reagents
                        </div>
                      </div>
                    </li>
                    <li class="ub">
                      <div class="ub ub-ac stn" @click="popLabora(6)">
                        <i class="pub-ico-rights2"></i>
                        <div class="stx">gRNA library</div>
                      </div>
                    </li>
                  </ul>
                </div></el-col
              >
            </el-row>
            <el-row class="item row" :gutter="10">
              <el-col :xs="22" :sm="10" :md="10" :lg="8" :xl="6">
                <div class="img block">
                  <img
                    src="https://www.obio-tech.com/public/uploads/20220328/b2b256a7f88419a9892e559af40522b9.png"
                    class="img-responsive"
                    alt="Extracellular Vesicle"
                  />
                  <i class="line"></i>
                </div>
              </el-col>
              <el-col :xs="22" :sm="14" :md="14" :lg="16" :xl="18">
                <div class="txt">
                  <div class="font-size50 fontf8 title">
                    Extracellular Vesicle
                  </div>
                  <div class="p font-size20">
                    Our services for extracellular vesicle include isolation,
                    identification, and functional research at the laboratory
                    stage. For samples from different sources, our scientist
                    team has developed multiple isolation solutions which have
                    been successfully applied in samples of cells, body fluids
                    and tissue exosomes such as cerebrospinal fluid, urine,
                    brain tissue and liver.
                  </div>
                </div></el-col
              >
            </el-row>
          </div>
        </el-col>
      </div>
    </div>
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
const FocusData = ref({
  title: "Laboratory Sciences",
  hiddenXsImgUrl:
    "https://www.obio-tech.com/public/uploads/20220402/39c0eb1d2e5cf6c9f1d40cc78ce30544.jpg",
  visibleXsImgUrl:
    "https://www.obio-tech.com/public/uploads/20220402/c513fa4925451a1f43f4227509d942c3.jpg",
});
const dialogVisible = ref(false);
function handleClose() {
  Labora.value = {};
  dialogVisible.value = false;
}
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

<style></style>
