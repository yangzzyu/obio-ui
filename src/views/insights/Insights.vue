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
          <p class="font-size18 iti textColor">
            {{ item.time }}
          </p>
          <h1 class="title fontf4 font-size30 title-color">
            {{ item.title }}
          </h1>
          <div class="font-size18 ut-s2">
            {{ item.content }}
          </div>
          <router-link
            :to="
              item.type == 'news'
                ? '/news-details/releases/' + item.id
                : '/news-details/events/' + item.id
            "
            class="read-more font-size18 fontf7"
            >Read More</router-link
          >
        </el-col>
      </div>
      <router-link
        to="/insight/news"
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
        <h1 class="p-title font-size50 txt-bold fontf8 mb-3 mt-5">Inquiry</h1>
        <el-row :gutter="50" class="cdmo-top">
          <el-col :xs="24" :span="12">
            <h3 class="title-color font-size18 txt-bold fontf7">
              Laboratory Sciences
            </h3>

            <el-checkbox-group
              v-model="form.laboratory"
              @change="changeLaboratory"
              class="check-txt fontf2 font-size18"
              style="
                display: flex;
                flex-flow: column nowrap;
                align-items: flex-start;
              "
            >
              <el-checkbox
                value="AAV PACKAGING SERVICES"
                label="AAV PACKAGING SERVICES"
              >
                AAV PACKAGING SERVICES
              </el-checkbox>
              <el-checkbox
                value="LENTIVIRUS PACKAGING SERVICES"
                label="LENTIVIRUS PACKAGING SERVICES"
              >
                LENTIVIRUS PACKAGING SERVICES
              </el-checkbox>
              <el-checkbox
                value="AAV-Lung X AAV-Lung M3"
                label="AAV-Lung X AAV-Lung M3"
              >
                AAV-Lung X AAV-Lung M3
              </el-checkbox>
              <el-checkbox
                value="AAVneO + AAVMeta Platform"
                label="AAVneO + AAVMeta Platform"
              >
                AAVneO + AAVMeta Platform
              </el-checkbox>
              <el-checkbox
                value="Off-the-Shelf AAV PRODUCTS"
                label="Off-the-Shelf AAV PRODUCTS"
              >
                Off-the-Shelf AAV PRODUCTS
              </el-checkbox>
            </el-checkbox-group>
          </el-col>
          <el-col :xs="24" :span="12">
            <h3 class="title-color font-size18 txt-bold fontf7">
              CDMO Solutions
            </h3>
            <el-checkbox-group
              v-model="form.cdmo"
              @change="changeCdmo"
              class="check-txt fontf2 font-size18"
              style="
                display: flex;
                flex-flow: column nowrap;
                align-items: flex-start;
              "
            >
              <el-checkbox
                value="GENE AND CELL THERAPY CDMO SOLUTIONS AT OBIO"
                label="GENE AND CELL THERAPY CDMO SOLUTIONS AT OBIO"
              >
                GENE AND CELL THERAPY CDMO SOLUTIONS AT OBIO
              </el-checkbox>
              <el-checkbox
                value="CELL THERAPY CDMO SOLUTIONS"
                label="CELL THERAPY CDMO SOLUTIONS"
              >
                CELL THERAPY CDMO SOLUTIONS
              </el-checkbox>
              <el-checkbox
                value="ADENO-ASSOCIATED VIRUS CDMO SOLUTIONS"
                label="ADENO-ASSOCIATED VIRUS CDMO SOLUTIONS"
              >
                ADENO-ASSOCIATED VIRUS CDMO SOLUTIONS
              </el-checkbox>
              <el-checkbox
                value="iPSC CDMO SERVICES"
                label="iPSC CDMO SERVICES"
              >
                iPSC CDMO SERVICES
              </el-checkbox>
              <el-checkbox
                value="PHASE-APPROPRIATE PLASMID CDMO SOLUTIONS"
                label="PHASE-APPROPRIATE PLASMID CDMO SOLUTIONS"
              >
                PHASE-APPROPRIATE PLASMID CDMO SOLUTIONS
              </el-checkbox>
              <el-checkbox
                value="LENTIVIRAL VECTOR CDMO SOLUTIONS"
                label="LENTIVIRAL VECTOR CDMO SOLUTIONS"
              >
                LENTIVIRAL VECTOR CDMO SOLUTIONS
              </el-checkbox>
              <el-checkbox
                value="ONCOLYTIC VIRUS CDMO SOLUTIONS"
                label="ONCOLYTIC VIRUS CDMO SOLUTIONS"
              >
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
                    <el-input v-model="form.fname1" />
                  </el-form-item>
                </el-col>
                <el-col :span="5" :xs="24">
                  <el-form-item label="Last Name" required>
                    <el-input v-model="form.lname2" /> </el-form-item
                ></el-col>
                <el-col :span="5" :xs="24">
                  <el-form-item label="Company" required>
                    <el-input v-model="form.lname3" /> </el-form-item
                ></el-col>
                <el-col :span="5" :xs="24">
                  <el-form-item label="Email" required>
                    <el-input v-model="form.lname4" /> </el-form-item
                ></el-col>
                <el-col :span="5" :xs="24">
                  <el-form-item label="Phone Number" required>
                    <el-input v-model="form.lname5" /> </el-form-item></el-col
              ></el-row>
              <el-form-item label="Comments" prop="content">
                <el-input v-model="form.comment" type="textarea" :rows="10" />
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
                      :src="handleViteImages('captcha.png')"
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
                <!-- to="/releases" -->
                <a class="btn-a font-size18 fontf7 bg-pinkbluelfr"> Submit</a>
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
const form = reactive({
  laboratory: [],
  cdmo: [],
  comment: "",
});
const changeLaboratory = (e) => {
  const arr = [...form.laboratory, ...form.cdmo];
  form.comment = arr.join("\n");
};
const changeCdmo = (e) => {
  const arr = [...form.laboratory, ...form.cdmo];
  form.comment = arr.join("\n");
};
const releasesList = ref([]);
releasesList.value = [
  ...releases.value.slice(0, 3),
  ...events.value.slice(0, 2),
];
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
.check-txt :deep(.el-checkbox__label) {
  color: #747475;
  // font-size: 18px;
}
.check-txt :deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
  background-color: #1f757b;
  border-color: #1f757b;
}
.form-contact-main :deep(.el-form-item__label) {
  color: #747475;
}
</style>
