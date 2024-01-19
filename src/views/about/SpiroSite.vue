<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-19 10:39:58
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="spiro-site">
    <div class="focus">
      <div class="hidden-xs">
        <img
          src="https://www.obio-tech.com/public/uploads/20220330/ba3c5468f02cdd8aa3f75a58fc00fdff.jpg"
          alt="SPIRO Site"
        />
      </div>
      <div class="visible-xs-block">
        <img
          src="https://www.obio-tech.com/public/uploads/20220402/40fd25acf5baaecdcf7db3ac15f705f2.jpg"
          alt="SPIRO Site"
        />
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
            <h1>SPIRO Site</h1>
          </el-col>
        </div>
      </div>
    </div>
    <div class="Intelli-M-wrap">
      <el-col
        :xs="22"
        :sm="20"
        :md="20"
        :lg="20"
        :xl="22"
        style="margin: auto"
        class="location fontf3"
      >
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item>About</el-breadcrumb-item>
          <el-breadcrumb-item>Our Facilities</el-breadcrumb-item>
          <el-breadcrumb-item>SPIRO Site</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto">
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
          <span style="font-size: 12px; line-height: 2">● </span
          ><span style="line-height: 2">Virology and Vectorology</span><br />
          <span style="font-size: 12px; line-height: 2">●&nbsp;</span
          ><span style="line-height: 2">Cellular Biology&nbsp;</span><br />
          <span style="font-size: 12px; line-height: 2"
            ><span style="font-size: 12px; line-height: 2">●&nbsp;</span></span
          ><span style="line-height: 2">Animal Studies</span><br />
          <span style="font-size: 12px; line-height: 2"
            ><span style="font-size: 12px; line-height: 2">●&nbsp;</span></span
          ><span style="line-height: 2">Exocellular Vesicles</span><br />
          <span style="font-size: 12px; line-height: 2"
            ><span style="font-size: 12px; line-height: 2">●&nbsp;</span></span
          ><span style="line-height: 2">Bioassay and Testing</span><br />
          <span style="font-size: 12px; line-height: 2"
            ><span style="font-size: 12px; line-height: 2">●&nbsp;</span></span
          ><span style="line-height: 2">Process Development</span><br />
          <span style="font-size: 12px; line-height: 2"
            ><span style="font-size: 12px; line-height: 2">●&nbsp;</span></span
          ><span style="line-height: 2">Analytical Method Development</span
          ><br />
          <span style="font-size: 12px; line-height: 2"
            ><span style="font-size: 12px; line-height: 2">●&nbsp;</span></span
          ><span style="line-height: 2"
            >Novel AAV Capsid screening (AAVneO™&nbsp;platform)</span
          ><br />
          <br />
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
          <span class="fontf8 font-size50">Contact Information</span>
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
        <div class="cGMP-swiper cGMP-zIndex" style="margin-top: 0">
          <div
            class="swiper-container swiper-container-initialized swiper-container-horizontal"
            id="cGMPSwp"
          >
            <div class="swiper-wrapper"></div>
            <div class="cGMPSwp-btn ub ub-ac">
              <div
                class="pub-ico-left swiper-button-disabled"
                id="cGMPSwpPrev"
                tabindex="0"
                role="button"
                aria-label="Previous slide"
                aria-disabled="true"
              ></div>
              <div
                class="pub-ico-right swiper-button-disabled"
                id="cGMPSwpNext"
                tabindex="0"
                role="button"
                aria-label="Next slide"
                aria-disabled="true"
              ></div>
            </div>
            <span
              class="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script lang="ts" setup name="SpiroSite">
import { ArrowRight } from "@element-plus/icons-vue";
</script>

<style>
</style>
