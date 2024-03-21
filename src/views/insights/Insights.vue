<template>
  <div class="Insights-wrap">
    <section id="cro" class="cro-list">
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
          <!-- <el-row :gutter="100">
            <el-col :xs="24" :span="8"
              ><div class="animate-imgxx uof img">
                <img
                  :src="handleViteImages('@/assets/icons/careers3.png')"
                  alt="SPIRO Site"
                />
              </div>
            </el-col>
            <el-col :xs="24" :span="16">
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
              ></el-col
            >
          </el-row> -->
        </el-col>
      </div>
      <router-link
        to="/releases"
        class="btn-a font-size18 fontf7 bg-pinkbluelfr mb-5"
      >
        All Press Releases
      </router-link>
    </section>
    <Events :isShow="true" />
    <section id="productions" class="productions-list">
      <el-col
        :xs="22"
        :sm="20"
        :md="20"
        :lg="20"
        :xl="22"
        style="margin: auto"
        class="container"
      >
        <h1 class="p-title font-size50 txt-bold fontf8 mb-3 mt-5">
          Productions
        </h1>
        <el-row :gutter="50" class="cdmo-top">
          <el-col :xs="24" :span="8"
            ><div class="animate-imgxx uof img">
              <img
                width="100%"
                :src="handleViteImages('@/assets/icons/productions.png')"
                alt="SPIRO Site"
              />
            </div>
          </el-col>
          <el-col :xs="24" :span="16">
            <p class="font-size20 cro-p textColor">
              Discover OBiO Tech's Cutting-Edge Intelli-M GMP-Compliant Viral
              Vector Production Line. Unlock Comprehensive and Diversified
              Solutions for Large-Scale Production, Offering Capacities Ranging
              from 20L to 2000L. Elevate Your Production Efficiency Today! #cgt
              #cellandgenetherapy #genetherapy #celltherapy #cdmo #2024trends
              #globaldata #asgct
            </p>
          </el-col>
        </el-row>
        <h1 class="p-title font-size50 txt-bold fontf8 mb-3 mt-5">Inquiry</h1>
        <el-row :gutter="50" class="cdmo-top">
          <el-col :xs="24" :span="12">
            <h3 class="title-color font-size36 txt-bold fontf7">
              Laboratory Sciences
            </h3>

            <el-checkbox-group
              v-model="form.type"
              style="
                display: flex;
                flex-flow: column nowrap;
                align-items: flex-start;
              "
            >
              <el-checkbox value="AAV PACKAGING SERVICES" name="type">
                AAV PACKAGING SERVICES
              </el-checkbox>
              <el-checkbox value="LENTIVIRUS PACKAGING SERVICES" name="type">
                LENTIVIRUS PACKAGING SERVICES
              </el-checkbox>
              <el-checkbox value="AAV-Lung X AAV-Lung M3" name="type">
                AAV-Lung X AAV-Lung M3
              </el-checkbox>
              <el-checkbox value="AAVneO + AAVMeta Platform" name="type">
                AAVneO + AAVMeta Platform
              </el-checkbox>
              <el-checkbox value="Off-the-Shelf AAV PRODUCTS" name="type">
                Off-the-Shelf AAV PRODUCTS
              </el-checkbox>
            </el-checkbox-group>
          </el-col>
          <el-col :xs="24" :span="12">
            <h3 class="title-color font-size36 txt-bold fontf7">
              CDMO Solutions
            </h3>
            <el-checkbox-group
              v-model="form.type"
              style="
                display: flex;
                flex-flow: column nowrap;
                align-items: flex-start;
              "
            >
              <el-checkbox
                value="GENE AND CELL THERAPY CDMO SOLUTIONS AT OBIO"
                name="type"
              >
                GENE AND CELL THERAPY CDMO SOLUTIONS AT OBIO
              </el-checkbox>
              <el-checkbox value="CELL THERAPY CDMO SOLUTIONS" name="type">
                CELL THERAPY CDMO SOLUTIONS
              </el-checkbox>
              <el-checkbox
                value="ADENO-ASSOCIATED VIRUS CDMO SOLUTIONS"
                name="type"
              >
                ADENO-ASSOCIATED VIRUS CDMO SOLUTIONS
              </el-checkbox>
              <el-checkbox value="iPSC CDMO SERVICES" name="type">
                iPSC CDMO SERVICES
              </el-checkbox>
              <el-checkbox
                value="PHASE-APPROPRIATE PLASMID CDMO SOLUTIONS"
                name="type"
              >
                PHASE-APPROPRIATE PLASMID CDMO SOLUTIONS
              </el-checkbox>
              <el-checkbox value="LENTIVIRAL VECTOR CDMO SOLUTIONS" name="type">
                LENTIVIRAL VECTOR CDMO SOLUTIONS
              </el-checkbox>
              <el-checkbox value="ONCOLYTIC VIRUS CDMO SOLUTIONS" name="type">
                ONCOLYTIC VIRUS CDMO SOLUTIONS
              </el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" :xs="24">
            <el-form
              ref="formRef"
              :model="form"
              label-width="200px"
              class="form-contact-main"
              :label-position="'top'"
              status-icon
            >
              <el-row :gutter="20">
                <el-col :span="4" :xs="24">
                  <el-form-item label="First Name" required>
                    <el-input v-model="form.fname" />
                  </el-form-item>
                </el-col>
                <el-col :span="5" :xs="24">
                  <el-form-item label="Last Name" required>
                    <el-input v-model="form.lname" /> </el-form-item
                ></el-col>
                <el-col :span="5" :xs="24">
                  <el-form-item label="Company" required>
                    <el-input v-model="form.lname" /> </el-form-item
                ></el-col>
                <el-col :span="5" :xs="24">
                  <el-form-item label="Email" required>
                    <el-input v-model="form.lname" /> </el-form-item
                ></el-col>
                <el-col :span="5" :xs="24">
                  <el-form-item label="Phone Number" required>
                    <el-input v-model="form.lname" /> </el-form-item></el-col
              ></el-row>
              <el-form-item label="Comments" prop="content">
                <el-input v-model="form.content" type="textarea" />
              </el-form-item>
              <el-form-item label="Security Code" required>
                <el-col :span="11">
                  <el-input v-model="form.verify" />
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
                    v-model="form.checked"
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
              <div class="fontf3 font-size14">
                <!-- <input
                  lay-submit=""
                  lay-filter="dataPost"
                  type="button"
                  value="SUBMIT"
                /> -->
                <router-link
                  to="/releases"
                  class="btn-a font-size18 fontf7 bg-pinkbluelfr"
                >
                  Submit</router-link
                >
              </div>
            </el-form>
          </el-col>
        </el-row>
      </el-col>
    </section>
  </div>
</template>

<script lang="ts" setup name="Cdmo">
import { ref, reactive } from "vue";
import { releases, events } from "./data/Index";
import Events from "@/components/Events.vue";
import { handleViteImages } from "@/utils";

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
    slidesPerView: 2,
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
const form = reactive({});
const releasesList = ref([]);
releasesList.value = releases.value.slice(0, 5);
</script>

<style lang="scss" scoped>
.my-slide-visible {
  margin-right: 10px;
}
.Insights-wrap {
  .read-more {
    justify-content: flex-start;
    margin-top: 20px;
  }
  .btn-a {
    width: 255px;
    text-align: center;
    margin: 20px auto;
    display: flex;
    // width: fit-content;
    justify-content: center;
  }
}
</style>
