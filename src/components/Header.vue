<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-22 21:59:54
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-03-04 09:58:32
 * @FilePath: \obio-ui\src\components\Header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- <div id="top-bar-wrap" class="clr" v-if="shadowTop">
    <div id="top-bar" class="clr container has-no-content">
      <div id="top-bar-inner" class="clr">
        <div id="top-bar-content" class="clr top-bar-right">
          <div
            id="top-bar-nav"
            class="navigation clr"
            role="navigation"
            aria-label="secondary"
          >
            <ul
              id="menu-top-bar-menu"
              class="top-bar-menu dropdown-menu sf-menu"
            >
              <li
                id="menu-item-2100"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2100"
              >
                <router-link to="/contact" class="menu-link"
                  >CONTACT US</router-link
                >
              </li>
              <li
                id="menu-item-146"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-146"
              >
                <a
                  title="LinkedIn"
                  href="https://www.linkedin.com/company/allogene-therapeutics/"
                  class="menu-link"
                  ><i
                    class="fab fa-linkedin-in alg-tb-icon"
                    aria-hidden="true"
                  ></i
                ></a>
              </li>
              <li
                id="menu-item-147"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-147"
              >
                <a
                  title="Twitter"
                  href="https://twitter.com/AllogeneTx"
                  class="menu-link"
                >
                  <font-awesome-icon
                    class="footer-icon"
                    size="lg"
                    :icon="['fab', 'weixin']"
                  />
                </a>
              </li>
              <li
                id="menu-item-148"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-148"
              >
                <a title="Share" href="#" class="menu-link"
                  ><span class="modal-61a916ebae560">Share</span></a
                >
              </li>
              <li
                id="menu-item-149"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-149"
              >
                <a
                  title="Email Us"
                  href="mailto://info@allogene.com"
                  class="menu-link"
                >
                  <font-awesome-icon
                    class="footer-icon"
                    size="lg"
                    :icon="['fab', 'linkedin']"
                  />
                </a>
              </li>
              <li
                id="menu-item-150"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-150"
              >
                <a title="Print" href="#" class="menu-link">
                  <font-awesome-icon
                    class="footer-icon"
                    size="lg"
                    :icon="['fab', 'youtube']"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <!-- :class="{ shadow: headerShadowActive }" -->
  <div class="header">
    <div class="header_container">
      <div class="header_content">
        <div class="logo">
          <router-link to="/">
            <!-- <img :src="logo_img[0].path" alt="logo" v-if="headerLogoShow" /> -->
            <img src="@/assets/icons/logo2.png" alt="logo" />
          </router-link>
        </div>

        <div class="menu-wrapper">
          <Fold
            class="hidden-md-only hidden-lg-only hidden-xl-only"
            style="
              width: 1.5em;
              height: 1.5em;
              margin-right: 8px;
              color: #0e686f;
            "
            @click="drawerMenu = true"
          />
          <el-menu
            :ellipsis="false"
            :default-active="activeIndex"
            mode="horizontal"
            text-color="#0D4DA1"
            router
            class="hidden-sm-and-down"
            active-text-color="#bd242a"
            background-color="transparent"
            :popper-offset="0"
          >
            <!-- popper-class="sub-popper" -->
            <!-- <el-menu-item index="/home" class="menu-t1">Home</el-menu-item> -->
            <el-sub-menu
              index="/about"
              :class="{
                'is-active': ['/about', '/facilities'].includes(activeIndex),
              }"
              popper-class="sub-popper"
            >
              <template #title>
                <div @click="router.push('/about')" class="menu-t1">
                  About Us
                </div>
              </template>
              <el-sub-menu index="/facilities">
                <template #title>
                  <div
                    @click="router.push('/facilities')"
                    v-scroll-to="{
                      element: '.section-3',
                      duration: 300,
                      easing: 'ease',
                      offset: 1,
                    }"
                  >
                    Our Facilities
                  </div>
                </template>
                <el-menu-item index="/spiroSite">SPIRO Site</el-menu-item>
                <el-menu-item index="/pineSite">PINE Site</el-menu-item>
                <el-menu-item index="/intelliM">OBiO Intelli-M</el-menu-item>
              </el-sub-menu>
              <el-menu-item index="/team">Leadership Team</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="/sys" class="menu-t1"
              >Capability & Commitment</el-menu-item
            >
            <!-- Laboratory Sciences -->
            <!-- popper-class="sub-popper" -->
            <el-sub-menu
              index="/cdmo"
              class="menu-t1"
              popper-class="sub-popper"
              :class="{
                'is-active': ['/cdmo', '/cgmp'].includes(activeIndex),
              }"
            >
              <template #title>
                <div @click="router.push('/cdmo')" class="menu-t1">
                  CDMO Solutions
                </div>
              </template>
              <el-menu-item index="/process">Process Development</el-menu-item>
              <el-sub-menu index="/cgmp">
                <template #title>
                  <div @click="router.push('/cgmp')">CGMP Manufacturing</div>
                </template>
                <el-menu-item index="/vector">Viral Vector</el-menu-item>
                <el-menu-item index="/virus">Oncolytic Virus</el-menu-item>
                <el-menu-item index="/products"
                  >Cell Therapy Products</el-menu-item
                >
                <el-menu-item index="/nucleotides"
                  >Plasmid & Nucleotides</el-menu-item
                >
              </el-sub-menu>
              <el-menu-item index="/quality">Quality & Regulatory</el-menu-item>
              <el-menu-item index="/logistics"
                >Cold Chain Logistics</el-menu-item
              >
            </el-sub-menu>
            <el-menu-item index="/sys" class="menu-t1"
              >CRO Service</el-menu-item
            >
            <!-- <el-menu-item index="/cx" class="menu-t1">Innovations</el-menu-item> -->
            <el-sub-menu
              index="/news"
              popper-class="sub-popper"
              :class="{
                'is-active': ['/news'].includes(activeIndex),
              }"
            >
              <template #title>
                <div @click="router.push('/news')" class="menu-t1">
                  Insights
                </div>
              </template>
              <el-menu-item index="/releases">Press Releases</el-menu-item>
              <el-menu-item index="/events">Events</el-menu-item>
              <!-- <el-menu-item index="/news">
                <div
                  v-scroll-to="{
                    element: '.section-3',
                    duration: 300,
                    easing: 'ease',
                    offset: 1,
                  }"
                >
                  Knowledge Center
                </div>
              </el-menu-item> -->
            </el-sub-menu>
            <el-menu-item @click="openUrl" class="menu-t1"
              >Investor Relations</el-menu-item
            >
            <!-- <el-menu-item index="/contact" class="menu-t1"
              >Contact Us</el-menu-item
            > -->
          </el-menu>
          <ul class="icon-list">
            <li
              id="menu-item-146"
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-146"
            >
              <a
                title="LinkedIn"
                href="https://www.linkedin.com/company/allogene-therapeutics/"
                class="menu-link"
                ><i
                  class="fab fa-linkedin-in alg-tb-icon"
                  aria-hidden="true"
                ></i
              ></a>
            </li>
            <li
              id="menu-item-147"
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-147"
            >
              <a
                title="Twitter"
                href="https://twitter.com/AllogeneTx"
                class="menu-link"
              >
                <font-awesome-icon
                  class="footer-icon"
                  size="lg"
                  :icon="['fab', 'weixin']"
                />
              </a>
            </li>
            <li
              id="menu-item-148"
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-148"
            >
              <a title="Share" href="#" class="menu-link"
                ><span class="modal-61a916ebae560">Share</span></a
              >
            </li>
            <li
              id="menu-item-149"
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-149"
            >
              <a
                title="Email Us"
                href="mailto://info@allogene.com"
                class="menu-link"
              >
                <font-awesome-icon
                  class="footer-icon"
                  size="lg"
                  :icon="['fab', 'linkedin']"
                />
                <!-- <i class="fal fa-envelope alg-tb-ifs" aria-hidden="true"></i
                > -->
              </a>
            </li>
            <li
              id="menu-item-150"
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-150"
            >
              <a title="Print" href="#" class="menu-link">
                <font-awesome-icon
                  class="footer-icon"
                  size="lg"
                  :icon="['fab', 'youtube']"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <el-drawer
      v-model="drawerMenu"
      direction="rtl"
      size="70%"
      :show-close="false"
      z-index="999999"
      :append-to-body="true"
      class="menu-drawer hidden-md-only hidden-lg-only hidden-xl-only"
    >
      <el-menu
        :ellipsis="false"
        :default-active="activeIndex"
        text-color="#fff"
        router
        active-text-color="#87ffd9"
        background-color="transparent"
        :popper-offset="0"
        @select="drawerMenu = false"
      >
        <!-- <el-menu-item index="/" class="menu-t1">Home</el-menu-item> -->
        <el-sub-menu index="/about" popper-class="sub-popper">
          <template #title>
            <div @click="router.push('/about')" class="menu-t1">About Us</div>
          </template>
          <el-sub-menu index="/facilities" popper-class="sub-popper ">
            <template #title>
              <div
                @click="router.push('/facilities')"
                v-scroll-to="{
                  element: '.section-3',
                  duration: 300,
                  easing: 'ease',
                  offset: 1,
                }"
              >
                Our Facilities
              </div>
            </template>
            <el-menu-item index="/spiroSite">SPIRO Site</el-menu-item>
            <el-menu-item index="/pineSite">PINE Site</el-menu-item>
            <el-menu-item index="/intelliM">OBiO Intelli-M</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="/team">Leadership Team</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/sys" class="menu-t1"
          >Laboratory Sciences</el-menu-item
        >
        <el-sub-menu index="/cdmo" popper-class="sub-popper">
          <template #title>
            <div @click="router.push('/cdmo')" class="menu-t1">
              CDMO Solutions
            </div>
          </template>
          <el-menu-item index="/process">Process Development</el-menu-item>
          <el-sub-menu index="/cgmp" popper-class="sub-popper ">
            <template #title>
              <div @click="router.push('/cgmp')">CGMP Manufacturing</div>
            </template>
            <el-menu-item index="/vector">Viral Vector</el-menu-item>
            <el-menu-item index="/virus">Oncolytic Virus</el-menu-item>
            <el-menu-item index="/products">Cell Therapy Products</el-menu-item>
            <el-menu-item index="/nucleotides"
              >Plasmid & Nucleotides</el-menu-item
            >
          </el-sub-menu>
          <el-menu-item index="/quality">Quality & Regulatory</el-menu-item>
          <el-menu-item index="/logistics">Cold Chain Logistics</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/cx" class="menu-t1">Innovations</el-menu-item>
        <el-sub-menu index="/news" popper-class="sub-popper">
          <template #title>
            <div @click="router.push('/news')" class="menu-t1">Insights</div>
          </template>
          <el-menu-item index="/releases">Press Releases</el-menu-item>
          <el-menu-item index="/events">Events</el-menu-item>
          <!-- <el-menu-item index="/news">
            <div
              v-scroll-to="{
                element: '.section-3',
                duration: 300,
                easing: 'ease',
                offset: 1,
              }"
            >
              Knowledge Center
            </div>
          </el-menu-item> -->
        </el-sub-menu>
        <el-menu-item @click="openUrl" class="menu-t1"
          >Investor Relations</el-menu-item
        >
        <!-- <el-menu-item index="/contact" class="menu-t1">Contact Us</el-menu-item> -->
      </el-menu>
    </el-drawer>
  </div>
