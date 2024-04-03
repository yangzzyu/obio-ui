<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-04-01 16:10:17
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="spiro-site">
    <div class="Intelli-M-wrap">
      <el-col
        :xs="22"
        :sm="20"
        :md="20"
        :lg="20"
        :xl="22"
        style="margin: auto"
        class="container"
      >
        <div class="pub-title pub-title-p ub ub-ver ub-pe">
          <i class="line"></i>
          <h1 class="fontf8 font-size50">Quality from Constant Innovations</h1>
        </div>
        <div class="font-size18 pub-pal20" style="padding-top: 30px">
          <p style="line-height: 2">
            SPIRO Site, operating as the Research &amp; Development Center, is
            located at Ziping Road in Shanghai International Medical Zone. The
            name SPIRO originates from the name of Ziping Road (Spirodela
            polyrhiza), a herb in Traditional Chinese Medicine.&nbsp;At SPIRO
            Site, we enhance our service capabilities through constant
            innovations in basic science, and provide customers with contract
            research services, process development, analytical development and
            extend services of gene and cell therapy products, including:
          </p>
          <br />
          <el-row>
            <el-col
              :span="12"
              :xs="22"
              v-for="(item, index) in InnovationsList"
              :key="index"
            >
              ● {{ item.txt }}
            </el-col>
          </el-row>
          <span style="line-height: 2">
            <span class="title-color">
              <router-link to="/insight/inquiry">
                <strong
                  ><u>Please contact us for customization needs.</u></strong
                > </router-link
              >Our experts will be responsive to your requirements at first
              instance.</span
            ><br /> </span
          ><span style="line-height: 2"
            ><br />
            <br />
          </span>
        </div>
        <div class="pub-pal20 title-color">
          <!-- <span class="fontf8 font-size50">Contact Information</span> -->
          <h1 class="fontf8 font-size50">Contact Information</h1>
        </div>

        <div class="text font-size18" style="margin-top: 30px" s="">
          <p>
            <span style="line-height: 2"
              >Building No.19, Lane 908, Ziping Rd,&nbsp;</span
            ><br />
            <span style="line-height: 2">Pudong New District,</span><br />
            <span style="line-height: 2">Shanghai, China</span><br />
            <br />
            <span style="line-height: 2">Main: +86 400-151-5198<br /> </span>
          </p>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script lang="ts" setup name="SpiroSite">
// import { ArrowRight } from "@element-plus/icons-vue";
import { InnovationsList } from "./data/SpiroSite";
import ScrollHint from "@/components/ScrollHint.vue";
</script>

<style></style>
