<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-04-01 16:03:38
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="Cold-Chain-Logistics-wrap" style="padding-top: 0">
    <el-col
      :xs="22"
      :sm="20"
      :md="20"
      :lg="20"
      :xl="22"
      style="margin: auto"
      class="container">
      <div class="text font-size18">
        <span style="line-height: 2"
            >The top priority of gene and cell therapy products during
            transportation is to maintain the integrity of the products, as well
            as ensuring them arrive their destination on time and within
            temperature specification.>
        </span>
        <br />
        <br />
        <span style="line-height: 2"
            >As one of the Innovation Demonstration Units certified by the
            customs of Shanghai Technology Innovation Center, we have
            successfully supported our clients with their international
            cold-chain transportation of samples for clinical trials in the
            United States and Australia. We partner with multiple international
            cold-chain transportation vendors to help you with the whole journey
            of cold-chain transportation and temperature monitoring from GMP
            facility to the customs, ensuring compliance with requirements in
            terms of delivery schedule, expiration date and temperature. We also
            assist you to provide documentation required for declaration at
            China Customs, accelerate declaration process, ensuring our gene and
            cell therapy products delivered to the destination you designated as
            soon as possible.&nbsp;
        </span><br />
        <br />
        <div class="factory-img mt-5">
          <div class="fac-con">
            <el-row class="row" :gutter="10">
              <el-col :xs="24" :span="pineImg.spanList[k]" class="factory-img-col" v-for="(i, k) in pineImg.imgList" :key="k">
                <div class="manufacturing-list bg-pinkbluelfr">
                  <div class="content" style="width:100%; max-height:280px; overflow:hidden">
                    <el-image
                      style="width: 100%; height: 100%; z-index:99;"
                      :src="i"
                      alt="Intelli-M"
                      :zoom-rate="1.2"
                      :max-scale="7"
                      :min-scale="0.2"
                      :initial-index="k"
                      :crossorigin="null"
                      :preview-src-list="pineImg.imgList"
                      fit="cover"
                      :preview-teleported="true"
                      :hide-on-click-modal="true"
                    />
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="pub-title pub-title-p ub ub-ver ub-pe">
          <i class="line"></i>
          <h1 class="fontf7 font-size50">Breaking Technological Bottleneck</h1>
        </div>
        <div class="font-size18 pub-pal20" style="padding-top: 30px">
          <p style="line-height: 2">
            PINE Site currently functions as our cGMP manufacturing platform. It
            is a three-building, 10,000 ㎡ (107,639 ft²) campus situated at Banxia
            Road. in Shanghai International Medical Zone. The name PINE is
            inspired by the technical name (Pinellia Ternate) for Banxia, a herb
            in Traditional Chinese Medicine. At PINE Site, we have established a
            large-scale, flexible cGMP manufacturing process and a comprehensive
            quality system for gene and cell therapy products, which enables us
            to provide customers with contract development and manufacturing
            services in conformity with FDA and NMPA standards.
            <br />
            <br />
            Our services at PINE Site include:
          </p>
          <el-row>
            <el-col
              :span="12"
              :xs="22"
              v-for="(item, index) in PineList"
              :key="index"
            >
              ● {{ item.txt }}
            </el-col>
          </el-row>
        </div>
        <div class="factory-img mt-5">
          <div class="fac-con">
            <el-row class="row" :gutter="10">
              <el-col :xs="24" :span="pinePeopleImg.spanList[k]" class="factory-img-col" v-for="(i, k) in pinePeopleImg.imgList" :key="k">
                <div class="manufacturing-list bg-pinkbluelfr">
                  <div class="content" style="width:100%; max-height:240px; overflow:hidden">
                    <el-image
                      style="width: 100%; height: 100%; z-index:99;"
                      :src="i"
                      alt="Intelli-M"
                      :zoom-rate="1.2"
                      :max-scale="7"
                      :min-scale="0.2"
                      :initial-index="k"
                      :crossorigin="null"
                      :preview-src-list="pinePeopleImg.imgList"
                      fit="cover"
                      :preview-teleported="true"
                      :hide-on-click-modal="true"
                    />
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </el-col>
  </div>
</template>

<script lang="ts" setup name="Process">
import { ref, reactive } from "vue";
import { PineList } from "./data/PineSite";
import { handleViteImages } from "@/utils";

const pineImg = reactive({
  spanList: [9,9,6],
  imgList: [
    handleViteImages("factory/pine/1.jpg"),
    handleViteImages("factory/pine/2.jpg"),
    handleViteImages("factory/pine/3.png")
  ]
});
const pinePeopleImg = reactive({
  spanList: [7,7,10],
  imgList: [
    handleViteImages("factory/pine/4.jpg"),
    handleViteImages("factory/pine/5.jpg"),
    handleViteImages("factory/pine/6.jpg")
  ]
});

</script>

<style lang="scss" scoped>
.ul-square {
  .ul-square-col {
    position: relative;
    padding-left: 20px;
  }
  .ul-square-col::before {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    background-color: #039d8f;
    position: absolute;
    left: 0;
    top: 10px;
  }
}
</style>
