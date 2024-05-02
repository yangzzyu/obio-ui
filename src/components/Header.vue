<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-22 21:59:54
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-04-16 16:55:54
 * @FilePath: \obio-ui\src\components\Header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- :class="{ shadow: headerShadowActive }" -->
  <div role="banner" class="header">
    <div class="header_container">
      <div class="header_content">
        <div class="logo">
          <router-link to="/">
            <img :src="handleViteImages('logo2.png')" alt="logo" />
          </router-link>
        </div>

        <div class="menu-wrapper">
          <Fold class="hidden-md-only hidden-lg-only hidden-xl-only" style="
              width: 1.5em;
              height: 1.5em;
              margin-right: 8px;
              color: #0e686f;
            " @click="drawerMenu = true" />
          <el-menu :ellipsis="false" :default-active="activeIndex" mode="horizontal" text-color="#0D4DA1" router
            class="hidden-sm-and-down" active-text-color="#008689" background-color="transparent" :popper-offset="0">
            <!-- popper-class="sub-popper" -->
            <el-sub-menu index="/about" :class="{
              'is-active': ['/about', '/history', '/facilities'].includes(activeIndex),
            }" popper-class="sub-popper">
              <template #title>
                <div @click="router.push('/about')" class="menu-t1">
                  About Us
                </div>
              </template>
              <el-menu-item index="/about/history">History </el-menu-item>
              <el-sub-menu index="/about/facilities">
                <template #title>
                  <div @click="router.push('/about/facilities')">
                    Facilities
                  </div>
                </template>
                <el-menu-item index="/about/facilities/spiro">SPIRO Site</el-menu-item>
                <el-menu-item index="/about/facilities/pine">PINE Site</el-menu-item>
                <el-menu-item index="/about/facilities/intellim">OBiO Intelli-M</el-menu-item>
              </el-sub-menu>
              <el-menu-item index="/about/who">Who We Are</el-menu-item>
              <el-menu-item index="/about/commitment">Our Commitment </el-menu-item>
              <el-menu-item index="/about/life">Life at OBiO </el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="/capability" popper-class="sub-popper" :class="{
              'is-active': ['/capability'].includes(activeIndex),
            }">
              <template #title>
                <div @click="router.push('/capability')" class="menu-t1">
                  Capability & Commitment
                </div>
              </template>
              <el-menu-item index="/capability/whyus">Why Us </el-menu-item>
              <el-menu-item index="/capability/industrialized">
                Industrialized
              </el-menu-item>
              <el-menu-item index="/capability/equipments">Equipments </el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="/cdmo" class="menu-t1" popper-class="sub-popper" :class="{
              'is-active': ['/cdmo', '/cgmp'].includes(activeIndex),
            }">
              <template #title>
                <div @click="router.push('/cdmo')" class="menu-t1">
                  CDMO Solutions
                </div>
              </template>
              <el-menu-item index="/cdmo/cdmo"> CDMO Service</el-menu-item>
              <el-menu-item index="/cdmo/manufacturing">
                Facilities
              </el-menu-item>
              <el-menu-item index="/cdmo/innovation"> Innovation </el-menu-item>
            </el-sub-menu>
            <el-menu-item index="/cro" class="menu-t1">CRO Service</el-menu-item>
            <el-sub-menu index="/insight" popper-class="sub-popper" :class="{
              'is-active': ['/insight'].includes(activeIndex),
            }">
              <template #title>
                <div @click="router.push('/insight')" class="menu-t1">News</div>
              </template>
              <el-menu-item index="/insight/news">News</el-menu-item>
              <el-menu-item index="/insight/events">Events</el-menu-item>
              <el-menu-item index="/insight/inquiry">Inquiry</el-menu-item>
              <el-menu-item index="/insight/partnership">
                <a href="https://www.obiosh.com/tzz/gg/" target="_blank">Partnership</a>
              </el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="/careers" popper-class="sub-popper" :class="{
              'is-active': ['/careers'].includes(activeIndex),
            }">
              <template #title>
                <div @click="router.push('/careers')" class="menu-t1">
                  Careers
                </div>
              </template>
              <el-menu-item index="/careers/culture">Our Culture</el-menu-item>
              <el-menu-item index="/careers/life"> Life at OBiO </el-menu-item>
              <el-menu-item index="/careers/job"> Job Opening </el-menu-item>
            </el-sub-menu>
          </el-menu>
        </div>
      </div>
    </div>
    <el-drawer v-model="drawerMenu" direction="rtl" size="70%" :show-close="false" :z-index="999999"
      :append-to-body="true" class="menu-drawer hidden-md-only hidden-lg-only hidden-xl-only">
      <el-menu :ellipsis="false" :default-active="activeIndex" text-color="#fff" router active-text-color="#87ffd9"
        background-color="transparent" :popper-offset="0" @select="drawerMenu = false">
        <el-sub-menu index="/about" :class="{
              'is-active': ['/about', '/facilities'].includes(activeIndex),
            }" popper-class="sub-popper">
          <template #title>
            <div @click="goPage('/about')" class="menu-t1">About Us</div>
          </template>
          <el-menu-item index="/about/history">History </el-menu-item>
          <el-sub-menu index="/about/facilities">
            <template #title>
              <div @click="router.push('/about/facilities')">Facilities</div>
            </template>
            <el-menu-item index="/about/facilities/spiro">SPIRO Site</el-menu-item>
            <el-menu-item index="/about/facilities/pine">PINE Site</el-menu-item>
            <el-menu-item index="/about/facilities/intellim">OBiO Intelli-M</el-menu-item>
          </el-sub-menu>
          <!-- <el-menu-item index="/about/mission"> Mission</el-menu-item> -->
          <el-menu-item index="/about/who">Who We Are</el-menu-item>
          <el-menu-item index="/about/commitment">Our Commitment </el-menu-item>
          <el-menu-item index="/about/life">Life at OBiO </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="/capability" popper-class="sub-popper" :class="{
              'is-active': ['/capability'].includes(activeIndex),
            }">
          <template #title>
            <div @click="router.push('/capability')" class="menu-t1">
              Capability & Commitment
            </div>
          </template>
          <el-menu-item index="/capability/whyus">Why Us </el-menu-item>
          <el-menu-item index="/capability/industrialized">
            Industrialized
          </el-menu-item>
          <el-menu-item index="/capability/equipments">Equipments </el-menu-item>
          <!-- <el-menu-item index="/capability/commitment">
            Commitment
          </el-menu-item> -->
        </el-sub-menu>
        <el-sub-menu index="/cdmo" class="menu-t1" popper-class="sub-popper" :class="{
              'is-active': ['/cdmo', '/cgmp'].includes(activeIndex),
            }">
          <template #title>
            <div @click="router.push('/cdmo')" class="menu-t1">
              CDMO Solutions
            </div>
          </template>
          <el-menu-item index="/cdmo/cdmo"> CDMO </el-menu-item>
          <el-menu-item index="/cdmo/manufacturing">
            Facilities
          </el-menu-item>
          <el-menu-item index="/cdmo/innovation"> Innovation </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/cro" class="menu-t1">CRO Service</el-menu-item>
        <el-sub-menu index="/insight" popper-class="sub-popper" :class="{
              'is-active': ['/insight'].includes(activeIndex),
            }">
          <template #title>
            <div @click="router.push('/insight')" class="menu-t1">News</div>
          </template>
          <el-menu-item index="/insight/news">News</el-menu-item>
          <el-menu-item index="/insight/events">Events</el-menu-item>
          <el-menu-item index="/insight/inquiry">Inquiry</el-menu-item>
          <el-menu-item index="/insight/partnership">
            <a href="https://www.obiosh.com/tzz/gg/" target="_blank">Partnership</a>
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="/careers" popper-class="sub-popper" :class="{
              'is-active': ['/careers'].includes(activeIndex),
            }">
          <template #title>
            <div @click="router.push('/careers')" class="menu-t1">Careers</div>
          </template>

          <el-menu-item index="/careers/culture">Our Culture</el-menu-item>
          <el-menu-item index="/careers/life"> Life at OBiO </el-menu-item>
          <el-menu-item index="/careers/job"> Job Opening </el-menu-item>
        </el-sub-menu>
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
    path: handleViteImages("logo1.png"),
  },
  {
    path: handleViteImages("logo1.png"),
  },
];
function openUrl() {
  window.open("https://www.obiosh.com/tzz/gg/");
}

