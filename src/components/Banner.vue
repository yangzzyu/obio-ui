<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-17 11:39:49
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-04-03 09:48:59
 * @FilePath: \obio-ui\src\components\Banner.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <section class="hero hero-slider-wrapper hero-style-1 hero-style-2">
    <div class="hero-slider">
      <el-col
        :xs="22"
        :sm="20"
        :md="20"
        :lg="20"
        :xl="22"
        style="margin: auto"
        class="container"
      >
        <div class="slide-title">
          <h2 class="font-size38 fontf8 txt-bold">
            Enable Gene Therapy for Better Lives
          </h2>
          <h2 class="font-size36 fontf8 txt-bold">
            Your Trustful Partner in Research and Manufacturing for Gene and
            Cell Therapy
          </h2>
        </div>
        <div class="slide-subtitle">
          <p class="font-size20 fontf8 txt-bold">
            Providing client-centered and high-quality service as our
            commitment, we strive to become a world leading gene and cell
            therapy CRO/CDMO group.
          </p>
        </div>
        <div class="btns">
          <router-link
            to="/cdmo"
            class="btn1 btn-i txt-bold"
            data-animation="animated bounceInUp"
            >Our Solutions</router-link
          >
          <router-link
            to="/capability"
            class="btn2 btn-i txt-bold"
            data-animation="animated bounceInUp"
            >Our Commitment</router-link
          >
        </div>
      </el-col>
      <div class="ab-svg_color">
        <img src="@/assets/icons/radian.svg" alt="ab-svg" />
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { onBeforeMount, ref, watch } from "vue";
import OverLay from "@/components/OverLayText.vue";
import { imgList } from "@/data/HomePage";


const props = defineProps({
  bannerHeight: {
    type: Number,
    default: 0,
  },
});
const cardShow = ref();
const isShow = ref(false);
function arrowClick(val) {
  if (val === "right") {
    cardShow.value.next();
  } else {
    cardShow.value.prev();
  }
}
const duration = ref(1000);
const transitionName = ref("");
carouselChange();
function carouselChange() {
  isShow.value = false;
  setTimeout(() => {
    isShow.value = true;
    // isShow.value = !isShow.value;
  }, 1000);
}
onBeforeMount(() => {});
</script>
<style lang="scss" scoped>
.slide-title {
  font-family: Roboto;
  font-weight: bold;
  color: #00ffea;
  overflow: hidden;
}
.slide-subtitle {
  font-family: Roboto;
  font-weight: 500;
  color: #ffffff;
  margin-top: 20px;
  margin-bottom: 20px;
  overflow: hidden;
}
.hero-slider {
  padding: 4rem 0;
}
.mission-content {
  font-family: Roboto;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 20px;
  overflow: hidden;
}
.btns {
  // overflow: hidden;
  // display: flex;
  position: relative;
  // width: 360px;
  .btn-i {
    background: linear-gradient(50deg, #014c97 0, #00818b 66%);
    border-radius: 30px;
    padding: 5px 10px;
    cursor: pointer;
    // position: absolute;
    z-index: 99;
    color: #fff;
    &:nth-child(2) {
      margin-left: 30px;
      right: 0;
    }
  }
  .btn-i:hover {
    background: #fff;
    color: #1f757b;
  }
}
.slide-caption {
  z-index: 99;
}
@media (max-width: 1199px) {
  .hero-style-1,
  .hero-style-2 {
    height: 550px;
  }
}

@media (max-width: 991px) {
  .hero-style-1,
  .hero-style-2 {
    height: 565px;
  }
}

@media (max-width: 767px) {
  .hero-style-1,
  .hero-style-2 {
    height: 450px;
  }
}
</style>
