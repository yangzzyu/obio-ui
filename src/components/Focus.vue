<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-27 14:59:46
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="focus">
    <div class="hidden-xs-only focus-img">
      <img :src="focusObj.hiddenXsImgUrl" :alt="focusObj.title" />
    </div>
    <div class="hidden-sm-only hidden-md-only hidden-lg-only hidden-xl-only focus-img">
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
        >
          <h1 class="fontf7 font-size70 focus-title">{{ focusObj.title }}</h1>
        </el-col>
      </div>
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
}
</style>
