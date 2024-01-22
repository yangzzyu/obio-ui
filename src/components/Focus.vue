<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-19 17:29:29
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="focus">
    <div class="hidden-xs">
      <img :src="focusObj.imgUrl" :alt="focusObj.title" />
    </div>
    <div class="visible-xs-block">
      <img :src="focusObj.imgUrl" :alt="focusObj.title" />
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
          <h1>{{ focusObj.title }}</h1>
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
