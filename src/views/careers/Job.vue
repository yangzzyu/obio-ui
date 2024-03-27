<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-03-27 16:53:03
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="lab-sciences">
    <Focus :focusObj="FocusData" />
    <section class="culture-box hero-style-top">
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
          Join an amazing energy
        </h1>

        <p class="font-size24 textColor" style="margin-bottom: 20px">
          As our company and industry grow and change, we commit to keeping OBIO
          culture part of that growth conversation. By weaving our values into
          that culture and regularly pointing back to our mission and vision, an
          excitement is born and will grow.
        </p>
        <p class="font-size24 textColor mb-5">
          That happens with a leadership team steadfastly practicing what we
          preach, yet culture does not stop there. We expect every employee to
          join the effort of making OBIO amazing, embracing our values in the
          day to day task list and speaking up when something’s not right. With
          that collective resolve, we stand in anticipation of the growth we
          will experience together.
        </p>
        <el-row
          class="news--slider row us-list"
          :gutter="10"
          style="margin-top: 20px"
        >
          <el-col
            :xs="24"
            :span="6"
            class="news--slider-i us-list-i"
            v-for="(item, index) in cdmoList"
            :key="index"
          >
            <router-link
              to="/spiroSite"
              class="block tans service--box_link bg-pinkbluelfr"
            >
              <div class="service--box align-items-start">
                <div class="service--box_icon mb-3 min-width-70">
                  <img
                    class="icon--white"
                    :src="item.actImgUrl"
                    alt="GMP Vector Manufacturing icon"
                  />
                  <img
                    class="icon--colour"
                    :src="item.imgUrl"
                    alt="GMP Vector Manufacturing icon"
                  />
                </div>
                <h1 class="font-bold p-large mb-3 font-size24 fontf7">
                  {{ item.title }}
                </h1>
                <p class="textColor font-size14 txt-bold">
                  {{ item.text }}
                </p>
              </div>
            </router-link>
          </el-col>
        </el-row>
      </el-col>
    </section>
    <section id="" class="cap-section hero-style-top cro-list mb-5">
      <el-col
        :xs="22"
        :sm="20"
        :md="20"
        :lg="20"
        :xl="22"
        style="margin: auto"
        class="container"
      >
        <h1 class="title-color font-size50 txt-bold p-title fontf8 mb-3 mt-5">
          Latest release
        </h1>
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
          </el-col>
        </div>
      </el-col>
    </section>
    <!-- <Events /> -->
  </div>
  <el-dialog
    v-model="dialogVisible"
    title=""
    width="60%"
    :before-close="handleClose"
  >
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
  </el-dialog>
</template>

<script lang="ts" setup name="LabSciences">
import { reactive, ref } from "vue";
import Focus from "@/components/Focus.vue";
import Events from "@/components/Events.vue";
import { handleViteImages, goRouter } from "@/utils";

const FocusData = ref({
  title: "Job Opening",
  hiddenXsImgUrl: handleViteImages("head_bg.jpg"),
  visibleXsImgUrl: handleViteImages("head_bg.jpg"),
});
const dialogVisible = ref(false);
function handleClose() {
  Labora.value = {};
  dialogVisible.value = false;
}
const cdmoList = ref([
  {
    imgUrl: handleViteImages("job1.png"),
    actImgUrl: handleViteImages("job_act1.png"),
    title: "Core Values",
    text: `Everything we do is
driven by our values. We
lead with science, our
people, and doing the
right thing.
`,
  },
  {
    imgUrl: handleViteImages("job2.png"),
    actImgUrl: handleViteImages("job_act2.png"),
    title: "Diversity & Belonging",
    text: `Together is how we get
better. We are committed
to a culture that
embraces everyone.
`,
  },
  {
    imgUrl: handleViteImages("job3.png"),
    actImgUrl: handleViteImages("job_act3.png"),
    title: "Community",
    text: `Love your life in
Indianapolis. We are a
proud part of the
growing biotech hub
community.
`,
  },
  {
    imgUrl: handleViteImages("job4.png"),
    actImgUrl: handleViteImages("job_act4.png"),
    title: "Benefits",
    text: `Our people deserve the
best. We provide a
benefits package tha
ttruly rewards our team.
`,
  },
]);
const Labora = ref(<any>{});
const releasesList = reactive([
  {
    id: 13,
    title: `Please join us in welcoming Swati to OBiO Tech`,
    time: "February 16th 2024",
    subhead: "",
    content: ``,
  },
  {
    id: 14,
    title: `Please join us in welcoming Swati to OBiO Tech`,
    time: "February 16th 2024",
    subhead: "",
    content: ``,
  },
]);
</script>

<style lang="scss" scoped>
.lab-sciences {
  overflow: hidden;
}
.culture-box {
  margin-top: -100px;
  position: relative;
}
.us-list-i:hover {
  .textColor {
    color: #fff;
  }
}
</style>
