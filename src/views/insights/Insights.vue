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
          <div class="item" v-for="(item, index) in newsList" :key="index">
            <a href="/cn/home/news/id/241" class="block">
              <div class="font-size16">{{ item.time }}</div>
              <div class="title fontf4 font-size24">
                {{ item.title }}
              </div>
              <div class="font-size18 ut-s2">
                {{ item.content }}
              </div>
              <div class="more"><span class="sa"></span></div>
            </a>
          </div>
        </div>
        <div class="in-news-all-btn font-size20 fontf3">
          <a href="/cn/home/news/cid/559">ALL PRESS RELEASES</a>
          <!-- <span class="m-span">ALL PRESS RELEASES</span> -->
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
            :freeMode="true"
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
              v-for="(item, index) in eventsList"
              :key="index"
              class="my-slide-visible"
            >
              <a href="/cn/home/news/id/228" class="block tans font-size16">
                <div class="time">{{ item.time }}</div>
                <div class="title ut-s2 font-size24 fontf3">
                  {{ item.title }}
                </div>
                <div class="add">{{ item.txt }}</div>
              </a></swiper-slide
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
    <div class="section-3">
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
    </div>
  </div>
</template>

<script lang="ts" setup name="Cdmo">
import { ref } from "vue";
import { useTransition } from "@vueuse/core";
import { ArrowRight } from "@element-plus/icons-vue";
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
const newsList = ref([
  {
    time: "Jan 14,2024",
    title: `Focusing on efficient gene delivery of NK cells, The First
                Condor Life and OBiO Technology reach a strategic cooperation!`,
    content: `The First Condor Life and OBiO Technology have reached a
                strategic cooperation. In this collaboration, The First Condor
                Life and OBiO Technology will share resources, complement each
                other's advantages, jointly address market changes and
                competitive pressures, and achieve win-win cooperation and
                sustainable development. On December 27th, Shenzhen First Condor
                Life Science Co. Ltd. (hereinafter referred to as " First Condor
                Life") in Shenzhen and OBiO Biotechnology (Shanghai) Co., Ltd.
                (stock code: 688238) (hereinafter referred to as " OBiO
                Biotech") signed a strategic cooperation agreement in Lingang,
                Shanghai. First Condor Life's co-founder and CTO, Maria Ma,
                Quality Director Liu Dong, Early R&amp;D Director Wang
                Zhongsheng, CAR-NK Platform Head Huang Jing, OBiO Biotech CEO
                Jia Guodong, Deputy General Manager Yin Shan, and Marketing
                Director Wang Yao attended the signing ceremony."`,
  },
  {
    time: "Oct 24,2023",
    title: `OBiO Announces Strategic Partnership with Refreshgene to Realize
                Commercialization of Gene Therapy Product`,
    content: `OBiO Technology (Shanghai) Corp., Ltd. (Stock code: SH688238), a
                world leading contract development and manufacturing
                organization for cell and gene therapy, officially announced an
                agreement with Refreshgene Therapeutics (Refreshgene).`,
  },
  {
    time: "Sep 05,2023",
    title: `OBiO Announces Strategic Partnership with Tofflon to Advance
                Cell and Gene Therapy Development`,
    content: `OBiO Technology (Shanghai) Corp., Ltd. (Stock code: SH688238)
                today announced that it entered into a strategic cooperation
                agreement with today announced that it entered into a strategic
                cooperation agreement with Shanghai Tofflon Science and
                Technology Co.Ltd.(Stock code:SZ300171).`,
  },
]);
const eventsList = ref([
  {
    time: "10th-12th Oct. ,2023",
    title: "Cell Gene meeting on the Mesa",
    txt: "Carlsbad, CA, United States",
  },
  {
    time: "18th-21st Sep. ,2023",
    title: "BioProcess International Conference Exhibition",
    txt: "Boston, MA",
  },
  {
    time: "16th-20th May ,2023",
    title: "ASGCT 26th Annual Meeting",
    txt: "Los Angeles, CA",
  },
  {
    time: "15th-16th Apr. ,2022",
    title: "SAPA-GP 2022 Annual Conference (Hybrid)",
    txt: "King of Prussia, PA",
  },
  {
    time: "16th-19th May ,2022",
    title: "ASGCT 25th Annual Meeting",
    txt: "Washington, D.C.",
  },
  {
    time: "15th-16th Jul. ,2022",
    title: "China Oncolytic Virus Conference 2022 (Hybrid)",
    txt: "Shanghai, China",
  },
]);
const SciencesList = ref([
  {
    tit: "AAV Packaging Services",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20231019/1060cdb3931cb402fb967659f4645f34.jpg",
  },
  {
    tit: "Lentivirus Packaging Services",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20231019/ebcf10cfbdd41abcfa6cc931268def06.jpg",
  },
  {
    tit: "AAV Lung M3 and X",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20231019/e53e45f75ece1ff8f79d5656b95360a9.jpg",
  },
  {
    tit: "AAVneO + AAVMeta Platform",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20231019/1dcbaaaf9929529e54e508f5e1665dbd.jpg",
  },
  {
    tit: "Off-the-Shelf AAV Products",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20231019/a14ccd438e1b10ca796397d236a88770.jpg",
  },
]);
const SolutionsList = ref([
  {
    tit: "CGT CDMO Solutions at OBiO",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20231024/0a7db7cad0d47550e91ce323a47f29fe.jpg",
  },
  {
    tit: "Cell Therapy CDMO Solutions",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20231024/d21963d4b5f977d1a9f5135472a56668.jpg",
  },
  {
    tit: "Adeno Associated Virus CDMO Solutions",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20231024/e81a262802664819862f4f0d4be555ce.jpg",
  },
  {
    tit: "IPSC CDMO Services",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20230926/28fffe992afb0c7f806ce8acaf4dc20f.jpg",
  },
  {
    tit: "Phase-Appropriate Plasmid CDMO Solutions",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20230926/cd743d82fdf684f9fb1ef2866e28b52a.jpg",
  },
  {
    tit: "Lentiviral Vector CDMO Solutions",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20230926/f03331ea03516eb0b7b58e9b150887f8.jpg",
  },
  {
    tit: "Oncolytic Virus CDMO Solutions",
    imgUrl:
      "https://www.obio-tech.com/public/uploads/20230926/5da84fdce35d08986f725c27ca5d1f59.jpg",
  },
]);
</script>

<style lang="scss"></style>