</template>
<script lang="ts" setup name="AwHeader">
import { Fold } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import { computed, onBeforeMount, ref, toRefs } from "vue";
import { handleViteImages } from "@/utils";
// import { mapState, useStore } from 'pinia'
const props = defineProps({
  headerShadowActive: {
    type: Boolean,
    default: false,
  },
  shadowTop: {
    type: Boolean,
    default: false,
  },
});
const router = useRouter();
console.log(router, "router");
// import type { MainStates } from '@/store'

const activeIndex = computed(() => router.currentRoute.value.path);
type NavItem = {
  title: string;
  path: string;
};
type ImgItem = {
  path: string;
};
const drawerMenu = ref(false);
const navList = ref<NavItem[]>([]);
const logo_img = ref<ImgItem[]>([]);

logo_img.value = [
  {
    path: handleViteImages("@/assets/icons/logo1.png"),
  },
  {
    path: handleViteImages("@/assets/icons/logo1.png"),
  },
];
function openUrl() {
  window.open("https://www.obiosh.com/tzz/gg/");
}

function goPage(params) {
  router.push(params);
  drawerMenu.value = false;
}
onBeforeMount(() => {});
</script>
<style lang="scss">
.menu-drawer {
  .el-drawer__body {
    padding: 0;
  }
  width: 100%;
  // max-width: 20em;
  background: #022350 url(@/assets/icons/up_downbg.jpg) no-repeat center;
  z-index: 1;
  // transform: translateX(100%);
  transition: all 0.5s ease;
  .el-menu {
    border-right: none;
  }
}
.sub-popper {
  // border-top: 3px solid #0093dd;
  .el-sub-menu__title,
  .el-menu-item {
    font-size: 20px;
    // color: #000 !important;
    &:not(.is-disabled):focus,
    &:not(.is-disabled):hover {
      background: #0e686f;
      color: #fff;
    }
  }
}
.menu-t1 {
  // font-size: 1.1vw;
  font-size: 20px;
  &:not(.is-disabled):focus,
  &:not(.is-disabled):hover {
    background: transparent !important;
    // color: #fff;
  }
}
// .menu-drawer {
//   .menu-t1 {
//     font-size: 18px;
//   }
// }
</style>
<style lang="scss" scoped>
$nav_active_color: #3370ff;

