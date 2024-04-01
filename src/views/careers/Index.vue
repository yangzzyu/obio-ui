<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-04-01 15:37:43
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="lab-sciences">
    <Focus :focusObj="FocusData" />
    <section class="culture-box hero-style-top careers-box">
      <el-col
        :xs="22"
        :sm="20"
        :md="20"
        :lg="20"
        :xl="22"
        style="margin: auto"
        class="container"
      >
        <h1 class="title-color font-size50 txt-bold section-title fontf8">
          Our Culture
        </h1>
        <h2
          id="mission-box"
          class="title-color our-txt font-size30 section-title fontf7 txt-bold"
        >
          Mission: Enable gene therapy for better lives
        </h2>
        <p class="font-size18 textColor" style="margin-bottom: 20px">
          At OBiO, we empower gene therapy, driving advancements in gene drug
          development and clinical applications. We achieve this by providing
          top-tier technical services to research institutions and companies in
          the gene therapy field, thus empowering our clients to excel.
        </p>
        <p class="font-size18 textColor">
          We continuously collaborate with our clients, fostering the
          development of the gene therapy industry and working together to
          realize the noble aspiration of benefiting humanity and all living
          beings through gene therapy.
        </p>
      </el-col>
    </section>
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
            <el-col :xs="24" :span="4" />
            <el-col :xs="24" :span="6"
              ><div class="animate-imgxx uof img">
                <img :src="item.imgUrl" alt="SPIRO Site" />
              </div>
            </el-col>
            <el-col :xs="24" :span="12">
              <h1 class="font-size30 fontf7 iti fontf8 item-tit">
                {{ item.title }}
              </h1>
              <p class="font-size18 cro-p textColor" v-html="item.text"></p>
            </el-col>
          </el-row>
        </el-col>
      </div>
    </section>
    <!-- <Events /> -->
    <section>
      <el-col
        :xs="22"
        :sm="20"
        :md="20"
        :lg="20"
        :xl="22"
        style="margin: auto"
        class="container"
        ><el-row class="news--slider row" :gutter="10">
          <el-col :xs="24" :span="12" class="news--slider-i">
            <router-link
              to="/careers/life"
              class="block tans service--box_link bg-pinkbluelfr career-a"
            >
              <el-row
                :gutter="20"
                class="service--box align-items-start career-i"
              >
                <el-col :span="8" class="career-i"
                  ><div class="service--box_icon mb-3 min-width-70">
                    <img
                      class="icon--white"
                      :src="handleViteImages('career_act1.png')"
                      alt="GMP Vector Manufacturing icon"
                    />
                    <img
                      class="icon--colour"
                      :src="handleViteImages('career1.png')"
                      alt="GMP Vector Manufacturing icon"
                    /></div
                ></el-col>
                <el-col :span="16" class="career-i">
                  <h1
                    class="font-bold p-large mb-3 font-size30 txt-bold fontf7"
                  >
                    Life in OBIO
                  </h1></el-col
                >
              </el-row>
            </router-link>
          </el-col>
          <el-col :xs="24" :span="12" class="news--slider-i">
            <router-link
              to="/careers/job"
              class="block tans service--box_link bg-pinkbluelfr career-a"
            >
              <el-row
                :gutter="20"
                class="service--box align-items-start career-i"
              >
                <el-col :span="8" class="career-i"
                  ><div class="service--box_icon mb-3 min-width-70">
                    <img
                      class="icon--white"
                      :src="handleViteImages('career_act2.png')"
                      alt="GMP Vector Manufacturing icon"
                    />
                    <img
                      class="icon--colour"
                      :src="handleViteImages('career2.png')"
                      alt="GMP Vector Manufacturing icon"
                    /></div
                ></el-col>
                <el-col :span="16" class="career-i">
                  <h1
                    class="font-bold p-large mb-3 font-size30 txt-bold fontf7"
                  >
                    Job Opening
                  </h1></el-col
                >
              </el-row>
            </router-link>
          </el-col>
        </el-row></el-col
      >
    </section>
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
          <img :src="Labora.imgUrl" :alt="Labora.title" />
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
  title: "Careers",
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
    imgUrl: handleViteImages("careers1.png"),
    title: "Vision by 2026:",
    text: `Providing client-centered and high-quality 
service as our commitment, we strive to 
become a world-leading gene and cell 
therapy CXO group. 
`,
  },
  {
    imgUrl: handleViteImages("careers2.png"),
    title: "Value:",
    text: `Customer Focus, Efficient Execution, 
Excellence, Innovation, Integrity.
`,
  },
  {
    imgUrl: handleViteImages("careers3.png"),
    title: "Original Aspiration：",
    text: `Developing gene therapies for the welfare of 
mankind by virtue of its in-house developed 
all-round technology platform, its R&D and GMP 
production centers (floorage: 15,000 ㎡), and its <text class="title-color txt-bold">77,000</text>
㎡  Lingang base (under construction), 
OBiO is dedicated to constantly accelerating 
gene therapies researches, drug discovery, 
pharmaceutical studies, clinical and commercial 
development of gene therapies
`,
  },
]);
const Labora = ref(<any>{});
</script>

<style lang="scss" scoped>
.lab-sciences {
  overflow: hidden;
}
.culture-box {
  margin-top: -100px;
  position: relative;
}
</style>
