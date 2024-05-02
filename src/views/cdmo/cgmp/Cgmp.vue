<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-03-27 16:55:16
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="cGMP-wrap">
    <div class="cGMP-main">
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
              >After your established process development, the next milestone in
              your product life cycle is to ensure your gene and cell therapy
              product succeed in regulatory application and future
              commercialization.
            </span>
          </p>
          <p>
            <br />
          </p>
          <p>
            <span style="line-height: 2"
              >With a systemic, standardized manufacturing strategy and a proven
              and predictable path, you will be able to commission our cGMP
              suites, airflows, material storage, documentation processes,
              quality systems, and experienced engineers to take your products
              to market at a faster pace. Leveraging our large-scale cGMP
              manufacturing platform and single-use technologies, we will
              provide you cGMP manufacturing services from pre-IND all the way
              to commercialization, and are able to flexibly complete co-line
              manufacturing of various products, enabling you to adjust to
              demand changes in a more efficient and reliable way.</span
            >
          </p>
        </div>

        <a name="a1"></a>
        <div class="cGMP-title-t1">
          <div class="fontf7 font-size50 ct">
            <span>End-to-End Offering</span>
          </div>
          <i class="bg"></i>
        </div>
        <div class="hidden-xs cGMP-zIndex text">
          <div class="pm-1 font-size18 color666 cGMP-zIndex">
            With a successful IND declaration as the millstone, we provide our
            Pre-IND services and Post-IND services as our CDMO solutions.
          </div>
          <div class="cGMP-main-list ub ub-ac cGMP-zIndex font-size18 fontf3">
            <div class="group ub-f1">
              <div class="item ub ub-ac">
                <span class="ub-f1">Process Development</span>
              </div>
              <div class="item ub ub-ac">
                <span class="ub-f1">Analytical Method Development</span>
              </div>
            </div>
            <div class="ico-ss"></div>
            <div class="group ub-f1">
              <div class="item ub ub-ac">
                <span class="ub-f1">Scaling / Manufacturing / Releasing</span>
              </div>
              <div class="item ub ub-ac">
                <span class="ub-f1">IND-Enabling CMC Supports</span>
              </div>
              <div class="item ub ub-ac">
                <span class="ub-f1">Pre-clinical Efficacy Studies</span>
              </div>
            </div>
            <div class="ico-ss"></div>
            <div class="group ub-f1">
              <div class="item ub ub-ac">
                <span class="ub-f1">Clinical Manufacturing</span>
              </div>
              <div class="item ub ub-ac">
                <span class="ub-f1">Commercial Manufacturing</span>
              </div>
            </div>
          </div>
        </div>
        <div class="visible-xs-block cGMP-zIndex text">
          <p><br /></p>
          <p>
            <span
              >With a successful IND declaration as the millstone, we provide
              our Pre-IND services and Post-IND services as our CDMO
              solutions.</span
            >
          </p>
          <p>
            <span><br /> </span>
          </p>
        </div>
        <div class="cGMP-main-tab cGMP-zIndex">
          <div class="tcon ub ub-ac font-size24 fontf5">
            <div
              class="item ub ub-ac"
              tabidb="cGMPTgroup1"
              :class="activeIndex == '1' ? 'active' : ''"
              @mouseenter="activeIndex = '1'"
            >
              <span class="ub-f1">Pre-IND service</span>
            </div>
            <div class="line"></div>
            <div
              class="item ub ub-ac"
              tabidb="cGMPTgroup2"
              :class="activeIndex == '2' ? 'active' : ''"
              @mouseenter="activeIndex = '2'"
            >
              <span class="ub-f1">Post-IND service</span>
            </div>
          </div>
        </div>
        <div class="cGMP-main-tab-group cGMP-zIndex">
          <div
            class="group"
            v-for="(item, index) in tabsData"
            :key="index"
            v-show="activeIndex === item.id"
          >
            <div class="sti font-size30 fontf7 title-color">
              {{ item.title }}
            </div>
            <div class="list ub ub-pj">
              <div class="item" v-for="(i, k) in item.list" :key="k">
                <div class="img">
                  <div class="img1 animate-img">
                    <img :src="i.imgUrl" :alt="i.subHead" />
                  </div>
                </div>
                <div class="txt text-center">
                  <div
                    class="fontf7 font-size24 ub ub-ac ub-pc title-color"
                    style="max-width: 330px; margin: 0 auto"
                  >
                    {{ i.subHead }}
                  </div>
                  <div class="font-size18 color666 p">
                    {{ i.txt }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a name="a1"></a>
        <div class="pub-title pub-title-p ub ub-ver ub-pe">
          <i class="line"></i>
          <h1 class="fontf7 font-size50">Quality from Constant Innovations</h1>
        </div>
        <div class="font-size18 pub-pal20" style="padding-top: 30px">
          <p style="line-height: 2">
            SPIRO Site, operating as the Research &amp; Development Center, is
            located at Ziping Road in Shanghai International Medical Zone. The
            name SPIRO originates from the name of Ziping Road (Spirodela
            polyrhiza), a herb in Traditional Chinese Medicine.&nbsp;At SPIRO
            Site, we enhance our service capabilities through constant
            innovations in basic science, and provide customers with contract
            research services, process development, analytical development and
            extend services of gene and cell therapy products, including:
          </p>
          <br />
          <el-row>
            <el-col
              :span="12"
              :xs="22"
              v-for="(item, index) in InnovationsList"
              :key="index"
            >
              ● {{ item.txt }}
            </el-col>
          </el-row>
        </div>
        <div class="cGMP-title-t2">
          <div class="fontf7 font-size50 ct">
            <span>Capacity for Global</span>
          </div>
          <i class="bg"></i>
        </div>
        <div class="pm-2 font-size18 color666 cGMP-zIndex mb-5">
          <p>
            <span style="line-height: 2"
              >The current operating manufacturing footprint at OBiO covers of a
              pilot testing platform of +1,000 sqm, and a three-building cGMP
              manufacturing platform with +10,000 sqm (107,639 ft²) in total. Furthermore, we
              have constructed OBiO Intelli-M site with 77,000 sqm (828,821 ft²) cGMP
              footprint, 33 cGMP production lines, and up to 2,000 L bioreactor
              capacity at Shanghai Lin-Gang Free Trade Zone to satisfy the
              global demand of gene and cell therapy products.</span
            >
          </p>
        </div>
        <a name="a2"></a>

        <!-- <div class="cGMP-title-t3 cGMP-zIndex font-size24 fontf5">
          <span>
            <router-link
              to="/about/facilities"
              v-scroll-to="{
                element: '.section-3',
                duration: 300,
                easing: 'ease',
                offset: 1,
              }"
            >
              Learn more about our state-of-the-art facility
            </router-link></span
          >
        </div> -->
      </el-col>
    </div>
  </div>
