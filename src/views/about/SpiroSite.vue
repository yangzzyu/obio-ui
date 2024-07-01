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
    <Cgmp />
    <div>
      <el-col
        :xs="22"
        :sm="20"
        :md="20"
        :lg="20"
        :xl="22"
        style="margin: auto"
        class="container"
      >
        <div class="cGMP-title-t2">
            <div class="fontf7 font-size50 ct"><span>Why OBiO?</span></div>
              <i class="bg"></i>
        </div>
        <div class="Viral-Vector-wrap cGMP-zIndex">
          <div class="section-3" style="background: transparent">
            <el-row class="list row" style="margin-top: 0">
              <el-col :sm="12" v-for="(i, k) in vectorList" :key="k">
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
          </div>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script lang="ts" setup name="SpiroSite">
// import { ArrowRight } from "@element-plus/icons-vue";
import ScrollHint from "@/components/ScrollHint.vue";
import ContactForm from "@/components/ContactForm.vue";
import Cgmp from "@/views/cdmo/cgmp/Cgmp.vue";
import { reactive, ref } from "vue";
import { handleViteImages } from "@/utils";


const vectorList = ref([
  {
    bgUrl: handleViteImages("highlights/1.png"),
    txt: "10+ years of dedication to gene and cell therapy",
  },
  {
    bgUrl: handleViteImages("highlights/2.png"),
    txt: `130 process development projects 230
                      analytical methods developed`,
  },
  {
    bgUrl: handleViteImages("highlights/3.png"),
    txt: "Quality-driven team of experts with in-time responding",
  },
  {
    bgUrl: handleViteImages("highlights/4.png"),
    txt: `Efficient technology transfer with optimizing process validation`,
  },
  {
    bgUrl: handleViteImages("highlights/5.png"),
    txt: `Process development versatility for various product needs stages`,
  },
  {
    bgUrl: handleViteImages("highlights/6.png"),
    txt: `End-to-end regulatory support with side-by-side navigation`,
  },
]);
</script>

<style></style>

