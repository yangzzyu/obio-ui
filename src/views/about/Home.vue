<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-19 10:19:58
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="about">
    <div class="focus">
      <div class="hidden-xs">
        <img
          src="https://www.obio-tech.com/public/uploads/20220328/ad95627baa62ec4288fe6823b9571ee6.jpg"
          alt="About Us"
        />
      </div>
      <div class="visible-xs-block">
        <img
          src="https://www.obio-tech.com/public/uploads/20220401/fbacb8fb46400e71bf84d29d77c57ea4.jpg"
          alt="About Us"
        />
      </div>
      <div class="txt ub ub-ac">
        <div class="ub-f1">
          <el-col
            :xs="18"
            :sm="20"
            :md="20"
            :lg="20"
            :xl="22"
            style="margin: auto"
          >
            <!-- <div class="fontf7 font-size70 focus-title">About Us</div> -->
            <h1>About Us</h1>
          </el-col>
        </div>
      </div>
    </div>
    <div class="in-about-wrap">
      <div class="section-1">
        <el-col
          :xs="18"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
        >
          <div class="text font-size20">
            <h3>
              OBiO Tech is committed to becoming a global leader in gene and
              cell therapy CRO and CDMO to serve our customers worldwide with
              the best possible. We provide holistic research, development,
              manufacturing solutions, functional genomics, process and
              analytical development, IND-enabling CMC, clinical and commercial
              manufacturing expertise, capabilities, and compliance. Our missing
              is to "Enable gene therapy for a better life" through quality
              service to help advance advanced therapeutic products to clinics
              and manufacturing.
            </h3>
            <br />
            <h3>
              OBiO Tech is built upon ten years of industry experience, focusing
              only on bringing gene and cell therapies to the next level. Thanks
              to years of trust and recognition from our customers, by April
              2023, as a quality service provider, we have supported over 150
              gene and cell therapy programs, of that 25 programs have been
              approved for clinical trials in the US and China.
            </h3>
            <br />
            <h3>
              OBiO's current services with scale include plasmids, mRNA, AAV
              vector, oncolytic virus, immuno cell therapy, stem cells, etc.
              With the newest and largest cGMP facilities in production in the
              Asian Pacific, we can provide unparalleled skills and capabilities
              to bring success to more clients worldwide.
            </h3>
            <p>
              <span style="line-height: 2"></span>
            </p>
          </div>
        </el-col>
      </div>
      <div class="section-2">
        <el-col
          :xs="14"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
        >
          <div class="pub-title style2 ub ub-ver ub-pe">
            <i class="line"></i><span class="fontf8 font-size50">History</span>
          </div>
          <div class="about-history-swp">
            <div
              class="historyNext"
              id="historyNext"
              tabindex="0"
              role="button"
              aria-label="Next slide"
              aria-disabled="false"
            ></div>
            <div
              class="historyPrev swiper-button-disabled"
              id="historyPrev"
              tabindex="0"
              role="button"
              aria-label="Previous slide"
              aria-disabled="true"
            ></div>
            <Swiper
              :modules="[Autoplay, Navigation, Scrollbar]"
              :freeMode="true"
              :initialSlide="100"
              slides-per-view="auto"
              :simulateTouch="false"
              :watchSlidesVisibility="true"
              :navigation="navigation"
              slideVisibleClass="my-slide-visible"
              class="swiper-container"
            >
              <swiper-slide
                v-for="(item, index) in historyList"
                :key="index"
                :class="index % 2 === 0 ? 'even' : 'odd'"
              >
                <div class="boxs">
                  <div class="cons">
                    <div class="year">{{ item.year }} <i></i></div>
                    <div class="txt font-size18">
                      <ul>
                        <li v-for="(i, k) in item.txt" :key="k">
                          {{ i }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div></swiper-slide
              >
            </Swiper>
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
          <div class="pub-title ub ub-ver ub-pe">
            <i class="line"></i
            ><span class="fontf8 font-size50"> Our Facilities</span>
          </div>
          <div class="fac-con">
            <div class="font-size20 stxt">
              <span style="line-height: 2"
                >As a trustful contract development and manufacturing
                organization, flexible capacities and regulatory compliant
                facilities are the prerequisites for providing high-quality
                services to gene and cell therapy developers. To offer services
                to worldwide <span>customers</span>, we have established an
                integrated research platform with over 5,000 sqm footprint, over
                10,000 sqm GMP footprint at Shanghai International Medical Park,
                and a 77,000 sqm GMP manufacturing site at Lin-Gang Free-Trade
                Zone. We provide high-quality contract research and
                manufacturing services at three locations：</span
              >
            </div>
            <el-row class="row" :gutter="10">
              <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                <a href="/cn/home/about/cid/881" class="block tans">
                  <div class="animate-imgxx uof img">
                    <img
                      src="https://www.obio-tech.com/public/uploads/20220330/0b0fe1e2c354c50f919655666ccfd951.jpg"
                      alt="SPIRO Site"
                    />
                  </div>
                  <div class="font-size24 fontf7 iti">SPIRO Site</div>
                </a>
              </el-col>
              <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                <a href="/cn/home/about/cid/886" class="block tans">
                  <div class="animate-imgxx uof img">
                    <img
                      src="https://www.obio-tech.com/public/uploads/20231212/55a4fdd1f7a358da8a3de3e938f99114.jpg"
                      alt="PINE Site"
                    />
                  </div>
                  <div class="font-size24 fontf7 iti">PINE Site</div>
                </a>
              </el-col>
              <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                <a href="/cn/home/about/cid/891" class="block tans">
                  <div class="animate-imgxx uof img">
                    <img
                      src="https://www.obio-tech.com/public/uploads/20231212/8d7b5d1b0b734f04527dde989e2483c3.jpg"
                      alt="OBiO Intelli-M"
                    />
                  </div>
                  <div class="font-size24 fontf7 iti">OBiO Intelli-M</div>
                </a>
              </el-col>
            </el-row>
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
          <div class="pub-title ub ub-ver ub-pe">
            <i class="line"></i
            ><span class="fontf8 font-size50">Leadership Team</span>
          </div>
          <el-row class="about-team-con row" :gutter="10">
            <!-- <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" class="hidden">
                <div class="animate-img">
                  <img
                    src="https://www.obio-tech.com/public/uploads/20220325/7dc54bcd64e6ab0d45edc270f4bef821.jpg"
                    class="img-responsive"
                    alt="Leadership Team"
                  />
                </div>
              </el-col> -->
            <el-col :xs="24" :sm="18" :md="20" :lg="20" :xl="20">
              <div class="font-size20 txt">
                <span style="line-height: 2"
                  >OBiO is led by an experienced team of executives. Their
                  professional background and cumulative expertise provide
                  robust support for strong leadership that keeps OBiO at the
                  frontier of the gene therapy industry.</span
                >
              </div>
              <div class="more-psa fontf5 font-size20">
                <a href="/cn/home/team"></a></div
            ></el-col>
          </el-row>
        </el-col>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="About">
import { historyList } from "@/data/AboutPage";
import { Swiper, SwiperSlide } from "swiper/vue";
// 引入swiper样式（按需导入）
import "swiper/css";
import "swiper/css/pagination"; // 轮播图底面的小圆点
import "swiper/css/navigation"; // 轮播图两边的左右箭头
import "swiper/css/scrollbar"; // 轮播图的滚动条
// 引入swiper核心和所需模块
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { onMounted, onUnmounted, ref } from "vue";
const navigation = ref({
  nextEl: "#historyNext",
  prevEl: "#historyPrev",
});
onMounted(() => {});
</script>

<style>
/* @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  } */
</style>
