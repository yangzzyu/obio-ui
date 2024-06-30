<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-04-01 16:02:07
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="process">
    <div class="Process-Development-wrap Quality-Regulatory-wrap">
      <el-col
        :xs="22"
        :sm="20"
        :md="20"
        :lg="20"
        :xl="22"
        style="margin: auto"
        class="container"
      >
        <div class="text font-size18 color666">
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
        </div>
        <div style="text-align:center;">
          <br />
          <img :src="handleViteImages('uploads/image/20240601/6-Quarlity-Analysis.png')" alt="Quality Control" style="width:100%"/>
        </div>
        <div class="text font-size18 color666 cGMP-zIndex">
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
                  <div class="title font-size24 fontf5 title-color">
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
        </div>
        <div class="text font-size18 color666">
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
          <div class="font-size24 fontf5 title-color">
            We will provide e-CTD ready CMC related documents writing and review
            for your submission:
          </div>
          <p><br /></p>
          <el-row class="ul-square font-size18 fontf3">
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
import { ViralList } from "./data/Index.ts";
import { handleViteImages } from "@/utils";
import { ArrowRight } from "@element-plus/icons-vue";

const cellSource = ref(0);
const processSource = ref(0);
const analyticalSource = ref(0);
cellSource.value = 300;
processSource.value = 200;
analyticalSource.value = 500;

const activeIndex = ref(0);

const systemList = ref([
  {
    bgUrl: handleViteImages("highlights/7.png"),
    title: "Document and Training",
    txtList: [
      `Document management and control: preparation,
                          distribution, and retraction`,
      `Personnel training management: training plan,
                          implementation, and appraisal`,
    ],
  },
  {
    bgUrl: handleViteImages("highlights/8.png"),
    title: "Archive Management",
    txtList: [`Documents archiving`, `Management of documents borrowing`],
  },
  {
    bgUrl: handleViteImages("highlights/9.png"),
    title: "Process Supervision",
    txtList: [
      `On-site process supervision`,
      `Deviation management, CAPA, OOS/OOT`,
      `Company-wide self-inspection, report formulation and
                          rectification supervision`,
    ],
  },
  {
    bgUrl: handleViteImages("highlights/10.png"),
    title: "Product Administration",
    txtList: [
      `Drug registration and application supporting`,
      `External audit docking and management`,
      `Complaint and adverse reaction management`,
      `Recall of related products`,
    ],
  },
  {
    bgUrl: handleViteImages("highlights/11.png"),
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
    bgUrl: handleViteImages("highlights/12.png"),
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
    bgUrl: handleViteImages("highlights/13.png"),
    txt: "High-standard and comprehensive quality controls",
  },
  {
    bgUrl: handleViteImages("highlights/14.png"),
    txt: `State-of-the-art facilities with cGMP compliant quality system`,
  },
  {
    bgUrl: handleViteImages("highlights/15.png"),
    txt: "End-to-end regulatory support with side-by-side navigation",
  },
  {
    bgUrl: handleViteImages("highlights/16.png"),
    txt: `Quality-by-design in mind throughout the full product lifecycle`,
  },
  {
    bgUrl: handleViteImages("highlights/17.png"),
    txt: `Successful support for distinguished clients with differentiated needs`,
  },
  {
    bgUrl: handleViteImages("highlights/18.png"),
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