function goPage(params) {
  router.push(params);
  drawerMenu.value = false;
}
onBeforeMount(() => { });
</script>
<style lang="scss">
.menu-drawer {
  .el-drawer__body {
    padding: 0;
  }

  width: 100%;
  background: #022350 url(up_downbg.jpg) no-repeat center;
  z-index: 1;
  transition: all 0.5s ease;

  .el-menu {
    border-right: none;
  }
}

.sub-popper {

  .el-sub-menu__title,
  .el-menu-item {
    font-size: 16px;

    &:not(.is-disabled):focus,
    &:not(.is-disabled):hover {
      background: #0e686f;
      color: #fff;
    }
  }
}

.menu-t1 {
  font-size: 20px;
  font-weight: bold;

  &:not(.is-disabled):focus,
  &:not(.is-disabled):hover {
    background: transparent !important;
  }
}
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
  background-image: linear-gradient(45deg,
      rgba(0, 95, 146, 0.75),
      rgba(0, 157, 133, 0.75));
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

  // .el-menu {
  // }
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
    position: absolute;
    bottom: 24px;
    right: 48px;
  }

  >.menu-item+.menu-item {
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
  background-color: #1f757b;
  font-size: 12px;
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
  }

  .top-bar-right {
    display: flex;
    justify-content: end;
  }

  #top-bar-nav {
    display: inline-block !important;
  }

  #top-bar-nav>ul>li {
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

    a:hover {
      color: #000;
    }
  }
}
</style>
