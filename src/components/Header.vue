<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-22 21:59:54
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-27 12:00:29
 * @FilePath: \obio-ui\src\components\Header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="header" :class="{ shadow: headerShadowActive }">
    <div class="header_container">
      <div class="header_content">
        <div class="logo">
          <router-link to="/">
            <!-- <img :src="logo_img[0].path" alt="logo" v-if="headerLogoShow" /> -->
            <img :src="logo_img[1].path" alt="logo" />
          </router-link>
        </div>

        <div class="menu-wrapper">
          <Fold
            class="hidden-md-only hidden-lg-only hidden-xl-only"
            style="width: 1.5em; height: 1.5em; margin-right: 8px; color: #fff"
            @click="drawerMenu = true"
          />
          <el-menu
            :ellipsis="false"
            :default-active="activeIndex"
            mode="horizontal"
            text-color="#fff"
            router
            class="hidden-sm-and-down"
            active-text-color="#87ffd9"
            background-color="transparent"
            :popper-offset="0"
          >
            <el-menu-item index="/" class="menu-t1">Home</el-menu-item>
            <el-sub-menu index="/about" popper-class="sub-popper">
              <template #title>
                <div @click="router.push('/about')" class="menu-t1">
                  About Us
                </div>
              </template>
              <el-sub-menu index="/facilities" popper-class="sub-popper">
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
            <el-sub-menu
              index="/cdmo"
              popper-class="sub-popper"
              class="menu-t1"
            >
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
            <el-menu-item index="/cx" class="menu-t1">Innovations</el-menu-item>
            <el-sub-menu index="/news" popper-class="sub-popper">
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
            <el-menu-item index="/contact" class="menu-t1"
              >Contact Us</el-menu-item
            >
          </el-menu>
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
        <el-menu-item index="/" class="menu-t1">Home</el-menu-item>
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
        <el-menu-item index="/contact" class="menu-t1">Contact Us</el-menu-item>
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
const navList = ref<NavItem[]>([
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Our Facilities",
    path: "/facilities",
  },
  {
    title: "SPIRO Site",
    path: "/spiroSite",
  },
  {
    title: "PINE Site",
    path: "/spiroSite",
  },
]);
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
  // position: absolute;
  // top: 0;
  // right: 0;
  // bottom: 0;
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
  border-top: 3px solid #0093dd;
  .el-sub-menu__title,
  .el-menu-item {
    color: #000 !important;
  }
}
.menu-t1 {
  font-size: 1.1vw;
}
.menu-drawer {
  .menu-t1 {
    font-size: 18px;
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
.el-sub-menu {
  // font-size: 24px;
  .el-menu-item {
    // color: #000 !important;
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

  // .menu-item-link {
  //   //color: #646a73;
  //   font-weight: 400;
  //   font-size: 14px;
  //   line-height: 60px;
  //   cursor: pointer;
  //   position: relative;

  //   a {
  //     display: inline-block;
  //     color: rgba(255, 255, 255, 1);
  //     transition: color 0.3s;

  //     :hover {
  //       color: $nav_active_color;
  //     }
  //   }

  //   .router-link-exact-active {
  //     color: $nav_active_color;
  //     font-weight: 600;

  //     span:after {
  //       content: "";
  //       display: block;
  //       height: 2px;
  //       position: absolute;
  //       width: 26px;
  //       left: calc(50% - 13px);
  //       bottom: 14px;
  //       background-color: $nav_active_color;
  //     }
  //   }
  // }
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
</style>
