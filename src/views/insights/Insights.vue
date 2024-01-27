<template>
  <div class="Insights-wrap">
    <div class="section-1">
      <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto">
        <div class="pub-title pub-title-p ub ub-ver ub-pe">
          <i class="line"></i>
          <span class="fontf8 font-size50"> Press Releases</span>
          <div class="p font-size18"></div>
        </div>
        <div class="in-news-list1">
          <div class="item" v-for="(item, index) in releases" :key="index">
            <router-link
              :to="'/news-details/releases/' + item.id"
              class="block"
            >
              <div class="font-size16">{{ item.time }}</div>
              <div class="title fontf4 font-size24">
                {{ item.title }}
              </div>
              <div class="font-size18 ut-s2">
                {{ item.content }}
              </div>
              <div class="more"><span class="sa"></span></div>
            </router-link>
          </div>
        </div>
        <div class="in-news-all-btn font-size20 fontf3">
          <router-link to="/releases"> ALL PRESS RELEASES</router-link>
          <!-- <a href="/cn/home/news/cid/559">ALL PRESS RELEASES</a> -->
        </div>
      </el-col>
    </div>
    <div class="section-2">
      <div class="pub-events-wrap">
        <el-col
          :xs="22"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
        >
          <div class="pub-title style2 pub-title-p ub ub-ver ub-pe">
            <i class="line"></i>
            <span class="fontf8 font-size50">Events</span>
            <div class="p font-size18"></div>
          </div>
          <Swiper
            :modules="[Autoplay, Navigation, Scrollbar]"
            :observer="true"
            :slidesPerView="3"
            :spaceBetween="30"
            :watchSlidesVisibility="true"
            :navigation="navigation"
            slideVisibleClass="my-slide-visible"
            :breakpoints="breakpoints"
            class="list rowxx"
          >
            <swiper-slide
              v-for="(item, index) in events"
              :key="index"
              class="my-slide-visible"
            >
              <router-link
                :to="'/news-details/events/' + item.id"
                class="block tans font-size16"
              >
                <div class="time">{{ item.time }}</div>
                <div class="title ut-s2 font-size24 fontf3">
                  {{ item.title }}
                </div>
                <div class="add">{{ item.txt }}</div>
              </router-link></swiper-slide
            >
          </Swiper>
          <div class="in-news-event-btn ub ub-ac ub-pc">
            <div
              class="pub-ico-left swiper-button-disabled"
              id="inNewPrev"
              tabindex="0"
              role="button"
              aria-label="Previous slide"
              aria-disabled="true"
            ></div>
            <div
              class="pub-ico-right"
              id="inNewNext"
              tabindex="0"
              role="button"
              aria-label="Next slide"
              aria-disabled="false"
            ></div>
          </div>
        </el-col>
      </div>
    </div>
    <a name="a1"></a>
    <!-- <div class="section-3">
      <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto">
        <div class="pub-title pub-title-p ub ub-ver ub-pe">
          <i class="line"></i>
          <span class="fontf8 font-size50">Knowledge Center</span>
          <div class="p font-size18"></div>
        </div>

        <div class="Knowledge-groups">
          <div class="groups" id="1">
            <div class="labs font-size30 fontf7">Laboratory Sciences</div>
            <div class="in-news-Knowledge-swp">
              <Swiper
                :modules="[Autoplay, Navigation, Scrollbar]"
                :observer="true"
                :observeParents="true"
                :slidesPerView="4"
                :spaceBetween="25"
                :navigation="sciencesNavigation"
                :breakpoints="sciencesBreakpoints"
              >
                <swiper-slide
                  v-for="(item, index) in SciencesList"
                  :key="index"
                >
                  <div class="block boxs tans">
                    <img
                      :src="item.imgUrl"
                      class="img-responsive"
                      :alt="item.tit"
                    /></div
                ></swiper-slide>
              </Swiper>
            </div>
            <div class="in-news-event-btn2 ub ub-ac ub-pc">
              <div
                class="pub-ico-left swiper-button-disabled"
                id="inNewsKnowledgeWp1Prev"
                tabindex="0"
                role="button"
                aria-label="Previous slide"
                aria-disabled="true"
              ></div>
              <div
                class="pub-ico-right"
                id="inNewsKnowledgeWp1Next"
                tabindex="0"
                role="button"
                aria-label="Next slide"
                aria-disabled="false"
              ></div>
            </div>
          </div>

          <div class="groups" id="2">
            <div class="labs font-size30 fontf7">CDMO Solutions</div>
            <div class="in-news-Knowledge-swp">
              <Swiper
                :modules="[Autoplay, Navigation, Scrollbar]"
                :observer="true"
                :observeParents="true"
                :slidesPerView="4"
                :spaceBetween="25"
                :navigation="solutionsNavigation"
                :breakpoints="sciencesBreakpoints"
              >
                <swiper-slide
                  v-for="(item, index) in SolutionsList"
                  :key="index"
                >
                  <div class="block boxs tans">
                    <img
                      :src="item.imgUrl"
                      class="img-responsive"
                      :alt="item.tit"
                    /></div
                ></swiper-slide>
              </Swiper>
            </div>
            <div class="in-news-event-btn2 ub ub-ac ub-pc">
              <div
                class="pub-ico-left swiper-button-disabled"
                id="inNewsKnowledgeWp2Prev"
                tabindex="0"
                role="button"
                aria-label="Previous slide"
                aria-disabled="true"
              ></div>
              <div
                class="pub-ico-right"
                id="inNewsKnowledgeWp2Next"
                tabindex="0"
                role="button"
                aria-label="Next slide"
                aria-disabled="false"
              ></div>
            </div>
          </div>
        </div>
      </el-col>
    </div> -->
  </div>
