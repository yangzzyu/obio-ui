<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-04-09 14:39:16
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <section id="careerout" class="career-container mb-4 mt-4">
    <el-col
      :xs="22"
      :sm="20"
      :md="20"
      :lg="20"
      :xl="22"
      style="margin: auto"
      class="container"
    >
      <h1 class="p-title font-size50 txt-bold fontf8">Career and Culture</h1>
      
      <el-row class="news--slider row" :gutter="10">
        <el-col :xs="24" :span="12" class="news--slider-i">
          <router-link
            to="/careers/life"
            class="block tans service--box_link bg-pinkbluelfr career-a"
          >
            <h1 class="font-bold mb-3 font-size30 txt-bold fontf7">
              Life at OBiO
            </h1>

          </router-link>
        </el-col>
        <el-col :xs="24" :span="12" class="news--slider-i">
          <router-link
            to="/careers/job"
            class="block tans service--box_link bg-pinkbluelfr career-a"
          >
            <h1 class="font-bold mb-3 font-size30 txt-bold fontf7">
              Job Openings
            </h1>
          </router-link>
        </el-col>
      </el-row>
    </el-col>
  </section>
</template>

<script lang="ts" setup name="Career">
import { ref } from "vue";
import { handleViteImages } from "@/utils";
</script>

<style lang="scss" scoped>
.career-a {
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.news--slider-i:nth-child(1) .career-a {
  background: url(@/assets/icons/career_bg1.png) no-repeat center/cover;
}
.news--slider-i:nth-child(2) .career-a {
  background: url(@/assets/icons/career_bg2.png) no-repeat center/cover;
}
</style>
