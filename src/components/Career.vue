<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-03-08 15:59:46
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
      <h1 class="p-title font-size50 txt-bold fontf6">Our Culture</h1>

      <div class="wysiwyg--content colour-white mb-3">
        <p class="fontf4 textColor">
          Mission: Enable gene therapy for a better lives<br />
          Vision: Providing client-centered and high-quality service as our
          commitment, we strive to become a world-leading gene and cell therapy
          CXO group
          <br />
          Value: Customer First, Efficient Execution, Pursuit of Excellence,
          Innovation Breakthroughs, Integrity and Pragmatism
        </p>
      </div>
      <el-row class="news--slider row" :gutter="10">
        <el-col :xs="24" :span="12" class="news--slider-i">
          <router-link
            to="/life"
            class="block tans service--box_link bg-pinkbluelfr career-a"
          >
            <el-row
              :gutter="20"
              class="service--box align-items-start career-i"
            >
              <el-col :span="8" class="career-i"
                ><div class="service--box_icon mb-3 min-width-70">
                  <img
                    class="icon--white"
                    :src="handleViteImages('@/assets/icons/career_act1.png')"
                    alt="GMP Vector Manufacturing icon"
                  />
                  <img
                    class="icon--colour"
                    :src="handleViteImages('@/assets/icons/career1.png')"
                    alt="GMP Vector Manufacturing icon"
                  /></div
              ></el-col>
              <el-col :span="16" class="career-i">
                <h1 class="font-bold p-large mb-3 font-size30 txt-bold fontf7">
                  Life in OBIO
                </h1></el-col
              >
            </el-row>
          </router-link>
        </el-col>
        <el-col :xs="24" :span="12" class="news--slider-i">
          <router-link
            to="/job"
            class="block tans service--box_link bg-pinkbluelfr career-a"
          >
            <el-row
              :gutter="20"
              class="service--box align-items-start career-i"
            >
              <el-col :span="8" class="career-i"
                ><div class="service--box_icon mb-3 min-width-70">
                  <img
                    class="icon--white"
                    :src="handleViteImages('@/assets/icons/career_act2.png')"
                    alt="GMP Vector Manufacturing icon"
                  />
                  <img
                    class="icon--colour"
                    :src="handleViteImages('@/assets/icons/career2.png')"
                    alt="GMP Vector Manufacturing icon"
                  /></div
              ></el-col>
              <el-col :span="16" class="career-i">
                <h1 class="font-bold p-large mb-3 font-size30 txt-bold fontf7">
                  Job Opening
                </h1></el-col
              >
            </el-row>
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

<style scoped></style>
