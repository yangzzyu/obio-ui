/*
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-04-09 14:00:09
 * @FilePath: \obio-ui\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import { ref, nextTick } from "vue";
import VueScrollTo from "vue-scrollto";

const router = createRouter({
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  history: createWebHistory(import.meta.env.BASE_URL),
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
          name: "About Us",
          component: () => import("@/views/about/Index.vue"),
          children: [
            {
              path: "/about",
              name: "About Us",
              component: () => import("@/views/about/About.vue"),
            },
            {
              path: "/about/history",
              name: "History",
              component: () => import("@/views/about/About.vue"),
              meta: { position: "history-box" },
            },
            {
              path: "/about/facilities",
              name: "Facilities",
              component: () => import("@/views/about/About.vue"),
              meta: { position: "facilities-box" },
            },
            {
              path: "/about/facilities/spiro",
              name: "SPIRO Site",
              component: () => import("@/views/about/SpiroSite.vue"),
            },
            {
              path: "/about/facilities/pine",
              name: "PINE Site",
              component: () => import("@/views/about/PineSite.vue"),
            },
            {
              path: "/about/facilities/intellim",
              name: "OBiO Intelli-M",
              component: () => import("@/views/about/IntelliM.vue"),
            },
            // {
            //   path: "/team",
            //   name: "Leadership Team",
            //   component: () => import("@/views/about/Team.vue"),
            // },
          ],
        },
        {
          path: "/capability",
          name: "Capability & Commitment",
          component: () => import("@/views/capability/Index.vue"),
          children: [
            {
              path: "/capability/industrialized",
              name: "Industrialize Your Products",
              component: () => import("@/views/capability/Index.vue"),
              meta: { position: "industrialize-dom" },
            },
            {
              path: "/capability/commitment",
              name: "Our Commitment: FAST",
              component: () => import("@/views/capability/Index.vue"),
              meta: { position: "commitment-box" },
            },
          ],
        },
        {
          path: "/cro",
          name: "CRO Service",
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
              path: "/cdmo/manufacturing",
              name: "Manufacturing",
              component: () => import("@/views/cdmo/Cdmo.vue"),
              meta: { position: "manufacturing-box" },
            },
            {
              path: "/cdmo/cdmo",
              name: "CDMO Service",
              component: () => import("@/views/cdmo/Cdmo.vue"),
              meta: { position: "cdmo-service-box" },
            },
            {
              path: "/cdmo/innovation",
              name: "Innovation",
              component: () => import("@/views/cdmo/Cdmo.vue"),
              meta: { position: "innovation" },
            },
            {
              path: "/cdmo/process_development",
              name: "Process Development",
              component: () => import("@/views/cdmo/Process.vue"),
            },
            {
              path: "/cdmo/cgmp",
              name: "cGMP Manufacturing",
              component: () => import("@/views/cdmo/cgmp/Index.vue"),
              children: [
                {
                  path: "/cdmo/cgmp",
                  name: "cGMP Manufacturing",
                  component: () => import("@/views/cdmo/cgmp/Cgmp.vue"),
                },
                {
                  path: "/cdmo/cgmp/viral_vectors",
                  name: "Viral Vector",
                  component: () => import("@/views/cdmo/cgmp/Vector.vue"),
                },
                {
                  path: "/cdmo/cgmp/oncolytic_virus",
                  name: "Oncolytic Virus",
                  component: () => import("@/views/cdmo/cgmp/Virus.vue"),
                },
                {
                  path: "/cdmo/cgmp/cell_therapy_products",
                  name: "Cell Therapy Products",
                  component: () => import("@/views/cdmo/cgmp/Products.vue"),
                },
                {
                  path: "/cdmo/cgmp/prasmid_nucleotides",
                  name: "Plasmid & Nucleotides",
                  component: () => import("@/views/cdmo/cgmp/Nucleotides.vue"),
                },
              ],
            },
            {
              path: "/cdmo/quality_regulatory",
              name: "Quality & Regulatory",
              component: () => import("@/views/cdmo/Quality.vue"),
            },
            {
              path: "/cdmo/cold_chain",
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
          path: "/insight",
          name: "news",
          component: () => import("@/views/insights/Index.vue"),
          children: [
            {
              path: "/insight",
              name: "News and Events",
              component: () => import("@/views/insights/Insights.vue"),
            },
            {
              path: "/insight/news",
              name: "Press Releases",
              component: () => import("@/views/insights/Releases.vue"),
            },
            {
              path: "/insight/events",
              name: "Events",
              component: () => import("@/views/insights/EventsList.vue"),
            },
            {
              path: "/insight/inquiry",
              name: "Inquiry",
              component: () => import("@/views/insights/Inquiry.vue"),
            },
            {
              path: "/insight/partnership",
              name: "Partnership",
              component: () => import("@/views/insights/Inquiry.vue"),
            },
          ],
        },
        {
          name: "News Details",
          path: "/news-details/:type/:id",
          component: () => import("@/views/insights/Detail.vue"),
        },
        {
          path: "/contact",
          name: "Contact Us",
          component: () => import("@/views/contact/Contact.vue"),
        },
        {
          path: "/careers",
          name: "Careers",
          component: () => import("@/views/careers/Index.vue"),
          children: [
            {
              path: "/about/mission",
              name: "Mission",
              component: () => import("@/views/careers/Index.vue"),
              meta: { position: "mission-box" },
            },
          ],
        },
        {
          path: "/careers/life",
          name: "Life at OBIO",
          component: () => import("@/views/careers/Life.vue"),
        },
        {
          path: "/careers/job",
          name: "Job Opening",
          component: () => import("@/views/careers/Job.vue"),
        },
        // {
        //   path: "/life",
        //   name: "Life in OBIO",
        //   component: () => import("@/views/careers/Life.vue"),
        // },
        // {
        //   path: "/job",
        //   name: "Job Opening",
        //   component: () => import("@/views/careers/Job.vue"),
        // },
        // {
        //   path: "/investor-relations",
        //   name: "investor-relations",
        //   component: InvestorRelationsView,
        // },
      ],
    },
  ],
});
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
  const position = to.meta.position || null;
  if (position) {
    nextTick(() => {
      VueScrollTo.scrollTo(document.getElementById(position), 500);
    });
  }
});

export default router;
