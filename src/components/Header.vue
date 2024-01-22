<template>
  <div
    class="header"
    :class="{ header_show: headerShow, shadow: headerShowActive }"
  >
    <div class="header_container">
      <div class="header_content">
        <div class="logo">
          <router-link to="/">
            <img :src="logo_img[0].path" alt="logo" v-if="headerLogoShow" />
            <img :src="logo_img[1].path" alt="logo" v-else />
          </router-link>
        </div>

        <!-- :default-active="activeIndex" -->
        <div class="menu-wrapper">
          <!-- <el-icon><Fold /></el-icon> -->
          <Fold
            class="hidden-md-only hidden-lg-only hidden-xl-only"
            style="width: 1.5em; height: 1.5em; margin-right: 8px"
            @click="drawerMenu = true"
          />
          <el-menu
            :ellipsis="false"
            :default-active="activeIndex"
            mode="horizontal"
            background-color="transparent"
            router
            class="hidden-sm-and-down"
          >
            <!-- style="width: 600px"
            :popper-offset="60" -->
            <!-- text-color="#ffffff" -->
            <!-- text-color="#ffffff"
          active-text-color="#ffffff" -->
            <!-- @select="handleSelect" -->
            <el-menu-item index="/">Home</el-menu-item>
            <el-sub-menu index="/about">
              <template #title>
                <div @click="router.push('/about')">About Us</div>
              </template>
              <el-sub-menu index="/Facilities">
                <template #title>
                  <div
                    @click="router.push('/about')"
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
            <el-menu-item index="/sys">Laboratory Sciences</el-menu-item>
            <el-sub-menu index="/cdmo">
              <template #title>
                <div @click="router.push('/cdmo')">CDMO Solutions</div>
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
            <el-menu-item index="/cx">Innovations</el-menu-item>
            <el-sub-menu index="/news">
              <template #title>
                <div @click="router.push('/news')">Insights</div>
              </template>
              <el-menu-item index="/releases">Press Releases</el-menu-item>
              <el-menu-item index="/events">Events</el-menu-item>
              <el-menu-item index="/news">
                <!-- @click="router.push('/news')" -->
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
              </el-menu-item>
            </el-sub-menu>
            <el-menu-item @click="openUrl">Investor Relations</el-menu-item>
            <el-menu-item index="/contact">Contact Us</el-menu-item>
          </el-menu>
        </div>
      </div>
    </div>
    <el-drawer
      v-model="drawerMenu"
      direction="ltr"
      size="70%"
      :show-close="false"
      z-index="999999"
      :append-to-body="true"
      class="menu-drawer"
    >
      <!-- <template #header>
        <h4>set title by slot</h4>
      </template> -->
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
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
const router = useRouter();
console.log(router, "router");
// import type { MainStates } from '@/store'
import mainStore from "@/stores/main";

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
const store = mainStore();

const headerShowActive = computed(() => store.headerShadowActive);
const headerShow = computed(() => store.headerShow);
const headerLogoShow = computed(() => store.headerLogoShow);
const navDarkActive = computed(() => store.navDarkActive);
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
onBeforeMount(() => {
  navList.value = [
    {
      title: "首页",
      path: "/index",
    },
    {
      title: "新闻中心",
      path: "/news",
    },
    {
      title: "产品与服务",
      path: "/product",
    },
    {
      title: "人才招聘",
      path: "/job",
    },
    // {
    //   title: '客户服务',
    //   path: '/customer'
    // },
    {
      title: "登录",
      path: "/login",
    },
  ];
});
</script>
<style lang="scss">
.menu-drawer {
  .el-drawer__body {
    padding: 0;
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
  background-color: rgba(255, 255, 255, 0);
  //backdrop-filter: blur(0);
  box-shadow: none;

  position: fixed;
  z-index: 999;
  transition: transform 0.2s ease;

  //color: rgba(255, 255, 255, 1) !important;
  //transition: all 0.3s ease;
  .header_container {
    height: 100%;
    background-image: linear-gradient(
      45deg,
      rgba(0, 95, 146, 0.75),
      rgba(0, 157, 133, 0.75)
    );
    padding-top: 10px;
    padding-bottom: 10px;
  }
}

.shadow {
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
}

.header_content {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 100%;
  align-items: center;
  padding: 0 96px;
  margin: 0 auto;

  .logo {
    flex: 0 0 auto;

    img {
      height: 35px;
    }
  }
}
.el-sub-menu {
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

  .menu-item-link {
    //color: #646a73;
    font-weight: 400;
    font-size: 14px;
    line-height: 60px;
    cursor: pointer;
    position: relative;

    a {
      display: inline-block;
      color: rgba(255, 255, 255, 1);
      transition: color 0.3s;

      :hover {
        color: $nav_active_color;
      }
    }

    .router-link-exact-active {
      color: $nav_active_color;
      font-weight: 600;

      span:after {
        content: "";
        display: block;
        height: 2px;
        position: absolute;
        width: 26px;
        left: calc(50% - 13px);
        bottom: 14px;
        background-color: $nav_active_color;
      }
    }
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
</style>
