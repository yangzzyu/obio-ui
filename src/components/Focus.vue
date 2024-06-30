<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-03-27 09:57:32
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div v-if="focusObj.title && focusObj.title == 'About Us'">
    <div
      class="focus hero-style-2"
      :class="focusObj.title === 'hero-style-2'"
    >
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
            <div style="margin-top:10rem">
              <h1 class="font-size36 fontf8 txt-bold" style="color: #fff">
                Make Gene Delivery Accessible:
              </h1>
              <p class="font-size20 fontf8 mb-3" style="color: #fff">
                Side-by-side navigation for your innovations
              </p>
              <h1 class="font-size36 fontf8 txt-bold" style="color: #fff">
                Industrialize Your Products
              </h1>
              <p class="font-size20 fontf8 mb-3" style="color: #fff">
                End-to-End offerings with a versatile technical platform
              </p>
              <h1 class="font-size36 fontf8 txt-bold" style="color: #fff">For Global customers:</h1>
              <p class="font-size20 fontf8 mb-3" style="color: #fff">
                We have launched state-of-the-art Intelli-M GMP facility in 2023
              </p>
            </div>
          </el-col>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div
      class="focus hero-style-2"
      :class="focusObj.title === 'hero-style-2'"
      style="height:200px"
    >
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
              class="mt-5 font-size50 focus-title fontf7 txt-bold" style="color: #fff"
              v-if="focusObj.title && focusObj.title !== 'About Us'"
            >
              {{ focusObj.title }}
            </h1>
          </el-col>
        </div>
      </div>
    </div>
  </div>

  <!--
  <div
    class="focus hero-style-2"
    :class="focusObj.title === 'hero-style-2'"
  >
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
            class="mt-5 font-size50 focus-title fontf7 txt-bold" style="color: #fff"
            v-if="focusObj.title && focusObj.title !== 'About Us'"
          >
            {{ focusObj.title }}
          </h1>
          <div style="margin-top:10rem" v-else>
            <h1 class="font-size36 fontf8 txt-bold" style="color: #fff">
              Make Gene Delivery Accessible:
            </h1>
            <p class="font-size20 fontf8 mb-3" style="color: #fff">
              Side-by-side navigation for your innovations
            </p>
            <h1 class="font-size36 fontf8 txt-bold" style="color: #fff">
              Industrialize Your Products
            </h1>
            <p class="font-size20 fontf8 mb-3" style="color: #fff">
              End-to-End offerings with a versatile technical platform
            </p>
            <h1 class="font-size36 fontf8 txt-bold" style="color: #fff">For Global customers:</h1>
            <p class="font-size20 fontf8 mb-3" style="color: #fff">
              We have launched state-of-the-art Intelli-M GMP facility in 2023
            </p>
          </div>
        </el-col>
      </div>
    </div>
  </div>
  -->

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
  transform-origin: center center;
}
</style>
