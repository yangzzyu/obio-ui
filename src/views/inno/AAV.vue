<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-04-01 16:11:44
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="aav">
    <Focus :focusObj="FocusData" />
    <div class="AAV-wrap">
      <el-col
        :xs="22"
        :sm="20"
        :md="20"
        :lg="20"
        :xl="22"
        style="margin: auto"
        class="container"
      >
        <div class="text mb-5 mt-3 font-size18" s="">
          <p>
            Our AAVneO system uses in-vivo direct evolution and high-throughput screening to discover the next-generation adeno-associated viral vectors with enhanced targeting ability, improved payload size, lower immunogenicity, and superior manufacturability. AAVneo will serve as an integrated platform that enables gene therapy developersto screen, select, and co-develop the next-generation vectors for a broad range of diseases and overcome the limitations of conventional AAV-based gene therapies.
          </p>
        </div>
        <h1 class="p-title font-size30 txt-bold fontf8 mb-3 mt-5">
          AAVneO® screening strategy
        </h1>
        <div class="content">
          <img class="content-img" :src="handleViteImages('innovation/AAV1.png')" alt="AAV" />
        </div>
        <h1 class="p-title font-size30 txt-bold fontf8 mb-3 mt-5">
          AAVneO®: an example of the screening of cell level and rodent AAV
        </h1>
        <div class="fac-con">
          <el-row class="row" :gutter="10">
            <el-col :xs="24" :span="12" class="news--slider-i us-list-i">
              <div class="service--box align-items-start">
                <div class="font-size18 fontf7 iti">
                  Targeted cerebral gliocytoma cells (U251+U87)
                </div>
                <div class="manufacturing-list mt-3">
                  <div class="content">
                    <img class="content-img"  :src="handleViteImages('innovation/AAV2.png')" alt="AAV" srcset="" />
                  </div>
                </div>
                <ul class="txt-ul">
                  <li class="font-size18 txt-bold textColor" v-for="(i, idx) in aavList" :key="idx">
                    {{ i }}
                  </li>
                </ul>
              </div>
            </el-col>
            <el-col :xs="24" :span="12" class="news--slider-i us-list-i">
              <div class="service--box align-items-start">
                <div class="font-size18 fontf7 iti">
                  Highly-specific lung targeted innovative AAV vector
                </div>
                <div class="manufacturing-list mt-3">
                  <div class="content">
                    <img class="content-img"  :src="handleViteImages('innovation/AAV3.png')" alt="AAV" srcset="" style="width: 70%;"/>
                  </div>
                  <div class="content">
                    <img class="content-img"  :src="handleViteImages('innovation/AAV4.png')" alt="AAV" srcset="" style="width: 70%;"/>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script lang="ts" setup name="IntelliM">
import Process from "@/views/cdmo/Process.vue";
import { computed, onBeforeMount, ref, toRefs, watch } from "vue";
import { handleViteImages } from "@/utils";
import Focus from "@/components/Focus.vue";


const FocusData = ref({
  title: "AAVneO™ System：Next-Generation Capsid Screening Platform",
  hiddenXsImgUrl: handleViteImages("head_bg.jpg"),
  visibleXsImgUrl: handleViteImages("head_bg.jpg"),
});

const aavList = ref([
  "From AAV2/2 Library",
  "Random peptide (7 amino acids) insertion",
  "~ 10 Billion clones per library",
  "Patented products (CN114195859A,  CN114213505A)"
])

</script>

<style></style>