</template>

<script lang="ts" setup name="Cdmo">
import { ref } from "vue";
import { releases, events } from "./data/Index";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
// 引入swiper样式（按需导入）
import "swiper/css";
import "swiper/css/pagination"; // 轮播图底面的小圆点
import "swiper/css/navigation"; // 轮播图两边的左右箭头
import "swiper/css/scrollbar"; // 轮播图的滚动条
const navigation = ref({
  nextEl: "#inNewNext",
  prevEl: "#inNewPrev",
  hideOnClick: true,
});
const breakpoints = ref({
  320: {
    //当屏幕宽度大于等于320
    slidesPerView: 1,
    spaceBetween: 0,
  },
  768: {
    //当屏幕宽度大于等于768
    slidesPerView: 2,
    spaceBetween: 10,
  },
  1280: {
    //当屏幕宽度大于等于1280
    slidesPerView: 3,
  },
  1580: {
    //当屏幕宽度大于等于1280
    slidesPerView: 3,
  },
});

const sciencesNavigation = ref({
  nextEl: "#inNewsKnowledgeWp1Next",
  prevEl: "#inNewsKnowledgeWp1Prev",
});
const sciencesBreakpoints = ref({
  320: {
    //当屏幕宽度大于等于320
    slidesPerView: 2,
    spaceBetween: 10,
  },
  768: {
    //当屏幕宽度大于等于768
    slidesPerView: 2,
    spaceBetween: 12,
  },
  1280: {
    //当屏幕宽度大于等于1280
    slidesPerView: 4,
    spaceBetween: 25,
  },
});
const solutionsNavigation = ref({
  nextEl: "#inNewsKnowledgeWp2Next",
  prevEl: "#inNewsKnowledgeWp2Prev",
});
const solutionsBreakpoints = ref({
  320: {
    //当屏幕宽度大于等于320
    slidesPerView: 2,
    spaceBetween: 10,
  },
  768: {
    //当屏幕宽度大于等于768
    slidesPerView: 2,
    spaceBetween: 12,
  },
  1280: {
    //当屏幕宽度大于等于1280
    slidesPerView: 4,
    spaceBetween: 25,
  },
});
</script>

<style lang="scss"></style>
