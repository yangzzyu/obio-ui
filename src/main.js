/*
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-17 09:07:47
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-04-01 11:33:48
 * @FilePath: \obio-ui\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import "@/styles/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/display.css";
import "animate.css/animate.min.css";

import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas, far, fab);

// Vuetify
// import "vuetify/styles";
// import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import VueScrollTo from "vue-scrollto";

// const vuetify = createVuetify({
//   components,
//   directives,
// });

const app = createApp(App);
app.directive("scroll-to", VueScrollTo);
app.use(createPinia());
app.use(router);
// app.use(VueScrollTo);
// app.use(vuetify);
app.use(ElementPlus);

app.mount("#app");

app.component("font-awesome-icon", FontAwesomeIcon);
