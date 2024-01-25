<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-19 17:29:29
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="process">
    <div class="Process-Development-wrap Quality-Regulatory-wrap">
      <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto">
        <div class="text font-size20 color666">
          <p>
            <span style="line-height: 2"
              >Quality is the fundament for product success and a crucial step
              in biopharmaceutical research and manufacturing.</span
            ><br />
            <br />
            <span style="line-height: 2"
              >We have established a professional quality assurance team in
              compliance with the national regulations and guidelines including
              ISO, GLP, and GMP. They will be responsible for the overall
              quality management to ensure your gene and cell therapy products
              meeting the quality standard.</span
            >
          </p>
        </div>
        <a name="a1"></a>
        <div class="cGMP-title-t2">
          <div class="fontf7 font-size50 ct">
            <span>Quality Assurance System</span>
          </div>
          <!-- <i class="bg"></i> -->
        </div>

        <div class="text font-size20 color666 cGMP-zIndex">
          <div class="Quality-Regulatory-ul">
            <div class="ibg ibg1"></div>
            <div class="ibg ibg2"></div>
            <div class="groups">
              <div class="item" v-for="(i, k) in systemList" :key="k">
                <div class="icos">
                  <span
                    class="ia"
                    :style="{ 'background-image': 'url(' + i.bgUrl + ')' }"
                  ></span>
                </div>
                <div class="tx">
                  <div class="title font-size24 fontf5">
                    {{ i.title }}
                  </div>
                  <div class="shaw">
                    <ul>
                      <li v-for="(j, n) in i.txtList" :key="n">
                        <span class="color666">{{ j }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a name="a2"></a>
        <div class="cGMP-title-t1">
          <div class="fontf7 font-size50 ct">
            <span>De-risk Your Regulatory Pathway</span>
          </div>
          <!-- <i class="bg"></i> -->
        </div>
        <div class="text font-size20 color666">
          <p style="line-height: 1.8">
            Regulatory requirements vary with the development process of your
            product.
          </p>
          <p><br /></p>
          <p style="line-height: 1.8">
            At OBiO, we provide you with a comprehensive support and customized
            services related to regulation along the milestones of product
            commercialization. We have successfully supported clients to obtain
            IND clearance in China, the United States, and Australia. Leveraging
            our expertise and relevant experience in the field of gene and cell
            therapy, we will navigate you with different requirements of
            different national regulatory agencies to help you reduce
            regulation-related risks and accelerate the commercialization of
            products.
          </p>
          <p><br /></p>
          <div class="font-size24 fontf5" style="color: #014099">
            We will provide e-CTD ready CMC related documents writing and review
            for your submission:
          </div>
          <p><br /></p>
          <el-row class="ul-square font-size20 fontf3">
            <el-col
              class="ul-square-col"
              :sm="12"
              v-for="(i, k) in pathwayList"
              :key="k"
              >{{ i }}</el-col
            >
          </el-row>
        </div>
        <a name="a3"></a>
        <div class="cGMP-title-t2">
          <div class="fontf7 font-size50 ct"><span>Why OBiO?</span></div>
          <!-- <i class="bg"></i> -->
        </div>
        <div class="Viral-Vector-wrap cGMP-zIndex">
          <div class="section-3" style="background: transparent">
            <el-row class="list row" style="margin-top: 0">
              <el-col :sm="12" v-for="(i, k) in vectorList" :key="k">
                <div class="boxs">
                  <div class="ub ub-ac">
                    <!-- <div
                      class="ico"
                      style="
                        background-image: url(https://www.obio-tech.com/public/uploads/20220327/3fe6acf22f4fcd938628771fdeabbef9.png);
                      "
                    ></div> -->
                    <img class="ico" :src="i.bgUrl" alt="" srcset="" />
                    <div class="txt fontf5 font-size20 color666 ub-f1">
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
// import { useTransition } from "@vueuse/core";
import { ViralList } from "./data/Index.ts";
import { handleViteImages } from "@/utils";
import { ArrowRight } from "@element-plus/icons-vue";

const cellSource = ref(0);
const processSource = ref(0);
const analyticalSource = ref(0);
// const cellSourceValue = useTransition(cellSource, {
//   duration: 1500,
// });
// const processSourceValue = useTransition(processSource, {
//   duration: 1500,
// });
// const analyticalSourceValue = useTransition(analyticalSource, {
//   duration: 1500,
// });
cellSource.value = 170;
processSource.value = 200;
analyticalSource.value = 500;

const activeIndex = ref(0);

const systemList = ref([
  {
    bgUrl:
      "https://www.obio-tech.com/public/uploads/20220327/b6f7b8eb41e86ab0d129921fdd38387a.png",
    title: "Document and Training",
    txtList: [
      `Document management and control: preparation,
                          distribution, and retraction`,
      `Personnel training management: training plan,
                          implementation, and appraisal`,
    ],
  },
  {
    bgUrl:
      "https://www.obio-tech.com/public/uploads/20220327/e6f055da402f6b12cdcf35f4c75f2c68.png",
    title: "Archive Management",
    txtList: [`Documents archiving`, `Management of documents borrowing`],
  },
  {
    bgUrl:
      "https://www.obio-tech.com/public/uploads/20220327/5789adf3885d9919b14a25f932398d35.png",
    title: "Process Supervision",
    txtList: [
      `On-site process supervision`,
      `Deviation management, CAPA, OOS/OOT`,
      `Company-wide self-inspection, report formulation and
                          rectification supervision`,
    ],
  },
  {
    bgUrl:
      "https://www.obio-tech.com/public/uploads/20220327/17c441f83b89c0f65d196632e3e13a98.png",
    title: "Product Administration",
    txtList: [
      `Drug registration and application supporting`,
      `External audit docking and management`,
      `Complaint and adverse reaction management`,
      `Recall of related products`,
    ],
  },
  {
    bgUrl:
      "https://www.obio-tech.com/public/uploads/20220327/781542298729fdabb6507c7378fb45a3.png",
    title: "Quality Evaluation",
    txtList: [
      `Establish a supplier management system and develop
                          operation procedures for supplier evaluation and
                          approval`,
      `Material and product release standards
                          formulation`,
      `Deviation management`,
      `Change management`,
      `Retrospective analysis of quality`,
      `Ongoing stability inspection`,
    ],
  },
  {
    bgUrl:
      "https://www.obio-tech.com/public/uploads/20220327/e251ad9551ff52a302ab704e04752ffa.png",
    title: "Validation Management",
    txtList: [
      `Risk assessment, identification, and
                          verification`,
      `Validation plan preparation`,
      `Facility and equipment validation and
                          revalidation`,
      `Production process validation and revalidation`,
    ],
  },
]);
const pathwayList = ref([
  `Small-scale process research test record`,
  `Production batch records, production data reports,
                chromatography raw data, process regulations, batch production
                bills of materials, production liquid preparation records`,
  `Key quality control experiment records`,
  `Quality control method validation report`,
  `Environmental monitoring records`,
  `Material quality certificate and test reports`,
  `List of equipment operating procedures involved in the project`,
  `Material management ledger`,
  `Material management record`,
  `Equipment usage records`,
  `Equipment standard operating procedures`,
  `Personnel training and induction records`,
  `Gap analysis, technology transfer report, change report, risk
                assessment report, analysis method transfer report`,
]);
const vectorList = ref([
  {
    bgUrl:
      "https://www.obio-tech.com/public/uploads/20220406/74755b3ef1d3adad78c60d9a56335c3b.png",
    txt: "High-standard and comprehensive quality controls",
  },
  {
    bgUrl:
      "https://www.obio-tech.com/public/uploads/20220402/b31aa85b97d72ef8e77c7297b11d1867.png",
    txt: `State-of-the-art facilities with cGMP compliant quality system`,
  },
  {
    bgUrl:
      "https://www.obio-tech.com/public/uploads/20220406/a0bd444531079fc5961a6594858a4218.png",
    txt: "End-to-end regulatory support with side-by-side navigation",
  },
  {
    bgUrl:
      "https://www.obio-tech.com/public/uploads/20220327/e6bfcf1cb84b0254cea3aefadf2f1e5c.png",
    txt: `Quality-by-design in mind throughout the full product lifecycle`,
  },
  {
    bgUrl:
      "https://www.obio-tech.com/public/uploads/20220406/1c4bf19594201320237900625d0d9631.png",
    txt: `Successful support for distinguished clients with differentiated needs`,
  },
  {
    bgUrl:
      "https://www.obio-tech.com/public/uploads/20220327/8ef7bb7c3e6ef213931374afe53b1b4c.png",
    txt: `Dedicated regulatory team with over 10-year experience in gene and cell therapy industry`,
  },
]);
</script>

<style lang="scss" scoped>
.ul-square {
  .ul-square-col {
    position: relative;
    padding-left: 20px;
  }
  .ul-square-col::before {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    background-color: #039d8f;
    position: absolute;
    left: 0;
    top: 10px;
    // border-radius: 50%;
  }
}
</style>
