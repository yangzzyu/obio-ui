<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-19 17:29:29
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="cdmo">
    <div class="CDMO-Solutions-wrap">
      <div class="section-1">
        <el-col
          :xs="22"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
        >
          <div class="text font-size20">
            <p>
              <span style="line-height: 2"
                >Through years of dedicated effort, OBiO has built an integrated
                process development system, supported by a flexible cGMP
                manufacturing platform, comprehensive quality system and
                efficient project management. Our experienced team of experts
                will navigate the industrialization process with you
                side-by-side. With our technical expertise in viral vector,
                oncolytic virus and cell therapy, we will help you to accelerate
                your product life-cycle from pre-clinical to commercially
                ready.&nbsp;</span
              ><br />
              <span style="line-height: 2"></span>
            </p>
            <p>
              <br />
            </p>
          </div>
          <div class="number-main text-center cGMP-zIndex active" id="numgo">
            <el-row class="row color666">
              <el-col :span="8">
                <el-statistic :value="cellSourceValue" class="number-c">
                  <template #suffix>
                    <div class="nums fontf9">
                      <span class="fh">+</span>
                    </div>
                  </template>
                </el-statistic>
                <div class="pn fontf7 font-size28">
                  Gene and Cell Therapy Programs
                </div>
              </el-col>
              <el-col :span="8">
                <el-statistic :value="processSourceValue" class="number-c">
                  <template #suffix>
                    <div class="nums fontf9">
                      <span class="fh">+</span>
                    </div>
                  </template>
                </el-statistic>
                <div class="pn fontf7 font-size28">
                  Process Development Projects
                </div>
              </el-col>
              <el-col :span="8">
                <el-statistic class="number-c" :value="analyticalSourceValue">
                  <template #suffix>
                    <div class="nums fontf9">
                      <span class="fh">+</span>
                    </div>
                  </template>
                </el-statistic>
                <div class="pn fontf7 font-size28">
                  Analytical Method Development Projects
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </div>
      <div class="section-2">
        <el-col
          :xs="22"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
        >
          <div class="pub-title pub-title-p ub ub-ver ub-pe">
            <i class="line"></i>
            <span class="fontf8 font-size50"> Versatility for Variety</span>
            <div class="p font-size18"></div>
          </div>
          <div class="infor font-size20">
            <p>
              <span style="line-height: 2"
                >Our extensive technical expertise and process scale-up
                experience make us a strong and reliable partner for your gene
                and cell therapy project. We have successfully provided cGMP
                manufacturing services for multiple clients to support their
                gene and cell therapy clinical trials in the United States,
                China, and Australia.&nbsp;</span
              ><br />
              <br />
              <span style="line-height: 2"
                >We provide process development and cGMP manufacturing for the
                following gene and cell therapy products:</span
              ><br />
              <span style="line-height: 2"></span>
            </p>
            <p>
              <br />
            </p>
          </div>

          <div class="list">
            <el-row class="row">
              <el-col
                :span="6"
                class="item"
                v-for="(i, k) in ViralList"
                :key="k"
                :class="activeIndex === i.id ? 'active' : ''"
                @mouseenter="activeIndex = i.id"
                ><a href="/cn/home/cgmp/cid/896" class="boxs block">
                  <div class="img1">
                    <div class="icos">
                      <img :src="i.imgUrl" class="icos-a" :alt="i.title" />
                    </div>
                  </div>
                  <div class="font-size24 fontf5 t">{{ i.title }}</div>
                </a>
              </el-col>
            </el-row>
          </div>

          <div class="list-mes" id="cdmoMes">
            <template v-for="(i, k) in ViralList" :key="k">
              <div class="group" v-show="activeIndex === i.id">
                <div class="boxs font-size20">
                  {{ i.content }}
                  <p></p>
                </div>
              </div>
            </template>
          </div>
        </el-col>
      </div>
      <div class="section-3">
        <el-col
          :xs="22"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
        >
          <div class="pub-title pub-title-p ub ub-ver ub-pe">
            <i class="line"></i>
            <span class="fontf8 font-size50"
              >Industrialize Your Product at OBiO</span
            >
            <div class="p font-size18"></div>
          </div>
          <div class="list">
            <div class="list-con clearfix">
              <div class="item">
                <router-link to="/process" class="boxs block">
                  <img
                    src="https://www.obio-tech.com/public/uploads/20220329/86aefe6d84551370527d380db3102723.png"
                    alt="Process Development"
                  />
                  <div class="shaw">
                    <div class="font-size50 fontf7">Process Development</div>
                    <div class="font-size20 p">
                      Efficient and Customized Process Development with Board
                      Product Spectrum
                    </div>
                  </div>
                </router-link>
              </div>
              <div class="item">
                <router-link to="/cgmp" class="boxs block">
                  <img
                    src="https://www.obio-tech.com/public/uploads/20220329/37608c12bbed338f24bebdae54947878.png"
                    alt="cGMP Manufacturing"
                  />
                  <div class="shaw">
                    <div class="font-size50 fontf7">cGMP Manufacturing</div>
                    <div class="font-size20 p">
                      Flexible Large-Scale GMP Manufacturing Platform
                    </div>
                  </div>
                </router-link>
              </div>
              <div class="item">
                <router-link to="/quality" class="boxs block">
                  <img
                    src="https://www.obio-tech.com/public/uploads/20220329/1421f3595888e8220c1c70678a63751c.png"
                    alt="Quality &amp; Regulatory"
                  />
                  <div class="shaw">
                    <div class="font-size50 fontf7">
                      Quality &amp; Regulatory
                    </div>
                    <div class="font-size20 p">
                      International Compliant Quality Control System
                    </div>
                  </div>
                </router-link>
              </div>
              <div class="item">
                <router-link to="/logistics" class="boxs block">
                  <img
                    src="https://www.obio-tech.com/public/uploads/20220325/27eb574fecde7e40f15b4be3c86a2d78.png"
                    alt="Cold Chain Logistics"
                  />
                  <div class="shaw">
                    <div class="font-size50 fontf7">Cold Chain Logistics</div>
                    <div class="font-size20 p">
                      Traceable Cold-Chain Logistics with Controllable Risk
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </el-col>
      </div>

      <div class="section-4">
        <el-col
          :xs="22"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
        >
          <div class="pub-title pub-title-p ub ub-ver ub-pe">
            <i class="line"></i>
            <span class="fontf8 font-size50">F-A-S-T Commitment from OBiO</span>
            <div class="p font-size18"></div>
          </div>
          <div class="content">
            <el-row class="row">
              <el-col
                :xs="{ span: 22, push: 0 }"
                :sm="{ span: 10, push: 14 }"
                :md="{ span: 10, push: 14 }"
                :lg="{ span: 8, push: 16 }"
              >
                <div class="list">
                  <div class="item">
                    <div class="t">
                      <div class="f fontf8 font-color-ts">F</div>
                      <div class="tr fontf7">ocus:</div>
                    </div>
                    <div class="p font-size20 fontf3">
                      Dedication to Contract Development and Manufacturing
                      Service
                    </div>
                    <div class="pm font-size18 color666">
                      Strict Internal Data Management<br />
                      Comprehensive Patent System<br />
                      Professional Intellectual Property Protection
                    </div>
                  </div>

                  <div class="item">
                    <div class="t">
                      <div class="f fontf8 font-color-ts">A</div>
                      <div class="tr fontf7">cceleration:</div>
                    </div>
                    <div class="p font-size20 fontf3">
                      Commercial Readiness from Technical Expertise
                    </div>
                    <div class="pm font-size18 color666">
                      Advanced Process Development Technologies<br />
                      Large-Scale Manufacturing Capabilities<br />
                      Fully-Closed &amp; Automated Downstream Purification
                    </div>
                  </div>

                  <div class="item">
                    <div class="t">
                      <div class="f fontf8 font-color-ts">S</div>
                      <div class="tr fontf7">tandardization:</div>
                    </div>
                    <div class="p font-size20 fontf3">
                      Fully Regulatory Compliance
                    </div>
                    <div class="pm font-size18 color666">
                      GMP-Compliant Facilities and Equipment<br />
                      Robust Quality Management System<br />
                      Comprehensive Quality Control Platform
                    </div>
                  </div>

                  <div class="item">
                    <div class="t">
                      <div class="f fontf8 font-color-ts">T</div>
                      <div class="tr fontf7">eam:</div>
                    </div>
                    <div class="p font-size20 fontf3">Trustful Expertise</div>
                    <div class="pm font-size18 color666">
                      10+ years of Experience in Gene and Cell Therapy<br />
                      Extensive Experience in IND-Enabling Support<br />
                      Responses at First Instance
                    </div>
                  </div>
                </div>
              </el-col></el-row
            >
          </div>
        </el-col>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="Cdmo">
import { ref } from "vue";
import { useTransition } from "@vueuse/core";
import { ViralList } from "./data/Index.ts";
import { ArrowRight } from "@element-plus/icons-vue";

const cellSource = ref(0);
const processSource = ref(0);
const analyticalSource = ref(0);
const cellSourceValue = useTransition(cellSource, {
  duration: 1500,
});
const processSourceValue = useTransition(processSource, {
  duration: 1500,
});
const analyticalSourceValue = useTransition(analyticalSource, {
  duration: 1500,
});
cellSource.value = 170;
processSource.value = 200;
analyticalSource.value = 500;

const activeIndex = ref(0);
</script>

<style lang="scss">
.number-main .number-c {
  .el-statistic__number {
    font-size: 90px;
    color: #039d8f;
    line-height: 0.75;
  }
}
@media (max-width: 765px) {
  .number-main .number-c .el-statistic__number {
    font-size: 40px;
    color: #039d8f;
    line-height: 0.75;
  }
}
</style>
