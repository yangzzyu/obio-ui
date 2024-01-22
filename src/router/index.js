/*
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-22 15:24:11
 * @FilePath: \obio-ui\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import LabSciencesView from "@/views/LabSciencesView.vue";
import CdmoView from "@/views/CdmoView.vue";
import InnoView from "@/views/InnoView.vue";
import InsightsView from "@/views/InsightsView.vue";
import InvestorRelationsView from "@/views/InvestorRelationsView.vue";
import ContactView from "@/views/ContactView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
      name: "Home",
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
          name: "CDMO Solutions",
          component: () => import("@/views/cdmo/Index.vue"),
          children: [
            {
              path: "/cdmo",
              name: "cdmo",
              component: () => import("@/views/cdmo/Cdmo.vue"),
            },
            {
              path: "/process",
              name: "Process Development",
              component: () => import("@/views/cdmo/Process.vue"),
            },
            {
              path: "/cgmp",
              name: "cGMP Manufacturing",
              component: () => import("@/views/cdmo/cgmp/Index.vue"),
              // component: () => import("@/views/cdmo/cgmp/Cgmp.vue"),
              children: [
                {
                  path: "/cgmp",
                  name: "cGMP Manufacturing",
                  component: () => import("@/views/cdmo/cgmp/Cgmp.vue"),
                },
                {
                  path: "/vector",
                  name: "Viral Vector",
                  component: () => import("@/views/cdmo/cgmp/Vector.vue"),
                },
                {
                  path: "/virus",
                  name: "Oncolytic Virus",
                  component: () => import("@/views/cdmo/cgmp/Virus.vue"),
                },
                {
                  path: "/products",
                  name: "Cell Therapy Products",
                  component: () => import("@/views/cdmo/cgmp/Products.vue"),
                },
                {
                  path: "/nucleotides",
                  name: "Plasmid & Nucleotides",
                  component: () => import("@/views/cdmo/cgmp/Nucleotides.vue"),
                },
              ],
            },
            {
              path: "/quality",
              name: "Quality & Regulatory",
              component: () => import("@/views/cdmo/Quality.vue"),
            },
            {
              path: "/logistics",
              name: "Cold Chain Logistics",
              component: () => import("@/views/cdmo/Logistics.vue"),
            },
          ],
        },
        {
          path: "/cx",
          name: "innovations",
          component: () => import("@/views/inno/Innovations.vue"),
        },
        {
          path: "/news",
          name: "Insights",
          component: () => import("@/views/insights/Index.vue"),
          children: [
            {
              path: "/news",
              name: "Insights",
              component: () => import("@/views/insights/Insights.vue"),
            },
            {
              path: "/releases",
              name: "Press Releases",
              component: () => import("@/views/insights/Releases.vue"),
            },
            {
              path: "/events",
              name: "Events",
              component: () => import("@/views/insights/EventsList.vue"),
            },
          ],
        },
        {
          path: "/contact",
          name: "Contact Us",
          component: () => import("@/views/contact/Contact.vue"),
        },
        {
          path: "/investor-relations",
          name: "investor-relations",
          component: InvestorRelationsView,
        },
        
      ],
    },
  ],
});

export default router;
