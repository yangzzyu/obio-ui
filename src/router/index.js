/*
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-18 16:23:16
 * @FilePath: \obio-ui\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from "vue-router";
// 首页
import Index from "@/views/index.vue";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import LabSciencesView from "@/views/LabSciencesView.vue";
import CdmoView from "@/views/CdmoView.vue";
import InnoView from "@/views/InnoView.vue";
import InsightsView from "@/views/InsightsView.vue";
import InvestorRelationsView from "@/views/InvestorRelationsView.vue";
import ContactView from "@/views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: '/home', 
      name: "首页",
      component: Index,
      children: [
        {
          
          path: "/home",
          name: "home",
          component: HomeView,
        },
        {
          path: "/about",
          name: "about",
          component: AboutView,
        },
        {
          path: "/sys",
          name: "lab-sciences",
          component: LabSciencesView,
        },
        {
          path: "/cdmo",
          name: "cdmo",
          component: CdmoView,
        },
        {
          path: "/cx",
          name: "innovations",
          component: InnoView,
        },
        {
          path: "/news",
          name: "insights",
          component: InsightsView,
        },
        {
          path: "/investor-relations",
          name: "investor-relations",
          component: InvestorRelationsView,
        },
        {
          path: "/contact",
          name: "contact",
          component: ContactView,
        },
      ],
    },
  ],
});

export default router;
