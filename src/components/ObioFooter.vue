<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-03-21 13:52:13
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="section-3">
    <el-col :xs="22" :span="22" class="container" style="margin: auto">
      <!-- <div class="pub-title pub-title-p ub ub-ver ub-pe">
        <i class="line"></i>
        <span class="fontf8 font-size50">Why OBiO?</span>
        <div class="p font-size18"></div>
      </div> -->
      <el-row class="list row">
        <el-col :sm="12" v-for="(i, k) in list" :key="k">
          <div class="boxs">
            <div class="ub ub-ac">
              <img class="ico" :src="i.bgUrl" alt="" srcset="" />
              <div class="txt fontf5 font-size18 color666 ub-f1">
                {{ i.txt }}
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </div>
</template>

<script lang="ts" setup name="Focus">
import { ref } from "vue";
import { handleViteImages } from "@/utils";
const props = defineProps({
  list: {
    type: Object,
    default: () => {},
  },
});
</script>
