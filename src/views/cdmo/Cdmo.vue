<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-27 15:32:33
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="CDMO-Solutions-wrap">
    <div class="section-1">
      <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto">
        <div class="text font-size20">
          <p>
            <span style="line-height: 2"
              >Through years of dedicated effort, OBiO has built an integrated
              process development system, supported by a flexible cGMP
              manufacturing platform, comprehensive quality system and efficient
              project management. Our experienced team of experts will navigate
              the industrialization process with you side-by-side. With our
              technical expertise in viral vector, oncolytic virus and cell
              therapy, we will help you to accelerate your product life-cycle
              from pre-clinical to commercially ready.&nbsp;</span
            ><br />
            <span style="line-height: 2"></span>
          </p>
          <p>
            <br />
          </p>
        </div>
        <div class="number-main text-center cGMP-zIndex active" id="numgo">
          <el-row class="row color666">
            <el-col :span="8" class="tx-c">
              <el-statistic :value="cellSourceValue" class="number-c">
                <template #suffix>
                  <div class="nums fontf9">
                    <span class="fh">+</span>
                  </div>
                </template>
              </el-statistic>
              <div class="pn fontf7 font-size28">
                Gene and Cell Therapy Programs
              </div>
            </el-col>
            <el-col :span="8" class="tx-c">
              <el-statistic :value="processSourceValue" class="number-c">
                <template #suffix>
                  <div class="nums fontf9">
                    <span class="fh">+</span>
                  </div>
                </template>
              </el-statistic>
              <div class="pn fontf7 font-size28">
                Process Development Projects
              </div>
            </el-col>
            <el-col :span="8" class="tx-c">
              <el-statistic class="number-c" :value="analyticalSourceValue">
                <template #suffix>
                  <div class="nums fontf9">
                    <span class="fh">+</span>
                  </div>
                </template>
              </el-statistic>
              <div class="pn fontf7 font-size28">
                Analytical Method Development Projects
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </div>
    <div class="section-2">
      <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto">
        <div class="pub-title pub-title-p ub ub-ver ub-pe">
          <i class="line"></i>
          <span class="fontf8 font-size50"> Versatility for Variety</span>
          <div class="p font-size18"></div>
        </div>
        <div class="infor font-size20">
          <p>
            <span style="line-height: 2"
              >Our extensive technical expertise and process scale-up experience
              make us a strong and reliable partner for your gene and cell
              therapy project. We have successfully provided cGMP manufacturing
              services for multiple clients to support their gene and cell
              therapy clinical trials in the United States, China, and
              Australia.&nbsp;</span
            ><br />
            <br />
            <span style="line-height: 2"
              >We provide process development and cGMP manufacturing for the
              following gene and cell therapy products:</span
            ><br />
            <span style="line-height: 2"></span>
          </p>
          <p>
            <br />
          </p>
        </div>

        <div class="list">
          <el-row class="row">
            <el-col
              :span="6"
              class="item"
              v-for="(i, k) in ViralList"
              :key="k"
              :class="activeIndex === i.id ? 'active' : ''"
              @mouseenter="activeIndex = i.id"
              ><a href="/cn/home/cgmp/cid/896" class="boxs block">
                <div class="img1">
                  <div class="icos">
                    <img :src="i.imgUrl" class="icos-a" :alt="i.title" />
                  </div>
                </div>
                <div class="font-size24 fontf5 t">{{ i.title }}</div>
              </a>
            </el-col>
          </el-row>
        </div>

        <div class="list-mes" id="cdmoMes">
          <template v-for="(i, k) in ViralList" :key="k">
            <div class="group" v-show="activeIndex === i.id">
              <div class="boxs font-size20">
                {{ i.content }}
                <p></p>
              </div>
            </div>
          </template>
        </div>
      </el-col>
    </div>
    <div class="section-3">
      <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto">
        <div class="pub-title pub-title-p ub ub-ver ub-pe">
          <i class="line"></i>
          <span class="fontf8 font-size50"
            >Industrialize Your Product at OBiO</span
          >
          <div class="p font-size18"></div>
        </div>
        <div class="list">
          <div class="list-con clearfix">
            <div class="item">
              <router-link to="/process" class="boxs block">
                <img
                  src="https://www.obio-tech.com/public/uploads/20220329/86aefe6d84551370527d380db3102723.png"
                  alt="Process Development"
                />
                <div class="shaw">
                  <div class="font-size50 fontf7">Process Development</div>
                  <div class="font-size20 p">
                    Efficient and Customized Process Development with Board
                    Product Spectrum
                  </div>
                </div>
              </router-link>
            </div>
            <div class="item">
              <router-link to="/cgmp" class="boxs block">
                <img
                  src="https://www.obio-tech.com/public/uploads/20220329/37608c12bbed338f24bebdae54947878.png"
                  alt="cGMP Manufacturing"
                />
                <div class="shaw">
                  <div class="font-size50 fontf7">cGMP Manufacturing</div>
                  <div class="font-size20 p">
                    Flexible Large-Scale GMP Manufacturing Platform
                  </div>
                </div>
              </router-link>
            </div>
            <div class="item">
              <router-link to="/quality" class="boxs block">
                <img
                  src="https://www.obio-tech.com/public/uploads/20220329/1421f3595888e8220c1c70678a63751c.png"
                  alt="Quality &amp; Regulatory"
                />
                <div class="shaw">
                  <div class="font-size50 fontf7">Quality &amp; Regulatory</div>
                  <div class="font-size20 p">
                    International Compliant Quality Control System
                  </div>
                </div>
              </router-link>
            </div>
            <div class="item">
              <router-link to="/logistics" class="boxs block">
                <img
                  src="https://www.obio-tech.com/public/uploads/20220325/27eb574fecde7e40f15b4be3c86a2d78.png"
                  alt="Cold Chain Logistics"
                />
                <div class="shaw">
                  <div class="font-size50 fontf7">Cold Chain Logistics</div>
                  <div class="font-size20 p">
                    Traceable Cold-Chain Logistics with Controllable Risk
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </el-col>
    </div>

    <div class="section-4">
      <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto">
        <div class="pub-title pub-title-p ub ub-ver ub-pe">
          <i class="line"></i>
          <span class="fontf8 font-size50">F-A-S-T Commitment from OBiO</span>
          <div class="p font-size18"></div>
        </div>
        <div class="content">
          <el-row class="row">
            <el-col
              :xs="{ span: 22, push: 0 }"
              :sm="{ span: 10, push: 14 }"
              :md="{ span: 10, push: 14 }"
              :lg="{ span: 8, push: 16 }"
            >
              <div class="list">
                <div class="item">
                  <div class="t">
                    <div class="f fontf8 font-color-ts">F</div>
                    <div class="tr fontf7">ocus:</div>
                  </div>
                  <div class="p font-size20 fontf3">
                    Dedication to Contract Development and Manufacturing Service
                  </div>
                  <div class="pm font-size18 color666">
                    Strict Internal Data Management<br />
                    Comprehensive Patent System<br />
                    Professional Intellectual Property Protection
                  </div>
                </div>

                <div class="item">
                  <div class="t">
                    <div class="f fontf8 font-color-ts">A</div>
                    <div class="tr fontf7">cceleration:</div>
                  </div>
                  <div class="p font-size20 fontf3">
                    Commercial Readiness from Technical Expertise
                  </div>
                  <div class="pm font-size18 color666">
                    Advanced Process Development Technologies<br />
                    Large-Scale Manufacturing Capabilities<br />
                    Fully-Closed &amp; Automated Downstream Purification
                  </div>
                </div>

                <div class="item">
                  <div class="t">
                    <div class="f fontf8 font-color-ts">S</div>
                    <div class="tr fontf7">tandardization:</div>
                  </div>
                  <div class="p font-size20 fontf3">
                    Fully Regulatory Compliance
                  </div>
                  <div class="pm font-size18 color666">
                    GMP-Compliant Facilities and Equipment<br />
                    Robust Quality Management System<br />
                    Comprehensive Quality Control Platform
                  </div>
                </div>

                <div class="item">
                  <div class="t">
                    <div class="f fontf8 font-color-ts">T</div>
                    <div class="tr fontf7">eam:</div>
                  </div>
                  <div class="p font-size20 fontf3">Trustful Expertise</div>
                  <div class="pm font-size18 color666">
                    10+ years of Experience in Gene and Cell Therapy<br />
                    Extensive Experience in IND-Enabling Support<br />
                    Responses at First Instance
                  </div>
                </div>
              </div>
            </el-col></el-row
          >
        </div>
      </el-col>
    </div>
    <div class="Insights-wrap">
      <div class="section-3">
        <el-col
          :xs="22"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
        >
          <div class="pub-title pub-title-p ub ub-ver ub-pe">
            <i class="line"></i>
            <span class="fontf8 font-size50">Knowledge Center</span>
            <div class="p font-size18"></div>
          </div>

          <div class="Knowledge-groups">
            <div class="groups" id="1">
              <div class="labs font-size30 fontf7">Laboratory Sciences</div>
              <div class="in-news-Knowledge-swp">
                <Swiper
                  :modules="[Autoplay, Navigation, Scrollbar]"
                  :observer="true"
                  :observeParents="true"
                  :slidesPerView="4"
                  :spaceBetween="25"
                  :navigation="sciencesNavigation"
                  :breakpoints="sciencesBreakpoints"
                >
                  <swiper-slide
                    v-for="(item, index) in SciencesList"
                    :key="index"
                  >
                    <div class="block boxs tans">
                      <img
                        :src="item.imgUrl"
                        class="img-responsive"
                        :alt="item.tit"
                      /></div
                  ></swiper-slide>
                </Swiper>
              </div>
              <div class="in-news-event-btn2 ub ub-ac ub-pc">
                <div
                  class="pub-ico-left swiper-button-disabled"
                  id="inNewsKnowledgeWp1Prev"
                  tabindex="0"
                  role="button"
                  aria-label="Previous slide"
                  aria-disabled="true"
                ></div>
                <div
                  class="pub-ico-right"
                  id="inNewsKnowledgeWp1Next"
                  tabindex="0"
                  role="button"
                  aria-label="Next slide"
                  aria-disabled="false"
                ></div>
              </div>
            </div>

            <div class="groups" id="2">
              <div class="labs font-size30 fontf7">CDMO Solutions</div>
              <div class="in-news-Knowledge-swp">
                <Swiper
                  :modules="[Autoplay, Navigation, Scrollbar]"
                  :observer="true"
                  :observeParents="true"
                  :slidesPerView="4"
                  :spaceBetween="25"
                  :navigation="solutionsNavigation"
                  :breakpoints="sciencesBreakpoints"
                >
                  <swiper-slide
                    v-for="(item, index) in SolutionsList"
                    :key="index"
                  >
                    <div class="block boxs tans">
                      <img
                        :src="item.imgUrl"
                        class="img-responsive"
                        :alt="item.tit"
                      /></div
                  ></swiper-slide>
                </Swiper>
              </div>
              <div class="in-news-event-btn2 ub ub-ac ub-pc">
                <div
                  class="pub-ico-left swiper-button-disabled"
                  id="inNewsKnowledgeWp2Prev"
                  tabindex="0"
                  role="button"
                  aria-label="Previous slide"
                  aria-disabled="true"
                ></div>
                <div
                  class="pub-ico-right"
                  id="inNewsKnowledgeWp2Next"
                  tabindex="0"
                  role="button"
                  aria-label="Next slide"
                  aria-disabled="false"
                ></div>
              </div>
            </div>
          </div>
        </el-col>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="Cdmo">
