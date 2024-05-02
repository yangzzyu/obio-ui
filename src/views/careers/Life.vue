<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-04-17 15:10:47
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="lab-sciences">
    <Focus :focusObj="FocusData" />
    <section class="culture-box hero-style-top">
      <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto" class="container">
        <h1 class="title-color font-size50 txt-bold section-title fontf8">
          Life at OBiO
        </h1>
        <h2 class="title-color our-txt font-size18 section-title">
          As OBiO Tech swiftly evolves, every OBiOers are immersed in an
          environment fostering
          <text class="fontf7">
            enhanced capabilities, purposeful work, and a fulfilling life.</text>
        </h2>
        <el-row class="news--slider row" :gutter="10">
          <el-col :xs="24" :span="12" class="news--slider-i">
            <div class="animate-imgxx uof img">
              <img :src="handleViteImages('life/WechatIMG520.jpg')" alt="Life at OBiO" style="width:100%;" />
            </div>
          </el-col>
          <el-col :xs="24" :span="12" class="news--slider-i">
            <ul class="font-size18 textColor">
              <li>Enhanced Capabilities</li>
              <li>Competitive compensation and benefits</li>
              <li>
                Opportunities for training, rotation, and continuous education
              </li>
              <li>Empowerment, accountability, and value creation</li>
              <li>
                Work-Life Balance: A harmonious blend of professional and personal
                pursuits
              </li>
            </ul>
            <br />
            <p class="font-size18 textColor" style="margin-bottom: 20px">
              This encapsulates our vibrant company culture, where every moment is
              an opportunity for growth and fulfillment.
            </p>
          </el-col>
        </el-row>
      </el-col>
    </section>
    <LifeContent />
  </div>
</template>

<script lang="ts" setup name="LabSciences">
import { reactive, ref } from "vue";
import Focus from "@/components/Focus.vue";
import LifeContent from "@/views/careers/LifeContent.vue";
import { handleViteImages, goRouter } from "@/utils";

const FocusData = ref({
  title: "Life at OBiO",
  hiddenXsImgUrl: handleViteImages("head_bg.jpg"),
  visibleXsImgUrl: handleViteImages("head_bg.jpg"),
});
</script>

<style lang="scss" scoped>
.culture-box {
  margin-top: -100px;
  position: relative;
}

.training-box {
  margin: 0;
}
</style>
