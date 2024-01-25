<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-17 09:07:47
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-23 16:44:25
 * @FilePath: \obio-ui\src\views\HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- <script setup>
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template> -->

<template>
  <div class="index">
    <div class="banner-wrap">
      <Banner :banner-height="BannerHeight"></Banner>
      <!-- <over-lay></over-lay> -->
      <!-- <scroll-hint
          v-scroll-to="{
            element: '.wrap-block',
            duration: 300,
            easing: 'ease',
            offset: 1,
          }"
        ></scroll-hint> -->
      <div class="home-about-wrap animation-name: fadeInUp">
        <div class="home-about-content">
          <el-col
            :xs="18"
            :sm="20"
            :md="20"
            :lg="20"
            :xl="22"
            style="margin: auto"
          >
            <div class="pub-title"><i class="line"></i></div>
            <div
              class="txt fontf8 font-size50 line-height18 wow fadeInUp animated"
              data-wow-offset="100"
              data-wow-delay="0s"
              style="visibility: visible; animation-name: fadeInUp"
            >
              Providing client-centered and high-quality service as our
              commitment, we strive to become a world leading gene and cell
              therapy CRO/CDMO group.
            </div>
          </el-col>
        </div>
      </div>

      <div class="home-offering-wrap">
        <el-col
          :xs="18"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
        >
          <div class="pub-title style2 ub ub-ver ub-pe">
            <i class="line"></i
            ><span
              class="fontf8 font-size70 wow fadeInUp animated"
              style="visibility: visible; animation-name: fadeInUp"
              >Our Offering</span
            >
          </div>
          <el-row :gutter="0" class="list">
            <el-col
              class="item"
              :xs="{ span: 12, push: 12 }"
              :sm="{ span: 12, push: 16 }"
              :lg="{ span: 12, push: 12 }"
              :md="{ span: 10, push: 16 }"
            >
              <div
                class="box wow fadeInUp animated"
                style="visibility: visible; animation-name: fadeInUp"
              >
                <i class="bg"></i>
                <div class="txt-con ub ub-ver ub-pc">
                  <div class="title color1 font-size50 fontf7">
                    <router-link to="/cdmo">
                      CDMO <br />
                      Solutions</router-link
                    >
                    <!-- <a href="/cn/home/cdmo"
                      >CDMO <br />
                      Solutions</a
                    > -->
                  </div>
                  <div class="line"><i></i></div>
                  <div class="p font-size18 fontf2">
                    OBiO offers holistic solutions in process development,
                    analytical method, IND-enabling CMC, clinical and commercial
                    contract manufacturing of viral vector, oncolytic virus, and
                    cell therapy products.
                  </div>
                  <div class="more">
                    <!-- <a href="/cn/home/cdmo" class="m-a"></a> -->
                    <span class="m-span" @click="router.push('/cdmo')"></span>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col
              class="item"
              :xs="{ span: 12, pull: 12 }"
              :sm="{ span: 12, pull: 16 }"
              :lg="{ span: 12, pull: 12 }"
              :md="{ span: 10, pull: 12 }"
            >
              <div
                class="box wow fadeInUp animated"
                style="visibility: visible; animation-name: fadeInUp"
              >
                <i class="bg"></i>
                <div class="txt-con ub ub-ver ub-pc">
                  <div class="title color1 font-size50 fontf7">
                    <router-link to="/sys">
                      Laboratory <br />
                      Sciences</router-link
                    >
                    <!-- <a @click="goRouter('/sys')">
                      Laboratory <br />
                      Sciences</a
                    > -->
                  </div>
                  <div class="line"><i></i></div>
                  <div class="p font-size18 fontf2">
                    OBiO provides an integrated portfolio of plasmid
                    construction, viral packaging, cell biology and animal study
                    services for biomedical researchers.
                  </div>
                  <div class="more">
                    <span class="m-span" @click="router.push('/sys')"></span>
                    <!-- <a href="/cn/home/sys" class="m-a" target="_blank"></a> -->
                    <!-- <div class="m"><span class="m-a"></span></div> -->
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </div>
      <!-- v-on:mouseover="changeActive($event)" v-on:mouseout="removeActive($event)"> -->
      <div class="home-facilities">
        <el-col
          :xs="18"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
        >
          <div class="pub-title ub ub-ver ub-pe">
            <i class="line"></i
            ><span
              class="fontf8 font-size70 wow fadeInUp animated"
              style="visibility: visible; animation-name: fadeInUp"
              >Our Facilities</span
            >
          </div>
          <div class="home-facilities-mob">
            <!-- <el-row class="list ub ub-ac ub-pj">
              <el-col
                :xs="22"
                :span="8"
                class="item wow fadeInUp animated"
                style="visibility: visible; animation-name: fadeInUp"
                v-for="(item, index) in homeFacilitiesData"
                :key="index"
                :class="activeIndex == index ? 'active animated' : 'animated'"
                @mouseenter="changeActive(index)"
              >
                <div class="img">
                  <div class="img1">
                    <img
                      :src="item.imgUrl"
                      alt="International Medical Park Shanghai, China"
                    />
                  </div>
                  <a href="/cn/home/about/cid/881" class="shaw">
                    <img
                      src="@/assets/icons/bg3.png"
                      :style="{ backgroundImage: 'url(' + item.bgUrl + ')' }"
                      class="shaw-bg"
                    />
                    <div class="txt">
                      <div class="title fontf3 font-size30">
                        {{ item.title }}
                      </div>
                      <div class="line"></div>
                      <div class="pm font-size20">
                        <ul>
                          <li v-for="(i, n) in item.pmText" :key="n">
                            {{ i }}
                          </li>
                        </ul>
                      </div>
                      <div class="m"><span class="m-a"></span></div>
                    </div>
                  </a>
                </div>
                <div class="p font-size24 fontf3">
                  {{ item.pTxt }}
                </div>
              </el-col>
            </el-row> -->
            <div class="list ub ub-ac ub-pj" id="facilities">
              <div
                class="item wow fadeInUp animated"
                style="visibility: visible; animation-name: fadeInUp"
                v-for="(item, index) in homeFacilitiesData"
                :key="index"
                :class="activeIndex == index ? 'active animated' : 'animated'"
                @mouseenter="changeActive(index)"
              >
                <div class="img">
                  <div class="img1">
                    <img
                      :src="item.imgUrl"
                      alt="International Medical Park Shanghai, China"
                    />
                  </div>
                  <router-link :to="item.path" class="shaw">
                    <img
                      src="@/assets/icons/bg3.png"
                      :style="{
                        backgroundImage:
                          'url(' + handleViteImages(item.bgUrl) + ')',
                      }"
                      class="shaw-bg"
                      :alt="item.title"
                    />
                    <div class="txt">
                      <div class="title fontf3 font-size30">
                        {{ item.title }}
                      </div>
                      <div class="line"></div>
                      <div class="pm font-size20">
                        <ul>
                          <li v-for="(i, n) in item.pmText" :key="n">
                            {{ i }}
                          </li>
                        </ul>
                      </div>
                      <div class="m"><span class="m-a"></span></div>
                    </div>
                  </router-link>
                </div>
                <div class="p font-size24 fontf3">
                  {{ item.pTxt }}
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </div>
      <div class="home-insights">
        <div class="bg1"></div>
        <div class="home-insights-wrap">
          <div class="bg2"></div>
          <el-col
            :xs="18"
            :sm="20"
            :md="20"
            :lg="20"
            :xl="22"
            style="margin: auto"
          >
            <div class="pub-title style2 ub ub-ver ub-pe">
              <i class="line"></i
              ><span
                class="fontf8 font-size70 wow fadeInUp animated"
                style="visibility: visible; animation-name: fadeInUp"
                >Insights</span
              >
            </div>
            <el-row>
              <el-col class="item" :xs="24" :sm="6" :md="6" :lg="4" :xl="3">
                <ul class="ul-side font-size28 fontf4">
                  <li
                    class="wow fadeInUp animated"
                    style="visibility: visible; animation-name: fadeInUp"
                    @click="handleInsightsType(1)"
                    :class="InsightsType === 1 ? 'active animated' : 'animated'"
                  >
                    <span>Press Releases</span>
                  </li>
                  <li
                    class="wow fadeInUp animated"
                    style="visibility: visible; animation-name: fadeInUp"
                    @click="handleInsightsType(2)"
                    :class="InsightsType === 2 ? 'active animated' : 'animated'"
                  >
                    <span>Events</span>
                  </li>
                </ul>
              </el-col>
              <el-col class="item" :xs="24" :sm="18" :md="18" :lg="20" :xl="21">
                <div class="insights-group">
                  <ul class="ul-list active">
                    <li
                      class="wow fadeInUp animated active"
                      style="visibility: visible; animation-name: fadeInUp"
                      v-for="(item, index) in InsightsList"
                      :key="index"
                    >
                      <a href="/cn/home/news/id/241" class="block">
                        <div class="time">{{ item.time }}</div>
                        <div class="title fontf3 font-size24">
                          {{ item.title }}
                        </div>
                        <div class="p font-size18">
                          <div class="ut-s2">
                            {{ item.pText }}
                          </div>
                        </div>
                      </a>
                    </li>

                    <li
                      style="border-bottom-width: 0"
                      class=""
                      v-if="InsightsType === 1"
                    >
                      <div
                        class="more wow fadeInUp animated"
                        style="visibility: visible; animation-name: fadeInUp"
                      >
                        <!-- <a href="/cn/home/news/id/559">ALL PRESS RELEASES</a> -->
                        <span class="m-span" @click="router.push('/releases')">ALL PRESS RELEASES</span>
                      </div>
                    </li>
                    <li
                      style="border-bottom-width: 0"
                      v-if="InsightsType === 2"
                    >
                      <div class="more">
                        <!-- <a href="/cn/home/news/id/719">ALL EVENTS</a> -->
                        <span class="m-span" @click="router.push('/events')">ALL EVENTS</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </div>
      </div>

      <div class="home-contact">
        <el-col
          :xs="18"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
        >
          <div class="pub-title ub ub-ver ub-pe">
            <i class="line"></i
            ><span class="fontf8 font-size70">Contact Us</span>
          </div>
          <el-row>
            <el-col :span="12" :xs="24">
              <el-form
                ref="ruleFormRef"
                :model="ruleForm"
                :rules="rules"
                label-width="180px"
                class="form-contact-main"
                :label-position="'top'"
                status-icon
              >
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item label="First Name" required>
                      <el-input v-model="ruleForm.fname" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="Last Name" required>
                      <el-input
                        v-model="ruleForm.lname"
                      /> </el-form-item></el-col
                ></el-row>
                <el-form-item label="Company" required>
                  <el-input v-model="ruleForm.company" />
                </el-form-item>
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item label="Email" required>
                      <el-input v-model="ruleForm.email" /> </el-form-item
                  ></el-col>
                  <el-col :span="12">
                    <el-form-item label="Phone Number" required>
                      <el-input v-model="ruleForm.dh" /> </el-form-item></el-col
                ></el-row>
                <el-form-item label="I'm interested in…" required>
                  <el-select v-model="ruleForm.xq" placeholder="">
                    <el-option
                      label="General Inquiry"
                      value="General Inquiry"
                    />
                    <el-option
                      label="Laboratory Sciences"
                      value="Laboratory Sciences"
                    />
                    <el-option
                      label="Process Development"
                      value="Process Development"
                    />
                    <el-option
                      label="Analytical/Formulation Development"
                      value="Analytical/Formulation Development"
                    />
                    <el-option
                      label="Non-IND (IIT) Service"
                      value="Non-IND (IIT) Service"
                    />
                    <el-option
                      label="IND-Enabling CMC (IND-CMC) Service"
                      value="IND-Enabling CMC (IND-CMC) Service"
                    />
                    <el-option
                      label="Clinical Manufacturing"
                      value="Clinical Manufacturing"
                    />
                    <el-option
                      label="Commercial Manufacturing"
                      value="Commercial Manufacturing"
                    />
                    <el-option
                      label="Extended Services (Pre-IND/Post-IND)"
                      value="Extended Services (Pre-IND/Post-IND)"
                    />
                    <el-option
                      label="Investor Relations"
                      value="Investor Relations"
                    />
                  </el-select>
                </el-form-item>
                <el-form-item label="Questions or Comments" prop="content">
                  <el-input v-model="ruleForm.content" type="textarea" />
                </el-form-item>
                <el-form-item label="Security Code" required>
                  <el-col :span="11">
                    <!-- <el-form-item > -->
                    <el-input v-model="ruleForm.verify" />
                    <!-- </el-form-item> -->
                  </el-col>
                  <el-col :span="11">
                    <div class="put ub-f1" style="margin-left: 12px">
                      <img
                        class="verifyImg"
                        id="captcha"
                        alt="verifyImg"
                        style="width: 150px; cursor: pointer; height: 38px"
                      />
                    </div>
                  </el-col>
                </el-form-item>
                <el-form-item label="I AGREE" required>
                  <div class="checks_text">
                    <el-checkbox
                      v-model="ruleForm.checked"
                      size="large"
                      class="checks_inpt"
                    />
                    <span
                      >By submitting this form I agree that OBiO may process my
                      data in the manner described in OBiO’s<a
                        xhref="/cn/home/ys/cid/861"
                        target="_blank"
                        style="color: #25b096"
                        >Privacy Policy</a
                      ></span
                    >
                  </div>
                </el-form-item>
                <el-form-item label="">
                  <div class="lab fontf3 font-size18">
                    We won’t share your information.
                  </div>
                </el-form-item>
                <div class="sub fontf3 font-size14">
                  <input
                    lay-submit=""
                    lay-filter="dataPost"
                    type="button"
                    value="SUBMIT"
                  />
                </div>
              </el-form>
            </el-col>
            <el-col :span="12" :xs="24">
              <div class="right-wrap">
                <div class="ico-r6">
                  <img
                    src="@/assets/icons/ico6.png"
                    class="img-responsive"
                    style="max-width: 100%"
                    alt=""
                  />
                </div>
                <div class="ico-rline"></div>
                <ul class="right-mes">
                  <li>
                    <div class="labr fontf3">Main</div>
                    <div class="ms ico1 fontf3 font-size18">
                      +86 400-151-5198
                    </div>
                  </li>
                  <li>
                    <div class="labr fontf3">Tel</div>
                    <div class="ms icn1 fontf3 font-size18">
                      +1-408-807-5641
                    </div>
                  </li>
                  <li>
                    <div class="labr fontf3">For General Inquiry</div>
                    <div class="ms ico2 fontf3 font-size18">
                      oobio@obiosh.com
                    </div>
                  </li>
                  <li>
                    <div class="labr fontf3">For Business Inquiry</div>
                    <div class="ms ico2 fontf3 font-size18">bd@obiosh.com</div>
                  </li>
                  <li>
                    <div class="labr fontf3">Address</div>
                    <div class="ms icn2 fontf3 font-size18">
                      446 S Hillview Dr Milpitas, CA 95035 U.S.A
                    </div>
                  </li>
                </ul>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </div>
    </div>
    <!-- <index-service></index-service> -->
  </div>
