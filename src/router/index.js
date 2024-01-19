/*
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-19 14:23:12
 * @FilePath: \obio-ui\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from "vue-router";
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
      redirect: "/home",
      name: "首页",
      component: () => import("@/views/index.vue"),
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("@/views/home/Index.vue"),
        },
        {
          path: "/aboutRouter",
          redirect: "/about",
          name: "aboutRouter",
          component: () => import("@/views/about/Index.vue"),
          children: [
            {
              path: "/about",
              name: "about",
              component: () => import("@/views/about/Home.vue"),
            },
            {
              path: "/Facilities",
              name: "Facilities",
              component: () => import("@/views/about/Home.vue"),
            },
            {
              path: "/spiroSite",
              name: "spiroSite",
              component: () => import("@/views/about/SpiroSite.vue"),
            },
            {
              path: "/pineSite",
              name: "pineSite",
              component: () => import("@/views/about/PineSite.vue"),
            },
            {
              path: "/intelliM",
              name: "intelliM",
              component: () => import("@/views/about/IntelliM.vue"),
            },
            {
              path: "/team",
              name: "team",
              component: () => import("@/views/about/Team.vue"),
            },
          ],
        },
        {
          path: "/sys",
          name: "lab-sciences",
          component: () => import("@/views/labSciences/Index.vue"),
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
