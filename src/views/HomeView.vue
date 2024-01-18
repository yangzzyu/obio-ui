<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-17 09:07:47
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-17 17:27:03
 * @FilePath: \obio-ui\src\views\HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- <script setup>
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template> -->

<template>
  <div class="index">
    <AwHeader :class="index_header"></AwHeader>
    <div class="banner-wrap">
      <Banner :banner-height="BannerHeight"></Banner>
      <!-- <over-lay></over-lay> -->
      <!-- <scroll-hint
        v-scroll-to="{
          element: '.wrap-block',
          duration: 300,
          easing: 'ease',
          offset: 1,
        }"
      ></scroll-hint> -->
      <div class="home-about-wrap animation-name: fadeInUp">
        <div class="home-about-content">
          <div class="container">
            <div class="pub-title"><i class="line"></i></div>
            <div
              class="txt fontf8 font-size50 line-height18 wow fadeInUp animated"
              data-wow-offset="100"
              data-wow-delay="0s"
              style="visibility: visible; animation-name: fadeInUp"
            >
              Providing client-centered and high-quality service as our
              commitment, we strive to become a world leading gene and cell
              therapy CRO/CDMO group.
            </div>
          </div>
        </div>
      </div>

      <div class="home-offering-wrap">
        <div class="container">
          <div class="pub-title style2 ub ub-ver ub-pe">
            <i class="line"></i
            ><span
              class="fontf8 font-size70 wow fadeInUp animated"
              style="visibility: visible; animation-name: fadeInUp"
              >Our Offering</span
            >
          </div>
          <div class="list row">
            <div class="item col-sm-6 col-sm-push-6">
              <div
                class="box wow fadeInUp animated"
                style="visibility: visible; animation-name: fadeInUp"
              >
                <i class="bg"></i>
                <div class="txt-con ub ub-ver ub-pc">
                  <div class="title color1 font-size50 fontf7">
                    <a href="/cn/home/cdmo"
                      >CDMO <br />
                      Solutions</a
                    >
                  </div>
                  <div class="line"><i></i></div>
                  <div class="p font-size18 fontf2">
                    OBiO offers holistic solutions in process development,
                    analytical method, IND-enabling CMC, clinical and commercial
                    contract manufacturing of viral vector, oncolytic virus, and
                    cell therapy products.
                  </div>
                  <div class="more">
                    <a href="/cn/home/cdmo" class="m-a"></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="item col-sm-6 col-sm-pull-6">
              <div
                class="box wow fadeInUp animated"
                style="visibility: visible; animation-name: fadeInUp"
              >
                <i class="bg"></i>
                <div class="txt-con ub ub-ver ub-pc">
                  <div class="title color1 font-size50 fontf7">
                    <a href="/cn/home/sys">
                      Laboratory <br />
                      Sciences</a
                    >
                  </div>
                  <div class="line"><i></i></div>
                  <div class="p font-size18 fontf2">
                    OBiO provides an integrated portfolio of plasmid
                    construction, viral packaging, cell biology and animal study
                    services for biomedical researchers.
                  </div>
                  <div class="more">
                    <a href="/cn/home/sys" class="m-a"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <index-service></index-service> -->
    <!-- <AwFooter></AwFooter> -->
  </div>
</template>
<script lang="ts" setup name="Home">
import "wow.js/css/libs/animate.css";
import WOW from "wow.js";
import AwHeader from "@/components/Header.vue";
import AwFooter from "@/components/Footer.vue";
import OverLay from "@/components/OverLayText.vue";
// import IndexService from '@/components/IndexService.vue'
import Banner from "@/components/Banner.vue";
// import ScrollHint from '@/components/ScrollHint.vue'

import { onMounted, onUnmounted, ref } from "vue";

import mainStore from "@/stores/main";
const store = mainStore();

console.log(store, "store");

const index_header = ref("");
const BannerHeight = ref(0);

const scrollTop = ref(0);
const wow = ref("");
onMounted(() => {
  var wow = new WOW({
    boxClass: "wow", // animated element css class (default is wow)
    animateClass: "animated", // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
  });
  console.log(wow, "wow");

  wow.init();
  window.addEventListener("resize", setBannerHeight);
  setBannerHeight();
  window.addEventListener("scroll", scrollHandle);
});

onUnmounted(() => {
  window.removeEventListener("resize", setBannerHeight);
  window.removeEventListener("scroll", scrollHandle);
});

function setBannerHeight() {
  BannerHeight.value = window.innerHeight;
  store.setBannerHeight(BannerHeight.value);
}

function scrollHandle() {
  scrollTop.value =
    document.documentElement.scrollTop ||
    window.pageYOffset ||
    document.body.scrollTop;
  if (scrollTop.value <= BannerHeight.value - 35) {
    store.setHeaderLogo(true);
    store.setShadowActive(false);
    store.setNavDarkActive(false);
  } else {
    store.setHeaderLogo(false);
    store.setShadowActive(true);
    store.setNavDarkActive(true);
  }
}
</script>
<style lang="scss" scoped>
.home-about-wrap .home-about-content,
.home-about-wrap {
  @media (max-width: 765px) {
    background-size: 90%;
  }
}
.banner-wrap {
  overflow: hidden;
  position: relative;
  .home-about-wrap {
    padding-top: 24vh;
    position: relative;
    z-index: 9;
    margin-top: -24vh;
    pointer-events: none;
  }
  .home-about-wrap .home-about-content {
    overflow: hidden;
    position: relative;
  }
  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
  @media (min-width: 1710px) {
    .container {
      width: 1430px;
    }
    .home-facilities .list .item.active .p {
      margin-top: 130px;
    }
  }
  .home-about-wrap .txt {
    padding: 6vh 0 20vh;
    background-image: linear-gradient(135deg, #0d9cad, #009d85);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    pointer-events: auto;
    font-weight: bold;
  }
  .home-about-wrap .home-about-content:after {
    display: block;
    width: 605px;
    height: 706px;
    background: url(@/assets/icons/home_bg1.png) no-repeat right -13vh / auto 100%;
    content: "";
    position: absolute;
    top: 0;
    right: 50%;
    margin-right: 310px;
    z-index: -1;
  }
  .home-about-wrap .home-about-content:after {
    display: block;
    width: 605px;
    height: 706px;
    background: url(@/assets/icons/home_bg1.png) no-repeat right -13vh / auto 100%;
    content: "";
    position: absolute;
    top: 0;
    right: 50%;
    margin-right: 310px;
    z-index: -1;
  }
  @media (max-width: 1700px) and (min-width: 768px) {
    .pub-title {
      height: 120px;
    }
  }

  .pub-title {
    padding-left: 20px;
    height: 160px;
    position: relative;
    color: #014099;
  }
  @media (max-width: 1700px) and (min-width: 768px) {
    .pub-title .line {
      height: 120px;
    }
  }

  .pub-title .line {
    position: absolute;
    bottom: 0;
    left: -10px;
    width: 12px;
    height: 160px;
    background: url(@/assets/icons/ico_ly.png) no-repeat left bottom;
  }
}
.home-offering-wrap {
  background: url(@/assets/icons/offering_bg.jpg) no-repeat center/cover;
  background-attachment: fixed;
  padding-bottom: 120px;
  overflow: hidden;
}
.overlay {
  z-index: 666;
}

.wrap-block {
  position: relative;
  padding-top: 54px;
}
</style>
