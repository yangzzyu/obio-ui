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
            Our OVersatilie process development platform aims to offer an integrated solutions for various gene and cell therapy products, fulfilling different development and manufacturing needs. The platform covers cell factories,fixed bed bioreactors, dissolvable microcarriers, and roller bottles for adherent cell culture process, the large-scale,serum-free suspension cell culture process, and conventional cell lines including 293-based cells, Vero cells, and Hela cells.
          </p>
        </div>
        <h1 class="p-title font-size30 txt-bold fontf8 mb-3 mt-5">
          Bottom layer innovation platform: Development of highly-targeted high-efficiency next generation gene delivery vector tool
        </h1>
        <div class="content">
          <img class="content-img" :src="handleViteImages('innovation/vexneo.png')" alt="vexneo" />
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
  title: "OVersatile Platform：Versatile Process for Various Needs",
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
