import { ref, computed } from "vue";
import { defineStore } from "pinia";

// export const useCounterStore = defineStore("counter", () => {
//   const count = ref(0);
//   const doubleCount = computed(() => count.value * 2);
//   function increment() {
//     count.value++;
//   }

//   return { count, doubleCount, increment };
// });

const mainStore = defineStore("main", {
  state: () => ({
    BannerHeight: 0,
    headerShadowActive: false,
    headerShow: false,
    headerLogoShow: true,
    navDarkActive: false,
    articlePath: "",
  }),
//   mutations: {
//     setBannerHeight(value) {
//       this.BannerHeight = value;
//     },
//     setShadowActive(value) {
//       this.headerShadowActive = value;
//     },
//     setHeaderShow(value) {
//       this.headerShow = value;
//     },
//     setHeaderLogo(value) {
//       this.headerLogoShow = value;
//     },
//     setNavDarkActive(value) {
//       this.navDarkActive = value;
//     },
//     SET_ARTICLE_PATH: (value) => {
//       this.articlePath = value.path;
//     },
//   },
  actions: {
    setArticlePath({ commit }, path) {
      return new Promise((resolve) => commit("SET_ARTICLE_PATH", path));
    },
    setBannerHeight(value) {
      this.BannerHeight = value;
    },
    setShadowActive(value) {
      this.headerShadowActive = value;
    },
    setHeaderShow(value) {
      this.headerShow = value;
    },
    setHeaderLogo(value) {
      this.headerLogoShow = value;
    },
    setNavDarkActive(value) {
      this.navDarkActive = value;
    },
    SET_ARTICLE_PATH: (value) => {
      this.articlePath = value.path;
    },
  },
  modules: {},
});

export default mainStore;