h2 {
  margin: 0;
}

.header_show {
  transform: translateY(-62px);
}

.a_text_dark {
  color: rgba(0, 0, 0, 0.8);
}

.header {
  width: 100%;
  height: 60px;
  box-shadow: none;

  position: fixed;
  z-index: 999;
  transition: transform 0.2s ease;

  font-family: "puhuiti-2-55";
  background: #fff;
  .header_container {
    height: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
  }
}

.shadow {
  background-image: linear-gradient(
    45deg,
    rgba(0, 95, 146, 0.75),
    rgba(0, 157, 133, 0.75)
  );
  backdrop-filter: blur(8px);
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
}

.header_content {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 100%;
  align-items: center;
  padding: 0 4%;
  margin: 0 auto;

  .logo {
    flex: 0 0 auto;

    img {
      height: 35px;
    }
  }
}

.menu-wrapper {
  display: flex;
  flex-direction: row;
  list-style: none;
  -ms-flex-align: center;
  align-items: center;
  padding: 0;
  margin: 0 0 0 20px;
  position: relative;
  // width: 60%;
  .el-menu {
    // width: 100%;
  }
  .el-menu--horizontal.el-menu {
    border: none;
  }
  .menu-item {
    flex-shrink: 0;
  }

  .menu-item:last-child:before {
    content: "";
    display: block;
    height: 12px;
    border-right: 1px solid #bbbfc4;
    //border-right: 1px solid #fff;
    position: absolute;
    bottom: 24px;
    right: 48px;
  }

  > .menu-item + .menu-item {
    margin-left: 40px;
  }
}

