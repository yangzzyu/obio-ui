<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-19 14:28:45
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="cdmo">
    <Focus :focusObj="FocusData" />
    <div class="Innovations-wrap">
      <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto">
        <div class="list">
          <el-row class="item row">
            <el-col :xs="22" :sm="10" :md="10" :lg="8" :xl="6">
              <div class="img block">
                <img
                  src="https://www.obio-tech.com/public/uploads/20220516/d8b8355145a015301357a31e5dd4d335.png"
                  class="img-responsive"
                />
                <i class="line"></i>
              </div>
            </el-col>
            <el-col :xs="22" :sm="14" :md="14" :lg="16" :xl="18">
              <div class="txt">
                <div class="font-size50 fontf8 title">
                  AAVneO™ System：Next-Generation Capsid Screening Platform
                </div>
                <div class="p font-size20">
                  Our AAVneO™ system uses in-vivo direct evolution and
                  high-throughput screening to discover the next-generation
                  adeno-associated viral vectors with enhanced targeting
                  ability, improved payload size, lower immunogenicity, and
                  superior manufacturability.Scientists at OBiO have constructed
                  the 7-mers mutagenesis libraries for AAV serotypes with
                  billion-level library abundance. AAVneO™ will serve as an
                  integrated platform that enables gene therapy developers to
                  screen, select, and co-develop the next-generation vectors for
                  a broad range of diseases and overcome the limitations of
                  conventional AAV-based gene therapies.
                </div>
              </div></el-col
            >
          </el-row>
          <el-row class="item row">
            <el-col
              :xs="{ span: 22, push: 0 }"
              :sm="{ span: 10, push: 14 }"
              :md="{ span: 10, push: 14 }"
              :lg="{ span: 8, push: 16 }"
            >
              <div class="img block">
                <img
                  src="https://www.obio-tech.com/public/uploads/20220516/4ab34faa4be936bbde3c5e3445913f4a.png"
                  class="img-responsive"
                />
                <i class="line line-rotate"></i>
              </div>
            </el-col>
            <el-col
              :xs="{ span: 22, pull: 0 }"
              :sm="{ span: 14, pull: 10 }"
              :md="{ span: 14, pull: 10 }"
              :lg="{ span: 16, pull: 8 }"
            >
              <div class="txt">
                <div class="font-size50 fontf8 title">
                  OVersatileTM Platform: Versatility for Various Needs
                </div>
                <div class="p font-size20">
                  Comprehensive process development capabilities are the
                  critical determinant to fulfill the various development and
                  manufacturing needs. Our OVersatilie™ process development
                  platform aims to offer an integrated solutions for various
                  gene and cell therapy product. The platform covers cell
                  factories, fixed bed bioreactors, dissolvable microcarriers,
                  and roller bottles for adherent cell culture process, the
                  large-scale, serum-free suspension cell culture process, and
                  conventional cell lines including 293-based cells, Vero cells,
                  and HeLa cells. Process development experts at OBiO will
                  assist you to diagnose the manufacturing gaps, optimize the
                  parameters with the versatile platform, and de-risk your
                  industrialization process.
                </div>
              </div></el-col
            >
          </el-row>
          <el-row class="item row">
            <el-col :xs="22" :sm="10" :md="10" :lg="8" :xl="6">
              <div class="img block">
                <img
                  src="https://www.obio-tech.com/public/uploads/20220516/7764b7189eacd23a0fc6c0bb9d5f8777.png"
                  class="img-responsive"
                />
                <i class="line"></i>
              </div>
            </el-col>
            <el-col :xs="22" :sm="14" :md="14" :lg="16" :xl="18">
              <div class="txt">
                <div class="font-size50 fontf8 title">
                  Proprietary Cell Line Development: High-Yielding Cell Line for
                  Suspension Culture
                </div>
                <div class="p font-size20">
                  Discovering a stable and high-yield cell line is a consistent
                  goal for a CDMO solution provider. Our experienced research
                  team dedicates to the development of proprietary high-yielding
                  cell clones and optimizing the cell culture process and media
                  formulation. At the current stage, our team has obtained a
                  single-cell derived clone for AAV suspension culture with 30%
                  to 50% improvement in viral titer compared to the conventional
                  HEK293 cells. We will keep progressing on the screening
                  process of a single-cell derived clone with superior
                  performance.
                </div>
              </div></el-col
            >
          </el-row>
        </div>
      </el-col>
    </div>
    <Events />
  </div>
</template>

<script lang="ts" setup name="CdmoIndex">
import Events from "@/components/Events.vue";
import Focus from "@/components/Focus.vue";
import { useRouter } from "vue-router";
import { computed, onBeforeMount, ref, toRefs, watch } from "vue";
const router = useRouter();
const currentRoute = router.currentRoute.value;
console.log(currentRoute, "currentRoute");
const routerName = ref("");
const matchedData = ref([]);
const FocusData = ref({
  title: "Innovations",
  imgUrl:
    "https://www.obio-tech.com/public/uploads/20220326/4ab814317bb256727a28d9a4db4ab985.jpg",
});
</script>

<style></style>