</template>
<script lang="ts" setup name="Home">
import "wow.js/css/libs/animate.css";
import WOW from "wow.js";
// import IndexService from '@/components/IndexService.vue'
import Banner from "@/components/Banner.vue";
// import ScrollHint from '@/components/ScrollHint.vue'
import { homeFacilitiesData, insightsData } from "@/data/HomePage";
import { handleViteImages, goRouter } from "@/utils";
import { onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";

import mainStore from "@/stores/main";
import { handleError } from "vue";
const router = useRouter();
const store = mainStore();

const index_header = ref("");
const BannerHeight = ref(0);

const InsightsType = ref(1);
const InsightsList = ref([]);
InsightsList.value = insightsData.value.filter((i) => i.type === 1);
function handleInsightsType(params) {
  InsightsType.value = params;
  InsightsList.value = insightsData.value.filter((i) => i.type === params);
}
const ruleForm = ref({});
const rules = ref([]);
const scrollTop = ref(0);
const wow = ref("");
onMounted(() => {
  var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: true,
    live: true,
    callback: function (box) {},
    scrollContainer: null,
    resetAnimation: true,
  });

  wow.init();
  window.addEventListener("resize", setBannerHeight);
  setBannerHeight();
  window.addEventListener("scroll", scrollHandle);
});

