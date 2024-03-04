<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-17 11:39:49
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-02-04 13:42:28
 * @FilePath: \obio-ui\src\components\Banner.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <section id="Hero-Slider" class="custom--form">
    <div class="container">
      <div class="row justify-content-center">
        <div class="Limit">
          <div class="pub-ico leftArrow" @click="arrowClick('left')"></div>
          <div class="pub-ico rightArrow" @click="arrowClick('right')"></div>
          <el-carousel
            ref="cardShow"
            :interval="5000"
            arrow="never"
            :height="600 + 'px'"
            :autoplay="true"
            trigger="click"
            indicator-position="none"
            @change="carouselChange"
          >
            <el-carousel-item v-for="item in imgList" :key="item.id">
              <div class="img_con">
                <over-lay
                  v-if="isShow"
                  :key="item.id + Math.random()"
                  :itemData="item"
                ></over-lay>
                <!-- <img class="element-img" alt="" :src="item.imgUrl" /> -->
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { onBeforeMount, ref, watch } from "vue";
import OverLay from "@/components/OverLayText.vue";
// import { areaCodeData } from "@/api/areaCode";
import { imgList } from "@/data/HomePage";

// type ImgItem = {
//   id: number;
//   imgUrl: string;
//   title: string;
// };

const props = defineProps({
  bannerHeight: {
    type: Number,
    default: 0,
  },
});
const cardShow = ref();
// const imgList = ref<ImgItem[]>([]);
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
//.img_cover{
//  width: 100%;
//  height: 100%;
//  background: rgba(51,112,255,.2);
//}
.banner {
  position: relative;
}
.pub-ico {
  width: 38px;
  height: 30px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  bottom: 10vh;
  z-index: 9999;
  cursor: pointer;
}
.leftArrow {
  background-image: url("@/assets/icons/ico_left1.png");
  right: 50%;
  margin-right: 5px;
}
.leftArrow:not(.swiper-button-disabled):hover {
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("@/assets/icons/ico_left2.png");
}
.rightArrow {
  background-image: url("@/assets/icons/ico_right1.png");
  left: 50%;
  margin-left: 5px;
}
.rightArrow:not(.swiper-button-disabled):hover {
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("@/assets/icons/ico_right2.png");
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.el-carousel__item {
  background-color: transparent;
}
// .el-carousel__item:nth-child(2n) {
//   background-color: #99a9bf;
// }

// .el-carousel__item:nth-child(2n + 1) {
//   background-color: #d3dce6;
// }

.img_con {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  :after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    // background: rgba(51, 112, 255, 0.2);
    height: 100%;
    z-index: 666;
  }

  .element-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

:deep(.el-carousel__arrow) {
  display: block !important;
  width: 70px;
  height: 70px;
  font-size: 40px;
  background-color: rgba(90, 88, 88, 0.1);
}

:deep(.el-carousel__arrow:hover) {
  background-color: rgba(16, 15, 15, 0.3);
}
.Limit {
  width: 100%;
}
.custom--form {
  //   background-image: url(../../_dist/images/icons/carousel_bg.png);
  background: url(@/assets/icons/carousel_bg.png) no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
