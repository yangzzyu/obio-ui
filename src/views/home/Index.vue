<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-17 09:07:47
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-27 15:28:50
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
      <div class="home-about-wrap animation-name: fadeInUp">
        <div class="home-about-content">
          <el-col
            :xs="22"
            :sm="20"
            :md="20"
            :lg="20"
            :xl="22"
            style="margin: auto"
            class="container"
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
      <!-- <div class="home-about-wrap"> -->
      <div class="Viral-Vector-wrap">
        <el-col
          :xs="22"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
          class="container"
        >
          <ObioFooter :list="vectorFooterList" />
        </el-col>
      </div>
      <!-- </div> -->
      <div class="home-offering-wrap">
        <el-col
          :xs="22"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
          class="container"
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
              :xs="{ span: 24, push: 0 }"
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
                  <div class="title color1 font-size38 fontf7">
                    <router-link to="/cdmo">
                      CDMO <br />
                      Solutions</router-link
                    >
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
              :xs="{ span: 24, pull: 0 }"
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
                  <div class="title color1 font-size38 fontf7">
                    <router-link to="/sys">
                      Laboratory <br />
                      Sciences</router-link
                    >
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
      <div class="home-facilities">
        <el-col
          :xs="22"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
          class="container"
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
            <div class="list ub-ac ub-pj" id="facilities">
              <el-row>
                <el-col
                  :xs="24"
                  :span="8"
                  class="item wow fadeInUp animated"
                  style="visibility: visible; animation-name: fadeInUp"
                  v-for="(item, index) in homeFacilitiesData"
                  :key="index"
                  :class="activeIndex == index ? 'active animated' : 'animated'"
                  @mouseenter.stop="changeActive(index)"
                >
                  <div>
                    <div class="img">
                      <div class="img1">
                        <img :src="item.imgUrl" :alt="item.title" />
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
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </div>
      <div class="home-insights">
        <div class="bg1"></div>
        <div class="home-insights-wrap">
          <div class="bg2"></div>
          <el-col
            :xs="22"
            :sm="20"
            :md="20"
            :lg="20"
            :xl="22"
            style="margin: auto"
            class="container"
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
                      <router-link
                        :to="`/news-details/${
                          InsightsType === 1 ? 'releases' : 'events'
                        }/${item.id}`"
                        class="block"
                      >
                        <div class="time">{{ item.time }}</div>
                        <div class="title fontf3 font-size24">
                          {{ item.title }}
                        </div>
                        <div class="p font-size18">
                          <div class="ut-s2">
                            {{ item.pText }}
                          </div>
                        </div>
                      </router-link>
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
                        <span class="m-span" @click="router.push('/releases')"
                          >ALL PRESS RELEASES</span
                        >
                      </div>
                    </li>
                    <li
                      style="border-bottom-width: 0"
                      v-if="InsightsType === 2"
                    >
                      <div class="more">
                        <!-- <a href="/cn/home/news/id/719">ALL EVENTS</a> -->
                        <span class="m-span" @click="router.push('/events')"
                          >ALL EVENTS</span
                        >
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
          :xs="22"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
          class="container"
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
                  <el-col :span="12" :xs="24">
                    <el-form-item label="First Name" required>
                      <el-input v-model="ruleForm.fname" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="12" :xs="24">
                    <el-form-item label="Last Name" required>
                      <el-input
                        v-model="ruleForm.lname"
                      /> </el-form-item></el-col
                ></el-row>
                <el-form-item label="Company" required>
                  <el-input v-model="ruleForm.company" />
                </el-form-item>
                <el-row :gutter="20">
                  <el-col :span="12" :xs="24">
                    <el-form-item label="Email" required>
                      <el-input v-model="ruleForm.email" /> </el-form-item
                  ></el-col>
                  <el-col :span="12" :xs="24">
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
                        src="@/assets/icons/captcha.png"
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
                    <div class="checks_txt">
                      By submitting this form I agree that OBiO may process my
                      data in the manner described in OBiO’s<a
                        xhref="/cn/home/ys/cid/861"
                        target="_blank"
                        style="color: #25b096"
                        >Privacy Policy</a
                      >
                    </div>
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
  </div>
</template>
<script lang="ts" setup name="Home">
import "wow.js/css/libs/animate.css";
import WOW from "wow.js";
import Banner from "@/components/Banner.vue";
import ObioFooter from "@/components/ObioFooter.vue";
import { homeFacilitiesData, insightsData } from "@/data/HomePage";
import { handleViteImages, goRouter } from "@/utils";
import { onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import { releases, events } from "@/views/insights/data/Index";
type FormItem = {
  [key: string]: string;
};
const router = useRouter();
const BannerHeight = ref(0);

const InsightsType = ref(1);
const InsightsList = ref([]);
function handleInsightsType(params) {
  InsightsType.value = params;
  if (params === 1) {
    InsightsList.value = releases.value.slice(0, 3);
  } else if (params === 2) {
    InsightsList.value = events.value.slice(0, 3);
  }
}
const ruleForm = ref<FormItem>({});
const rules = ref([]);
const vectorFooterList = ref([
  {
    bgUrl:
      "https://www.obio-tech.com/public/uploads/20220327/3fe6acf22f4fcd938628771fdeabbef9.png",
    txt: "10+ years of dedication to gene and cell therapy",
  },
  {
    bgUrl:
      "https://www.obio-tech.com/public/uploads/20220327/b7b2b3abc455d13f3a93c100cc0ae008.png",
    txt: `Track record of 100 gene and cell therapy projects`,
  },
  {
    bgUrl:
      "https://www.obio-tech.com/public/uploads/20220327/28357454cd094b26b016a3fd15727a39.png",
    txt: `Compliant manufacturing for successful initiation of
                  multi-center clinical trials`,
  },
  {
    bgUrl:
      "https://www.obio-tech.com/public/uploads/20220327/e6bfcf1cb84b0254cea3aefadf2f1e5c.png",
    txt: `Comprehensive quality system with regulatory compliant
                  facilities`,
  },
  {
    bgUrl:
      "https://www.obio-tech.com/public/uploads/20220402/b31aa85b97d72ef8e77c7297b11d1867.png",
    txt: `Sufficient capacity and state-of-the-art facilities for global
                  manufacturing needs`,
  },
  {
    bgUrl:
      "https://www.obio-tech.com/public/uploads/20220327/71ad488b3a8b061d5bbbafebc1239290.png",
    txt: `End-to-end professional project management for in-time
                  supports and on-time delivery`,
  },
]);
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
  handleInsightsType(1);
});

onUnmounted(() => {
  window.removeEventListener("resize", setBannerHeight);
});
const activeIndex = ref(-1);
function changeActive(index) {
  activeIndex.value = index;
}
function setBannerHeight() {
  BannerHeight.value = window.innerHeight;
}
</script>
<style lang="scss" scoped>
.banner-wrap {
  overflow: hidden;
  position: relative;
}
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
.home-facilities-mob .list .item {
  display: flex;
  justify-content: center;
}
</style>