onUnmounted(() => {
  window.removeEventListener("resize", setBannerHeight);
  window.removeEventListener("scroll", scrollHandle);
});
const activeIndex = ref("/");
function changeActive(index) {
  // $event.currentTarget.className = "item wow fadeInUp animated active";
  activeIndex.value = index;
}
function removeActive($event) {
  $event.currentTarget.className = "item wow fadeInUp animated";
}
function setBannerHeight() {
  BannerHeight.value = window.innerHeight;
  store.setBannerHeight(BannerHeight.value);
}

function scrollHandle() {
  scrollTop.value =
    document.documentElement.scrollTop ||
    window.pageYOffset ||
    document.body.scrollTop;
  if (scrollTop.value <= BannerHeight.value - 35) {
    store.setHeaderLogo(true);
    store.setShadowActive(false);
    store.setNavDarkActive(false);
  } else {
    store.setHeaderLogo(false);
    store.setShadowActive(true);
    store.setNavDarkActive(true);
  }
}
</script>
<style lang="scss" scoped>
.home-about-wrap .home-about-content,
.home-about-wrap {
  @media (max-width: 765px) {
    background-size: 90%;
  }
}
.banner-wrap {
  overflow: hidden;
  position: relative;
  .home-about-wrap {
    padding-top: 24vh;
    position: relative;
    z-index: 9;
    margin-top: -24vh;
    pointer-events: none;
  }
  .home-about-wrap .home-about-content {
    overflow: hidden;
    position: relative;
  }

  .home-about-wrap .txt {
    padding: 6vh 0 20vh;
    background-image: linear-gradient(135deg, #0d9cad, #009d85);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    pointer-events: auto;
    font-weight: bold;
  }
  .home-about-wrap .home-about-content:after {
    display: block;
    width: 605px;
    height: 706px;
    background: url(@/assets/icons/home_bg1.png) no-repeat right -13vh / auto 100%;
    content: "";
    position: absolute;
    top: 0;
    right: 50%;
    margin-right: 310px;
    z-index: -1;
  }
  .home-about-wrap .home-about-content:after {
    display: block;
    width: 605px;
    height: 706px;
    background: url(@/assets/icons/home_bg1.png) no-repeat right -13vh / auto 100%;
    content: "";
    position: absolute;
    top: 0;
    right: 50%;
    margin-right: 310px;
    z-index: -1;
  }
  @media (max-width: 1700px) and (min-width: 768px) {
    .pub-title {
      height: 120px;
    }
  }

  // .pub-title {
  //   padding-left: 20px;
  //   height: 160px;
  //   position: relative;
  //   color: #014099;
  // }
  @media (max-width: 1700px) and (min-width: 768px) {
    .pub-title .line {
      height: 120px;
    }
  }

  .pub-title .line {
    position: absolute;
    bottom: 0;
    left: -10px;
    width: 12px;
    height: 160px;
    background: url(@/assets/icons/ico_ly.png) no-repeat left bottom;
  }
}
// .home-offering-wrap {
//   background: url(@/assets/icons/offering_bg.jpg) no-repeat center/cover;
//   background-attachment: fixed;
//   padding-bottom: 120px;
//   overflow: hidden;
// }
.overlay {
  z-index: 666;
}

.wrap-block {
  position: relative;
  padding-top: 54px;
}
.shaw-bg {
  background-repeat: no-repeat;
  background: no-repeat center/cover;
}
</style>
