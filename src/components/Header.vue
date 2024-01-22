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
          <el-menu
            :ellipsis="false"
            :default-active="activeIndex"
            mode="horizontal"
            background-color="transparent"
            router
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
              <el-menu-item index="/logistics"
                >Cold Chain Logistics</el-menu-item
              >
            </el-sub-menu>
          </el-menu>
        </div>
        <!-- <div class="menu-wrapper">
          <div class="menu-item" v-for="(nav, index) in navList" :key="index">
            <h2 class="menu-item-link">
              <router-link :to="nav.path">
                <span :class="{ a_text_dark: navDarkActive }">{{
                  nav.title
                }}</span>
              </router-link>
            </h2>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup name="AwHeader">
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
