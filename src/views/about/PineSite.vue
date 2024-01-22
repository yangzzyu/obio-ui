<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-19 13:57:40
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="pine-site">
    <div class="focus">
      <div class="hidden-xs">
        <img
          src="https://www.obio-tech.com/public/uploads/20220330/4f73b36b43411ab86c464b5e5477c842.jpg"
          alt="PINE Site"
        />
      </div>
      <div class="visible-xs-block">
        <img
          src="https://www.obio-tech.com/public/uploads/20220402/4738c4eb8c6cbcc0917281c987f1c57b.jpg"
          alt="PINE Site"
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
            <h1>PINE Site</h1>
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
          <el-breadcrumb-item :to="{ path: '/about' }"
            >About</el-breadcrumb-item
          >
          <el-breadcrumb-item :to="{ path: '/Facilities' }"
            >Our Facilities</el-breadcrumb-item
          >
          <el-breadcrumb-item>PINE Site</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto">
        <div class="pub-title pub-title-p ub ub-ver ub-pe">
          <i class="line"></i>
          <h1 class="fontf8 font-size50">Breaking Technological Bottleneck</h1>
        </div>
        <div class="font-size18 pub-pal20" style="padding-top: 30px">
          <p style="line-height: 2">
            PINE Site currently functions as our cGMP manufacturing platform. It
            is a three-building, 10,000 square meter campus situated at Banxia
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
            <el-col :span="12" v-for="(item, index) in PineList" :key="index">
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
          <span style="line-height: 2"
            >Building No.8, Lane 100, Banxia Rd,&nbsp;</span
          ><br />
          <span style="line-height: 2">Pudong New District,</span><br />
          <span style="line-height: 2">Shanghai, China</span><br />
          <br />
          <span style="line-height: 2">Main：+86 400-151-5198</span><br />
          <span style="line-height: 2"></span>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script lang="ts" setup name="PineSite">
import { ArrowRight } from "@element-plus/icons-vue";
import { PineList } from "./data/PineSite";
import ScrollHint from "@/components/ScrollHint.vue";
</script>

<style></style>
