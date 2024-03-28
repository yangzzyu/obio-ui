<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-03-27 17:10:45
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="location fontf3">
    <el-col
      :xs="22"
      :sm="20"
      :md="20"
      :lg="20"
      :xl="22"
      style="margin: auto"
      class="ub container"
    >
      <!-- :separator-icon="ArrowRight" -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="(i, k) in matchedData"
          :key="k"
          :to="{ path: i.path }"
          class="a-home"
          >{{ i.name }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </el-col>
  </div>
</template>

<script lang="ts" setup name="Focus">
import { ArrowRight } from "@element-plus/icons-vue";
import { ref } from "vue";
import { handleViteImages } from "@/utils";
const props = defineProps({
  matchedData: {
    type: Array,
    default: () => [],
  },
});
</script>
