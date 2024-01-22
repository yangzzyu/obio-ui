<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-22 15:50:07
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="intelli-m">
    <div class="Intelli-M-wrap">
      <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto">
        <div class="pub-title pub-title-p ub ub-ver ub-pe">
          <i class="line"></i>
          <h1 class="fontf8 font-size50">In China for Global Customers</h1>
        </div>
        <div class="font-size18 pub-pal20" style="padding-top: 30px">
          <p style="line-height: 2">
            In sync with the growing global demand, we have initiated the
            construction of OBiO Intelli-M GMP manufacturing site with a
            footprint of 77,000 square meter at Lin-Gang Free Trade Zone in
            Shanghai. Complemented by digitalized management system and enhanced
            manufacturing & testing facilities, OBiO Intelli-M will be able to
            capture diverse manufacturing needs and offer high-quality contract
            development and manufacturing services to customers worldwide.
            <br />
            <br />
            Stage 1 construction with 11 GMP production lines will be
            accomplished by 2023. The full site with 33 GMP production lines
            will be operating by 2025.
            <br />
            <br />
            At OBiO Intelli-M, we will provide our customers worldwide with
            following services:
          </p>
          <el-row>
            <el-col
              :span="12"
              v-for="(item, index) in IntelliMItemList"
              :key="index"
            >
              ● {{ item.txt }}
            </el-col>
          </el-row>
          <span style="line-height: 2">
            <span style="color: #003399"
              ><a href="/cn/home/contact" target="_blank"
                ><strong
                  ><u>Please contact us for customization needs.</u></strong
                > </a
              >Our experts will be responsive to your requirements at first
              instance.</span
            ><br /> </span
          ><span style="line-height: 2"
            ><br />
            <br />
          </span>
        </div>
        <div class="pub-pal20" style="color: #014099">
          <!-- <span class="fontf8 font-size50">Contact Information</span> -->
          <h1 class="fontf8 font-size50">Contact Information</h1>
        </div>
        <div class="text font-size18" style="margin-top: 30px" s="">
          <span style="line-height: 2">3888 Canghai Rd,&nbsp;</span><br />
          <span style="line-height: 2">Lin-Gang Free-Trade Zone,</span><br />
          <span style="line-height: 2">Pudong New District,&nbsp;</span><br />
          <span style="line-height: 2">Shanghai, China</span><br />
          <br />
          <p>
            <span style="line-height: 2">Main: +86 400-151-5198<br /> </span>
          </p>
          <iframe
            width="100%"
            height="615"
            src="https://www.youtube.com/embed/R6UtDlJShKo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script lang="ts" setup name="IntelliM">
// import { ArrowRight } from "@element-plus/icons-vue";
import { IntelliMItemList } from "./data/IntelliM";
import ScrollHint from "@/components/ScrollHint.vue";
</script>

<style></style>