import { ref } from "vue";
import { useTransition } from "@vueuse/core";
import { ViralList } from "./data/Index";
import { ArrowRight } from "@element-plus/icons-vue";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
// 引入swiper样式（按需导入）
import "swiper/css";
import "swiper/css/pagination"; // 轮播图底面的小圆点
import "swiper/css/navigation"; // 轮播图两边的左右箭头
import "swiper/css/scrollbar"; // 轮播图的滚动条
const navigation = ref({
  nextEl: "#inNewNext",
  prevEl: "#inNewPrev",
  hideOnClick: true,
});
const breakpoints = ref({
  320: {
    //当屏幕宽度大于等于320
    slidesPerView: 1,
    spaceBetween: 0,
  },
  768: {
    //当屏幕宽度大于等于768
    slidesPerView: 2,
    spaceBetween: 10,
  },
  1280: {
    //当屏幕宽度大于等于1280
    slidesPerView: 3,
  },
  1580: {
    //当屏幕宽度大于等于1280
    slidesPerView: 3,
  },
});

const sciencesNavigation = ref({
  nextEl: "#inNewsKnowledgeWp1Next",
  prevEl: "#inNewsKnowledgeWp1Prev",
});
const sciencesBreakpoints = ref({
  320: {
    //当屏幕宽度大于等于320
    slidesPerView: 2,
    spaceBetween: 10,
  },
  768: {
    //当屏幕宽度大于等于768
    slidesPerView: 2,
    spaceBetween: 12,
  },
  1280: {
    //当屏幕宽度大于等于1280
    slidesPerView: 4,
    spaceBetween: 25,
  },
});
const solutionsNavigation = ref({
  nextEl: "#inNewsKnowledgeWp2Next",
  prevEl: "#inNewsKnowledgeWp2Prev",
});
const solutionsBreakpoints = ref({
  320: {
    //当屏幕宽度大于等于320
    slidesPerView: 2,
    spaceBetween: 10,
  },
  768: {
    //当屏幕宽度大于等于768
    slidesPerView: 2,
    spaceBetween: 12,
  },
  1280: {
    //当屏幕宽度大于等于1280
    slidesPerView: 4,
    spaceBetween: 25,
  },
});
const SciencesList = ref([
  {
    tit: "AAV Packaging Services",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20231019/1060cdb3931cb402fb967659f4645f34.jpg",
  },
  {
    tit: "Lentivirus Packaging Services",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20231019/ebcf10cfbdd41abcfa6cc931268def06.jpg",
  },
  {
    tit: "AAV Lung M3 and X",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20231019/e53e45f75ece1ff8f79d5656b95360a9.jpg",
  },
  {
    tit: "AAVneO + AAVMeta Platform",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20231019/1dcbaaaf9929529e54e508f5e1665dbd.jpg",
  },
  {
    tit: "Off-the-Shelf AAV Products",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20231019/a14ccd438e1b10ca796397d236a88770.jpg",
  },
]);
const SolutionsList = ref([
  {
    tit: "CGT CDMO Solutions at OBiO",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20231024/0a7db7cad0d47550e91ce323a47f29fe.jpg",
  },
  {
    tit: "Cell Therapy CDMO Solutions",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20231024/d21963d4b5f977d1a9f5135472a56668.jpg",
  },
  {
    tit: "Adeno Associated Virus CDMO Solutions",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20231024/e81a262802664819862f4f0d4be555ce.jpg",
  },
  {
    tit: "IPSC CDMO Services",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20230926/28fffe992afb0c7f806ce8acaf4dc20f.jpg",
  },
  {
    tit: "Phase-Appropriate Plasmid CDMO Solutions",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20230926/cd743d82fdf684f9fb1ef2866e28b52a.jpg",
  },
  {
    tit: "Lentiviral Vector CDMO Solutions",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20230926/f03331ea03516eb0b7b58e9b150887f8.jpg",
  },
  {
    tit: "Oncolytic Virus CDMO Solutions",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20230926/5da84fdce35d08986f725c27ca5d1f59.jpg",
  },
]);

const cellSource = ref(0);
const processSource = ref(0);
const analyticalSource = ref(0);
const cellSourceValue = useTransition(cellSource, {
  duration: 1500,
});
const processSourceValue = useTransition(processSource, {
  duration: 1500,
});
const analyticalSourceValue = useTransition(analyticalSource, {
  duration: 1500,
});
cellSource.value = 170;
processSource.value = 200;
analyticalSource.value = 500;

const activeIndex = ref(0);
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