.nav_text_white {
  color: rgba(255, 255, 255, 1);
}

.nav_text_dark {
  color: rgba(0, 0, 0, 0.8);
}

@media only screen and (max-width: 991px) {
  .header_content {
    padding: 0 32px;
  }
}
#top-bar-wrap {
  color: #fff;
  border-color: #1f757b;
  position: relative;
  // background-color: #fff;
  background-color: #1f757b;
  font-size: 12px;
  // border-bottom: 1px solid #f1f1f1;
  z-index: 101;
  #top-bar {
    padding: 8px 0;
    margin: auto;
  }
  #top-bar-inner {
    position: relative;
  }
  #top-bar-content,
  #top-bar-social-alt {
    font-family: HCo Gotham Rounded Medium SSm;
    font-size: 14px;
    letter-spacing: 0.6px;
    text-transform: uppercase;
  }
  .top-bar-right {
    display: flex;
    justify-content: end;
  }
  #top-bar-nav {
    display: inline-block !important;
  }
  #top-bar-nav > ul > li {
    display: inline-block;
    float: none;
    margin-right: 15px;
  }
  .dropdown-menu,
  .dropdown-menu * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}
.icon-list {
  display: flex;
  .menu-item {
    margin-right: 10px;
    // background: linear-gradient(
    //   to right,
    //   rgba(1, 76, 151, 1) 0%,
    //   rgba(0, 129, 139, 1) 100%
    // );
    // -webkit-background-clip: text; /*将设置的背景颜色限制在文字中*/
    // -webkit-text-fill-color: transparent; /*给文字设置成透明*/
    a:hover {
      color: #000;
    }
  }
}
</style>