</template>

<script lang="ts" setup name="Cdmo">
import { ref } from "vue";
import { useTransition } from "@vueuse/core";
import { ArrowRight } from "@element-plus/icons-vue";
import { handleViteImages } from "@/utils";
import { InnovationsList } from "../data/SpiroSite";

const activeIndex = ref("1");
const tabsData = ref([
  {
    id: "1",
    title: "Pre-IND service",
    list: [
      {
        imgUrl: handleViteImages("Pre-IND1.jpg"),
        subHead: "Non-IND (IIT) services",
        txt: `Manufacturing gene and cell therapy products in pilot
                    testing scale that is compliant with cGMP management system,
                    delivering quality inspection report and samples to
                    facilitate non-IND clinical trials (IIT) initiated by
                    investigators.`,
      },
      {
        imgUrl: handleViteImages("Pre-IND2.jpg"),
        subHead: "IND-CMC services",
        txt: `We provide IND-CMC services to support the IND/CTA
                    application in China, America, Europe, and Australia. After
                    process and analytical method development at
                    laboratory-scale, we will carry out process scale-up test in
                    cGMP production lines, implement the manufacturing, quality
                    control and product release for a consecutive 3-4 batches,
                    and provide you with a complete set of CMC dossier and
                    samples required for IND application.`,
      },
      {
        imgUrl: handleViteImages("Pre-IND3.jpg"),
        subHead: "Pre-IND extended services",
        txt: `We provide a variety of Pre-IND extended services including
                    bank construction for plasmid, cell or strain, aseptic fill
                    and finish, stability studies, AAV capsid screening, sample
                    testing, and quality control consultation.`,
      },
    ],
  },
  {
    id: "2",
    title: "Post-IND service",
    list: [
      {
        imgUrl: handleViteImages("Post-IND1.jpg"),
        subHead: "Clinical manufacturing service (for Phase I, II, III)",
        txt: `With the single-use and large-scale manufacturing
                    technologies as the core, our cGMP platform can facilitate
                    the manufacturing and quality control of clinical gene and
                    cell therapy samples in strict accordance with regulatory
                    requirements at multiple countries, and meet the gene and
                    cell therapy sample demands for phase I, II and III clinical
                    trials.`,
      },
      {
        imgUrl: handleViteImages("Post-IND2.jpg"),
        subHead: "Commercial manufacturing",
        txt: `We provide commercial manufacturing services for marketed
                    gene and cell therapy products at our OBiO Intelli-M site.`,
      },
      {
        imgUrl: handleViteImages("Post-IND3.jpg"),
        subHead: "Post-IND extended services",
        txt: `We provide a wide range of Post-IND extended services
                    covering technology transfer consultation, process
                    characterization and aseptic fill and finish.`,
      },
    ],
  },
]);
</script>
