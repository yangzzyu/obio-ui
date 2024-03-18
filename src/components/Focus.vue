<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-27 14:59:46
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- hero-style-1 hero-style-2 -->
  <div
    class="focus"
    :class="focusObj.title === 'About Us' ? 'hero-style-2' : ''"
  >
    <div class="hidden-xs-only focus-img">
      <img :src="focusObj.hiddenXsImgUrl" :alt="focusObj.title" />
    </div>
    <div
      class="hidden-sm-only hidden-md-only hidden-lg-only hidden-xl-only focus-img"
    >
      <img :src="focusObj.visibleXsImgUrl" :alt="focusObj.title" />
    </div>
    <div class="txt ub ub-ac">
      <div class="ub-f1">
        <el-col
          :xs="22"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
          class="container"
        >
          <h1
            class="font-size70 focus-title fontFamily txt-bold"
            v-if="focusObj.title !== 'About Us'"
          >
            {{ focusObj.title }}
          </h1>
          <div v-else>
            <h1 class="font-size36 fontFamily txt-bold">
              Make Gene Delivery Accessible:
            </h1>
            <p class="font-size30" style="color: #fff; margin-bottom: 30px">
              side by side navigation for your innovations
            </p>
            <h1 class="font-size36 fontFamily txt-bold">
              Industrialize Your Products:
            </h1>
            <p class="font-size30" style="color: #fff; margin-bottom: 30px">
              End-to-End offering with versatile technical platform
            </p>
            <h1 class="font-size36 fontFamily txt-bold">
              For Global customers:
            </h1>
            <p class="font-size30" style="color: #fff; margin-bottom: 30px">
              We have launched state-of-the-art Intelli-M GMP facility in 2023
            </p>
          </div>
        </el-col>
      </div>
    </div>
    <div class="ab-svg_color">
      <img src="@/assets/icons/radian.svg" alt="ab-svg" />
    </div>
  </div>
</template>

<script lang="ts" setup name="Focus">
import { ref } from "vue";
import { handleViteImages } from "@/utils";
const props = defineProps({
  focusObj: {
    type: Object,
    default: () => {},
  },
});
</script>

<style>
.focus-img {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
